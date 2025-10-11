import { useState, useEffect } from "react";

const GRID_WIDTH = 10;
const GRID_HEIGHT = 20;
const CELL_SIZE = 30;

type Cell = number;
type Grid = Cell[][];
type Tetromino = number[][];

const TETROMINOS: Tetromino[] = [
  [[1, 1, 1, 1]], // I
  [
    [1, 1],
    [1, 1],
  ], // O
  [
    [0, 1, 1],
    [1, 1, 0],
  ], // S
  [
    [1, 1, 0],
    [0, 1, 1],
  ], // Z
  [
    [1, 0, 0],
    [1, 1, 1],
  ], // L
  [
    [0, 0, 1],
    [1, 1, 1],
  ], // J
  [
    [0, 1, 0],
    [1, 1, 1],
  ], // T
];

const COLORS = [
  "",
  "#00FFFF",
  "#FFFF00",
  "#00FF00",
  "#FF0000",
  "#FF7F00",
  "#0000FF",
  "#8B00FF",
];

const createEmptyGrid = (): Grid =>
  Array.from({ length: GRID_HEIGHT }, () => Array(GRID_WIDTH).fill(0));

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

export default function Tetris() {
  const [grid, setGrid] = useState<Grid>(createEmptyGrid());
  const [currentPiece, setCurrentPiece] = useState<Tetromino>([]);
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (gameOver) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          moveHorizontal(-1);
          break;
        case "ArrowRight":
          moveHorizontal(1);
          break;
        case "ArrowDown":
          moveDown();
          break;
        case "ArrowUp":
          rotate();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentPiece, currentPosition, grid]);

  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      moveDown();
    }, 1000);

    return () => clearInterval(gameLoop);
  }, [currentPiece, currentPosition, grid]);

  useEffect(() => {
    if (!currentPiece.length) {
      spawnNewPiece();
    }
  }, [currentPiece]);

  const spawnNewPiece = () => {
    const newPiece = TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];
    const newPosition = {
      x: Math.floor(GRID_WIDTH / 2) - Math.floor(newPiece[0].length / 2),
      y: 0,
    };
    setCurrentPiece(newPiece);
    setCurrentPosition(newPosition);

    if (isCollision(newPiece, newPosition)) {
      setGameOver(true);
    }
  };

  const isCollision = (
    piece: Tetromino,
    position: { x: number; y: number }
  ): boolean => {
    for (let y = 0; y < piece.length; y++) {
      for (let x = 0; x < piece[y].length; x++) {
        if (piece[y][x] !== 0) {
          const newX = position.x + x;
          const newY = position.y + y;
          if (
            newX < 0 ||
            newX >= GRID_WIDTH ||
            newY >= GRID_HEIGHT ||
            (newY >= 0 && grid[newY][newX] !== 0)
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const moveHorizontal = (direction: number) => {
    const newPosition = {
      ...currentPosition,
      x: currentPosition.x + direction,
    };
    if (!isCollision(currentPiece, newPosition)) {
      setCurrentPosition(newPosition);
    }
  };

  const moveDown = () => {
    const newPosition = { ...currentPosition, y: currentPosition.y + 1 };
    if (!isCollision(currentPiece, newPosition)) {
      setCurrentPosition(newPosition);
    } else {
      placePiece();
    }
  };

  const rotate = () => {
    const rotatedPiece = currentPiece[0].map((_, index) =>
      currentPiece.map((row) => row[index]).reverse()
    );
    if (!isCollision(rotatedPiece, currentPosition)) {
      setCurrentPiece(rotatedPiece);
    }
  };

  const placePiece = () => {
    const newGrid = grid.map((row) => [...row]);
    currentPiece.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          const newY = currentPosition.y + y;
          const newX = currentPosition.x + x;
          if (
            newY >= 0 &&
            newY < GRID_HEIGHT &&
            newX >= 0 &&
            newX < GRID_WIDTH
          ) {
            newGrid[newY][newX] = value;
          }
        }
      });
    });

    const [clearedGrid, clearedLines] = clearLines(newGrid);
    setGrid(clearedGrid);
    setScore((prevScore) => prevScore + clearedLines * 100);
    spawnNewPiece();
  };

  const clearLines = (grid: Grid): [Grid, number] => {
    let clearedLines = 0;
    const newGrid = grid.filter((row) => {
      if (row.every((cell) => cell !== 0)) {
        clearedLines++;
        return false;
      }
      return true;
    });

    while (newGrid.length < GRID_HEIGHT) {
      newGrid.unshift(Array(GRID_WIDTH).fill(0));
    }

    return [newGrid, clearedLines];
  };

  const resetGame = () => {
    setGrid(createEmptyGrid());
    setCurrentPiece([]);
    setCurrentPosition({ x: 0, y: 0 });
    setGameOver(false);
    setScore(0);
    spawnNewPiece();
  };

  const renderGrid = () => {
    const displayGrid = grid.map((row) => [...row]);
    currentPiece.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          const newY = currentPosition.y + y;
          const newX = currentPosition.x + x;
          if (
            newY >= 0 &&
            newY < GRID_HEIGHT &&
            newX >= 0 &&
            newX < GRID_WIDTH
          ) {
            displayGrid[newY][newX] = value;
          }
        }
      });
    });

    return displayGrid.map((row, y) => (
      <div key={y} style={{ display: "flex" }}>
        {row.map((cell, x) => (
          <Cell key={`${y}-${x}`} value={cell} />
        ))}
      </div>
    ));
  };

  return (
    <div>
      <h1>Tetris</h1>
      <div>Score: {score}</div>
      <button onClick={resetGame}>{gameOver ? "Play Again" : "Restart"}</button>
      <div
        style={{
          display: "inline-block",
          border: "1px solid #000",
          padding: "10px",
          //   backgroundColor: "#f0f0f0",
        }}
      >
        {renderGrid()}
      </div>
      {gameOver && <p>Game Over!</p>}
    </div>
  );
}
