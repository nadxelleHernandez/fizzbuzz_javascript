console.log('Hello world!');
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

console.log(getRandomNumber(10));
console.log(getRandomNumber(100));

const getCurrentTime = () => {
  const currentDate = new Date();
  return (
    currentDate.getHours() +
    ':' +
    currentDate.getMinutes() +
    ':' +
    currentDate.getSeconds()
  );
};

console.log(`The current time is ${getCurrentTime()}.`);
