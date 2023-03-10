const Patient = require("../models/Patient");
const Vital = require('../models/Vital')
const Sequelize = require('sequelize');
const shortid = require('shortid')

// Add new patient to dB
exports.createNewPatient = async (req, res) => {
    let { firstName, lastName, middleName, gender, dob, phoneNumber } = req.body;
  
    try {
        // Prevent any other users  apart from Clerks from accessing this resource
        if(req.user.role !== "Clerk"){
            return res.sendStatus(401)
        }

        // Validate fields
        if(!firstName || !lastName || !middleName || !gender || !dob || !phoneNumber) {
            return res.status(403).json({ code: 200, message: "Enter all fields!" })
        }

        // Insert into table
        const patient  = await Patient.create({
            firstName,
            lastName,
            patientId: shortid.generate(), // Generate unique ID's using short Id
            middleName,
            gender,
            dob,
            phoneNumber,
            paymentCategory: "Out of Pocket"
        })
        res.json({
            code: 200,
            message: "Operation successful",
            data: patient
        })
    }
    catch(error){
        res.status(500).json({
            code: 500,
            message: "Operation successful",
            error
        })
    }  
}

// Get all patients
exports.getAllPatients = (req, res) => {
    Patient.findAll()
    .then(patients => {
        res.json({
            code: 200,
            message: "Operation successful",
            data: patients
        })
    })
    .catch(err => {
        res.sendStatus(500)
    })
}

// Get a patient's details
exports.getPatientDetails = (req, res) => {
    Patient.findOne({
        where: {
            patientId: req.params.id
        }
    })
    .then(async patient => {
        const { patientId } = patient
        const vitals = await Vital.findOne({ where: { patientId }, order: [
            ['id', 'DESC']
        ]});

        res.json({
            code: 200,
            message: "Operation successful",
            data: {
                patient,
                vitals
            }
        })
    })
    .catch(err => {
        res.sendStatus(500)
    })
}


