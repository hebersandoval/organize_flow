import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Local imports
import { db } from '../libs/dbConnect.js';

const collection = await db.collection('users');

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const query = {
            $or: [{ email }, { username }],
        };

        const existingUser = await collection.findOne(query);
        if (existingUser) {
            return next({
                status: 422,
                message: 'Email or Username is already registered.',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = {
            username,
            email,
            password: hashedPassword,
            avatar: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toDateString(),
        };
    } catch (error) {
        next({ status: 500, error });
    }
};
