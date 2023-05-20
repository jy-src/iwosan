const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const patientSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide your name."],
		},
		email: {
			type: String,
			required: [true, "Please provide your email."],
			unique: true,
			lowercase: true,
			validate: [validator.isEmail, "Please provide a valid email address."],
		},
		password: {
			type: String,
			required: [true, "Please provide a password."],
			minlength: 8,
			select: false,
		},
	},
	{
		timestamps: true,
		select: "-createdAt -updatedAt",
	}
);

patientSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	this.password = await bcrypt.hash(this.password, 12);
});

patientSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
