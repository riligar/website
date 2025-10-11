import { useState, useEffect, useCallback } from "react";

// Constants
const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_LIVES = 3;

// Types
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type CellType = "EMPTY" | "WALL" | "PELLET" | "POWER_PELLET";
type GhostName = "Blinky" | "Pinky" | "Inky" | "Clyde";

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
  isInitialized: boolean;
}

// Utility functions
const createEmptyGrid = (): CellType[][] =>
  Array(GRID_SIZE)
    .fill(null)
    .map(() => Array(GRID_SIZE).fill("EMPTY"));

const getRandomPosition = (): Position => ({
  x: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
  y: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
});

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
    grid: createEmptyGrid(),
    ghosts: [],
    powerMode: false,
    isInitialized: false,
  });

  const initializeGame = useCallback(() => {
    const newGrid = createEmptyGrid();
    const newGhosts: Ghost[] = [];

    // Add walls and pellets
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (x === 0 || x === GRID_SIZE - 1 || y === 0 || y === GRID_SIZE - 1) {
          newGrid[y][x] = "WALL";
        } else if (Math.random() < 0.3) {
          newGrid[y][x] = "PELLET";
        } else if (Math.random() < 0.05) {
          newGrid[y][x] = "POWER_PELLET";
        }
      }
    }

    // Add ghosts
    const ghostNames: GhostName[] = ["Blinky", "Pinky", "Inky", "Clyde"];
    ghostNames.forEach((name) => {
      const pos = getRandomPosition();
      newGhosts.push({
        ...pos,
        direction: getRandomDirection(),
        name,
      });
    });

    // Set Pacman's initial position
    const pacmanPos = getRandomPosition();
    newGrid[pacmanPos.y][pacmanPos.x] = "EMPTY";

    setGameState((prev) => ({
      ...prev,
      pacmanPos,
      grid: newGrid,
      ghosts: newGhosts,
      score: 0,
      lives: INITIAL_LIVES,
      powerMode: false,
      isInitialized: true,
    }));
  }, []);

  const movePacman = useCallback(() => {
    setGameState((prev) => {
      const { pacmanPos, direction, grid, score, powerMode } = prev;
      let newX = pacmanPos.x;
      let newY = pacmanPos.y;
      let newScore = score;
      let newPowerMode = powerMode;

      switch (direction) {
        case "UP":
          newY = (pacmanPos.y - 1 + GRID_SIZE) % GRID_SIZE;
          break;
        case "DOWN":
          newY = (pacmanPos.y + 1) % GRID_SIZE;
          break;
        case "LEFT":
          newX = (pacmanPos.x - 1 + GRID_SIZE) % GRID_SIZE;
          break;
        case "RIGHT":
          newX = (pacmanPos.x + 1) % GRID_SIZE;
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
        }

        return {
          ...prev,
          pacmanPos: { x: newX, y: newY },
          score: newScore,
          grid,
          powerMode: newPowerMode,
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
            newY = (ghost.y - 1 + GRID_SIZE) % GRID_SIZE;
            break;
          case "DOWN":
            newY = (ghost.y + 1) % GRID_SIZE;
            break;
          case "LEFT":
            newX = (ghost.x - 1 + GRID_SIZE) % GRID_SIZE;
            break;
          case "RIGHT":
            newX = (ghost.x + 1) % GRID_SIZE;
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
      const { pacmanPos, ghosts, powerMode, lives, score } = prev;
      let newLives = lives;
      let newScore = score;

      ghosts.forEach((ghost, index) => {
        if (ghost.x === pacmanPos.x && ghost.y === pacmanPos.y) {
          if (powerMode) {
            newScore += 200;
            ghosts[index] = { ...ghost, ...getRandomPosition() };
          } else {
            newLives--;
            if (newLives <= 0) {
              alert("Game Over!");
              initializeGame();
              return;
            }
          }
        }
      });

      return { ...prev, lives: newLives, score: newScore, ghosts };
    });
  }, [initializeGame]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
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
        default:
          return prev;
      }
    });
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (!gameState.isInitialized) return;

    const gameLoop = setInterval(() => {
      movePacman();
      moveGhosts();
      checkCollisions();
    }, 200);

    return () => clearInterval(gameLoop);
  }, [gameState.isInitialized, movePacman, moveGhosts, checkCollisions]);

  if (!gameState.isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Pacman</h2>
      <div>Score: {gameState.score}</div>
      <div>Lives: {gameState.lives}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          gap: "1px",
          border: "1px solid #000",
        }}
      >
        {gameState.grid.map((row, y) =>
          row.map((cell, x) => {
            const isPacman =
              x === gameState.pacmanPos.x && y === gameState.pacmanPos.y;
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
                            : "black",
                  borderRadius: isPacman || isGhost ? "50%" : "0",
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Pacman;
