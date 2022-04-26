const Reader = require('./../../lib/utils/Reader');
const ExplorerService = require('../../lib/services/ExplorerService');

describe("Test para ExplorerService", () => {
    test("1) Amount of explorer in certain mission", () => {
        const explorers = Reader.readJsonFile('explorers.json');
        const explorerInNode = ExplorerService.getAmountOfExplorersByMission(explorers, 'node');

        expect(explorerInNode).toBe(10)
    });
})