const messages = [
  "Facundo",
  "Anakin",
  "Luke",
  "Darth Vader",
  "Obi Wan",
  "R2D2",
  "Han Solo"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
