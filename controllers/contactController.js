const model = require('../models/contactModel');

// GET all contacts
const getContacts = (req, res) => {
    const contacts = model.getAll();
    res.json(contacts);
};

// POST a new contact
const addContact = (req, res) => {
    const { name, email } = req.body;

    // Simple Validation
    if (!name || !email) {
        return res.status(400).json({ message: "Name and Email are required" });
    }

    const newContact = {
        id: Date.now().toString(),
        name,
        email
    };

    model.add(newContact); 
    res.status(201).json(newContact);
};

// DELETE a contact
const deleteContact = (req, res) => {
    try {
        const { id } = req.params;
        
        // Logic check: does the contact exist?
        model.remove(id); 
        
        res.status(200).send('Deleted successfully'); 
    } catch (error) {
        console.error("Backend Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getContacts, deleteContact, addContact };