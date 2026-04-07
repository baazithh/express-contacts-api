const model = require('../models/contactModel');

// GET all contacts
const getContacts = (req, res) => {
    try {
        const contacts = model.getAll();
        res.json(contacts);
    } catch (error) {
        console.error("GET Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// POST a new contact
const addContact = (req, res) => {
    try {
        const { name, email } = req.body;

        // Validation
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
    } catch (error) {
        console.error("POST Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// DELETE a contact
const deleteContact = (req, res) => {
    try {
        const { id } = req.params;

        // Check if contact exists before deleting
        const beforeCount = model.getAll().length;

        model.remove(id);

        const afterCount = model.getAll().length;

        if (beforeCount === afterCount) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json({ message: 'Deleted successfully' });

    } catch (error) {
        console.error("DELETE Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getContacts,
    addContact,
    deleteContact
};