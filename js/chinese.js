// ===== Chinese Learning App for Korean Speakers =====

// ===== VOCABULARY DATA (HSK Levels) =====
const vocabulary = {
  1: [
    { chinese: "你好", pinyin: "nǐ hǎo", korean: "안녕하세요", tone: "3,3", hanja: "你好", example: "你好吗？(니하오마?) - 잘 지내세요?" },
    { chinese: "谢谢", pinyin: "xiè xie", korean: "감사합니다", tone: "4,0", hanja: "謝謝", example: "谢谢你！(시에시에니!) - 감사합니다!" },
    { chinese: "再见", pinyin: "zài jiàn", korean: "안녕히 가세요", tone: "4,4", hanja: "再見", example: "明天再见 (밍티엔짜이지엔) - 내일 만나요" },
    { chinese: "我", pinyin: "wǒ", korean: "나, 저", tone: "3", hanja: "我", example: "我是韩国人 (워 스 한궈런) - 저는 한국인입니다" },
    { chinese: "你", pinyin: "nǐ", korean: "너, 당신", tone: "3", hanja: "你", example: "你叫什么？(니 지아오 선머?) - 이름이 뭐예요?" },
    { chinese: "他", pinyin: "tā", korean: "그", tone: "1", hanja: "他", example: "他是老师 (타 스 라오스) - 그는 선생님입니다" },
    { chinese: "她", pinyin: "tā", korean: "그녀", tone: "1", hanja: "她", example: "她很漂亮 (타 헌 피아오량) - 그녀는 예쁩니다" },
    { chinese: "是", pinyin: "shì", korean: "~이다", tone: "4", hanja: "是", example: "我是学生 (워 스 쉬에셩) - 저는 학생입니다" },
    { chinese: "不", pinyin: "bù", korean: "아니다, ~않다", tone: "4", hanja: "不", example: "不好意思 (부하오이쓰) - 죄송합니다" },
    { chinese: "好", pinyin: "hǎo", korean: "좋다", tone: "3", hanja: "好", example: "好的 (하오더) - 좋아요, 알겠어요" },
    { chinese: "大", pinyin: "dà", korean: "크다", tone: "4", hanja: "大", example: "很大 (헌 다) - 매우 크다" },
    { chinese: "小", pinyin: "xiǎo", korean: "작다", tone: "3", hanja: "小", example: "小狗 (샤오거우) - 강아지" },
    { chinese: "多", pinyin: "duō", korean: "많다", tone: "1", hanja: "多", example: "多少钱？(뚜오샤오치엔?) - 얼마예요?" },
    { chinese: "少", pinyin: "shǎo", korean: "적다", tone: "3", hanja: "少", example: "太少了 (타이샤올러) - 너무 적어요" },
    { chinese: "人", pinyin: "rén", korean: "사람", tone: "2", hanja: "人", example: "中国人 (중궈런) - 중국인" },
    { chinese: "学", pinyin: "xué", korean: "배우다", tone: "2", hanja: "學", example: "学中文 (쉬에 중원) - 중국어를 배우다" },
    { chinese: "中国", pinyin: "zhōng guó", korean: "중국", tone: "1,2", hanja: "中國", example: "我去中国 (워 취 중궈) - 나는 중국에 간다" },
    { chinese: "韩国", pinyin: "hán guó", korean: "한국", tone: "2,2", hanja: "韓國", example: "我是韩国人 (워 스 한궈런) - 저는 한국인입니다" },
    { chinese: "吃", pinyin: "chī", korean: "먹다", tone: "1", hanja: "喫", example: "吃饭 (츠판) - 밥 먹다" },
    { chinese: "喝", pinyin: "hē", korean: "마시다", tone: "1", hanja: "喝", example: "喝水 (허 슈이) - 물을 마시다" },
    { chinese: "看", pinyin: "kàn", korean: "보다", tone: "4", hanja: "看", example: "看书 (칸슈) - 책을 보다" },
    { chinese: "说", pinyin: "shuō", korean: "말하다", tone: "1", hanja: "說", example: "说中文 (슈오 중원) - 중국어를 말하다" },
    { chinese: "听", pinyin: "tīng", korean: "듣다", tone: "1", hanja: "聽", example: "听音乐 (팅 인위에) - 음악을 듣다" },
    { chinese: "读", pinyin: "dú", korean: "읽다", tone: "2", hanja: "讀", example: "读书 (두슈) - 책을 읽다" },
    { chinese: "写", pinyin: "xiě", korean: "쓰다", tone: "3", hanja: "寫", example: "写字 (시에즈) - 글씨를 쓰다" },
    { chinese: "一", pinyin: "yī", korean: "하나, 1", tone: "1", hanja: "一", example: "一个人 (이거런) - 한 사람" },
    { chinese: "二", pinyin: "èr", korean: "둘, 2", tone: "4", hanja: "二", example: "二月 (얼위에) - 2월" },
    { chinese: "三", pinyin: "sān", korean: "셋, 3", tone: "1", hanja: "三", example: "三个 (산거) - 세 개" },
    { chinese: "四", pinyin: "sì", korean: "넷, 4", tone: "4", hanja: "四", example: "四月 (쓰위에) - 4월" },
    { chinese: "五", pinyin: "wǔ", korean: "다섯, 5", tone: "3", hanja: "五", example: "五个人 (우거런) - 다섯 명" },
    { chinese: "六", pinyin: "liù", korean: "여섯, 6", tone: "4", hanja: "六", example: "六点 (류디엔) - 6시" },
    { chinese: "七", pinyin: "qī", korean: "일곱, 7", tone: "1", hanja: "七", example: "七月 (치위에) - 7월" },
    { chinese: "八", pinyin: "bā", korean: "여덟, 8", tone: "1", hanja: "八", example: "八号 (바하오) - 8일" },
    { chinese: "九", pinyin: "jiǔ", korean: "아홉, 9", tone: "3", hanja: "九", example: "九月 (지우위에) - 9월" },
    { chinese: "十", pinyin: "shí", korean: "열, 10", tone: "2", hanja: "十", example: "十分 (스펀) - 매우, 10분" },
    { chinese: "今天", pinyin: "jīn tiān", korean: "오늘", tone: "1,1", hanja: "今天", example: "今天很热 (진티엔 헌 러) - 오늘 매우 덥다" },
    { chinese: "明天", pinyin: "míng tiān", korean: "내일", tone: "2,1", hanja: "明天", example: "明天见 (밍티엔지엔) - 내일 만나요" },
    { chinese: "昨天", pinyin: "zuó tiān", korean: "어제", tone: "2,1", hanja: "昨天", example: "昨天下雨了 (쭈오티엔 시아위러) - 어제 비가 왔다" },
    { chinese: "水", pinyin: "shuǐ", korean: "물", tone: "3", hanja: "水", example: "喝水 (허슈이) - 물을 마시다" },
    { chinese: "饭", pinyin: "fàn", korean: "밥", tone: "4", hanja: "飯", example: "吃饭 (츠판) - 밥을 먹다" },
    { chinese: "家", pinyin: "jiā", korean: "집, 가정", tone: "1", hanja: "家", example: "回家 (후이지아) - 집에 돌아가다" },
    { chinese: "学校", pinyin: "xué xiào", korean: "학교", tone: "2,4", hanja: "學校", example: "去学校 (취 쉬에샤오) - 학교에 가다" },
    { chinese: "老师", pinyin: "lǎo shī", korean: "선생님", tone: "3,1", hanja: "老師", example: "王老师 (왕라오스) - 왕 선생님" },
    { chinese: "学生", pinyin: "xué sheng", korean: "학생", tone: "2,0", hanja: "學生", example: "我是学生 (워 스 쉬에셩) - 저는 학생입니다" },
    { chinese: "朋友", pinyin: "péng you", korean: "친구", tone: "2,0", hanja: "朋友", example: "好朋友 (하오펑요우) - 좋은 친구" },
    { chinese: "钱", pinyin: "qián", korean: "돈", tone: "2", hanja: "錢", example: "多少钱？(뚜오샤오치엔?) - 얼마예요?" },
    { chinese: "爱", pinyin: "ài", korean: "사랑하다", tone: "4", hanja: "愛", example: "我爱你 (워 아이 니) - 사랑해요" },
    { chinese: "想", pinyin: "xiǎng", korean: "생각하다, ~하고 싶다", tone: "3", hanja: "想", example: "我想你 (워 샹 니) - 보고 싶어요" },
    { chinese: "去", pinyin: "qù", korean: "가다", tone: "4", hanja: "去", example: "去哪儿？(취 날?) - 어디 가세요?" },
    { chinese: "来", pinyin: "lái", korean: "오다", tone: "2", hanja: "來", example: "过来 (궈라이) - 이리 오세요" },
    { chinese: "很", pinyin: "hěn", korean: "매우, 아주", tone: "3", hanja: "很", example: "很好 (헌하오) - 매우 좋다" },
  ],
  2: [
    { chinese: "已经", pinyin: "yǐ jīng", korean: "이미, 벌써", tone: "3,1", hanja: "已經", example: "已经到了 (이징 따올러) - 이미 도착했다" },
    { chinese: "因为", pinyin: "yīn wèi", korean: "왜냐하면, ~때문에", tone: "1,4", hanja: "因為", example: "因为下雨 (인웨이 시아위) - 비가 오기 때문에" },
    { chinese: "所以", pinyin: "suǒ yǐ", korean: "그래서, 그러므로", tone: "3,3", hanja: "所以", example: "所以我不去 (쑤오이 워 부취) - 그래서 안 가요" },
    { chinese: "但是", pinyin: "dàn shì", korean: "하지만, 그러나", tone: "4,4", hanja: "但是", example: "好吃，但是太贵 - 맛있지만 너무 비싸요" },
    { chinese: "如果", pinyin: "rú guǒ", korean: "만약, 만일", tone: "2,3", hanja: "如果", example: "如果下雨 (루궈 시아위) - 만약 비가 온다면" },
    { chinese: "还是", pinyin: "hái shi", korean: "아니면, 또는", tone: "2,0", hanja: "還是", example: "咖啡还是茶？- 커피 아니면 차?" },
    { chinese: "公司", pinyin: "gōng sī", korean: "회사", tone: "1,1", hanja: "公司", example: "去公司 (취 꽁쓰) - 회사에 가다" },
    { chinese: "医院", pinyin: "yī yuàn", korean: "병원", tone: "1,4", hanja: "醫院", example: "去医院 (취 이위엔) - 병원에 가다" },
    { chinese: "机场", pinyin: "jī chǎng", korean: "공항", tone: "1,3", hanja: "機場", example: "去机场 (취 지창) - 공항에 가다" },
    { chinese: "手机", pinyin: "shǒu jī", korean: "핸드폰", tone: "3,1", hanja: "手機", example: "看手机 (칸 서우지) - 핸드폰을 보다" },
    { chinese: "电脑", pinyin: "diàn nǎo", korean: "컴퓨터", tone: "4,3", hanja: "電腦", example: "用电脑 (용 디엔나오) - 컴퓨터를 사용하다" },
    { chinese: "问题", pinyin: "wèn tí", korean: "문제, 질문", tone: "4,2", hanja: "問題", example: "有问题吗？(요우 원티 마?) - 질문 있나요?" },
    { chinese: "时间", pinyin: "shí jiān", korean: "시간", tone: "2,1", hanja: "時間", example: "没有时间 (메이요우 스지엔) - 시간이 없다" },
    { chinese: "准备", pinyin: "zhǔn bèi", korean: "준비하다", tone: "3,4", hanja: "準備", example: "准备好了 (쥔베이 하올러) - 준비됐어요" },
    { chinese: "帮助", pinyin: "bāng zhù", korean: "돕다, 도움", tone: "1,4", hanja: "幫助", example: "请帮助我 (칭 방주 워) - 도와주세요" },
    { chinese: "生日", pinyin: "shēng rì", korean: "생일", tone: "1,4", hanja: "生日", example: "生日快乐 (셩르 콰일러) - 생일 축하해요" },
    { chinese: "快乐", pinyin: "kuài lè", korean: "즐겁다, 행복하다", tone: "4,4", hanja: "快樂", example: "新年快乐 (신니엔 콰일러) - 새해 복 많이 받으세요" },
    { chinese: "漂亮", pinyin: "piào liang", korean: "예쁘다", tone: "4,0", hanja: "漂亮", example: "很漂亮 (헌 피아오량) - 매우 예쁘다" },
    { chinese: "便宜", pinyin: "pián yi", korean: "싸다, 저렴하다", tone: "2,0", hanja: "便宜", example: "太便宜了 (타이 피엔이러) - 너무 싸다" },
    { chinese: "贵", pinyin: "guì", korean: "비싸다", tone: "4", hanja: "貴", example: "太贵了 (타이궤이러) - 너무 비싸요" },
    { chinese: "健康", pinyin: "jiàn kāng", korean: "건강", tone: "4,1", hanja: "健康", example: "身体健康 (선티 지엔캉) - 몸이 건강하다" },
    { chinese: "运动", pinyin: "yùn dòng", korean: "운동", tone: "4,4", hanja: "運動", example: "做运动 (쭈오 윈둥) - 운동하다" },
    { chinese: "旅游", pinyin: "lǚ yóu", korean: "여행", tone: "3,2", hanja: "旅遊", example: "去旅游 (취 뤼요우) - 여행 가다" },
    { chinese: "历史", pinyin: "lì shǐ", korean: "역사", tone: "4,3", hanja: "歷史", example: "中国历史 (중궈 리스) - 중국 역사" },
    { chinese: "文化", pinyin: "wén huà", korean: "문화", tone: "2,4", hanja: "文化", example: "中国文化 (중궈 원화) - 중국 문화" },
  ],
  3: [
    { chinese: "经济", pinyin: "jīng jì", korean: "경제", tone: "1,4", hanja: "經濟", example: "经济发展 (징지 파잔) - 경제 발전" },
    { chinese: "社会", pinyin: "shè huì", korean: "사회", tone: "4,4", hanja: "社會", example: "社会问题 (셔후이 원티) - 사회 문제" },
    { chinese: "政治", pinyin: "zhèng zhì", korean: "정치", tone: "4,4", hanja: "政治", example: "政治制度 (정즈 즈두) - 정치 제도" },
    { chinese: "教育", pinyin: "jiào yù", korean: "교육", tone: "4,4", hanja: "教育", example: "教育制度 (지아오위 즈두) - 교육 제도" },
    { chinese: "科学", pinyin: "kē xué", korean: "과학", tone: "1,2", hanja: "科學", example: "科学技术 (커쉬에 지슈) - 과학 기술" },
    { chinese: "技术", pinyin: "jì shù", korean: "기술", tone: "4,4", hanja: "技術", example: "信息技术 (신시 지슈) - 정보 기술" },
    { chinese: "环境", pinyin: "huán jìng", korean: "환경", tone: "2,4", hanja: "環境", example: "保护环境 (바오후 환징) - 환경을 보호하다" },
    { chinese: "经验", pinyin: "jīng yàn", korean: "경험", tone: "1,4", hanja: "經驗", example: "工作经验 (꽁쭈오 징옌) - 업무 경험" },
    { chinese: "关系", pinyin: "guān xi", korean: "관계", tone: "1,0", hanja: "關係", example: "国际关系 (궈지 관시) - 국제 관계" },
    { chinese: "发展", pinyin: "fā zhǎn", korean: "발전", tone: "1,3", hanja: "發展", example: "经济发展 (징지 파잔) - 경제 발전" },
    { chinese: "影响", pinyin: "yǐng xiǎng", korean: "영향", tone: "3,3", hanja: "影響", example: "产生影响 (찬셩 잉샹) - 영향을 미치다" },
    { chinese: "安全", pinyin: "ān quán", korean: "안전", tone: "1,2", hanja: "安全", example: "交通安全 (지아오통 안취엔) - 교통 안전" },
    { chinese: "成功", pinyin: "chéng gōng", korean: "성공", tone: "2,1", hanja: "成功", example: "取得成功 (취더 청꽁) - 성공을 거두다" },
    { chinese: "失败", pinyin: "shī bài", korean: "실패", tone: "1,4", hanja: "失敗", example: "不怕失败 (부파 스바이) - 실패를 두려워하지 않다" },
    { chinese: "责任", pinyin: "zé rèn", korean: "책임", tone: "2,4", hanja: "責任", example: "有责任 (요우 쩌런) - 책임이 있다" },
    { chinese: "态度", pinyin: "tài du", korean: "태도", tone: "4,0", hanja: "態度", example: "学习态度 (쉬에시 타이두) - 학습 태도" },
    { chinese: "意见", pinyin: "yì jiàn", korean: "의견", tone: "4,4", hanja: "意見", example: "提出意见 (티추 이지엔) - 의견을 제시하다" },
    { chinese: "决定", pinyin: "jué dìng", korean: "결정", tone: "2,4", hanja: "決定", example: "做出决定 (쭈오추 쥐에딩) - 결정을 내리다" },
    { chinese: "计划", pinyin: "jì huà", korean: "계획", tone: "4,4", hanja: "計劃", example: "学习计划 (쉬에시 지화) - 학습 계획" },
    { chinese: "比较", pinyin: "bǐ jiào", korean: "비교, 비교적", tone: "3,4", hanja: "比較", example: "比较好 (비지아오 하오) - 비교적 좋다" },
  ],
  4: [
    { chinese: "投资", pinyin: "tóu zī", korean: "투자", tone: "2,1", hanja: "投資", example: "投资股票 (터우즈 구피아오) - 주식에 투자하다" },
    { chinese: "市场", pinyin: "shì chǎng", korean: "시장", tone: "4,3", hanja: "市場", example: "股票市场 (구피아오 스창) - 주식 시장" },
    { chinese: "竞争", pinyin: "jìng zhēng", korean: "경쟁", tone: "4,1", hanja: "競爭", example: "市场竞争 (스창 징정) - 시장 경쟁" },
    { chinese: "效率", pinyin: "xiào lǜ", korean: "효율", tone: "4,4", hanja: "效率", example: "提高效率 (티가오 시아오뤼) - 효율을 높이다" },
    { chinese: "创新", pinyin: "chuàng xīn", korean: "혁신, 창신", tone: "4,1", hanja: "創新", example: "技术创新 (지슈 촹신) - 기술 혁신" },
    { chinese: "合作", pinyin: "hé zuò", korean: "협력, 합작", tone: "2,4", hanja: "合作", example: "国际合作 (궈지 허쭈오) - 국제 협력" },
    { chinese: "管理", pinyin: "guǎn lǐ", korean: "관리", tone: "3,3", hanja: "管理", example: "企业管理 (치예 관리) - 기업 관리" },
    { chinese: "分析", pinyin: "fēn xī", korean: "분석", tone: "1,1", hanja: "分析", example: "数据分析 (슈쥐 펀시) - 데이터 분석" },
    { chinese: "战略", pinyin: "zhàn lüè", korean: "전략", tone: "4,4", hanja: "戰略", example: "发展战略 (파잔 잔뤼에) - 발전 전략" },
    { chinese: "资源", pinyin: "zī yuán", korean: "자원", tone: "1,2", hanja: "資源", example: "人力资源 (런리 즈위엔) - 인적 자원" },
    { chinese: "结构", pinyin: "jié gòu", korean: "구조", tone: "2,4", hanja: "結構", example: "经济结构 (징지 지에거우) - 경제 구조" },
    { chinese: "制度", pinyin: "zhì dù", korean: "제도", tone: "4,4", hanja: "制度", example: "法律制度 (파뤼 즈두) - 법률 제도" },
    { chinese: "原则", pinyin: "yuán zé", korean: "원칙", tone: "2,2", hanja: "原則", example: "基本原则 (지번 위엔쩌) - 기본 원칙" },
    { chinese: "价值", pinyin: "jià zhí", korean: "가치", tone: "4,2", hanja: "價值", example: "核心价值 (허신 지아즈) - 핵심 가치" },
    { chinese: "现象", pinyin: "xiàn xiàng", korean: "현상", tone: "4,4", hanja: "現象", example: "社会现象 (셔후이 시엔샹) - 사회 현상" },
  ]
};

