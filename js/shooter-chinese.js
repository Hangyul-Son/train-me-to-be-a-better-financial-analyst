/* ======================================================
   슈팅 x 中文 - 1984-style Vertical Shooter + Chinese Learning
   Kill enemies → Learn Chinese words!
   ====================================================== */

// ── Vocabulary Data (HSK 1-4) ──
const VOCAB = {
  1: [
    {chinese:'你好',pinyin:'nǐ hǎo',korean:'안녕하세요'},
    {chinese:'谢谢',pinyin:'xiè xie',korean:'감사합니다'},
    {chinese:'再见',pinyin:'zài jiàn',korean:'안녕히 가세요'},
    {chinese:'是',pinyin:'shì',korean:'~이다'},
    {chinese:'不',pinyin:'bù',korean:'아니다'},
    {chinese:'我',pinyin:'wǒ',korean:'나'},
    {chinese:'你',pinyin:'nǐ',korean:'너'},
    {chinese:'他',pinyin:'tā',korean:'그'},
    {chinese:'她',pinyin:'tā',korean:'그녀'},
    {chinese:'们',pinyin:'men',korean:'~들'},
    {chinese:'这',pinyin:'zhè',korean:'이것'},
    {chinese:'那',pinyin:'nà',korean:'저것'},
    {chinese:'什么',pinyin:'shén me',korean:'무엇'},
    {chinese:'谁',pinyin:'shuí',korean:'누구'},
    {chinese:'哪',pinyin:'nǎ',korean:'어디'},
    {chinese:'多少',pinyin:'duō shao',korean:'얼마'},
    {chinese:'几',pinyin:'jǐ',korean:'몇'},
    {chinese:'怎么',pinyin:'zěn me',korean:'어떻게'},
    {chinese:'很',pinyin:'hěn',korean:'매우'},
    {chinese:'大',pinyin:'dà',korean:'크다'},
    {chinese:'小',pinyin:'xiǎo',korean:'작다'},
    {chinese:'好',pinyin:'hǎo',korean:'좋다'},
    {chinese:'人',pinyin:'rén',korean:'사람'},
    {chinese:'中国',pinyin:'zhōng guó',korean:'중국'},
    {chinese:'学生',pinyin:'xué shēng',korean:'학생'},
    {chinese:'老师',pinyin:'lǎo shī',korean:'선생님'},
    {chinese:'朋友',pinyin:'péng yǒu',korean:'친구'},
    {chinese:'家',pinyin:'jiā',korean:'집, 가정'},
    {chinese:'学校',pinyin:'xué xiào',korean:'학교'},
    {chinese:'饭',pinyin:'fàn',korean:'밥'},
    {chinese:'水',pinyin:'shuǐ',korean:'물'},
    {chinese:'茶',pinyin:'chá',korean:'차'},
    {chinese:'钱',pinyin:'qián',korean:'돈'},
    {chinese:'书',pinyin:'shū',korean:'책'},
    {chinese:'电话',pinyin:'diàn huà',korean:'전화'},
    {chinese:'今天',pinyin:'jīn tiān',korean:'오늘'},
    {chinese:'明天',pinyin:'míng tiān',korean:'내일'},
    {chinese:'昨天',pinyin:'zuó tiān',korean:'어제'},
    {chinese:'吃',pinyin:'chī',korean:'먹다'},
    {chinese:'喝',pinyin:'hē',korean:'마시다'},
    {chinese:'看',pinyin:'kàn',korean:'보다'},
    {chinese:'听',pinyin:'tīng',korean:'듣다'},
    {chinese:'说',pinyin:'shuō',korean:'말하다'},
    {chinese:'读',pinyin:'dú',korean:'읽다'},
    {chinese:'写',pinyin:'xiě',korean:'쓰다'},
    {chinese:'买',pinyin:'mǎi',korean:'사다'},
    {chinese:'去',pinyin:'qù',korean:'가다'},
    {chinese:'来',pinyin:'lái',korean:'오다'},
    {chinese:'想',pinyin:'xiǎng',korean:'생각하다'},
    {chinese:'爱',pinyin:'ài',korean:'사랑하다'}
  ],
  2: [
    {chinese:'已经',pinyin:'yǐ jīng',korean:'이미'},
    {chinese:'虽然',pinyin:'suī rán',korean:'비록'},
    {chinese:'但是',pinyin:'dàn shì',korean:'그러나'},
    {chinese:'因为',pinyin:'yīn wèi',korean:'왜냐하면'},
    {chinese:'所以',pinyin:'suǒ yǐ',korean:'그래서'},
    {chinese:'如果',pinyin:'rú guǒ',korean:'만약'},
    {chinese:'可能',pinyin:'kě néng',korean:'아마'},
    {chinese:'应该',pinyin:'yīng gāi',korean:'~해야 한다'},
    {chinese:'觉得',pinyin:'jué de',korean:'느끼다'},
    {chinese:'知道',pinyin:'zhī dào',korean:'알다'},
    {chinese:'认为',pinyin:'rèn wéi',korean:'~라고 생각하다'},
    {chinese:'希望',pinyin:'xī wàng',korean:'희망하다'},
    {chinese:'准备',pinyin:'zhǔn bèi',korean:'준비하다'},
    {chinese:'开始',pinyin:'kāi shǐ',korean:'시작하다'},
    {chinese:'完成',pinyin:'wán chéng',korean:'완성하다'},
    {chinese:'问题',pinyin:'wèn tí',korean:'문제'},
    {chinese:'时间',pinyin:'shí jiān',korean:'시간'},
    {chinese:'事情',pinyin:'shì qíng',korean:'일, 사건'},
    {chinese:'地方',pinyin:'dì fāng',korean:'장소'},
    {chinese:'身体',pinyin:'shēn tǐ',korean:'신체'},
    {chinese:'快乐',pinyin:'kuài lè',korean:'즐겁다'},
    {chinese:'生日',pinyin:'shēng rì',korean:'생일'},
    {chinese:'考试',pinyin:'kǎo shì',korean:'시험'},
    {chinese:'运动',pinyin:'yùn dòng',korean:'운동'},
    {chinese:'旅游',pinyin:'lǚ yóu',korean:'여행'}
  ],
  3: [
    {chinese:'经济',pinyin:'jīng jì',korean:'경제'},
    {chinese:'社会',pinyin:'shè huì',korean:'사회'},
    {chinese:'环境',pinyin:'huán jìng',korean:'환경'},
    {chinese:'文化',pinyin:'wén huà',korean:'문화'},
    {chinese:'科技',pinyin:'kē jì',korean:'과학기술'},
    {chinese:'教育',pinyin:'jiào yù',korean:'교육'},
    {chinese:'政府',pinyin:'zhèng fǔ',korean:'정부'},
    {chinese:'发展',pinyin:'fā zhǎn',korean:'발전'},
    {chinese:'研究',pinyin:'yán jiū',korean:'연구'},
    {chinese:'影响',pinyin:'yǐng xiǎng',korean:'영향'},
    {chinese:'关系',pinyin:'guān xì',korean:'관계'},
    {chinese:'传统',pinyin:'chuán tǒng',korean:'전통'},
    {chinese:'国际',pinyin:'guó jì',korean:'국제'},
    {chinese:'责任',pinyin:'zé rèn',korean:'책임'},
    {chinese:'经验',pinyin:'jīng yàn',korean:'경험'},
    {chinese:'态度',pinyin:'tài dù',korean:'태도'},
    {chinese:'方法',pinyin:'fāng fǎ',korean:'방법'},
    {chinese:'条件',pinyin:'tiáo jiàn',korean:'조건'},
    {chinese:'积极',pinyin:'jī jí',korean:'적극적'},
    {chinese:'丰富',pinyin:'fēng fù',korean:'풍부하다'}
  ],
  4: [
    {chinese:'竞争',pinyin:'jìng zhēng',korean:'경쟁'},
    {chinese:'投资',pinyin:'tóu zī',korean:'투자'},
    {chinese:'市场',pinyin:'shì chǎng',korean:'시장'},
    {chinese:'技术',pinyin:'jì shù',korean:'기술'},
    {chinese:'创新',pinyin:'chuàng xīn',korean:'혁신'},
    {chinese:'管理',pinyin:'guǎn lǐ',korean:'관리'},
    {chinese:'效率',pinyin:'xiào lǜ',korean:'효율'},
    {chinese:'资源',pinyin:'zī yuán',korean:'자원'},
    {chinese:'质量',pinyin:'zhì liàng',korean:'품질'},
    {chinese:'利润',pinyin:'lì rùn',korean:'이윤'},
    {chinese:'战略',pinyin:'zhàn lüè',korean:'전략'},
    {chinese:'消费',pinyin:'xiāo fèi',korean:'소비'},
    {chinese:'供应',pinyin:'gōng yìng',korean:'공급'},
    {chinese:'贸易',pinyin:'mào yì',korean:'무역'},
    {chinese:'制造',pinyin:'zhì zào',korean:'제조'}
  ]
};

