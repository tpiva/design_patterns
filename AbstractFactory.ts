interface Door {
    makeDoor();
}

interface Carpet {
    makeCarpet();
}

class WoodDoor implements Door {
    makeDoor() {
        console.log("WoodDoor");
    }
}

class IronDoor implements Door {
    makeDoor() {
        console.log("IronDoor");
    }
}

class LeatherCarpet implements Carpet {
    makeCarpet() {
        console.log("LeatherCarpet");
    }
}

class ClothCarpet implements Carpet{
    makeCarpet() {
        console.log("ClothCarpet");
    }
}

interface AbstractFactory {
    createDoor(param: string);
    createCarpet(param: string);
}

class ConcreteFactory implements AbstractFactory {
    createDoor(param: string) {
        if (param === "wood") return new WoodDoor();
        else return new IronDoor();
    }
    createCarpet(param: string) {
        if (param === "leather") return new LeatherCarpet();
        else return new ClothCarpet();
    }
}

const factory = new ConcreteFactory();

const carpet = factory.createCarpet("test");
const door = factory.createDoor("test");

door.makeDoor();
carpet.makeCarpet();