// ===== HANJA CONNECTION DATA =====
const hanjaConnections = [
  { chinese: "学校", pinyin: "xué xiào", korean: "학교", koreanHanja: "學校", category: "교육" },
  { chinese: "学生", pinyin: "xué shēng", korean: "학생", koreanHanja: "學生", category: "교육" },
  { chinese: "大学", pinyin: "dà xué", korean: "대학", koreanHanja: "大學", category: "교육" },
  { chinese: "图书馆", pinyin: "tú shū guǎn", korean: "도서관", koreanHanja: "圖書館", category: "교육" },
  { chinese: "教育", pinyin: "jiào yù", korean: "교육", koreanHanja: "教育", category: "교육" },
  { chinese: "经济", pinyin: "jīng jì", korean: "경제", koreanHanja: "經濟", category: "사회" },
  { chinese: "政治", pinyin: "zhèng zhì", korean: "정치", koreanHanja: "政治", category: "사회" },
  { chinese: "社会", pinyin: "shè huì", korean: "사회", koreanHanja: "社會", category: "사회" },
  { chinese: "文化", pinyin: "wén huà", korean: "문화", koreanHanja: "文化", category: "사회" },
  { chinese: "历史", pinyin: "lì shǐ", korean: "역사", koreanHanja: "歷史", category: "사회" },
  { chinese: "科学", pinyin: "kē xué", korean: "과학", koreanHanja: "科學", category: "학문" },
  { chinese: "数学", pinyin: "shù xué", korean: "수학", koreanHanja: "數學", category: "학문" },
  { chinese: "化学", pinyin: "huà xué", korean: "화학", koreanHanja: "化學", category: "학문" },
  { chinese: "物理", pinyin: "wù lǐ", korean: "물리", koreanHanja: "物理", category: "학문" },
  { chinese: "哲学", pinyin: "zhé xué", korean: "철학", koreanHanja: "哲學", category: "학문" },
  { chinese: "医院", pinyin: "yī yuàn", korean: "의원/병원", koreanHanja: "醫院", category: "건강" },
  { chinese: "健康", pinyin: "jiàn kāng", korean: "건강", koreanHanja: "健康", category: "건강" },
  { chinese: "运动", pinyin: "yùn dòng", korean: "운동", koreanHanja: "運動", category: "건강" },
  { chinese: "银行", pinyin: "yín háng", korean: "은행", koreanHanja: "銀行", category: "경제" },
  { chinese: "公司", pinyin: "gōng sī", korean: "공사/회사", koreanHanja: "公司", category: "경제" },
  { chinese: "投资", pinyin: "tóu zī", korean: "투자", koreanHanja: "投資", category: "경제" },
  { chinese: "市场", pinyin: "shì chǎng", korean: "시장", koreanHanja: "市場", category: "경제" },
  { chinese: "家族", pinyin: "jiā zú", korean: "가족", koreanHanja: "家族", category: "가족" },
  { chinese: "父母", pinyin: "fù mǔ", korean: "부모", koreanHanja: "父母", category: "가족" },
  { chinese: "兄弟", pinyin: "xiōng dì", korean: "형제", koreanHanja: "兄弟", category: "가족" },
  { chinese: "姐妹", pinyin: "jiě mèi", korean: "자매", koreanHanja: "姐妹", category: "가족" },
  { chinese: "自然", pinyin: "zì rán", korean: "자연", koreanHanja: "自然", category: "자연" },
  { chinese: "山", pinyin: "shān", korean: "산", koreanHanja: "山", category: "자연" },
  { chinese: "河", pinyin: "hé", korean: "하(강)", koreanHanja: "河", category: "자연" },
  { chinese: "空气", pinyin: "kōng qì", korean: "공기", koreanHanja: "空氣", category: "자연" },
  { chinese: "温度", pinyin: "wēn dù", korean: "온도", koreanHanja: "溫度", category: "자연" },
  { chinese: "注意", pinyin: "zhù yì", korean: "주의", koreanHanja: "注意", category: "일상" },
  { chinese: "安全", pinyin: "ān quán", korean: "안전", koreanHanja: "安全", category: "일상" },
  { chinese: "交通", pinyin: "jiāo tōng", korean: "교통", koreanHanja: "交通", category: "일상" },
  { chinese: "电话", pinyin: "diàn huà", korean: "전화", koreanHanja: "電話", category: "일상" },
  { chinese: "新闻", pinyin: "xīn wén", korean: "신문", koreanHanja: "新聞", category: "일상" },
  { chinese: "音乐", pinyin: "yīn yuè", korean: "음악", koreanHanja: "音樂", category: "문화" },
  { chinese: "美术", pinyin: "měi shù", korean: "미술", koreanHanja: "美術", category: "문화" },
  { chinese: "电影", pinyin: "diàn yǐng", korean: "전영/영화", koreanHanja: "電影", category: "문화" },
  { chinese: "成功", pinyin: "chéng gōng", korean: "성공", koreanHanja: "成功", category: "추상" },
  { chinese: "失败", pinyin: "shī bài", korean: "실패", koreanHanja: "失敗", category: "추상" },
  { chinese: "努力", pinyin: "nǔ lì", korean: "노력", koreanHanja: "努力", category: "추상" },
  { chinese: "希望", pinyin: "xī wàng", korean: "희망", koreanHanja: "希望", category: "추상" },
  { chinese: "感动", pinyin: "gǎn dòng", korean: "감동", koreanHanja: "感動", category: "추상" },
  { chinese: "约束", pinyin: "yuē shù", korean: "약속", koreanHanja: "約束", category: "추상" },
];

