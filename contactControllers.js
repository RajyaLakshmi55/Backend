import { db } from '../connection.js';
import validator from 'validator';

export const handleContactUs = async (req, res) => {
    const { name, email, phoneNo, message, address, subject } = req.body;

    if (!validator.isEmail(email)) {
        return res.status(400).json({ msg: 'Invalid email address' });
    }

    if (!/^[0-9]{10}$/.test(phoneNo)) {
        return res.status(400).json({ msg: 'Invalid phone number' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO contacts (name, email, phoneNo, message, address, subject) VALUES (?, ?, ?, ?, ?, ?)',
            [name, email, phoneNo, message, address, subject]
        );
        res.status(201).json({ msg: 'Message submitted successfully', data: result });
    } catch (error) {
        res.status(500).json({ msg: `Error saving contact: ${error.message}` });
    }
};

export const handleAllMessages = async (res) => {
    try {
        const [rows] = await db.query('SELECT * FROM contacts');
        res.status(200).json({ msg: 'Messages retrieved successfully', data: rows });
    } catch (error) {
        res.status(500).json({ msg: `Error retrieving data: ${error.message}` });
    }
};

export const handleMailMessage = async (req, res) => {
    const { mail } = req.params;

    try {
        const [rows] = await db.query('SELECT * FROM contacts WHERE email = ?', [mail]);
        res.status(200).json({ msg: 'Messages for the email retrieved', data: rows });
    } catch (error) {
        res.status(500).json({ msg: `Error fetching data: ${error.message}` });
    }
};
