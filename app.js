const express = require("express");
const app = express();
var addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const date = new Date();
  const addedDays = addDays(date, 100);
  response.send(
    `${addedDays.getDate()}/${
      addedDays.getMonth() + 1
    }/${addedDays.getFullYear()}`
  );
});
module.exports = app;
