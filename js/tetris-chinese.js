// ===== Tetris x Chinese Learning Game =====

// ===== VOCABULARY DATA =====
const vocabulary = {
  1: [
    { chinese: "你好", pinyin: "nǐ hǎo", korean: "안녕하세요" },
    { chinese: "谢谢", pinyin: "xiè xie", korean: "감사합니다" },
    { chinese: "再见", pinyin: "zài jiàn", korean: "안녕히 가세요" },
    { chinese: "我", pinyin: "wǒ", korean: "나, 저" },
    { chinese: "你", pinyin: "nǐ", korean: "너, 당신" },
    { chinese: "他", pinyin: "tā", korean: "그" },
    { chinese: "她", pinyin: "tā", korean: "그녀" },
    { chinese: "是", pinyin: "shì", korean: "~이다" },
    { chinese: "不", pinyin: "bù", korean: "아니다" },
    { chinese: "好", pinyin: "hǎo", korean: "좋다" },
    { chinese: "大", pinyin: "dà", korean: "크다" },
    { chinese: "小", pinyin: "xiǎo", korean: "작다" },
    { chinese: "多", pinyin: "duō", korean: "많다" },
    { chinese: "少", pinyin: "shǎo", korean: "적다" },
    { chinese: "人", pinyin: "rén", korean: "사람" },
    { chinese: "学", pinyin: "xué", korean: "배우다" },
    { chinese: "中国", pinyin: "zhōng guó", korean: "중국" },
    { chinese: "韩国", pinyin: "hán guó", korean: "한국" },
    { chinese: "吃", pinyin: "chī", korean: "먹다" },
    { chinese: "喝", pinyin: "hē", korean: "마시다" },
    { chinese: "看", pinyin: "kàn", korean: "보다" },
    { chinese: "说", pinyin: "shuō", korean: "말하다" },
    { chinese: "听", pinyin: "tīng", korean: "듣다" },
    { chinese: "读", pinyin: "dú", korean: "읽다" },
    { chinese: "写", pinyin: "xiě", korean: "쓰다" },
    { chinese: "一", pinyin: "yī", korean: "하나" },
    { chinese: "二", pinyin: "èr", korean: "둘" },
    { chinese: "三", pinyin: "sān", korean: "셋" },
    { chinese: "四", pinyin: "sì", korean: "넷" },
    { chinese: "五", pinyin: "wǔ", korean: "다섯" },
    { chinese: "水", pinyin: "shuǐ", korean: "물" },
    { chinese: "饭", pinyin: "fàn", korean: "밥" },
    { chinese: "家", pinyin: "jiā", korean: "집" },
    { chinese: "爱", pinyin: "ài", korean: "사랑하다" },
    { chinese: "去", pinyin: "qù", korean: "가다" },
    { chinese: "来", pinyin: "lái", korean: "오다" },
    { chinese: "很", pinyin: "hěn", korean: "매우" },
    { chinese: "今天", pinyin: "jīn tiān", korean: "오늘" },
    { chinese: "明天", pinyin: "míng tiān", korean: "내일" },
    { chinese: "朋友", pinyin: "péng you", korean: "친구" },
  ],
  2: [
    { chinese: "已经", pinyin: "yǐ jīng", korean: "이미" },
    { chinese: "因为", pinyin: "yīn wèi", korean: "왜냐하면" },
    { chinese: "所以", pinyin: "suǒ yǐ", korean: "그래서" },
    { chinese: "但是", pinyin: "dàn shì", korean: "하지만" },
    { chinese: "如果", pinyin: "rú guǒ", korean: "만약" },
    { chinese: "公司", pinyin: "gōng sī", korean: "회사" },
    { chinese: "医院", pinyin: "yī yuàn", korean: "병원" },
    { chinese: "手机", pinyin: "shǒu jī", korean: "핸드폰" },
    { chinese: "电脑", pinyin: "diàn nǎo", korean: "컴퓨터" },
    { chinese: "问题", pinyin: "wèn tí", korean: "문제" },
    { chinese: "时间", pinyin: "shí jiān", korean: "시간" },
    { chinese: "准备", pinyin: "zhǔn bèi", korean: "준비하다" },
    { chinese: "帮助", pinyin: "bāng zhù", korean: "돕다" },
    { chinese: "生日", pinyin: "shēng rì", korean: "생일" },
    { chinese: "快乐", pinyin: "kuài lè", korean: "즐겁다" },
    { chinese: "漂亮", pinyin: "piào liang", korean: "예쁘다" },
    { chinese: "便宜", pinyin: "pián yi", korean: "싸다" },
    { chinese: "贵", pinyin: "guì", korean: "비싸다" },
    { chinese: "健康", pinyin: "jiàn kāng", korean: "건강" },
    { chinese: "运动", pinyin: "yùn dòng", korean: "운동" },
    { chinese: "旅游", pinyin: "lǚ yóu", korean: "여행" },
    { chinese: "历史", pinyin: "lì shǐ", korean: "역사" },
    { chinese: "文化", pinyin: "wén huà", korean: "문화" },
    { chinese: "机场", pinyin: "jī chǎng", korean: "공항" },
  ],
  3: [
    { chinese: "经济", pinyin: "jīng jì", korean: "경제" },
    { chinese: "社会", pinyin: "shè huì", korean: "사회" },
    { chinese: "政治", pinyin: "zhèng zhì", korean: "정치" },
    { chinese: "教育", pinyin: "jiào yù", korean: "교육" },
    { chinese: "科学", pinyin: "kē xué", korean: "과학" },
    { chinese: "技术", pinyin: "jì shù", korean: "기술" },
    { chinese: "环境", pinyin: "huán jìng", korean: "환경" },
    { chinese: "经验", pinyin: "jīng yàn", korean: "경험" },
    { chinese: "关系", pinyin: "guān xi", korean: "관계" },
    { chinese: "发展", pinyin: "fā zhǎn", korean: "발전" },
    { chinese: "影响", pinyin: "yǐng xiǎng", korean: "영향" },
    { chinese: "安全", pinyin: "ān quán", korean: "안전" },
    { chinese: "成功", pinyin: "chéng gōng", korean: "성공" },
    { chinese: "失败", pinyin: "shī bài", korean: "실패" },
    { chinese: "责任", pinyin: "zé rèn", korean: "책임" },
    { chinese: "交通", pinyin: "jiāo tōng", korean: "교통" },
    { chinese: "新闻", pinyin: "xīn wén", korean: "뉴스" },
    { chinese: "世界", pinyin: "shì jiè", korean: "세계" },
    { chinese: "国际", pinyin: "guó jì", korean: "국제" },
    { chinese: "地球", pinyin: "dì qiú", korean: "지구" },
  ],
  4: [
    { chinese: "积极", pinyin: "jī jí", korean: "적극적" },
    { chinese: "消极", pinyin: "xiāo jí", korean: "소극적" },
    { chinese: "竞争", pinyin: "jìng zhēng", korean: "경쟁" },
    { chinese: "合作", pinyin: "hé zuò", korean: "협력" },
    { chinese: "创新", pinyin: "chuàng xīn", korean: "혁신" },
    { chinese: "投资", pinyin: "tóu zī", korean: "투자" },
    { chinese: "利润", pinyin: "lì rùn", korean: "이윤" },
    { chinese: "市场", pinyin: "shì chǎng", korean: "시장" },
    { chinese: "管理", pinyin: "guǎn lǐ", korean: "관리" },
    { chinese: "效率", pinyin: "xiào lǜ", korean: "효율" },
    { chinese: "资源", pinyin: "zī yuán", korean: "자원" },
    { chinese: "战略", pinyin: "zhàn lüè", korean: "전략" },
    { chinese: "挑战", pinyin: "tiǎo zhàn", korean: "도전" },
    { chinese: "机会", pinyin: "jī huì", korean: "기회" },
    { chinese: "价值", pinyin: "jià zhí", korean: "가치" },
    { chinese: "质量", pinyin: "zhì liàng", korean: "품질" },
    { chinese: "数据", pinyin: "shù jù", korean: "데이터" },
    { chinese: "人工智能", pinyin: "rén gōng zhì néng", korean: "인공지능" },
    { chinese: "可持续", pinyin: "kě chí xù", korean: "지속 가능한" },
    { chinese: "全球化", pinyin: "quán qiú huà", korean: "세계화" },
  ]
};

