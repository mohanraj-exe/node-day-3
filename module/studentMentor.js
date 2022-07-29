const studMentorModel = require('../model/studentMentor');

module.exports.findStudent = async (req,res,next) => {

    try{
        var response = await studMentorModel.student.find()
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}

module.exports.findMentor = async (req,res,next) => {

    try{
        var response = await studMentorModel.mentor.find()
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}

module.exports.createStudent = async (req,res,next) => {

    const createStudent = new studMentorModel.student({...req.body.student})
    try{
        var response = await createStudent.save()
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}

module.exports.createMentor = async (req,res,next) => {

    const createMentor = new studMentorModel.mentor({...req.body.mentor})
    try{
        var response = await createMentor.save()
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}

module.exports.updateMentor = async (req,res,next) => {

    try{
        var response = await studMentorModel.mentor.findByIdAndUpdate(req.params.mentorId,{...req.body.mentor}, {new:true})
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}

module.exports.updateStudent = async (req,res,next) => {

    try{
        var response = await studMentorModel.student.findByIdAndUpdate(req.params.studentId,{...req.body.student}, {new:true})
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
}

module.exports.listStudNotMentor = async (req,res,next) => {

    try{
        const mongooseResponse = await studMentorModel.student.aggregate([
            {
                $match:{
                    mentor:"null"
                }
            }
        ])
        res.send(mongooseResponse);
    }
    catch(err){
        console.log(err)
    }
}

module.exports.listStudMentor = async (req,res,next) => {

    try{
        const mongooseResponse = await studMentorModel.mentor.aggregate([
            {
                $project:{
                    _id:0,
                    mentorId: 1,
                    mentorName: 1,
                    studentsID: "$students"
                }
            }
        ])
        res.send(mongooseResponse);
    }
    catch(err){
        console.log(err)
    }
}