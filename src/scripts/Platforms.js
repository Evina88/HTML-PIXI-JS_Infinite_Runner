import * as PIXI from "pixi.js";
import { Platform } from "./Platform";

export class Platforms {
	constructor() {
		this.platforms = [];
		this.container = new PIXI.Container();

		this.createPlatform({
			rows: 4,
			cols: 6,
			x: 200,
		});
	}

	get randomData() {
		let data = { rows: 4, cols: 6, x: 200 };
		return data;
	}

	createPlatform(data) {
		const platform = new Platform(data.rows, data.cols, data.x);
		this.container.addChild(platform.container);
		this.platforms.push(platform);
		this.current = platform;
	}

	update(dt) {
		if (this.current.right < window.innerWidth) {
			this.createPlatform(this.randomData);
		}
	}
}
