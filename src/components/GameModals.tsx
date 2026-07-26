import { useState, useEffect, useRef } from 'react';
import { X, RotateCcw, Play, ChevronUp, ChevronLeft, ChevronDown, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { safeStorage } from '../utils/storage';
import { useTranslation } from '../i18n/useTranslation';

interface GameModalProps {
  gameId: string;
  onClose: () => void;
}

export default function GameModal({ gameId, onClose }: GameModalProps) {
  const { language } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return Number(safeStorage.getItem(`tplab_high_${gameId}`) || 0);
  });
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const labels = {
    pt: {
      playroom: 'Sala de jogos', mute: 'Desativar som', enableSound: 'Ativar som', close: 'Fechar jogo',
      points: 'PONTOS:', record: 'RECORDE:', footer: 'Use o teclado ou toque nos botões para jogar. Feito em 2026.'
    },
    en: {
      playroom: 'Arcade playroom', mute: 'Mute sound', enableSound: 'Enable sound', close: 'Close game',
      points: 'SCORE:', record: 'HIGH SCORE:', footer: 'Use the keyboard or tap the buttons to play. Built in 2026.'
    },
    es: {
      playroom: 'Sala de juegos', mute: 'Silenciar sonido', enableSound: 'Activar sonido', close: 'Cerrar juego',
      points: 'PUNTOS:', record: 'RÉCORD:', footer: 'Usa el teclado o toca los botones para jugar. Creado en 2026.'
    }
  }[language];

  // Beep sound generator using Web Audio API
  const playSound = (type: 'score' | 'gameover' | 'tick' | 'tetris') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'score') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'tick') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } else if (type === 'gameover') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.6);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.61);
        osc.start();
        osc.stop(ctx.currentTime + 0.61);
      } else if (type === 'tetris') {
        // Line clear fanfare
        osc.type = 'square';
        osc.frequency.setValueAtTime(392, ctx.currentTime); // G4
        osc.frequency.setValueAtTime(440, ctx.currentTime + 0.08); // A4
        osc.frequency.setValueAtTime(494, ctx.currentTime + 0.16); // B4
        osc.frequency.setValueAtTime(587.33, ctx.currentTime + 0.24); // D5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch (e) {
      // Audio context might be blocked or not supported
    }
  };

  const updateHighScore = (newScore: number) => {
    if (newScore > highScore) {
      setHighScore(newScore);
      safeStorage.setItem(`tplab_high_${gameId}`, String(newScore));
    }
  };

  const getGameTitle = () => {
    switch (gameId) {
      case 'snake-game': return 'Classic Snake Game';
      case 'tetris-clone': return 'TP Tetris Clone';
      case 'flappy-flight': return 'Flappy Flight Endless';
      default: return labels.playroom;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 z-50 animate-fade-in font-display">
      <div className="relative w-full max-w-[480px] bg-zinc-950 border border-[#30F858]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(48,248,88,0.15)] flex flex-col">
        {/* Neon decorative edge corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#30F858] pointer-events-none" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#30F858] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#30F858] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#30F858] pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-900 bg-zinc-950/90 z-10">
          <div>
            <span className="font-mono text-[9px] text-[#30F858] uppercase tracking-widest block mb-0.5">TP LAB ARCADE</span>
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">{getGameTitle()}</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1.5 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
              title={soundEnabled ? labels.mute : labels.enableSound}
              aria-label={soundEnabled ? labels.mute : labels.enableSound}
              id="sound-toggle-btn"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#30F858]" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
              id="close-game-modal-btn"
              aria-label={labels.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Arcade Cabinet Panel */}
        <div className="flex-1 bg-[#060707] p-5 flex flex-col items-center select-none relative">
          {/* Stats Bar */}
          <div className="flex items-center justify-between w-full px-4 py-2 border border-zinc-900 bg-zinc-950/70 rounded-lg text-xs font-mono mb-4 text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">{labels.points}</span>
              <span className="text-[#30F858] font-bold text-sm tracking-wider">{score}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">{labels.record}</span>
              <span className="text-amber-500 font-bold text-sm tracking-wider">{highScore}</span>
            </div>
          </div>

          {/* Interactive Stage Screen */}
          <div className="w-full aspect-square sm:aspect-[4/3] rounded-xl border border-zinc-900 bg-zinc-950 relative overflow-hidden flex flex-col items-center justify-center p-1">
            {gameId === 'snake-game' && (
              <SnakeGame
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setScore={setScore}
                updateHighScore={updateHighScore}
                gameOver={gameOver}
                setGameOver={setGameOver}
                playSound={playSound}
              />
            )}
            {gameId === 'tetris-clone' && (
              <TetrisGame
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setScore={setScore}
                updateHighScore={updateHighScore}
                gameOver={gameOver}
                setGameOver={setGameOver}
                playSound={playSound}
              />
            )}
            {gameId === 'flappy-flight' && (
              <FlappyFlight
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setScore={setScore}
                updateHighScore={updateHighScore}
                gameOver={gameOver}
                setGameOver={setGameOver}
                playSound={playSound}
              />
            )}
          </div>
        </div>

        {/* Footer panel controls guide */}
        <div className="px-6 py-4 border-t border-zinc-900 text-center text-[10px] font-mono text-zinc-500 bg-zinc-950 select-none">
          {labels.footer}
        </div>
      </div>
    </div>
  );
}

