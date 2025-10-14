export class Person {

    constructor(private fistName: string,private sirName: string , private age: number) {
        this.fistName = fistName;
        this.age = age;
        this.sirName = sirName;
    }


    getfirstName(): string {
        return this.fistName;
    }

    setfirstName(value: string) {
        this.fistName = value;
    }

    getsirName(): string {
        return this.sirName;
    }

    setsirName(value: string) {
        this.sirName = value;
    }

    getage(): number {
        return this.age;
    }

    setage(value: number) {
        this.age = value;
    }















}