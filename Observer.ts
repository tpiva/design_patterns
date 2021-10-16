interface Observer {
    update(observable: Observable);
}

interface Observable {
    notify();
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
}

class Emitter implements Observable {

    private observers: Observer[];

    constructor() {
        this.observers = [];
    }

    notify() {
        // for to each observer and call the update method
        this.observers.forEach(observer => observer.update(this));
    }
    subscribe(observer: Observer): void {
        const exists = this.observers.includes(observer);
        if (exists) throw Error("Already subscribe the observer!");
        this.observers.push(observer);
        console.log("Observer subscribed");
    }
    unsubscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) throw Error("Already subscribe the observer!");
        this.observers.slice(index, 1);
        console.log("Observer unsubscribed");
    }

    somethingToDo(): void {
        console.log("I'm changing me, I will let you know!");
        this.notify();
    }
}

class ConcreteObserver implements Observer {
    update(observable: Observable) {
        if (observable instanceof Emitter) {
            console.log("Emitter reached the ConcreteObserver!");
        }
    }
}

const emitter = new Emitter();
const observer = new ConcreteObserver();

emitter.subscribe(observer);
emitter.somethingToDo();