// ===== PHRASES DATA =====
const phrases = {
  greetings: [
    { chinese: "你好！", pinyin: "nǐ hǎo!", korean: "안녕하세요!", note: "가장 기본적인 인사" },
    { chinese: "你好吗？", pinyin: "nǐ hǎo ma?", korean: "잘 지내세요?", note: "안부를 물을 때" },
    { chinese: "我很好，谢谢！", pinyin: "wǒ hěn hǎo, xiè xie!", korean: "잘 지내요, 감사합니다!", note: "" },
    { chinese: "早上好！", pinyin: "zǎo shang hǎo!", korean: "좋은 아침이에요!", note: "아침 인사" },
    { chinese: "晚上好！", pinyin: "wǎn shang hǎo!", korean: "좋은 저녁이에요!", note: "저녁 인사" },
    { chinese: "再见！", pinyin: "zài jiàn!", korean: "안녕히 가세요!", note: "작별 인사" },
    { chinese: "好久不见！", pinyin: "hǎo jiǔ bú jiàn!", korean: "오랜만이에요!", note: "오랜만에 만났을 때" },
    { chinese: "认识你很高兴！", pinyin: "rèn shi nǐ hěn gāo xìng!", korean: "만나서 반갑습니다!", note: "처음 만났을 때" },
  ],
  daily: [
    { chinese: "请问...", pinyin: "qǐng wèn...", korean: "실례지만...", note: "정중하게 물을 때" },
    { chinese: "对不起", pinyin: "duì bu qǐ", korean: "죄송합니다", note: "사과할 때" },
    { chinese: "没关系", pinyin: "méi guān xi", korean: "괜찮아요", note: "사과에 답할 때" },
    { chinese: "不好意思", pinyin: "bù hǎo yì si", korean: "미안해요/실례합니다", note: "가벼운 사과" },
    { chinese: "我不懂", pinyin: "wǒ bù dǒng", korean: "모르겠어요", note: "이해하지 못했을 때" },
    { chinese: "请再说一遍", pinyin: "qǐng zài shuō yí biàn", korean: "다시 한번 말씀해주세요", note: "다시 물을 때" },
    { chinese: "我是韩国人", pinyin: "wǒ shì hán guó rén", korean: "저는 한국인입니다", note: "자기소개" },
    { chinese: "我在学中文", pinyin: "wǒ zài xué zhōng wén", korean: "저는 중국어를 배우고 있어요", note: "" },
    { chinese: "厕所在哪儿？", pinyin: "cè suǒ zài nǎr?", korean: "화장실 어디예요?", note: "장소를 물을 때" },
    { chinese: "现在几点？", pinyin: "xiàn zài jǐ diǎn?", korean: "지금 몇 시예요?", note: "시간을 물을 때" },
  ],
  shopping: [
    { chinese: "多少钱？", pinyin: "duō shǎo qián?", korean: "얼마예요?", note: "가격을 물을 때" },
    { chinese: "太贵了！", pinyin: "tài guì le!", korean: "너무 비싸요!", note: "흥정할 때" },
    { chinese: "便宜一点可以吗？", pinyin: "pián yi yì diǎn kě yǐ ma?", korean: "좀 싸게 해주실 수 있나요?", note: "흥정할 때" },
    { chinese: "我要这个", pinyin: "wǒ yào zhè ge", korean: "이거 주세요", note: "물건을 고를 때" },
    { chinese: "可以试一下吗？", pinyin: "kě yǐ shì yí xià ma?", korean: "한번 해볼 수 있나요?", note: "시착/시식 요청" },
    { chinese: "有别的颜色吗？", pinyin: "yǒu bié de yán sè ma?", korean: "다른 색상 있나요?", note: "" },
    { chinese: "可以刷卡吗？", pinyin: "kě yǐ shuā kǎ ma?", korean: "카드 되나요?", note: "결제 방법" },
    { chinese: "我只是看看", pinyin: "wǒ zhǐ shì kàn kan", korean: "그냥 구경하는 거예요", note: "편하게 둘러볼 때" },
  ],
  restaurant: [
    { chinese: "有菜单吗？", pinyin: "yǒu cài dān ma?", korean: "메뉴판 있나요?", note: "" },
    { chinese: "我要点菜", pinyin: "wǒ yào diǎn cài", korean: "주문할게요", note: "" },
    { chinese: "推荐什么？", pinyin: "tuī jiàn shén me?", korean: "추천 메뉴가 뭐예요?", note: "" },
    { chinese: "不要太辣", pinyin: "bú yào tài là", korean: "너무 맵지 않게 해주세요", note: "" },
    { chinese: "买单", pinyin: "mǎi dān", korean: "계산이요", note: "계산할 때" },
    { chinese: "好吃！", pinyin: "hǎo chī!", korean: "맛있어요!", note: "칭찬할 때" },
    { chinese: "再来一个", pinyin: "zài lái yí ge", korean: "하나 더 주세요", note: "추가 주문" },
    { chinese: "打包", pinyin: "dǎ bāo", korean: "포장해주세요", note: "테이크아웃" },
  ],
  travel: [
    { chinese: "这是哪里？", pinyin: "zhè shì nǎ lǐ?", korean: "여기가 어디예요?", note: "" },
    { chinese: "怎么去...？", pinyin: "zěn me qù...?", korean: "...에 어떻게 가요?", note: "길을 물을 때" },
    { chinese: "请帮我叫出租车", pinyin: "qǐng bāng wǒ jiào chū zū chē", korean: "택시 불러주세요", note: "" },
    { chinese: "到...多远？", pinyin: "dào...duō yuǎn?", korean: "...까지 얼마나 멀어요?", note: "거리를 물을 때" },
    { chinese: "我迷路了", pinyin: "wǒ mí lù le", korean: "길을 잃었어요", note: "" },
    { chinese: "有地图吗？", pinyin: "yǒu dì tú ma?", korean: "지도 있나요?", note: "" },
    { chinese: "我要订一间房", pinyin: "wǒ yào dìng yì jiān fáng", korean: "방 하나 예약하고 싶어요", note: "호텔에서" },
    { chinese: "几点退房？", pinyin: "jǐ diǎn tuì fáng?", korean: "체크아웃이 몇 시예요?", note: "" },
  ],
  business: [
    { chinese: "这是我的名片", pinyin: "zhè shì wǒ de míng piàn", korean: "제 명함입니다", note: "명함 교환" },
    { chinese: "请多关照", pinyin: "qǐng duō guān zhào", korean: "잘 부탁드립니다", note: "첫 만남에서" },
    { chinese: "我们合作吧", pinyin: "wǒ men hé zuò ba", korean: "함께 협력합시다", note: "" },
    { chinese: "什么时候方便？", pinyin: "shén me shí hou fāng biàn?", korean: "언제가 편하세요?", note: "일정 조율" },
    { chinese: "辛苦了", pinyin: "xīn kǔ le", korean: "수고하셨습니다", note: "업무 후 인사" },
    { chinese: "考虑一下", pinyin: "kǎo lǜ yí xià", korean: "생각해볼게요", note: "결정을 미룰 때" },
    { chinese: "没问题", pinyin: "méi wèn tí", korean: "문제없습니다", note: "동의할 때" },
    { chinese: "期待合作", pinyin: "qī dài hé zuò", korean: "협력을 기대합니다", note: "미팅 마무리" },
  ]
};

