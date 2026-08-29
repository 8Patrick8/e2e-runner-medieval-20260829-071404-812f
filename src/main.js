import "./style.css";
import { CONFIG } from "./game/constants.js";
import { createInitialState } from "./game/state.js";
import { startLoop } from "./game/loop.js";
import * as input from "./game/input.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function setupCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = CONFIG.WIDTH * dpr;
  canvas.height = CONFIG.HEIGHT * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

const state = createInitialState();

setupCanvas();
input.init();

window.__TEST_API__ = {
  scene: () => state.scene,
  player: () => ({ x: state.player.x, y: state.player.y }),
  score: () => state.score,
};

startLoop(ctx, state);
