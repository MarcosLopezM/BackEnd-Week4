const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzBuzzService");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerInMission = ExplorerService.filterByMission(explorers, mission);

        return explorerInMission;
    }
}

module.exports = ExplorerController;