// ===== TONE QUIZ DATA =====
const toneQuizData = [
  { char: "是", pinyin: "shì", tone: 4, meaning: "~이다" },
  { char: "好", pinyin: "hǎo", tone: 3, meaning: "좋다" },
  { char: "吗", pinyin: "ma", tone: 0, meaning: "~인가요?" },
  { char: "我", pinyin: "wǒ", tone: 3, meaning: "나" },
  { char: "他", pinyin: "tā", tone: 1, meaning: "그" },
  { char: "不", pinyin: "bù", tone: 4, meaning: "아니다" },
  { char: "大", pinyin: "dà", tone: 4, meaning: "크다" },
  { char: "来", pinyin: "lái", tone: 2, meaning: "오다" },
  { char: "去", pinyin: "qù", tone: 4, meaning: "가다" },
  { char: "看", pinyin: "kàn", tone: 4, meaning: "보다" },
  { char: "说", pinyin: "shuō", tone: 1, meaning: "말하다" },
  { char: "人", pinyin: "rén", tone: 2, meaning: "사람" },
  { char: "学", pinyin: "xué", tone: 2, meaning: "배우다" },
  { char: "吃", pinyin: "chī", tone: 1, meaning: "먹다" },
  { char: "喝", pinyin: "hē", tone: 1, meaning: "마시다" },
  { char: "想", pinyin: "xiǎng", tone: 3, meaning: "생각하다" },
  { char: "爱", pinyin: "ài", tone: 4, meaning: "사랑하다" },
  { char: "买", pinyin: "mǎi", tone: 3, meaning: "사다" },
  { char: "走", pinyin: "zǒu", tone: 3, meaning: "걷다" },
  { char: "跑", pinyin: "pǎo", tone: 3, meaning: "달리다" },
  { char: "飞", pinyin: "fēi", tone: 1, meaning: "날다" },
  { char: "回", pinyin: "huí", tone: 2, meaning: "돌아가다" },
  { char: "给", pinyin: "gěi", tone: 3, meaning: "주다" },
  { char: "做", pinyin: "zuò", tone: 4, meaning: "하다/만들다" },
  { char: "听", pinyin: "tīng", tone: 1, meaning: "듣다" },
  { char: "读", pinyin: "dú", tone: 2, meaning: "읽다" },
  { char: "写", pinyin: "xiě", tone: 3, meaning: "쓰다" },
  { char: "住", pinyin: "zhù", tone: 4, meaning: "살다" },
  { char: "等", pinyin: "děng", tone: 3, meaning: "기다리다" },
  { char: "到", pinyin: "dào", tone: 4, meaning: "도착하다" },
];

