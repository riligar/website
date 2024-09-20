import { useState, useEffect, useCallback, useRef } from "preact/hooks";

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
  type: "small" | "medium" | "large";
  health: number;
}

interface Player extends GameObject {
  lives: number;
  powerLevel: number;
}

export default function Galaga() {
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [player, setPlayer] = useState<Player>({
    x: CANVAS_SIZE.width / 2,
    y: CANVAS_SIZE.height - 50,
    width: 40,
    height: 30,
    lives: 3,
    powerLevel: 1,
  });
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [playerBullets, setPlayerBullets] = useState<GameObject[]>([]);
  const [enemyBullets, setEnemyBullets] = useState<GameObject[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(30000);
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
      lives: 3,
      powerLevel: 1,
    });
    setEnemies(
      Array.from({ length: 20 }, (_, i) => ({
        x: Math.random() * (CANVAS_SIZE.width - 30),
        y: Math.random() * 200,
        width: 30,
        height: 30,
        type: i % 3 === 0 ? "large" : i % 2 === 0 ? "medium" : "small",
        health: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1,
      }))
    );
    setPlayerBullets([]);
    setEnemyBullets([]);
    setScore(0);
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
        case "ArrowUp":
          setPlayer((prev) => ({
            ...prev,
            y: Math.max(CANVAS_SIZE.height / 2, prev.y - 5),
          }));
          break;
        case "ArrowDown":
          setPlayer((prev) => ({
            ...prev,
            y: Math.min(CANVAS_SIZE.height - prev.height, prev.y + 5),
          }));
          break;
        case " ":
          if (Math.random() < playerFireRate) {
            setPlayerBullets((prev) => [
              ...prev,
              {
                x: player.x + player.width / 2 - 1,
                y: player.y,
                width: 2,
                height: 10,
              },
              ...(player.powerLevel > 1
                ? [
                    { x: player.x, y: player.y + 10, width: 2, height: 10 },
                    {
                      x: player.x + player.width - 2,
                      y: player.y + 10,
                      width: 2,
                      height: 10,
                    },
                  ]
                : []),
              ...(player.powerLevel > 2
                ? [
                    { x: player.x + 10, y: player.y + 5, width: 2, height: 10 },
                    {
                      x: player.x + player.width - 12,
                      y: player.y + 5,
                      width: 2,
                      height: 10,
                    },
                  ]
                : []),
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
      prev
        .map((enemy) => ({
          ...enemy,
          y: enemy.y + enemySpeed,
          x: enemy.x + Math.sin(Date.now() / 1000 + enemy.y) * 2,
        }))
        .filter((enemy) => enemy.y < CANVAS_SIZE.height)
    );

    // Move bullets
    setPlayerBullets((prev) =>
      prev
        .filter((bullet) => bullet.y > 0)
        .map((bullet) => ({ ...bullet, y: bullet.y - 7 }))
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
      prev
        .map((enemy) => {
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
            return { ...enemy, health: enemy.health - 1 };
          }
          return enemy;
        })
        .filter((enemy) => enemy.health > 0)
    );

    const playerHit = enemyBullets.some(
      (bullet) =>
        bullet.x < player.x + player.width &&
        bullet.x + bullet.width > player.x &&
        bullet.y < player.y + player.height &&
        bullet.y + bullet.height > player.y
    );

    if (playerHit) {
      setPlayer((prev) => ({
        ...prev,
        lives: prev.lives - 1,
        powerLevel: Math.max(1, prev.powerLevel - 1),
      }));
      setEnemyBullets([]);
      if (player.lives <= 1) {
        setGameOver(true);
      }
    }

    // Power-up
    if (score > 0 && score % 1000 === 0) {
      setPlayer((prev) => ({
        ...prev,
        powerLevel: Math.min(3, prev.powerLevel + 1),
      }));
    }

    // Spawn new enemies
    if (Math.random() < 0.02) {
      setEnemies((prev) => [
        ...prev,
        {
          x: Math.random() * (CANVAS_SIZE.width - 30),
          y: -30,
          width: 30,
          height: 30,
          type:
            Math.random() < 0.2
              ? "large"
              : Math.random() < 0.5
                ? "medium"
                : "small",
          health: Math.random() < 0.2 ? 3 : Math.random() < 0.5 ? 2 : 1,
        },
      ]);
    }
  }, [
    gameStarted,
    gameOver,
    enemySpeed,
    enemyFireRate,
    player,
    playerBullets,
    enemyBullets,
    score,
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

    // Draw stars
    ctx.fillStyle = "#FFF";
    for (let i = 0; i < 100; i++) {
      ctx.fillRect(
        Math.random() * CANVAS_SIZE.width,
        Math.random() * CANVAS_SIZE.height,
        1,
        1
      );
    }

    // Draw player
    ctx.fillStyle = "#0F0";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw enemies
    enemies.forEach((enemy) => {
      switch (enemy.type) {
        case "small":
          ctx.fillStyle = "#F00";
          break;
        case "medium":
          ctx.fillStyle = "#FF0";
          break;
        case "large":
          ctx.fillStyle = "#F0F";
          break;
      }
      ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    });

    // Draw player bullets
    ctx.fillStyle = "#0FF";
    playerBullets.forEach((bullet) => {
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    // Draw enemy bullets
    ctx.fillStyle = "#F90";
    enemyBullets.forEach((bullet) => {
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    // Draw high score and current score
    ctx.fillStyle = "#F00";
    ctx.font = "20px Arial";
    ctx.fillText(`HIGH SCORE`, 10, 30);
    ctx.fillText(`${highScore}`, 10, 60);
    ctx.fillStyle = "#FFF";
    ctx.fillText(`1UP`, CANVAS_SIZE.width - 100, 30);
    ctx.fillText(`${score}`, CANVAS_SIZE.width - 100, 60);

    // Draw lives and power level
    for (let i = 0; i < player.lives; i++) {
      ctx.fillRect(10 + i * 30, CANVAS_SIZE.height - 30, 20, 20);
    }
    ctx.fillStyle = "#0FF";
    ctx.fillText(
      `POWER: ${player.powerLevel}`,
      CANVAS_SIZE.width - 150,
      CANVAS_SIZE.height - 10
    );

    requestAnimationFrame(renderGame);
  }, [player, enemies, playerBullets, enemyBullets, score, highScore]);

  useEffect(() => {
    renderGame();
  }, [renderGame]);

  return (
    <div>
      <h1>Space Shooter</h1>
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
        <p>Use as setas para mover a nave e a barra de espaço para atirar.</p>
      )}
    </div>
  );
}
