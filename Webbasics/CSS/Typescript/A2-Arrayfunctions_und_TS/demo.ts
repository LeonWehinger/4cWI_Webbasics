interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}

let car1: Car = {brand: "BMW", model: "X5", price: 100000, year: 2018};
let car2: Car = {brand: "Audi", model: "A4", price: 200000, year: 2018};
let car3: Car = {brand: "Mercedes", model: "C63", price: 300000, year: 2018};
let CarList: Car[] = [car1, car2, car3];


const getExpensiveCars2: Car[] = CarList.filter((car: Car) =>
    car.price >= 200000
);


const getTotalPrice2 = CarList.reduce((sum: number, car: Car) => sum + car.price, 0);


const CarArray = CarList.map((car: Car) => car.brand);


const sortedCarList = CarList.sort((car1: Car, car2: Car) => car2.price - car1.price);

const foundCar = CarList.find((car: Car) => car.brand === "BMW");

const someCar = CarList.some((car: Car) => car.brand === "BMW");

const everyCar = CarList.every((car: Car) => car.year === 2018);

console.log(everyCar);