// ── Game Constants ──
const CANVAS_W = 480, CANVAS_H = 720;
const PLAYER_W = 40, PLAYER_H = 40;
const BULLET_W = 4, BULLET_H = 12;
const ENEMY_TYPES = [
  { w: 36, h: 28, hp: 1, speed: 1.5, color: '#ff5252', points: 100 },
  { w: 40, h: 32, hp: 2, speed: 1.2, color: '#ff9800', points: 200 },
  { w: 48, h: 36, hp: 3, speed: 1.0, color: '#e040fb', points: 300 },
];
const VOCAB_SHOW_MS = 2200;
const QUIZ_EVERY_N_KILLS = 4;
const STAR_COUNT = 80;

// ── DOM ──
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// ── Game State ──
let currentLevel = 4;
let vocab = [];
let vocabIndex = 0;
let gameRunning = false;
let gamePaused = false;
let animFrame = null;
let score = 0;
let kills = 0;
let wordsCorrect = 0;
let wordsWrong = 0;
let streak = 0;
let bestStreak = 0;
let wrongWords = [];
let recentWords = [];
let learnedInSession = [];

// Player
let player = { x: 0, y: 0, w: PLAYER_W, h: PLAYER_H, speed: 5, shootCooldown: 0, lives: 3 };
let bullets = [];
let enemies = [];
let particles = [];
let enemyBullets = [];
let stars = [];
let spawnTimer = 0;
let spawnInterval = 90;
let difficultyTimer = 0;
let keys = {};
let autoFire = true;

