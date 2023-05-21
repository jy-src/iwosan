const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Patient = require("../models/patientModel");

const createAndSendToken = (user, statusCode, res) => {
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});

	const cookieOptions = {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
		),
		httpOnly: true,
	};

	if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

	res.cookie("jwt", token, cookieOptions);

	// Remove password from output
	user.password = undefined;

	res.status(statusCode).json({
		status: "success",
		data: {
			user,
		},
	});
};

exports.signup = catchAsync(async (req, res, _next) => {
	const newPatient = await Patient.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	createAndSendToken(newPatient, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		next(new AppError("Please provide login credentials.", 400));
	}

	const patient = await Patient.findOne({ email }).select("+password");

	if (
		!patient ||
		!(await patient.correctPassword(password, patient.password))
	) {
		return next(new AppError("Incorrect email or password", 401));
	}

	// OK.
	createAndSendToken(patient, 200, res);
});

exports.logout = (_req, res) => {
	res.cookie("jwt", "loggedout", {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true,
	});
	res.status(200).json({ status: "success" });
};

exports.protect = catchAsync(async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	} else if (req.cookies.jwt) {
		token = req.cookies.jwt;
	}

	if (!token) {
		return next(new AppError("Please log in to get access.", 401));
	}

	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

	const currentPatient = await Patient.findById(decoded.id);
	if (!currentPatient) {
		return next(
			new AppError(
				"The user belonging to this token does no longer exist.",
				401
			)
		);
	}

	req.patient = currentPatient;
	next();
});

exports.restrictTo =
	(...roles) =>
	(req, _res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new AppError("You do not have permission to perform this action.", 403)
			);
		}
		next();
	};
