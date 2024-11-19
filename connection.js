import mysql from 'mysql2/promise';
import { config } from './config.js';

export const db = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
});