// ── Init ──
function init() {
  loadVocab();
  setupStars();
  setupListeners();
  updateStatsUI();
  document.getElementById('start-overlay').style.display = '';
}

function loadVocab() {
  vocab = [...VOCAB[currentLevel]];
  shuffle(vocab);
  vocabIndex = 0;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getNextWord() {
  // 40% chance review wrong word
  if (wrongWords.length > 0 && Math.random() < 0.4) {
    return wrongWords[Math.floor(Math.random() * wrongWords.length)];
  }
  if (vocabIndex >= vocab.length) {
    shuffle(vocab);
    vocabIndex = 0;
  }
  return vocab[vocabIndex++];
}

// ── Stars (background) ──
function setupStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * CANVAS_W,
      y: Math.random() * CANVAS_H,
      speed: 0.3 + Math.random() * 1.5,
      size: 0.5 + Math.random() * 1.5,
      brightness: 0.3 + Math.random() * 0.7
    });
  }
}

// ── Event Listeners ──
function setupListeners() {
  document.addEventListener('keydown', e => { keys[e.key] = true; });
  document.addEventListener('keyup', e => { keys[e.key] = false; });

  document.getElementById('start-btn').addEventListener('click', startGame);
  document.getElementById('restart-btn').addEventListener('click', startGame);

  // Level buttons
  document.querySelectorAll('.lvl-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLevel = parseInt(btn.dataset.level);
      loadVocab();
    });
  });

  // Mobile controls
  const mobileMap = { 'm-up': 'ArrowUp', 'm-down': 'ArrowDown', 'm-left': 'ArrowLeft', 'm-right': 'ArrowRight', 'm-fire': ' ' };
  Object.entries(mobileMap).forEach(([id, key]) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('touchstart', e => { e.preventDefault(); keys[key] = true; });
    btn.addEventListener('touchend', e => { e.preventDefault(); keys[key] = false; });
    btn.addEventListener('mousedown', () => { keys[key] = true; });
    btn.addEventListener('mouseup', () => { keys[key] = false; });
  });
}

