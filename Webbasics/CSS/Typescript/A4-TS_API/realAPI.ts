import {API} from "./API";
import { Car } from "./types";

export class realAPI implements API {

    getAllCars(): Car[] {
        return [{ brand: "BMW", color: "black"}];
    }
    findCars(searchText: string): Car[] {
        throw new Error("Method not implemented.");
    }

}