// ===== GAME CONSTANTS =====
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const COLORS = {
  I: '#00d2d3',
  O: '#ffa502',
  T: '#a55eea',
  S: '#2ed573',
  Z: '#ff4757',
  J: '#3742fa',
  L: '#ff6348'
};

const SHAPES = {
  I: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
  O: [[1,1],[1,1]],
  T: [[0,1,0],[1,1,1],[0,0,0]],
  S: [[0,1,1],[1,1,0],[0,0,0]],
  Z: [[1,1,0],[0,1,1],[0,0,0]],
  J: [[1,0,0],[1,1,1],[0,0,0]],
  L: [[0,0,1],[1,1,1],[0,0,0]]
};

const PIECE_NAMES = Object.keys(SHAPES);

// ===== GAME STATE =====
let canvas, ctx, nextCanvas, nextCtx;
let board = [];
let currentPiece = null;
let nextPiece = null;
let score = 0;
let level = 1;
let lines = 0;
let wordsLearned = 0;
let quizCorrect = 0;
let quizTotal = 0;
let gameRunning = false;
let gamePaused = false;
let dropInterval = 800;
let lastDrop = 0;
let animationId = null;
let currentHSK = 1;
let currentWord = null;
let recentWords = [];
let collectedWords = [];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  canvas = document.getElementById('game-canvas');
  ctx = canvas.getContext('2d');
  nextCanvas = document.getElementById('next-canvas');
  nextCtx = nextCanvas.getContext('2d');

  setupEventListeners();
  drawEmptyBoard();
});

