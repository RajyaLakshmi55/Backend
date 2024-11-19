// This module sets up the contact data structure in MySQL.
export const createContactsTable = async (db) => {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phoneNo VARCHAR(10) NOT NULL,
                message TEXT NOT NULL,
                address VARCHAR(255),
                subject VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('Contacts table ensured');
    } catch (error) {
        console.error('Error creating contacts table:', error.message);
    }
};
