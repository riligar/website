import { useState, useEffect, useCallback } from "react";

type Difficulty = "beginner" | "intermediate" | "expert";

const DIFFICULTY_SETTINGS = {
  beginner: { gridSize: 6, spawnRate: 0.6 },
  intermediate: { gridSize: 5, spawnRate: 0.7 },
  expert: { gridSize: 4, spawnRate: 0.8 },
};

type Cell = number | null;

export default function Game2048() {
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const { gridSize, spawnRate } = DIFFICULTY_SETTINGS[difficulty];

  const initializeGrid = useCallback(() => {
    const newGrid: Cell[][] = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(null));
    return addRandomCell(addRandomCell(newGrid));
  }, [gridSize]);

  useEffect(() => {
    resetGame();
  }, [difficulty]);

  const resetGame = () => {
    setGrid(initializeGrid());
    setScore(0);
    setGameOver(false);
  };

  const addRandomCell = useCallback(
    (currentGrid: Cell[][]): Cell[][] => {
      const emptyCells = [];
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (currentGrid[i][j] === null) {
            emptyCells.push({ i, j });
          }
        }
      }
      if (emptyCells.length === 0) return currentGrid;

      const { i, j } =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const newGrid = currentGrid.map((row) => [...row]);
      newGrid[i][j] = Math.random() < spawnRate ? 2 : 4;
      return newGrid;
    },
    [gridSize, spawnRate]
  );

  const isGameOver = useCallback(
    (currentGrid: Cell[][]): boolean => {
      // Check for any empty cells
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (currentGrid[i][j] === null) {
            console.log("Game not over: empty cell found");
            return false;
          }
        }
      }

      // Check for any possible merges
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const currentValue = currentGrid[i][j];
          // Check right
          if (j < gridSize - 1 && currentValue === currentGrid[i][j + 1]) {
            console.log("Game not over: horizontal merge possible");
            return false;
          }
          // Check down
          if (i < gridSize - 1 && currentValue === currentGrid[i + 1][j]) {
            console.log("Game not over: vertical merge possible");
            return false;
          }
        }
      }

      console.log("Game over: no moves possible");
      return true;
    },
    [gridSize]
  );

  const move = useCallback(
    (direction: "up" | "down" | "left" | "right") => {
      if (gameOver) return;

      setGrid((currentGrid) => {
        let newGrid = currentGrid.map((row) => [...row]);
        let newScore = score;
        let hasChanged = false;

        const moveAndMerge = (line: Cell[]): Cell[] => {
          // Remove nulls
          let newLine = line.filter((cell) => cell !== null);
          // Merge
          for (let i = 0; i < newLine.length - 1; i++) {
            if (newLine[i] === newLine[i + 1]) {
              newLine[i] *= 2;
              newScore += newLine[i] as number;
              newLine.splice(i + 1, 1);
              hasChanged = true;
            }
          }
          // Pad with nulls
          while (newLine.length < gridSize) {
            newLine.push(null);
          }
          return newLine;
        };

        if (direction === "left" || direction === "right") {
          newGrid = newGrid.map((row) => {
            const newRow = moveAndMerge(
              direction === "left" ? row : row.reverse()
            );
            return direction === "left" ? newRow : newRow.reverse();
          });
        } else {
          for (let col = 0; col < gridSize; col++) {
            let column = newGrid.map((row) => row[col]);
            column = moveAndMerge(
              direction === "up" ? column : column.reverse()
            );
            for (let row = 0; row < gridSize; row++) {
              newGrid[row][col] =
                direction === "up" ? column[row] : column[gridSize - 1 - row];
            }
          }
        }

        // Check if any tile has moved
        if (
          hasChanged ||
          JSON.stringify(currentGrid) !== JSON.stringify(newGrid)
        ) {
          newGrid = addRandomCell(newGrid);
          setScore(newScore);

          // Check for game over after adding a new cell
          if (isGameOver(newGrid)) {
            console.log("Setting game over to true");
            setGameOver(true);
          }
        }

        return newGrid;
      });
    },
    [gameOver, score, gridSize, addRandomCell, isGameOver]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          move("up");
          break;
        case "ArrowDown":
          move("down");
          break;
        case "ArrowLeft":
          move("left");
          break;
        case "ArrowRight":
          move("right");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [move]);

  return (
    <div>
      <h1>2048</h1>
      <div>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as Difficulty)}
        >
          <option value="beginner">Principiante (4x4)</option>
          <option value="intermediate">Intermediário (5x5)</option>
          <option value="expert">Especialista (6x6)</option>
        </select>
      </div>
      <div>Score: {score}</div>
      <button onClick={resetGame}>Novo Jogo</button>
      <div style={{ display: "inline-block" }}>
        {grid.map((row, i) => (
          <div key={i} style={{ display: "flex" }}>
            {row.map((cell, j) => (
              <div
                key={j}
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  backgroundColor: cell
                    ? `hsl(${Math.log2(cell) * 30}, 70%, 80%)`
                    : "#eee",
                }}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      {gameOver && <p>Fim de Jogo!</p>}
      {!gameOver && <p>Use as setas do teclado para mover os blocos.</p>}
    </div>
  );
}
