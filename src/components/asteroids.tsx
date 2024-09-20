import { useState, useEffect, useCallback, useRef } from "preact/hooks";

type Difficulty = "beginner" | "intermediate" | "expert";

const DIFFICULTY_SETTINGS = {
  beginner: { asteroidCount: 3, asteroidSpeed: 0.5, bulletSpeed: 5, lives: 5 },
  intermediate: {
    asteroidCount: 5,
    asteroidSpeed: 1,
    bulletSpeed: 6,
    lives: 3,
  },
  expert: { asteroidCount: 7, asteroidSpeed: 1.5, bulletSpeed: 7, lives: 1 },
};

const CANVAS_SIZE = { width: 800, height: 600 };

type Position = { x: number; y: number };
type Velocity = { dx: number; dy: number };

interface GameObject extends Position, Velocity {
  radius: number;
}

interface Ship extends GameObject {
  rotation: number;
}

export default function Asteroids() {
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [ship, setShip] = useState<Ship>({
    x: CANVAS_SIZE.width / 2,
    y: CANVAS_SIZE.height / 2,
    dx: 0,
    dy: 0,
    radius: 20,
    rotation: 0,
  });
  const [asteroids, setAsteroids] = useState<GameObject[]>([]);
  const [bullets, setBullets] = useState<GameObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [lives, setLives] = useState(DIFFICULTY_SETTINGS.beginner.lives);
  const [level, setLevel] = useState(1);
  const [thrust, setThrust] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { asteroidCount, asteroidSpeed, bulletSpeed } =
    DIFFICULTY_SETTINGS[difficulty];

  const createAsteroids = useCallback(() => {
    const newAsteroids: GameObject[] = [];
    for (let i = 0; i < asteroidCount; i++) {
      newAsteroids.push({
        x: Math.random() * CANVAS_SIZE.width,
        y: Math.random() * CANVAS_SIZE.height,
        dx: (Math.random() - 0.5) * asteroidSpeed,
        dy: (Math.random() - 0.5) * asteroidSpeed,
        radius: 30 + Math.random() * 20,
      });
    }
    setAsteroids(newAsteroids);
  }, [asteroidCount, asteroidSpeed]);

  const resetGame = useCallback(() => {
    setShip({
      x: CANVAS_SIZE.width / 2,
      y: CANVAS_SIZE.height / 2,
      dx: 0,
      dy: 0,
      radius: 20,
      rotation: 0,
    });
    setBullets([]);
    setScore(0);
    setGameOver(false);
    setLives(DIFFICULTY_SETTINGS[difficulty].lives);
    setLevel(1);
    createAsteroids();
  }, [createAsteroids, difficulty]);

  useEffect(() => {
    resetGame();
  }, [difficulty, resetGame]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;

      switch (e.key) {
        case "ArrowLeft":
          setShip((prev) => ({ ...prev, rotation: prev.rotation - 0.1 }));
          break;
        case "ArrowRight":
          setShip((prev) => ({ ...prev, rotation: prev.rotation + 0.1 }));
          break;
        case "ArrowUp":
          setThrust(true);
          break;
        case " ":
          if (bullets.length < 5) {
            setBullets((prev) => [
              ...prev,
              {
                x: ship.x + Math.cos(ship.rotation) * ship.radius,
                y: ship.y + Math.sin(ship.rotation) * ship.radius,
                dx: Math.cos(ship.rotation) * bulletSpeed,
                dy: Math.sin(ship.rotation) * bulletSpeed,
                radius: 3,
              },
            ]);
          }
          break;
      }
    },
    [gameStarted, gameOver, ship, bulletSpeed, bullets]
  );

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      setThrust(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  const updateGameObjects = useCallback(() => {
    if (!gameStarted || gameOver) return;

    setShip((prev) => {
      const acceleration = thrust ? 0.05 : 0;
      const newDx = prev.dx + Math.cos(prev.rotation) * acceleration;
      const newDy = prev.dy + Math.sin(prev.rotation) * acceleration;
      const speed = Math.sqrt(newDx * newDx + newDy * newDy);
      const maxSpeed = 5;
      const scaleFactor = speed > maxSpeed ? maxSpeed / speed : 1;

      return {
        ...prev,
        x:
          (prev.x + newDx * scaleFactor + CANVAS_SIZE.width) %
          CANVAS_SIZE.width,
        y:
          (prev.y + newDy * scaleFactor + CANVAS_SIZE.height) %
          CANVAS_SIZE.height,
        dx: newDx * scaleFactor * 0.99,
        dy: newDy * scaleFactor * 0.99,
      };
    });

    setAsteroids((prev) =>
      prev.map((asteroid) => ({
        ...asteroid,
        x: (asteroid.x + asteroid.dx + CANVAS_SIZE.width) % CANVAS_SIZE.width,
        y: (asteroid.y + asteroid.dy + CANVAS_SIZE.height) % CANVAS_SIZE.height,
      }))
    );

    setBullets((prev) =>
      prev
        .map((bullet) => ({
          ...bullet,
          x: bullet.x + bullet.dx,
          y: bullet.y + bullet.dy,
        }))
        .filter(
          (bullet) =>
            bullet.x > 0 &&
            bullet.x < CANVAS_SIZE.width &&
            bullet.y > 0 &&
            bullet.y < CANVAS_SIZE.height
        )
    );

    bullets.forEach((bullet) => {
      asteroids.forEach((asteroid, index) => {
        const dx = bullet.x - asteroid.x;
        const dy = bullet.y - asteroid.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < asteroid.radius + bullet.radius) {
          setAsteroids((prev) => {
            const newAsteroids = prev.filter((_, i) => i !== index);
            if (asteroid.radius > 20) {
              const newRadius = asteroid.radius / 2;
              for (let i = 0; i < 2; i++) {
                newAsteroids.push({
                  x: asteroid.x,
                  y: asteroid.y,
                  dx: (Math.random() - 0.5) * asteroidSpeed * 2,
                  dy: (Math.random() - 0.5) * asteroidSpeed * 2,
                  radius: newRadius,
                });
              }
            }
            return newAsteroids;
          });
          setBullets((prev) => prev.filter((b) => b !== bullet));
          setScore((prev) => prev + 10);
        }
      });
    });

    asteroids.forEach((asteroid) => {
      const dx = ship.x - asteroid.x;
      const dy = ship.y - asteroid.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < asteroid.radius + ship.radius) {
        setLives((prev) => prev - 1);
        if (lives <= 1) {
          setGameOver(true);
        } else {
          setShip((prev) => ({
            ...prev,
            x: CANVAS_SIZE.width / 2,
            y: CANVAS_SIZE.height / 2,
            dx: 0,
            dy: 0,
          }));
        }
      }
    });

    if (asteroids.length === 0) {
      setLevel((prev) => prev + 1);
      createAsteroids();
    }
  }, [
    gameStarted,
    gameOver,
    ship,
    asteroids,
    bullets,
    lives,
    createAsteroids,
    asteroidSpeed,
  ]);

  useEffect(() => {
    const gameLoop = setInterval(updateGameObjects, 1000 / 60);
    return () => clearInterval(gameLoop);
  }, [updateGameObjects]);

  const startGame = () => {
    setGameStarted(true);
    resetGame();
  };

  const renderGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);

    ctx.save();
    ctx.translate(ship.x, ship.y);
    ctx.rotate(ship.rotation);
    ctx.beginPath();
    ctx.moveTo(0, -ship.radius);
    ctx.lineTo(-ship.radius, ship.radius);
    ctx.lineTo(ship.radius, ship.radius);
    ctx.closePath();
    ctx.strokeStyle = "white";
    ctx.stroke();
    if (thrust) {
      ctx.beginPath();
      ctx.moveTo(-ship.radius / 2, ship.radius);
      ctx.lineTo(0, ship.radius + 10);
      ctx.lineTo(ship.radius / 2, ship.radius);
      ctx.strokeStyle = "orange";
      ctx.stroke();
    }
    ctx.restore();

    ctx.fillStyle = "gray";
    asteroids.forEach((asteroid) => {
      ctx.beginPath();
      ctx.arc(asteroid.x, asteroid.y, asteroid.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = "white";
    bullets.forEach((bullet) => {
      ctx.beginPath();
      ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 30);
    ctx.fillText(`Lives: ${lives}`, 10, 60);
    ctx.fillText(`Level: ${level}`, 10, 90);

    requestAnimationFrame(renderGame);
  }, [ship, asteroids, bullets, score, lives, level, thrust]);

  useEffect(() => {
    renderGame();
  }, [renderGame]);

  return (
    <div>
      <h1>Asteroids</h1>
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
        <p>Use as setas para mover a nave, barra de espaço para atirar.</p>
      )}
    </div>
  );
}
