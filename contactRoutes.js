import { Router } from 'express';
import {
    handleContactUs,
    handleAllMessages,
    handleMailMessage,
} from '../controllers/contactController.js';

const router = Router();

router.post('/submit', handleContactUs);
router.get('/messages', handleAllMessages);
router.get('/messages/email/:mail', handleMailMessage);

export default router;
