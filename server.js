import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { db } from './connection.js';
import { createContactsTable } from './models/contact.model.js';
import contactRoutes from './routes/contactRoutes.js';
import { config } from './config.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/contacts', contactRoutes);

createContactsTable(db);

app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
});