// ===== APP STATE =====
const state = {
  currentLevel: 4,
  currentTab: 'dashboard',
  flashcardIndex: 0,
  flashcardDeck: [],
  isFlipped: false,
  knownWords: new Set(),
  unknownWords: new Set(),
  toneQuizIndex: 0,
  quizType: 'meaning',
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  stats: {
    totalWords: 0,
    streak: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    lastStudyDate: null
  }
};

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  loadStats();
  initNavigation();
  initLevelSelector();
  initFlashcards();
  initToneQuiz();
  initHanjaGrid();
  initPhrases();
  initQuiz();
  initQuickActions();
  updateDashboard();
});

// ===== LOAD/SAVE STATS =====
function loadStats() {
  const saved = localStorage.getItem('chineseLearningStats');
  if (saved) {
    const parsed = JSON.parse(saved);
    state.stats = { ...state.stats, ...parsed };
    state.knownWords = new Set(parsed.knownWordsList || []);

    // Check streak
    const today = new Date().toDateString();
    const lastDate = parsed.lastStudyDate;
    if (lastDate) {
      const diff = Math.floor((new Date(today) - new Date(lastDate)) / 86400000);
      if (diff > 1) state.stats.streak = 0;
    }
  }
}

function saveStats() {
  const toSave = {
    ...state.stats,
    knownWordsList: [...state.knownWords],
    lastStudyDate: new Date().toDateString()
  };
  localStorage.setItem('chineseLearningStats', JSON.stringify(toSave));
}