// ── Start / Restart ──
function startGame() {
  document.getElementById('start-overlay').style.display = 'none';
  document.getElementById('gameover-overlay').style.display = 'none';
  document.getElementById('vocab-overlay').style.display = 'none';
  document.getElementById('quiz-overlay').style.display = 'none';

  score = 0; kills = 0; wordsCorrect = 0; wordsWrong = 0; streak = 0; bestStreak = 0;
  wrongWords = []; recentWords = []; learnedInSession = [];
  bullets = []; enemies = []; particles = []; enemyBullets = [];
  spawnTimer = 0; spawnInterval = 90; difficultyTimer = 0;

  player.x = CANVAS_W / 2 - PLAYER_W / 2;
  player.y = CANVAS_H - PLAYER_H - 20;
  player.shootCooldown = 0;
  player.lives = 3;

  loadVocab();
  updateStatsUI();
  updateRecentWordsUI();
  gameRunning = true;
  gamePaused = false;
  if (animFrame) cancelAnimationFrame(animFrame);
  gameLoop();
}

// ── Game Loop ──
function gameLoop() {
  if (!gameRunning) return;
  if (!gamePaused) {
    update();
    render();
  }
  animFrame = requestAnimationFrame(gameLoop);
}

// ── Update ──
function update() {
  // Player movement
  if (keys['ArrowLeft'] || keys['a'] || keys['A']) player.x -= player.speed;
  if (keys['ArrowRight'] || keys['d'] || keys['D']) player.x += player.speed;
  if (keys['ArrowUp'] || keys['w'] || keys['W']) player.y -= player.speed;
  if (keys['ArrowDown'] || keys['s'] || keys['S']) player.y += player.speed;
  player.x = Math.max(0, Math.min(CANVAS_W - player.w, player.x));
  player.y = Math.max(CANVAS_H * 0.3, Math.min(CANVAS_H - player.h, player.y));

  // Auto fire
  if (player.shootCooldown > 0) player.shootCooldown--;
  if (autoFire || keys[' ']) {
    if (player.shootCooldown <= 0) {
      bullets.push({ x: player.x + player.w / 2 - BULLET_W / 2, y: player.y - BULLET_H, w: BULLET_W, h: BULLET_H });
      player.shootCooldown = 12;
    }
  }

  // Bullets
  bullets.forEach(b => b.y -= 8);
  bullets = bullets.filter(b => b.y + b.h > 0);

  // Enemy bullets
  enemyBullets.forEach(b => { b.x += b.vx; b.y += b.vy; });
  enemyBullets = enemyBullets.filter(b => b.y < CANVAS_H + 10 && b.y > -10 && b.x > -10 && b.x < CANVAS_W + 10);

  // Spawn enemies
  spawnTimer++;
  if (spawnTimer >= spawnInterval) {
    spawnTimer = 0;
    spawnEnemy();
  }

  // Difficulty ramp
  difficultyTimer++;
  if (difficultyTimer % 600 === 0 && spawnInterval > 30) {
    spawnInterval -= 5;
  }

  // Update enemies
  enemies.forEach(e => {
    e.y += e.speed;
    // Simple sine wave movement
    e.x += Math.sin(e.y * 0.02 + e.phase) * e.wobble;
    // Enemy shooting
    e.shootTimer--;
    if (e.shootTimer <= 0 && e.canShoot) {
      e.shootTimer = 120 + Math.random() * 120;
      const dx = player.x + player.w / 2 - (e.x + e.w / 2);
      const dy = player.y + player.h / 2 - (e.y + e.h / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 0) {
        enemyBullets.push({
          x: e.x + e.w / 2, y: e.y + e.h,
          w: 5, h: 5,
          vx: (dx / dist) * 3, vy: (dy / dist) * 3
        });
      }
    }
  });

  // Bullet-enemy collision
  bullets.forEach(b => {
    enemies.forEach(e => {
      if (!e.dead && rectsOverlap(b, e)) {
        b.dead = true;
        e.hp--;
        spawnHitParticles(b.x, b.y, e.color);
        if (e.hp <= 0) {
          e.dead = true;
          score += e.points;
          kills++;
          spawnExplosion(e.x + e.w / 2, e.y + e.h / 2, e.color);
          onEnemyKilled();
        }
      }
    });
  });
  bullets = bullets.filter(b => !b.dead);
  enemies = enemies.filter(e => !e.dead && e.y < CANVAS_H + 50);

  // Enemy-player collision & enemy bullet-player collision
  let playerHit = false;
  enemies.forEach(e => {
    if (!e.dead && rectsOverlap(player, e)) {
      e.dead = true;
      playerHit = true;
      spawnExplosion(e.x + e.w / 2, e.y + e.h / 2, e.color);
    }
  });
  enemyBullets.forEach(b => {
    if (rectsOverlap(player, { x: b.x - b.w / 2, y: b.y - b.h / 2, w: b.w, h: b.h })) {
      b.dead = true;
      playerHit = true;
    }
  });
  enemyBullets = enemyBullets.filter(b => !b.dead);

  if (playerHit) {
    player.lives--;
    spawnExplosion(player.x + player.w / 2, player.y + player.h / 2, '#00e5ff');
    if (player.lives <= 0) {
      gameOver();
      return;
    }
    // Brief invincibility flash handled in render
    player.invincibleTimer = 90;
  }
  if (player.invincibleTimer > 0) player.invincibleTimer--;

  // Particles
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.life--;
    p.vy += 0.05;
  });
  particles = particles.filter(p => p.life > 0);

  // Stars
  stars.forEach(s => {
    s.y += s.speed;
    if (s.y > CANVAS_H) { s.y = 0; s.x = Math.random() * CANVAS_W; }
  });

  updateStatsUI();
}

