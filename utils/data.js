const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const thoughts = [
  'The scream in your head will never be out of breath.',

  'Do fish in water have their hidden life where they go to school, hang out, study, and get married?',

  'If everyone had roller skates instead of feet, would there be cars or would they go rollerblading everywhere?',

  'We will never know what memories we had as children and we will never remember them.',

  'We know our parents for whole our life, while they know us only part of their lives.',

  'Someone was born at this very moment, and someone lost his life at this very moment.',

  'Our brain has never experienced some things, and yet it can tailor a scenario in its head as if it had happened.',

  'If the tomato is a fruit, then ketchup is the jam.',

  'If I were a book, what title would I have?',

  'Valentine’s Day is known for its red color, red roses, red hearts … Would it be strange if another color was used for Valentine’s Day instead of red? And why red? Why does red associate us with love?',

  'The hospital where you were born is the only building you left without entering.',

  'Humans invented the sounds produced by dinosaurs.',

  'Maybe it’s better not to kill the spider, because if I kill him, his family and friends can come to the funeral and in that way, I will summon many more spiders.',

  'Who invented the words and names of certain objects and how did it occur to someone to call a chair just like that – “chair”?',

  'How does our voice in our head sound?',

  'Because you’re blinking, you’ve never seen the whole movie in your life.',

  'What if you passed a missing person and you didn’t know she was missing?',

  'What if we passed a serial killer and he weighed us and thought – “I don’t want this.”',

  'Who taught the first teacher? Who cut the first hairdresser’s hair?',

  'When you wait for a waiter, you become a waiter.',

  'What if we met someone in a dream and had the same dream, but we will never find out?',

  'We all have three voices in us. One that we hear in our head, one that we hear when we speak, and one that other people hear.',

  'Why can’t we invent a new color?',

  'The letter x is used more in mathematics than in grammar and sentences.',

  'Do animals think we are aliens because we don’t look like them?',

  'If we were called differently, would we behave like a different person?',
];
const reactions = [
  'Wow',
  'Amazing',
  'Awesome',
  'Yay!',
  'Congratulations!',
  'Sucks',
  ':(',
  ':)',
  'Happy for you',
  'Miss you',
  'You are so cool',
  'You are the best',
  'Wish I was you',
  'Come Home',
  'So cool',
  'Love this',
  'Hate this',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUsername = () =>
  `${getRandomArrItem(names)}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

const getRandomThoughts = () => `${getRandomArrItem(thoughts)}`;

// Function to generate random assignments that we can add to student object.

const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactions),
      username: getRandomUsername(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomReactions, getRandomThoughts };
