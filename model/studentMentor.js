const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    studentId:{
        type: Number,
        maxLength: 4,
        required: true
    },
    studentName:{
        type: String,
        maxLength: 20,
        required: true
    },
    age:{
        type: Number,
        max: 20,
        required: true
    },
    grade:{
        type: Number,
        max: 12,
        required: true
    },
    contact:{
        type: Number,
        maxLength: 10,
        required: true
    }
},{strict: false})

const mentorSchema = new Schema({

    mentorId:{
        type: Number,
        required: true
    },
    mentorName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    yearsOfExp:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    }
},{strict: false})

const student = mongoose.model('students', studentSchema)
const mentor = mongoose.model('mentors', mentorSchema)

module.exports = {student, mentor}