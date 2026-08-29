import { CONFIG } from "./constants.js";

export function createInitialState() {
  return {
    scene: "start",
    time: 0,
    speed: CONFIG.BASE_SPEED,
    distance: 0,
    score: 0,
    highscore: 0,
    groundY: CONFIG.GROUND_Y,
    player: {
      x: CONFIG.PLAYER_X,
      y: CONFIG.GROUND_Y - CONFIG.PLAYER_H,
      vy: 0,
      onGround: true,
    },
    obstacles: [],
  };
}
