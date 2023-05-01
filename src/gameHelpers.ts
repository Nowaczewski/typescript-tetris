import { PLAYER } from "./hooks/usePlayer";
import { STAGE } from "./hooks/useStage";
import { STAGE_WIDTH, STAGE_HEIGHT } from "./setup";
import { TETROMINOS } from "./setup";

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, "clear"]));

export const randomTetromino = () => {
  const tetrominos = [
    "I",
    "J",
    "L",
    "O",
    "S",
    "T",
    "Z",
  ] as (keyof typeof TETROMINOS)[];
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};

export const isColliding = (
  player: PLAYER,
  stage: STAGE,
  { x: moveX, y: moveY }: { x: number; y: number }
) => {
  // using for loops to be able to return and branck. not possible for each
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; y < player.tetromino.length; x += 1) {
      // check that we are on an actual tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // check that our move is in game area hiegh(y)
          // that we are not moving below the grid
          !stage[(y = player.pos.y + moveY)] ||
          // check that our move is inside the ganer ares width x
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // check that the cell that we are moving to isnt set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
  // if everything above is false return false
  return false;
};
