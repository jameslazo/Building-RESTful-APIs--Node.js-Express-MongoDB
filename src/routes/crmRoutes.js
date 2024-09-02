import { addNewContact, getContacts, getContactWithID } from '../controllers/crmControllers';

const routes = (app) => {
    app.route('/contact')
    // get all contacts
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts
    )

    // post new contact
    .post(addNewContact);

    app.route('/contact/:contactId')
    // get specific contact
    .get(getContactWithID)

    .put((req, res) =>
        res.send('PUT request successful!')
    )

    .delete((req, res) =>
        res.send('DELETE request successful!')
    )
};

export default routes;