function updateDashboard() {
  document.getElementById('total-words').textContent = state.knownWords.size;
  document.getElementById('streak-days').textContent = state.stats.streak;
  const rate = state.stats.totalAnswers > 0
    ? Math.round((state.stats.correctAnswers / state.stats.totalAnswers) * 100)
    : 0;
  document.getElementById('accuracy-rate').textContent = rate + '%';
  document.getElementById('current-level').textContent = 'HSK ' + state.currentLevel;
}

// ===== NAVIGATION =====
function initNavigation() {
  // Tab navigation
  document.querySelectorAll('[data-tab]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(link.dataset.tab);
    });
  });

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}

function switchTab(tabName) {
  state.currentTab = tabName;

  // Update nav active state
  document.querySelectorAll('[data-tab]').forEach(link => {
    link.classList.toggle('active', link.dataset.tab === tabName);
  });

  // Show correct content
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.toggle('active', section.id === tabName);
  });

  // Close mobile menu
  document.querySelector('.nav-links')?.classList.remove('open');
}

// ===== QUICK ACTIONS =====
function initQuickActions() {
  document.querySelectorAll('.action-card').forEach(card => {
    card.addEventListener('click', () => {
      switchTab(card.dataset.action);
    });
  });
}

// ===== LEVEL SELECTOR =====
function initLevelSelector() {
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentLevel = parseInt(btn.dataset.level);
      updateDashboard();
      loadFlashcardDeck();
    });
  });
}

// ===== FLASHCARDS =====
function initFlashcards() {
  loadFlashcardDeck();

  const card = document.getElementById('flashcard');
  card.addEventListener('click', () => {
    state.isFlipped = !state.isFlipped;
    card.classList.toggle('flipped', state.isFlipped);
  });

  document.getElementById('fc-next').addEventListener('click', nextFlashcard);
  document.getElementById('fc-prev').addEventListener('click', prevFlashcard);
  document.getElementById('fc-correct').addEventListener('click', markCorrect);
  document.getElementById('fc-wrong').addEventListener('click', markWrong);
  document.getElementById('shuffle-btn').addEventListener('click', shuffleDeck);
  document.getElementById('reset-btn').addEventListener('click', () => {
    loadFlashcardDeck();
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (state.currentTab !== 'flashcards') return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      state.isFlipped = !state.isFlipped;
      card.classList.toggle('flipped', state.isFlipped);
    } else if (e.key === 'ArrowRight') {
      nextFlashcard();
    } else if (e.key === 'ArrowLeft') {
      prevFlashcard();
    }
  });
}