// ----------------- SNAKE GAME IMPLEMENTATION -----------------
interface GameSubProps {
  isPlaying: boolean;
  setIsPlaying: (p: boolean) => void;
  setScore: (s: number | ((prev: number) => number)) => void;
  updateHighScore: (s: number) => void;
  gameOver: boolean;
  setGameOver: (g: boolean) => void;
  playSound: (type: 'score' | 'gameover' | 'tick' | 'tetris') => void;
}

function SnakeGame({ isPlaying, setIsPlaying, setScore, updateHighScore, gameOver, setGameOver, playSound }: GameSubProps) {
  const { language } = useTranslation();
  const labels = {
    pt: { gameOver: 'FIM DE JOGO', collision: 'Sua cobra colidiu.', intro: 'Sobreviva e pegue os pontos brilhantes.', retry: 'Tentar de novo', play: 'Jogar agora', direction: 'DIR', up: 'Mover para cima', left: 'Mover para a esquerda', right: 'Mover para a direita', down: 'Mover para baixo' },
    en: { gameOver: 'GAME OVER', collision: 'Your snake collided.', intro: 'Survive and collect the glowing points.', retry: 'Try again', play: 'Play now', direction: 'DIR', up: 'Move up', left: 'Move left', right: 'Move right', down: 'Move down' },
    es: { gameOver: 'FIN DEL JUEGO', collision: 'La serpiente chocó.', intro: 'Sobrevive y recoge los puntos brillantes.', retry: 'Intentar de nuevo', play: 'Jugar ahora', direction: 'DIR', up: 'Mover hacia arriba', left: 'Mover a la izquierda', right: 'Mover a la derecha', down: 'Mover hacia abajo' }
  }[language];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<{ x: number; y: number }[]>([
    { x: 8, y: 8 },
    { x: 8, y: 9 },
    { x: 8, y: 10 },
  ]);
  const [dir, setDir] = useState<{ x: number; y: number }>({ x: 0, y: -1 });
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [cellCount] = useState(20);
  const dirRef = useRef(dir);

  useEffect(() => {
    dirRef.current = dir;
  }, [dir]);

  // Restart snake
  const startNewGame = () => {
    setSnake([
      { x: 10, y: 10 },
      { x: 10, y: 11 },
      { x: 10, y: 12 },
    ]);
    setDir({ x: 0, y: -1 });
    // Random position
    setFood({
      x: Math.floor(Math.random() * cellCount),
      y: Math.floor(Math.random() * cellCount)
    });
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      if (['ArrowUp', 'KeyW'].includes(e.code) && dirRef.current.y === 0) {
        setDir({ x: 0, y: -1 });
        e.preventDefault();
      } else if (['ArrowDown', 'KeyS'].includes(e.code) && dirRef.current.y === 0) {
        setDir({ x: 0, y: 1 });
        e.preventDefault();
      } else if (['ArrowLeft', 'KeyA'].includes(e.code) && dirRef.current.x === 0) {
        setDir({ x: -1, y: 0 });
        e.preventDefault();
      } else if (['ArrowRight', 'KeyD'].includes(e.code) && dirRef.current.x === 0) {
        setDir({ x: 1, y: 0 });
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [isPlaying]);

  // Game Loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };
        head.x += dirRef.current.x;
        head.y += dirRef.current.y;

        // Collision detection (Walls)
        if (head.x < 0 || head.x >= cellCount || head.y < 0 || head.y >= cellCount) {
          setGameOver(true);
          setIsPlaying(false);
          playSound('gameover');
          return prevSnake;
        }

        // Collision detection (Self)
        for (const segment of prevSnake) {
          if (head.x === segment.x && head.y === segment.y) {
            setGameOver(true);
            setIsPlaying(false);
            playSound('gameover');
            return prevSnake;
          }
        }

        const newSnake = [head, ...prevSnake];

        // Eat food
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => {
            const next = s + 10;
            updateHighScore(next);
            return next;
          });
          playSound('score');
          // Respawn food
          setFood({
            x: Math.floor(Math.random() * cellCount),
            y: Math.floor(Math.random() * cellCount),
          });
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying, gameOver, food, cellCount]);

  // Draw Arena
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear background
    ctx.fillStyle = '#060707';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw tech backgroundgrid lines inside game screen
    ctx.strokeStyle = '#121314';
    ctx.lineWidth = 0.5;
    const size = canvas.width / cellCount;
    for (let i = 0; i < cellCount; i++) {
      ctx.beginPath();
      ctx.moveTo(i * size, 0);
      ctx.lineTo(i * size, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * size);
      ctx.lineTo(canvas.width, i * size);
      ctx.stroke();
    }

    // Draw snake
    newSnakeDraw(ctx, size);

    // Draw food
    ctx.fillStyle = '#f59e0b';
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(food.x * size + size / 2, food.y * size + size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.fill();

    // Reset shadow
    ctx.shadowBlur = 0;
  }, [snake, food]);

  const newSnakeDraw = (ctx: CanvasRenderingContext2D, size: number) => {
    snake.forEach((segment, index) => {
      const isHead = index === 0;
      ctx.fillStyle = isHead ? '#30F858' : '#14ad3e';
      ctx.shadowColor = '#30F858';
      ctx.shadowBlur = isHead ? 8 : 0;
      ctx.fillRect(segment.x * size + 1, segment.y * size + 1, size - 2, size - 2);
    });
    ctx.shadowBlur = 0;
  };

  // Buttons for mobile/mouse control
  const hClick = (dx: number, dy: number) => {
    if (!isPlaying) return;
    if (dx !== 0 && dirRef.current.x === 0) setDir({ x: dx, y: 0 });
    if (dy !== 0 && dirRef.current.y === 0) setDir({ x: 0, y: dy });
    playSound('tick');
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center bg-zinc-950 p-2">
      <canvas
        ref={canvasRef}
        width={320}
        height={240}
        className="border border-zinc-900 rounded bg-zinc-950 w-full flex-1 max-h-[220px]"
      />

      {/* Screen Menu Controls when paused */}
      {(!isPlaying || gameOver) && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-4">
          {gameOver ? (
            <div className="text-center mb-4">
              <span className="text-red-500 font-mono text-[10px] tracking-widest uppercase block">{labels.gameOver}</span>
              <p className="text-zinc-400 font-sans text-xs mt-1">{labels.collision}</p>
            </div>
          ) : (
            <div className="text-center mb-4">
                <span className="text-[#30F858] font-mono text-[10px] tracking-widest uppercase block">SNAKE GAME</span>
                <p className="text-zinc-400 font-sans text-xs mt-1">{labels.intro}</p>
              </div>
            )}
            <button
              onClick={startNewGame}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#30F858] text-zinc-950 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#1cf045] transition-all"
              id="start-snake-btn"
            >
            {gameOver ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{gameOver ? labels.retry : labels.play}</span>
          </button>
        </div>
      )}

      {/* Joystick controls for cellphones */}
      <div className="flex flex-col items-center gap-1.5 mt-2.5 w-full select-none max-w-[200px]">
        <button
          onClick={() => hClick(0, -1)}
          className="p-1 px-4 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 hover:text-white hover:bg-zinc-800 active:bg-zinc-750"
          id="btn-move-up"
          aria-label={labels.up}
        >
          <ChevronUp className="w-4 h-4 mx-auto" />
        </button>
        <div className="flex items-center gap-3 w-full justify-between">
          <button
            onClick={() => hClick(-1, 0)}
            className="p-1.5 px-3 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 hover:text-white hover:bg-zinc-800 active:bg-zinc-750"
            id="btn-move-left"
            aria-label={labels.left}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[9px] font-mono text-zinc-650 uppercase">{labels.direction}</span>
          <button
            onClick={() => hClick(1, 0)}
            className="p-1.5 px-3 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 hover:text-white hover:bg-zinc-800 active:bg-zinc-750"
            id="btn-move-right"
            aria-label={labels.right}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => hClick(0, 1)}
          className="p-1 px-4 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 hover:text-white hover:bg-zinc-800 active:bg-zinc-750"
          id="btn-move-down"
          aria-label={labels.down}
        >
          <ChevronDown className="w-4 h-4 mx-auto" />
        </button>
      </div>
    </div>
  );
}

