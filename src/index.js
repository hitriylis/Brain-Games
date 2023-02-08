const numbersCount = 99;

const generateRandom = () => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  return getRandomInt(numbersCount);
};
export default generateRandom;
