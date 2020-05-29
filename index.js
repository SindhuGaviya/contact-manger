const express=require('express')
const {mongoose}=require('./config/database')
const cors=require('cors')
const {usersRouter}=require('./app/controller/UsersController')
const router=require('./config/routes')
const app=express()
const port=3001
const setupDB=require('./config/database')



app.use(express.json())
app.use(cors())
app.use('/users',usersRouter)
app.use('/',router)

setupDB()

app.listen(port,function(){
    console.log('listening to port ', port)
})