import { useState, useEffect } from "react";

const GRID_SIZE = 10;
const BOMB_COUNT = 10;

const createBoard = () => {
  const board = Array(GRID_SIZE * GRID_SIZE).fill(0);
  let bombsPlaced = 0;

  while (bombsPlaced < BOMB_COUNT) {
    const randomIndex = Math.floor(Math.random() * board.length);
    if (board[randomIndex] !== "bomb") {
      board[randomIndex] = "bomb";
      bombsPlaced++;
    }
  }

  return board;
};

const calculateNumbers = (board) => {
  const newBoard = [...board];

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    if (newBoard[i] === "bomb") continue;

    const adjacentCells = getAdjacentCells(i);
    let bombCount = 0;

    adjacentCells.forEach((cellIndex) => {
      if (newBoard[cellIndex] === "bomb") bombCount++;
    });

    newBoard[i] = bombCount;
  }

  return newBoard;
};

const getAdjacentCells = (index) => {
  const adjacentCells = [];
  const isLeftEdge = index % GRID_SIZE === 0;
  const isRightEdge = index % GRID_SIZE === GRID_SIZE - 1;

  if (index > GRID_SIZE - 1) {
    adjacentCells.push(index - GRID_SIZE);
    if (!isLeftEdge) adjacentCells.push(index - GRID_SIZE - 1);
    if (!isRightEdge) adjacentCells.push(index - GRID_SIZE + 1);
  }

  if (!isLeftEdge) adjacentCells.push(index - 1);
  if (!isRightEdge) adjacentCells.push(index + 1);

  if (index < GRID_SIZE * (GRID_SIZE - 1)) {
    adjacentCells.push(index + GRID_SIZE);
    if (!isLeftEdge) adjacentCells.push(index + GRID_SIZE - 1);
    if (!isRightEdge) adjacentCells.push(index + GRID_SIZE + 1);
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
  const [board, setBoard] = useState([]);
  const [revealed, setRevealed] = useState([]);
  const [flagged, setFlagged] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const newBoard = calculateNumbers(createBoard());
    setBoard(newBoard);
    setRevealed(Array(GRID_SIZE * GRID_SIZE).fill(false));
    setFlagged(Array(GRID_SIZE * GRID_SIZE).fill(false));
    setGameOver(false);
    setWin(false);
  };

  const revealCell = (index) => {
    if (gameOver || revealed[index] || flagged[index]) return;

    const newRevealed = [...revealed];
    const cellsToReveal = [index];

    while (cellsToReveal.length > 0) {
      const currentIndex = cellsToReveal.pop();
      if (newRevealed[currentIndex]) continue;

      newRevealed[currentIndex] = true;

      if (board[currentIndex] === "bomb") {
        // Revelar todas as bombas
        board.forEach((cell, i) => {
          if (cell === "bomb") newRevealed[i] = true;
        });
        setGameOver(true);
        setRevealed(newRevealed);
        return;
      }

      if (board[currentIndex] === 0) {
        const adjacentCells = getAdjacentCells(currentIndex);
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

  const toggleFlag = (index) => {
    if (gameOver || revealed[index]) return;

    const newFlagged = [...flagged];
    newFlagged[index] = !newFlagged[index];
    setFlagged(newFlagged);
  };

  const checkWin = (newRevealed) => {
    const revealedCount = newRevealed.filter((cell) => cell).length;
    if (revealedCount === GRID_SIZE * GRID_SIZE - BOMB_COUNT) {
      setWin(true);
      setGameOver(true);
    }
  };

  return (
    <div>
      <h1>Minesweeper</h1>
      <button onClick={resetGame}>New Game</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, 30px)`,
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