function setupEventListeners() {
  document.getElementById('start-btn').addEventListener('click', startGame);
  document.getElementById('restart-btn').addEventListener('click', startGame);

  document.addEventListener('keydown', handleKeyDown);

  // HSK buttons
  document.querySelectorAll('.hsk-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (gameRunning) return;
      document.querySelectorAll('.hsk-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentHSK = parseInt(btn.dataset.level);
    });
  });

  // Mobile controls
  document.getElementById('btn-left').addEventListener('click', () => movePiece(-1, 0));
  document.getElementById('btn-right').addEventListener('click', () => movePiece(1, 0));
  document.getElementById('btn-rotate').addEventListener('click', rotatePiece);
  document.getElementById('btn-down').addEventListener('click', () => movePiece(0, 1));
  document.getElementById('btn-drop').addEventListener('click', hardDrop);

  // Touch support - prevent scrolling during game
  canvas.addEventListener('touchmove', e => { if (gameRunning) e.preventDefault(); }, { passive: false });
}

function handleKeyDown(e) {
  if (!gameRunning || gamePaused) {
    if (e.key === 'p' || e.key === 'P') {
      if (gamePaused) resumeGame();
    }
    return;
  }

  switch (e.key) {
    case 'ArrowLeft':
      e.preventDefault();
      movePiece(-1, 0);
      break;
    case 'ArrowRight':
      e.preventDefault();
      movePiece(1, 0);
      break;
    case 'ArrowDown':
      e.preventDefault();
      movePiece(0, 1);
      score += 1;
      break;
    case 'ArrowUp':
      e.preventDefault();
      rotatePiece();
      break;
    case ' ':
      e.preventDefault();
      hardDrop();
      break;
    case 'p':
    case 'P':
      pauseGame();
      break;
  }
}