function loadFlashcardDeck() {
  state.flashcardDeck = [...(vocabulary[state.currentLevel] || vocabulary[1])];
  state.flashcardIndex = 0;
  state.isFlipped = false;
  document.getElementById('flashcard').classList.remove('flipped');
  renderFlashcard();
}

function renderFlashcard() {
  const word = state.flashcardDeck[state.flashcardIndex];
  if (!word) return;

  document.getElementById('fc-chinese').textContent = word.chinese;
  document.getElementById('fc-pinyin').textContent = word.pinyin;
  document.getElementById('fc-tone').textContent = '성조: ' + word.tone;
  document.getElementById('fc-korean').textContent = word.korean;
  document.getElementById('fc-hanja').textContent = '한자: ' + (word.hanja || word.chinese);
  document.getElementById('fc-example').textContent = word.example;
  document.getElementById('card-progress').textContent =
    `${state.flashcardIndex + 1} / ${state.flashcardDeck.length}`;

  // Reset flip
  state.isFlipped = false;
  document.getElementById('flashcard').classList.remove('flipped');
}

function nextFlashcard() {
  if (state.flashcardIndex < state.flashcardDeck.length - 1) {
    state.flashcardIndex++;
    renderFlashcard();
  }
}

function prevFlashcard() {
  if (state.flashcardIndex > 0) {
    state.flashcardIndex--;
    renderFlashcard();
  }
}

function markCorrect() {
  const word = state.flashcardDeck[state.flashcardIndex];
  if (word) {
    state.knownWords.add(word.chinese);
    state.stats.correctAnswers++;
    state.stats.totalAnswers++;
    state.stats.totalWords = state.knownWords.size;
    checkStreak();
    saveStats();
    updateDashboard();
  }
  nextFlashcard();
}

function markWrong() {
  const word = state.flashcardDeck[state.flashcardIndex];
  if (word) {
    state.unknownWords.add(word.chinese);
    state.stats.totalAnswers++;
    checkStreak();
    saveStats();
    updateDashboard();
  }
  nextFlashcard();
}

function shuffleDeck() {
  for (let i = state.flashcardDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.flashcardDeck[i], state.flashcardDeck[j]] = [state.flashcardDeck[j], state.flashcardDeck[i]];
  }
  state.flashcardIndex = 0;
  renderFlashcard();
}

function checkStreak() {
  const today = new Date().toDateString();
  if (state.stats.lastStudyDate !== today) {
    const lastDate = state.stats.lastStudyDate;
    if (lastDate) {
      const diff = Math.floor((new Date(today) - new Date(lastDate)) / 86400000);
      if (diff === 1) {
        state.stats.streak++;
      } else if (diff > 1) {
        state.stats.streak = 1;
      }
    } else {
      state.stats.streak = 1;
    }
    state.stats.lastStudyDate = today;
  }
}

// ===== TONE QUIZ =====
function initToneQuiz() {
  loadToneQuiz();

  document.querySelectorAll('.tone-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('correct') || btn.classList.contains('wrong')) return;
      checkToneAnswer(parseInt(btn.dataset.tone));
    });
  });

  document.getElementById('next-tone-quiz').addEventListener('click', loadToneQuiz);
}

function loadToneQuiz() {
  state.toneQuizIndex = Math.floor(Math.random() * toneQuizData.length);
  const item = toneQuizData[state.toneQuizIndex];

  document.getElementById('tone-quiz-char').textContent = item.char;
  document.getElementById('tone-quiz-pinyin-base').textContent = item.pinyin + ' (' + item.meaning + ')';
  document.getElementById('tone-feedback').textContent = '';

  document.querySelectorAll('.tone-option').forEach(btn => {
    btn.classList.remove('correct', 'wrong');
    btn.disabled = false;
  });
}

function checkToneAnswer(selectedTone) {
  const item = toneQuizData[state.toneQuizIndex];
  const feedback = document.getElementById('tone-feedback');

  document.querySelectorAll('.tone-option').forEach(btn => {
    const t = parseInt(btn.dataset.tone);
    if (t === item.tone) {
      btn.classList.add('correct');
    } else if (t === selectedTone && t !== item.tone) {
      btn.classList.add('wrong');
    }
    btn.disabled = true;
  });

  if (selectedTone === item.tone) {
    feedback.textContent = '정답! 🎉';
    feedback.style.color = 'var(--success)';
    state.stats.correctAnswers++;
  } else {
    const toneNames = { 1: '제1성', 2: '제2성', 3: '제3성', 4: '제4성', 0: '경성' };
    feedback.textContent = `틀렸어요. 정답은 ${toneNames[item.tone]}입니다.`;
    feedback.style.color = 'var(--error)';
  }
  state.stats.totalAnswers++;
  checkStreak();
  saveStats();
  updateDashboard();
}

// ===== HANJA GRID =====
function initHanjaGrid() {
  renderHanjaGrid(hanjaConnections);

  const searchInput = document.getElementById('hanja-search-input');
  const searchBtn = document.getElementById('hanja-search-btn');

  searchBtn.addEventListener('click', () => filterHanja(searchInput.value));
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') filterHanja(searchInput.value);
  });
  searchInput.addEventListener('input', () => {
    if (searchInput.value === '') renderHanjaGrid(hanjaConnections);
  });
}

function filterHanja(query) {
  if (!query.trim()) {
    renderHanjaGrid(hanjaConnections);
    return;
  }
  const q = query.toLowerCase().trim();
  const filtered = hanjaConnections.filter(item =>
    item.chinese.includes(q) ||
    item.korean.includes(q) ||
    item.pinyin.toLowerCase().includes(q) ||
    item.koreanHanja.includes(q) ||
    item.category.includes(q)
  );
  renderHanjaGrid(filtered);
}