// ----------------- TETRIS GAME IMPLEMENTATION -----------------
const SHAPES = [
  [], // Empty
  [[1, 1, 1, 1]], // I (cyan)
  [[1, 1, 1], [0, 1, 0]], // T (purple)
  [[1, 1, 1], [1, 0, 0]], // L (orange)
  [[1, 1, 1], [0, 0, 1]], // J (blue)
  [[1, 1], [1, 1]], // O (yellow)
  [[1, 1, 0], [0, 1, 1]], // Z (red)
  [[0, 1, 1], [1, 1, 0]], // S (green)
];

const COLORS = [
  'transparent',
  '#06b6d4', // cyan
  '#a855f7', // purple
  '#f97316', // orange
  '#3b82f6', // blue
  '#eab308', // yellow
  '#ef4444', // red
  '#22c55e', // green
];

function TetrisGame({ isPlaying, setIsPlaying, setScore, updateHighScore, gameOver, setGameOver, playSound }: GameSubProps) {
  const { language } = useTranslation();
  const labels = {
    pt: { gameOver: 'FIM DE JOGO', collision: 'Os blocos chegaram ao topo.', intro: 'Gire os blocos e complete linhas.', restart: 'Recomeçar', play: 'Jogar agora', left: 'Esq', rotate: 'Girar', down: 'Baix', right: 'Dir', leftAria: 'Mover para a esquerda', rotateAria: 'Girar peça', downAria: 'Mover para baixo', rightAria: 'Mover para a direita' },
    en: { gameOver: 'GAME OVER', collision: 'The blocks reached the top.', intro: 'Rotate the blocks and complete lines.', restart: 'Restart', play: 'Play now', left: 'Left', rotate: 'Rotate', down: 'Down', right: 'Right', leftAria: 'Move left', rotateAria: 'Rotate piece', downAria: 'Move down', rightAria: 'Move right' },
    es: { gameOver: 'FIN DEL JUEGO', collision: 'Los bloques llegaron a la parte superior.', intro: 'Gira los bloques y completa líneas.', restart: 'Reiniciar', play: 'Jugar ahora', left: 'Izq', rotate: 'Girar', down: 'Bajar', right: 'Der', leftAria: 'Mover a la izquierda', rotateAria: 'Girar pieza', downAria: 'Mover hacia abajo', rightAria: 'Mover a la derecha' }
  }[language];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rows = 20;
  const cols = 10;
  const [grid, setGrid] = useState<number[][]>(() => createEmptyGrid());
  const gridRef = useRef(grid);
  const [piece, setPiece] = useState<{ x: number; y: number; shape: number[][]; shapeIdx: number }>({
    x: 0,
    y: 0,
    shape: [],
    shapeIdx: 0,
  });
  const pieceRef = useRef(piece);

  function createEmptyGrid() {
    return Array.from({ length: 20 }, () => Array(10).fill(0));
  }

  useEffect(() => {
    gridRef.current = grid;
  }, [grid]);

  useEffect(() => {
    pieceRef.current = piece;
  }, [piece]);

  const deployNewPiece = (g = gridRef.current) => {
    const idx = Math.floor(Math.random() * 7) + 1;
    const nextShape = SHAPES[idx];
    const newP = {
      x: Math.floor((cols - nextShape[0].length) / 2),
      y: 0,
      shape: nextShape,
      shapeIdx: idx
    };

    if (checkCollision(newP, g)) {
      // Game over
      setGameOver(true);
      setIsPlaying(false);
      playSound('gameover');
    } else {
      setPiece(newP);
    }
  };

  const startNewGame = () => {
    const emptyGrid = createEmptyGrid();
    setGrid(emptyGrid);
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    deployNewPiece(emptyGrid);
  };

  const checkCollision = (p: typeof piece, currentGrid: number[][]) => {
    for (let r = 0; r < p.shape.length; r++) {
      for (let c = 0; c < p.shape[r].length; c++) {
        if (p.shape[r][c]) {
          const gridY = p.y + r;
          const gridX = p.x + c;

          if (gridY >= rows || gridX < 0 || gridX >= cols) {
            return true;
          }
          if (gridY >= 0 && currentGrid[gridY][gridX]) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const lockPiece = () => {
    const p = pieceRef.current;
    const newGrid = gridRef.current.map(row => [...row]);

    for (let r = 0; r < p.shape.length; r++) {
      for (let c = 0; c < p.shape[r].length; c++) {
        if (p.shape[r][c]) {
          if (p.y + r >= 0) {
            newGrid[p.y + r][p.x + c] = p.shapeIdx;
          }
        }
      }
    }

    // Line clearing
    let linesCleared = 0;
    const filteredGrid = newGrid.filter(row => {
      const isFull = row.every(val => val > 0);
      if (isFull) linesCleared++;
      return !isFull;
    });

    while (filteredGrid.length < rows) {
      filteredGrid.unshift(Array(cols).fill(0));
    }

    setGrid(filteredGrid);

    if (linesCleared > 0) {
      setScore(prev => {
        const value = prev + linesCleared * 100;
        updateHighScore(value);
        return value;
      });
      playSound('tetris');
    } else {
      playSound('tick');
    }

    deployNewPiece(filteredGrid);
  };

  const moveLeft = () => {
    const p = { ...pieceRef.current, x: pieceRef.current.x - 1 };
    if (!checkCollision(p, gridRef.current)) setPiece(p);
  };

  const moveRight = () => {
    const p = { ...pieceRef.current, x: pieceRef.current.x + 1 };
    if (!checkCollision(p, gridRef.current)) setPiece(p);
  };

  const moveDown = () => {
    const p = { ...pieceRef.current, y: pieceRef.current.y + 1 };
    if (!checkCollision(p, gridRef.current)) {
      setPiece(p);
    } else {
      lockPiece();
    }
  };

  const rotate = () => {
    const original = pieceRef.current.shape;
    const rotated = original[0].map((_, idx) =>
      original.map(row => row[idx]).reverse()
    );
    const p = { ...pieceRef.current, shape: rotated };
    // Adjust x if rotation pushes it outer bound
    while (p.x + p.shape[0].length > cols) {
      p.x--;
    }
    if (p.x < 0) p.x = 0;

    if (!checkCollision(p, gridRef.current)) {
      setPiece(p);
      playSound('tick');
    }
  };

  // Keyboard binds
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (!isPlaying || gameOver) return;
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        moveLeft();
        e.preventDefault();
      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        moveRight();
        e.preventDefault();
      } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        moveDown();
        e.preventDefault();
      } else if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space') {
        rotate();
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [isPlaying, gameOver]);

  // Fall tick loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;
    const interval = setInterval(() => {
      moveDown();
    }, 800);
    return () => clearInterval(interval);
  }, [isPlaying, gameOver]);

  // Render Arena Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#060707';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cellW = canvas.width / cols;
    const cellH = canvas.height / rows;

    // Draw static board grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const val = grid[r][c];
        if (val > 0) {
          ctx.fillStyle = COLORS[val];
          ctx.fillRect(c * cellW + 1, r * cellH + 1, cellW - 2, cellH - 2);
        } else {
          ctx.strokeStyle = '#121314';
          ctx.lineWidth = 0.5;
          ctx.strokeRect(c * cellW, r * cellH, cellW, cellH);
        }
      }
    }

    // Draw active dropping piece
    const p = piece;
    if (p.shape && p.shape.length > 0) {
      for (let r = 0; r < p.shape.length; r++) {
        for (let c = 0; c < p.shape[r].length; c++) {
          if (p.shape[r][c]) {
            ctx.fillStyle = COLORS[p.shapeIdx];
            ctx.shadowColor = COLORS[p.shapeIdx];
            ctx.shadowBlur = 4;
            ctx.fillRect((p.x + c) * cellW + 1, (p.y + r) * cellH + 1, cellW - 2, cellH - 2);
            ctx.shadowBlur = 0;
          }
        }
      }
    }
  }, [grid, piece]);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center bg-zinc-950 p-2">
      <canvas
        ref={canvasRef}
        width={180}
        height={240}
        className="border border-zinc-900 rounded bg-zinc-950 w-[160px] h-[210px] sm:w-[170px] sm:h-[220px]"
      />

      {/* Screen Menu Controls when paused */}
      {(!isPlaying || gameOver) && (
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center p-4">
          {gameOver ? (
            <div className="text-center mb-4">
              <span className="text-red-500 font-mono text-[10px] tracking-widest uppercase block">{labels.gameOver}</span>
              <p className="text-zinc-400 font-sans text-xs mt-1">{labels.collision}</p>
            </div>
          ) : (
            <div className="text-center mb-4">
                <span className="text-[#30F858] font-mono text-[10px] tracking-widest uppercase block">TP TETRIS</span>
                <p className="text-zinc-400 font-sans text-xs mt-1">{labels.intro}</p>
              </div>
            )}
            <button
              onClick={startNewGame}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#30F858] text-zinc-950 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#1cf045] transition-all"
              id="start-tetris-btn"
            >
            {gameOver ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{gameOver ? labels.restart : labels.play}</span>
          </button>
        </div>
      )}

      {/* Control Buttons for touch devices */}
      <div className="flex gap-1.5 mt-2.5 select-none w-full max-w-[280px] justify-center text-xs font-mono">
        <button
          onClick={moveLeft}
          className="p-2 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 hover:text-white hover:bg-zinc-800 active:bg-zinc-750 flex-1"
          id="btn-tetris-left"
          aria-label={labels.leftAria}
        >
          {labels.left}
        </button>
        <button
          onClick={rotate}
          className="p-2 bg-[#30F858]/10 border border-[#30F858]/30 text-[#30F858] rounded hover:bg-[#30F858] hover:text-zinc-950 active:scale-95 flex-1 font-bold"
          id="btn-tetris-rotate"
          aria-label={labels.rotateAria}
        >
          {labels.rotate}
        </button>
        <button
          onClick={moveDown}
          className="p-2 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 hover:text-white hover:bg-zinc-800 active:bg-zinc-750 flex-1"
          id="btn-tetris-down"
          aria-label={labels.downAria}
        >
          {labels.down}
        </button>
        <button
          onClick={moveRight}
          className="p-2 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 hover:text-white hover:bg-zinc-800 active:bg-zinc-750 flex-1"
          id="btn-tetris-right"
          aria-label={labels.rightAria}
        >
          {labels.right}
        </button>
      </div>
    </div>
  );
}

