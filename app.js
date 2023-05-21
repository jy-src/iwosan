const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");

// import error handlers
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// import routers
const patientRouter = require("./routes/patientRoutes.js");

const app = express();

app.use(cors());
app.options("*", cors());
app.use(helmet.crossOriginResourcePolicy("cross - origin"));

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: "Too many requests from this IP address, please try again later.",
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(compression());

// routes
app.get("/api/v1", (req, res, next) => {
	res.status(200).json({
		message: "Iwosan API",
		version: "1.0.0",
		endpoints: {
			patients: "/patients",
		},
	});
});

app.use("/api/v1/patients", patientRouter);

app.all("*", (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
