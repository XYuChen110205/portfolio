// ========== Project detail translations ==========
// zh (Simplified Chinese) is the source, stored in projects.js and used as fallback.
// Only translatable prose is included here: name / overview / background / features / innovation.
// techStack, startCmd, path and Mermaid diagrams stay language-neutral.

const projLocale = {
  en: {
    1: {
      name: 'Pinglu Canal · Digital Narrative of a Century Project',
      overview: 'The Pinglu Canal digital narrative website is a comprehensive digital exhibition platform integrating multimedia display, interactive experience and information dissemination. Adopting the concept of "Digital Storytelling", it artistically presents the canal\'s history, construction journey, engineering features and future vision through web technologies, creating an immersive knowledge experience.',
      background: 'The Pinglu Canal is the first river-to-sea canal project since the founding of New China, about 134.2 km long with a total investment of roughly 72.7 billion RMB. To help the public understand the significance of this century project, it uses digital storytelling to turn dry engineering data into vivid visuals. The site needs no backend and is pure frontend, making it easy to deploy and share.',
      features: [
        'Immersive scroll narrative: scrolling triggers animation sequences that tell the canal\'s story',
        'Three.js 3D particle tunnel background: a dynamic particle system simulates water flow for deeper immersion',
        'GSAP ScrollTrigger driven: high-performance scroll animations with precise entrance timing for each element',
        'Multi-page structure: Home (overview), Details (engineering data), Canal Memory (timeline), Waterside Messages (interaction)',
        'Responsive design: adapts to PC, tablet and mobile screens',
        'Chinese typography optimization: Noto Serif SC serif font for more elegant Chinese layout',
        'Font Awesome 6 icon system: a unified visual language',
        'No backend dependency: pure static HTML, deployable to any web server or GitHub Pages'
      ],
      innovation: [
        'Digital storytelling paradigm: turning a traditional exhibition into an immersive web experience at low cost',
        '3D particle water simulation: low-overhead water particle effects in the browser via Three.js',
        'Scroll-driven animation choreography: precisely binding scroll to animation frames with GSAP ScrollTrigger',
        'Engineering of Chinese web typography: fine tuning of weight, line height and letter spacing'
      ]
    },
    2: {
      name: 'License Plate Recognition v8.1 · Multi-Method Comparison',
      overview: 'This project builds a complete teaching-and-practice license plate recognition system, covering the full pipeline from image preprocessing and character segmentation to character recognition. It innovatively integrates three methods — CNN deep learning, SVM machine learning and EasyOCR — with an intuitive comparative evaluation to understand the pros and cons of each approach. A Tkinter GUI follows a "usable with zero prior knowledge" design principle.',
      background: 'License Plate Recognition (LPR) is a core technology of intelligent transportation systems. From an educational and practical angle, this project designs a complete LPR system: users can operate the whole flow of data synthesis, image processing, model training, prediction and performance evaluation through a GUI. It supports both blue and yellow plates, with color-feature recognition accuracy above 90%.',
      features: [
        'Three-method comparison: CNN, SVM and EasyOCR with intuitive accuracy comparison',
        'Auto-synthesized training data: a built-in character generator trains without external datasets',
        'Real plate annotation tool: a built-in manual annotator collects and labels real plate characters',
        'Fully visualized pipeline: each step shows results in real time (grayscale → binarization → localization → segmentation → recognition)',
        'Performance report: auto-generated report with accuracy and confusion matrix',
        'Template matching: an extra SIFT feature-matching tool (txpp.py) locates a small image within a large one',
        'GUI-guided workflow: button-based operation lowers the barrier to entry',
        'Detailed bilingual comments: thorough code comments, ideal for learning and extension'
      ],
      innovation: [
        'Three-method comparison framework: integrating three completely different technical routes (CNN, SVM, EasyOCR) with quantitative accuracy comparison',
        'Zero external data dependency: a built-in synthetic data generator completes full training without any external dataset',
        'Full GUI encapsulation: wrapping complex data processing, training and evaluation into button-based operations',
        'Color-feature localization: HSV analysis for blue/yellow plates, more robust than edge detection in certain scenes'
      ]
    },
    3: {
      name: 'Little Monster Helper · Multi-Agent Desktop Assistant',
      overview: 'Little Monster Helper is a multi-agent AI collaboration system for Windows desktops. Centered on large language models, it orchestrates multiple specialized agents via LangGraph to achieve end-to-end automation from voice command to desktop action. Just say "Hey Jarvis" to wake it, then control the computer in natural language to handle files, WeChat messages, system settings and more.',
      background: 'As LLM capabilities grow, AI is no longer limited to text chat but can truly operate the digital world. This project explores applying LLM agents at the desktop OS level: translating natural-language commands into real system actions (mouse clicks, keyboard input, window switching) to achieve genuine "AI operating the computer".',
      features: [
        'Voice wake-up: "Hey Jarvis" keyword detection for hands-free interaction',
        'Multi-agent collaboration: LangGraph orchestrates an intent-routing agent and a task-execution agent',
        'Intent routing: semantic similarity via Sentence-Transformers routes commands to the right agent',
        'PC automation: mouse move/click, keyboard input, window switch/minimize/close',
        'WeChat desktop automation: auto send/read WeChat messages, group and private chats',
        'System control: volume, screen brightness, power management',
        'Browser automation: open pages, search, extract information',
        'Web search: integrated DuckDuckGo search engine',
        'Sentiment analysis: detects user mood and adjusts response style',
        'Knowledge base & long-term memory: vector-based semantic retrieval and persistent chat history',
        'Dual LLM backends: local Ollama (privacy-first) and cloud Groq (performance-first)'
      ],
      innovation: [
        'Multi-agent architecture: breaking complex desktop tasks into subtasks executed in parallel/series by different agents, greatly improving success rate',
        'Desktop-level agent in practice: unlike a simple chatbot, it gives the LLM real control over the operating system',
        'Hot-swappable dual models: seamless switching between local Ollama and cloud Groq, balancing privacy and performance',
        'Semantic intent routing: vector-similarity intent classification via Sentence-Transformers, more robust than keyword matching',
        'Cloudflare Worker proxy: solves domestic network access to the Groq API'
      ]
    },
    4: {
      name: 'AI Phone Simulator · LookHisPhone',
      overview: 'A pure-frontend AI persona simulator with an iOS-style interface, embedding a preset AI-partner character into six common apps (WeChat, Music, Notes, Photos, Food delivery, Browser). All interactions revolve around the AI persona — social feeds, chat logs, diary entries, search history — building a complete virtual character world.',
      background: 'AI role-play (Character.AI, etc.) has grown fast, but most products stay at text chat. This project embeds an AI character into richer digital-life scenarios, using a realistic phone UI and diverse app interactions to enhance immersion and realism.',
      features: [
        'iOS-style interface: faithfully recreates iPhone home layout, status bar and icon style',
        'WeChat simulation: scripted chats plus two-way likes/comments on the social feed',
        'NetEase Cloud Music: multi-song playback and a couples "listen together" mode',
        'Two-section Notes: "bright side" and "dark side" diary sections revealing the character\'s multidimensional personality',
        'Photo browsing: a preset photo collection',
        'Meituan food delivery: a simulated ordering flow',
        'Browser: preset search history hinting at the character\'s interests',
        'Custom background: changeable phone wallpaper'
      ],
      innovation: [
        'Multi-app scene fusion: embedding the AI character across many everyday apps rather than a single chat screen, boosting realism',
        'Implicit narrative technique: building the character\'s "digital footprint" through indirect clues like feeds, search records and orders',
        'Pure frontend, zero dependency: runs from a single HTML file with no framework or backend',
        'UI detail fidelity: careful recreation of iOS interaction details (elastic scroll, tap feedback, transitions)'
      ]
    },
    5: {
      name: 'EchoType · Roguelike English Learning',
      overview: 'EchoType is an innovative English-learning tool whose core idea is to deeply fuse the Roguelike game loop (challenge → growth → challenge again) with the learning process. Users earn "experience" by learning words, raise "skill level" through article transcription, then challenge randomly generated learning levels in a dungeon system, forming a positive loop of "learning input → game output → feedback".',
      background: 'One of the biggest pain points in English learning is the lack of instant feedback and a sense of achievement. Traditional vocabulary apps are dull and hard to sustain motivation. EchoType borrows the randomness, growth and challenge of Roguelike games to turn tedious learning into a fun experience.',
      features: [
        'Built-in multi-level word books: CET-4/6, postgraduate, TOEFL, IELTS, GRE and other mainstream exam vocabularies',
        'Article transcription: upload PDF/Word, transcribe the original text word by word with real-time correctness feedback',
        'Dictation training: audio playback plus typing to strengthen listening and spelling',
        'Roguelike dungeon: randomly generated rooms (challenge levels) yield random rewards (new word books / boost items)',
        'Growth system: visualized XP, levels and breakthrough points showing learning progress',
        'Daily news dungeon: daily updated news article challenges keep learning fresh',
        'PWA offline support: Service Worker caching lets you learn without a network',
        'Typing speed tracking: records WPM trends'
      ],
      innovation: [
        'Roguelike × education: the first systematic application of Roguelike mechanics to language learning',
        'Learning-game loop: a self-driven closed loop of "learning input → game output → positive feedback"',
        'Zero-server storage: all user data stays in the browser\'s IndexedDB, protecting privacy',
        'Typing as learning: combining typing-speed training with vocabulary memory for double gains'
      ]
    },
    6: {
      name: 'Film Genome System · Cinematic Genome',
      overview: 'The Film Genome System proposes a new paradigm of "Retrieval-Augmented Creation" (RAC). It automatically analyzes large volumes of film clips, extracting "creative genes" across four dimensions — visual, audio, narrative and transition — and stores them in a Qdrant vector database. During generation, it retrieves the most relevant genes to guide the LLM in producing scripts and storyboards, finally composing a 30–60s AI short film via FFmpeg.',
      background: 'Traditional AI video generation (Sora, Runway) relies on end-to-end models and lacks explicit modeling of filmmaking principles. Starting from real filmmaking workflows, this project digitizes the professional "reference clip → analysis → creation" process, offering a new methodology for AI video — understand existing works first, then create based on that understanding.',
      features: [
        'Four-dimensional gene extraction: visual DNA (scene/color/composition), audio DNA (dialogue/SFX/score), narrative DNA (structure/rhythm/emotion), transition DNA (type/duration/effect)',
        'Qdrant vector retrieval: semantic-similarity gene retrieval supporting queries like "find similar shots" or "find similar transitions"',
        'Sound Score five-layer design: Dialogue / Performance / Foley / Ambience / Score, each controlled independently',
        'Model-agnostic scheduling: analysis and generation layers decoupled, so LLM and TTS models can be swapped freely',
        'Docker deployment: docker-compose starts API + PostgreSQL + Qdrant in one command',
        'CLI tool: script film-analysis operations via the fgs command',
        'FastAPI REST interface: standardized API for frontend and third-party integration'
      ],
      innovation: [
        'Retrieval-Augmented Creation (RAC): first application of RAG thinking to filmmaking, using existing works to guide new creation',
        'Four-dimensional gene model: systematically describing clips across visual/audio/narrative/transition, beyond single-tag classification',
        'Five-layer sound design: dividing film sound into 5 independently controllable layers for fine control of AI-generated audio',
        'Model-agnostic architecture: decoupled analysis and execution layers can be upgraded independently, improving maintainability and extensibility'
      ]
    },
    7: {
      name: 'Doit · Multi-Role Task Management System',
      overview: 'Doit is a full-stack web app for multi-scenario personal task management. Unlike traditional to-do apps, it introduces "role modes": Student mode has timetable management, Shop-Manager mode has store and inventory management, Makeup-Artist mode has appointment scheduling, and so on. Switching roles adapts the same system to entirely different scenarios. It also includes a Pomodoro timer, calendar views (month/week/day) and analytics dashboards.',
      background: 'Task tools on the market are often one-size-fits-all and cannot meet the differentiated needs of different professions and identities. Doit solves this with "role modes" — each role presets different task categories, layouts and modules, so switching roles switches the whole workflow.',
      features: [
        'Multi-role modes: Student (timetable+homework), Shop Manager (store/staff/inventory), Makeup Artist (appointments), Programmer (snippet management), Study (focus timer)',
        'Today\'s to-dos: CRUD, drag-and-drop ordering, priority tags, due reminders',
        'Inbox: quickly capture ideas and turn them into formal tasks in one click',
        'Calendar view: month/week/day views showing task time distribution',
        'Pomodoro: the classic 25-min focus + 5-min break timer',
        'Analytics: completion trend line charts, category pie charts, time heatmaps',
        'Cloud sync: Supabase-based sync for seamless multi-device switching',
        'PWA offline: Service Worker caching works without a network'
      ],
      innovation: [
        'Role-mode design: one system adapts to entirely different audiences and workflows via role switching',
        'Unified TypeScript full-stack: hybrid type safety across Vue3 TS frontend and Python-typed backend',
        'Progressive data sync: dual-layer local IndexedDB + remote Supabase, prioritizing local response with background async sync'
      ]
    },
    8: {
      name: 'BGF · Intelligent PV Panel Defect Detection Platform',
      overview: 'BGF is an end-to-end intelligent inspection SaaS platform for large solar power plants. Drones capture infrared thermal and visible-light images of PV panels, and a YOLO deep-learning model automatically detects 10 defect types such as hot spots, cracks and foreign-object shading. Results are linked to specific panel locations on a Cesium 3D GIS map, generating defect work orders tracked through a closed-loop system. It also integrates iSolarCloud generation data for correlation analysis between power efficiency and equipment health.',
      background: 'Large solar plants often cover thousands of acres with hundreds of thousands of panels. Manual inspection is slow and can hardly find internal defects. BGF adopts a "drone inspection + AI detection + GIS localization + work-order loop" approach, boosting O&M efficiency dozens of times over. The project reaches 92% test coverage with CI/CD via GitHub Actions.',
      features: [
        'Multi-version YOLO: supports YOLOv8/v11/v12 with flexible switching',
        '10 defect types: hot spots, cracks, foreign-object shading, broken gridlines, diode faults, junction-box anomalies, glass breakage, stains, EVA discoloration and more',
        'Infrared + visible dual-light fusion: infrared detects thermal anomalies, visible light confirms surface defects, dual confirmation reduces false positives',
        'Cesium 3D GIS: mark each panel\'s location and detection result on a 3D map',
        'Drone route management: plan inspection routes and record flight tracks',
        'Defect work-order loop: auto-detect → manual confirm → dispatch repair → feedback → acceptance close',
        'iSolarCloud data ingestion: connect to the iSolarCloud platform for real-time generation data',
        'AI-assisted analysis reports: auto-generated detection reports via the Qwen-VL multimodal model',
        'Big-screen visualization: real-time plant overview, defect stats and generation data',
        '92% test coverage: pytest + Vitest dual testing with GitHub Actions CI/CD'
      ],
      innovation: [
        'Dual-light fusion detection: spatially registering and correlating infrared thermal anomalies with visible-light surface defects, greatly reducing false positives',
        'GIS + AI fusion: precisely mapping AI results to 3D GIS coordinates for a spatial "detect → locate → dispatch" loop',
        'Multi-YOLO support: one platform supports YOLOv8/v11/v12, choosing accuracy/speed as needed',
        'Time-series analysis: storing generation data in TimescaleDB for temporal correlation between defects and power efficiency'
      ]
    },
    9: {
      name: 'LawLink · Legal Service Platform',
      overview: 'LawLink is a legal-service platform built with the Streamlit framework, developed for the Complete.dev hackathon. It integrates five dedicated AI agents handling initial case intake, intelligent lawyer matching, material-preparation guidance, case-brief generation and data analysis, forming a complete AI-assisted legal-service loop from consultation to case handling.',
      background: 'The legal industry has long suffered from "hard to find a lawyer, expensive consultations, complex processes". Through AI agent collaboration, LawLink lowers the barrier to legal services: users describe their issue in natural language, and the AI organizes the case, matches suitable lawyers, guides material preparation and generates a professional case brief.',
      features: [
        'Five-agent collaboration: Intake → Matching → Preparation → Brief → Insights',
        'Three separated roles: client (consultation/matching), lawyer (dashboard/appointments), admin (overview/AI management)',
        'Smart lawyer matching: AI analyzes case type and complexity to recommend the best lawyer',
        'Auto case-brief generation: AI organizes case facts and evidence into a structured brief',
        'Tiered commission: 10%–20% stepped commission by lawyer caseload to encourage taking cases',
        'Bilingual: interface and AI answers support both Chinese and English',
        'Escrow payment system: the platform holds legal fees, released after case completion'
      ],
      innovation: [
        'Multi-agent pipeline: five agents form a legal-service assembly line, each specialized yet collaborative',
        'Streamlit rapid prototyping: a complete multi-role SaaS platform built within hackathon time limits',
        'AI-driven lawyer matching: case-to-person matching via semantic analysis rather than traditional field classification'
      ]
    },
    10: {
      name: 'Concrete Guardian · Concrete Crack Detection',
      overview: 'An AI system for civil-engineering infrastructure inspection, using an improved YOLOv8 model to automatically detect, segment and quantify cracks on concrete surfaces. It supports both detect and segment modes, measuring crack length, analyzing color features and computing damage-area ratios, and auto-generating PDF/Word reports with charts and conclusions. It is a "Challenge Cup" competition entry with a complete business plan.',
      features: [
        'Improved YOLOv8: an object-detection model optimized for crack scenes',
        'Crack length measurement: automatic pixel-to-real-size conversion',
        'Color analysis: HSV-space analysis of crack-region color features',
        'Auto PDF/Word report generation',
        'Real-time camera detection mode',
        'Comparative data analysis',
        'Complete Challenge Cup submission: business plan + pitch deck + novelty search report'
      ],
      innovation: [
        'Dual detect + segment modes',
        'Automatic crack-length conversion',
        'Full automation of the detect → assess → report pipeline'
      ]
    },
    11: {
      name: 'Avocado Ripeness Detection · HSI',
      overview: 'A deep-learning research project using hyperspectral imaging for non-destructive avocado ripeness detection. It extracts spectral features from hyperspectral images and feeds them into a CNN with an SE (Squeeze-and-Excitation) attention mechanism for three-class classification (unripe/ripe/overripe). Multi-view fusion raises single-sample accuracy of 95% to 98% at the fruit level. The project includes a complete research design: ablation studies, multi-seed validation, Grad-CAM heatmaps and EMA model optimization.',
      features: [
        'Hyperspectral image spectral feature extraction',
        'CNN with SE attention mechanism',
        '3-class classification (unripe/ripe/overripe)',
        '95% sample-level, 98% fruit-level accuracy',
        'Grad-CAM heatmaps',
        'Multi-view fusion',
        'EMA optimization',
        'Warmup + CosineAnnealing',
        'Ablation studies + multi-seed validation'
      ],
      innovation: [
        'Multi-view fusion improves fruit-level accuracy',
        'Validating SE attention in hyperspectral scenarios',
        'A complete research methodology: ablation + multi-seed + Grad-CAM'
      ]
    },
    12: {
      name: 'LabMate · Experiment Companion',
      overview: 'An experiment data-management platform for chemistry students and researchers. It covers the full lifecycle from experiment creation, data entry and analysis to report generation. It supports both manual entry and OCR photo recognition, with built-in statistical analysis (outlier detection, curve fitting) and six common chemistry calculators (molar mass, solution preparation, pH calculation, titration analysis, etc.). It offers six themes and a dark mode.',
      features: [
        'Full experiment lifecycle management',
        'OCR photo-based data entry',
        'Statistical analysis: outlier detection + curve fitting',
        'HTML/JSON report export',
        'Six chemistry calculators',
        'JWT authentication',
        'Six themes + dark mode'
      ]
    },
    13: {
      name: 'Qwen Agent · Local AI Assistant',
      overview: 'A fully local AI chat agent running the Tongyi Qianwen Qwen2.5:7b model via Ollama, with no cloud API dependency (except the web-search tool). The agent supports three tool calls: a math calculator, time/date query and DuckDuckGo web search. Flask provides a lightweight web chat UI, and agent_core.py encapsulates the Ollama API interaction and tool-calling logic.',
      features: [
        'Local LLM (Ollama + Qwen2.5:7b)',
        'Three tool calls',
        'Multi-turn conversation memory',
        'Flask web chat interface',
        'Fully offline except for search'
      ],
      innovation: [
        'Local agent tool calling',
        'No cloud API — private and secure'
      ]
    },
    14: {
      name: 'Coze · Party-Affairs Intelligent Q&A Platform',
      overview: 'A party-affairs knowledge Q&A system built on Coze (ByteDance\'s AI dialogue engine). It uses Server-Sent Events (SSE) for typewriter-style streaming output to improve the experience. It includes built-in knowledge-category navigation (basic theory, organizational building, integrity building, member rights and duties, etc.) and supports multi-turn memory and conversation history management.',
      features: [
        'Coze AI intelligent Q&A',
        'SSE streaming responses',
        'Multi-turn dialogue',
        'Party-affairs knowledge category navigation',
        'Create / switch conversations'
      ]
    },
    15: {
      name: 'Embedded AI · Gesture Recognition',
      overview: 'A hands-on AI application development project for embedded ARM platforms. Using Google\'s MediaPipe framework on an RK3568 board, it achieves real-time gesture keypoint detection, recognizing the 3D coordinates of 21 keypoints on a single hand. The project includes a complete environment setup guide (handling MediaPipe version-compatibility issues) and a collection of OpenCV basics.',
      features: [
        'MediaPipe real-time gesture detection',
        '21 keypoint coordinate acquisition',
        'RK3568 embedded deployment',
        'Complete environment setup tutorial',
        'OpenCV basics case collection'
      ]
    },
    16: {
      name: 'Hanabi Study Room · PWA Knowledge Base',
      overview: 'A Progressive Web App (PWA) that packages study notes into a "magic book" concept. A bookshelf navigation displays multi-topic tutorials (data structures, NLP, Django, Python, SQL, HTML, etc.), with a PDF reader and a personal works showcase. Service Worker offline caching allows access without a network.',
      features: [
        'Multi-topic "magic book" tutorials',
        'Bookshelf-style UI navigation',
        'PDF reader',
        'PWA offline access',
        'Automatic Service Worker caching',
        'Personal works showcase'
      ]
    },
    17: {
      name: 'Workspace · GrapesJS Editor',
      overview: 'A full-stack Workspace platform integrating a Django backend with the GrapesJS frontend visual editor. Users build web content by drag-and-drop (headings/text/code blocks/images/dividers, etc.), and the system converts the editor\'s JSON output into renderable HTML. It also manages projects, image assets, text assets and reflection notes.',
      features: [
        'GrapesJS drag-and-drop web editor',
        'Project management CRUD',
        'Image/text/note asset management',
        'User authentication system',
        'Custom blocks_to_html rendering engine',
        'Chinese interface (zh-hans)'
      ]
    },
    18: {
      name: 'Showcase · Project Management Platform',
      overview: 'A lightweight full-stack project-showcase management platform. The backend uses Express.js to provide REST APIs (CRUD for projects/images/texts/notes); the frontend is a single-file SPA (1198 lines of inline CSS+JS) with both an admin panel and public browsing modes. File uploads are handled by Multer and data is stored in JSON files with no database. It supports preview hosting of HTML templates.',
      features: [
        'Project CRUD + thumbnail upload',
        'Image/text/note asset management',
        'Admin token authentication',
        'iframe preview hosting',
        'Lightbox image viewing',
        'Responsive timeline / grid views'
      ]
    },
    19: {
      name: 'Salary Cat · Terminal Desktop Pet',
      overview: 'A lightweight terminal desktop pet that renders GIF animations in real time as ASCII/half-block characters in the command line. It loops cat.gif for a cat animation and can optionally play music.mp3 as background music. It supports many parameters (--fps, --scale, --margin-rows, --smooth, --half-block) and can be packaged into a standalone exe via PyInstaller. It ships with a code-typewriter tool for recording coding tutorial videos.',
      features: [
        'Terminal GIF animation rendering',
        'Looping cat animation',
        'Background music playback',
        'Multiple adjustable parameters',
        'Cross-platform (Win/Mac/Linux)',
        'PyInstaller exe packaging',
        'Code-typewriter recording tool'
      ]
    },
    20: {
      name: 'Party-Affairs Article Crawler System',
      overview: 'A targeted web crawler project dedicated to collecting party regulations and other normative documents from the CPC News website. It covers all levels — charter, guidelines, regulations, rules, provisions, measures and detailed rules. It went through several iterations: from initial XPath debugging, to semi-automated crawling, to final batch automation with PDF generation.',
      features: [
        'Targeted website crawling',
        'Precise XPath targeting',
        'HTML to PDF conversion',
        'Batch automation',
        'Crawl report generation',
        'Multi-version iteration'
      ]
    },
    21: {
      name: 'Yueqian OpenCV Learning Collection',
      overview: 'A collection of OpenCV exercises from Yueqian embedded training. It includes video reading (local files/camera), face detection (Haar Cascade), eye detection, license plate detection and recognition, and OCR text recognition (pytesseract) — computer-vision basics laying the groundwork for more advanced machine-vision projects.',
      features: [
        'Local video / camera reading',
        'Haar Cascade face/eye detection',
        'License plate detection and recognition',
        'OCR text recognition',
        'Basic image processing'
      ]
    }
  }
  ,
  'zh-TW': {
    1: {
      name: '平陸運河 · 世紀工程數位敘事',
      overview: '平陸運河數位敘事網站是一個集多媒體展示、互動體驗、資訊傳播於一體的綜合性數位化展覽平台。專案採用「數位敘事」（Digital Storytelling）理念，透過 Web 技術將平陸運河的歷史背景、建設歷程、工程特點與未來願景進行藝術化呈現，建構沉浸式的知識傳播體驗。',
      background: '平陸運河是新中國成立以來首條通江達海的運河工程，全長約 134.2 公里，總投資約 727 億元。為了讓大眾更好地理解這一世紀工程的意義，本專案採用數位敘事技術，將枯燥的工程資料轉化為生動的視覺體驗。網站不依賴後端伺服器，純前端實現，便於部署與傳播。',
      features: [
        '沉浸式捲動敘事：使用者捲動頁面時觸發動畫序列，講述運河故事',
        'Three.js 3D 粒子隧道背景：動態粒子系統模擬水流效果，增強視覺沉浸感',
        'GSAP ScrollTrigger 驅動：高效能捲動動畫，精確控制每個元素的入場時機',
        '多頁面結構：首頁（總覽）、詳細介紹（工程參數）、運河記憶（時間線）、水畔留言（互動）',
        '響應式設計：自適應 PC、平板、手機三種裝置尺寸',
        '中文字體最佳化：使用 Noto Serif SC 襯線字體，提升中文排版美感',
        'Font Awesome 6 圖示系統：統一視覺語言',
        '無後端依賴：純靜態 HTML，可直接部署到任意 Web 伺服器或 GitHub Pages'
      ],
      innovation: [
        '數位敘事範式：將傳統展覽轉化為 Web 端沉浸式體驗，降低傳播成本',
        '3D 粒子水流模擬：使用 Three.js 在瀏覽器端實現低開銷的水流粒子效果',
        '捲動驅動動畫編排：透過 GSAP ScrollTrigger 將頁面捲動與動畫影格精確繫結',
        '中文 Web 排版的工程化實踐：字重、行距、字距的精細調校'
      ]
    },
    2: {
      name: '車牌辨識系統 v8.1 · 多方法對比',
      overview: '本專案建構了一個完整的車牌辨識教學與實踐系統，從影像前處理、字元分割到字元辨識，涵蓋車牌辨識全流程。系統創新性地整合了 CNN 深度學習、SVM 機器學習與 EasyOCR 三種辨識方法，並提供直觀的對比評估，便於理解不同技術路線的優劣。採用 Tkinter 建構 GUI 操作介面，遵循「零基礎可操作」的設計原則。',
      background: '車牌辨識（License Plate Recognition, LPR）是智慧交通系統的核心技術之一。本專案從教育與實踐角度出發，設計了一個完整的 LPR 系統：使用者可透過 GUI 介面操作資料合成、影像處理、模型訓練、辨識預測與效能評估的完整流程。系統支援藍牌和黃牌兩種常見車牌類型，顏色特徵辨識準確率達 90% 以上。',
      features: [
        '三種辨識方法對比：CNN 深度學習、SVM 機器學習、EasyOCR，可直觀對比準確率',
        '自動合成訓練資料：程式內建字元生成器，無需外部資料集即可訓練',
        '真實車牌標註工具：內建手動標註介面，支援蒐集與標註真實車牌字元',
        '完整視覺化流程：每一步處理結果都即時顯示（灰階化→二值化→定位→分割→辨識）',
        '效能評估報告：自動生成包含準確率、混淆矩陣的評估報告',
        '影像範本比對：額外提供 SIFT 特徵比對工具（txpp.py），支援大圖中小圖定位',
        'GUI 全流程引導：按鈕式操作流程，降低使用門檻',
        '中英文詳細註釋：程式碼註釋詳盡，適合學習與二次開發'
      ],
      innovation: [
        '三方法對比框架：在同一系統中整合 CNN、SVM、EasyOCR 三種完全不同技術路線的辨識方法，提供量化的準確率對比',
        '零外部資料依賴：內建合成資料生成器，可在無任何外部資料集的情況下完成完整訓練流程',
        'GUI 全流程封裝：將複雜的資料處理、模型訓練、效能評估流程封裝為按鈕式操作',
        '顏色特徵辨識策略：針對藍牌和黃牌的顏色空間分析進行車牌定位，相比傳統邊緣偵測在特定場景下更穩健'
      ]
    },
    3: {
      name: '小怪獸幫幫 · 多智慧體桌面助手',
      overview: '小怪獸幫幫是一個面向 Windows 桌面的 AI 多智慧體協作系統。它以大型語言模型為核心，透過 LangGraph 編排多個專業 Agent 協同工作，實現從語音指令到桌面操作的端到端自動化。使用者只需說「Hey Jarvis」喚醒助手，即可透過自然語言控制電腦完成檔案處理、微信訊息、系統設定等複雜操作。',
      background: '隨著大型語言模型能力的增強，AI 不再侷限於文字對話，而是可以真正操控數位世界。本專案探索了 LLM Agent 在桌面作業系統層面的應用可能性：將自然語言指令轉化為實際的系統操作（滑鼠點擊、鍵盤輸入、視窗切換等），實現真正意義上的「AI 操控電腦」。',
      features: [
        '語音喚醒：「Hey Jarvis」關鍵詞偵測，免持互動',
        '多智慧體協作：LangGraph 編排意圖路由 Agent 與任務執行 Agent 的協同工作',
        '意圖路由：基於 Sentence-Transformers 的語意相似度比對，將使用者指令路由到正確的執行 Agent',
        'PC 自動化控制：滑鼠移動/點擊、鍵盤輸入、視窗切換/最小化/關閉',
        '微信 PC 端自動化：自動傳送/讀取微信訊息，支援群聊與私聊',
        '系統控制：音量調節、螢幕亮度、電源管理',
        '瀏覽器自動化：開啟網頁、搜尋、資訊擷取',
        '聯網搜尋：整合 DuckDuckGo 搜尋引擎',
        '情感分析：分析使用者情緒狀態並調整回應風格',
        '知識庫與長期記憶：基於向量儲存的語意檢索，對話歷史持久化',
        '雙 LLM 後端：支援本地 Ollama（隱私優先）與雲端 Groq（效能優先）兩種模式'
      ],
      innovation: [
        '多智慧體協作架構：將複雜桌面任務拆解為多個子任務，由不同 Agent 並行/串行執行，顯著提升任務成功率',
        '桌面級 Agent 落地：不同於簡單的 ChatBot，實現了 LLM 對真實作業系統的操控能力',
        '雙模型熱切換：支援本地 Ollama 與雲端 Groq 的無縫切換，兼顧隱私保護與效能',
        '語意意圖路由：基於 Sentence-Transformers 向量相似度的意圖分類，比傳統關鍵詞比對更穩健',
        'Cloudflare Worker 代理：解決國內網路存取 Groq API 的問題'
      ]
    },
    4: {
      name: 'AI 手機模擬器 · LookHisPhone',
      overview: '本專案是一個基於純前端技術建構的 AI 人設模擬器，採用仿 iOS 介面設計，將預設的 AI 戀人角色植入六個常用 App（微信、音樂、備忘錄、相簿、外送、瀏覽器）中。所有互動內容均圍繞 AI 人設展開，包括朋友圈動態、聊天記錄、日記內容與搜尋歷史等，建構了完整的虛擬角色世界觀。',
      background: 'AI 角色扮演（Character.AI 等）近年來快速發展，但大多數產品僅停留在文字對話層面。本專案嘗試將 AI 角色植入更豐富的數位生活場景中，透過仿真的手機介面與多樣化的 App 互動，增強角色扮演的沉浸感與真實感。',
      features: [
        '仿 iOS 介面：精確還原 iPhone 桌面佈局、狀態列、圖示風格',
        '微信模擬：固定對話腳本 + 朋友圈按讚/評論雙向互動',
        '網易雲音樂：多首歌曲播放 + 「一起聽」情侶模式',
        '備忘錄雙分區：「光明面」與「陰暗面」兩個日記分區，展現角色多維度性格',
        '相簿瀏覽：預設照片集',
        '美團外送：模擬點餐流程',
        '瀏覽器：預設搜尋歷史記錄，暗示角色興趣與關注點',
        '自訂背景：支援更換手機桌布'
      ],
      innovation: [
        '多 App 場景融合：將 AI 角色融入到多個日常 App 中，而非單一聊天介面，增強了角色真實感',
        '隱性敘事手法：透過朋友圈、搜尋記錄、外送訂單等間接資訊，建構角色的「數位足跡」',
        '純前端零依賴：無需任何框架或後端服務，單一 HTML 檔案即可執行',
        'UI 細節還原：對 iOS 互動細節（彈性捲動、點擊回饋、切換動畫）的精細還原'
      ]
    },
    5: {
      name: 'EchoType · Roguelike 英語學習',
      overview: 'EchoType（回聲打字）是一款創新性的英語學習工具，其核心設計理念是將 Roguelike 遊戲的核心循環（挑戰→成長→再挑戰）與英語學習過程深度融合。使用者透過學習單字累積「經驗值」，透過文章臨摹提升「技能等級」，然後在地下城系統中挑戰隨機生成的學習關卡，形成「學習輸入 → 遊戲輸出 → 回饋激勵」的正向循環。',
      background: '英語學習中最大的痛點之一是「缺乏即時回饋與成就感」。傳統的背單字 App 枯燥單一，難以維持使用者的學習動力。EchoType 創新性地借用了 Roguelike 遊戲的隨機性、成長性與挑戰性機制，將枯燥的學習過程轉化為有趣的遊戲體驗。',
      features: [
        '內建多級單字書：涵蓋四六級、考研、托福、雅思、GRE 等主流英語考試詞庫',
        '文章臨摹：上傳 PDF/Word 文件，系統展示原文，使用者逐字打字臨摹，即時正誤回饋',
        '聽寫訓練：語音播放+使用者打字輸入，強化聽力與拼寫',
        'Roguelike 地下城：隨機生成房間（挑戰關卡），通過後獲得隨機獎勵（新單字書/加成道具）',
        '成長系統：經驗值、等級、突破點視覺化，呈現學習進步軌跡',
        '每日新聞副本：每日更新的新聞文章挑戰，保持學習新鮮感',
        'PWA 離線支援：Service Worker 快取，無網路也可學習',
        '打字速度追蹤：記錄 WPM（每分鐘打字速度）變化趨勢'
      ],
      innovation: [
        'Roguelike×教育：首次將 Roguelike 遊戲機制系統性地應用於語言學習領域',
        '學習-遊戲循環：建構「輸入學習→遊戲輸出→正向回饋」的自驅動學習閉環',
        '零伺服器儲存：所有使用者資料儲存在瀏覽器 IndexedDB 中，保護隱私',
        '打字即學習：將打字速度訓練與詞彙記憶有機結合，雙重提升'
      ]
    },
    6: {
      name: 'Film Genome System · 影視基因組',
      overview: 'Film Genome System（影視基因組系統）提出了「檢索增強創作」（Retrieval-Augmented Creation, RAC）的全新範式。系統自動分析海量影視片段，擷取視覺、音訊、敘事、轉場四個維度的「創作基因」，存入 Qdrant 向量資料庫。在生成階段，系統根據使用者需求檢索最相關的創作基因，指導 LLM 生成劇本與分鏡，最終透過 FFmpeg 合成 30-60 秒的 AI 短片。',
      background: '傳統的 AI 影片生成（如 Sora、Runway）依賴端到端模型，缺乏對影視創作規律的顯式建模。本專案從影視製作的實際工作流出發，將「參考樣片→分析→創作」的專業流程數位化，為 AI 影片生成提供了一種新的方法論——先理解已有作品，再基於理解進行創作。',
      features: [
        '四維創作基因擷取：視覺 DNA（場景/色彩/構圖）、音訊 DNA（對話/音效/配樂）、敘事 DNA（結構/節奏/情緒）、轉場 DNA（類型/時長/效果）',
        'Qdrant 向量檢索：基於語意相似度的創作基因檢索，支援「找類似鏡頭」、「找類似轉場」等查詢',
        'Sound Score 五層聲音設計：Dialogue(對話) / Performance(演奏) / Foley(擬音) / Ambience(環境) / Score(配樂)，每層獨立控制',
        '模型無關排程架構：分析層與生成層解耦，可靈活替換底層的 LLM 與 TTS 模型',
        'Docker 容器化部署：docker-compose 一鍵啟動 API + PostgreSQL + Qdrant 全套服務',
        'CLI 命令列工具：透過 fgs 命令進行腳本化的影視分析操作',
        'FastAPI REST 介面：標準化的 API 介面，便於前端接入與第三方整合'
      ],
      innovation: [
        '檢索增強創作(RAC)：首次將 RAG 思想應用於影視創作領域，用已有作品指導新創作',
        '四維基因模型：從視覺/音訊/敘事/轉場四個維度系統化描述影視片段，超越傳統的單一標籤分類',
        '五層聲音設計：將影視聲音分為 5 個獨立可控層，為 AI 生成的聲音提供精細控制能力',
        '模型無關架構：分析層與執行層解耦，可以獨立升級替換，提高了系統的可維護性與可擴充性'
      ]
    },
    7: {
      name: 'Doit · 多角色任務管理系統',
      overview: 'Doit 是一個面向多場景個人任務管理的全端 Web 應用。與傳統 Todo 應用不同，Doit 引入了「角色模式」概念：學生模式有課表管理，店長模式有店鋪與庫存管理，化妝師模式有預約日程管理等。透過角色切換，同一套系統可以適應完全不同的使用場景。系統還包括番茄鐘專注計時、行事曆檢視（月/週/日）、資料統計看板等效率工具。',
      background: '市面上的任務管理工具往往「千人一面」，無法滿足不同職業、不同身份使用者的差異化需求。Doit 透過「角色模式」解決了這個問題——每個角色預設了不同的任務分類、檢視佈局與功能模組，使用者切換角色即切換整套工作流。',
      features: [
        '多角色模式：學生（課表+作業）、店長（店鋪/員工/庫存管理）、化妝師（預約日程）、程式設計師（程式碼片段管理）、自習（專注計時）',
        '今日待辦：任務增刪改查、拖曳排序、優先級標記、到期提醒',
        '收集箱：快速記錄靈感，一鍵轉為正式任務',
        '行事曆檢視：月/週/日三種檢視，直觀展示任務時間分佈',
        '番茄鐘：25 分鐘專注+5 分鐘休息的經典番茄工作法計時器',
        '資料統計：完成趨勢折線圖、分類圓餅圖、時間熱力圖',
        '雲端同步：基於 Supabase 的資料同步，多裝置間無縫切換',
        'PWA 離線：Service Worker 快取，斷網也能使用'
      ],
      innovation: [
        '角色模式設計：同一個系統透過角色切換適配完全不同的人群與工作流，實現「千人千面」',
        '前後端統一 TypeScript：前端 Vue3 TS + 後端 Python 型別的混合型別安全',
        '漸進式資料同步：本地 IndexedDB + 遠端 Supabase 的雙層儲存，優先本地回應，後台非同步同步'
      ]
    },
    8: {
      name: 'BGF · 光電板缺陷智慧檢測平台',
      overview: 'BGF（光電智檢平台）是一個面向大型光電電站的智慧巡檢全流程 SaaS 平台。系統利用無人機採集光電板的紅外線熱成像與可見光影像，透過 YOLO 深度學習模型自動偵測熱斑、裂紋、異物遮蓋等 10 類缺陷。偵測結果關聯到 Cesium 三維 GIS 地圖上的具體光電板位置，生成缺陷工單並透過閉環系統追蹤處理過程。平台還整合了陽光雲(iSolarCloud)的發電資料，實現發電效率與裝置健康狀態的關聯分析。',
      background: '大型光電電站通常佔地數千畝，包含數十萬塊光電板。傳統的人工巡檢效率極低，且難以發現內部缺陷。BGF 平台利用「無人機巡檢 + AI 自動偵測 + GIS 定位 + 工單閉環」的技術路線，將光電電站的維運效率提升了數十倍。專案達到了 92% 的測試覆蓋率，透過 GitHub Actions 實現 CI/CD 自動化。',
      features: [
        'YOLO 多版本支援：同時支援 YOLOv8/v11/v12 三個版本，可靈活切換',
        '10 類缺陷偵測：熱斑、裂紋、異物遮蓋、斷柵、二極體故障、接線盒異常、玻璃碎裂、污漬、EVA 變色等',
        '紅外線+可見光雙光聯動：紅外線熱成像偵測溫度異常，可見光確認表面缺陷，雙重確認降低誤報',
        'Cesium 3D GIS：在三維地圖上標註每塊光電板的位置與偵測結果',
        '無人機航線管理：規劃巡檢航線，記錄飛行軌跡',
        '缺陷工單閉環：自動發現→人工確認→派單維修→處理回饋→驗收關閉',
        'iSolarCloud 資料採集：接入陽光雲平台取得即時發電資料',
        'AI 輔助分析報告：基於 Qwen-VL 多模態大模型自動生成偵測分析報告',
        '大屏視覺化：電站總覽、缺陷統計、發電資料即時展示',
        '92% 測試覆蓋率：pytest + Vitest 雙重測試，GitHub Actions CI/CD'
      ],
      innovation: [
        '雙光聯動偵測：將紅外線熱成像的溫度異常與可見光的表面缺陷進行空間配準與關聯分析，顯著降低誤報率',
        'GIS+AI 融合：將 AI 偵測結果精確映射到三維 GIS 座標，實現「偵測→定位→派單」的空間化閉環',
        '多 YOLO 版本支援：同一平台支援 YOLOv8/v11/v12，使用者可根據精度/速度需求靈活選擇',
        '時序分析：透過 TimescaleDB 儲存發電資料，進行缺陷與發電效率的時序關聯分析'
      ]
    },
    9: {
      name: 'LawLink · 律法通法律服務平台',
      overview: 'LawLink（律法通）是一個基於 Streamlit 框架建構的法律服務平台，專為 Complete.dev 黑客松比賽而開發。平台整合 5 個專用 AI Agent，分別負責法律問題初步整理、律師智慧比對、材料準備指導、案件簡報生成與資料分析，形成從使用者諮詢到案件處理的完整 AI 輔助法律服務閉環。',
      background: '法律服務行業長期存在「找律師難、諮詢貴、流程複雜」的痛點。LawLink 透過 AI Agent 協作，降低了法律服務的使用門檻：使用者只需用自然語言描述問題，AI 自動整理案情、比對合適的律師、指導材料準備，並生成專業的案件簡報。',
      features: [
        '五 AI Agent 協作：Intake(案情整理) → Matching(律師比對) → Preparation(材料準備指導) → Brief(案件簡報) → Insights(資料分析)',
        '三端角色分離：一般使用者端（諮詢/比對）、律師端（儀表板/預約管理）、管理員端（總覽/AI 管理）',
        '智慧律師比對：AI 分析案情類型與複雜度，推薦最合適的律師',
        '案件簡報自動生成：AI 整理案情與證據材料，生成結構化案件簡報',
        '佣金分級機制：按律師接單量 10%-20% 的階梯佣金，激勵律師積極接單',
        '中英文雙語：介面與 AI 回答均支援中英文',
        '託管付款系統：平台託管律師費，案件完成後釋放'
      ],
      innovation: [
        '多 Agent 串聯流程：5 個 Agent 形成法律服務流水線，各司其職又協同工作',
        'Streamlit 快速原型：在黑客松的時間限制下，使用 Streamlit 實現了完整的多角色 SaaS 平台',
        'AI 驅動的律師比對：基於語意分析進行案-人比對，而非傳統的按領域分類'
      ]
    },
    10: {
      name: '智砼衛士 · 混凝土裂縫檢測',
      overview: '面向土木工程基礎設施檢測的 AI 系統，利用改進版 YOLOv8 模型對混凝土表面的裂縫進行自動偵測、分割與量化測量。系統同時支援偵測（detect）與分割（segment）兩種模式，可以測量裂縫長度、分析顏色特徵、計算破損面積佔比，並自動生成包含圖表與結論的 PDF/Word 檢測報告。專案為挑戰盃大學生課外學術科技作品競賽參賽專案，含完整商業計畫書。',
      features: ['YOLOv8 改進版：針對裂縫偵測場景最佳化的目標偵測模型', '裂縫長度測量：像素距離→實際尺寸自動換算', '顏色分析：HSV 空間分析裂縫區域顏色特徵', 'PDF/Word 報告自動生成', '相機即時偵測模式', '資料對比分析', '挑戰盃完整申報材料：商業計畫書+路演 PPT+查新報告'],
      innovation: ['偵測+分割雙模式', '裂縫長度自動換算', '偵測→評估→報告全流程自動化']
    },
    11: {
      name: '酪梨成熟度檢測 · HSI',
      overview: '利用高光譜成像技術對酪梨進行無損成熟度檢測的深度學習科研專案。從高光譜影像中擷取光譜特徵，輸入帶 SE（Squeeze-and-Excitation）注意力機制的 CNN 進行未熟/成熟/過熟三分類。透過多視角融合將單個樣本級 95% 準確率提升到果實級 98%。專案包含完整的科研實驗設計：消融實驗、多種子驗證、Grad-CAM 熱力圖視覺化、EMA 模型最佳化等。',
      features: ['高光譜影像光譜特徵擷取', 'SE 注意力機制 CNN', '3 分類(未熟/成熟/過熟)', '樣本級 95%，果實級 98%', 'Grad-CAM 熱力圖', '多視角融合', 'EMA 最佳化', 'Warmup+CosineAnnealing', '消融實驗+多種子驗證'],
      innovation: ['多視角融合提升果實級準確率', 'SE 注意力在高光譜場景的應用驗證', '完整的科研實驗方法論：消融+多種子+Grad-CAM']
    },
    12: {
      name: 'LabMate · 實驗搭子',
      overview: '面向化學專業學生與科研人員的實驗資料管理平台。系統涵蓋實驗從建立、資料錄入、分析到報告生成的全生命週期。支援手動錄入與 OCR 拍照辨識兩種資料採集方式，內建統計分析（異常值偵測、曲線擬合）與 6 種常用化學計算機（莫耳質量、溶液配製、pH 計算、滴定分析等）。提供 6 套主題與暗色模式。',
      features: ['實驗全生命週期管理', 'OCR 拍照資料錄入', '統計分析：異常值偵測+曲線擬合', 'HTML/JSON 報告匯出', '6 種化學計算機', 'JWT 認證', '6 套主題+暗色模式']
    },
    13: {
      name: 'Qwen Agent · 本地 AI 助手',
      overview: '一個完全本地化執行的 AI 聊天 Agent，使用 Ollama 執行通義千問 Qwen2.5:7b 模型，無需依賴雲端 API（除聯網搜尋工具外）。Agent 支援三種工具呼叫：數學計算機、時間日期查詢與 DuckDuckGo 聯網搜尋。Flask 提供輕量級 Web 聊天介面，agent_core.py 封裝 Ollama API 互動與工具呼叫邏輯。',
      features: ['本地大模型執行（Ollama+Qwen2.5:7b）', '三種工具呼叫', '多輪對話記憶', 'Flask Web 聊天介面', '除搜尋外完全離線可用'],
      innovation: ['本地 Agent 工具呼叫', '無需雲端 API，隱私安全']
    },
    14: {
      name: 'Coze · 黨務智慧問答平台',
      overview: '利用 Coze（位元組跳動 AI 對話引擎）建構的黨務知識智慧問答系統。採用 Server-Sent Events（SSE）實現打字機式串流輸出，提升互動體驗。系統內建黨務知識分類導航（黨的基本理論、組織建設、黨風廉政建設、黨員權利義務等），支援多輪對話記憶與對話歷史管理。',
      features: ['Coze AI 智慧問答', 'SSE 串流回應', '多輪對話', '黨務知識分類導航', '新建/切換對話']
    },
    15: {
      name: '嵌入式 AI · 手勢辨識',
      overview: '面向嵌入式 ARM 平台的 AI 應用開發實訓專案。使用 Google MediaPipe 框架在 RK3568 開發板上實現即時手勢關鍵點偵測，可辨識單手 21 個關鍵點的三維座標。專案包含完整的環境搭建指南（MediaPipe 特定版本相容性問題處理）與 OpenCV 基礎案例集合。',
      features: ['MediaPipe 即時手勢偵測', '21 個關鍵點座標取得', 'RK3568 嵌入式部署', '完整環境搭建教學', 'OpenCV 基礎案例集']
    },
    16: {
      name: '花火書房 · PWA 知識庫',
      overview: '一個漸進式 Web 應用(PWA)，將學習筆記包裝成「魔法書」概念。書架導航展示多主題教學（資料結構、NLP、Django、Python、SQL、HTML 等），包含 PDF 閱讀器與個人作品展示。透過 Service Worker 實現離線快取，無網路也能存取。',
      features: ['多主題「魔法書」教學', '書架式 UI 導航', 'PDF 閱讀器', 'PWA 離線存取', 'Service Worker 自動快取', '個人作品展示']
    },
    17: {
      name: 'Workspace · GrapesJS 編輯器',
      overview: '一個整合 Django 後端與 GrapesJS 前端視覺化編輯器的全端 Workspace 平台。使用者可透過拖曳方式建構網頁內容（標題/文字/程式碼區塊/圖片/分割線等），系統將編輯器的 JSON 輸出轉化為可渲染的 HTML。同時支援專案、圖片素材、文字素材與心得筆記的管理。',
      features: ['GrapesJS 拖曳網頁編輯器', '專案管理 CRUD', '圖片/文字/筆記素材管理', '使用者認證系統', 'blocks_to_html 自訂渲染引擎', '中文介面(zh-hans)']
    },
    18: {
      name: 'Showcase · 專案管理平台',
      overview: '一個輕量級的全端專案展示管理平台。後端使用 Express.js 提供 REST API（專案/圖片/文字/筆記的 CRUD），前端為單檔 SPA（1198 行內嵌 CSS+JS），包含管理後台與公開瀏覽兩種模式。檔案上傳透過 Multer 處理，資料透過 JSON 檔案儲存，無需資料庫。支援託管 HTML 範本的預覽。',
      features: ['專案 CRUD+縮圖上傳', '圖片/文字/筆記素材管理', '管理員 Token 認證', 'iframe 預覽託管', 'Lightbox 圖片檢視', '響應式時間線/網格檢視']
    },
    19: {
      name: '月薪喵 · 終端桌寵',
      overview: '一個輕量級的終端桌寵程式，將 GIF 動畫以 ASCII/半塊字元形式即時渲染在命令列終端中。讀取 cat.gif 循環播放貓咪動畫，可選播放 music.mp3 背景音樂。支援多種參數（--fps 影格率、--scale 縮放、--margin-rows 邊距、--smooth 平滑、--half-block 半塊字元）。可透過 PyInstaller 打包為獨立 exe。附帶程式碼打字機工具用於錄製程式教學影片。',
      features: ['終端 GIF 動畫渲染', '貓咪循環動畫', '背景音樂播放', '多參數調節', '跨平台(Win/Mac/Linux)', 'PyInstaller 打包 exe', '程式碼打字機錄製工具']
    },
    20: {
      name: '黨務文章爬蟲系統',
      overview: '一個定向 Web 爬蟲專案，專門用於從共產黨員網採集黨規黨章等規範性文件。涵蓋黨章、準則、條例、規則、規定、辦法、細則等全部層級。經歷了多個版本迭代：從最初的 XPath 路徑除錯，到半自動化爬取，再到最終的批次自動化爬取與 PDF 生成。',
      features: ['定向網站爬取', 'XPath 精確定位', 'HTML 轉 PDF', '批次自動化', '爬取報告生成', '多版本迭代']
    },
    21: {
      name: '粵嵌 OpenCV 學習合集',
      overview: '粵嵌嵌入式培訓期間的 OpenCV 學習練習集。包含影片讀取（本地檔案/攝影機）、人臉偵測（Haar Cascade）、人眼偵測、車牌偵測辨識、OCR 文字辨識（pytesseract）等電腦視覺基礎案例，為後續進階機器視覺專案奠定基礎。',
      features: ['本地影片/攝影機讀取', 'Haar Cascade 人臉/人眼偵測', '車牌偵測辨識', 'OCR 文字辨識', '基礎影像處理']
    }
  }
  ,
  ja: {
    1: {
      name: '平陸運河 · 世紀の大工業デジタルナラティブ',
      overview: '平陸運河デジタルナラティブサイトは、マルチメディア展示・インタラクティブ体験・情報発信を一体化した総合デジタル展示プラットフォームです。「デジタルストーリーテリング」の理念を採用し、運河の歴史的背景・建設過程・工学的特徴・未来ビジョンを Web 技術で芸術的に表現し、没入型の知識体験を構築します。',
      background: '平陸運河は新中国成立以来、初めて河川と海を結ぶ運河工事で、全長約 134.2km、総投資額は約 727 億元です。この世紀の大工業の意義を一般に伝えるため、本プロジェクトはデジタルナラティブ技術で無味乾燥な工学データを生き生きとした視覚体験へと変換します。バックエンド不要のフロントエンドのみの実装で、配備と共有が容易です。',
      features: [
        '没入型スクロールナラティブ：スクロールでアニメーション列を発火し運河の物語を語る',
        'Three.js 3D パーティクルトンネル背景：動的パーティクルで水流を再現し没入感を強化',
        'GSAP ScrollTrigger 駆動：高性能スクロールアニメで各要素の登場タイミングを精密制御',
        'マルチページ構成：ホーム（概要）、詳細（工学データ）、運河の記憶（タイムライン）、水辺のメッセージ（インタラクション）',
        'レスポンシブデザイン：PC・タブレット・スマホの3サイズに対応',
        '中国語タイポグラフィ最適化：Noto Serif SC セリフ体で組版の美しさを向上',
        'Font Awesome 6 アイコンシステム：統一されたビジュアル言語',
        'バックエンド非依存：純静的 HTML で任意の Web サーバーや GitHub Pages に配備可能'
      ],
      innovation: [
        'デジタルナラティブのパラダイム：伝統的展示を没入型 Web 体験へ変換し発信コストを低減',
        '3D パーティクル水流シミュレーション：Three.js でブラウザ内に低負荷の水流エフェクト',
        'スクロール駆動アニメの振付：GSAP ScrollTrigger でスクロールとフレームを精密連動',
        '中国語 Web 組版の工学的実践：ウェイト・行間・字間の精密調整'
      ]
    },
    2: {
      name: 'ナンバープレート認識システム v8.1 · 複数手法比較',
      overview: '本プロジェクトは、画像前処理・文字分割・文字認識まで全工程をカバーする、教育・実践向けの完全なナンバープレート認識システムを構築します。CNN 深層学習・SVM 機械学習・EasyOCR の3手法を統合し、直感的な比較評価で各技術ルートの長所短所を理解できます。Tkinter による GUI は「初心者でも操作可能」を設計原則としています。',
      background: 'ナンバープレート認識（LPR）は高度道路交通システムの中核技術の一つです。本プロジェクトは教育・実践の観点から完全な LPR システムを設計：ユーザーは GUI でデータ合成・画像処理・モデル訓練・予測・性能評価の全工程を操作できます。青ナンバーと黄ナンバーに対応し、色特徴認識の精度は 90% 以上です。',
      features: [
        '3手法比較：CNN・SVM・EasyOCR の精度を直感的に比較',
        '訓練データ自動合成：内蔵の文字生成器で外部データセット不要',
        '実プレート注釈ツール：手動注釈 UI で実プレート文字を収集・ラベリング',
        '完全可視化フロー：各処理結果をリアルタイム表示（グレースケール→二値化→位置特定→分割→認識）',
        '性能評価レポート：精度と混同行列を含むレポートを自動生成',
        'テンプレートマッチング：SIFT 特徴マッチングツール（txpp.py）で大画像内の小画像を特定',
        'GUI 全工程ガイド：ボタン操作で導入ハードルを低減',
        '日中詳細コメント：学習と二次開発に適した丁寧なコード注釈'
      ],
      innovation: [
        '3手法比較フレームワーク：全く異なる3ルート（CNN・SVM・EasyOCR）を同一システムに統合し定量比較',
        '外部データ非依存：内蔵合成データ生成器で外部データセットなしに全訓練を完了',
        'GUI 全工程カプセル化：複雑なデータ処理・訓練・評価をボタン操作に集約',
        '色特徴による位置特定：青/黄プレートの色空間解析で、特定シーンでは従来のエッジ検出より頑健'
      ]
    },
    3: {
      name: 'リトルモンスターヘルパー · マルチエージェント・デスクトップアシスタント',
      overview: 'リトルモンスターヘルパーは Windows デスクトップ向けの AI マルチエージェント協調システムです。大規模言語モデルを核に、LangGraph で複数の専門エージェントを編成し、音声指令からデスクトップ操作までのエンドツーエンド自動化を実現します。「Hey Jarvis」で起動し、自然言語でファイル処理・WeChat メッセージ・システム設定などの複雑な操作を行えます。',
      background: 'LLM の能力向上に伴い、AI はテキスト対話にとどまらず、デジタル世界を実際に操作できるようになりました。本プロジェクトはデスクトップ OS レベルでの LLM エージェント応用を探求：自然言語指令を実際のシステム操作（マウスクリック・キーボード入力・ウィンドウ切替）へ変換し、真の意味での「AI による PC 操作」を実現します。',
      features: [
        '音声起動：「Hey Jarvis」キーワード検出でハンズフリー操作',
        'マルチエージェント協調：LangGraph が意図ルーティングと実行エージェントを編成',
        '意図ルーティング：Sentence-Transformers の意味類似度で指令を正しいエージェントへ振り分け',
        'PC 自動化：マウス移動/クリック、キーボード入力、ウィンドウ切替/最小化/クローズ',
        'WeChat デスクトップ自動化：メッセージの自動送受信、グループ・個人チャット対応',
        'システム制御：音量・画面輝度・電源管理',
        'ブラウザ自動化：ページを開く・検索・情報抽出',
        'Web 検索：DuckDuckGo 検索エンジンを統合',
        '感情分析：ユーザーの感情を分析し応答スタイルを調整',
        'ナレッジベースと長期記憶：ベクトルベースの意味検索と対話履歴の永続化',
        'デュアル LLM バックエンド：ローカル Ollama（プライバシー優先）とクラウド Groq（性能優先）',
      ],
      innovation: [
        'マルチエージェント構造：複雑なタスクをサブタスクに分解し複数エージェントで並列/直列実行、成功率を大幅向上',
        'デスクトップ級エージェントの実装：単なるチャットボットと異なり、LLM に実 OS の操作能力を付与',
        'デュアルモデルのホットスワップ：ローカル Ollama とクラウド Groq をシームレス切替、プライバシーと性能を両立',
        '意味的意図ルーティング：Sentence-Transformers のベクトル類似度分類でキーワード照合より頑健',
        'Cloudflare Worker プロキシ：国内から Groq API への接続問題を解決'
      ]
    },
    4: {
      name: 'AI スマホシミュレーター · LookHisPhone',
      overview: '純フロントエンドで構築した AI ペルソナシミュレーターで、iOS 風 UI を採用し、プリセットの AI 恋人キャラを6つの常用アプリ（WeChat・音楽・メモ・アルバム・フードデリバリー・ブラウザ）に組み込みます。すべての操作は AI ペルソナを中心に展開し、SNS 投稿・チャット履歴・日記・検索履歴などで完全な仮想キャラ世界観を構築します。',
      background: 'AI ロールプレイ（Character.AI 等）は急速に発展していますが、多くはテキスト対話にとどまります。本プロジェクトは AI キャラをより豊かなデジタル生活シーンに組み込み、リアルなスマホ UI と多様なアプリ操作で没入感と現実味を高めます。',
      features: [
        'iOS 風 UI：iPhone のホーム配置・ステータスバー・アイコン様式を精密再現',
        'WeChat シミュレーション：定型チャット + SNS のいいね/コメント双方向',
        'NetEase Cloud Music：複数曲の再生 + カップル「一緒に聴く」モード',
        '二区分メモ：「明るい面」と「暗い面」の日記区分でキャラの多面性を表現',
        'アルバム閲覧：プリセット写真集',
        'Meituan デリバリー：注文フローを模擬',
        'ブラウザ：プリセット検索履歴でキャラの興味を示唆',
        'カスタム背景：壁紙の変更に対応'
      ],
      innovation: [
        'マルチアプリ融合：単一チャット画面ではなく複数の日常アプリに AI キャラを組み込み現実味を強化',
        '暗黙的ナラティブ：SNS・検索記録・注文履歴などの間接情報でキャラの「デジタル足跡」を構築',
        '純フロントエンド・ゼロ依存：フレームワークやバックエンド不要、単一 HTML で動作',
        'UI 細部の再現：iOS のインタラクション（弾性スクロール・タップ反応・遷移）を精密再現'
      ]
    },
    5: {
      name: 'EchoType · ローグライク英語学習',
      overview: 'EchoType は革新的な英語学習ツールで、ローグライクのコアループ（挑戦→成長→再挑戦）と学習過程を深く融合させることを核心理念とします。単語学習で「経験値」を貯め、文章模写で「スキルレベル」を上げ、ダンジョンでランダム生成の学習ステージに挑戦し、「学習入力→ゲーム出力→フィードバック」の好循環を形成します。',
      background: '英語学習最大の課題の一つは「即時フィードバックと達成感の欠如」です。従来の単語アプリは単調で学習意欲を維持しにくいものでした。EchoType はローグライクのランダム性・成長性・挑戦性を借り、退屈な学習を楽しい体験へと変えます。',
      features: [
        '多段階単語帳内蔵：CET-4/6・大学院・TOEFL・IELTS・GRE などの主要試験語彙',
        '文章模写：PDF/Word をアップロードし原文を一文字ずつ模写、正誤をリアルタイム表示',
        'ディクテーション訓練：音声再生＋タイピングでリスニングとスペルを強化',
        'ローグライクダンジョン：ランダム生成の部屋（ステージ）を突破し報酬（新単語帳/強化アイテム）を獲得',
        '成長システム：経験値・レベル・ブレイクスルー点を可視化し学習の進歩を提示',
        '毎日ニュースダンジョン：毎日更新のニュース記事チャレンジで新鮮さを維持',
        'PWA オフライン対応：Service Worker キャッシュでネットなしでも学習可能',
        'タイピング速度追跡：WPM の推移を記録'
      ],
      innovation: [
        'ローグライク×教育：ローグライク機構を言語学習に体系的に応用した初の試み',
        '学習-ゲームループ：「学習入力→ゲーム出力→正のフィードバック」の自己駆動型閉ループを構築',
        'サーバーレス保存：全ユーザーデータをブラウザの IndexedDB に保存しプライバシーを保護',
        'タイピング＝学習：タイピング訓練と語彙記憶を有機的に結合し二重の効果'
      ]
    },
    6: {
      name: 'Film Genome System · 映像ゲノム',
      overview: 'Film Genome System は「検索拡張創作」（Retrieval-Augmented Creation, RAC）という新しいパラダイムを提唱します。大量の映像クリップを自動分析し、視覚・音声・叙事・トランジションの4次元の「創作遺伝子」を抽出し Qdrant ベクトル DB に保存。生成段階では要求に応じ最も関連する遺伝子を検索し LLM の脚本・絵コンテ生成を導き、最終的に FFmpeg で 30〜60 秒の AI 短編を合成します。',
      background: '従来の AI 動画生成（Sora、Runway 等）はエンドツーエンドモデルに依存し、映像創作の法則を明示的にモデル化していません。本プロジェクトは実際の映像制作ワークフローから出発し、「参照素材→分析→創作」という専門プロセスをデジタル化し、AI 動画生成に新たな方法論——まず既存作品を理解し、その理解に基づいて創作する——を提供します。',
      features: [
        '4次元創作遺伝子抽出：視覚 DNA（シーン/色彩/構図）、音声 DNA（対話/効果音/音楽）、叙事 DNA（構造/リズム/感情）、トランジション DNA（種類/長さ/効果）',
        'Qdrant ベクトル検索：意味類似度による遺伝子検索で「類似ショット」「類似トランジション」を検索可能',
        'Sound Score 五層サウンド設計：Dialogue / Performance / Foley / Ambience / Score を各層独立制御',
        'モデル非依存スケジューリング：分析層と生成層を分離し LLM・TTS モデルを柔軟に交換',
        'Docker コンテナ配備：docker-compose で API + PostgreSQL + Qdrant を一括起動',
        'CLI ツール：fgs コマンドでスクリプト化した映像分析操作',
        'FastAPI REST インターフェース：標準化 API でフロント接続や第三者統合が容易'
      ],
      innovation: [
        '検索拡張創作(RAC)：RAG の思想を映像創作へ初めて応用し既存作品で新創作を導く',
        '4次元遺伝子モデル：視覚/音声/叙事/トランジションの4次元で映像を体系的に記述し単一タグ分類を超越',
        '五層サウンド設計：映像音声を5つの独立制御層に分け AI 生成音の精密制御を実現',
        'モデル非依存構造：分析層と実行層を分離し独立してアップグレード可能、保守性と拡張性を向上'
      ]
    },
    7: {
      name: 'Doit · マルチロール・タスク管理システム',
      overview: 'Doit はマルチシーン向け個人タスク管理のフルスタック Web アプリです。従来の Todo と異なり「ロールモード」を導入：学生モードには時間割管理、店長モードには店舗・在庫管理、メイクアップアーティストモードには予約管理などがあります。ロール切替で同一システムが全く異なるシーンに適応します。ポモドーロタイマー、カレンダー表示（月/週/日）、統計ダッシュボードも備えます。',
      background: '市販のタスク管理ツールは「画一的」で、職業や立場ごとの多様なニーズに応えられません。Doit は「ロールモード」でこれを解決——各ロールに異なるタスク分類・レイアウト・機能を用意し、ロール切替でワークフロー全体が切り替わります。',
      features: [
        'マルチロール：学生（時間割+課題）、店長（店舗/従業員/在庫）、メイクアップ（予約）、開発者（スニペット管理）、自習（集中タイマー）',
        '今日のタスク：CRUD、ドラッグ並び替え、優先度タグ、期限リマインド',
        'インボックス：アイデアを素早く記録しワンクリックで正式タスク化',
        'カレンダー表示：月/週/日でタスクの時間分布を可視化',
        'ポモドーロ：25 分集中+5 分休憩の定番タイマー',
        '統計：完了トレンド折れ線、カテゴリ円グラフ、時間ヒートマップ',
        'クラウド同期：Supabase ベースでマルチデバイスをシームレスに切替',
        'PWA オフライン：Service Worker キャッシュでオフラインでも利用可'
      ],
      innovation: [
        'ロールモード設計：ロール切替で全く異なる層とワークフローに適応し「千人千様」を実現',
        'フルスタック統一 TypeScript：Vue3 TS フロントと Python 型付きバックのハイブリッド型安全',
        '漸進的データ同期：ローカル IndexedDB + リモート Supabase の二層保存、ローカル優先＋バックグラウンド非同期同期'
      ]
    },
    8: {
      name: 'BGF · 太陽光パネル欠陥インテリジェント検出プラットフォーム',
      overview: 'BGF は大規模太陽光発電所向けのスマート点検フルフロー SaaS プラットフォームです。ドローンでパネルの赤外線サーモ画像と可視光画像を取得し、YOLO 深層学習モデルでホットスポット・クラック・異物遮蔽など10種の欠陥を自動検出。結果を Cesium 3D GIS 地図上の各パネル位置に紐付け、欠陥ワークオーダーを生成しクローズドループで処理を追跡します。iSolarCloud の発電データも統合し、発電効率と設備健全性の相関分析を行います。',
      background: '大規模発電所は数千ムーに及び数十万枚のパネルを含みます。人手による点検は極めて非効率で内部欠陥も見つけにくいものです。BGF は「ドローン点検＋AI 検出＋GIS 測位＋ワークオーダー閉ループ」で運用効率を数十倍に向上。テストカバレッジ 92% を達成し GitHub Actions で CI/CD を自動化しています。',
      features: [
        'YOLO マルチバージョン対応：YOLOv8/v11/v12 を柔軟に切替',
        '10 種の欠陥検出：ホットスポット、クラック、異物遮蔽、断線グリッド、ダイオード故障、ジャンクションボックス異常、ガラス破損、汚れ、EVA 変色など',
        '赤外＋可視光デュアル連動：赤外で温度異常、可視光で表面欠陥を確認し二重確認で誤検出を低減',
        'Cesium 3D GIS：3D 地図上に各パネル位置と検出結果を表示',
        'ドローン航路管理：点検航路の計画と飛行軌跡の記録',
        '欠陥ワークオーダー閉ループ：自動検出→人手確認→修理指示→フィードバック→検収クローズ',
        'iSolarCloud データ取込：iSolarCloud からリアルタイム発電データを取得',
        'AI 支援分析レポート：Qwen-VL マルチモーダルで検出分析レポートを自動生成',
        '大画面可視化：発電所概要・欠陥統計・発電データをリアルタイム表示',
        'テストカバレッジ 92%：pytest + Vitest の二重テストと GitHub Actions CI/CD'
      ],
      innovation: [
        'デュアル光連動検出：赤外の温度異常と可視光の表面欠陥を空間位置合わせして相関分析し誤検出を大幅低減',
        'GIS＋AI 融合：AI 結果を 3D GIS 座標へ精密マッピングし「検出→測位→指示」の空間的閉ループを実現',
        'マルチ YOLO 対応：同一基盤で YOLOv8/v11/v12 に対応し精度/速度で選択可能',
        '時系列分析：TimescaleDB に発電データを保存し欠陥と発電効率の時系列相関を分析'
      ]
    },
    9: {
      name: 'LawLink · 法律サービスプラットフォーム',
      overview: 'LawLink は Streamlit フレームワークで構築した法律サービスプラットフォームで、Complete.dev ハッカソン向けに開発されました。5つの専用 AI エージェントが、案件の初期整理・弁護士のスマートマッチング・書類準備ガイド・案件サマリー生成・データ分析を担い、相談から案件処理までの完全な AI 支援法律サービス閉ループを形成します。',
      background: '法律サービス業界には「弁護士探しが難しい・相談が高い・手続きが複雑」という長年の課題があります。LawLink は AI エージェント協調で利用のハードルを下げます：ユーザーは自然言語で問題を述べるだけで、AI が案件を整理し、適した弁護士をマッチングし、書類準備を案内し、専門的な案件サマリーを生成します。',
      features: [
        '5 エージェント協調：Intake（案件整理）→ Matching（弁護士マッチング）→ Preparation（書類準備）→ Brief（案件サマリー）→ Insights（データ分析）',
        '3 ロール分離：一般ユーザー（相談/マッチング）、弁護士（ダッシュボード/予約管理）、管理者（概要/AI 管理）',
        'スマート弁護士マッチング：案件の種類と複雑度を AI が分析し最適な弁護士を推薦',
        '案件サマリー自動生成：案件事実と証拠を AI が整理し構造化サマリーを生成',
        '段階手数料：受任量に応じ 10%〜20% の段階手数料で受任を促進',
        'バイリンガル：UI と AI 回答が中英対応',
        'エスクロー決済：プラットフォームが弁護士費用を預かり案件完了後に解放'
      ],
      innovation: [
        'マルチエージェント・パイプライン：5 エージェントが法律サービスのラインを形成し分業と協調を両立',
        'Streamlit ラピッドプロトタイピング：ハッカソンの時間制限内で完全なマルチロール SaaS を実現',
        'AI 駆動の弁護士マッチング：従来の分野分類でなく意味解析で案件-人をマッチング'
      ]
    },
    10: {
      name: 'コンクリートガーディアン · コンクリートひび割れ検出',
      overview: '土木インフラ検査向けの AI システムで、改良版 YOLOv8 でコンクリート表面のひび割れを自動検出・分割・定量測定します。検出（detect）と分割（segment）の両モードに対応し、ひび割れ長さの測定・色特徴の分析・損傷面積比の算出を行い、図表と結論を含む PDF/Word レポートを自動生成。チャレンジカップ出品作でビジネスプランも完備します。',
      features: ['改良版 YOLOv8：ひび割れ検出向けに最適化した物体検出モデル', 'ひび割れ長さ測定：ピクセル距離→実寸を自動換算', '色分析：HSV 空間でひび割れ領域の色特徴を分析', 'PDF/Word レポート自動生成', 'カメラリアルタイム検出モード', '比較データ分析', 'チャレンジカップ完全申請資料：ビジネスプラン+ピッチ資料+新規性調査'],
      innovation: ['検出+分割のデュアルモード', 'ひび割れ長さの自動換算', '検出→評価→レポートの全工程自動化']
    },
    11: {
      name: 'アボカド熟度検出 · HSI',
      overview: 'ハイパースペクトル撮像でアボカドを非破壊的に熟度検出する深層学習研究プロジェクトです。ハイパースペクトル画像から分光特徴を抽出し、SE（Squeeze-and-Excitation）アテンション付き CNN で未熟/成熟/過熟の3分類を行います。マルチビュー融合でサンプル単位 95% の精度を果実単位 98% へ向上。アブレーション実験・マルチシード検証・Grad-CAM ヒートマップ・EMA 最適化など完全な研究設計を含みます。',
      features: ['ハイパースペクトル画像の分光特徴抽出', 'SE アテンション付き CNN', '3分類（未熟/成熟/過熟）', 'サンプル単位 95%、果実単位 98%', 'Grad-CAM ヒートマップ', 'マルチビュー融合', 'EMA 最適化', 'Warmup+CosineAnnealing', 'アブレーション+マルチシード検証'],
      innovation: ['マルチビュー融合で果実単位の精度を向上', 'ハイパースペクトルでの SE アテンション適用検証', '完全な研究方法論：アブレーション+マルチシード+Grad-CAM']
    },
    12: {
      name: 'LabMate · 実験パートナー',
      overview: '化学専攻の学生・研究者向けの実験データ管理プラットフォームです。実験の作成・データ入力・分析・レポート生成までの全ライフサイクルをカバー。手動入力と OCR 撮影認識の両方に対応し、統計分析（外れ値検出・曲線フィッティング）と6種の化学計算機（モル質量・溶液調製・pH 計算・滴定分析など）を内蔵。6 種のテーマとダークモードを提供します。',
      features: ['実験の全ライフサイクル管理', 'OCR 撮影データ入力', '統計分析：外れ値検出+曲線フィッティング', 'HTML/JSON レポート出力', '6 種の化学計算機', 'JWT 認証', '6 種テーマ+ダークモード']
    },
    13: {
      name: 'Qwen Agent · ローカル AI アシスタント',
      overview: '完全ローカルで動作する AI チャットエージェントで、Ollama で通義千問 Qwen2.5:7b を実行し、クラウド API に依存しません（Web 検索ツールを除く）。計算機・日時照会・DuckDuckGo Web 検索の3つのツール呼び出しに対応。Flask が軽量な Web チャット UI を提供し、agent_core.py が Ollama API 連携とツール呼び出しロジックをカプセル化します。',
      features: ['ローカル LLM 実行（Ollama+Qwen2.5:7b）', '3種のツール呼び出し', 'マルチターン対話記憶', 'Flask Web チャット UI', '検索以外は完全オフライン'],
      innovation: ['ローカルエージェントのツール呼び出し', 'クラウド API 不要でプライバシー安全']
    },
    14: {
      name: 'Coze · 党務インテリジェント Q&A プラットフォーム',
      overview: 'Coze（ByteDance の AI 対話エンジン）で構築した党務知識のインテリジェント Q&A システムです。Server-Sent Events（SSE）でタイプライター風のストリーミング出力を実現し体験を向上。基本理論・組織建設・清廉建設・党員の権利義務など知識分類ナビを内蔵し、マルチターン記憶と対話履歴管理に対応します。',
      features: ['Coze AI インテリジェント Q&A', 'SSE ストリーミング応答', 'マルチターン対話', '党務知識の分類ナビ', '対話の新規作成/切替']
    },
    15: {
      name: '組込み AI · ジェスチャー認識',
      overview: '組込み ARM プラットフォーム向けの AI アプリ開発実習プロジェクトです。Google MediaPipe を RK3568 ボード上で用い、リアルタイムのジェスチャーキーポイント検出を実現し、片手 21 点の 3D 座標を認識します。完全な環境構築ガイド（MediaPipe の特定バージョン互換性対応）と OpenCV 基礎事例集を含みます。',
      features: ['MediaPipe リアルタイムジェスチャー検出', '21 キーポイント座標の取得', 'RK3568 組込み配備', '完全な環境構築チュートリアル', 'OpenCV 基礎事例集']
    },
    16: {
      name: '花火書房 · PWA ナレッジベース',
      overview: '学習ノートを「魔法の書」というコンセプトに包んだプログレッシブ Web アプリ（PWA）です。本棚ナビでマルチトピックのチュートリアル（データ構造、NLP、Django、Python、SQL、HTML など）を表示し、PDF リーダーと個人作品展示を備えます。Service Worker のオフラインキャッシュでネットなしでもアクセス可能です。',
      features: ['マルチトピック「魔法の書」チュートリアル', '本棚風 UI ナビ', 'PDF リーダー', 'PWA オフラインアクセス', 'Service Worker 自動キャッシュ', '個人作品展示']
    },
    17: {
      name: 'Workspace · GrapesJS エディター',
      overview: 'Django バックエンドと GrapesJS フロントの視覚エディターを統合したフルスタック Workspace プラットフォームです。ドラッグ&ドロップで Web コンテンツ（見出し/テキスト/コードブロック/画像/区切り線など）を構築し、エディターの JSON 出力をレンダリング可能な HTML へ変換します。プロジェクト・画像素材・テキスト素材・所感ノートの管理にも対応します。',
      features: ['GrapesJS ドラッグ&ドロップ Web エディター', 'プロジェクト管理 CRUD', '画像/テキスト/ノート素材管理', 'ユーザー認証システム', 'blocks_to_html カスタムレンダリングエンジン', '中国語 UI（zh-hans）']
    },
    18: {
      name: 'Showcase · プロジェクト管理プラットフォーム',
      overview: '軽量なフルスタックのプロジェクト展示管理プラットフォームです。バックエンドは Express.js で REST API（プロジェクト/画像/テキスト/ノートの CRUD）を提供し、フロントは単一ファイル SPA（インライン CSS+JS 1198 行）で管理画面と公開閲覧の両モードを備えます。ファイルアップロードは Multer、データは JSON ファイルで保存しデータベース不要。HTML テンプレートのプレビューホスティングに対応します。',
      features: ['プロジェクト CRUD+サムネイルアップロード', '画像/テキスト/ノート素材管理', '管理者トークン認証', 'iframe プレビューホスティング', 'Lightbox 画像ビュー', 'レスポンシブなタイムライン/グリッド表示']
    },
    19: {
      name: 'サラリー猫 · ターミナルデスクトップペット',
      overview: 'GIF アニメを ASCII/ハーフブロック文字でコマンドライン端末にリアルタイム描画する軽量なデスクトップペットです。cat.gif をループ再生して猫アニメを表示し、music.mp3 を BGM として再生可能。多彩なパラメータ（--fps、--scale、--margin-rows、--smooth、--half-block）に対応し、PyInstaller で単体 exe に梱包できます。コーディング教材動画の収録用にコードタイプライターツールも同梱します。',
      features: ['ターミナル GIF アニメ描画', '猫のループアニメ', 'BGM 再生', '多彩なパラメータ調整', 'クロスプラットフォーム（Win/Mac/Linux）', 'PyInstaller で exe 梱包', 'コードタイプライター収録ツール']
    },
    20: {
      name: '党務記事クローラーシステム',
      overview: 'CPC News サイトから党規約など規範文書を収集する専用の指向型 Web クローラーです。党章・準則・条例・規則・規定・弁法・細則など全階層をカバー。初期の XPath デバッグから半自動クロール、最終的なバッチ自動クロールと PDF 生成まで複数バージョンで反復しました。',
      features: ['指向型サイトクロール', 'XPath 精密指定', 'HTML から PDF 変換', 'バッチ自動化', 'クロールレポート生成', 'マルチバージョン反復']
    },
    21: {
      name: 'Yueqian OpenCV 学習コレクション',
      overview: 'Yueqian 組込み研修中の OpenCV 学習演習集です。動画読み込み（ローカルファイル/カメラ）、顔検出（Haar Cascade）、目検出、ナンバープレート検出・認識、OCR 文字認識（pytesseract）などのコンピュータビジョン基礎事例を含み、後の高度なマシンビジョンの土台を築きます。',
      features: ['ローカル動画/カメラ読み込み', 'Haar Cascade 顔/目検出', 'ナンバープレート検出・認識', 'OCR 文字認識', '基礎画像処理']
    }
  }
  ,
  ko: {
    1: {
      name: '핑루 운하 · 세기의 대공사 디지털 내러티브',
      overview: '핑루 운하 디지털 내러티브 웹사이트는 멀티미디어 전시, 인터랙티브 체험, 정보 전달을 하나로 통합한 종합 디지털 전시 플랫폼입니다. "디지털 스토리텔링" 개념을 채택하여 운하의 역사적 배경, 건설 과정, 공학적 특징, 미래 비전을 웹 기술로 예술적으로 표현하고 몰입형 지식 체험을 구축합니다.',
      background: '핑루 운하는 신중국 성립 이래 최초로 강과 바다를 잇는 운하 공사로, 총 길이 약 134.2km, 총 투자 약 727억 위안입니다. 이 세기의 대공사의 의의를 대중에게 전달하기 위해 본 프로젝트는 디지털 내러티브 기술로 무미건조한 공학 데이터를 생생한 시각 경험으로 전환합니다. 백엔드 서버가 필요 없는 순수 프런트엔드 구현으로 배포와 공유가 용이합니다.',
      features: [
        '몰입형 스크롤 내러티브: 스크롤 시 애니메이션 시퀀스를 트리거하여 운하 이야기를 전달',
        'Three.js 3D 파티클 터널 배경: 동적 파티클 시스템으로 물의 흐름을 재현해 몰입감 강화',
        'GSAP ScrollTrigger 구동: 고성능 스크롤 애니메이션으로 각 요소의 등장 타이밍을 정밀 제어',
        '멀티 페이지 구조: 홈(개요), 상세(공학 데이터), 운하의 기억(타임라인), 물가 메시지(상호작용)',
        '반응형 디자인: PC·태블릿·모바일 세 가지 크기에 대응',
        '중국어 타이포그래피 최적화: Noto Serif SC 세리프체로 조판미 향상',
        'Font Awesome 6 아이콘 시스템: 통일된 비주얼 언어',
        '백엔드 비의존: 순수 정적 HTML로 어떤 웹 서버나 GitHub Pages에도 배포 가능'
      ],
      innovation: [
        '디지털 내러티브 패러다임: 전통 전시를 몰입형 웹 경험으로 전환해 전달 비용 절감',
        '3D 파티클 물 흐름 시뮬레이션: Three.js로 브라우저에서 저부하 물 효과 구현',
        '스크롤 구동 애니메이션 편성: GSAP ScrollTrigger로 스크롤과 프레임을 정밀 연동',
        '중국어 웹 조판의 공학적 실천: 굵기·행간·자간의 정밀 조정'
      ]
    },
    2: {
      name: '번호판 인식 시스템 v8.1 · 다중 방법 비교',
      overview: '본 프로젝트는 이미지 전처리, 문자 분할, 문자 인식까지 전 과정을 아우르는 교육·실습용 완전한 번호판 인식 시스템을 구축합니다. CNN 딥러닝, SVM 머신러닝, EasyOCR 세 가지 방법을 통합하고 직관적인 비교 평가로 각 기술 노선의 장단점을 이해할 수 있습니다. Tkinter GUI는 "초보자도 조작 가능"을 설계 원칙으로 합니다.',
      background: '번호판 인식(LPR)은 지능형 교통 시스템의 핵심 기술 중 하나입니다. 본 프로젝트는 교육·실습 관점에서 완전한 LPR 시스템을 설계했습니다: 사용자는 GUI로 데이터 합성, 이미지 처리, 모델 학습, 예측, 성능 평가의 전 과정을 조작할 수 있습니다. 파란색·노란색 번호판을 지원하며 색상 특징 인식 정확도는 90% 이상입니다.',
      features: [
        '세 가지 방법 비교: CNN·SVM·EasyOCR의 정확도를 직관적으로 비교',
        '학습 데이터 자동 합성: 내장 문자 생성기로 외부 데이터셋 없이 학습',
        '실제 번호판 주석 도구: 수동 주석 UI로 실제 번호판 문자를 수집·라벨링',
        '완전 시각화 흐름: 각 처리 결과를 실시간 표시(그레이스케일→이진화→위치 확정→분할→인식)',
        '성능 평가 보고서: 정확도와 혼동 행렬을 포함한 보고서 자동 생성',
        '템플릿 매칭: SIFT 특징 매칭 도구(txpp.py)로 큰 이미지 속 작은 이미지 탐지',
        'GUI 전 과정 안내: 버튼식 조작으로 진입 장벽 완화',
        '한중 상세 주석: 학습과 2차 개발에 적합한 자세한 코드 주석'
      ],
      innovation: [
        '세 방법 비교 프레임워크: 완전히 다른 세 노선(CNN·SVM·EasyOCR)을 한 시스템에 통합해 정량 비교',
        '외부 데이터 비의존: 내장 합성 데이터 생성기로 외부 데이터셋 없이 전체 학습 완료',
        'GUI 전 과정 캡슐화: 복잡한 데이터 처리·학습·평가를 버튼식 조작으로 통합',
        '색상 특징 위치 확정: 파란/노란 번호판의 색공간 분석으로 특정 장면에서 기존 엣지 검출보다 견고'
      ]
    },
    3: {
      name: '리틀 몬스터 헬퍼 · 멀티 에이전트 데스크톱 비서',
      overview: '리틀 몬스터 헬퍼는 Windows 데스크톱용 AI 멀티 에이전트 협업 시스템입니다. 대규모 언어 모델을 핵심으로 LangGraph로 여러 전문 에이전트를 편성해 음성 명령부터 데스크톱 조작까지 엔드투엔드 자동화를 구현합니다. "Hey Jarvis"로 깨우면 자연어로 파일 처리, WeChat 메시지, 시스템 설정 등 복잡한 작업을 수행할 수 있습니다.',
      background: 'LLM의 능력이 향상되면서 AI는 텍스트 대화에 그치지 않고 디지털 세계를 실제로 조작할 수 있게 되었습니다. 본 프로젝트는 데스크톱 OS 수준에서 LLM 에이전트 응용을 탐구합니다: 자연어 명령을 실제 시스템 조작(마우스 클릭, 키보드 입력, 창 전환)으로 변환해 진정한 의미의 "AI가 컴퓨터를 조작"하는 것을 실현합니다.',
      features: [
        '음성 웨이크업: "Hey Jarvis" 키워드 감지로 핸즈프리 조작',
        '멀티 에이전트 협업: LangGraph가 의도 라우팅과 실행 에이전트를 편성',
        '의도 라우팅: Sentence-Transformers 의미 유사도로 명령을 올바른 에이전트로 라우팅',
        'PC 자동화: 마우스 이동/클릭, 키보드 입력, 창 전환/최소화/닫기',
        'WeChat 데스크톱 자동화: 메시지 자동 송수신, 그룹·개인 채팅 지원',
        '시스템 제어: 볼륨, 화면 밝기, 전원 관리',
        '브라우저 자동화: 페이지 열기, 검색, 정보 추출',
        '웹 검색: DuckDuckGo 검색 엔진 통합',
        '감정 분석: 사용자 감정을 분석해 응답 스타일 조정',
        '지식베이스와 장기 기억: 벡터 기반 의미 검색과 대화 이력 영속화',
        '듀얼 LLM 백엔드: 로컬 Ollama(프라이버시 우선)와 클라우드 Groq(성능 우선)'
      ],
      innovation: [
        '멀티 에이전트 구조: 복잡한 작업을 하위 작업으로 분해해 여러 에이전트가 병렬/직렬 실행, 성공률 대폭 향상',
        '데스크톱급 에이전트 구현: 단순 챗봇과 달리 LLM에 실제 OS 조작 능력을 부여',
        '듀얼 모델 핫스왑: 로컬 Ollama와 클라우드 Groq를 무결절 전환해 프라이버시와 성능 양립',
        '의미 기반 의도 라우팅: Sentence-Transformers 벡터 유사도 분류로 키워드 매칭보다 견고',
        'Cloudflare Worker 프록시: 국내에서 Groq API 접근 문제 해결'
      ]
    },
    4: {
      name: 'AI 폰 시뮬레이터 · LookHisPhone',
      overview: '순수 프런트엔드로 구축한 AI 페르소나 시뮬레이터로, iOS 스타일 UI를 채택해 사전 설정된 AI 연인 캐릭터를 여섯 개의 자주 쓰는 앱(WeChat, 음악, 메모, 앨범, 배달, 브라우저)에 삽입합니다. 모든 상호작용은 AI 페르소나를 중심으로 전개되며 SNS 피드, 채팅 기록, 일기, 검색 기록 등으로 완전한 가상 캐릭터 세계관을 구축합니다.',
      background: 'AI 롤플레이(Character.AI 등)는 빠르게 발전했지만 대부분 텍스트 대화에 머뭅니다. 본 프로젝트는 AI 캐릭터를 더 풍부한 디지털 생활 장면에 삽입하고 사실적인 폰 UI와 다양한 앱 상호작용으로 몰입감과 현실감을 높입니다.',
      features: [
        'iOS 스타일 UI: iPhone 홈 배치, 상태 표시줄, 아이콘 스타일을 정밀 재현',
        'WeChat 시뮬레이션: 고정 대화 스크립트 + SNS 좋아요/댓글 양방향',
        'NetEase 클라우드 뮤직: 여러 곡 재생 + 커플 "함께 듣기" 모드',
        '두 구역 메모: "밝은 면"과 "어두운 면" 일기 구역으로 캐릭터의 다면성 표현',
        '앨범 탐색: 사전 설정 사진 모음',
        'Meituan 배달: 주문 흐름 시뮬레이션',
        '브라우저: 사전 설정 검색 기록으로 캐릭터 관심사 암시',
        '사용자 지정 배경: 배경화면 변경 지원'
      ],
      innovation: [
        '멀티 앱 장면 융합: 단일 채팅 화면이 아닌 여러 일상 앱에 AI 캐릭터를 삽입해 현실감 강화',
        '암시적 내러티브 기법: SNS·검색 기록·주문 내역 등 간접 정보로 캐릭터의 "디지털 발자취" 구축',
        '순수 프런트엔드 무의존: 프레임워크나 백엔드 없이 단일 HTML로 실행',
        'UI 디테일 재현: iOS 상호작용(탄성 스크롤, 탭 피드백, 전환)의 정밀 재현'
      ]
    },
    5: {
      name: 'EchoType · 로그라이크 영어 학습',
      overview: 'EchoType은 로그라이크의 핵심 루프(도전→성장→재도전)를 학습 과정과 깊이 융합하는 것을 핵심 이념으로 하는 혁신적 영어 학습 도구입니다. 단어 학습으로 "경험치"를 쌓고 문장 필사로 "스킬 레벨"을 올린 뒤 던전 시스템에서 무작위 생성 학습 스테이지에 도전해 "학습 입력→게임 출력→피드백"의 선순환을 형성합니다.',
      background: '영어 학습의 가장 큰 고충 중 하나는 "즉각적 피드백과 성취감 부족"입니다. 기존 단어 앱은 단조로워 학습 동기를 유지하기 어렵습니다. EchoType은 로그라이크의 무작위성·성장성·도전성을 빌려 지루한 학습을 재미있는 경험으로 바꿉니다.',
      features: [
        '다단계 단어장 내장: CET-4/6, 대학원, TOEFL, IELTS, GRE 등 주요 시험 어휘',
        '문장 필사: PDF/Word 업로드 후 원문을 한 글자씩 필사, 실시간 정오 피드백',
        '받아쓰기 훈련: 음성 재생+타이핑으로 듣기와 철자 강화',
        '로그라이크 던전: 무작위 생성 방(스테이지)을 통과해 무작위 보상(새 단어장/강화 아이템) 획득',
        '성장 시스템: 경험치·레벨·돌파점을 시각화해 학습 진척 제시',
        '데일리 뉴스 던전: 매일 갱신되는 뉴스 기사 챌린지로 신선함 유지',
        'PWA 오프라인 지원: Service Worker 캐시로 네트워크 없이 학습 가능',
        '타이핑 속도 추적: WPM 추이 기록'
      ],
      innovation: [
        '로그라이크×교육: 로그라이크 메커니즘을 언어 학습에 체계적으로 적용한 최초 시도',
        '학습-게임 루프: "학습 입력→게임 출력→긍정 피드백"의 자기 구동 폐루프 구축',
        '서버리스 저장: 모든 사용자 데이터를 브라우저 IndexedDB에 저장해 프라이버시 보호',
        '타이핑이 곧 학습: 타이핑 속도 훈련과 어휘 기억을 유기적으로 결합해 이중 효과'
      ]
    },
    6: {
      name: 'Film Genome System · 영상 게놈',
      overview: 'Film Genome System은 "검색 증강 창작"(Retrieval-Augmented Creation, RAC)이라는 새로운 패러다임을 제시합니다. 대량의 영상 클립을 자동 분석해 시각·오디오·서사·전환 네 차원의 "창작 유전자"를 추출하여 Qdrant 벡터 DB에 저장합니다. 생성 단계에서는 요구에 따라 가장 관련 있는 유전자를 검색해 LLM의 대본·스토리보드 생성을 안내하고, 최종적으로 FFmpeg로 30~60초 AI 단편을 합성합니다.',
      background: '기존 AI 영상 생성(Sora, Runway 등)은 엔드투엔드 모델에 의존하며 영상 창작 규칙을 명시적으로 모델링하지 않습니다. 본 프로젝트는 실제 영상 제작 워크플로에서 출발해 "참조 소재→분석→창작"의 전문 프로세스를 디지털화하여, 먼저 기존 작품을 이해하고 그 이해에 기반해 창작하는 새로운 방법론을 제시합니다.',
      features: [
        '4차원 창작 유전자 추출: 시각 DNA(장면/색채/구도), 오디오 DNA(대사/효과음/음악), 서사 DNA(구조/리듬/감정), 전환 DNA(유형/길이/효과)',
        'Qdrant 벡터 검색: 의미 유사도 기반 유전자 검색으로 "유사 샷 찾기", "유사 전환 찾기" 등 쿼리 지원',
        'Sound Score 5계층 사운드 설계: Dialogue / Performance / Foley / Ambience / Score를 각 계층 독립 제어',
        '모델 무관 스케줄링: 분석 계층과 생성 계층을 분리해 LLM·TTS 모델을 유연하게 교체',
        'Docker 컨테이너 배포: docker-compose로 API + PostgreSQL + Qdrant를 한 번에 기동',
        'CLI 도구: fgs 명령으로 스크립트화된 영상 분석 조작',
        'FastAPI REST 인터페이스: 표준화 API로 프런트 연동과 서드파티 통합 용이'
      ],
      innovation: [
        '검색 증강 창작(RAC): RAG 사상을 영상 창작에 처음 적용해 기존 작품으로 새 창작을 안내',
        '4차원 유전자 모델: 시각/오디오/서사/전환 4차원으로 영상을 체계적으로 기술해 단일 태그 분류를 초월',
        '5계층 사운드 설계: 영상 사운드를 5개 독립 제어 계층으로 나눠 AI 생성 사운드를 정밀 제어',
        '모델 무관 구조: 분석 계층과 실행 계층을 분리해 독립 업그레이드 가능, 유지보수성과 확장성 향상'
      ]
    },
    7: {
      name: 'Doit · 다중 역할 작업 관리 시스템',
      overview: 'Doit은 다중 시나리오 개인 작업 관리를 위한 풀스택 웹 앱입니다. 기존 Todo와 달리 "역할 모드" 개념을 도입했습니다: 학생 모드에는 시간표 관리, 점장 모드에는 매장·재고 관리, 메이크업 아티스트 모드에는 예약 일정 관리 등이 있습니다. 역할 전환으로 동일 시스템이 완전히 다른 시나리오에 적응합니다. 뽀모도로 타이머, 캘린더 뷰(월/주/일), 통계 대시보드도 포함합니다.',
      background: '시중의 작업 관리 도구는 "천편일률적"이라 직업과 신분별 차별화된 요구를 충족하지 못합니다. Doit은 "역할 모드"로 이를 해결합니다 — 각 역할에 서로 다른 작업 분류, 레이아웃, 기능 모듈을 미리 설정해 역할 전환이 곧 전체 워크플로 전환입니다.',
      features: [
        '다중 역할 모드: 학생(시간표+과제), 점장(매장/직원/재고), 메이크업(예약), 개발자(스니펫 관리), 자습(집중 타이머)',
        '오늘의 할 일: CRUD, 드래그 정렬, 우선순위 태그, 마감 알림',
        '인박스: 아이디어를 빠르게 기록하고 원클릭으로 정식 작업화',
        '캘린더 뷰: 월/주/일로 작업 시간 분포를 시각화',
        '뽀모도로: 25분 집중+5분 휴식의 고전 타이머',
        '통계: 완료 추세 선 그래프, 분류 원 그래프, 시간 히트맵',
        '클라우드 동기화: Supabase 기반으로 다기기 무결절 전환',
        'PWA 오프라인: Service Worker 캐시로 오프라인에서도 사용'
      ],
      innovation: [
        '역할 모드 설계: 동일 시스템이 역할 전환으로 완전히 다른 사용자층과 워크플로에 적응',
        '풀스택 통일 TypeScript: Vue3 TS 프런트 + Python 타입 백의 하이브리드 타입 안전',
        '점진적 데이터 동기화: 로컬 IndexedDB + 원격 Supabase 이중 저장, 로컬 우선+백그라운드 비동기 동기화'
      ]
    },
    8: {
      name: 'BGF · 태양광 패널 결함 지능형 검출 플랫폼',
      overview: 'BGF는 대형 태양광 발전소를 위한 스마트 점검 전 과정 SaaS 플랫폼입니다. 드론으로 패널의 적외선 열화상과 가시광 이미지를 수집하고 YOLO 딥러닝 모델로 핫스팟, 균열, 이물 가림 등 10종 결함을 자동 검출합니다. 결과를 Cesium 3D GIS 지도상의 각 패널 위치에 연결해 결함 작업지시를 생성하고 폐루프 시스템으로 처리 과정을 추적합니다. iSolarCloud 발전 데이터도 통합해 발전 효율과 설비 건전성의 상관 분석을 수행합니다.',
      background: '대형 발전소는 보통 수천 무에 달하며 수십만 장의 패널을 포함합니다. 수동 점검은 매우 비효율적이고 내부 결함을 찾기 어렵습니다. BGF는 "드론 점검 + AI 검출 + GIS 측위 + 작업지시 폐루프" 노선으로 운영 효율을 수십 배 높입니다. 프로젝트는 92% 테스트 커버리지를 달성하고 GitHub Actions로 CI/CD를 자동화했습니다.',
      features: [
        'YOLO 다중 버전 지원: YOLOv8/v11/v12를 유연하게 전환',
        '10종 결함 검출: 핫스팟, 균열, 이물 가림, 그리드 단선, 다이오드 고장, 정션박스 이상, 유리 파손, 오염, EVA 변색 등',
        '적외선+가시광 이중 연동: 적외선으로 온도 이상, 가시광으로 표면 결함 확인, 이중 확인으로 오탐 감소',
        'Cesium 3D GIS: 3D 지도에 각 패널 위치와 검출 결과 표시',
        '드론 항로 관리: 점검 항로 계획과 비행 궤적 기록',
        '결함 작업지시 폐루프: 자동 발견→수동 확인→수리 배정→피드백→검수 종료',
        'iSolarCloud 데이터 수집: iSolarCloud에서 실시간 발전 데이터 취득',
        'AI 보조 분석 보고서: Qwen-VL 멀티모달로 검출 분석 보고서 자동 생성',
        '대형 화면 시각화: 발전소 개요·결함 통계·발전 데이터 실시간 표시',
        '92% 테스트 커버리지: pytest + Vitest 이중 테스트와 GitHub Actions CI/CD'
      ],
      innovation: [
        '이중 광 연동 검출: 적외선 온도 이상과 가시광 표면 결함을 공간 정합해 상관 분석, 오탐률 대폭 감소',
        'GIS+AI 융합: AI 결과를 3D GIS 좌표에 정밀 매핑해 "검출→측위→배정"의 공간적 폐루프 실현',
        '다중 YOLO 지원: 동일 플랫폼에서 YOLOv8/v11/v12를 정확도/속도에 따라 선택',
        '시계열 분석: TimescaleDB에 발전 데이터를 저장해 결함과 발전 효율의 시계열 상관 분석'
      ]
    },
    9: {
      name: 'LawLink · 법률 서비스 플랫폼',
      overview: 'LawLink는 Streamlit 프레임워크로 구축한 법률 서비스 플랫폼으로, Complete.dev 해커톤을 위해 개발되었습니다. 5개의 전용 AI 에이전트가 사건 초기 정리, 변호사 스마트 매칭, 자료 준비 안내, 사건 브리핑 생성, 데이터 분석을 담당해 상담부터 사건 처리까지 완전한 AI 보조 법률 서비스 폐루프를 형성합니다.',
      background: '법률 서비스 업계에는 "변호사 찾기 어려움, 상담 비쌈, 절차 복잡"이라는 오랜 고충이 있습니다. LawLink는 AI 에이전트 협업으로 이용 장벽을 낮춥니다: 사용자가 자연어로 문제를 설명하면 AI가 사건을 정리하고 적합한 변호사를 매칭하며 자료 준비를 안내하고 전문적인 사건 브리핑을 생성합니다.',
      features: [
        '5 AI 에이전트 협업: Intake(사건 정리) → Matching(변호사 매칭) → Preparation(자료 준비) → Brief(사건 브리핑) → Insights(데이터 분석)',
        '3자 역할 분리: 일반 사용자(상담/매칭), 변호사(대시보드/예약 관리), 관리자(개요/AI 관리)',
        '스마트 변호사 매칭: AI가 사건 유형과 복잡도를 분석해 최적의 변호사 추천',
        '사건 브리핑 자동 생성: AI가 사건 사실과 증거 자료를 정리해 구조화 브리핑 생성',
        '수수료 단계화: 수임량에 따라 10%~20% 계단식 수수료로 수임 독려',
        '이중 언어: UI와 AI 답변이 한중 지원',
        '에스크로 결제 시스템: 플랫폼이 변호사 비용을 예치하고 사건 완료 후 해제'
      ],
      innovation: [
        '멀티 에이전트 파이프라인: 5개 에이전트가 법률 서비스 라인을 형성해 분업과 협업 병행',
        'Streamlit 신속 프로토타이핑: 해커톤 시간 제한 내에 완전한 다중 역할 SaaS 구현',
        'AI 구동 변호사 매칭: 기존 분야 분류가 아닌 의미 분석으로 사건-사람 매칭'
      ]
    },
    10: {
      name: '콘크리트 가디언 · 콘크리트 균열 검출',
      overview: '토목 인프라 검사를 위한 AI 시스템으로, 개선된 YOLOv8 모델로 콘크리트 표면의 균열을 자동 검출·분할·정량 측정합니다. 검출(detect)과 분할(segment) 두 모드를 지원하며 균열 길이 측정, 색상 특징 분석, 손상 면적 비율 계산이 가능하고 도표와 결론을 포함한 PDF/Word 보고서를 자동 생성합니다. 챌린지컵 출품작이며 완전한 사업계획서를 포함합니다.',
      features: ['개선 YOLOv8: 균열 검출 장면에 최적화한 객체 검출 모델', '균열 길이 측정: 픽셀 거리→실제 치수 자동 환산', '색상 분석: HSV 공간에서 균열 영역 색상 특징 분석', 'PDF/Word 보고서 자동 생성', '카메라 실시간 검출 모드', '비교 데이터 분석', '챌린지컵 완전 신청 자료: 사업계획서+피칭 PPT+신규성 조사'],
      innovation: ['검출+분할 이중 모드', '균열 길이 자동 환산', '검출→평가→보고서 전 과정 자동화']
    },
    11: {
      name: '아보카도 성숙도 검출 · HSI',
      overview: '초분광 이미징으로 아보카도를 비파괴 성숙도 검출하는 딥러닝 연구 프로젝트입니다. 초분광 이미지에서 분광 특징을 추출해 SE(Squeeze-and-Excitation) 어텐션이 있는 CNN에 입력하여 미숙/성숙/과숙 3분류를 수행합니다. 멀티뷰 융합으로 샘플 단위 95% 정확도를 과실 단위 98%로 향상했습니다. 소거 실험, 다중 시드 검증, Grad-CAM 히트맵, EMA 최적화 등 완전한 연구 설계를 포함합니다.',
      features: ['초분광 이미지 분광 특징 추출', 'SE 어텐션 CNN', '3분류(미숙/성숙/과숙)', '샘플 단위 95%, 과실 단위 98%', 'Grad-CAM 히트맵', '멀티뷰 융합', 'EMA 최적화', 'Warmup+CosineAnnealing', '소거 실험+다중 시드 검증'],
      innovation: ['멀티뷰 융합으로 과실 단위 정확도 향상', '초분광 장면에서 SE 어텐션 적용 검증', '완전한 연구 방법론: 소거+다중 시드+Grad-CAM']
    },
    12: {
      name: 'LabMate · 실험 파트너',
      overview: '화학 전공 학생과 연구자를 위한 실험 데이터 관리 플랫폼입니다. 실험 생성, 데이터 입력, 분석, 보고서 생성까지 전 생애주기를 아우릅니다. 수동 입력과 OCR 촬영 인식 두 방식을 지원하며 통계 분석(이상치 검출, 곡선 피팅)과 6종 화학 계산기(몰 질량, 용액 조제, pH 계산, 적정 분석 등)를 내장합니다. 6종 테마와 다크 모드를 제공합니다.',
      features: ['실험 전 생애주기 관리', 'OCR 촬영 데이터 입력', '통계 분석: 이상치 검출+곡선 피팅', 'HTML/JSON 보고서 내보내기', '6종 화학 계산기', 'JWT 인증', '6종 테마+다크 모드']
    },
    13: {
      name: 'Qwen Agent · 로컬 AI 비서',
      overview: '완전히 로컬로 실행되는 AI 채팅 에이전트로, Ollama로 통이첸원 Qwen2.5:7b 모델을 실행하며 클라우드 API에 의존하지 않습니다(웹 검색 도구 제외). 계산기, 시간·날짜 조회, DuckDuckGo 웹 검색 세 가지 도구 호출을 지원합니다. Flask가 경량 웹 채팅 UI를 제공하고 agent_core.py가 Ollama API 연동과 도구 호출 로직을 캡슐화합니다.',
      features: ['로컬 LLM 실행(Ollama+Qwen2.5:7b)', '세 가지 도구 호출', '멀티턴 대화 기억', 'Flask 웹 채팅 UI', '검색 외 완전 오프라인'],
      innovation: ['로컬 에이전트 도구 호출', '클라우드 API 불필요, 프라이버시 안전']
    },
    14: {
      name: 'Coze · 당무 지능형 Q&A 플랫폼',
      overview: 'Coze(바이트댄스 AI 대화 엔진)로 구축한 당무 지식 지능형 Q&A 시스템입니다. Server-Sent Events(SSE)로 타자기식 스트리밍 출력을 구현해 경험을 향상합니다. 기본 이론, 조직 건설, 청렴 건설, 당원 권리·의무 등 지식 분류 내비게이션을 내장하고 멀티턴 기억과 대화 이력 관리를 지원합니다.',
      features: ['Coze AI 지능형 Q&A', 'SSE 스트리밍 응답', '멀티턴 대화', '당무 지식 분류 내비게이션', '대화 새로 만들기/전환']
    },
    15: {
      name: '임베디드 AI · 제스처 인식',
      overview: '임베디드 ARM 플랫폼을 위한 AI 애플리케이션 개발 실습 프로젝트입니다. Google MediaPipe를 RK3568 보드에서 사용해 실시간 제스처 키포인트 검출을 구현하고 한 손 21개 키포인트의 3D 좌표를 인식합니다. 완전한 환경 구축 가이드(MediaPipe 특정 버전 호환성 처리)와 OpenCV 기초 사례 모음을 포함합니다.',
      features: ['MediaPipe 실시간 제스처 검출', '21개 키포인트 좌표 취득', 'RK3568 임베디드 배포', '완전한 환경 구축 튜토리얼', 'OpenCV 기초 사례 모음']
    },
    16: {
      name: '하나비 서재 · PWA 지식베이스',
      overview: '학습 노트를 "마법서" 개념으로 포장한 프로그레시브 웹 앱(PWA)입니다. 책장 내비게이션이 다중 주제 튜토리얼(자료구조, NLP, Django, Python, SQL, HTML 등)을 표시하고 PDF 리더와 개인 작품 전시를 갖춥니다. Service Worker 오프라인 캐시로 네트워크 없이도 접근 가능합니다.',
      features: ['다중 주제 "마법서" 튜토리얼', '책장식 UI 내비게이션', 'PDF 리더', 'PWA 오프라인 접근', 'Service Worker 자동 캐시', '개인 작품 전시']
    },
    17: {
      name: 'Workspace · GrapesJS 에디터',
      overview: 'Django 백엔드와 GrapesJS 프런트 시각 에디터를 통합한 풀스택 Workspace 플랫폼입니다. 드래그 앤 드롭으로 웹 콘텐츠(제목/텍스트/코드 블록/이미지/구분선 등)를 구성하고 에디터의 JSON 출력을 렌더링 가능한 HTML로 변환합니다. 프로젝트, 이미지 소재, 텍스트 소재, 소감 노트 관리도 지원합니다.',
      features: ['GrapesJS 드래그 앤 드롭 웹 에디터', '프로젝트 관리 CRUD', '이미지/텍스트/노트 소재 관리', '사용자 인증 시스템', 'blocks_to_html 사용자 지정 렌더링 엔진', '중국어 UI(zh-hans)']
    },
    18: {
      name: 'Showcase · 프로젝트 관리 플랫폼',
      overview: '경량 풀스택 프로젝트 전시 관리 플랫폼입니다. 백엔드는 Express.js로 REST API(프로젝트/이미지/텍스트/노트 CRUD)를 제공하고, 프런트는 단일 파일 SPA(인라인 CSS+JS 1198줄)로 관리자 패널과 공개 열람 두 모드를 갖춥니다. 파일 업로드는 Multer로 처리하고 데이터는 JSON 파일로 저장해 데이터베이스가 필요 없습니다. HTML 템플릿의 미리보기 호스팅을 지원합니다.',
      features: ['프로젝트 CRUD+썸네일 업로드', '이미지/텍스트/노트 소재 관리', '관리자 토큰 인증', 'iframe 미리보기 호스팅', 'Lightbox 이미지 보기', '반응형 타임라인/그리드 뷰']
    },
    19: {
      name: '월급 냥이 · 터미널 데스크톱 펫',
      overview: 'GIF 애니메이션을 ASCII/하프 블록 문자로 명령줄 터미널에 실시간 렌더링하는 경량 데스크톱 펫입니다. cat.gif를 반복 재생해 고양이 애니메이션을 표시하고 music.mp3를 배경음악으로 재생할 수 있습니다. 다양한 파라미터(--fps, --scale, --margin-rows, --smooth, --half-block)를 지원하며 PyInstaller로 독립 exe로 패키징할 수 있습니다. 코딩 교육 영상 녹화용 코드 타자기 도구도 함께 제공합니다.',
      features: ['터미널 GIF 애니메이션 렌더링', '고양이 반복 애니메이션', '배경음악 재생', '다중 파라미터 조절', '크로스 플랫폼(Win/Mac/Linux)', 'PyInstaller exe 패키징', '코드 타자기 녹화 도구']
    },
    20: {
      name: '당무 기사 크롤러 시스템',
      overview: 'CPC News 사이트에서 당규·당장 등 규범 문서를 수집하는 전용 지향형 웹 크롤러 프로젝트입니다. 당장, 준칙, 조례, 규칙, 규정, 방법, 세칙 등 전 계층을 아우릅니다. 초기 XPath 디버깅에서 반자동 크롤링, 최종 배치 자동 크롤링과 PDF 생성까지 여러 버전으로 반복했습니다.',
      features: ['지향형 사이트 크롤링', 'XPath 정밀 타깃팅', 'HTML을 PDF로 변환', '배치 자동화', '크롤링 보고서 생성', '다중 버전 반복']
    },
    21: {
      name: 'Yueqian OpenCV 학습 모음',
      overview: 'Yueqian 임베디드 교육 기간의 OpenCV 학습 연습 모음입니다. 영상 읽기(로컬 파일/카메라), 얼굴 검출(Haar Cascade), 눈 검출, 번호판 검출·인식, OCR 문자 인식(pytesseract) 등 컴퓨터 비전 기초 사례를 포함하여 이후 고급 머신 비전 프로젝트의 토대를 마련합니다.',
      features: ['로컬 영상/카메라 읽기', 'Haar Cascade 얼굴/눈 검출', '번호판 검출·인식', 'OCR 문자 인식', '기초 이미지 처리']
    }
  }
  ,
  it: {
    1: {
      name: 'Canale di Pinglu · Narrazione Digitale di un\'Opera del Secolo',
      overview: 'Il sito di narrazione digitale del Canale di Pinglu è una piattaforma espositiva digitale completa che integra display multimediale, esperienza interattiva e divulgazione. Adottando il concetto di "Digital Storytelling", presenta artisticamente storia, percorso costruttivo, caratteristiche ingegneristiche e visione futura del canale tramite tecnologie web, creando un\'esperienza di conoscenza immersiva.',
      background: 'Il Canale di Pinglu è la prima opera che collega fiume e mare dalla fondazione della Nuova Cina, lungo circa 134,2 km con un investimento totale di circa 72,7 miliardi di RMB. Per aiutare il pubblico a comprenderne il significato, il progetto usa la narrazione digitale per trasformare aridi dati ingegneristici in vivide esperienze visive. Il sito non richiede backend ed è puro frontend, facile da distribuire e condividere.',
      features: [
        'Narrazione a scorrimento immersiva: lo scroll attiva sequenze animate che raccontano la storia del canale',
        'Sfondo a tunnel di particelle 3D con Three.js: un sistema di particelle dinamiche simula il flusso d\'acqua per maggiore immersione',
        'Guidato da GSAP ScrollTrigger: animazioni ad alte prestazioni con tempi d\'ingresso precisi per ogni elemento',
        'Struttura multi-pagina: Home (panoramica), Dettagli (dati ingegneristici), Memoria del Canale (timeline), Messaggi sul lungofiume (interazione)',
        'Design responsivo: si adatta a PC, tablet e mobile',
        'Ottimizzazione tipografica cinese: font serif Noto Serif SC per un\'impaginazione più elegante',
        'Sistema di icone Font Awesome 6: un linguaggio visivo unificato',
        'Nessuna dipendenza dal backend: HTML statico puro, distribuibile su qualsiasi web server o GitHub Pages'
      ],
      innovation: [
        'Paradigma di narrazione digitale: trasformare una mostra tradizionale in un\'esperienza web immersiva a basso costo',
        'Simulazione di acqua a particelle 3D: effetti d\'acqua a basso costo nel browser con Three.js',
        'Coreografia di animazioni guidate dallo scroll: binding preciso tra scroll e fotogrammi con GSAP ScrollTrigger',
        'Ingegnerizzazione della tipografia web cinese: messa a punto di peso, interlinea e spaziatura'
      ]
    },
    2: {
      name: 'Sistema di Riconoscimento Targhe v8.1 · Confronto Multi-Metodo',
      overview: 'Il progetto costruisce un sistema completo di riconoscimento targhe per didattica e pratica, coprendo l\'intera pipeline dal preprocessing dell\'immagine alla segmentazione e al riconoscimento dei caratteri. Integra in modo innovativo tre metodi — deep learning CNN, machine learning SVM ed EasyOCR — con una valutazione comparativa intuitiva. Una GUI Tkinter segue il principio "utilizzabile senza conoscenze pregresse".',
      background: 'Il riconoscimento targhe (LPR) è una tecnologia chiave dei sistemi di trasporto intelligenti. Da una prospettiva didattica e pratica, il progetto progetta un sistema LPR completo: l\'utente può gestire tramite GUI l\'intero flusso di sintesi dati, elaborazione immagini, addestramento, predizione e valutazione. Supporta targhe blu e gialle, con accuratezza di riconoscimento del colore superiore al 90%.',
      features: [
        'Confronto tra tre metodi: CNN, SVM ed EasyOCR con confronto intuitivo dell\'accuratezza',
        'Dati di addestramento auto-sintetizzati: un generatore di caratteri integrato addestra senza dataset esterni',
        'Strumento di annotazione targhe reali: un annotatore manuale raccoglie ed etichetta caratteri di targhe reali',
        'Pipeline completamente visualizzata: ogni passo mostra i risultati in tempo reale (scala di grigi → binarizzazione → localizzazione → segmentazione → riconoscimento)',
        'Report di valutazione: report auto-generato con accuratezza e matrice di confusione',
        'Template matching: uno strumento aggiuntivo SIFT (txpp.py) localizza un\'immagine piccola in una grande',
        'Flusso guidato da GUI: operazioni a pulsanti che abbassano la barriera d\'ingresso',
        'Commenti bilingue dettagliati: commenti al codice accurati, ideali per apprendimento ed estensione'
      ],
      innovation: [
        'Framework di confronto a tre metodi: integrazione di tre percorsi tecnici completamente diversi (CNN, SVM, EasyOCR) con confronto quantitativo dell\'accuratezza',
        'Zero dipendenza da dati esterni: un generatore di dati sintetici integrato completa l\'addestramento senza alcun dataset esterno',
        'Incapsulamento completo in GUI: elaborazione dati, addestramento e valutazione racchiusi in operazioni a pulsanti',
        'Localizzazione basata sul colore: analisi dello spazio colore per targhe blu/gialle, più robusta del rilevamento dei bordi in scene specifiche'
      ]
    },
    3: {
      name: 'Little Monster Helper · Assistente Desktop Multi-Agente',
      overview: 'Little Monster Helper è un sistema di collaborazione AI multi-agente per desktop Windows. Con un LLM al centro, orchestra vari agenti specializzati tramite LangGraph per un\'automazione end-to-end dal comando vocale all\'azione sul desktop. Basta dire "Hey Jarvis" per attivarlo e controllare il computer in linguaggio naturale per gestire file, messaggi WeChat, impostazioni di sistema e altro.',
      background: 'Con il crescere delle capacità degli LLM, l\'AI non si limita più alla chat testuale ma può operare davvero sul mondo digitale. Il progetto esplora l\'uso di agenti LLM a livello di sistema operativo desktop: tradurre comandi in linguaggio naturale in azioni reali (clic del mouse, input da tastiera, cambio finestra), realizzando un vero "AI che controlla il computer".',
      features: [
        'Attivazione vocale: rilevamento della keyword "Hey Jarvis" per interazione a mani libere',
        'Collaborazione multi-agente: LangGraph orchestra un agente di instradamento dell\'intento e uno di esecuzione',
        'Instradamento dell\'intento: similarità semantica via Sentence-Transformers per indirizzare i comandi all\'agente corretto',
        'Automazione PC: movimento/clic del mouse, input da tastiera, cambio/riduzione/chiusura finestre',
        'Automazione WeChat desktop: invio/lettura automatica di messaggi, chat di gruppo e private',
        'Controllo di sistema: volume, luminosità dello schermo, gestione energia',
        'Automazione del browser: apertura pagine, ricerca, estrazione informazioni',
        'Ricerca web: motore di ricerca DuckDuckGo integrato',
        'Analisi del sentiment: rileva l\'umore dell\'utente e adatta lo stile di risposta',
        'Knowledge base e memoria a lungo termine: recupero semantico vettoriale e cronologia persistente',
        'Doppio backend LLM: Ollama locale (privacy) e Groq cloud (prestazioni)'
      ],
      innovation: [
        'Architettura multi-agente: suddivide compiti complessi in sotto-compiti eseguiti in parallelo/serie da agenti diversi, aumentando il tasso di successo',
        'Agente a livello desktop reale: a differenza di un semplice chatbot, dà all\'LLM il controllo effettivo del sistema operativo',
        'Doppio modello hot-swap: passaggio senza interruzioni tra Ollama locale e Groq cloud, bilanciando privacy e prestazioni',
        'Instradamento semantico dell\'intento: classificazione per similarità vettoriale via Sentence-Transformers, più robusta del matching per keyword',
        'Proxy Cloudflare Worker: risolve l\'accesso all\'API Groq dalla rete locale'
      ]
    },
    4: {
      name: 'Simulatore di Telefono AI · LookHisPhone',
      overview: 'Un simulatore di persona AI puramente frontend con interfaccia in stile iOS, che integra un personaggio-partner AI predefinito in sei app comuni (WeChat, Musica, Note, Foto, Consegne, Browser). Tutte le interazioni ruotano attorno alla persona AI — feed social, cronologia chat, diario e cronologia ricerche — costruendo un mondo virtuale completo.',
      background: 'Il role-play AI (Character.AI, ecc.) è cresciuto rapidamente, ma la maggior parte dei prodotti resta alla chat testuale. Il progetto integra un personaggio AI in scenari di vita digitale più ricchi, usando una UI realistica del telefono e interazioni con varie app per aumentare immersione e realismo.',
      features: [
        'Interfaccia in stile iOS: ricrea fedelmente layout home, barra di stato e stile delle icone dell\'iPhone',
        'Simulazione WeChat: chat con script più like/commenti bidirezionali sul feed social',
        'NetEase Cloud Music: riproduzione multi-brano e modalità coppia "ascolta insieme"',
        'Note a due sezioni: sezioni diario "lato luminoso" e "lato oscuro" che rivelano la personalità multidimensionale',
        'Sfoglio foto: una raccolta di foto predefinita',
        'Consegne Meituan: un flusso d\'ordine simulato',
        'Browser: cronologia ricerche predefinita che suggerisce gli interessi del personaggio',
        'Sfondo personalizzato: wallpaper del telefono modificabile'
      ],
      innovation: [
        'Fusione multi-app: integra il personaggio AI in più app quotidiane invece di una singola chat, aumentando il realismo',
        'Tecnica narrativa implicita: costruisce l\'"impronta digitale" del personaggio tramite indizi indiretti come feed, ricerche e ordini',
        'Frontend puro, zero dipendenze: gira da un singolo file HTML senza framework né backend',
        'Fedeltà nei dettagli UI: ricreazione accurata delle interazioni iOS (scroll elastico, feedback al tap, transizioni)'
      ]
    },
    5: {
      name: 'EchoType · Apprendimento dell\'Inglese Roguelike',
      overview: 'EchoType è uno strumento innovativo per imparare l\'inglese, il cui principio centrale è fondere profondamente il ciclo di gioco Roguelike (sfida → crescita → nuova sfida) con l\'apprendimento. Gli utenti guadagnano "esperienza" studiando parole, aumentano il "livello di abilità" trascrivendo testi, poi affrontano livelli generati casualmente in un sistema dungeon, formando un ciclo positivo di "input → output di gioco → feedback".',
      background: 'Uno dei maggiori problemi nell\'apprendimento dell\'inglese è la mancanza di feedback immediato e di senso di realizzazione. Le app tradizionali di vocabolario sono monotone e difficili da sostenere. EchoType prende in prestito casualità, crescita e sfida dei giochi Roguelike per trasformare lo studio noioso in un\'esperienza divertente.',
      features: [
        'Liste di parole multi-livello integrate: CET-4/6, post-laurea, TOEFL, IELTS, GRE e altri vocabolari d\'esame',
        'Trascrizione di testi: carica PDF/Word e trascrivi il testo parola per parola con feedback in tempo reale',
        'Dettato: riproduzione audio più digitazione per rafforzare ascolto e ortografia',
        'Dungeon roguelike: stanze generate casualmente (livelli) danno ricompense casuali (nuove liste / potenziamenti)',
        'Sistema di crescita: XP, livelli e punti di svolta visualizzati mostrano i progressi',
        'Dungeon di notizie quotidiane: sfide su articoli aggiornati ogni giorno mantengono l\'interesse',
        'Supporto PWA offline: cache Service Worker per studiare senza rete',
        'Tracciamento velocità di digitazione: registra l\'andamento dei WPM'
      ],
      innovation: [
        'Roguelike × educazione: prima applicazione sistematica delle meccaniche roguelike all\'apprendimento linguistico',
        'Ciclo apprendimento-gioco: un ciclo chiuso auto-motivante di "input → output di gioco → feedback positivo"',
        'Archiviazione senza server: tutti i dati utente restano nell\'IndexedDB del browser, proteggendo la privacy',
        'Digitare è imparare: combina l\'allenamento alla digitazione con la memoria lessicale per un doppio beneficio'
      ]
    },
    6: {
      name: 'Film Genome System · Genoma Cinematografico',
      overview: 'Il Film Genome System propone un nuovo paradigma di "Creazione Aumentata dal Recupero" (RAC). Analizza automaticamente grandi volumi di clip, estraendo "geni creativi" su quattro dimensioni — visiva, audio, narrativa e transizione — memorizzandoli in un database vettoriale Qdrant. In fase di generazione recupera i geni più pertinenti per guidare l\'LLM nella scrittura di copioni e storyboard, componendo infine un cortometraggio AI di 30–60s con FFmpeg.',
      background: 'La generazione video AI tradizionale (Sora, Runway) si basa su modelli end-to-end e manca di una modellazione esplicita dei principi cinematografici. Partendo dai reali flussi di produzione, il progetto digitalizza il processo professionale "clip di riferimento → analisi → creazione", offrendo una nuova metodologia — prima comprendere le opere esistenti, poi creare su quella comprensione.',
      features: [
        'Estrazione di geni creativi a quattro dimensioni: DNA visivo (scena/colore/composizione), DNA audio (dialogo/effetti/colonna sonora), DNA narrativo (struttura/ritmo/emozione), DNA di transizione (tipo/durata/effetto)',
        'Recupero vettoriale Qdrant: recupero di geni per similarità semantica con query come "trova inquadrature simili" o "trova transizioni simili"',
        'Design sonoro a cinque livelli Sound Score: Dialogue / Performance / Foley / Ambience / Score, ciascuno controllato indipendentemente',
        'Scheduling agnostico al modello: livelli di analisi e generazione disaccoppiati, con modelli LLM e TTS sostituibili',
        'Deploy con Docker: docker-compose avvia API + PostgreSQL + Qdrant con un comando',
        'Strumento CLI: operazioni di analisi cinematografica via comando fgs',
        'Interfaccia REST FastAPI: API standardizzata per integrazione frontend e di terze parti'
      ],
      innovation: [
        'Creazione Aumentata dal Recupero (RAC): prima applicazione del pensiero RAG al cinema, usando opere esistenti per guidare nuove creazioni',
        'Modello di geni a quattro dimensioni: descrizione sistematica delle clip su visivo/audio/narrativa/transizione, oltre la classificazione a singola etichetta',
        'Design sonoro a cinque livelli: suddivide il suono in 5 livelli controllabili indipendentemente per un controllo fine dell\'audio generato',
        'Architettura agnostica al modello: livelli di analisi ed esecuzione disaccoppiati, aggiornabili in modo indipendente, migliorando manutenibilità ed estensibilità'
      ]
    },
    7: {
      name: 'Doit · Sistema di Gestione Attività Multi-Ruolo',
      overview: 'Doit è un\'app web full-stack per la gestione personale di attività in più scenari. A differenza dei classici to-do, introduce le "modalità ruolo": la modalità Studente ha la gestione dell\'orario, la modalità Gestore Negozio ha negozio e magazzino, la modalità Make-up Artist ha la pianificazione degli appuntamenti, e così via. Cambiando ruolo lo stesso sistema si adatta a scenari totalmente diversi. Include anche un timer Pomodoro, viste calendario (mese/settimana/giorno) e dashboard analitiche.',
      background: 'Gli strumenti di gestione attività sul mercato sono spesso "taglia unica" e non soddisfano le esigenze differenziate di professioni e identità diverse. Doit lo risolve con le "modalità ruolo": ogni ruolo predefinisce categorie, layout e moduli diversi, così cambiare ruolo cambia l\'intero flusso di lavoro.',
      features: [
        'Modalità multi-ruolo: Studente (orario+compiti), Gestore Negozio (negozio/personale/magazzino), Make-up Artist (appuntamenti), Programmatore (gestione snippet), Studio (timer di concentrazione)',
        'Attività di oggi: CRUD, riordino drag-and-drop, tag di priorità, promemoria scadenze',
        'Inbox: cattura rapidamente le idee e trasformale in attività con un clic',
        'Vista calendario: viste mese/settimana/giorno che mostrano la distribuzione temporale',
        'Pomodoro: il classico timer 25 min di focus + 5 min di pausa',
        'Analisi: grafici a linee delle tendenze, torte per categoria, mappe di calore temporali',
        'Sincronizzazione cloud: sync basato su Supabase per un passaggio fluido tra dispositivi',
        'PWA offline: cache Service Worker funzionante senza rete'
      ],
      innovation: [
        'Design a modalità ruolo: un sistema si adatta a pubblici e flussi totalmente diversi tramite il cambio ruolo',
        'TypeScript full-stack unificato: sicurezza dei tipi ibrida tra frontend Vue3 TS e backend tipizzato Python',
        'Sincronizzazione dati progressiva: doppio strato IndexedDB locale + Supabase remoto, priorità al locale con sync asincrono in background'
      ]
    },
    8: {
      name: 'BGF · Piattaforma di Rilevamento Intelligente dei Difetti dei Pannelli FV',
      overview: 'BGF è una piattaforma SaaS end-to-end per l\'ispezione intelligente di grandi impianti solari. I droni catturano immagini termiche a infrarossi e in luce visibile dei pannelli, e un modello YOLO rileva automaticamente 10 tipi di difetti come punti caldi, crepe e ostruzioni. I risultati sono collegati alla posizione specifica di ogni pannello su una mappa GIS 3D Cesium, generando ordini di lavoro tracciati in un ciclo chiuso. Integra anche i dati di produzione iSolarCloud per analisi correlate tra efficienza e salute delle apparecchiature.',
      background: 'I grandi impianti solari coprono spesso migliaia di mu con centinaia di migliaia di pannelli. L\'ispezione manuale è lenta e difficilmente rileva difetti interni. BGF adotta l\'approccio "ispezione con droni + rilevamento AI + localizzazione GIS + ciclo di ordini di lavoro", aumentando l\'efficienza O&M di decine di volte. Il progetto raggiunge il 92% di copertura dei test con CI/CD via GitHub Actions.',
      features: [
        'YOLO multi-versione: supporta YOLOv8/v11/v12 con commutazione flessibile',
        '10 tipi di difetti: punti caldi, crepe, ostruzioni, griglie interrotte, guasti ai diodi, anomalie della junction box, rottura del vetro, macchie, scolorimento EVA e altro',
        'Fusione infrarosso + luce visibile: l\'infrarosso rileva anomalie termiche, la luce visibile conferma i difetti superficiali, la doppia conferma riduce i falsi positivi',
        'GIS 3D Cesium: posizione e risultato di ogni pannello su una mappa 3D',
        'Gestione rotte droni: pianificazione delle rotte e registrazione delle tracce di volo',
        'Ciclo di ordini di lavoro: rilevamento automatico → conferma manuale → invio riparazione → feedback → chiusura con collaudo',
        'Acquisizione dati iSolarCloud: connessione alla piattaforma per dati di produzione in tempo reale',
        'Report di analisi assistiti da AI: report generati automaticamente col modello multimodale Qwen-VL',
        'Visualizzazione su grande schermo: panoramica impianto, statistiche difetti e dati di produzione in tempo reale',
        'Copertura test 92%: doppio test pytest + Vitest con CI/CD GitHub Actions'
      ],
      innovation: [
        'Rilevamento a doppia luce: registrazione spaziale e correlazione tra anomalie termiche a infrarossi e difetti superficiali in luce visibile, riducendo molto i falsi positivi',
        'Fusione GIS + AI: mappatura precisa dei risultati AI su coordinate GIS 3D per un ciclo spaziale "rileva → localizza → invia"',
        'Supporto multi-YOLO: una piattaforma supporta YOLOv8/v11/v12, scegliendo accuratezza/velocità secondo necessità',
        'Analisi delle serie temporali: dati di produzione in TimescaleDB per la correlazione temporale tra difetti ed efficienza'
      ]
    },
    9: {
      name: 'LawLink · Piattaforma di Servizi Legali',
      overview: 'LawLink è una piattaforma di servizi legali costruita con il framework Streamlit, sviluppata per l\'hackathon Complete.dev. Integra cinque agenti AI dedicati che gestiscono l\'acquisizione iniziale del caso, il matching intelligente degli avvocati, la guida alla preparazione dei materiali, la generazione del brief e l\'analisi dati, formando un ciclo completo di servizi legali assistiti dall\'AI dalla consulenza alla gestione del caso.',
      background: 'Il settore legale soffre da tempo di "difficoltà a trovare un avvocato, consulenze costose, procedure complesse". Con la collaborazione tra agenti AI, LawLink abbassa la barriera: l\'utente descrive il problema in linguaggio naturale e l\'AI organizza il caso, abbina avvocati adatti, guida la preparazione dei materiali e genera un brief professionale.',
      features: [
        'Collaborazione a cinque agenti: Intake → Matching → Preparation → Brief → Insights',
        'Tre ruoli separati: cliente (consulenza/matching), avvocato (dashboard/appuntamenti), admin (panoramica/gestione AI)',
        'Matching intelligente degli avvocati: l\'AI analizza tipo e complessità del caso per raccomandare l\'avvocato migliore',
        'Generazione automatica del brief: l\'AI organizza fatti e prove in un brief strutturato',
        'Commissioni a scaglioni: commissione dal 10% al 20% in base al carico di casi per incentivare l\'accettazione',
        'Bilingue: interfaccia e risposte AI in cinese e inglese',
        'Sistema di pagamento in deposito: la piattaforma trattiene le spese legali, rilasciate a caso concluso'
      ],
      innovation: [
        'Pipeline multi-agente: cinque agenti formano una catena di servizi legali, specializzati ma collaborativi',
        'Prototipazione rapida con Streamlit: una piattaforma SaaS multi-ruolo completa realizzata nei limiti di tempo dell\'hackathon',
        'Matching avvocati guidato dall\'AI: abbinamento caso-persona tramite analisi semantica invece della classica classificazione per settore'
      ]
    },
    10: {
      name: 'Concrete Guardian · Rilevamento Crepe nel Calcestruzzo',
      overview: 'Un sistema AI per l\'ispezione di infrastrutture di ingegneria civile che usa un modello YOLOv8 migliorato per rilevare, segmentare e quantificare automaticamente le crepe sulle superfici in calcestruzzo. Supporta le modalità detect e segment, misurando la lunghezza delle crepe, analizzando le caratteristiche cromatiche e calcolando il rapporto di area danneggiata, con generazione automatica di report PDF/Word con grafici e conclusioni. È un progetto per il concorso "Challenge Cup" con business plan completo.',
      features: ['YOLOv8 migliorato: modello di object detection ottimizzato per le crepe', 'Misura della lunghezza delle crepe: conversione automatica pixel → dimensione reale', 'Analisi del colore: analisi delle caratteristiche cromatiche nello spazio HSV', 'Generazione automatica di report PDF/Word', 'Modalità di rilevamento in tempo reale da fotocamera', 'Analisi comparativa dei dati', 'Materiali completi Challenge Cup: business plan + pitch deck + rapporto di novità'],
      innovation: ['Doppia modalità detect + segment', 'Conversione automatica della lunghezza delle crepe', 'Automazione completa della pipeline rileva → valuta → report']
    },
    11: {
      name: 'Rilevamento Maturità Avocado · HSI',
      overview: 'Un progetto di ricerca di deep learning che usa l\'imaging iperspettrale per il rilevamento non distruttivo della maturità degli avocado. Estrae caratteristiche spettrali dalle immagini iperspettrali e le inserisce in una CNN con meccanismo di attenzione SE (Squeeze-and-Excitation) per una classificazione a tre classi (acerbo/maturo/troppo maturo). La fusione multi-vista porta l\'accuratezza per campione dal 95% al 98% a livello di frutto. Include un design di ricerca completo: studi di ablazione, validazione multi-seed, heatmap Grad-CAM e ottimizzazione EMA.',
      features: ['Estrazione di caratteristiche spettrali da immagini iperspettrali', 'CNN con meccanismo di attenzione SE', 'Classificazione a 3 classi (acerbo/maturo/troppo maturo)', '95% per campione, 98% per frutto', 'Heatmap Grad-CAM', 'Fusione multi-vista', 'Ottimizzazione EMA', 'Warmup + CosineAnnealing', 'Studi di ablazione + validazione multi-seed'],
      innovation: ['La fusione multi-vista migliora l\'accuratezza a livello di frutto', 'Validazione dell\'attenzione SE in scenari iperspettrali', 'Una metodologia di ricerca completa: ablazione + multi-seed + Grad-CAM']
    },
    12: {
      name: 'LabMate · Compagno di Laboratorio',
      overview: 'Una piattaforma di gestione dati di laboratorio per studenti e ricercatori di chimica. Copre l\'intero ciclo di vita dalla creazione dell\'esperimento all\'inserimento dati, analisi e generazione di report. Supporta inserimento manuale e riconoscimento OCR da foto, con analisi statistica integrata (rilevamento outlier, curve fitting) e sei calcolatori chimici comuni (massa molare, preparazione soluzioni, calcolo del pH, analisi di titolazione, ecc.). Offre sei temi e una modalità scura.',
      features: ['Gestione dell\'intero ciclo di vita dell\'esperimento', 'Inserimento dati OCR da foto', 'Analisi statistica: rilevamento outlier + curve fitting', 'Esportazione report HTML/JSON', 'Sei calcolatori chimici', 'Autenticazione JWT', 'Sei temi + modalità scura']
    },
    13: {
      name: 'Qwen Agent · Assistente AI Locale',
      overview: 'Un agente di chat AI completamente locale che esegue il modello Tongyi Qianwen Qwen2.5:7b tramite Ollama, senza dipendenze da API cloud (tranne lo strumento di ricerca web). Supporta tre chiamate di strumenti: calcolatrice, richiesta di data/ora e ricerca web DuckDuckGo. Flask fornisce una UI di chat leggera e agent_core.py incapsula l\'interazione con l\'API Ollama e la logica di chiamata degli strumenti.',
      features: ['LLM locale (Ollama + Qwen2.5:7b)', 'Tre chiamate di strumenti', 'Memoria conversazionale multi-turno', 'Interfaccia chat web Flask', 'Completamente offline tranne la ricerca'],
      innovation: ['Chiamata di strumenti da agente locale', 'Nessuna API cloud — privato e sicuro']
    },
    14: {
      name: 'Coze · Piattaforma Q&A Intelligente per Affari di Partito',
      overview: 'Un sistema di Q&A sulle conoscenze di partito costruito su Coze (motore di dialogo AI di ByteDance). Usa i Server-Sent Events (SSE) per un output in streaming stile macchina da scrivere. Include una navigazione per categorie (teoria di base, costruzione organizzativa, integrità, diritti e doveri dei membri, ecc.) e supporta memoria multi-turno e gestione della cronologia.',
      features: ['Q&A intelligente Coze AI', 'Risposte in streaming SSE', 'Dialogo multi-turno', 'Navigazione per categorie di conoscenza', 'Crea / cambia conversazione']
    },
    15: {
      name: 'AI Embedded · Riconoscimento dei Gesti',
      overview: 'Un progetto pratico di sviluppo di applicazioni AI per piattaforme ARM embedded. Usando il framework MediaPipe di Google su una scheda RK3568, realizza il rilevamento in tempo reale dei keypoint dei gesti, riconoscendo le coordinate 3D di 21 keypoint di una mano. Il progetto include una guida completa alla configurazione dell\'ambiente (gestione dei problemi di compatibilità di versione di MediaPipe) e una raccolta di basi OpenCV.',
      features: ['Rilevamento gesti in tempo reale con MediaPipe', 'Acquisizione delle coordinate di 21 keypoint', 'Deploy embedded su RK3568', 'Tutorial completo di configurazione dell\'ambiente', 'Raccolta di casi base OpenCV']
    },
    16: {
      name: 'Hanabi Study Room · Knowledge Base PWA',
      overview: 'Una Progressive Web App (PWA) che confeziona gli appunti di studio nel concetto di "libro magico". Una navigazione a libreria mostra tutorial multi-argomento (strutture dati, NLP, Django, Python, SQL, HTML, ecc.), con un lettore PDF e una vetrina dei lavori personali. La cache offline del Service Worker consente l\'accesso senza rete.',
      features: ['Tutorial "libro magico" multi-argomento', 'Navigazione UI a scaffale', 'Lettore PDF', 'Accesso offline PWA', 'Cache automatica Service Worker', 'Vetrina dei lavori personali']
    },
    17: {
      name: 'Workspace · Editor GrapesJS',
      overview: 'Una piattaforma Workspace full-stack che integra un backend Django con l\'editor visuale frontend GrapesJS. Gli utenti costruiscono contenuti web tramite drag-and-drop (titoli/testo/blocchi di codice/immagini/divisori, ecc.), e il sistema converte l\'output JSON dell\'editor in HTML renderizzabile. Gestisce anche progetti, risorse immagine, risorse testo e note di riflessione.',
      features: ['Editor web drag-and-drop GrapesJS', 'Gestione progetti CRUD', 'Gestione risorse immagine/testo/note', 'Sistema di autenticazione utente', 'Motore di rendering personalizzato blocks_to_html', 'Interfaccia in cinese (zh-hans)']
    },
    18: {
      name: 'Showcase · Piattaforma di Gestione Progetti',
      overview: 'Una piattaforma leggera full-stack per la gestione e la vetrina dei progetti. Il backend usa Express.js per fornire API REST (CRUD di progetti/immagini/testi/note); il frontend è una SPA in un unico file (1198 righe di CSS+JS inline) con pannello admin e modalità di navigazione pubblica. Gli upload sono gestiti da Multer e i dati sono salvati in file JSON senza database. Supporta l\'hosting di anteprima di template HTML.',
      features: ['CRUD progetti + upload miniature', 'Gestione risorse immagine/testo/note', 'Autenticazione admin con token', 'Hosting anteprima iframe', 'Visualizzazione immagini Lightbox', 'Viste timeline / griglia responsive']
    },
    19: {
      name: 'Salary Cat · Pet da Terminale',
      overview: 'Un leggero pet da scrivania per terminale che renderizza in tempo reale animazioni GIF come caratteri ASCII/half-block nella riga di comando. Riproduce cat.gif in loop per un\'animazione di gatto e può opzionalmente riprodurre music.mp3 come musica di sottofondo. Supporta molti parametri (--fps, --scale, --margin-rows, --smooth, --half-block) e può essere impacchettato in un exe autonomo con PyInstaller. Include uno strumento code-typewriter per registrare video tutorial di programmazione.',
      features: ['Rendering di animazioni GIF da terminale', 'Animazione di gatto in loop', 'Riproduzione musica di sottofondo', 'Molti parametri regolabili', 'Multipiattaforma (Win/Mac/Linux)', 'Impacchettamento exe con PyInstaller', 'Strumento di registrazione code-typewriter']
    },
    20: {
      name: 'Sistema di Web Crawling per Articoli di Partito',
      overview: 'Un progetto di web crawler mirato dedicato alla raccolta di regolamenti di partito e altri documenti normativi dal sito CPC News. Copre tutti i livelli — statuto, linee guida, regolamenti, regole, disposizioni, misure e norme di dettaglio. Ha attraversato diverse iterazioni: dal debug iniziale di XPath, al crawling semi-automatico, fino all\'automazione batch finale con generazione di PDF.',
      features: ['Crawling mirato del sito', 'Targeting preciso con XPath', 'Conversione HTML in PDF', 'Automazione batch', 'Generazione di report di crawling', 'Iterazione multi-versione']
    },
    21: {
      name: 'Raccolta di Apprendimento OpenCV Yueqian',
      overview: 'Una raccolta di esercizi OpenCV dal training embedded Yueqian. Include lettura video (file locali/fotocamera), rilevamento volti (Haar Cascade), rilevamento occhi, rilevamento e riconoscimento targhe e riconoscimento OCR di testo (pytesseract) — basi di computer vision che pongono le fondamenta per progetti di machine vision più avanzati.',
      features: ['Lettura video locale / da fotocamera', 'Rilevamento volti/occhi Haar Cascade', 'Rilevamento e riconoscimento targhe', 'Riconoscimento OCR di testo', 'Elaborazione base delle immagini']
    }
  }
  ,
  fr: {
    1: {
      name: 'Canal de Pinglu · Récit Numérique d\'un Projet du Siècle',
      overview: 'Le site de récit numérique du Canal de Pinglu est une plateforme d\'exposition numérique complète intégrant affichage multimédia, expérience interactive et diffusion d\'informations. Adoptant le concept de « Digital Storytelling », il présente artistiquement l\'histoire, le parcours de construction, les caractéristiques techniques et la vision d\'avenir du canal via des technologies web, créant une expérience de connaissance immersive.',
      background: 'Le Canal de Pinglu est le premier projet de canal reliant fleuve et mer depuis la fondation de la Chine nouvelle, long d\'environ 134,2 km pour un investissement total d\'environ 72,7 milliards de RMB. Pour aider le public à en comprendre la portée, le projet utilise le récit numérique afin de transformer des données techniques arides en expériences visuelles vivantes. Le site ne nécessite aucun backend et est entièrement frontend, facile à déployer et à partager.',
      features: [
        'Récit par défilement immersif : le défilement déclenche des séquences animées racontant l\'histoire du canal',
        'Fond en tunnel de particules 3D avec Three.js : un système de particules dynamiques simule l\'eau pour plus d\'immersion',
        'Piloté par GSAP ScrollTrigger : animations performantes avec un timing d\'entrée précis pour chaque élément',
        'Structure multi-pages : Accueil (aperçu), Détails (données techniques), Mémoire du Canal (chronologie), Messages au bord de l\'eau (interaction)',
        'Design responsive : s\'adapte au PC, à la tablette et au mobile',
        'Optimisation typographique chinoise : police à empattements Noto Serif SC pour une mise en page plus élégante',
        'Système d\'icônes Font Awesome 6 : un langage visuel unifié',
        'Aucune dépendance backend : HTML statique pur, déployable sur n\'importe quel serveur web ou GitHub Pages'
      ],
      innovation: [
        'Paradigme du récit numérique : transformer une exposition traditionnelle en expérience web immersive à faible coût',
        'Simulation d\'eau à particules 3D : effets d\'eau peu coûteux dans le navigateur avec Three.js',
        'Chorégraphie d\'animations pilotées par le défilement : liaison précise entre défilement et images via GSAP ScrollTrigger',
        'Ingénierie de la typographie web chinoise : réglage fin de la graisse, de l\'interligne et de l\'espacement'
      ]
    },
    2: {
      name: 'Système de Reconnaissance de Plaques v8.1 · Comparaison Multi-Méthodes',
      overview: 'Le projet construit un système complet de reconnaissance de plaques à visée pédagogique et pratique, couvrant tout le pipeline du prétraitement d\'image à la segmentation et à la reconnaissance des caractères. Il intègre de manière innovante trois méthodes — deep learning CNN, machine learning SVM et EasyOCR — avec une évaluation comparative intuitive. Une GUI Tkinter suit le principe « utilisable sans connaissance préalable ».',
      background: 'La reconnaissance de plaques (LPR) est une technologie clé des systèmes de transport intelligents. D\'un point de vue pédagogique et pratique, le projet conçoit un système LPR complet : l\'utilisateur peut gérer via une GUI tout le flux de synthèse de données, traitement d\'image, entraînement, prédiction et évaluation. Il prend en charge les plaques bleues et jaunes, avec une précision de reconnaissance des couleurs supérieure à 90 %.',
      features: [
        'Comparaison de trois méthodes : CNN, SVM et EasyOCR avec comparaison intuitive de la précision',
        'Données d\'entraînement auto-synthétisées : un générateur de caractères intégré entraîne sans jeu de données externe',
        'Outil d\'annotation de vraies plaques : un annotateur manuel collecte et étiquette des caractères de plaques réelles',
        'Pipeline entièrement visualisé : chaque étape affiche les résultats en temps réel (niveaux de gris → binarisation → localisation → segmentation → reconnaissance)',
        'Rapport d\'évaluation : rapport auto-généré avec précision et matrice de confusion',
        'Template matching : un outil SIFT supplémentaire (txpp.py) localise une petite image dans une grande',
        'Flux guidé par GUI : opérations par boutons qui abaissent la barrière d\'entrée',
        'Commentaires bilingues détaillés : commentaires de code minutieux, idéaux pour l\'apprentissage et l\'extension'
      ],
      innovation: [
        'Cadre de comparaison à trois méthodes : intégration de trois voies techniques totalement différentes (CNN, SVM, EasyOCR) avec comparaison quantitative de la précision',
        'Zéro dépendance aux données externes : un générateur de données synthétiques intégré réalise tout l\'entraînement sans aucun jeu de données externe',
        'Encapsulation complète en GUI : traitement des données, entraînement et évaluation regroupés en opérations par boutons',
        'Localisation par caractéristiques de couleur : analyse de l\'espace colorimétrique des plaques bleues/jaunes, plus robuste que la détection de contours dans certaines scènes'
      ]
    },
    3: {
      name: 'Little Monster Helper · Assistant de Bureau Multi-Agents',
      overview: 'Little Monster Helper est un système de collaboration IA multi-agents pour bureau Windows. Avec un LLM au cœur, il orchestre plusieurs agents spécialisés via LangGraph pour une automatisation de bout en bout, de la commande vocale à l\'action sur le bureau. Il suffit de dire « Hey Jarvis » pour l\'activer, puis de contrôler l\'ordinateur en langage naturel pour gérer fichiers, messages WeChat, réglages système et plus.',
      background: 'À mesure que les capacités des LLM progressent, l\'IA ne se limite plus au chat textuel mais peut réellement agir sur le monde numérique. Le projet explore l\'usage d\'agents LLM au niveau du système d\'exploitation de bureau : traduire des commandes en langage naturel en actions système réelles (clics de souris, saisie clavier, changement de fenêtre), réalisant une véritable « IA qui pilote l\'ordinateur ».',
      features: [
        'Activation vocale : détection du mot-clé « Hey Jarvis » pour une interaction mains libres',
        'Collaboration multi-agents : LangGraph orchestre un agent de routage d\'intention et un agent d\'exécution',
        'Routage d\'intention : similarité sémantique via Sentence-Transformers pour diriger les commandes vers le bon agent',
        'Automatisation PC : déplacement/clic de souris, saisie clavier, changement/réduction/fermeture de fenêtres',
        'Automatisation WeChat bureau : envoi/lecture automatique de messages, discussions de groupe et privées',
        'Contrôle système : volume, luminosité de l\'écran, gestion de l\'alimentation',
        'Automatisation du navigateur : ouverture de pages, recherche, extraction d\'informations',
        'Recherche web : moteur DuckDuckGo intégré',
        'Analyse de sentiment : détecte l\'humeur de l\'utilisateur et ajuste le style de réponse',
        'Base de connaissances et mémoire à long terme : recherche sémantique vectorielle et historique persistant',
        'Double backend LLM : Ollama local (confidentialité) et Groq cloud (performance)'
      ],
      innovation: [
        'Architecture multi-agents : décompose les tâches complexes en sous-tâches exécutées en parallèle/série par différents agents, augmentant fortement le taux de réussite',
        'Agent de niveau bureau concret : contrairement à un simple chatbot, il donne au LLM le contrôle réel du système d\'exploitation',
        'Double modèle interchangeable à chaud : bascule transparente entre Ollama local et Groq cloud, équilibrant confidentialité et performance',
        'Routage d\'intention sémantique : classification par similarité vectorielle via Sentence-Transformers, plus robuste que le matching par mots-clés',
        'Proxy Cloudflare Worker : résout l\'accès à l\'API Groq depuis le réseau local'
      ]
    },
    4: {
      name: 'Simulateur de Téléphone IA · LookHisPhone',
      overview: 'Un simulateur de persona IA entièrement frontend avec une interface façon iOS, intégrant un personnage-partenaire IA prédéfini dans six applications courantes (WeChat, Musique, Notes, Photos, Livraison, Navigateur). Toutes les interactions tournent autour de la persona IA — fil social, historique de chat, journal et historique de recherche — construisant un univers virtuel complet.',
      background: 'Le jeu de rôle IA (Character.AI, etc.) s\'est développé rapidement, mais la plupart des produits restent au chat textuel. Le projet intègre un personnage IA dans des scénarios de vie numérique plus riches, avec une interface réaliste de téléphone et diverses interactions applicatives pour renforcer l\'immersion et le réalisme.',
      features: [
        'Interface façon iOS : recrée fidèlement l\'agencement d\'accueil, la barre d\'état et le style d\'icônes de l\'iPhone',
        'Simulation WeChat : chats scriptés plus likes/commentaires bidirectionnels sur le fil social',
        'NetEase Cloud Music : lecture multi-titres et mode couple « écouter ensemble »',
        'Notes à deux sections : sections journal « côté lumineux » et « côté sombre » révélant la personnalité multidimensionnelle',
        'Parcours photo : une collection de photos prédéfinie',
        'Livraison Meituan : un flux de commande simulé',
        'Navigateur : historique de recherche prédéfini suggérant les centres d\'intérêt du personnage',
        'Fond personnalisé : fond d\'écran du téléphone modifiable'
      ],
      innovation: [
        'Fusion multi-apps : intègre le personnage IA dans plusieurs applications du quotidien plutôt qu\'un seul écran de chat, renforçant le réalisme',
        'Technique narrative implicite : construit l\'« empreinte numérique » du personnage via des indices indirects comme le fil, les recherches et les commandes',
        'Frontend pur, zéro dépendance : fonctionne depuis un seul fichier HTML sans framework ni backend',
        'Fidélité des détails UI : recréation soignée des interactions iOS (défilement élastique, retour au toucher, transitions)'
      ]
    },
    5: {
      name: 'EchoType · Apprentissage de l\'Anglais Roguelike',
      overview: 'EchoType est un outil innovant d\'apprentissage de l\'anglais dont l\'idée centrale est de fusionner en profondeur la boucle de jeu Roguelike (défi → progression → nouveau défi) avec l\'apprentissage. Les utilisateurs gagnent de l\'« expérience » en apprenant des mots, montent en « niveau de compétence » par la transcription de textes, puis affrontent des niveaux générés aléatoirement dans un système de donjon, formant une boucle positive « entrée → sortie de jeu → retour ».',
      background: 'L\'un des plus grands points de douleur de l\'apprentissage de l\'anglais est le manque de retour immédiat et de sentiment d\'accomplissement. Les applications de vocabulaire classiques sont monotones et peinent à maintenir la motivation. EchoType emprunte l\'aléatoire, la progression et le défi des jeux Roguelike pour transformer un apprentissage fastidieux en expérience amusante.',
      features: [
        'Listes de mots multi-niveaux intégrées : CET-4/6, master, TOEFL, IELTS, GRE et autres vocabulaires d\'examen',
        'Transcription de textes : téléversez un PDF/Word et transcrivez le texte mot à mot avec retour en temps réel',
        'Entraînement à la dictée : lecture audio et saisie pour renforcer l\'écoute et l\'orthographe',
        'Donjon roguelike : des salles générées aléatoirement (niveaux) offrent des récompenses aléatoires (nouvelles listes / bonus)',
        'Système de progression : XP, niveaux et points de percée visualisés montrant les progrès',
        'Donjon d\'actualités quotidiennes : des défis sur des articles mis à jour chaque jour maintiennent la fraîcheur',
        'Support PWA hors ligne : le cache Service Worker permet d\'apprendre sans réseau',
        'Suivi de la vitesse de frappe : enregistre l\'évolution des WPM'
      ],
      innovation: [
        'Roguelike × éducation : première application systématique des mécaniques roguelike à l\'apprentissage des langues',
        'Boucle apprentissage-jeu : une boucle fermée auto-motivante « entrée → sortie de jeu → retour positif »',
        'Stockage sans serveur : toutes les données utilisateur restent dans l\'IndexedDB du navigateur, protégeant la vie privée',
        'Taper c\'est apprendre : combine l\'entraînement à la frappe et la mémorisation du vocabulaire pour un double bénéfice'
      ]
    },
    6: {
      name: 'Film Genome System · Génome Cinématographique',
      overview: 'Le Film Genome System propose un nouveau paradigme de « Création Augmentée par la Récupération » (RAC). Il analyse automatiquement de grands volumes de clips, extrayant des « gènes créatifs » selon quatre dimensions — visuelle, audio, narrative et transition — stockés dans une base vectorielle Qdrant. En phase de génération, il récupère les gènes les plus pertinents pour guider le LLM dans la production de scénarios et storyboards, puis compose un court-métrage IA de 30 à 60 s via FFmpeg.',
      background: 'La génération vidéo IA classique (Sora, Runway) repose sur des modèles bout-en-bout et manque de modélisation explicite des principes cinématographiques. Partant des flux de production réels, le projet numérise le processus professionnel « clip de référence → analyse → création », offrant une nouvelle méthodologie — comprendre d\'abord les œuvres existantes, puis créer sur cette compréhension.',
      features: [
        'Extraction de gènes créatifs en quatre dimensions : ADN visuel (scène/couleur/composition), ADN audio (dialogue/effets/musique), ADN narratif (structure/rythme/émotion), ADN de transition (type/durée/effet)',
        'Récupération vectorielle Qdrant : récupération de gènes par similarité sémantique avec des requêtes comme « trouver des plans similaires » ou « trouver des transitions similaires »',
        'Design sonore à cinq couches Sound Score : Dialogue / Performance / Foley / Ambience / Score, chacune contrôlée indépendamment',
        'Ordonnancement agnostique au modèle : couches d\'analyse et de génération découplées, modèles LLM et TTS interchangeables',
        'Déploiement Docker : docker-compose lance API + PostgreSQL + Qdrant en une commande',
        'Outil CLI : opérations d\'analyse cinématographique scriptées via la commande fgs',
        'Interface REST FastAPI : API standardisée pour l\'intégration frontend et tierce'
      ],
      innovation: [
        'Création Augmentée par la Récupération (RAC) : première application de la pensée RAG au cinéma, guidant la création nouvelle par les œuvres existantes',
        'Modèle de gènes à quatre dimensions : description systématique des clips sur visuel/audio/narratif/transition, au-delà de la classification à étiquette unique',
        'Design sonore à cinq couches : divise le son en 5 couches contrôlables indépendamment pour un contrôle fin de l\'audio généré',
        'Architecture agnostique au modèle : couches d\'analyse et d\'exécution découplées, évolutives indépendamment, améliorant maintenabilité et extensibilité'
      ]
    },
    7: {
      name: 'Doit · Système de Gestion de Tâches Multi-Rôles',
      overview: 'Doit est une application web full-stack de gestion personnelle de tâches multi-scénarios. Contrairement aux to-do classiques, elle introduit des « modes rôle » : le mode Étudiant a la gestion d\'emploi du temps, le mode Gérant de boutique la gestion de magasin et stock, le mode Maquilleur la gestion des rendez-vous, etc. Changer de rôle adapte le même système à des scénarios totalement différents. Elle inclut aussi un minuteur Pomodoro, des vues calendrier (mois/semaine/jour) et des tableaux de bord analytiques.',
      background: 'Les outils de gestion de tâches du marché sont souvent « uniformes » et ne répondent pas aux besoins différenciés des métiers et identités. Doit résout cela avec les « modes rôle » : chaque rôle prédéfinit des catégories, mises en page et modules différents, si bien que changer de rôle change tout le flux de travail.',
      features: [
        'Modes multi-rôles : Étudiant (emploi du temps+devoirs), Gérant (magasin/personnel/stock), Maquilleur (rendez-vous), Développeur (gestion de snippets), Étude (minuteur de concentration)',
        'Tâches du jour : CRUD, réordonnancement par glisser-déposer, tags de priorité, rappels d\'échéance',
        'Boîte de réception : capturez rapidement des idées et convertissez-les en tâche en un clic',
        'Vue calendrier : vues mois/semaine/jour montrant la répartition temporelle',
        'Pomodoro : le minuteur classique 25 min de focus + 5 min de pause',
        'Analyses : courbes de tendance d\'achèvement, camemberts par catégorie, cartes de chaleur temporelles',
        'Synchronisation cloud : sync basée sur Supabase pour un passage fluide entre appareils',
        'PWA hors ligne : cache Service Worker fonctionnant sans réseau'
      ],
      innovation: [
        'Conception à modes rôle : un système s\'adapte à des publics et flux totalement différents via le changement de rôle',
        'TypeScript full-stack unifié : sécurité de types hybride entre frontend Vue3 TS et backend typé Python',
        'Synchronisation progressive des données : double couche IndexedDB local + Supabase distant, priorité au local avec sync asynchrone en arrière-plan'
      ]
    },
    8: {
      name: 'BGF · Plateforme de Détection Intelligente des Défauts de Panneaux PV',
      overview: 'BGF est une plateforme SaaS d\'inspection intelligente de bout en bout pour grandes centrales solaires. Des drones capturent des images thermiques infrarouges et en lumière visible des panneaux, et un modèle YOLO détecte automatiquement 10 types de défauts tels que points chauds, fissures et occultations. Les résultats sont liés à l\'emplacement précis de chaque panneau sur une carte GIS 3D Cesium, générant des ordres de travail suivis en boucle fermée. Elle intègre aussi les données de production iSolarCloud pour une analyse corrélée entre efficacité et santé des équipements.',
      background: 'Les grandes centrales solaires couvrent souvent des milliers de mu avec des centaines de milliers de panneaux. L\'inspection manuelle est lente et détecte difficilement les défauts internes. BGF adopte l\'approche « inspection par drone + détection IA + localisation GIS + boucle d\'ordres de travail », multipliant par dizaines l\'efficacité d\'exploitation. Le projet atteint 92 % de couverture de tests avec CI/CD via GitHub Actions.',
      features: [
        'YOLO multi-versions : prend en charge YOLOv8/v11/v12 avec bascule flexible',
        '10 types de défauts : points chauds, fissures, occultations, grilles rompues, défauts de diode, anomalies de boîte de jonction, bris de verre, salissures, décoloration EVA et plus',
        'Fusion infrarouge + lumière visible : l\'infrarouge détecte les anomalies thermiques, la lumière visible confirme les défauts de surface, la double confirmation réduit les faux positifs',
        'GIS 3D Cesium : emplacement et résultat de chaque panneau sur une carte 3D',
        'Gestion des routes de drones : planification des routes d\'inspection et enregistrement des trajectoires de vol',
        'Boucle d\'ordres de travail : détection auto → confirmation manuelle → envoi en réparation → retour → clôture après réception',
        'Ingestion des données iSolarCloud : connexion à la plateforme pour des données de production en temps réel',
        'Rapports d\'analyse assistés par IA : rapports auto-générés avec le modèle multimodal Qwen-VL',
        'Visualisation grand écran : aperçu de la centrale, statistiques de défauts et données de production en temps réel',
        'Couverture de tests 92 % : double test pytest + Vitest avec CI/CD GitHub Actions'
      ],
      innovation: [
        'Détection par double lumière : recalage spatial et corrélation entre anomalies thermiques infrarouges et défauts de surface en lumière visible, réduisant fortement les faux positifs',
        'Fusion GIS + IA : cartographie précise des résultats IA sur des coordonnées GIS 3D pour une boucle spatiale « détecter → localiser → envoyer »',
        'Support multi-YOLO : une plateforme prend en charge YOLOv8/v11/v12, au choix selon précision/vitesse',
        'Analyse de séries temporelles : données de production dans TimescaleDB pour la corrélation temporelle entre défauts et efficacité'
      ]
    },
    9: {
      name: 'LawLink · Plateforme de Services Juridiques',
      overview: 'LawLink est une plateforme de services juridiques construite avec le framework Streamlit, développée pour le hackathon Complete.dev. Elle intègre cinq agents IA dédiés gérant la prise en charge initiale du dossier, la mise en relation intelligente d\'avocats, l\'aide à la préparation des pièces, la génération de synthèses et l\'analyse de données, formant une boucle complète de services juridiques assistés par IA, de la consultation au traitement du dossier.',
      background: 'Le secteur juridique souffre depuis longtemps de « difficulté à trouver un avocat, consultations coûteuses, procédures complexes ». Grâce à la collaboration d\'agents IA, LawLink abaisse la barrière : l\'utilisateur décrit son problème en langage naturel et l\'IA organise le dossier, met en relation des avocats adaptés, guide la préparation des pièces et génère une synthèse professionnelle.',
      features: [
        'Collaboration à cinq agents : Intake → Matching → Preparation → Brief → Insights',
        'Trois rôles séparés : client (consultation/mise en relation), avocat (tableau de bord/rendez-vous), admin (aperçu/gestion IA)',
        'Mise en relation intelligente : l\'IA analyse le type et la complexité du dossier pour recommander le meilleur avocat',
        'Génération automatique de synthèse : l\'IA organise faits et preuves en une synthèse structurée',
        'Commission par paliers : commission de 10 % à 20 % selon la charge de dossiers pour inciter à l\'acceptation',
        'Bilingue : interface et réponses IA en chinois et en anglais',
        'Système de paiement sous séquestre : la plateforme retient les honoraires, libérés à la clôture du dossier'
      ],
      innovation: [
        'Pipeline multi-agents : cinq agents forment une chaîne de services juridiques, spécialisés mais collaboratifs',
        'Prototypage rapide avec Streamlit : une plateforme SaaS multi-rôles complète réalisée dans les limites de temps du hackathon',
        'Mise en relation pilotée par IA : appariement dossier-personne par analyse sémantique plutôt que classification par domaine'
      ]
    },
    10: {
      name: 'Concrete Guardian · Détection de Fissures du Béton',
      overview: 'Un système IA d\'inspection d\'infrastructures de génie civil utilisant un modèle YOLOv8 amélioré pour détecter, segmenter et quantifier automatiquement les fissures sur les surfaces en béton. Il prend en charge les modes detect et segment, mesurant la longueur des fissures, analysant les caractéristiques de couleur et calculant le ratio de surface endommagée, avec génération automatique de rapports PDF/Word avec graphiques et conclusions. C\'est un projet du concours « Challenge Cup » avec business plan complet.',
      features: ['YOLOv8 amélioré : modèle de détection optimisé pour les fissures', 'Mesure de la longueur des fissures : conversion automatique pixel → taille réelle', 'Analyse des couleurs : analyse des caractéristiques de couleur dans l\'espace HSV', 'Génération automatique de rapports PDF/Word', 'Mode de détection en temps réel par caméra', 'Analyse comparative des données', 'Dossier Challenge Cup complet : business plan + pitch deck + rapport de nouveauté'],
      innovation: ['Double mode detect + segment', 'Conversion automatique de la longueur des fissures', 'Automatisation complète du pipeline détecter → évaluer → rapport']
    },
    11: {
      name: 'Détection de Maturité de l\'Avocat · HSI',
      overview: 'Un projet de recherche en deep learning utilisant l\'imagerie hyperspectrale pour la détection non destructive de la maturité des avocats. Il extrait des caractéristiques spectrales des images hyperspectrales et les fournit à un CNN doté d\'un mécanisme d\'attention SE (Squeeze-and-Excitation) pour une classification en trois classes (non mûr/mûr/trop mûr). La fusion multi-vues fait passer la précision par échantillon de 95 % à 98 % au niveau du fruit. Le projet comprend un design de recherche complet : études d\'ablation, validation multi-graines, cartes de chaleur Grad-CAM et optimisation EMA.',
      features: ['Extraction de caractéristiques spectrales d\'images hyperspectrales', 'CNN à mécanisme d\'attention SE', 'Classification en 3 classes (non mûr/mûr/trop mûr)', '95 % par échantillon, 98 % par fruit', 'Cartes de chaleur Grad-CAM', 'Fusion multi-vues', 'Optimisation EMA', 'Warmup + CosineAnnealing', 'Études d\'ablation + validation multi-graines'],
      innovation: ['La fusion multi-vues améliore la précision au niveau du fruit', 'Validation de l\'attention SE en contexte hyperspectral', 'Une méthodologie de recherche complète : ablation + multi-graines + Grad-CAM']
    },
    12: {
      name: 'LabMate · Compagnon de Laboratoire',
      overview: 'Une plateforme de gestion de données de laboratoire pour étudiants et chercheurs en chimie. Elle couvre tout le cycle de vie, de la création d\'expérience à la saisie des données, l\'analyse et la génération de rapports. Elle prend en charge la saisie manuelle et la reconnaissance OCR par photo, avec analyse statistique intégrée (détection d\'aberrants, ajustement de courbes) et six calculatrices chimiques courantes (masse molaire, préparation de solutions, calcul du pH, analyse de titrage, etc.). Elle offre six thèmes et un mode sombre.',
      features: ['Gestion de tout le cycle de vie de l\'expérience', 'Saisie de données par photo OCR', 'Analyse statistique : détection d\'aberrants + ajustement de courbes', 'Export de rapports HTML/JSON', 'Six calculatrices chimiques', 'Authentification JWT', 'Six thèmes + mode sombre']
    },
    13: {
      name: 'Qwen Agent · Assistant IA Local',
      overview: 'Un agent de chat IA entièrement local exécutant le modèle Tongyi Qianwen Qwen2.5:7b via Ollama, sans dépendance à une API cloud (hormis l\'outil de recherche web). L\'agent prend en charge trois appels d\'outils : calculatrice, requête date/heure et recherche web DuckDuckGo. Flask fournit une UI de chat légère et agent_core.py encapsule l\'interaction avec l\'API Ollama et la logique d\'appel d\'outils.',
      features: ['LLM local (Ollama + Qwen2.5:7b)', 'Trois appels d\'outils', 'Mémoire conversationnelle multi-tours', 'Interface de chat web Flask', 'Entièrement hors ligne sauf la recherche'],
      innovation: ['Appel d\'outils par agent local', 'Aucune API cloud — privé et sécurisé']
    },
    14: {
      name: 'Coze · Plateforme de Q&R Intelligente sur les Affaires du Parti',
      overview: 'Un système de Q&R sur les connaissances du parti construit sur Coze (moteur de dialogue IA de ByteDance). Il utilise les Server-Sent Events (SSE) pour une sortie en streaming façon machine à écrire. Il intègre une navigation par catégories (théorie de base, construction organisationnelle, intégrité, droits et devoirs des membres, etc.) et prend en charge la mémoire multi-tours et la gestion de l\'historique.',
      features: ['Q&R intelligente Coze AI', 'Réponses en streaming SSE', 'Dialogue multi-tours', 'Navigation par catégories de connaissances', 'Créer / changer de conversation']
    },
    15: {
      name: 'IA Embarquée · Reconnaissance de Gestes',
      overview: 'Un projet pratique de développement d\'applications IA pour plateformes ARM embarquées. À l\'aide du framework MediaPipe de Google sur une carte RK3568, il réalise la détection en temps réel des points clés de gestes, reconnaissant les coordonnées 3D de 21 points clés d\'une main. Le projet comprend un guide complet de configuration de l\'environnement (gestion des problèmes de compatibilité de version de MediaPipe) et une collection de bases OpenCV.',
      features: ['Détection de gestes en temps réel avec MediaPipe', 'Acquisition des coordonnées de 21 points clés', 'Déploiement embarqué sur RK3568', 'Tutoriel complet de configuration de l\'environnement', 'Collection de cas de base OpenCV']
    },
    16: {
      name: 'Hanabi Study Room · Base de Connaissances PWA',
      overview: 'Une Progressive Web App (PWA) qui emballe les notes d\'étude dans un concept de « livre magique ». Une navigation en bibliothèque affiche des tutoriels multi-sujets (structures de données, NLP, Django, Python, SQL, HTML, etc.), avec un lecteur PDF et une vitrine de travaux personnels. Le cache hors ligne du Service Worker permet l\'accès sans réseau.',
      features: ['Tutoriels « livre magique » multi-sujets', 'Navigation UI façon étagère', 'Lecteur PDF', 'Accès hors ligne PWA', 'Cache automatique Service Worker', 'Vitrine de travaux personnels']
    },
    17: {
      name: 'Workspace · Éditeur GrapesJS',
      overview: 'Une plateforme Workspace full-stack intégrant un backend Django et l\'éditeur visuel frontend GrapesJS. Les utilisateurs construisent du contenu web par glisser-déposer (titres/textes/blocs de code/images/séparateurs, etc.), et le système convertit la sortie JSON de l\'éditeur en HTML rendu. Elle gère aussi les projets, les ressources images, les ressources textes et les notes de réflexion.',
      features: ['Éditeur web glisser-déposer GrapesJS', 'Gestion de projets CRUD', 'Gestion des ressources image/texte/note', 'Système d\'authentification utilisateur', 'Moteur de rendu personnalisé blocks_to_html', 'Interface en chinois (zh-hans)']
    },
    18: {
      name: 'Showcase · Plateforme de Gestion de Projets',
      overview: 'Une plateforme légère full-stack de gestion et vitrine de projets. Le backend utilise Express.js pour fournir des API REST (CRUD de projets/images/textes/notes) ; le frontend est une SPA d\'un seul fichier (1198 lignes de CSS+JS en ligne) avec un panneau admin et un mode de navigation publique. Les téléversements sont gérés par Multer et les données stockées dans des fichiers JSON sans base de données. Elle prend en charge l\'hébergement d\'aperçus de templates HTML.',
      features: ['CRUD de projets + upload de vignettes', 'Gestion des ressources image/texte/note', 'Authentification admin par token', 'Hébergement d\'aperçu iframe', 'Visionneuse d\'images Lightbox', 'Vues chronologie / grille responsives']
    },
    19: {
      name: 'Salary Cat · Mascotte de Terminal',
      overview: 'Une mascotte de bureau légère pour terminal qui rend en temps réel des animations GIF sous forme de caractères ASCII/half-block dans la ligne de commande. Elle lit cat.gif en boucle pour une animation de chat et peut jouer music.mp3 en fond. Elle prend en charge de nombreux paramètres (--fps, --scale, --margin-rows, --smooth, --half-block) et peut être empaquetée en un exe autonome via PyInstaller. Elle est livrée avec un outil code-typewriter pour enregistrer des tutoriels vidéo de programmation.',
      features: ['Rendu d\'animations GIF dans le terminal', 'Animation de chat en boucle', 'Lecture de musique de fond', 'Nombreux paramètres réglables', 'Multiplateforme (Win/Mac/Linux)', 'Empaquetage exe avec PyInstaller', 'Outil d\'enregistrement code-typewriter']
    },
    20: {
      name: 'Système de Crawler d\'Articles du Parti',
      overview: 'Un projet de crawler web ciblé dédié à la collecte de règlements du parti et d\'autres documents normatifs depuis le site CPC News. Il couvre tous les niveaux — charte, lignes directrices, règlements, règles, dispositions, mesures et règles de détail. Il a connu plusieurs itérations : du débogage initial de XPath au crawling semi-automatique, jusqu\'à l\'automatisation par lots finale avec génération de PDF.',
      features: ['Crawling ciblé du site', 'Ciblage précis par XPath', 'Conversion HTML en PDF', 'Automatisation par lots', 'Génération de rapports de crawling', 'Itération multi-versions']
    },
    21: {
      name: 'Collection d\'Apprentissage OpenCV Yueqian',
      overview: 'Une collection d\'exercices OpenCV issue de la formation embarquée Yueqian. Elle inclut la lecture vidéo (fichiers locaux/caméra), la détection de visages (Haar Cascade), la détection d\'yeux, la détection et reconnaissance de plaques et la reconnaissance de texte OCR (pytesseract) — des bases de vision par ordinateur posant les fondations de projets de vision industrielle plus avancés.',
      features: ['Lecture vidéo locale / caméra', 'Détection de visages/yeux Haar Cascade', 'Détection et reconnaissance de plaques', 'Reconnaissance de texte OCR', 'Traitement d\'image de base']
    }
  }
};

if (typeof module !== 'undefined' && module.exports) { module.exports = projLocale; }
