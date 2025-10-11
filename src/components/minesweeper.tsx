import { useState, useEffect } from "react";

type Difficulty = "beginner" | "intermediate" | "expert";

const DIFFICULTY_SETTINGS = {
  beginner: { gridSize: 9, bombCount: 10 },
  intermediate: { gridSize: 16, bombCount: 40 },
  expert: { gridSize: 22, bombCount: 99 },
};

type CellValue = number | "bomb";
type Grid = CellValue[];

const createBoard = (gridSize: number, bombCount: number): Grid => {
  const board = Array(gridSize * gridSize).fill(0);
  let bombsPlaced = 0;

  while (bombsPlaced < bombCount) {
    const randomIndex = Math.floor(Math.random() * board.length);
    if (board[randomIndex] !== "bomb") {
      board[randomIndex] = "bomb";
      bombsPlaced++;
    }
  }

  return board;
};

const calculateNumbers = (board: Grid, gridSize: number): Grid => {
  const newBoard = [...board];

  for (let i = 0; i < gridSize * gridSize; i++) {
    if (newBoard[i] === "bomb") continue;

    const adjacentCells = getAdjacentCells(i, gridSize);
    let bombCount = 0;

    adjacentCells.forEach((cellIndex) => {
      if (newBoard[cellIndex] === "bomb") bombCount++;
    });

    newBoard[i] = bombCount;
  }

  return newBoard;
};

const getAdjacentCells = (index: number, gridSize: number): number[] => {
  const adjacentCells = [];
  const isLeftEdge = index % gridSize === 0;
  const isRightEdge = index % gridSize === gridSize - 1;

  if (index > gridSize - 1) {
    adjacentCells.push(index - gridSize);
    if (!isLeftEdge) adjacentCells.push(index - gridSize - 1);
    if (!isRightEdge) adjacentCells.push(index - gridSize + 1);
  }

  if (!isLeftEdge) adjacentCells.push(index - 1);
  if (!isRightEdge) adjacentCells.push(index + 1);

  if (index < gridSize * (gridSize - 1)) {
    adjacentCells.push(index + gridSize);
    if (!isLeftEdge) adjacentCells.push(index + gridSize - 1);
    if (!isRightEdge) adjacentCells.push(index + gridSize + 1);
  }

  return adjacentCells;
};

const Cell = ({ value, revealed, flagged, onClick, onRightClick }) => (
  <button
    onClick={onClick}
    onContextMenu={(e) => {
      e.preventDefault();
      onRightClick();
    }}
    style={{
      width: "30px",
      height: "30px",
      backgroundColor: revealed ? "#ddd" : "#fff",
      border: "1px solid #999",
    }}
  >
    {revealed && value !== 0 && value !== "bomb" && value}
    {revealed && value === "bomb" && "💣"}
    {!revealed && flagged && "🚩"}
  </button>
);

export default function Minesweeper() {
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [board, setBoard] = useState<Grid>([]);
  const [revealed, setRevealed] = useState<boolean[]>([]);
  const [flagged, setFlagged] = useState<boolean[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const { gridSize, bombCount } = DIFFICULTY_SETTINGS[difficulty];

  useEffect(() => {
    resetGame();
  }, [difficulty]);

  useEffect(() => {
    let timer: number;
    if (gameStarted && !gameOver) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted, gameOver]);

  const resetGame = () => {
    const newBoard = calculateNumbers(
      createBoard(gridSize, bombCount),
      gridSize
    );
    setBoard(newBoard);
    setRevealed(Array(gridSize * gridSize).fill(false));
    setFlagged(Array(gridSize * gridSize).fill(false));
    setGameOver(false);
    setWin(false);
    setTime(0);
    setGameStarted(false);
  };

  const startGame = () => {
    if (!gameStarted) {
      setGameStarted(true);
    } else {
      resetGame();
    }
  };

  const revealCell = (index: number) => {
    if (gameOver || revealed[index] || flagged[index]) return;
    if (!gameStarted) setGameStarted(true);

    const newRevealed = [...revealed];
    const cellsToReveal = [index];

    while (cellsToReveal.length > 0) {
      const currentIndex = cellsToReveal.pop()!;
      if (newRevealed[currentIndex]) continue;

      newRevealed[currentIndex] = true;

      if (board[currentIndex] === "bomb") {
        board.forEach((cell, i) => {
          if (cell === "bomb") newRevealed[i] = true;
        });
        setGameOver(true);
        setRevealed(newRevealed);
        return;
      }

      if (board[currentIndex] === 0) {
        const adjacentCells = getAdjacentCells(currentIndex, gridSize);
        adjacentCells.forEach((cellIndex) => {
          if (!newRevealed[cellIndex] && !flagged[cellIndex]) {
            cellsToReveal.push(cellIndex);
          }
        });
      }
    }

    setRevealed(newRevealed);
    checkWin(newRevealed);
  };

  const toggleFlag = (index: number) => {
    if (gameOver || revealed[index]) return;
    if (!gameStarted) setGameStarted(true);

    const newFlagged = [...flagged];
    newFlagged[index] = !newFlagged[index];
    setFlagged(newFlagged);
  };

  const checkWin = (newRevealed: boolean[]) => {
    const revealedCount = newRevealed.filter((cell) => cell).length;
    if (revealedCount === gridSize * gridSize - bombCount) {
      setWin(true);
      setGameOver(true);
    }
  };

  return (
    <div>
      <h1>Minesweeper</h1>
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <div>Time: {time}s</div>
        <button
          onClick={startGame}
          style={{ fontSize: "24px", padding: "5px 10px" }}
        >
          {gameOver ? "😵" : win ? "😎" : "🙂"}
        </button>
        <div>
          Flags: {flagged.filter((f) => f).length}/{bombCount}
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 30px)`,
          gap: "1px",
          margin: "20px 0",
        }}
      >
        {board.map((cell, index) => (
          <Cell
            key={index}
            value={cell}
            revealed={revealed[index]}
            flagged={flagged[index]}
            onClick={() => revealCell(index)}
            onRightClick={() => toggleFlag(index)}
          />
        ))}
      </div>
      {gameOver && <p>{win ? "You Win!" : "Game Over!"}</p>}
    </div>
  );
}
