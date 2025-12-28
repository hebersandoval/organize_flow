import 'dotenv/config';

// Local imports
import { db } from './libs/dbConnect.js';

const users = [
    {
        username: 'bob',
        email: 'bob@mail.com',
        password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
        avatar: 'https://i.pravatar.cc/150',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        username: 'sara',
        email: 'sara@mail.com',
        password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
        avatar: 'https://i.pravatar.cc/150',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

const tasks = [
    {
        name: 'Read more books',
        description: 'Finish reading the book in your hand',
        priority: 'not urgent',
        due: new Date().toISOString(),
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        name: 'Learn to speak French',
        description: 'Learn to speak French before you take a trip to France',
        priority: 'urgent',
        due: new Date().toISOString(),
        status: 'open',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];

try {
    // Seeding users
    let collection = await db.collection('users');
    console.log('[seed]', 'Seeding users...');
    const result = await collection.insertMany(users);
    console.log(result.insertedIds);
    console.log('[seed]', 'Seeding users -> Done');

    // Seeding tasks
    tasks[0].owner = result.insertedIds[0];
    tasks[1].onwer = result.insertedIds[1];

    collection = await db.collection('tasks');
    console.log('[seed]', 'Seeding tasks...');
    await collection.insertMany(tasks);
    console.log('[seed]', 'Seeding tasks -> Done');

    console.log('[seed]', 'All done');
} catch (error) {
    console.log('[seed]', 'Error:', error);
}

process.exit();
