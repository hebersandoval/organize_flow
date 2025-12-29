import { ObjectId } from 'mongodb';

// Local imports
import { db } from '../libs/dbConnect.js';

const collection = await db.collection('users');

export const test = async (req, res) => {
    let results = await collection.find({}).toArray();
    res.status(200).json(results);
};

export const getUser = async (req, res, next) => {
    try {
        const query = { _id: new ObjectId(req.params) };
        const user = await collection.findOne(query);

        if (!user) {
            return next({ status: 404, message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        next({ status: 500, error });
    }
};
