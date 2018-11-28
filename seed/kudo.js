const randomNum = () => Math.ceil(Math.random() * 5);
const secondRand = num => {
  const rand = Math.ceil(Math.random() * 5);
  return rand === num ? (rand + 1 > 5 ? (rand + 1) % 5 : rand + 1) : rand;
};

module.exports = [
  {
    title: 'Congratulations',
    message: 'Great work on the promotion',
    toId: randomNum(),
    fromId: secondRand(randomNum())
  },
  {
    title: 'Promotion',
    message: 'Great work on the kudos',
    toId: randomNum(),
    fromId: secondRand(randomNum())
  },
  {
    title: 'Hey yaa',
    message: 'This is a hey yaa msg',
    toId: randomNum(),
    fromId: secondRand(randomNum())
  },
  {
    title: 'Congratulations Again!!!',
    message: 'This is a congrats msg',
    toId: randomNum(),
    fromId: secondRand(randomNum())
  },
  {
    title: 'New Kitty',
    message: 'Congrats on the new kitty',
    toId: randomNum(),
    fromId: secondRand(randomNum())
  },
  {
    title: 'Competition',
    message: 'Great work on winning',
    toId: randomNum(),
    fromId: secondRand(randomNum())
  }
];