// ── Spawn ──
function spawnEnemy() {
  const typeIdx = Math.random() < 0.6 ? 0 : (Math.random() < 0.7 ? 1 : 2);
  const type = ENEMY_TYPES[typeIdx];
  enemies.push({
    x: Math.random() * (CANVAS_W - type.w),
    y: -type.h,
    w: type.w, h: type.h,
    hp: type.hp,
    speed: type.speed + Math.random() * 0.5,
    color: type.color,
    points: type.points,
    phase: Math.random() * Math.PI * 2,
    wobble: 0.5 + Math.random() * 1,
    shootTimer: 60 + Math.random() * 120,
    canShoot: typeIdx >= 1,
    dead: false
  });
}

// ── Collision ──
function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

// ── Particles ──
function spawnExplosion(cx, cy, color) {
  for (let i = 0; i < 15; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 3;
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 20 + Math.random() * 20,
      color: color,
      size: 2 + Math.random() * 3
    });
  }
}
function spawnHitParticles(x, y, color) {
  for (let i = 0; i < 5; i++) {
    particles.push({
      x, y,
      vx: (Math.random() - 0.5) * 2,
      vy: -Math.random() * 2,
      life: 10 + Math.random() * 10,
      color: color,
      size: 1 + Math.random() * 2
    });
  }
}

