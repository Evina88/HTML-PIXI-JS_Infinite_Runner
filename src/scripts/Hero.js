import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class Hero {
	constructor() {
		this.sprite = new PIXI.Sprite(Globals.resources["walk1"].texture);
		this.sprite.x = window.innerWidth / 2;
		this.sprite.y = window.innerHeight / 2;
	}
}
