const Contact=require('../model/contact')

module.exports.list=(req,res)=>{
    Contact.find({user:req.user._id})
    .then(contacts=>{
        res.json(contacts)
    })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const contact=new Contact(body)
    contact.user=req.user._id
    contact.save()
    .then(contact=>res.json(contact))
    .catch(err=>res.json(err))
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Contact.findOne({
        _id:id,
        user:req.user._id
    })
    .then(contact=>{
        if(contact){
            res.json(contact)
        }else{
            res.json({})
        }
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Contact.findByIdAndUpdate({
        _id:id,
        user:req.user._id
    },body,{new:true}
    )
    .then(contact=>{
        if(contact){
            res.json(contact)
        }else{
            res.json({})
        }
    })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Contact.findByIdAndDelete({
        _id:id,
        user:req.user._id
    })
    .then(contact=>{
        if(contact){
            res.json(contact)
        }else{
            res.json({})
        }
    })
}
