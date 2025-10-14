import {API} from "./API";
import {Car} from "./types";


export class fakeAPI implements API {

    Cars: Car[] = [
        {brand: "BMW", color: "black"},
        {brand: "Audi", color: "white"},
        {brand: "Mercedes", color: "silver"},
        {brand: "Volkswagen", color: "blue"},
        {brand: "Porsche", color: "red"},
        {brand: "Tesla", color: "white"},
        {brand: "Ford", color: "green"},
        {brand: "Toyota", color: "grey"}
    ]

    getAllCars(): Car[] {
        return this.Cars;
    }
    findCars(searchText: string): Car[] {
        throw new Error("Method not implemented.");
    };
    
}