// ----------------- FLAPPY FLIGHT SYSTEM -----------------
function FlappyFlight({ isPlaying, setIsPlaying, setScore, updateHighScore, gameOver, setGameOver, playSound }: GameSubProps) {
  const { language } = useTranslation();
  const labels = {
    pt: { gameOver: 'FIM DE JOGO', collision: 'Você colidiu com uma barreira laser.', intro: 'Voe desviando das torres de laser verdes.', restart: 'Recomeçar', play: 'Jogar agora', prompt: 'CLIQUE OU TOQUE NA TELA PARA VOAR' },
    en: { gameOver: 'GAME OVER', collision: 'You hit a laser barrier.', intro: 'Fly past the green laser towers.', restart: 'Restart', play: 'Play now', prompt: 'CLICK OR TAP THE SCREEN TO FLY' },
    es: { gameOver: 'FIN DEL JUEGO', collision: 'Chocaste con una barrera láser.', intro: 'Vuela y esquiva las torres láser verdes.', restart: 'Reiniciar', play: 'Jugar ahora', prompt: 'HAZ CLIC O TOCA LA PANTALLA PARA VOLAR' }
  }[language];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [birdY, setBirdY] = useState(100);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState<{ x: number; top: number; bottom: number; passed: boolean }[]>([]);

  const birdYRef = useRef(birdY);
  const velocityRef = useRef(velocity);
  const pipesRef = useRef(pipes);

  useEffect(() => { birdYRef.current = birdY; }, [birdY]);
  useEffect(() => { velocityRef.current = velocity; }, [velocity]);
  useEffect(() => { pipesRef.current = pipes; }, [pipes]);

  const startNewGame = () => {
    setBirdY(80);
    setVelocity(0);
    setPipes([
      { x: 320, top: 50, bottom: 90, passed: false },
      { x: 480, top: 70, bottom: 70, passed: false }
    ]);
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
  };

  const flap = () => {
    if (!isPlaying) return;
    setVelocity(-6.0);
    playSound('tick');
  };

  // Click spacebar listener
  useEffect(() => {
    const handleKeys = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        flap();
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [isPlaying]);

  // Main game tick loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    let frameId: number;

    const tick = () => {
      // Apply gravity
      let v = velocityRef.current + 0.35;
      let y = birdYRef.current + v;

      // Wall bounds collision checker
      if (y < 0) {
        y = 0;
        v = 0;
      }
      if (y >= 230) {
        setGameOver(true);
        setIsPlaying(false);
        playSound('gameover');
        return;
      }

      // Roll pipes obstacle list
      const updatedPipes = pipesRef.current.map((p) => {
        return { ...p, x: p.x - 2.5 };
      }).filter(p => p.x > -50);

      // Check logic if we need custom pipe spawning
      if (updatedPipes.length > 0 && updatedPipes[updatedPipes.length - 1].x < 240) {
        const gap = 100;
        const topH = Math.floor(Math.random() * 80) + 20;
        updatedPipes.push({
          x: 360,
          top: topH,
          bottom: 240 - gap - topH,
          passed: false,
        });
      }

      // Check collisions with pipes
      const birdRadius = 7;
      let hit = false;
      const nextPipes = updatedPipes.map(p => {
        // bird is around x = 50
        if (p.x < 50 + birdRadius && p.x + 35 > 50 - birdRadius) {
          if (y - birdRadius < p.top || y + birdRadius > 240 - p.bottom) {
            hit = true;
          }
        }
        // Score validator
        if (!p.passed && p.x + 17 < 50) {
          p.passed = true;
          setScore(s => {
            const next = s + 1;
            updateHighScore(next);
            return next;
          });
          playSound('score');
        }
        return p;
      });

      if (hit) {
        setGameOver(true);
        setIsPlaying(false);
        playSound('gameover');
        return;
      }

      setBirdY(y);
      setVelocity(v);
      setPipes(nextPipes);

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying, gameOver]);

  // Paint onto game board viewport canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#060707';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid background dots for parallax techno flow
    ctx.fillStyle = '#111213';
    for (let x = 0; x < canvas.width; x += 15) {
      for (let y = 0; y < canvas.height; y += 15) {
        ctx.fillRect(x + 2, y + 2, 1, 1);
      }
    }

    // Draw columns pipes
    pipes.forEach((p) => {
      ctx.fillStyle = '#14ad3e';
      ctx.strokeStyle = '#30F858';
      ctx.lineWidth = 1.5;

      // Upper pipe
      ctx.fillRect(p.x, 0, 35, p.top);
      ctx.strokeRect(p.x, -5, 35, p.top + 5);

      // Bottom pipe
      ctx.fillRect(p.x, canvas.height - p.bottom, 35, p.bottom);
      ctx.strokeRect(p.x, canvas.height - p.bottom, 35, p.bottom + 5);
    });

    // Draw Bird
    ctx.fillStyle = '#f59e0b';
    ctx.shadowColor = '#f59e0b';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(50, birdY, 7, 0, Math.PI * 2);
    ctx.fill();

    // Reset settings
    ctx.shadowBlur = 0;
  }, [birdY, pipes]);

  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center bg-zinc-950 p-2" onClick={flap}>
      <canvas
        ref={canvasRef}
        width={320}
        height={240}
        className="border border-zinc-900 rounded bg-zinc-950 w-full flex-1 max-h-[220px]"
      />

      {/* Screen Menu Controls when paused */}
      {(!isPlaying || gameOver) && (
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center p-4 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          {gameOver ? (
            <div className="text-center mb-4">
              <span className="text-red-500 font-mono text-[10px] tracking-widest uppercase block">{labels.gameOver}</span>
              <p className="text-zinc-400 font-sans text-xs mt-1">{labels.collision}</p>
            </div>
          ) : (
            <div className="text-center mb-4">
                <span className="text-[#30F858] font-mono text-[10px] tracking-widest uppercase block">FLAPPY FLIGHT</span>
                <p className="text-zinc-400 font-sans text-xs mt-1">{labels.intro}</p>
              </div>
            )}
            <button
              onClick={startNewGame}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#30F858] text-zinc-950 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-[#1cf045] transition-all"
              id="start-flappy-btn"
            >
            {gameOver ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{gameOver ? labels.restart : labels.play}</span>
          </button>
        </div>
      )}

      {/* Touch Screen trigger prompt */}
      <div className="mt-2 text-center text-[10px] font-mono text-[#30F858] tracking-widest animate-pulse select-none">
        {labels.prompt}
      </div>
    </div>
  );
}
