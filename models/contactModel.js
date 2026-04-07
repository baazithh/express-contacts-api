let contacts = [];
const getAll =()=> contacts;
const add =(contact) =>{
    contacts.push(contact);
};
const remove = (id)=>{
    contacts.contacts.filter(c=>c.id !==id);
};
module.exports={getAll,add,remove}