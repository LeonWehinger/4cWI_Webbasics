import {Person} from "./Person";
import {Engine} from "./Engine";

const Person1 = new Person("Jayden", "ZYX", 17);
const Person2 = new Person("Damian", "Crxwny", 18);
const Engine1 = new Engine(100, 10, Person1);

console.log(Engine1.getOwner());
Engine1.setOwner(Person2);
console.log(Engine1.getOwner());