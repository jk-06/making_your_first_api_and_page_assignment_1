const express = require('express');
const app = express();

app.get('/assistant/greet', (req, res) => {
  const userName = req.query.name;

  // Check if the name parameter is provided
  if (!userName) {
    return res.status(400).send("Name is required as a query parameter.");
  }

  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const currentDay = daysOfWeek[new Date().getDay()];

  // Determine the appropriate day message
  let dayMessage = "Have a wonderful day!";
  if (currentDay === "Monday") {
    dayMessage = "Happy Monday! Start your week with energy!";
  } else if (currentDay === "Friday") {
    dayMessage = "It's Friday! The weekend is near!";
  }

  // Respond with the full message
  const responseMessage = `Hello ${userName}! Welcome to our assistant app! ${dayMessage}`;
  res.send(responseMessage);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
