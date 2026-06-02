interface HeatingStrategy {
    regulateTemperature(x: double): void;
}

class EcoMode implements HeatingStrategy {
    regulateTemperature(x: double): void {
        console.log("Eco mode: regulating temperature to " + x);
    }
}

class ComfortMode implements HeatingStrategy {
    regulateTemperature(x: double): void {
        console.log("Comfort mode: regulating temperature to " + x);
    }
}

class AwayMode implements HeatingStrategy {
    regulateTemperature(x: double): void {
        console.log("Away mode: regulating temperature to " + x);
    }
}


class SmartHomeController {
    private strategy: HeatingStrategy;


    constructor(strategy: HeatingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: HeatingStrategy): void {
        this.strategy = strategy;
    }

    getStrategy(): HeatingStrategy {
        return this.strategy;
    }
}



const smartHomeController = new SmartHomeController(new EcoMode());
smartHomeController.setStrategy(new ComfortMode());
smartHomeController.setStrategy(new AwayMode());


