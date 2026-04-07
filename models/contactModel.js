// Use 'let' so the array can be reassigned during the 'remove' process
let contacts = [
    { id: "1", name: "Alpha Protocol", email: "system@holo.net" }
];

/**
 * Returns the entire collection of contacts
 */
const getAll = () => {
    return contacts;
};

/**
 * Pushes a new contact object into the array
 * @param {Object} contact - { id, name, email }
 */
const add = (contact) => {
    contacts.push(contact);
};

/**
 * Removes a contact by filtering the array
 * @param {string|number} id - The unique ID to purge
 */
const remove = (id) => {
    // 1. We remove the extra '.contacts' and only use the array itself
    // 2. We overwrite the original 'contacts' array with the new, filtered one
    // 3. We convert both IDs to String() to prevent any type-mismatch bugs
    contacts = contacts.filter(c => String(c.id) !== String(id));
};

module.exports = {
    getAll,
    add,
    remove
};