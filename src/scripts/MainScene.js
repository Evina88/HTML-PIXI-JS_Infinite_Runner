import * as PIXI from "pixi.js";
import { Globals } from "./Globals";
import { Background } from "./Background";
import { Platforms } from "./Platforms";

export class MainScene {
	constructor() {
		this.container = new PIXI.Container();
		this.createBackground();
		this.createPlatforms();
	}

	createBackground() {
		this.bg = new Background();
		this.container.addChild(this.bg.container);
	}

	createPlatforms() {
		this.platfroms = new Platforms();
		this.container.addChild(this.platfroms.container);
	}

	update(dt) {
		this.bg.update(dt);
		this.platfroms.update(dt);
	}
}
