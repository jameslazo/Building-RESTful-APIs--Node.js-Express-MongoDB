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
    }
};