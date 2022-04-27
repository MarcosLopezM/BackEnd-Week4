const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");
const FizzbuzzService = require("./../../lib/services/FizzBuzzService");

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerInMission = ExplorerService.filterByMission(explorers, mission);

        return explorerInMission;
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        return explorersInMission;
    }

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);

        return explorersInMission;
    }

    static fizzBuzztest(number) {
        const fizzBuzzdilemma = FizzbuzzService.applyValidationInNumber(number);
        
        return fizzBuzzdilemma;
    }
}

module.exports = ExplorerController;