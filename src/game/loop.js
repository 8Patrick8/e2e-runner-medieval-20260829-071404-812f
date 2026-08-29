import { CONFIG } from "./constants.js";
import * as input from "./input.js";
import * as scenes from "./scenes.js";
import * as progression from "./progression.js";
import * as player from "./player.js";
import * as obstacles from "./obstacles.js";
import * as background from "./background.js";
import * as hud from "./hud.js";

const FIXED_DT = 1 / 60;

// Scaffold palette (from DESIGN.md) used only for the initial visible path.
const COLORS = {
  skyTop: "#232645",
  skyBottom: "#4a3f6b",
  ground: "#5b3a29",
  groundDark: "#3f2718",
  playerBase: "#6f7f9e",
  playerTrim: "#d9e0ea",
  playerAccent: "#b33434",
  outline: "#1b1d2e",
};

// Scaffold: minimal spacebar/click reaction of the knight (a small hop).
// Replaced once scenes.js (#7) drives scene transitions and player.js (#8)
// implements the real jump physics.
function updateInitialPath(state, dt) {
  const p = state.player;
  if (input.consumeAction() && p.onGround) {
    p.vy = CONFIG.JUMP_FORCE;
    p.onGround = false;
  }
  if (!p.onGround) {
    p.vy += CONFIG.GRAVITY * dt;
    p.y += p.vy * dt;
    if (p.y >= CONFIG.GROUND_Y - CONFIG.PLAYER_H) {
      p.y = CONFIG.GROUND_Y - CONFIG.PLAYER_H;
      p.vy = 0;
      p.onGround = true;
    }
  }
}

// Scaffold: draw the initial visible path (sky + ground + knight rectangle).
// Replaced once background.js (#2) and player.js (#8) are implemented.
function drawInitialPath(ctx, state) {
  const p = state.player;

  const sky = ctx.createLinearGradient(0, 0, 0, CONFIG.GROUND_Y);
  sky.addColorStop(0, COLORS.skyTop);
  sky.addColorStop(1, COLORS.skyBottom);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.GROUND_Y);

  ctx.fillStyle = COLORS.ground;
  ctx.fillRect(0, CONFIG.GROUND_Y, CONFIG.WIDTH, CONFIG.HEIGHT - CONFIG.GROUND_Y);
  ctx.fillStyle = COLORS.groundDark;
  ctx.fillRect(0, CONFIG.GROUND_Y, CONFIG.WIDTH, 8);

  ctx.fillStyle = COLORS.playerBase;
  ctx.fillRect(p.x, p.y, CONFIG.PLAYER_W, CONFIG.PLAYER_H);
  ctx.fillStyle = COLORS.playerTrim;
  ctx.fillRect(p.x, p.y + 8, CONFIG.PLAYER_W, 6);
  ctx.fillStyle = COLORS.playerAccent;
  ctx.fillRect(p.x, p.y + CONFIG.PLAYER_H - 10, CONFIG.PLAYER_W, 6);
  ctx.strokeStyle = COLORS.outline;
  ctx.lineWidth = 2;
  ctx.strokeRect(p.x, p.y, CONFIG.PLAYER_W, CONFIG.PLAYER_H);
}

export function startLoop(ctx, state) {
  function frame() {
    const dt = FIXED_DT;

    input.poll();
    scenes.update(state);
    if (state.scene === "playing") {
      progression.update(state);
      player.update(state);
      obstacles.update(state);
    }

    updateInitialPath(state, dt);

    ctx.clearRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
    drawInitialPath(ctx, state);

    background.draw(ctx, state);
    obstacles.draw(ctx, state);
    player.draw(ctx, state);
    hud.draw(ctx, state);
    scenes.draw(ctx, state);

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
