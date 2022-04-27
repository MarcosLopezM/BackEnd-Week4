const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () => {
    test("1) Explorers in certain mission", () => {
        const explorerInNode = ExplorerController.getExplorersByMission("node");

        expect(explorerInNode[0].mission).toMatch(/node/);
    });
});