// ===== GAME LOGIC =====
function startGame() {
  board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  score = 0;
  level = 1;
  lines = 0;
  wordsLearned = 0;
  quizCorrect = 0;
  quizTotal = 0;
  dropInterval = 800;
  recentWords = [];
  collectedWords = [];
  gameRunning = true;
  gamePaused = false;

  document.getElementById('start-overlay').classList.add('hidden');
  document.getElementById('gameover-overlay').classList.add('hidden');
  document.getElementById('quiz-overlay').classList.add('hidden');

  updateUI();
  updateRecentWords();

  currentPiece = createPiece();
  nextPiece = createPiece();
  drawNextPiece();

  lastDrop = performance.now();
  if (animationId) cancelAnimationFrame(animationId);
  gameLoop();
}

function gameLoop(timestamp = 0) {
  if (!gameRunning || gamePaused) return;

  if (timestamp - lastDrop > dropInterval) {
    if (!movePiece(0, 1)) {
      lockPiece();
      const cleared = clearLines();
      if (cleared > 0) {
        handleLinesClear(cleared);
      }
      currentPiece = nextPiece;
      nextPiece = createPiece();
      drawNextPiece();
      assignWordToPiece();

      if (!isValidPosition(currentPiece)) {
        gameOver();
        return;
      }
    }
    lastDrop = timestamp;
  }

  draw();
  animationId = requestAnimationFrame(gameLoop);
}

function pauseGame() {
  gamePaused = true;
  // Create a pause overlay
  let pauseEl = document.querySelector('.pause-overlay');
  if (!pauseEl) {
    pauseEl = document.createElement('div');
    pauseEl.className = 'pause-overlay';
    pauseEl.innerHTML = '<div class="pause-text">暂停 / 일시정지<br><small style="font-size:0.6em;color:#7777aa">P 키로 재개</small></div>';
    document.querySelector('.game-center').appendChild(pauseEl);
  }
  pauseEl.classList.remove('hidden');
}

function resumeGame() {
  gamePaused = false;
  const pauseEl = document.querySelector('.pause-overlay');
  if (pauseEl) pauseEl.classList.add('hidden');
  lastDrop = performance.now();
  gameLoop();
}

function gameOver() {
  gameRunning = false;
  if (animationId) cancelAnimationFrame(animationId);

  document.getElementById('final-score').textContent = score;
  document.getElementById('final-lines').textContent = lines;
  document.getElementById('final-words').textContent = wordsLearned;
  document.getElementById('final-accuracy').textContent =
    quizTotal > 0 ? Math.round((quizCorrect / quizTotal) * 100) + '%' : '-';

  document.getElementById('gameover-overlay').classList.remove('hidden');

  // Save stats to localStorage
  saveStats();
}

// ===== PIECE LOGIC =====
function createPiece() {
  const name = PIECE_NAMES[Math.floor(Math.random() * PIECE_NAMES.length)];
  const shape = SHAPES[name].map(row => [...row]);
  const word = getRandomWord();

  return {
    shape,
    name,
    color: COLORS[name],
    x: Math.floor(COLS / 2) - Math.ceil(shape[0].length / 2),
    y: 0,
    word
  };
}

function getRandomWord() {
  const words = vocabulary[currentHSK] || vocabulary[1];
  return words[Math.floor(Math.random() * words.length)];
}

function assignWordToPiece() {
  if (currentPiece && currentPiece.word) {
    currentWord = currentPiece.word;
    updateCurrentWordDisplay();
  }
}

function isValidPosition(piece, offsetX = 0, offsetY = 0) {
  for (let row = 0; row < piece.shape.length; row++) {
    for (let col = 0; col < piece.shape[row].length; col++) {
      if (piece.shape[row][col]) {
        const newX = piece.x + col + offsetX;
        const newY = piece.y + row + offsetY;
        if (newX < 0 || newX >= COLS || newY >= ROWS) return false;
        if (newY >= 0 && board[newY][newX]) return false;
      }
    }
  }
  return true;
}

function movePiece(dx, dy) {
  if (!currentPiece || !gameRunning || gamePaused) return false;
  if (isValidPosition(currentPiece, dx, dy)) {
    currentPiece.x += dx;
    currentPiece.y += dy;
    return true;
  }
  return false;
}