function renderHanjaGrid(data) {
  const grid = document.getElementById('hanja-grid');
  grid.innerHTML = data.map(item => `
    <div class="hanja-card">
      <div class="hanja-header">
        <div class="hanja-char">${item.chinese}</div>
        <span class="hanja-badge">${item.category}</span>
      </div>
      <div class="hanja-row">
        <span class="hanja-label">병음</span>
        <span class="hanja-value">${item.pinyin}</span>
      </div>
      <div class="hanja-row">
        <span class="hanja-label">한국어 뜻</span>
        <span class="hanja-value">${item.korean}</span>
      </div>
      <div class="hanja-row">
        <span class="hanja-label">한국 한자</span>
        <span class="hanja-value">${item.koreanHanja}</span>
      </div>
      <div class="hanja-row">
        <span class="hanja-label">중국 간체</span>
        <span class="hanja-value">${item.chinese}</span>
      </div>
    </div>
  `).join('');
}

// ===== PHRASES =====
function initPhrases() {
  renderPhrases('greetings');

  document.querySelectorAll('.phrase-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.phrase-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPhrases(btn.dataset.category);
    });
  });
}

function renderPhrases(category) {
  const list = document.getElementById('phrase-list');
  const data = phrases[category] || [];

  list.innerHTML = data.map(item => `
    <div class="phrase-item">
      <div class="phrase-chinese">${item.chinese}</div>
      <div class="phrase-korean">${item.korean}</div>
      <div class="phrase-pinyin">${item.pinyin}</div>
      ${item.note ? `<div class="phrase-note">${item.note}</div>` : ''}
    </div>
  `).join('');
}

// ===== QUIZ =====
function initQuiz() {
  // Quiz type selection
  document.querySelectorAll('.quiz-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quiz-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.quizType = btn.dataset.type;
    });
  });

  document.getElementById('start-quiz').addEventListener('click', startQuiz);
  document.getElementById('retry-quiz').addEventListener('click', () => {
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-setup').style.display = 'block';
  });
  document.getElementById('next-question').addEventListener('click', nextQuizQuestion);
}

function startQuiz() {
  const allWords = vocabulary[state.currentLevel] || vocabulary[1];
  state.quizQuestions = generateQuizQuestions(allWords, state.quizType, 10);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;

  document.getElementById('quiz-setup').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-area').style.display = 'block';

  renderQuizQuestion();
}

function generateQuizQuestions(words, type, count) {
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, words.length));

  return selected.map(word => {
    let question, correctAnswer, options;

    switch (type) {
      case 'meaning':
        question = word.chinese;
        correctAnswer = word.korean;
        options = getRandomOptions(words, 'korean', word.korean, 3);
        break;
      case 'pinyin':
        question = word.chinese;
        correctAnswer = word.pinyin;
        options = getRandomOptions(words, 'pinyin', word.pinyin, 3);
        break;
      case 'character':
        question = word.korean;
        correctAnswer = word.chinese;
        options = getRandomOptions(words, 'chinese', word.chinese, 3);
        break;
      case 'tone':
        question = word.chinese;
        correctAnswer = word.tone;
        options = getRandomToneOptions(word.tone);
        break;
      default:
        question = word.chinese;
        correctAnswer = word.korean;
        options = getRandomOptions(words, 'korean', word.korean, 3);
    }

    options.push(correctAnswer);
    options = options.sort(() => Math.random() - 0.5);

    return {
      question,
      sub: type === 'pinyin' ? '' : (type === 'character' ? '' : word.pinyin),
      correctAnswer,
      options,
      word
    };
  });
}

function getRandomOptions(words, field, correct, count) {
  const others = words.filter(w => w[field] !== correct);
  const shuffled = others.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(w => w[field]);
}

function getRandomToneOptions(correct) {
  const allTones = ['1', '2', '3', '4', '1,1', '1,2', '1,3', '1,4', '2,1', '2,2', '2,3', '2,4', '3,1', '3,2', '3,3', '3,4', '4,1', '4,2', '4,3', '4,4'];
  const filtered = allTones.filter(t => t !== correct && t.split(',').length === correct.split(',').length);
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

function renderQuizQuestion() {
  const q = state.quizQuestions[state.quizIndex];
  if (!q) return;

  document.getElementById('quiz-progress').textContent =
    `${state.quizIndex + 1} / ${state.quizQuestions.length}`;
  document.getElementById('quiz-score').textContent = state.quizScore + '점';
  document.getElementById('quiz-prompt').textContent = q.question;
  document.getElementById('quiz-sub').textContent = q.sub || '';
  document.getElementById('quiz-feedback').textContent = '';
  document.getElementById('next-question').style.display = 'none';
  state.quizAnswered = false;

  const optionsEl = document.getElementById('quiz-options');
  optionsEl.innerHTML = q.options.map(opt => `
    <button class="quiz-option" data-answer="${opt}">${opt}</button>
  `).join('');

  optionsEl.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => checkQuizAnswer(btn));
  });
}

function checkQuizAnswer(btn) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const q = state.quizQuestions[state.quizIndex];
  const selected = btn.dataset.answer;
  const feedback = document.getElementById('quiz-feedback');

  document.querySelectorAll('.quiz-option').forEach(b => {
    if (b.dataset.answer === q.correctAnswer) {
      b.classList.add('correct');
    } else if (b === btn && selected !== q.correctAnswer) {
      b.classList.add('wrong');
    }
  });

  if (selected === q.correctAnswer) {
    state.quizScore++;
    feedback.textContent = '정답입니다! 🎉';
    feedback.style.color = 'var(--success)';
    state.stats.correctAnswers++;
  } else {
    feedback.textContent = `틀렸어요. 정답: ${q.correctAnswer}`;
    feedback.style.color = 'var(--error)';
  }

  state.stats.totalAnswers++;
  checkStreak();
  saveStats();
  updateDashboard();

  document.getElementById('quiz-score').textContent = state.quizScore + '점';

  if (state.quizIndex < state.quizQuestions.length - 1) {
    document.getElementById('next-question').style.display = 'block';
  } else {
    setTimeout(showQuizResult, 1200);
  }
}

function nextQuizQuestion() {
  state.quizIndex++;
  renderQuizQuestion();
}

function showQuizResult() {
  document.getElementById('quiz-area').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';

  const total = state.quizQuestions.length;
  const score = state.quizScore;
  const percent = Math.round((score / total) * 100);

  document.getElementById('result-score').textContent = `${score} / ${total}`;
  document.getElementById('result-percent').textContent = percent + '%';

  let message;
  if (percent >= 90) message = '완벽해요! 다음 레벨에 도전해보세요! 🌟';
  else if (percent >= 70) message = '잘 했어요! 조금만 더 복습하면 완벽해질 거예요! 💪';
  else if (percent >= 50) message = '괜찮아요! 플래시카드로 더 연습해보세요! 📚';
  else message = '더 열심히 해봐요! 반복이 최고의 학습법이에요! 🔄';

  document.getElementById('result-message').textContent = message;
}