// ── Render ──
function render() {
  ctx.fillStyle = '#050515';
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

  // Stars
  stars.forEach(s => {
    ctx.fillStyle = `rgba(255,255,255,${s.brightness})`;
    ctx.fillRect(s.x, s.y, s.size, s.size);
  });

  // Player
  if (player.invincibleTimer > 0 && Math.floor(player.invincibleTimer / 4) % 2 === 0) {
    // Flash
  } else {
    drawPlayer(player.x, player.y);
  }

  // Lives
  for (let i = 0; i < player.lives; i++) {
    drawMiniPlayer(10 + i * 25, CANVAS_H - 20);
  }

  // Bullets
  ctx.fillStyle = '#00e5ff';
  bullets.forEach(b => {
    ctx.fillRect(b.x, b.y, b.w, b.h);
    ctx.fillStyle = 'rgba(0,229,255,0.3)';
    ctx.fillRect(b.x - 2, b.y, b.w + 4, b.h + 4);
    ctx.fillStyle = '#00e5ff';
  });

  // Enemy bullets
  ctx.fillStyle = '#ff5252';
  enemyBullets.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.w / 2 + 1, 0, Math.PI * 2);
    ctx.fill();
  });

  // Enemies
  enemies.forEach(e => drawEnemy(e));

  // Particles
  particles.forEach(p => {
    ctx.globalAlpha = p.life / 40;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
  ctx.globalAlpha = 1;

  // HUD
  ctx.fillStyle = '#00e5ff';
  ctx.font = 'bold 16px Courier New';
  ctx.textAlign = 'left';
  ctx.fillText(`SCORE: ${score}`, 10, 25);
  ctx.textAlign = 'right';
  ctx.fillText(`KILLS: ${kills}`, CANVAS_W - 10, 25);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffd740';
  ctx.fillText(`🔥 ${streak}`, CANVAS_W / 2, 25);
}

function drawPlayer(x, y) {
  ctx.fillStyle = '#00e5ff';
  ctx.beginPath();
  ctx.moveTo(x + PLAYER_W / 2, y);
  ctx.lineTo(x + PLAYER_W, y + PLAYER_H);
  ctx.lineTo(x + PLAYER_W * 0.75, y + PLAYER_H * 0.7);
  ctx.lineTo(x + PLAYER_W * 0.25, y + PLAYER_H * 0.7);
  ctx.lineTo(x, y + PLAYER_H);
  ctx.closePath();
  ctx.fill();
  // Engine glow
  ctx.fillStyle = 'rgba(0,229,255,0.4)';
  ctx.beginPath();
  ctx.moveTo(x + PLAYER_W * 0.35, y + PLAYER_H * 0.7);
  ctx.lineTo(x + PLAYER_W / 2, y + PLAYER_H + 5 + Math.random() * 5);
  ctx.lineTo(x + PLAYER_W * 0.65, y + PLAYER_H * 0.7);
  ctx.fill();
}

function drawMiniPlayer(x, y) {
  ctx.fillStyle = '#00e5ff';
  ctx.beginPath();
  ctx.moveTo(x + 8, y);
  ctx.lineTo(x + 16, y + 12);
  ctx.lineTo(x, y + 12);
  ctx.closePath();
  ctx.fill();
}

function drawEnemy(e) {
  ctx.fillStyle = e.color;
  // Body
  ctx.fillRect(e.x + e.w * 0.2, e.y, e.w * 0.6, e.h * 0.8);
  // Wings
  ctx.fillRect(e.x, e.y + e.h * 0.3, e.w, e.h * 0.3);
  // Cockpit
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.fillRect(e.x + e.w * 0.35, e.y + e.h * 0.5, e.w * 0.3, e.h * 0.25);
  // HP bar
  if (e.hp > 1) {
    const hpType = ENEMY_TYPES.find(t => t.color === e.color);
    const maxHp = hpType ? hpType.hp : e.hp;
    const hpRatio = e.hp / maxHp;
    ctx.fillStyle = '#333';
    ctx.fillRect(e.x, e.y - 6, e.w, 3);
    ctx.fillStyle = hpRatio > 0.5 ? '#4caf50' : '#f44336';
    ctx.fillRect(e.x, e.y - 6, e.w * hpRatio, 3);
  }
}

// ── Enemy Killed → Learning ──
function onEnemyKilled() {
  const word = getNextWord();
  learnedInSession.push(word);

  // Check if quiz time
  if (kills > 0 && kills % QUIZ_EVERY_N_KILLS === 0) {
    pauseGame();
    showVocabBriefly(word, () => {
      triggerQuiz(word);
    });
  } else {
    pauseGame();
    showVocabBriefly(word, () => {
      resumeGame();
    });
  }

  addRecentWord(word);
  updateScoreUI();
}

function pauseGame() { gamePaused = true; }
function resumeGame() { gamePaused = false; }

// ── Vocab Display ──
function showVocabBriefly(word, callback) {
  const overlay = document.getElementById('vocab-overlay');
  document.getElementById('vocab-chinese').textContent = word.chinese;
  document.getElementById('vocab-pinyin').textContent = word.pinyin;
  document.getElementById('vocab-korean').textContent = word.korean;
  overlay.style.display = '';

  const fill = document.getElementById('vocab-timer-fill');
  fill.style.width = '100%';
  let elapsed = 0;
  const interval = setInterval(() => {
    elapsed += 50;
    fill.style.width = Math.max(0, 100 - (elapsed / VOCAB_SHOW_MS) * 100) + '%';
    if (elapsed >= VOCAB_SHOW_MS) {
      clearInterval(interval);
      overlay.style.display = 'none';
      callback();
    }
  }, 50);
}

// ── Quiz ──
function triggerQuiz(shownWord) {
  const overlay = document.getElementById('quiz-overlay');
  const choicesEl = document.getElementById('sq-choices');
  const resultEl = document.getElementById('sq-result');
  resultEl.textContent = '';

  // Pick quiz type
  const types = ['meaning', 'pinyin', 'character'];
  const type = types[Math.floor(Math.random() * types.length)];

  let question, prompt, hint = '', correctAnswer;
  const options = [];

  if (type === 'meaning') {
    question = '이 단어의 뜻은?';
    prompt = shownWord.chinese;
    hint = shownWord.pinyin;
    correctAnswer = shownWord.korean;
    options.push(correctAnswer);
    const pool = getAllVocab().filter(w => w.korean !== correctAnswer);
    shuffle(pool);
    for (let i = 0; i < 3 && i < pool.length; i++) options.push(pool[i].korean);
  } else if (type === 'pinyin') {
    question = '이 단어의 병음은?';
    prompt = shownWord.chinese;
    hint = shownWord.korean;
    correctAnswer = shownWord.pinyin;
    options.push(correctAnswer);
    const pool = getAllVocab().filter(w => w.pinyin !== correctAnswer);
    shuffle(pool);
    for (let i = 0; i < 3 && i < pool.length; i++) options.push(pool[i].pinyin);
  } else {
    question = '이 뜻에 맞는 한자는?';
    prompt = shownWord.korean;
    hint = shownWord.pinyin;
    correctAnswer = shownWord.chinese;
    options.push(correctAnswer);
    const pool = getAllVocab().filter(w => w.chinese !== correctAnswer);
    shuffle(pool);
    for (let i = 0; i < 3 && i < pool.length; i++) options.push(pool[i].chinese);
  }

  shuffle(options);

  document.getElementById('sq-question').textContent = question;
  document.getElementById('sq-prompt').textContent = prompt;
  document.getElementById('sq-hint').textContent = hint;

  choicesEl.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-choice-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => onQuizAnswer(btn, opt, correctAnswer, shownWord, overlay));
    choicesEl.appendChild(btn);
  });

  overlay.style.display = '';
}

