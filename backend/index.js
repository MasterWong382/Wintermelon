const { response } = require("express");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/abc", (request, response) => {
  response.status(200).json({ message: "Quote of the day Sam is the best!" });
});

app.get("/createAccount", (request, response) => {
  response.status(200).json({ message: "Quote of the day Sam is the best!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
