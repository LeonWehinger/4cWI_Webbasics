interface Car {
    brand: string;
    model: string;
    price: number;
    year: number;
}
let priceSum: number;
let car1: Car = {brand: "BMW", model: "X5", price: 100000, year: 2018};
let car2: Car = {brand: "Audi", model: "A4", price: 100000, year: 2018};
let car3: Car = {brand: "Mercedes", model: "C63", price: 100000, year: 2018};
let CarList: Car[] = [car1, car2, car3];

function getTotalPrice(car: Car[]) {
    CarList.forEach(car => priceSum += car.price);
    console.log(priceSum);
}