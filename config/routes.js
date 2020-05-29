const express=require('express')
const router=express.Router()
const {authenticateUser}=require('../app/middlewares/authentication')
const contactsController=require('../app/controller/ContactsController')

router.get('/contacts',authenticateUser,contactsController.list)
router.post('/contacts',authenticateUser,contactsController.create)
router.get('/contacts/:id',authenticateUser,contactsController.show)
router.put('/contacts/:id', authenticateUser,contactsController.update)
router.delete('/contacts/:id', authenticateUser, contactsController.destroy)

module.exports=router