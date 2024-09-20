
// https://www.futoshiki.com/
import { useState, useEffect, useCallback } from "preact/hooks";

import { IconArrowNarrowLeft, IconArrowNarrowUp, IconArrowNarrowRight, IconArrowNarrowDown } from "@tabler/icons-react"

type Difficulty = "trivial" | "easy" | "tricky" | "extreme";

const DIFFICULTY_SETTINGS = {
  trivial: { givenNumbers: 8, useConstraints: false },
  easy: { givenNumbers: 6, useConstraints: true },
  tricky: { givenNumbers: 4, useConstraints: true },
  extreme: { givenNumbers: 2, useConstraints: true },
};

type Cell = number | null;
type Constraint = ">" | "<" | null;

interface FutoshikiGrid {
  cells: Cell[][];
  horizontalConstraints: Constraint[][];
  verticalConstraints: Constraint[][];
  givenCells: boolean[][];
  solution: number[][];
}

export default function Futoshiki() {
  const [gridSize, setGridSize] = useState(4);
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [grid, setGrid] = useState<FutoshikiGrid>({
    cells: [],
    horizontalConstraints: [],
    verticalConstraints: [],
    givenCells: [],
    solution: [],
  });
  const [isComplete, setIsComplete] = useState(false);
  const [showingSolution, setShowingSolution] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const givenNumbers = DIFFICULTY_SETTINGS[difficulty].givenNumbers;

  const initializeGrid = useCallback(() => {
    const solution = generateValidSolution(gridSize);
    const cells: Cell[][] = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(null));
    const horizontalConstraints: Constraint[][] = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize - 1).fill(null));
    const verticalConstraints: Constraint[][] = Array(gridSize - 1)
      .fill(null)
      .map(() => Array(gridSize).fill(null));
    const givenCells: boolean[][] = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(false));

    // Add given numbers
    const positions = shuffleArray(Array.from({ length: gridSize * gridSize }, (_, i) => i));
    const actualGivenNumbers = Math.min(DIFFICULTY_SETTINGS[difficulty].givenNumbers, gridSize * gridSize - 1);
    for (let i = 0; i < actualGivenNumbers; i++) {
      const pos = positions[i];
      const row = Math.floor(pos / gridSize);
      const col = pos % gridSize;
      cells[row][col] = solution[row][col];
      givenCells[row][col] = true;
    }

    // Add constraints based on the solution
    if (DIFFICULTY_SETTINGS[difficulty].useConstraints) {
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize - 1; j++) {
          if (Math.random() < 0.3) {
            horizontalConstraints[i][j] = solution[i][j] < solution[i][j + 1] ? <IconArrowNarrowLeft /> : <IconArrowNarrowRight />;
          }
          if (i < gridSize - 1 && Math.random() < 0.3) {
            verticalConstraints[i][j] = solution[i][j] < solution[i + 1][j] ? <IconArrowNarrowUp /> : <IconArrowNarrowDown />;
          }
        }
      }
    }

    return { cells, horizontalConstraints, verticalConstraints, givenCells, solution };
  }, [gridSize, difficulty]);

  const generateValidSolution = (size: number): number[][] => {
    const solution: number[][] = Array(size)
      .fill(null)
      .map(() => Array(size).fill(0));

    const solve = (row: number, col: number): boolean => {
      if (row === size) return true;
      if (col === size) return solve(row + 1, 0);

      const numbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, size));
      for (const num of numbers) {
        if (isValidSolutionPlacement(solution, row, col, num, size)) {
          solution[row][col] = num;
          if (solve(row, col + 1)) return true;
          solution[row][col] = 0;
        }
      }

      return false;
    };

    if (!solve(0, 0)) {
      throw new Error("Failed to generate a valid solution");
    }
    return solution;
  };

  const isValidSolutionPlacement = (
    grid: number[][],
    row: number,
    col: number,
    num: number,
    size: number
  ): boolean => {
    // Check row
    for (let i = 0; i < size; i++) {
      if (grid[row][i] === num) return false;
    }

    // Check column
    for (let i = 0; i < size; i++) {
      if (grid[i][col] === num) return false;
    }

    return true;
  };

  const shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setGrid(initializeGrid());
    setIsComplete(false);
    setShowingSolution(false);
    setGameOver(false);
  }, [gridSize, difficulty, initializeGrid]);

  const handleCellClick = (row: number, col: number) => {
    if (!grid.givenCells[row][col] && !showingSolution && !gameOver) {
      const newGrid = { ...grid, cells: grid.cells.map((r) => [...r]) };
      const currentValue = newGrid.cells[row][col];
      if (currentValue === null) {
        newGrid.cells[row][col] = 1;
      } else if (currentValue < gridSize) {
        newGrid.cells[row][col] = currentValue + 1;
      } else {
        newGrid.cells[row][col] = null;
      }
      setGrid(newGrid);
      checkCompletion(newGrid);
    }
  };

  const checkCompletion = (currentGrid: FutoshikiGrid) => {
    // Check if all cells are filled
    const allFilled = currentGrid.cells.every(row => row.every(cell => cell !== null));

    if (allFilled) {
      // Check for correctness
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (currentGrid.cells[i][j] !== currentGrid.solution[i][j]) {
            setGameOver(true);
            setIsComplete(false);
            return;
          }
        }
      }

      // If we've made it here, all cells are correct
      setIsComplete(true);
      setGameOver(false);
    } else {
      setIsComplete(false);
      setGameOver(false);
    }
  };

  const handleShowSolution = () => {
    setGrid((prevGrid) => ({
      ...prevGrid,
      cells: prevGrid.solution.map((row) => [...row]),
    }));
    setShowingSolution(true);
    setIsComplete(false);
    setGameOver(false);
  };

  const renderCell = (row: number, col: number) => {
    const cell = grid.cells[row][col];
    const isGiven = grid.givenCells[row][col];
    const isSolutionCell = showingSolution && !isGiven;

    return (
      <div
        onClick={() => handleCellClick(row, col)}
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: isGiven || showingSolution ? "default" : "pointer",
          backgroundColor: isGiven
            ? "#f0f0f0"
            : isSolutionCell
              ? "#e6ffe6"
              : "white",
          fontWeight: isGiven ? "bold" : "normal",
          color: isSolutionCell ? "blue" : "black",
          fontSize: "18px",
        }}
      >
        {cell}
      </div>
    );
  };

  const renderConstraint = (constraint: Constraint, isVertical: boolean) => {
    if (!constraint) return <div style={{ width: "20px", height: "20px" }}></div>;
    const arrow = isVertical
      ? (constraint === "<" ? <IconArrowNarrowUp /> : <IconArrowNarrowDown/>)
      : constraint;
    return (
      <div style={{
        width: "20px",
        height: "20px",
        display: "flex",
        // paddingRight: "20px",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "bold",
      }}>
        {arrow}
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Futoshiki Puzzle</h1>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px" }}>
          Board size:
          <select
            value={gridSize}
            onChange={(e) => setGridSize(Number(e.target.value))}
            style={{ marginLeft: "5px" }}
          >
            {[4, 5, 6, 7, 8, 9].map((size) => (
              <option key={size} value={size}>
                {size}x{size}
              </option>
            ))}
          </select>
        </label>
        <label style={{ marginRight: "10px" }}>
          Difficulty:
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            style={{ marginLeft: "5px" }}
          >
            <option value="trivial">Trivial</option>
            <option value="easy">Easy</option>
            <option value="tricky">Tricky</option>
            <option value="extreme">Extreme</option>
          </select>
        </label>
      </div>
      <div style={{ display: "inline-block" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {grid.cells.map((row, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" }}>
              {i > 0 && (
                <div style={{ display: "flex", height: "20px" }}>
                  {row.map((_, j) => (
                    <div key={`v-${i}-${j}`} style={{ width: "60px", display: "flex", justifyContent: "center", paddingRight: "20px" }}>
                      {renderConstraint(grid.verticalConstraints[i - 1][j], true)}
                    </div>
                  ))}
                </div>
              )}
              <div style={{ display: "flex" }}>
                {row.map((_, j) => (
                  <div key={`c-${i}-${j}`} style={{ display: "flex", alignItems: "center" }}>
                    {renderCell(i, j)}
                    {j < gridSize - 1 && (
                      <div style={{ width: "20px", height: "40px", display: "flex", alignItems: "center" }}>
                        {renderConstraint(grid.horizontalConstraints[i][j], false)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isComplete && !showingSolution && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Parabéns! Você completou o puzzle!
        </p>
      )}
      {gameOver && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Game Over! Há erros no seu preenchimento.
        </p>
      )}
      {showingSolution && (
        <p style={{ color: "blue", fontWeight: "bold" }}>
          Solução exibida.
        </p>
      )}
      <p>The game automatically detects a correct solution.</p>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleShowSolution} disabled={showingSolution}>
          {showingSolution ? "Solution shown" : "Show solution"}
        </button>
        {showingSolution && (
          <button
            onClick={() => {
              setGrid(initializeGrid());
              setShowingSolution(false);
              setIsComplete(false);
              setGameOver(false);
            }}
          >
            New Puzzle
          </button>
        )}
      </div>
    </div>
  );
}
