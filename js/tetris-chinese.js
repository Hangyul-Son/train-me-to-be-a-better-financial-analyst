// ===== Tetris x Chinese Learning Game (학습 강화 버전) =====

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
  I: '#00d2d3', O: '#ffa502', T: '#a55eea',
  S: '#2ed573', Z: '#ff4757', J: '#3742fa', L: '#ff6348'
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

// ===== LEARNING CONSTANTS =====
const QUIZ_EVERY_N_PIECES = 3;       // 3블록마다 미니퀴즈
const VOCAB_PREVIEW_MS = 2500;        // 새 블록 전 단어 미리보기 2.5초
const STREAK_BONUS_MULTIPLIER = 50;   // 연속정답 보너스
const QUIZ_TYPES = ['meaning', 'pinyin', 'character']; // 퀴즈 유형

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
let pieceCount = 0;          // 블록 카운터 (퀴즈 트리거용)
let learningStreak = 0;      // 연속 정답
let wrongWords = [];          // 틀린 단어 복습 목록
let showingPreview = false;   // 단어 미리보기 중

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

  document.querySelectorAll('.hsk-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (gameRunning) return;
      document.querySelectorAll('.hsk-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentHSK = parseInt(btn.dataset.level);
    });
  });

  document.getElementById('btn-left').addEventListener('click', () => movePiece(-1, 0));
  document.getElementById('btn-right').addEventListener('click', () => movePiece(1, 0));
  document.getElementById('btn-rotate').addEventListener('click', rotatePiece);
  document.getElementById('btn-down').addEventListener('click', () => movePiece(0, 1));
  document.getElementById('btn-drop').addEventListener('click', hardDrop);
  canvas.addEventListener('touchmove', e => { if (gameRunning) e.preventDefault(); }, { passive: false });
}

function handleKeyDown(e) {
  if (!gameRunning || gamePaused || showingPreview) {
    if (e.key === 'p' || e.key === 'P') {
      if (gamePaused && !showingPreview) resumeGame();
    }
    return;
  }
  switch (e.key) {
    case 'ArrowLeft': e.preventDefault(); movePiece(-1, 0); break;
    case 'ArrowRight': e.preventDefault(); movePiece(1, 0); break;
    case 'ArrowDown': e.preventDefault(); movePiece(0, 1); score += 1; break;
    case 'ArrowUp': e.preventDefault(); rotatePiece(); break;
    case ' ': e.preventDefault(); hardDrop(); break;
    case 'p': case 'P': pauseGame(); break;
  }
}

// ===== GAME LOGIC =====
function startGame() {
  board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  score = 0; level = 1; lines = 0; wordsLearned = 0;
  quizCorrect = 0; quizTotal = 0; dropInterval = 800;
  recentWords = []; collectedWords = []; wrongWords = [];
  pieceCount = 0; learningStreak = 0;
  gameRunning = true; gamePaused = false; showingPreview = false;

  document.getElementById('start-overlay').classList.add('hidden');
  document.getElementById('gameover-overlay').classList.add('hidden');
  document.getElementById('quiz-overlay').classList.add('hidden');

  updateUI();
  updateRecentWords();
  updateStreakDisplay();

  currentPiece = createPiece();
  nextPiece = createPiece();
  drawNextPiece();

  // 첫 블록 미리보기
  showVocabPreview(currentPiece.word, () => {
    lastDrop = performance.now();
    if (animationId) cancelAnimationFrame(animationId);
    gameLoop();
  });
}

function gameLoop(timestamp = 0) {
  if (!gameRunning || gamePaused || showingPreview) return;

  if (timestamp - lastDrop > dropInterval) {
    if (!movePiece(0, 1)) {
      lockPiece();
      const cleared = clearLines();
      if (cleared > 0) {
        handleLinesClear(cleared);
        return; // 퀴즈 처리 후 재개
      }
      spawnNextPiece();
      return; // 미리보기 후 재개
    }
    lastDrop = timestamp;
  }

  draw();
  animationId = requestAnimationFrame(gameLoop);
}

