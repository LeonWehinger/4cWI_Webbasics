// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rect } from "./Rect.js"
import { Actor } from "./Actor.js";
import { Oval } from "./Oval.js";
import { MovementTypeX } from "./Oval.js";
import { MovementTypeY } from "./Oval.js";

class MyGame extends Game {


  private ActorList: Actor[] = [];

 /* rect1 = new Rect(100, 100, 100, 100, "#E3401E");
  rect2 = new Rect(200, 50, 200, 100, "#1385d9");
  rect3 = new Rect(50, 300, 50, 50, "#37d81c");
  rect4 = new Rect(10, 130, 10, 100, "#7d0c98"); */
  oval1 = new Oval(500, 100, 20, "#E3401E", MovementTypeX.LEFT, MovementTypeY.UP);
  oval2 = new Oval(200, 200, 20, "#0f529e", MovementTypeX.RIGHT, MovementTypeY.DOWN);
  oval3 = new Oval(700, 300, 20, "#09a615", MovementTypeX.LEFT, MovementTypeY.UP);
  oval4 = new Oval(600, 300, 20, "#c9d33e", MovementTypeX.RIGHT, MovementTypeY.UP);
  oval5 = new Oval(200, 500, 20, "#8a18aa", MovementTypeX.LEFT, MovementTypeY.DOWN);
  oval6 = new Oval(300, 400, 20, "#27d5ce", MovementTypeX.RIGHT, MovementTypeY.DOWN);


  init(): void {
    console.log("Game started!");
    this.ActorList.push(/*this.rect1, this.rect2, this.rect3, this.rect4, */this.oval1, this.oval2, this.oval3, this.oval4, this.oval5, this.oval6);
  }

  update(deltaTime: number): void {
    for (const actor of this.ActorList) {
      actor.update(deltaTime);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Draw rectangle

    for (const actor of this.ActorList) {
      actor.render(ctx);
    }
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