function rotatePiece() {
  if (!currentPiece || !gameRunning || gamePaused) return;
  if (currentPiece.name === 'O') return;

  const original = currentPiece.shape.map(row => [...row]);
  const n = currentPiece.shape.length;
  const rotated = Array.from({ length: n }, () => Array(n).fill(0));

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      rotated[c][n - 1 - r] = currentPiece.shape[r][c];
    }
  }

  currentPiece.shape = rotated;

  // Wall kick
  if (!isValidPosition(currentPiece)) {
    // Try shifting left/right
    for (const kick of [1, -1, 2, -2]) {
      if (isValidPosition(currentPiece, kick, 0)) {
        currentPiece.x += kick;
        return;
      }
    }
    currentPiece.shape = original;
  }
}

function hardDrop() {
  if (!currentPiece || !gameRunning || gamePaused) return;
  let dropDist = 0;
  while (movePiece(0, 1)) {
    dropDist++;
  }
  score += dropDist * 2;
  lockPiece();
  const cleared = clearLines();
  if (cleared > 0) {
    handleLinesClear(cleared);
  }
  currentPiece = nextPiece;
  nextPiece = createPiece();
  drawNextPiece();
  assignWordToPiece();

  if (!isValidPosition(currentPiece)) {
    gameOver();
  }
  updateUI();
}

function lockPiece() {
  for (let row = 0; row < currentPiece.shape.length; row++) {
    for (let col = 0; col < currentPiece.shape[row].length; col++) {
      if (currentPiece.shape[row][col]) {
        const y = currentPiece.y + row;
        const x = currentPiece.x + col;
        if (y >= 0 && y < ROWS && x >= 0 && x < COLS) {
          board[y][x] = {
            color: currentPiece.color,
            word: currentPiece.word
          };
        }
      }
    }
  }

  // Track the word
  if (currentPiece.word) {
    collectedWords.push(currentPiece.word);
    addRecentWord(currentPiece.word);
    wordsLearned++;
  }
}

function clearLines() {
  let cleared = 0;
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row].every(cell => cell !== 0)) {
      board.splice(row, 1);
      board.unshift(Array(COLS).fill(0));
      cleared++;
      row++;
    }
  }
  return cleared;
}

function handleLinesClear(count) {
  const lineScores = [0, 100, 300, 500, 800];
  score += (lineScores[count] || 0) * level;
  lines += count;

  // Level up every 10 lines
  const newLevel = Math.floor(lines / 10) + 1;
  if (newLevel > level) {
    level = newLevel;
    dropInterval = Math.max(100, 800 - (level - 1) * 70);
  }

  updateUI();

  // Trigger quiz on line clear
  if (collectedWords.length > 0) {
    triggerQuiz();
  }
}

// ===== QUIZ SYSTEM =====
function triggerQuiz() {
  gamePaused = true;

  // Pick a word from collected words
  const quizWord = collectedWords[Math.floor(Math.random() * collectedWords.length)];
  const allWords = vocabulary[currentHSK] || vocabulary[1];

  // Generate wrong answers
  const wrongAnswers = allWords
    .filter(w => w.korean !== quizWord.korean)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(w => w.korean);

  const options = [...wrongAnswers, quizWord.korean].sort(() => Math.random() - 0.5);

  // Show quiz
  const overlay = document.getElementById('quiz-overlay');
  document.getElementById('quiz-char').textContent = quizWord.chinese;
  document.getElementById('quiz-pinyin').textContent = quizWord.pinyin;
  document.getElementById('quiz-result').textContent = '';
  document.getElementById('quiz-result').className = 'quiz-result';

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleQuizAnswer(btn, opt, quizWord.korean, quizWord));
    optionsContainer.appendChild(btn);
  });

  overlay.classList.remove('hidden');

  // Timer
  let timeLeft = 100;
  const timerEl = document.getElementById('quiz-timer');
  timerEl.style.width = '100%';

  const timerInterval = setInterval(() => {
    timeLeft -= 2;
    timerEl.style.width = timeLeft + '%';
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Time's up - treat as wrong
      quizTotal++;
      const resultEl = document.getElementById('quiz-result');
      resultEl.textContent = `시간 초과! 정답: ${quizWord.korean}`;
      resultEl.className = 'quiz-result wrong';

      // Highlight correct answer
      optionsContainer.querySelectorAll('.quiz-option-btn').forEach(b => {
        b.disabled = true;
        if (b.textContent === quizWord.korean) b.classList.add('correct');
      });

      setTimeout(() => {
        overlay.classList.add('hidden');
        gamePaused = false;
        lastDrop = performance.now();
        gameLoop();
      }, 1500);
    }
  }, 100);

  // Store interval for cleanup
  overlay._timerInterval = timerInterval;
}