function spawnNextPiece() {
  currentPiece = nextPiece;
  nextPiece = createPiece();
  drawNextPiece();
  assignWordToPiece();
  pieceCount++;

  if (!isValidPosition(currentPiece)) {
    gameOver();
    return;
  }

  // 매 N블록마다: 미니퀴즈 → 단어 미리보기 → 게임 재개
  if (pieceCount > 0 && pieceCount % QUIZ_EVERY_N_PIECES === 0 && collectedWords.length >= 2) {
    triggerMiniQuiz(() => {
      showVocabPreview(currentPiece.word, () => {
        lastDrop = performance.now();
        gameLoop();
      });
    });
  } else {
    // 일반 블록: 단어 미리보기 → 게임 재개
    showVocabPreview(currentPiece.word, () => {
      lastDrop = performance.now();
      gameLoop();
    });
  }
}

function pauseGame() {
  gamePaused = true;
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
  document.getElementById('final-score').textContent = score.toLocaleString();
  document.getElementById('final-lines').textContent = lines;
  document.getElementById('final-words').textContent = wordsLearned;
  document.getElementById('final-accuracy').textContent =
    quizTotal > 0 ? Math.round((quizCorrect / quizTotal) * 100) + '%' : '-';
  document.getElementById('gameover-overlay').classList.remove('hidden');
  saveStats();
}

// ===== VOCAB PREVIEW (새 블록 전 단어 미리보기) =====
function showVocabPreview(word, callback) {
  if (!word) { callback(); return; }

  showingPreview = true;
  gamePaused = true;
  draw(); // 현재 보드 그리기

  const overlay = document.getElementById('quiz-overlay');
  const titleEl = document.getElementById('quiz-title');
  const charEl = document.getElementById('quiz-char');
  const pinyinEl = document.getElementById('quiz-pinyin');
  const optionsEl = document.getElementById('quiz-options');
  const resultEl = document.getElementById('quiz-result');
  const timerEl = document.getElementById('quiz-timer');

  titleEl.textContent = '📖 다음 블록 단어를 외우세요!';
  charEl.textContent = word.chinese;
  pinyinEl.textContent = word.pinyin;
  resultEl.textContent = word.korean;
  resultEl.className = 'quiz-result preview-meaning';
  optionsEl.innerHTML = '';
  timerEl.style.width = '100%';

  overlay.classList.remove('hidden');

  let timeLeft = 100;
  const interval = setInterval(() => {
    timeLeft -= (100 / (VOCAB_PREVIEW_MS / 100));
    timerEl.style.width = Math.max(0, timeLeft) + '%';
    if (timeLeft <= 0) {
      clearInterval(interval);
      overlay.classList.add('hidden');
      showingPreview = false;
      gamePaused = false;
      callback();
    }
  }, 100);
}

// ===== PIECE LOGIC =====
function createPiece() {
  const name = PIECE_NAMES[Math.floor(Math.random() * PIECE_NAMES.length)];
  const shape = SHAPES[name].map(row => [...row]);
  // 틀린 단어가 있으면 50% 확률로 복습
  let word;
  if (wrongWords.length > 0 && Math.random() < 0.5) {
    word = wrongWords[Math.floor(Math.random() * wrongWords.length)];
  } else {
    word = getRandomWord();
  }
  return { shape, name, color: COLORS[name],
    x: Math.floor(COLS / 2) - Math.ceil(shape[0].length / 2), y: 0, word };
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
  if (!currentPiece || !gameRunning || gamePaused || showingPreview) return false;
  if (isValidPosition(currentPiece, dx, dy)) {
    currentPiece.x += dx;
    currentPiece.y += dy;
    return true;
  }
  return false;
}

function rotatePiece() {
  if (!currentPiece || !gameRunning || gamePaused || showingPreview) return;
  if (currentPiece.name === 'O') return;
  const original = currentPiece.shape.map(row => [...row]);
  const n = currentPiece.shape.length;
  const rotated = Array.from({ length: n }, () => Array(n).fill(0));
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++)
      rotated[c][n - 1 - r] = currentPiece.shape[r][c];
  currentPiece.shape = rotated;
  if (!isValidPosition(currentPiece)) {
    for (const kick of [1, -1, 2, -2]) {
      if (isValidPosition(currentPiece, kick, 0)) { currentPiece.x += kick; return; }
    }
    currentPiece.shape = original;
  }
}

function hardDrop() {
  if (!currentPiece || !gameRunning || gamePaused || showingPreview) return;
  let dropDist = 0;
  while (movePiece(0, 1)) dropDist++;
  score += dropDist * 2;
  lockPiece();
  const cleared = clearLines();
  if (cleared > 0) {
    handleLinesClear(cleared);
    return;
  }
  spawnNextPiece();
  updateUI();
}

