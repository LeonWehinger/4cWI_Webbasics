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

function getTotalPrice(car: Car[]):number {
    let priceSum: number = 0;
    CarList.forEach(car => priceSum += car.price);
    return priceSum;
}

function pintCars(car: Car[]):void {
    CarList.forEach(car => console.log(car.brand + " " + car.model + " " + car.price + " " + car.year));
}

function getExpensiveCars(car: Car[], minPrice:number){
    CarList.forEach(car => {if (car.price >= minPrice) console.log(car.brand + " " + car.model + " " + car.price + " " + car.year)});
}


console.log(getExpensiveCars(CarList, 200000));

