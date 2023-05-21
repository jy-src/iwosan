const Patient = require("../../models/patientModel");

const handlerFactory = require("../handlerFactory");
const AppError = require("../../utils/appError");

describe("Handler Factory", () => {
	test("should create a new document and return a success response", async () => {
		const req = {
			body: {
				name: "Joshua Yohanna",
				email: "jy@example.com",
				password: "test1234",
			},
		};

		const res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		const mockCreatedDoc = {
			name: "Joshua Yohanna",
			email: "jy@example.com",
			password: "test1234",
		};

		Patient.create = jest.fn().mockResolvedValue(mockCreatedDoc);

		await handlerFactory.createOne(Patient)(req, res);

		expect(Patient.create).toHaveBeenCalledWith(req.body);
		expect(res.status).toHaveBeenCalledWith(201);
		expect(res.json).toHaveBeenCalledWith({
			status: "success",
			data: {
				data: mockCreatedDoc,
			},
		});
	});

	test("should return the document with the specified ID", async () => {
		const mockReq = {
			params: {
				id: "mydocument123",
			},
		};

		const mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		const mockDoc = {
			id: "mydocument123",
			name: "Joshua Yohanna",
			email: "jy@example.com",
			password: "test1234",
		};

		const mockFindById = jest.spyOn(Patient, "findById");
		mockFindById.mockResolvedValue(mockDoc);

		await handlerFactory.getOne(Patient)(mockReq, mockRes, jest.fn());

		console.log("mockFindById calls:", mockFindById.mock.calls);

		expect(mockFindById).toHaveBeenCalledWith(mockReq.params.id);
		expect(mockRes.status).toHaveBeenCalledWith(200);
		expect(mockRes.json).toHaveBeenCalledWith({
			status: "success",
			data: {
				data: mockDoc,
			},
		});

		mockFindById.mockRestore();
	});

	test("should return an error if no document found with the specified ID", async () => {
		const mockReq = {
			params: {
				id: "invalidId",
			},
		};

		const mockRes = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn(),
		};

		const mockNext = jest.fn();

		const mockFindById = jest.spyOn(Patient, "findById");
		mockFindById.mockResolvedValue(null);

		await handlerFactory.getOne(Patient)(mockReq, mockRes, mockNext);

		expect(mockFindById).toHaveBeenCalledWith(mockReq.params.id);
		expect(mockNext).toHaveBeenCalledWith(
			new AppError("No document found with that ID", 404)
		);

		mockFindById.mockRestore();
	});
});