function onQuizAnswer(btn, chosen, correct, word, overlay) {
  const allBtns = document.querySelectorAll('.quiz-choice-btn');
  allBtns.forEach(b => {
    b.classList.add('disabled');
    if (b.textContent === correct) b.classList.add('correct');
  });

  const resultEl = document.getElementById('sq-result');

  if (chosen === correct) {
    wordsCorrect++;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    score += 50 * streak;
    resultEl.textContent = `✅ 정답! (+${50 * streak}점)`;
    resultEl.style.color = '#4caf50';
    // Remove from wrong words
    wrongWords = wrongWords.filter(w => w.chinese !== word.chinese);
  } else {
    wordsWrong++;
    streak = 0;
    btn.classList.add('wrong');
    resultEl.textContent = `❌ 오답! 정답: ${correct}`;
    resultEl.style.color = '#f44336';
    if (!wrongWords.find(w => w.chinese === word.chinese)) {
      wrongWords.push(word);
    }
  }

  updateStatsUI();

  setTimeout(() => {
    overlay.style.display = 'none';
    resumeGame();
  }, 1500);
}

function getAllVocab() {
  let all = [];
  for (const lvl of Object.values(VOCAB)) all = all.concat(lvl);
  return all;
}

// ── Game Over ──
function gameOver() {
  gameRunning = false;
  if (animFrame) cancelAnimationFrame(animFrame);

  const totalAnswers = wordsCorrect + wordsWrong;
  const acc = totalAnswers > 0 ? Math.round((wordsCorrect / totalAnswers) * 100) : 0;

  document.getElementById('final-score').textContent = score;
  document.getElementById('final-kills').textContent = kills;
  document.getElementById('final-words').textContent = learnedInSession.length;
  document.getElementById('final-accuracy').textContent = acc + '%';

  const wrongReview = document.getElementById('wrong-review');
  const wrongList = document.getElementById('wrong-words-list');
  if (wrongWords.length > 0) {
    wrongReview.style.display = '';
    wrongList.innerHTML = wrongWords.map(w =>
      `<div class="wrong-word-row">
        <span>${w.chinese}</span>
        <span>${w.pinyin}</span>
        <span>${w.korean}</span>
      </div>`
    ).join('');
  } else {
    wrongReview.style.display = 'none';
  }

  document.getElementById('gameover-overlay').style.display = '';
}

