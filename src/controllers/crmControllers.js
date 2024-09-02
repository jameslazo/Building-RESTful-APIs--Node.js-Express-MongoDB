import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = async (req, res) => {
    try {
        let addNewContact = new Contact(req.body);

        let contact = await addNewContact.save();
            
        res.json(contact);
    }
    catch (err) {
        res.status(500).send(err);
    };
};

export const getContacts = async (req, res) => {
    try {
        let contacts = await Contact.find({});
        res.json(contacts);
    }
    catch (err) {
        res.status(500).send(err); 
    };
};

export const getContactWithID = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.contactId);
        res.json(contact);
    }
    catch (err) {
        res.status(500).send(err); 
    };
};