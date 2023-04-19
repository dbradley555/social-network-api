const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
  getRandomUsername,
  getRandomReactions,
  getRandomThoughts,
} = require('./data');

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  // Create empty array to hold the students
  const thoughts = [];
  const users = [];

  // Loop 20 times -- add students to the students array

  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const reactions = getRandomReactions(5);
    const username = getRandomUsername();
    const email = `${username}${Math.floor(
      Math.random() * (99 - 18 + 1) + 18
    )}@email.com`;
    const thoughtText = getRandomThoughts();
    thoughts.push({
      thoughtText,
      username,
      reactions,
    });

    // Add students to the collection and await the results
    await Thought.collection.insertOne({
      thoughtText: thoughtText,
      username: username,
      reactions: [...reactions],
    });
    await User.collection.insertOne({
      username: username,
      email: email,
      thoughts: [...thoughts],
    });
  }

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
