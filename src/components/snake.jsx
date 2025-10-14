import { useState, useEffect } from "react";

const DIFFICULTY_SETTINGS = {
  beginner: {
    gridSize: 15,
    speed: 200,
    invaderSpeed: 0.1,
    invaderSpawnRate: 0.05,
  },
  intermediate: {
    gridSize: 20,
    speed: 150,
    invaderSpeed: 0.15,
    invaderSpawnRate: 0.1,
  },
  expert: {
    gridSize: 25,
    speed: 100,
    invaderSpeed: 0.2,
    invaderSpawnRate: 0.15,
  },
};

const CELL_SIZE = 20;

const COLORS = [
  "", // Empty
  "#00FF00", // Player
  "#FF0000", // Invader
  "#FFFF00", // Bullet
];

const createEmptyGrid = (size) =>
  Array.from({ length: size }, () => Array(size).fill(0));

const Cell = ({ value }) => (
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
  const [difficulty, setDifficulty] = useState("beginner");
  const [grid, setGrid] = useState(
    createEmptyGrid(DIFFICULTY_SETTINGS[difficulty].gridSize)
  );
  const [playerPosition, setPlayerPosition] = useState({
    x: 0,
    y: 0,
  });
  const [invaders, setInvaders] = useState([]);
  const [bullets, setBullets] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const { gridSize, speed, invaderSpeed, invaderSpawnRate } =
    DIFFICULTY_SETTINGS[difficulty];

  useEffect(() => {
    resetGame();
  }, [difficulty]);

  useEffect(() => {
    if (gameOver || !gameStarted) return;

    const handleKeyPress = (e) => {
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
  }, [playerPosition, gameOver, gameStarted]);

  useEffect(() => {
    if (gameOver || !gameStarted) return;

    const gameLoop = setInterval(() => {
      updateGame();
    }, speed);

    return () => clearInterval(gameLoop);
  }, [grid, invaders, bullets, playerPosition, gameStarted, gameOver, speed]);

  const movePlayer = (direction) => {
    const newX = playerPosition.x + direction;
    if (newX >= 0 && newX < gridSize) {
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
      y: invader.y + invaderSpeed,
    }));

    // Check collisions
    const collidedBullets = [];
    const collidedInvaders = [];

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
    if (remainingInvaders.some((invader) => invader.y >= gridSize - 1)) {
      setGameOver(true);
    }

    // Spawn new invaders
    if (Math.random() < invaderSpawnRate && remainingInvaders.length < 10) {
      remainingInvaders.push({ x: Math.floor(Math.random() * gridSize), y: 0 });
    }

    setBullets(remainingBullets);
    setInvaders(remainingInvaders);

    // Update grid
    const newGrid = createEmptyGrid(gridSize);
    newGrid[playerPosition.y][playerPosition.x] = 1; // Player
    remainingInvaders.forEach((invader) => {
      const roundedY = Math.round(invader.y);
      if (roundedY >= 0 && roundedY < gridSize) {
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
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <div>Score: {score}</div>
      <button onClick={gameStarted ? resetGame : startGame}>
        {gameOver ? "Play Again" : gameStarted ? "Restart" : "Start"}
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
      {gameOver && <p>Game Over!</p>}
      {!gameStarted && (
        <p>Use left and right arrow keys to move, spacebar to shoot.</p>
      )}
    </div>
  );
}
