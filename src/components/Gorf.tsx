import { useState, useEffect, useCallback, useRef } from "react";

type Difficulty = "beginner" | "intermediate" | "expert";

const DIFFICULTY_SETTINGS = {
  beginner: { enemySpeed: 1, enemyFireRate: 0.005, playerFireRate: 0.3 },
  intermediate: { enemySpeed: 1.5, enemyFireRate: 0.01, playerFireRate: 0.25 },
  expert: { enemySpeed: 2, enemyFireRate: 0.015, playerFireRate: 0.2 },
};

const CANVAS_SIZE = { width: 800, height: 600 };

interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Enemy extends GameObject {
  direction: number;
}

export default function Galaga() {
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [player, setPlayer] = useState<GameObject>({
    x: CANVAS_SIZE.width / 2,
    y: CANVAS_SIZE.height - 50,
    width: 40,
    height: 30,
  });
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [playerBullets, setPlayerBullets] = useState<GameObject[]>([]);
  const [enemyBullets, setEnemyBullets] = useState<GameObject[]>([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { enemySpeed, enemyFireRate, playerFireRate } =
    DIFFICULTY_SETTINGS[difficulty];

  const resetGame = useCallback(() => {
    setPlayer({
      x: CANVAS_SIZE.width / 2,
      y: CANVAS_SIZE.height - 50,
      width: 40,
      height: 30,
    });
    setEnemies(
      Array.from({ length: 30 }, (_, i) => ({
        x: (i % 10) * 60 + 50,
        y: Math.floor(i / 10) * 50 + 50,
        width: 40,
        height: 30,
        direction: 1,
      }))
    );
    setPlayerBullets([]);
    setEnemyBullets([]);
    setScore(0);
    setLives(3);
    setGameOver(false);
  }, []);

  useEffect(() => {
    resetGame();
  }, [difficulty, resetGame]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;

      switch (e.key) {
        case "ArrowLeft":
          setPlayer((prev) => ({ ...prev, x: Math.max(0, prev.x - 5) }));
          break;
        case "ArrowRight":
          setPlayer((prev) => ({
            ...prev,
            x: Math.min(CANVAS_SIZE.width - prev.width, prev.x + 5),
          }));
          break;
        case " ":
          if (Math.random() < playerFireRate) {
            setPlayerBullets((prev) => [
              ...prev,
              {
                x: player.x + player.width / 2,
                y: player.y,
                width: 3,
                height: 10,
              },
            ]);
          }
          break;
      }
    },
    [gameStarted, gameOver, player, playerFireRate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const updateGameObjects = useCallback(() => {
    if (!gameStarted || gameOver) return;

    // Move enemies
    setEnemies((prev) =>
      prev.map((enemy) => {
        let newX = enemy.x + enemy.direction * enemySpeed;
        let newDirection = enemy.direction;

        if (newX <= 0 || newX + enemy.width >= CANVAS_SIZE.width) {
          newDirection *= -1;
          newX = enemy.x + newDirection * enemySpeed;
        }

        return { ...enemy, x: newX, direction: newDirection };
      })
    );

    // Move bullets
    setPlayerBullets((prev) =>
      prev
        .filter((bullet) => bullet.y > 0)
        .map((bullet) => ({ ...bullet, y: bullet.y - 5 }))
    );
    setEnemyBullets((prev) =>
      prev
        .filter((bullet) => bullet.y < CANVAS_SIZE.height)
        .map((bullet) => ({ ...bullet, y: bullet.y + 5 }))
    );

    // Enemy shooting
    setEnemies((prev) => {
      const newEnemyBullets: GameObject[] = [];
      prev.forEach((enemy) => {
        if (Math.random() < enemyFireRate) {
          newEnemyBullets.push({
            x: enemy.x + enemy.width / 2,
            y: enemy.y + enemy.height,
            width: 3,
            height: 10,
          });
        }
      });
      setEnemyBullets((prevBullets) => [...prevBullets, ...newEnemyBullets]);
      return prev;
    });

    // Check collisions
    setEnemies((prev) =>
      prev.filter((enemy) => {
        const hit = playerBullets.some(
          (bullet) =>
            bullet.x < enemy.x + enemy.width &&
            bullet.x + bullet.width > enemy.x &&
            bullet.y < enemy.y + enemy.height &&
            bullet.y + bullet.height > enemy.y
        );
        if (hit) {
          setScore((prevScore) => prevScore + 10);
          setPlayerBullets((prevBullets) =>
            prevBullets.filter((bullet) => bullet.y > enemy.y + enemy.height)
          );
        }
        return !hit;
      })
    );

    const playerHit = enemyBullets.some(
      (bullet) =>
        bullet.x < player.x + player.width &&
        bullet.x + bullet.width > player.x &&
        bullet.y < player.y + player.height &&
        bullet.y + bullet.height > player.y
    );

    if (playerHit) {
      setLives((prev) => prev - 1);
      setEnemyBullets([]);
      if (lives <= 1) {
        setGameOver(true);
      }
    }

    // Check win condition
    if (enemies.length === 0) {
      setGameOver(true);
    }
  }, [
    gameStarted,
    gameOver,
    enemySpeed,
    enemyFireRate,
    player,
    enemies,
    playerBullets,
    enemyBullets,
    lives,
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

    // Clear canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, CANVAS_SIZE.width, CANVAS_SIZE.height);

    // Draw player
    ctx.fillStyle = "#0F0";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw enemies
    ctx.fillStyle = "#F00";
    enemies.forEach((enemy) => {
      ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });

    // Draw player bullets
    ctx.fillStyle = "#0FF";
    playerBullets.forEach((bullet) => {
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    // Draw enemy bullets
    ctx.fillStyle = "#FF0";
    enemyBullets.forEach((bullet) => {
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    // Draw score and lives
    ctx.fillStyle = "#FFF";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 30);
    ctx.fillText(`Lives: ${lives}`, CANVAS_SIZE.width - 100, 30);

    requestAnimationFrame(renderGame);
  }, [player, enemies, playerBullets, enemyBullets, score, lives]);

  useEffect(() => {
    renderGame();
  }, [renderGame]);

  return (
    <div>
      <h1>Galaga</h1>
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
      {gameOver && (
        <p>{enemies.length === 0 ? "Você venceu!" : "Fim de Jogo!"}</p>
      )}
      {!gameStarted && (
        <p>Use as setas para mover a nave e a barra de espaço para atirar.</p>
      )}
    </div>
  );
}