// ── UI Updates ──
function updateStatsUI() {
  const totalAnswers = wordsCorrect + wordsWrong;
  const acc = totalAnswers > 0 ? Math.round((wordsCorrect / totalAnswers) * 100) : 0;

  document.getElementById('kills-count').textContent = kills;
  document.getElementById('words-correct').textContent = wordsCorrect;
  document.getElementById('words-wrong').textContent = wordsWrong;
  document.getElementById('accuracy').textContent = acc + '%';
  document.getElementById('streak-display').textContent = '🔥 ' + streak;
}

function updateScoreUI() {
  document.getElementById('score-display').textContent = score;
}

function addRecentWord(word) {
  recentWords.unshift(word);
  if (recentWords.length > 20) recentWords.pop();
  updateRecentWordsUI();
}

function updateRecentWordsUI() {
  const container = document.getElementById('recent-words');
  if (recentWords.length === 0) {
    container.innerHTML = '<p class="empty-msg">적을 격추하면 단어가 나타납니다!</p>';
    return;
  }
  container.innerHTML = recentWords.map(w =>
    `<div class="recent-word-item">
      <div class="rw-chinese">${w.chinese}</div>
      <div class="rw-pinyin">${w.pinyin}</div>
      <div class="rw-korean">${w.korean}</div>
    </div>`
  ).join('');
}

// ── Bootstrap ──
init();
