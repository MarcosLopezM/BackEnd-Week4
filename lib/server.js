const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (request, response) => {
    response.json({message: "FizzBuzz API welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API listening at http://localhost:${port}`);
});