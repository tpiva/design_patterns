class Connection {
    // it be only 1 in entire application and it's possible to access directly
    // by static methods
    private static connectionInstance: Connection;

    private constructor() {}

    public static getInstance(): Connection {
        if (this.connectionInstance === null) {
            this.connectionInstance = new Connection();
        }

        return this.connectionInstance;
    }
}

const singleton1 = Connection.getInstance();
const singleton2 = Connection.getInstance();

if (singleton1 === singleton2) console.log("Both are equal, the same");
else console.log("The singleton didn't works. The instances are different from each other");