const mongoose = require("mongoose");

module.exports = {
    
    async connectMongoose (){
        try{
            await mongoose.connect(process.env.MONGOOSE_URI)
            console.log('DB Connection Success')
        }
        catch(err){
            console.log(err)
        }
    }
}