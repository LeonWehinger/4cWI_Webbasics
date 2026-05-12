import { Actor } from "./Actor.js";

enum MovementTypeX{
    LEFT,
    RIGHT
}

enum MovementTypeY{
    UP,
    DOWN
}


export class Oval implements Actor {
    private x: number;
    private y: number;
    private radius: number;
    private color: string;
    private Speed = 80;
    private UP: boolean;
    private DOWN: boolean;
    private LEFT: boolean;
    private RIGHT: boolean;
    private SartingX: MovementTypeX;
    private SartingY: MovementTypeY;



    constructor(x: number, y: number, radius: number, color: string, StartingX: MovementTypeX, StartingY: MovementTypeY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.SartingX = MovementTypeX;
        this.SartingY = MovementTypeY;
    }

    update(deltaTime: number): void {

        if(this.DOWN) {
            this.UP = false;
            this.y += this.Speed * deltaTime;
        }
        if(this.UP) {
            this.DOWN = false;
            this.y -= this.Speed * deltaTime;
        }
        if(this.LEFT) {
            this.RIGHT = false;
            this.x -= this.Speed * deltaTime;
        }
        if(this.RIGHT) {
            this.LEFT = false;
            this.x += this.Speed * deltaTime;
        }


        if (this.y + this.radius >= 600) {
            this.DOWN = false;
            this.UP = true;
        }
        if (this.x + this.radius >= 800) {
            this.RIGHT = false;
            this.LEFT = true;
        }
        if (this.x-this.radius <= 0) {
            this.LEFT = false;
            this.RIGHT = true;
        }
        if (this.y-this.radius <= 0) {
            this.UP = false;
            this.DOWN = true;
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