import { useState, useEffect } from "react";

type Difficulty = "beginner" | "intermediate" | "expert";

const DIFFICULTY_SETTINGS = {
  beginner: {
    gridSize: 25,
    speed: 500,
    invaderSpeed: 0.4,
    invaderSpawnRate: 0.25,
  },
  intermediate: {
    gridSize: 20,
    speed: 150,
    invaderSpeed: 0.15,
    invaderSpawnRate: 0.1,
  },
  expert: {
    gridSize: 15,
    speed: 200,
    invaderSpeed: 0.1,
    invaderSpawnRate: 0.05,
  },
};

const GRID_WIDTH = 15;
const GRID_HEIGHT = 20;
const CELL_SIZE = 30;

type Cell = number;
type Grid = Cell[][];
type Position = { x: number; y: number };

const COLORS = [
  "", // Empty
  "#00FF00", // Player
  "#FF0000", // Invader
  "#FFFF00", // Bullet
];

const createEmptyGrid = (gridSize: number): Grid =>
  Array.from({ length: gridSize }, () => Array(GRID_WIDTH).fill(0));

const Cell = ({ value }: { value: number }) => (
  <div
    style={{
      width: `${CELL_SIZE}px`,
      height: `${CELL_SIZE}px`,
      backgroundColor: COLORS[value],
      border: "1px solid #ccc",
    }}
  />
);

export default function SpaceInvaders() {
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [grid, setGrid] = useState<Grid>(
    createEmptyGrid(DIFFICULTY_SETTINGS[difficulty].gridSize)
  );
  const [playerPosition, setPlayerPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [invaders, setInvaders] = useState<Position[]>([]);
  const [bullets, setBullets] = useState<Position[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const { gridSize, speed, invaderSpeed, invaderSpawnRate } =
    DIFFICULTY_SETTINGS[difficulty];

  useEffect(() => {
    resetGame();
  }, [difficulty]);

  useEffect(() => {
    if (gameOver) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          movePlayer(-1);
          break;
        case "ArrowRight":
          movePlayer(1);
          break;
        case " ": // Spacebar
          shoot();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [playerPosition, gameOver]);

  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      updateGame();
    }, 100);

    return () => clearInterval(gameLoop);
  }, [grid, invaders, bullets, playerPosition]);

  const movePlayer = (direction: number) => {
    const newX = playerPosition.x + direction;
    if (newX >= 0 && newX < GRID_WIDTH) {
      setPlayerPosition({ ...playerPosition, x: newX });
    }
  };

  const shoot = () => {
    setBullets([...bullets, { x: playerPosition.x, y: playerPosition.y - 1 }]);
  };

  const updateGame = () => {
    // Move bullets
    const newBullets = bullets
      .map((bullet) => ({ ...bullet, y: bullet.y - 1 }))
      .filter((bullet) => bullet.y >= 0);

    // Move invaders
    const newInvaders = invaders.map((invader) => ({
      ...invader,
      y: invader.y + 0.2,
    }));

    // Check collisions
    const collidedBullets: Position[] = [];
    const collidedInvaders: Position[] = [];

    newBullets.forEach((bullet) => {
      newInvaders.forEach((invader) => {
        if (
          Math.abs(bullet.x - invader.x) < 1 &&
          Math.abs(bullet.y - invader.y) < 1
        ) {
          collidedBullets.push(bullet);
          collidedInvaders.push(invader);
          setScore((prevScore) => prevScore + 10);
        }
      });
    });

    // Remove collided bullets and invaders
    const remainingBullets = newBullets.filter(
      (bullet) => !collidedBullets.includes(bullet)
    );
    const remainingInvaders = newInvaders.filter(
      (invader) => !collidedInvaders.includes(invader)
    );

    // Check for game over
    if (remainingInvaders.some((invader) => invader.y >= GRID_HEIGHT - 1)) {
      setGameOver(true);
    }

    // Spawn new invaders
    if (Math.random() < 0.1 && remainingInvaders.length < 10) {
      remainingInvaders.push({
        x: Math.floor(Math.random() * GRID_WIDTH),
        y: 0,
      });
    }

    setBullets(remainingBullets);
    setInvaders(remainingInvaders);

    // Update grid
    const newGrid = createEmptyGrid(gridSize);
    newGrid[playerPosition.y][playerPosition.x] = 1; // Player
    remainingInvaders.forEach((invader) => {
      const roundedY = Math.round(invader.y);
      if (roundedY >= 0 && roundedY < GRID_HEIGHT) {
        newGrid[roundedY][invader.x] = 2; // Invader
      }
    });
    remainingBullets.forEach((bullet) => {
      newGrid[bullet.y][bullet.x] = 3; // Bullet
    });

    setGrid(newGrid);
  };

  const resetGame = () => {
    const newGridSize = DIFFICULTY_SETTINGS[difficulty].gridSize;
    setGrid(createEmptyGrid(newGridSize));
    setPlayerPosition({ x: Math.floor(newGridSize / 2), y: newGridSize - 1 });
    setInvaders([]);
    setBullets([]);
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div>
      <h1>Space Invaders</h1>
      <div>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty)}
        >
          <option value="beginner">Principiante</option>
          <option value="intermediate">Intermediário</option>
          <option value="expert">Especialista</option>
        </select>
      </div>
      <div>Score: {score}</div>
      <button onClick={gameStarted ? resetGame : startGame}>
        {gameOver ? "Jogar Novamente" : gameStarted ? "Reiniciar" : "Iniciar"}
      </button>
      <div
        style={{
          display: "inline-block",
          border: "1px solid #000",
          padding: "10px",
        }}
      >
        {grid.map((row, y) => (
          <div key={y} style={{ display: "flex" }}>
            {row.map((cell, x) => (
              <Cell key={`${y}-${x}`} value={cell} />
            ))}
          </div>
        ))}
      </div>
      {gameOver && <p>Fim de Jogo!</p>}
      {!gameStarted && (
        <p>
          Use as setas esquerda e direita para mover, barra de espaço para
          atirar.
        </p>
      )}
    </div>
  );
}
