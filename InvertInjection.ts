abstract class AbstractController {
    private innerService: AbstractService;

    constructor(serviceT: AbstractService) {
        this.innerService = serviceT;
    }

    get service(): AbstractService {
        return this.innerService;
    }
}

interface AbstractService {}

class Service implements AbstractService {
    test() {
        return "test";
    }
}

class Controller extends AbstractController {

    constructor(service: AbstractService) {
        super(service);
    }
}

