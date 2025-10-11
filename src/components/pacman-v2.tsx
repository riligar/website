import { useState, useEffect, useCallback } from "react";

// Constants
const GRID_SIZE = { width: 28, height: 31 };
const CELL_SIZE = 20;
const INITIAL_LIVES = 3;

// Types
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type CellType =
  | "EMPTY"
  | "WALL"
  | "PELLET"
  | "POWER_PELLET"
  | "SPEED_BOOST"
  | "GHOST_DOOR";
type GhostName = "Blinky" | "Pinky" | "Inky" | "Clyde";
type GameStatus = "START" | "PLAYING" | "GAME_OVER";

interface Position {
  x: number;
  y: number;
}

interface Ghost extends Position {
  direction: Direction;
  name: GhostName;
}

interface GameState {
  pacmanPos: Position;
  direction: Direction;
  score: number;
  lives: number;
  grid: CellType[][];
  ghosts: Ghost[];
  powerMode: boolean;
  speedBoost: boolean;
  level: number;
  status: GameStatus;
}

// Predefined maze layout
const MAZE_LAYOUT = [
  "############################",
  "#............##............#",
  "#.####.#####.##.#####.####.#",
  "#P####.#####.##.#####.####P#",
  "#.####.#####.##.#####.####.#",
  "#..........................#",
  "#.####.##.########.##.####.#",
  "#.####.##.########.##.####.#",
  "#......##....##....##......#",
  "######.#####.##.#####.######",
  "     #.#####.##.#####.#     ",
  "     #.##..........##.#     ",
  "     #.## ###--### ##.#     ",
  "######.## #      # ##.######",
  "      .   #      #   .      ",
  "######.## #      # ##.######",
  "     #.## ######## ##.#     ",
  "     #.##          ##.#     ",
  "     #.## ######## ##.#     ",
  "######.## ######## ##.######",
  "#............##............#",
  "#.####.#####.##.#####.####.#",
  "#.####.#####.##.#####.####.#",
  "#P..##.......  .......##..P#",
  "###.##.##.########.##.##.###",
  "#......##....##....##......#",
  "#.##########.##.##########.#",
  "#.##########.##.##########.#",
  "#..........................#",
  "############################",
];

// Utility functions
const createGridFromLayout = (): CellType[][] =>
  MAZE_LAYOUT.map((row) =>
    row.split("").map((cell) => {
      switch (cell) {
        case "#":
          return "WALL";
        case ".":
          return "PELLET";
        case "P":
          return "POWER_PELLET";
        case "-":
          return "GHOST_DOOR";
        case "S":
          return "SPEED_BOOST";
        default:
          return "EMPTY";
      }
    })
  );

const getRandomPosition = (grid: CellType[][]): Position => {
  let x, y;
  do {
    x = Math.floor(Math.random() * GRID_SIZE.width);
    y = Math.floor(Math.random() * GRID_SIZE.height);
  } while (grid[y][x] === "WALL");
  return { x, y };
};

const getRandomDirection = (): Direction => {
  const directions: Direction[] = ["UP", "DOWN", "LEFT", "RIGHT"];
  return directions[Math.floor(Math.random() * directions.length)];
};

