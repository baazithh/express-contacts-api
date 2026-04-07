const model=require('../models/contactModel');
const getContacts=(req,res) =>{
    const contacts = model.getAll();
    res.json(contacts);
}
const addContact = (req, res) => {
    const newContact ={
        id:Date.now(),
        name : req.body.name,
        email : req.body.email
    };
    model.add(addContact);
    res.status(201).json(newContact);
};
const deleteContact =(req,res)=>{
    const id = parseInt(req.params.id);
    model.remove(id);
    res.Send('Deleted')
};
module.exports={getContacts,deleteContact,addContact}