import { useState, useEffect, useCallback, useRef } from "react";

const DIFFICULTY_SETTINGS = {
  beginner: { carSpeed: 0.1, logSpeed: 0.1, timeLimit: 60 },
  intermediate: { carSpeed: 1.5, logSpeed: 0.75, timeLimit: 45 },
  expert: { carSpeed: 2, logSpeed: 1, timeLimit: 30 },
};

const GRID_SIZE = { width: 13, height: 14 };
const CELL_SIZE = 40;
const CANVAS_SIZE = {
  width: GRID_SIZE.width * CELL_SIZE,
  height: GRID_SIZE.height * CELL_SIZE,
};

export default function Frogger() {
  const [difficulty, setDifficulty] = useState("beginner");
  const [frog, setFrog] = useState({ x: 6, y: 13 });
  const [cars, setCars] = useState([]);
  const [logs, setLogs] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    DIFFICULTY_SETTINGS.beginner.timeLimit
  );

  const canvasRef = useRef(null);

  const { carSpeed, logSpeed, timeLimit } = DIFFICULTY_SETTINGS[difficulty];

  const resetGame = useCallback(() => {
    setFrog({ x: 6, y: 13 });
    setCars([
      { x: 0, y: 12, width: 2, speed: carSpeed },
      { x: 3, y: 11, width: 2, speed: -carSpeed },
      { x: 7, y: 10, width: 3, speed: carSpeed },
      { x: 4, y: 9, width: 2, speed: -carSpeed },
      { x: 0, y: 8, width: 3, speed: carSpeed },
    ]);
    setLogs([
      { x: 0, y: 6, width: 3, speed: logSpeed },
      { x: 5, y: 5, width: 4, speed: -logSpeed },
      { x: 0, y: 4, width: 3, speed: logSpeed },
      { x: 6, y: 3, width: 3, speed: -logSpeed },
      { x: 2, y: 2, width: 4, speed: logSpeed },
      { x: 0, y: 1, width: 3, speed: -logSpeed }, // Adicionada nova linha de madeiras
    ]);
    setScore(0);
    setLives(3);
    setGameOver(false);
    setTimeLeft(timeLimit);
  }, [carSpeed, logSpeed, timeLimit]);

  useEffect(() => {
    resetGame();
  }, [difficulty, resetGame]);

  const handleKeyDown = useCallback(
    (e) => {
      if (!gameStarted || gameOver) return;

      switch (e.key) {
        case "ArrowLeft":
          setFrog((prev) => ({ ...prev, x: Math.max(0, prev.x - 1) }));
          break;
        case "ArrowRight":
          setFrog((prev) => ({
            ...prev,
            x: Math.min(GRID_SIZE.width - 1, prev.x + 1),
          }));
          break;
        case "ArrowUp":
          setFrog((prev) => ({ ...prev, y: Math.max(0, prev.y - 1) }));
          if (frog.y === 1) setScore((prev) => prev + 10);
          break;
        case "ArrowDown":
          setFrog((prev) => ({
            ...prev,
            y: Math.min(GRID_SIZE.height - 1, prev.y + 1),
          }));
          break;
      }
    },
    [gameStarted, gameOver, frog]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const updateGameObjects = useCallback(() => {
    if (!gameStarted || gameOver) return;

    setCars((prev) =>
      prev.map((car) => ({
        ...car,
        x: (car.x + car.speed + GRID_SIZE.width) % GRID_SIZE.width,
      }))
    );

    setLogs((prev) =>
      prev.map((log) => ({
        ...log,
        x: (log.x + log.speed + GRID_SIZE.width) % GRID_SIZE.width,
      }))
    );

    // Check collisions with cars
    if (
      cars.some(
        (car) =>
          frog.y === car.y && frog.x >= car.x && frog.x < car.x + car.width
      )
    ) {
      setLives((prev) => prev - 1);
      setFrog({ x: 6, y: 13 });
    }

    // Check if frog is on a log
    const onLog = logs.some(
      (log) => frog.y === log.y && frog.x >= log.x && frog.x < log.x + log.width
    );

    // Move frog with log
    if (frog.y >= 2 && frog.y <= 6) {
      if (onLog) {
        const currentLog = logs.find(
          (log) =>
            frog.y === log.y && frog.x >= log.x && frog.x < log.x + log.width
        );
        if (currentLog) {
          setFrog((prev) => ({
            ...prev,
            x: (prev.x + currentLog.speed + GRID_SIZE.width) % GRID_SIZE.width,
          }));
        }
      } else {
        setLives((prev) => prev - 1);
        setFrog({ x: 6, y: 13 });
      }
    }

    // Check if frog reached the top
    if (frog.y === 0) {
      // Verifique se o sapo está em uma posição segura no topo
      const safePositions = [0, 3, 6, 9, 12]; // Posições x seguras no topo
      if (safePositions.includes(frog.x)) {
        setScore((prev) => prev + 50);
        setFrog({ x: 6, y: 13 });
      } else {
        // Se não estiver em uma posição segura, trate como se caísse na água
        setLives((prev) => prev - 1);
        setFrog({ x: 6, y: 13 });
      }
    }

    // Check game over conditions
    if (lives <= 0 || timeLeft <= 0) {
      setGameOver(true);
    }
  }, [gameStarted, gameOver, cars, logs, frog, lives, timeLeft]);

  useEffect(() => {
    const gameLoop = setInterval(updateGameObjects, 1000 / 30);
    return () => clearInterval(gameLoop);
  }, [updateGameObjects]);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [gameStarted, gameOver]);

  const startGame = () => {
    setGameStarted(true);
    resetGame();
  };

  const renderGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);

    // Draw safe zones
    ctx.fillStyle = "#080";
    ctx.fillRect(0, 0, CANVAS_SIZE.width, CELL_SIZE);
    ctx.fillRect(0, 7 * CELL_SIZE, CANVAS_SIZE.width, CELL_SIZE);
    ctx.fillRect(0, 13 * CELL_SIZE, CANVAS_SIZE.width, CELL_SIZE);

    // Draw water
    ctx.fillStyle = "#00F";
    ctx.fillRect(0, CELL_SIZE, CANVAS_SIZE.width, 6 * CELL_SIZE);

    // Draw road
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 8 * CELL_SIZE, CANVAS_SIZE.width, 5 * CELL_SIZE);

    // Draw cars
    ctx.fillStyle = "#F00";
    cars.forEach((car) => {
      ctx.fillRect(
        car.x * CELL_SIZE,
        car.y * CELL_SIZE,
        car.width * CELL_SIZE,
        CELL_SIZE
      );
    });

    // Draw logs
    ctx.fillStyle = "#8B4513";
    logs.forEach((log) => {
      ctx.fillRect(
        log.x * CELL_SIZE,
        log.y * CELL_SIZE,
        log.width * CELL_SIZE,
        CELL_SIZE
      );
    });

    // Draw frog
    ctx.fillStyle = "#0F0";
    ctx.fillRect(frog.x * CELL_SIZE, frog.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

    // Draw score, lives, and time
    ctx.fillStyle = "#FFF";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, CANVAS_SIZE.height - 40);
    ctx.fillText(`Lives: ${lives}`, 10, CANVAS_SIZE.height - 10);
    ctx.fillText(
      `Time: ${timeLeft}`,
      CANVAS_SIZE.width - 100,
      CANVAS_SIZE.height - 10
    );

    // Adicione isso para desenhar as posições seguras no topo
    ctx.fillStyle = "#080";
    [0, 3, 6, 9, 12].forEach((x) => {
      ctx.fillRect(x * CELL_SIZE, 0, CELL_SIZE, CELL_SIZE);
    });

    requestAnimationFrame(renderGame);
  }, [cars, logs, frog, score, lives, timeLeft]);

  useEffect(() => {
    renderGame();
  }, [renderGame]);

  return (
    <div>
      <h1>Frogger</h1>
      <div>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="beginner">Principiante</option>
          <option value="intermediate">Intermediário</option>
          <option value="expert">Especialista</option>
        </select>
      </div>
      <div>Score: {score}</div>
      <button onClick={startGame} disabled={gameStarted && !gameOver}>
        {gameOver ? "Jogar Novamente" : gameStarted ? "Reiniciar" : "Iniciar"}
      </button>
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE.width}
        height={CANVAS_SIZE.height}
        style={{ border: "1px solid black" }}
      />
      {gameOver && <p>Fim de Jogo!</p>}
      {!gameStarted && (
        <p>
          Use as setas para mover o sapo. Chegue ao topo para marcar pontos!
        </p>
      )}
    </div>
  );
}
