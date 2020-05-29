const mongoose=require('mongoose')

const Schema=mongoose.Schema
const contactSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator:function(email){
            return this.validator.isEmail(email)
        },
        message:function(){
            return 'invalid email'
        }
    },
    mobile:{
        type:String,
        required:true,
        maxlength:10
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }

})

const Contact=mongoose.model('Contact',contactSchema)

module.exports=Contact