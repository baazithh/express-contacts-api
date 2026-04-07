const model=require('../modules/contactModel');
const getContacts=(req,res) =>{
    const newContact ={
        id:Date.now(),
        name : req.body.name,
        email : req.body.email
    };
    model.add(newContact);
    res.status(201).json(newContact);
};
const deleteContact =(req,res)=>{
    const id = parseInt(req.params.id);
    model.remove(id);
    res.Send('Deleted')
};
module.exports={getContacts,deleteContact,newContact}