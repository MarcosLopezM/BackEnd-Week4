const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (request, response) => {
    response.json({message: "FizzBuzz API welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);

    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersAmountByMission(mission);

    response.json({mission: request.params.mission, quantity: explorersInMission});
});

app.listen(port, () => {
    console.log(`FizzBuzz API listening at http://localhost:${port}`);
});