function handleQuizAnswer(btn, selected, correct, word) {
  const overlay = document.getElementById('quiz-overlay');
  const resultEl = document.getElementById('quiz-result');
  const optionsContainer = document.getElementById('quiz-options');

  // Clear timer
  if (overlay._timerInterval) {
    clearInterval(overlay._timerInterval);
  }

  // Disable all buttons
  optionsContainer.querySelectorAll('.quiz-option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
  });

  quizTotal++;

  if (selected === correct) {
    quizCorrect++;
    btn.classList.add('correct');
    resultEl.textContent = '正确! 정답입니다! +200';
    resultEl.className = 'quiz-result correct';
    score += 200;
    showScorePopup('+200', canvas.width / 2, canvas.height / 2);
  } else {
    btn.classList.add('wrong');
    resultEl.textContent = `错了! 정답: ${correct}`;
    resultEl.className = 'quiz-result wrong';
  }

  updateUI();

  setTimeout(() => {
    overlay.classList.add('hidden');
    gamePaused = false;
    lastDrop = performance.now();
    gameLoop();
  }, 1500);
}

// ===== DRAWING =====
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw grid
  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  ctx.lineWidth = 1;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
  }

  // Draw board
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c]) {
        drawBlock(ctx, c, r, board[r][c].color, board[r][c].word);
      }
    }
  }

  // Draw ghost piece
  if (currentPiece) {
    drawGhostPiece();
    // Draw current piece
    for (let r = 0; r < currentPiece.shape.length; r++) {
      for (let c = 0; c < currentPiece.shape[r].length; c++) {
        if (currentPiece.shape[r][c]) {
          drawBlock(
            ctx,
            currentPiece.x + c,
            currentPiece.y + r,
            currentPiece.color,
            currentPiece.word,
            true
          );
        }
      }
    }
  }
}

