import {Person} from "./Person";

export class Engine {

    constructor(private horsepower: number, private fuel: number, private Owner: Person) {
        this.horsepower = horsepower;
        this.fuel = fuel;
        this.Owner = Owner;
    }


    gethorsepower(): number {
        return this.horsepower;
    }

    sethorsepower(value: number) {
        this.horsepower = value;
    }

    getfuel(): number {
        return this.fuel;
    }

    setfuel(value: number) {
        this.fuel = value;
    }

    getOwner(): Person {
        return this.Owner;
    }

    setOwner(value: Person) {
        this.Owner = value;
    }




}