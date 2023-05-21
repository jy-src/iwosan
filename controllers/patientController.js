const Patient = require("../models/patientModel");
const handlerFactory = require("./handlerFactory");

exports.createPatient = handlerFactory.createOne(Patient);
exports.getPatient = handlerFactory.getOne(Patient);
exports.getAllPatients = handlerFactory.getAll(Patient);
exports.updatePatient = handlerFactory.updateOne(Patient);
exports.deleteOne = handlerFactory.deleteOne(Patient);
