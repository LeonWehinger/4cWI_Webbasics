import { Actor } from "./Actor.js";

export class Rect implements Actor {
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private color: string;
    private Speed = 80;
    private UP: boolean;
    private DOWN: boolean = true;
    private LEFT: boolean;
    private RIGHT: boolean = true;



    constructor(x: number, y: number, width: number, height: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
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


        if (this.y + this.height >= 600) {
            this.DOWN = false;
            this.UP = true;
        }
        if (this.x + this.width >= 800) {
            this.RIGHT = false;
            this.LEFT = true;
        }
        if (this.x <= 0) {
            this.LEFT = false;
            this.RIGHT = true;
        }
        if (this.y <= 0) {
            this.UP = false;
            this.DOWN = true;
        }
        console.log(this.x)
        console.log(this.y)
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
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

    getSize(): { width: number; height: number } {
        return { width: this.width, height: this.height };
    }
}