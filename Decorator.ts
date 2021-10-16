interface Concrete {
    method(): void;
}

// Preciso ter uma classe concreta que implemente de fato a interface
class BaseDecorator implements Concrete {
    method(): void {
        console.log("I do everything");
    }

}

class PrettifyDecorator implements Concrete {
    private reference: Concrete;
    constructor(reference: Concrete) {
        this.reference = reference;
    }

    method(): void {
        console.log("I am beautiful");
        this.reference.method();
    }

}

class Client {
    private reference: Concrete;
    constructor(reference: Concrete) {
        this.reference = reference;
    }

    operation(): void {
        this.reference.method()
    }
}

const concrete = new BaseDecorator();

let clientObj = new Client(concrete);
clientObj.operation();

const prettyDecorator = new PrettifyDecorator(concrete);
clientObj = new Client(prettyDecorator);
clientObj.operation();