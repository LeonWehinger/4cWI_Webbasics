import { Actor } from "./Actor.js";

export enum MovementTypeX{
    LEFT,
    RIGHT,
}

export enum MovementTypeY{
    UP,
    DOWN,
}



export class Oval implements Actor {
    private x: number;
    private y: number;
    private radius: number;
    private color: string;
    private Speed = 80;
    private StartingX: MovementTypeX;
    private StartingY: MovementTypeY;





    constructor(x: number, y: number, radius: number, color: string, StartingX: MovementTypeX, StartingY: MovementTypeY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.StartingX = MovementTypeX;
        this.StartingY = MovementTypeY;
    }

init():void{

    console.log(this.StartingX)
    console.log(this.StartingY)

}



update(deltaTime: number): void {

        if(this.StartingY == MovementTypeY.DOWN) {
            this.y += this.Speed * deltaTime;
        }
        if(this.StartingY == MovementTypeY.UP) {
            this.y -= this.Speed * deltaTime;
        }
        if(this.StartingX == MovementTypeX.LEFT) {
            this.x -= this.Speed * deltaTime;
        }
        if(this.StartingX == MovementTypeX.RIGHT) {
            this.x += this.Speed * deltaTime;
        }


        if (this.y + this.radius >= 600) {
            MovementTypeY.UP
        }
        if (this.x + this.radius >= 800) {
            MovementTypeX.LEFT
        }
        if (this.x-this.radius <= 0) {
            MovementTypeX.RIGHT
        }
        if (this.y-this.radius <= 0) {
            MovementTypeY.DOWN
        }
        console.log(this.x)
        console.log(this.y)
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    setSpeed(speed: number): void {
        this.Speed = speed;
    }

    getPosition(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }

}