function drawBlock(context, x, y, color, word, isActive = false) {
  const px = x * BLOCK_SIZE;
  const py = y * BLOCK_SIZE;
  const s = BLOCK_SIZE;

  // Main block
  context.fillStyle = color;
  context.globalAlpha = isActive ? 0.95 : 0.8;
  context.fillRect(px + 1, py + 1, s - 2, s - 2);

  // Highlight
  context.fillStyle = 'rgba(255,255,255,0.2)';
  context.fillRect(px + 1, py + 1, s - 2, 3);
  context.fillRect(px + 1, py + 1, 3, s - 2);

  // Shadow
  context.fillStyle = 'rgba(0,0,0,0.3)';
  context.fillRect(px + s - 3, py + 1, 2, s - 2);
  context.fillRect(px + 1, py + s - 3, s - 2, 2);

  context.globalAlpha = 1;

  // Draw Chinese character on block
  if (word && word.chinese) {
    const char = word.chinese.length <= 2 ? word.chinese : word.chinese[0];
    context.fillStyle = 'rgba(255,255,255,0.9)';
    context.font = `bold ${s * 0.5}px "Noto Sans SC", "Microsoft YaHei", sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(char, px + s / 2, py + s / 2 + 1);
  }
}

function drawGhostPiece() {
  if (!currentPiece) return;

  let ghostY = currentPiece.y;
  while (isValidPosition(currentPiece, 0, ghostY - currentPiece.y + 1)) {
    ghostY++;
  }

  ctx.globalAlpha = 0.15;
  for (let r = 0; r < currentPiece.shape.length; r++) {
    for (let c = 0; c < currentPiece.shape[r].length; c++) {
      if (currentPiece.shape[r][c]) {
        const px = (currentPiece.x + c) * BLOCK_SIZE;
        const py = (ghostY + r) * BLOCK_SIZE;
        ctx.fillStyle = currentPiece.color;
        ctx.fillRect(px + 1, py + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
      }
    }
  }
  ctx.globalAlpha = 1;
}

function drawNextPiece() {
  nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);

  if (!nextPiece) return;

  const shape = nextPiece.shape;
  const cellSize = 24;
  const offsetX = (nextCanvas.width - shape[0].length * cellSize) / 2;
  const offsetY = (nextCanvas.height - shape.length * cellSize) / 2;

  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      if (shape[r][c]) {
        const px = offsetX + c * cellSize;
        const py = offsetY + r * cellSize;

        nextCtx.fillStyle = nextPiece.color;
        nextCtx.globalAlpha = 0.9;
        nextCtx.fillRect(px + 1, py + 1, cellSize - 2, cellSize - 2);

        nextCtx.fillStyle = 'rgba(255,255,255,0.15)';
        nextCtx.fillRect(px + 1, py + 1, cellSize - 2, 2);

        nextCtx.globalAlpha = 1;
      }
    }
  }

  // Draw word on next piece
  if (nextPiece.word) {
    nextCtx.fillStyle = 'rgba(255,255,255,0.7)';
    nextCtx.font = 'bold 13px "Noto Sans SC", sans-serif';
    nextCtx.textAlign = 'center';
    nextCtx.textBaseline = 'top';
    nextCtx.fillText(nextPiece.word.chinese, nextCanvas.width / 2, nextCanvas.height - 20);
  }
}

function drawEmptyBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }
  }
}

// ===== UI UPDATES =====
function updateUI() {
  document.getElementById('score').textContent = score.toLocaleString();
  document.getElementById('level').textContent = level;
  document.getElementById('lines').textContent = lines;
  document.getElementById('words-learned').textContent = wordsLearned;
}

function updateCurrentWordDisplay() {
  const el = document.getElementById('current-word');
  if (currentWord) {
    el.innerHTML = `
      <div class="cw-chinese">${currentWord.chinese}</div>
      <div class="cw-pinyin">${currentWord.pinyin}</div>
      <div class="cw-korean">${currentWord.korean}</div>
    `;
  }
}

function addRecentWord(word) {
  // Avoid duplicates at top
  if (recentWords.length > 0 && recentWords[0].chinese === word.chinese) return;

  recentWords.unshift(word);
  if (recentWords.length > 15) recentWords.pop();
  updateRecentWords();
}

function updateRecentWords() {
  const container = document.getElementById('recent-words');
  if (recentWords.length === 0) {
    container.innerHTML = '<p class="empty-msg">게임을 시작하세요!</p>';
    return;
  }
  container.innerHTML = recentWords.map(w =>
    `<div class="recent-word-item">
      <span class="rw-char">${w.chinese}</span>
      <span class="rw-meaning">${w.korean}</span>
    </div>`
  ).join('');
}

function showScorePopup(text, x, y) {
  const popup = document.createElement('div');
  popup.className = 'score-popup';
  popup.textContent = text;
  popup.style.left = x + 'px';
  popup.style.top = y + 'px';
  document.querySelector('.game-center').appendChild(popup);
  setTimeout(() => popup.remove(), 1000);
}

// ===== STATS =====
function saveStats() {
  const stats = JSON.parse(localStorage.getItem('tetris-chinese-stats') || '{}');
  stats.highScore = Math.max(stats.highScore || 0, score);
  stats.totalWords = (stats.totalWords || 0) + wordsLearned;
  stats.totalGames = (stats.totalGames || 0) + 1;
  stats.totalQuizCorrect = (stats.totalQuizCorrect || 0) + quizCorrect;
  stats.totalQuizTotal = (stats.totalQuizTotal || 0) + quizTotal;
  localStorage.setItem('tetris-chinese-stats', JSON.stringify(stats));
}
