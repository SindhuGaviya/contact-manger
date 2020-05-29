const mongoose=require('mongoose')

const setupDB=()=>{
mongoose.connect('mongodb://localhost:27017/userAuthentication')
.then(function(){
    console.log('connected to db')
})
.catch(function(){
    console.log('err')
})
}

module.exports=setupDB