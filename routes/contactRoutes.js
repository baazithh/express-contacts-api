const express = require ('express');
const router = express.Router();
const controller = require("../controllers/contactController")
router.get('/contacts', controller.getContacts);
router.post('/contacts', controller.addContact);
router.delete('/contacts/:id',controller.deleteContact);
module.exports = router;