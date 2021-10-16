class ImmutableLegacyClass implements ProxyExtendableLegacy{
    request(): string {
        return "requested";
    }
}

interface ProxyExtendableLegacy {
    request(): string;
}


class ExtendableClass implements ProxyExtendableLegacy{
    private immutableClass: ImmutableLegacyClass;

    constructor(immutable: ImmutableLegacyClass) {
        this.immutableClass = immutable;
    }

    request(): string {
        if (this.checkAccess()) {
            return this.immutableClass.request();
        }
    }

    checkAccess(): boolean {
        return true;
    }

}


class Client {
    private usefulClass: ProxyExtendableLegacy;

    constructor(useful: ProxyExtendableLegacy) {
        this.usefulClass = useful;
    }

    makeRequest(): string {
        return this.usefulClass.request();
    }
}


const immutableObj = new ImmutableLegacyClass();
const proxyObj = new ExtendableClass(immutableObj);
const clientObj = new Client(proxyObj);

console.log(clientObj.makeRequest());