function lockPiece() {
  for (let row = 0; row < currentPiece.shape.length; row++) {
    for (let col = 0; col < currentPiece.shape[row].length; col++) {
      if (currentPiece.shape[row][col]) {
        const y = currentPiece.y + row;
        const x = currentPiece.x + col;
        if (y >= 0 && y < ROWS && x >= 0 && x < COLS) {
          board[y][x] = { color: currentPiece.color, word: currentPiece.word };
        }
      }
    }
  }
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
  const newLevel = Math.floor(lines / 10) + 1;
  if (newLevel > level) {
    level = newLevel;
    dropInterval = Math.max(100, 800 - (level - 1) * 70);
  }
  updateUI();

  // 줄 클리어 → 강화 퀴즈 (병음 타이핑 or 다중 퀴즈)
  if (collectedWords.length > 0) {
    const quizCount = Math.min(count, 2); // 최대 2문제
    triggerLineClearQuiz(quizCount, () => {
      spawnNextPiece();
    });
  } else {
    spawnNextPiece();
  }
}

// ===== QUIZ SYSTEM =====

// 미니퀴즈: 3블록마다 (4지선다)
function triggerMiniQuiz(callback) {
  gamePaused = true;
  const quizType = QUIZ_TYPES[Math.floor(Math.random() * QUIZ_TYPES.length)];
  // 틀린 단어가 있으면 우선 복습
  let quizWord;
  if (wrongWords.length > 0 && Math.random() < 0.6) {
    quizWord = wrongWords[Math.floor(Math.random() * wrongWords.length)];
  } else {
    quizWord = collectedWords[Math.floor(Math.random() * collectedWords.length)];
  }
  const allWords = vocabulary[currentHSK] || vocabulary[1];

  const overlay = document.getElementById('quiz-overlay');
  const titleEl = document.getElementById('quiz-title');
  const charEl = document.getElementById('quiz-char');
  const pinyinEl = document.getElementById('quiz-pinyin');
  const resultEl = document.getElementById('quiz-result');
  const optionsEl = document.getElementById('quiz-options');
  const timerEl = document.getElementById('quiz-timer');

  resultEl.textContent = '';
  resultEl.className = 'quiz-result';
  timerEl.style.width = '100%';

  let correctAnswer;
  let wrongPool;

  if (quizType === 'meaning') {
    // 한자 보고 뜻 맞추기
    titleEl.textContent = '🔤 이 한자의 뜻은?';
    charEl.textContent = quizWord.chinese;
    pinyinEl.textContent = quizWord.pinyin;
    correctAnswer = quizWord.korean;
    wrongPool = allWords.filter(w => w.korean !== quizWord.korean).map(w => w.korean);
  } else if (quizType === 'pinyin') {
    // 한자 보고 병음 맞추기
    titleEl.textContent = '🗣️ 이 한자의 병음(발음)은?';
    charEl.textContent = quizWord.chinese;
    pinyinEl.textContent = quizWord.korean; // 힌트로 뜻 보여주기
    correctAnswer = quizWord.pinyin;
    wrongPool = allWords.filter(w => w.pinyin !== quizWord.pinyin).map(w => w.pinyin);
  } else {
    // 뜻 보고 한자 맞추기
    titleEl.textContent = '✍️ 이 뜻의 한자는?';
    charEl.textContent = quizWord.korean;
    pinyinEl.textContent = quizWord.pinyin;
    correctAnswer = quizWord.chinese;
    wrongPool = allWords.filter(w => w.chinese !== quizWord.chinese).map(w => w.chinese);
  }

  const wrongAnswers = wrongPool.sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);

  optionsEl.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleQuizAnswer(btn, opt, correctAnswer, quizWord, callback));
    optionsEl.appendChild(btn);
  });

  overlay.classList.remove('hidden');

  // 타이머 (10초)
  let timeLeft = 100;
  const timerInterval = setInterval(() => {
    timeLeft -= 1;
    timerEl.style.width = timeLeft + '%';
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      quizTotal++;
      learningStreak = 0;
      addWrongWord(quizWord);
      resultEl.textContent = `⏰ 시간 초과! 정답: ${correctAnswer}`;
      resultEl.className = 'quiz-result wrong';
      optionsEl.querySelectorAll('.quiz-option-btn').forEach(b => {
        b.disabled = true;
        if (b.textContent === correctAnswer) b.classList.add('correct');
      });
      updateStreakDisplay();
      setTimeout(() => {
        overlay.classList.add('hidden');
        gamePaused = false;
        callback();
      }, 2000);
    }
  }, 100);
  overlay._timerInterval = timerInterval;
}

