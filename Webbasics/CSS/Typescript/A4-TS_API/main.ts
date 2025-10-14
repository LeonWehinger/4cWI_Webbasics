import {API} from "./API";
import {fakeAPI} from "./fakeAPI";
import {realAPI} from "./realAPI";

let api:API = new realAPI();

console.log(api.getAllCars())
