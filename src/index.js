const getRandom = (number) => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  return getRandomInt(number);
};

export default getRandom;
