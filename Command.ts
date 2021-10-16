// pego o retorno de algo e quero q ele seja da forma A ou forma B
// exemplo converter o retorno de uma chave de forma mais simple ou complexa

interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    private payload: {
        type: string
    };

    constructor(payload: any) {
        this.payload = payload;
    }

    execute(): void {
       // convert the payload in one format
       console.log({
           ...this.payload,
           hasChange: false
       })
    }

}


class ComplexCommand implements Command {
    private payload: {
        type: string
        hasChange: boolean
    };

    constructor(payload: any) {
        this.payload = payload;
    }

    execute(): void {
       // convert the payload in one format
       console.log({
           ...this.payload,
           hasChange: false
       })
    }

}


class Invoker {
    private firstCommand: Command;
    private secondCommand: Command;

    setInitialCommand(command: Command) {
        this.firstCommand = command;
    }

    setFinishedCommand(command: Command) {
        this.secondCommand = command;
    }

    execute() {
        this.firstCommand.execute();
        this.secondCommand.execute();
    }
}

const simpleCommand = new SimpleCommand({
    type: "Simple"
})

const complexCommand = new ComplexCommand({
    type: "Simple",
    hasChange: false
})

const invoker = new Invoker();
invoker.setInitialCommand(complexCommand);
invoker.setFinishedCommand(simpleCommand);

invoker.execute();