// Main component
const Pacman = () => {
  const [gameState, setGameState] = useState<GameState>({
    pacmanPos: { x: 1, y: 1 },
    direction: "RIGHT",
    score: 0,
    lives: INITIAL_LIVES,
    grid: createGridFromLayout(),
    ghosts: [],
    powerMode: false,
    speedBoost: false,
    level: 1,
    status: "START",
  });

  const initializeGame = useCallback(() => {
    const newGrid = createGridFromLayout();
    const newGhosts: Ghost[] = [];

    // Add ghosts
    const ghostNames: GhostName[] = ["Blinky", "Pinky", "Inky", "Clyde"];
    ghostNames.forEach((name) => {
      const pos = getRandomPosition(newGrid);
      newGhosts.push({
        ...pos,
        direction: getRandomDirection(),
        name,
      });
    });

    // Set Pacman's initial position
    const pacmanPos = getRandomPosition(newGrid);

    setGameState((prev) => ({
      ...prev,
      pacmanPos,
      grid: newGrid,
      ghosts: newGhosts,
      score: 0,
      lives: INITIAL_LIVES,
      powerMode: false,
      speedBoost: false,
      level: 1,
      status: "PLAYING",
    }));
  }, []);

  const movePacman = useCallback(() => {
    setGameState((prev) => {
      const { pacmanPos, direction, grid, score, powerMode, speedBoost } = prev;
      let newX = pacmanPos.x;
      let newY = pacmanPos.y;
      let newScore = score;
      let newPowerMode = powerMode;
      let newSpeedBoost = speedBoost;

      switch (direction) {
        case "UP":
          newY = (pacmanPos.y - 1 + GRID_SIZE.height) % GRID_SIZE.height;
          break;
        case "DOWN":
          newY = (pacmanPos.y + 1) % GRID_SIZE.height;
          break;
        case "LEFT":
          newX = (pacmanPos.x - 1 + GRID_SIZE.width) % GRID_SIZE.width;
          break;
        case "RIGHT":
          newX = (pacmanPos.x + 1) % GRID_SIZE.width;
          break;
      }

      if (grid[newY][newX] !== "WALL") {
        if (grid[newY][newX] === "PELLET") {
          newScore += 10;
          grid[newY][newX] = "EMPTY";
        } else if (grid[newY][newX] === "POWER_PELLET") {
          newScore += 50;
          grid[newY][newX] = "EMPTY";
          newPowerMode = true;
          setTimeout(
            () => setGameState((s) => ({ ...s, powerMode: false })),
            5000
          );
        } else if (grid[newY][newX] === "SPEED_BOOST") {
          newScore += 30;
          grid[newY][newX] = "EMPTY";
          newSpeedBoost = true;
          setTimeout(
            () => setGameState((s) => ({ ...s, speedBoost: false })),
            3000
          );
        }

        return {
          ...prev,
          pacmanPos: { x: newX, y: newY },
          score: newScore,
          grid,
          powerMode: newPowerMode,
          speedBoost: newSpeedBoost,
        };
      }

      return prev;
    });
  }, []);

  const moveGhosts = useCallback(() => {
    setGameState((prev) => {
      const newGhosts = prev.ghosts.map((ghost) => {
        const newDirection =
          Math.random() < 0.2 ? getRandomDirection() : ghost.direction;
        let newX = ghost.x;
        let newY = ghost.y;

        switch (newDirection) {
          case "UP":
            newY = (ghost.y - 1 + GRID_SIZE.height) % GRID_SIZE.height;
            break;
          case "DOWN":
            newY = (ghost.y + 1) % GRID_SIZE.height;
            break;
          case "LEFT":
            newX = (ghost.x - 1 + GRID_SIZE.width) % GRID_SIZE.width;
            break;
          case "RIGHT":
            newX = (ghost.x + 1) % GRID_SIZE.width;
            break;
        }

        if (prev.grid[newY][newX] !== "WALL") {
          return { ...ghost, x: newX, y: newY, direction: newDirection };
        }

        return ghost;
      });

      return { ...prev, ghosts: newGhosts };
    });
  }, []);

  const checkCollisions = useCallback(() => {
    setGameState((prev) => {
      const { pacmanPos, ghosts, powerMode, lives, score, level } = prev;
      let newLives = lives;
      let newScore = score;
      let newLevel = level;
      let gameOver = false;

      ghosts.forEach((ghost, index) => {
        if (ghost.x === pacmanPos.x && ghost.y === pacmanPos.y) {
          if (powerMode) {
            newScore += 200;
            ghosts[index] = { ...ghost, ...getRandomPosition(prev.grid) };
          } else {
            newLives--;
            if (newLives <= 0) {
              gameOver = true;
            } else {
              // Reposicionar Pacman e fantasmas após perder uma vida
              return {
                ...prev,
                lives: newLives,
                pacmanPos: getRandomPosition(prev.grid),
                ghosts: ghosts.map((g) => ({
                  ...g,
                  ...getRandomPosition(prev.grid),
                })),
              };
            }
          }
        }
      });

      if (gameOver) {
        return { ...prev, lives: 0, status: "GAME_OVER" };
      }

      // Check if all pellets are eaten
      const allPelletsEaten = prev.grid.every((row) =>
        row.every((cell) => cell !== "PELLET" && cell !== "POWER_PELLET")
      );

      if (allPelletsEaten) {
        newLevel++;
        return {
          ...prev,
          lives: newLives,
          score: newScore,
          ghosts,
          level: newLevel,
          grid: createGridFromLayout(),
          pacmanPos: getRandomPosition(prev.grid),
        };
      }

      return { ...prev, lives: newLives, score: newScore, ghosts };
    });
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      setGameState((prev) => {
        switch (e.key) {
          case "ArrowUp":
            return { ...prev, direction: "UP" };
          case "ArrowDown":
            return { ...prev, direction: "DOWN" };
          case "ArrowLeft":
            return { ...prev, direction: "LEFT" };
          case "ArrowRight":
            return { ...prev, direction: "RIGHT" };
          case " ": // Space bar
            if (prev.status === "START" || prev.status === "GAME_OVER") {
              initializeGame();
            }
            return prev;
          default:
            return prev;
        }
      });
    },
    [initializeGame]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (gameState.status !== "PLAYING") return;

    const gameLoop = setInterval(
      () => {
        movePacman();
        moveGhosts();
        checkCollisions();

        // Adicione esta verificação extra
        setGameState((prev) => {
          if (prev.lives <= 0) {
            return { ...prev, status: "GAME_OVER" };
          }
          return prev;
        });
      },
      gameState.speedBoost ? 100 : 200
    );

    return () => clearInterval(gameLoop);
  }, [
    gameState.status,
    gameState.speedBoost,
    movePacman,
    moveGhosts,
    checkCollisions,
  ]);

  useEffect(() => {
    // Este efeito será executado sempre que as vidas mudarem
    // Forçando uma re-renderização da interface
  }, [gameState.lives]);

  const renderCell = (cell: CellType, x: number, y: number) => {
    const isPacman = x === gameState.pacmanPos.x && y === gameState.pacmanPos.y;
    const ghost = gameState.ghosts.find((g) => g.x === x && g.y === y);
    const isGhost = Boolean(ghost);

    return (
      <div
        key={`${x}-${y}`}
        style={{
          width: CELL_SIZE,
          height: CELL_SIZE,
          backgroundColor: isPacman
            ? "yellow"
            : isGhost
              ? gameState.powerMode
                ? "blue"
                : "red"
              : cell === "WALL"
                ? "blue"
                : cell === "PELLET"
                  ? "white"
                  : cell === "POWER_PELLET"
                    ? "green"
                    : cell === "SPEED_BOOST"
                      ? "orange"
                      : cell === "GHOST_DOOR"
                        ? "pink"
                        : "black",
          borderRadius: isPacman || isGhost ? "50%" : "0",
        }}
      />
    );
  };

  const renderStartScreen = () => (
    <div>
      <h2>Pacman</h2>
      <p>Press Space to Start</p>
    </div>
  );

  const renderGameOverScreen = () => (
    <div>
      <h2>Game Over</h2>
      <p>Final Score: {gameState.score}</p>
      <p>Press Space to Play Again</p>
    </div>
  );

  const renderGame = () => (
    <div>
      <h2>Pacman</h2>
      <div>Score: {gameState.score}</div>
      <div>Lives: {gameState.lives}</div>
      <div>Level: {gameState.level}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE.width}, ${CELL_SIZE}px)`,
          gridTemplateRows: `repeat(${GRID_SIZE.height}, ${CELL_SIZE}px)`,
          gap: "1px",
        }}
      >
        {gameState.grid.map((row, y) =>
          row.map((cell, x) => renderCell(cell, x, y))
        )}
      </div>
    </div>
  );

  switch (gameState.status) {
    case "START":
      return renderStartScreen();
    case "PLAYING":
      return renderGame();
    case "GAME_OVER":
      return renderGameOverScreen();
  }
};

export default Pacman;
