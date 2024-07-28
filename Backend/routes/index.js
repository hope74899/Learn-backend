import express from 'express';
const router = express.Router();
import { User } from '../models/index.js';

router.post('/api/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send('Error creating User: ' + error.message);
    }
})
router.post('/api/loginhere', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne(
            {
                $and:
                    [
                        { email: email },
                        { password: password }
                    ]
            }
        );
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send('invalid email and password: ' + error.message);
    }
})

export default router;
