const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
  getRandomThoughts,
  usernames,
  getRandomReactions,
  searchByUsername,
  getRandomFriends,
} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  // const thoughts = getRandomThoughts(30);

  // const users = [];

  // for (let i = 0; i < usernames.length; i++) {
  //   let username = usernames[i];
  //   let email = `${username}${Math.floor(Math.random() * 99 + 1)}@gmail.com`;
  //   const filteredThoughts = [];
  //   thoughts.forEach((thought) => {
  //     if (thought.username === username) {
  //       filteredThoughts.push(thought);
  //     }
  //   });

  //   const friends = getRandomFriends(Math.floor(Math.random() * 10 + 1));
  //   users.push({
  //     username,
  //     email,
  //     thoughts: [filteredThoughts],
  //     friends,
  //   });
  // }

  for (let i = 0; i < 20; i++) {
    const thoughts = [];
    const username = usernames[i];
    const email = `${username}${Math.floor(Math.random() * 99 + 1)}@gmail.com`;

    for (let x = 0; x < Math.floor(Math.random() * 5 + 1); x++) {
      const reactions = getRandomReactions(Math.floor(Math.random() * 3 + 1));
      const thoughtText = getRandomThoughts();

      thoughts.push({
        thoughtText,
        username,
        reactions,
      });
    }

    await Thought.collection.insertMany(thoughts);
    await User.collection.insertOne({
      username,
      email,
      thoughts: [...thoughts],
    });
  }

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  // console.table(users);
  // console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
