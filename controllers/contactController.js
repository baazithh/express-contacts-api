const model = require('../models/contactModel');

const getContacts = (req, res) => {
    const contacts = model.getAll();
    res.json(contacts);
};

const addContact = (req, res) => {
    const newContact = {
        id: Date.now().toString(), // Convert to string to match the frontend ID check
        name: req.body.name,
        email: req.body.email
    };

    // 🚨 FIX 1: Pass 'newContact', not 'addContact' (the function)
    model.add(newContact); 
    res.status(201).json(newContact);
};

const deleteContact = (req, res) => {
    // 🚨 FIX 2: Use the raw ID or ensure types match (Model usually stores strings/numbers)
    const id = req.params.id; 
    model.remove(id);
    
    // 🚨 FIX 3: It is res.send (lowercase 's'), not res.Send
    res.send('Deleted'); 
};

module.exports = { getContacts, deleteContact, addContact };