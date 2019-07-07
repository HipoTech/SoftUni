class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
        this.openedPrograms = []
    }
    installAProgram(name, requiredSpace) {
        if (this.hddMemory - requiredSpace <= 0) {
            throw new Error('There is not enough space on the hard drive');
        } else {
            this.hddMemory -= requiredSpace;
            const newProgram = {
                name: name,
                requiredSpace: requiredSpace
            }
            this.installedPrograms.push(newProgram);
            return newProgram;
        }
    }

    uninstallAProgram(name) {
        for (let i = 0; i < this.installedPrograms.length; i++) {
            if (this.installedPrograms[i].name === name) {
                this.hddMemory += +this.installedPrograms[i].requiredSpace;
                this.installedPrograms.splice(i, 1);
                return this.installedPrograms;
            } else {
                throw new Error('Control panel is not responding');
            }

        }
    }

    openAProgram(name) {
        let foundProgram = false;
        for (let i = 0; i < this.installedPrograms.length; i++) {
            if (this.installedPrograms[i].name === name) {
                if (this.openedPrograms.includes(name)) {
                    throw new Error(`The ${name} is already open`);
                } else {
                    let programRequiredSpace = this.installedPrograms[i].requiredSpace;
                    let totalRamMemory = this.ramMemory;
                    let ramMemoryNeeded = (programRequiredSpace / totalRamMemory) * 1.5;

                    let totalCpuMemory = this.cpuGHz;
                    let cpuMemoryNeeded = ((programRequiredSpace / totalCpuMemory) / 500) * 1.5;
                    if (this.ramMemory - this.ramMemory * (ramMemoryNeeded / 100) <= 0 &&
                        this.cpuGHz - this.cpuGHz * (cpuMemoryNeeded / 100) <= 0
                    ) {
                        throw new Error(`${name} caused out of memory exception`);
                    }
                    if (this.ramMemory - this.ramMemory * (ramMemoryNeeded / 100) <= 0) {
                        throw new Error(`${name} caused out of memory exception`)
                    } else if (this.cpuGHz - this.cpuGHz * (cpuMemoryNeeded / 100) <= 0) {
                        throw new Error(`${name} caused out of cpu exception`)
                    } else {
                        foundProgram = true;
                        this.openedPrograms.push(name);

                        this.ramMemory -= this.ramMemory * (ramMemoryNeeded / 100);


                        this.cpuGHz -= this.cpuGHz * (cpuMemoryNeeded / 100)

                        const openedProgram = {
                            name: name,
                            ramUsage: ramMemoryNeeded,
                            cpuUsage: cpuMemoryNeeded
                        }

                        this.taskManager.push(openedProgram);
                        return openedProgram;

                    }

                }
            }

        }
        if (!foundProgram) {
            foundProgram = false;
            throw new Error(`The ${name} is not recognized`);

        }

    }

    taskManagerView() {
        let stringToReturn = ''
        if (this.taskManager.length === 0) {
            throw new Error(`All running smooth so far`)
        } else {
            this.taskManager.forEach(program => {
                stringToReturn += `Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%\n`;
            });
            return stringToReturn;
        }

    }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());