// 줄 클리어 퀴즈: 더 어렵고, 연속 출제
function triggerLineClearQuiz(count, callback) {
  let remaining = count;

  function nextQuiz() {
    if (remaining <= 0) {
      callback();
      return;
    }
    remaining--;
    gamePaused = true;

    const quizWord = collectedWords[Math.floor(Math.random() * collectedWords.length)];
    const allWords = vocabulary[currentHSK] || vocabulary[1];

    const overlay = document.getElementById('quiz-overlay');
    const titleEl = document.getElementById('quiz-title');
    const charEl = document.getElementById('quiz-char');
    const pinyinEl = document.getElementById('quiz-pinyin');
    const resultEl = document.getElementById('quiz-result');
    const optionsEl = document.getElementById('quiz-options');
    const timerEl = document.getElementById('quiz-timer');

    // 줄 클리어 퀴즈는 병음 없이! (더 어려움)
    titleEl.textContent = `⭐ 줄 클리어! 이 한자의 뜻은? (${count - remaining}/${count})`;
    charEl.textContent = quizWord.chinese;
    pinyinEl.textContent = ''; // 병음 숨김!
    resultEl.textContent = '';
    resultEl.className = 'quiz-result';
    timerEl.style.width = '100%';

    const correctAnswer = quizWord.korean;
    const wrongAnswers = allWords
      .filter(w => w.korean !== quizWord.korean)
      .sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.korean);
    const options = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);

    optionsEl.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleQuizAnswer(btn, opt, correctAnswer, quizWord, nextQuiz));
      optionsEl.appendChild(btn);
    });

    overlay.classList.remove('hidden');

    // 타이머 (8초 - 더 짧음)
    let timeLeft = 100;
    const timerInterval = setInterval(() => {
      timeLeft -= 1.25;
      timerEl.style.width = Math.max(0, timeLeft) + '%';
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        quizTotal++;
        learningStreak = 0;
        addWrongWord(quizWord);
        resultEl.textContent = `⏰ 시간 초과! 정답: ${correctAnswer}`;
        resultEl.className = 'quiz-result wrong';
        optionsEl.querySelectorAll('.quiz-option-btn').forEach(b => {
          b.disabled = true;
          if (b.textContent === correctAnswer) b.classList.add('correct');
        });
        updateStreakDisplay();
        setTimeout(() => {
          overlay.classList.add('hidden');
          gamePaused = false;
          nextQuiz();
        }, 2000);
      }
    }, 100);
    overlay._timerInterval = timerInterval;
  }

  nextQuiz();
}

function handleQuizAnswer(btn, selected, correct, word, callback) {
  const overlay = document.getElementById('quiz-overlay');
  const resultEl = document.getElementById('quiz-result');
  const optionsEl = document.getElementById('quiz-options');

  if (overlay._timerInterval) clearInterval(overlay._timerInterval);

  optionsEl.querySelectorAll('.quiz-option-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
  });

  quizTotal++;

  if (selected === correct) {
    quizCorrect++;
    learningStreak++;
    removeWrongWord(word);
    btn.classList.add('correct');
    const streakBonus = learningStreak > 1 ? learningStreak * STREAK_BONUS_MULTIPLIER : 0;
    const basePoints = 200;
    const totalPoints = basePoints + streakBonus;
    score += totalPoints;

    let msg = `正确! 정답! +${basePoints}`;
    if (streakBonus > 0) msg += ` 🔥 연속 ${learningStreak}회 보너스 +${streakBonus}`;
    resultEl.textContent = msg;
    resultEl.className = 'quiz-result correct';
    showScorePopup(`+${totalPoints}`, canvas.width / 2, canvas.height / 2);
  } else {
    btn.classList.add('wrong');
    learningStreak = 0;
    addWrongWord(word);
    resultEl.textContent = `错了! 정답: ${correct}`;
    resultEl.className = 'quiz-result wrong';
  }

  updateUI();
  updateStreakDisplay();

  setTimeout(() => {
    overlay.classList.add('hidden');
    gamePaused = false;
    callback();
  }, 1800);
}

