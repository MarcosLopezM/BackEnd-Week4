class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => {
            return explorer.mission === mission;
        });

        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => {
            return explorer.mission === mission;
        });

        return explorerByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = this.filterByMission(explorers, mission);
        const explorersUsernameByMission = explorersByMission.map((explorer) => {
            return explorer.githubUsername;
        });

        return explorersUsernameByMission;
    }
}

module.exports = ExplorerService;