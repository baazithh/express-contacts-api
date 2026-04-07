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
    try {
        const id = req.params.id; 
        
        // Log to your terminal so you can see what's happening
        console.log(`Attempting to delete ID: ${id}`);
        
        model.remove(id);
        res.status(200).send('Deleted successfully');
    } catch (error) {
        console.error("Delete Error:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = { getContacts, deleteContact, addContact };