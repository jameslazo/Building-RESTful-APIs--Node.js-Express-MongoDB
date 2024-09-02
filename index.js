import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import dotenv from 'dotenv';
const { resolveSoa } = require('dns');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

const app = express();
const PORT = 3000;

dotenv.config();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
    authSource: "admin",
    ssl: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server are running on port: ${PORT}`)
    );

app.listen(PORT, () => 
    console.log(`Your server is running on port: ${PORT}`)
);