// ===== WRONG WORDS MANAGEMENT =====
function addWrongWord(word) {
  if (!wrongWords.find(w => w.chinese === word.chinese)) {
    wrongWords.push(word);
  }
}

function removeWrongWord(word) {
  wrongWords = wrongWords.filter(w => w.chinese !== word.chinese);
}

// ===== DRAWING =====
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  ctx.lineWidth = 1;
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);

  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (board[r][c])
        drawBlock(ctx, c, r, board[r][c].color, board[r][c].word);

  if (currentPiece) {
    drawGhostPiece();
    for (let r = 0; r < currentPiece.shape.length; r++)
      for (let c = 0; c < currentPiece.shape[r].length; c++)
        if (currentPiece.shape[r][c])
          drawBlock(ctx, currentPiece.x + c, currentPiece.y + r, currentPiece.color, currentPiece.word, true);
  }
}

function drawBlock(context, x, y, color, word, isActive = false) {
  const px = x * BLOCK_SIZE, py = y * BLOCK_SIZE, s = BLOCK_SIZE;
  context.fillStyle = color;
  context.globalAlpha = isActive ? 0.95 : 0.8;
  context.fillRect(px + 1, py + 1, s - 2, s - 2);
  context.fillStyle = 'rgba(255,255,255,0.2)';
  context.fillRect(px + 1, py + 1, s - 2, 3);
  context.fillRect(px + 1, py + 1, 3, s - 2);
  context.fillStyle = 'rgba(0,0,0,0.3)';
  context.fillRect(px + s - 3, py + 1, 2, s - 2);
  context.fillRect(px + 1, py + s - 3, s - 2, 2);
  context.globalAlpha = 1;
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
  while (isValidPosition(currentPiece, 0, ghostY - currentPiece.y + 1)) ghostY++;
  ctx.globalAlpha = 0.15;
  for (let r = 0; r < currentPiece.shape.length; r++)
    for (let c = 0; c < currentPiece.shape[r].length; c++)
      if (currentPiece.shape[r][c]) {
        ctx.fillStyle = currentPiece.color;
        ctx.fillRect((currentPiece.x + c) * BLOCK_SIZE + 1, (ghostY + r) * BLOCK_SIZE + 1, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
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
  for (let r = 0; r < shape.length; r++)
    for (let c = 0; c < shape[r].length; c++)
      if (shape[r][c]) {
        const px = offsetX + c * cellSize, py = offsetY + r * cellSize;
        nextCtx.fillStyle = nextPiece.color;
        nextCtx.globalAlpha = 0.9;
        nextCtx.fillRect(px + 1, py + 1, cellSize - 2, cellSize - 2);
        nextCtx.fillStyle = 'rgba(255,255,255,0.15)';
        nextCtx.fillRect(px + 1, py + 1, cellSize - 2, 2);
        nextCtx.globalAlpha = 1;
      }
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
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      ctx.strokeRect(c * BLOCK_SIZE, r * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
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

function updateStreakDisplay() {
  let el = document.getElementById('streak-display');
  if (!el) {
    // 동적으로 streak 표시 추가
    const panel = document.querySelector('.left-panel');
    if (panel) {
      const box = document.createElement('div');
      box.className = 'panel-box';
      box.innerHTML = '<h3>학습 연속</h3><div class="score-display" id="streak-display">0</div>';
      panel.appendChild(box);
      el = document.getElementById('streak-display');
    }
  }
  if (el) {
    el.textContent = learningStreak > 0 ? `🔥 ${learningStreak}` : '0';
    el.style.color = learningStreak >= 5 ? '#ff4757' : learningStreak >= 3 ? '#ffa502' : '#2ed573';
  }
}

function addRecentWord(word) {
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
  container.innerHTML = recentWords.map(w => {
    const isWrong = wrongWords.find(ww => ww.chinese === w.chinese);
    return `<div class="recent-word-item${isWrong ? ' wrong-word' : ''}">
      <span class="rw-char">${w.chinese}</span>
      <span class="rw-meaning">${w.korean}</span>
    </div>`;
  }).join('');
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
