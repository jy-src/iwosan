const mongoose = require("mongoose");
const { connectDB, dropDB, dropCollections } = require("./setuptestdb");
const Patient = require("../../models/patientModel");

beforeAll(async () => {
	await connectDB();
});
afterAll(async () => {
	await dropDB();
});
afterEach(async () => {
	await dropCollections();
});

describe("Patient Model", () => {
	test("should create a patient document successfully", async () => {
		let validPatient = {
			name: "Joshua Yohanna",
			email: "jy@example.com",
			password: "test1234",
		};
		const newPatient = new Patient(validPatient);
		await newPatient.save();
		expect(newPatient._id).toBeDefined();
		expect(newPatient.name).toBe(validPatient.name);
		expect(newPatient.email).toBe(validPatient.email);
	});

	test("should fail for patient without required fields", async () => {
		let invalidPatient = {
			name: "Joshua Yohanna",
			email: "jy@.com",
			password: "test123",
		};
		try {
			const newPatient = new Patient(invalidPatient);
			await newPatient.save();
		} catch (error) {
			expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
			expect(error.errors.email).toBeDefined();
			expect(error.errors.password).toBeDefined();
		}
	});
});
