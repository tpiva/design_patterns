interface MyInterface {
    request(): string;
}

class Target implements MyInterface {

    request() {
        return "I'm using target";
    }

}

class ConfuseTarget {

    weirdRequest(): string {
        return "I'm weird";
    }
}

class TargetAdapter implements MyInterface {
    private target: ConfuseTarget;

    constructor(newTarget: ConfuseTarget) {
        this.target = newTarget;
    }

    request(): string {
        return this.target.weirdRequest();
    }
}


class Client {
    private target: MyInterface;
    constructor(newTarget: MyInterface) {
        this.target = newTarget;
    }

    makeRequest(): string {
        return this.target.request();
    }
}

// tento usar o ConfuseTarget

const target = new Target();
const confuseTarget = new ConfuseTarget();


// vai quebrar
//const client_1= new Client(confuseTarget);

const adapterTarget = new TargetAdapter(confuseTarget);
const client = new Client(adapterTarget); 

console.log(client.makeRequest());


