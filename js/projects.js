// ========== Project Data ==========
// 每个项目包含: 基本信息 + 毕业设计级详细介绍(概述/背景/架构/流程/技术栈/创新点/启动方式)

const projectsData = [
  // ============================================================
  // 1. 平陆运河
  // ============================================================
  {
    id: 1,
    name: '平陆运河 · 世纪工程数字叙事',
    cat: 'web',
    badge: 'Web全栈',
    badgeClass: 'badge-web',
    tags: ['HTML5','CSS3','JavaScript','Three.js','GSAP','响应式设计'],
    icon: 'water',
    difficulty: 2,
    thumbs: ['images/suolvtu/平陆.png','images/suolvtu/平陆水畔.png'],
    shortDesc: '以沉浸式数字叙事手法展现平陆运河世纪工程的全貌，融合Three.js 3D渲染与GSAP动画的交互式展览网站。',
    detail: {
      overview: '平陆运河数字叙事网站是一个集多媒体展示、交互体验、信息传播于一体的综合性数字化展览平台。项目采用"数字叙事"（Digital Storytelling）理念，通过Web技术将平陆运河的历史背景、建设历程、工程特点与未来愿景进行艺术化呈现，构建沉浸式的知识传播体验。',
      background: '平陆运河是新中国成立以来首条通江达海的运河工程，全长约134.2公里，总投资约727亿元。为了让公众更好地理解这一世纪工程的意义，本项目采用数字叙事技术，将枯燥的工程数据转化为生动的视觉体验。网站不依赖后端服务器，纯前端实现，便于部署和传播。',
      architecture: `graph TB
    subgraph 展示层["🖥️ 展示层 Presentation"]
        A[首页·平陆之故] --- B[详细介绍页]
        A --- C[运河记忆页]
        A --- D[水畔留言页]
        A --- E[关于页面]
    end
    subgraph 渲染引擎["🎨 渲染引擎 Rendering"]
        F[Three.js WebGL]
        G[GSAP ScrollTrigger]
        H[CSS Animation]
    end
    subgraph 资源层["📦 资源层 Assets"]
        I[3D粒子系统]
        J[图片素材]
        K[字体/图标]
    end
    展示层 --> 渲染引擎
    渲染引擎 --> 资源层
    F -->|粒子隧道背景| A
    G -->|滚动驱动动画| B
    G -->|时间线过渡| C
    H -->|蒙太奇效果| D`,
      flowchart: `flowchart LR
    A[🏠 首页] -->|导航| B[详细介绍]
    A -->|导航| C[运河记忆]
    A -->|导航| D[水畔留言]
    B -->|滚动叙事| B1[历史背景] --> B2[地理区位] --> B3[工程参数] --> B4[社会效益]
    C -->|时间线| C1[规划设计] --> C2[开工建设] --> C3[关键节点] --> C4[竣工通航]
    D -->|留言板| D1[用户留言] --> D2[数据提交] --> D3[展示展示]`,
      features: [
        '沉浸式滚动叙事：用户滚动页面时触发动画序列，讲述运河故事',
        'Three.js 3D粒子隧道背景：动态粒子系统模拟水流效果，增强视觉沉浸感',
        'GSAP ScrollTrigger驱动：高性能滚动动画，精确控制每个元素的入场时机',
        '多页面结构：首页（总览）、详细介绍（工程参数）、运河记忆（时间线）、水畔留言（互动）',
        '响应式设计：自适应PC、平板、手机三种设备尺寸',
        '中文字体优化：使用Noto Serif SC衬线字体，提升中文排版美感',
        'Font Awesome 6图标系统：统一视觉语言',
        '无后端依赖：纯静态HTML，可直接部署到任意Web服务器或GitHub Pages'
      ],
      techStack: ['HTML5','CSS3 (CSS Variables)','JavaScript (ES6+)','Three.js (WebGL)','GSAP 3 (ScrollTrigger)', 'Font Awesome 6', 'Google Fonts (Noto Serif/Noto Sans SC)', '响应式Web设计'],
      innovation: [
        '数字叙事范式：将传统展览转化为Web端沉浸式体验，降低传播成本',
        '3D粒子水流模拟：使用Three.js在浏览器端实现低开销的水流粒子效果',
        '滚动驱动动画编排：通过GSAP ScrollTrigger将页面滚动与动画帧精确绑定',
        '中文Web排版的工程化实践：字重、行距、字距的精细调校'
      ],
      startCmd: '# 直接浏览器打开\n双击 首页_平陆之故.html\n\n# 或部署到静态服务器\nnpx serve .',
      path: 'E:\\ASelf\\Web\\downloads\\Canal_Pinglu'
    }
  },

  // ============================================================
  // 2. 车牌识别系统
  // ============================================================
  {
    id: 2,
    name: '车牌识别系统 v8.1 · 多方法对比',
    cat: 'ml',
    badge: 'AI/ML',
    badgeClass: 'badge-ml',
    tags: ['Python','OpenCV','PyTorch','CNN','SVM','Tkinter','EasyOCR'],
    icon: 'car',
    difficulty: 3,
    shortDesc: '基于深度学习与传统机器学习对比的车牌识别系统，集成CNN/SVM/EasyOCR三种方法，提供GUI全流程操作界面。',
    detail: {
      overview: '本项目构建了一个完整的车牌识别教学与实践系统，从图像预处理、字符分割到字符识别，覆盖了车牌识别全流程。系统创新性地集成了CNN深度学习、SVM机器学习与EasyOCR三种识别方法，并提供直观的对比评估，便于理解不同技术路线的优劣。采用Tkinter构建GUI操作界面，遵循"零基础可操作"的设计原则。',
      background: '车牌识别（License Plate Recognition, LPR）是智能交通系统的核心技术之一。本项目从教育与实践角度出发，设计了一个完整的LPR系统：用户可通过GUI界面操作数据合成、图像处理、模型训练、识别预测和性能评估的完整流程。系统支持蓝牌和黄牌两种常见车牌类型，颜色特征识别准确率达90%以上。',
      architecture: `graph TB
    subgraph GUI["🖥️ GUI层 Tkinter"]
        A[主操作面板] --> A1[创建目录]
        A --> A2[生成合成数据]
        A --> A3[选择车牌图像]
        A --> A4[处理车牌图像]
        A --> A5[收集训练数据]
        A --> A6[训练模型]
        A --> A7[方法对比]
        A --> A8[性能评估]
    end
    subgraph Processing["⚙️ 处理引擎"]
        B[图像预处理]
        C[车牌定位]
        D[字符分割v7.0]
    end
    subgraph Recognition["🧠 识别引擎"]
        E[CNN卷积网络]
        F[SVM支持向量机]
        G[EasyOCR引擎]
    end
    subgraph Data["💾 数据层"]
        H[合成字符生成器]
        I[真实车牌标注工具]
        J[模型持久化]
    end
    GUI --> Processing
    Processing --> D
    D --> E
    D --> F
    D --> G
    E --> J
    F --> J
    H --> E
    H --> F
    I --> E
    I --> F`,
      features: [
        '三种识别方法对比：CNN深度学习、SVM机器学习、EasyOCR，可直观对比准确率',
        '自动合成训练数据：程序内建字符生成器，无需外部数据集即可训练',
        '真实车牌标注工具：内置手动标注界面，支持收集和标注真实车牌字符',
        '完整可视化流程：每一步处理结果都实时显示（灰度化→二值化→定位→分割→识别）',
        '性能评估报告：自动生成包含准确率、混淆矩阵的评估报告',
        '图像模板匹配：额外提供SIFT特征匹配工具（txpp.py），支持大图中小图定位',
        'GUI全流程引导：按钮式操作流程，降低使用门槛',
        '中英文详细注释：代码注释详尽，适合学习和二次开发'
      ],
      techStack: ['Python 3.8+','OpenCV (cv2)','PyTorch (CNN)','scikit-learn (SVM)','Tkinter (GUI)','EasyOCR','Pillow (PIL)','NumPy','pandas','Matplotlib','joblib'],
      innovation: [
        '三方法对比框架：在同一系统中集成CNN、SVM、EasyOCR三种完全不同技术路线的识别方法，提供量化的准确率对比',
        '零外部数据依赖：内建合成数据生成器，可在无任何外部数据集的情况下完成完整训练流程',
        'GUI全流程封装：将复杂的数据处理、模型训练、性能评估流程封装为按钮式操作',
        '颜色特征识别策略：针对蓝牌和黄牌的颜色空间分析进行车牌定位，相比传统边缘检测在特定场景下更鲁棒'
      ],
      startCmd: '# 安装依赖\npip install torch torchvision opencv-python pillow scikit-learn pandas matplotlib easyocr joblib\n\n# 启动GUI主程序\npython cpsb.py\n\n# 按GUI按钮引导：创建目录 → 生成合成数据 → 选择车牌图像 → 处理 → 训练 → 对比\n\n# 图像模板匹配\npython txpp.py',
      path: 'E:\\ASelf\\Web\\downloads\\Plates'
    }
  },

  // ============================================================
  // 3. 小怪兽帮帮 AI桌面助手
  // ============================================================
  {
    id: 3,
    name: '小怪兽帮帮 · 多智能体桌面助手',
    cat: 'ai',
    badge: 'AI Agent',
    badgeClass: 'badge-ai',
    tags: ['Python','FastAPI','Ollama','LangChain','LangGraph','PyQt6','WebSocket'],
    icon: 'robot',
    difficulty: 5,
    thumb: 'images/suolvtu/小怪兽bagbag.png',
    shortDesc: '基于多智能体协作架构的Windows桌面AI助手，支持语音唤醒、自然语言交互、PC自动化控制与微信消息自动化。',
    detail: {
      overview: '小怪兽帮帮是一个面向Windows桌面的AI多智能体协作系统。它以大语言模型为核心，通过LangGraph编排多个专业Agent协同工作，实现从语音指令到桌面操作的端到端自动化。用户只需说"Hey Jarvis"唤醒助手，即可通过自然语言控制电脑完成文件处理、微信消息、系统设置等复杂操作。',
      background: '随着大语言模型能力的增强，AI不再局限于文本对话，而是可以真正操控数字世界。本项目探索了LLM Agent在桌面操作系统层面的应用可能性：将自然语言指令转化为实际的系统操作（鼠标点击、键盘输入、窗口切换等），实现真正意义上的"AI操控电脑"。',
      architecture: `graph TB
    subgraph Interaction["🎤 交互层"]
        A[Web Chat UI] 
        B[PyQt6桌面组件]
        C[语音唤醒 HeyJarvis]
    end
    subgraph Backend["🧠 后端 Agent 编排"]
        D[FastAPI:8001]
        E[意图路由 Router]
        F[LangGraph 多Agent编排]
        G[语义相似度匹配]
        H[知识库 RAG]
        I[记忆系统 Memory]
    end
    subgraph Execution["🔧 执行层"]
        J[PC自动化] --> J1[键鼠控制]
        J --> J2[窗口管理]
        K[微信自动化] --> K1[消息收发]
        K --> K2[联系人管理]
        L[系统控制] --> L1[音量/亮度]
        M[浏览器操作]
        N[文件处理]
    end
    subgraph Infra["☁️ 基础设施"]
        O[Ollama 本地LLM]
        P[Groq 云端API]
        Q[Cloudflare Worker]
        R[SQLite 存储]
    end
    Interaction --> D
    D --> E --> F
    F --> G
    F --> H
    F --> I
    F --> J
    F --> K
    F --> L
    F --> M
    F --> N
    O --> D
    P --> D
    Q --> P
    R --> I`,
      features: [
        '语音唤醒："Hey Jarvis"关键词检测，免提交互',
        '多智能体协作：LangGraph编排意图路由Agent + 任务执行Agent的协同工作',
        '意图路由：基于Sentence-Transformers的语义相似度匹配，将用户指令路由到正确的执行Agent',
        'PC自动化控制：鼠标移动/点击、键盘输入、窗口切换/最小化/关闭',
        '微信PC端自动化：自动发送/读取微信消息，支持群聊和私聊',
        '系统控制：音量调节、屏幕亮度、电源管理',
        '浏览器自动化：打开网页、搜索、信息提取',
        '联网搜索：集成DuckDuckGo搜索引擎',
        '情感分析：分析用户情绪状态并调整响应风格',
        '知识库与长期记忆：基于向量存储的语义检索，对话历史持久化',
        '双LLM后端：支持本地Ollama（隐私优先）和云端Groq（性能优先）两种模式'
      ],
      techStack: ['Python 3.11+','FastAPI + Uvicorn','Ollama (本地LLM)','Groq API (云端LLM)','LangChain','LangGraph (Agent编排)','Sentence-Transformers','PyQt6 (桌面GUI)','Cloudflare Worker (API代理)','SQLite','WebSocket'],
      innovation: [
        '多智能体协作架构：将复杂桌面任务拆解为多个子任务，由不同Agent并行/串行执行，显著提升任务成功率',
        '桌面级Agent落地：不同于简单的ChatBot，实现了LLM对真实操作系统的操控能力',
        '双模型热切换：支持本地Ollama和云端Groq的无缝切换，兼顾隐私保护与性能',
        '语义意图路由：基于Sentence-Transformers向量相似度的意图分类，比传统关键词匹配更鲁棒',
        'Cloudflare Worker代理：解决国内网络访问Groq API的问题'
      ],
      startCmd: '# 方式一：完整启动\nstart_all.bat\n\n# 方式二：仅后端\ncd backend\nstart_backend.bat\n# 或: python -m uvicorn main_with_agent:app --host 127.0.0.1 --port 8001 --reload\n\n# Worker (可选)\ncd worker\nnpm install && npm run dev',
      path: 'E:\\ASelf\\.Internet\\all_version\\zwindows2_backup_0310'
    }
  },

  // ============================================================
  // 4. AI手机模拟器
  // ============================================================
  {
    id: 4,
    name: 'AI手机模拟器 · LookHisPhone',
    cat: 'web',
    badge: 'Web交互',
    badgeClass: 'badge-web',
    tags: ['HTML5','CSS3','JavaScript','UI/UX','纯前端','交互设计'],
    icon: 'phone',
    difficulty: 1,
    shortDesc: '仿iPhone界面的AI恋人角色模拟器，六个可交互App构建完整虚拟恋爱体验。纯前端实现，无任何后端依赖。',
    detail: {
      overview: '本项目是一个基于纯前端技术构建的AI人设模拟器，采用仿iOS界面设计，将预设的AI恋人角色植入六个常用App（微信、音乐、备忘录、相册、外卖、浏览器）中。所有交互内容均围绕AI人设展开，包括朋友圈动态、聊天记录、日记内容和搜索历史等，构建了完整的虚拟角色世界观。',
      background: 'AI角色扮演（Character.AI等）近年来快速发展，但大多数产品仅停留在文本对话层面。本项目尝试将AI角色植入更丰富的数字生活场景中，通过仿真的手机界面和多样化的App交互，增强角色扮演的沉浸感和真实感。',
      features: [
        '仿iOS界面：精确还原iPhone桌面布局、状态栏、图标风格',
        '微信模拟：固定对话脚本 + 朋友圈点赞/评论双向互动',
        '网易云音乐：多首歌曲播放 + "一起听"情侣模式',
        '备忘录双分区："光明面"与"阴暗面"两个日记分区，展现角色多维度性格',
        '相册浏览：预设照片集',
        '美团外卖：模拟点餐流程',
        '浏览器：预设搜索历史记录，暗示角色兴趣和关注点',
        '自定义背景：支持更换手机壁纸'
      ],
      techStack: ['HTML5','CSS3 (Flexbox/Grid)','JavaScript (ES6+)','纯前端无框架','CSS动画','LocalStorage'],
      innovation: [
        '多App场景融合：将AI角色融入到多个日常App中，而非单一聊天界面，增强了角色真实感',
        '隐性叙事手法：通过朋友圈、搜索记录、外卖订单等间接信息，构建角色的"数字足迹"',
        '纯前端零依赖：无需任何框架或后端服务，单HTML文件即可运行',
        'UI细节还原：对iOS交互细节（弹性滚动、点击反馈、切换动画）的精细还原'
      ],
      startCmd: '直接用浏览器打开 phone.html\n完全离线可用，无需任何服务器',
      path: 'E:\\ASelf\\.Internet\\small_phone\\look_his_phone'
    }
  },

  // ============================================================
  // 5. EchoType
  // ============================================================
  {
    id: 5,
    name: 'EchoType · Roguelike英语学习',
    cat: 'web',
    badge: 'Web全栈',
    badgeClass: 'badge-web',
    tags: ['React','TypeScript','Vite','TailwindCSS','Zustand','Dexie','PWA'],
    icon: 'shield',
    difficulty: 3,
    thumb: 'images/suolvtu/echotype.png',
    shortDesc: '将Roguelike地下城游戏机制与英语学习深度融合的渐进式Web应用。先学词，再临摹，闯地下城，顿悟英语。',
    detail: {
      overview: 'EchoType（回声打字）是一款创新性的英语学习工具，其核心设计理念是将Roguelike游戏的核心循环（挑战→成长→再挑战）与英语学习过程深度融合。用户通过学习单词积累"经验值"，通过文章临摹提升"技能等级"，然后在地下城系统中挑战随机生成的学习关卡，形成"学习输入 → 游戏输出 → 反馈激励"的正向循环。',
      background: '英语学习中最大的痛点之一是"缺乏即时反馈和成就感"。传统的背单词App枯燥单一，难以维持用户的学习动力。EchoType创新性地借用了Roguelike游戏的随机性、成长性和挑战性机制，将枯燥的学习过程转化为有趣的游戏体验。',
      architecture: `graph TB
    subgraph Frontend["🖥️ React SPA"]
        A[React 18 + TypeScript]
        B[Zustand 状态管理]
        C[Dexie IndexedDB]
        D[React Router]
        E[TailwindCSS 4]
        F[Framer Motion]
        G[PWA Service Worker]
    end
    subgraph Features["🎮 功能模块"]
        H[词书学习] --> H1[四六级/考研/托福/雅思/GRE]
        I[文章临摹] --> I1[PDF/Word上传]
        J[听写训练]
        K[地下城系统] --> K1[随机房间生成]
        K --> K2[随机奖励掉落]
        L[成长系统] --> L1[突破点可视化]
        M[每日新闻副本]
    end
    subgraph API["☁️ API Gateway"]
        N[Cloudflare Worker]
        O[LLM请求转发]
    end
    Frontend --> Features
    Features --> API
    G --> C`,
      features: [
        '内置多级词书：覆盖四六级、考研、托福、雅思、GRE等主流英语考试词库',
        '文章临摹：上传PDF/Word文档，系统展示原文，用户逐字打字临摹，实时正误反馈',
        '听写训练：语音播放+用户打字输入，强化听力与拼写',
        'Roguelike地下城：随机生成房间（挑战关卡），通过后获得随机奖励（新词书/加成道具）',
        '成长系统：经验值、等级、突破点可视化，呈现学习进步轨迹',
        '每日新闻副本：每日更新的新闻文章挑战，保持学习新鲜感',
        'PWA离线支持：Service Worker缓存，无网络也可学习',
        '打字速度追踪：记录WPM（每分钟打字速度）变化趋势'
      ],
      techStack: ['React 18','TypeScript','Vite 5','TailwindCSS 4','Zustand (状态管理)','Dexie (IndexedDB)','React Router v6','Framer Motion','PWA (Service Worker + Manifest)','Cloudflare Worker (API)'],
      innovation: [
        'Roguelike×教育：首次将Roguelike游戏机制系统性地应用于语言学习领域',
        '学习-游戏循环：构建"输入学习→游戏输出→正向反馈"的自驱动学习闭环',
        '零服务器存储：所有用户数据存储在浏览器IndexedDB中，保护隐私',
        '打字即学习：将打字速度训练与词汇记忆有机结合，双重提升'
      ],
      startCmd: 'cd version2\npnpm install  # 或 npm install\npnpm dev      # 或 npm run dev\n# 打开 http://localhost:5173\n\n# API (可选)\ncd echotype-api\nnpm run dev',
      path: 'E:\\ASelf\\AISystem\\o3o8echo'
    }
  },

  // ============================================================
  // 6. Film Genome System
  // ============================================================
  {
    id: 6,
    name: 'Film Genome System · 影视基因组',
    cat: 'ai',
    badge: 'AI系统',
    badgeClass: 'badge-ai',
    tags: ['Python','FastAPI','PostgreSQL','Qdrant','Docker','LangChain','Whisper'],
    icon: 'film',
    difficulty: 5,
    shortDesc: '基于"检索增强创作"范式的AI影视制作管线。分析海量片段提取四维"创作基因"，通过向量检索指导AI生成短片。',
    detail: {
      overview: 'Film Genome System（影视基因组系统）提出了"检索增强创作"（Retrieval-Augmented Creation, RAC）的全新范式。系统自动分析海量影视片段，提取视觉、音频、叙事、转场四个维度的"创作基因"，存入Qdrant向量数据库。在生成阶段，系统根据用户需求检索最相关的创作基因，指导LLM生成剧本和分镜，最终通过FFmpeg合成30-60秒的AI短片。',
      background: '传统的AI视频生成（如Sora、Runway）依赖端到端模型，缺乏对影视创作规律的显式建模。本项目从影视制作的实际工作流出发，将"参考样片→分析→创作"的专业流程数字化，为AI视频生成提供了一种新的方法论——先理解已有作品，再基于理解进行创作。',
      architecture: `graph TB
    subgraph Input["📥 输入层"]
        A[影视片段上传]
        B[参考剧本/需求]
    end
    subgraph Analysis["🔬 分析引擎"]
        C[视觉DNA] --> C1[PySceneDetect 场景分割]
        C --> C2[色彩/构图特征提取]
        D[音频DNA] --> D1[Faster-Whisper STT]
        D --> D2[音频特征提取]
        E[叙事DNA] --> E1[LLM叙事结构分析]
        F[转场DNA] --> F1[视觉转场检测]
    end
    subgraph Storage["💾 存储层"]
        G[(PostgreSQL 16)]
        H[(Qdrant 向量库)]
        I[对象存储]
    end
    subgraph Generation["🎨 生成引擎"]
        J[基因检索与匹配]
        K[LLM剧本生成]
        L[Sound Score 五层声音]
        M[FFmpeg视频合成]
    end
    subgraph Output["📤 输出"]
        N[30-60秒AI短片]
    end
    A --> C
    A --> D
    A --> E
    A --> F
    C --> G
    C --> H
    D --> G
    D --> H
    E --> G
    F --> G
    J --> K
    J --> L
    K --> M
    L --> M
    M --> N`,
      features: [
        '四维创作基因提取：视觉DNA（场景/色彩/构图）、音频DNA（对话/音效/配乐）、叙事DNA（结构/节奏/情绪）、转场DNA（类型/时长/效果）',
        'Qdrant向量检索：基于语义相似度的创作基因检索，支持"找类似镜头"、"找类似转场"等查询',
        'Sound Score五层声音设计：Dialogue(对话) / Performance(演奏) / Foley(拟音) / Ambience(环境) / Score(配乐)，每层独立控制',
        '模型无关调度架构：分析层与生成层解耦，可灵活替换底层的LLM和TTS模型',
        'Docker容器化部署：docker-compose一键启动API + PostgreSQL + Qdrant全套服务',
        'CLI命令行工具：通过fgs命令进行脚本化的影视分析操作',
        'FastAPI REST接口：标准化的API接口，便于前端接入和第三方集成'
      ],
      techStack: ['Python 3.11+','FastAPI + Uvicorn','PostgreSQL 16 + asyncpg + SQLAlchemy 2.0','Alembic (数据库迁移)','Qdrant (向量数据库)','Docker + docker-compose','Groq API (LLM)','Faster-Whisper (语音转文字)','PySceneDetect (场景分割)','FFmpeg (视频处理)','LangChain','Typer (CLI工具)'],
      innovation: [
        '检索增强创作(RAC)：首次将RAG思想应用于影视创作领域，用已有作品指导新创作',
        '四维基因模型：从视觉/音频/叙事/转场四个维度系统化描述影视片段，超越传统的单一标签分类',
        '五层声音设计：将影视声音分为5个独立可控层，为AI生成的声音提供精细控制能力',
        '模型无关架构：分析层与执行层解耦，可以独立升级替换，提高了系统的可维护性和可扩展性'
      ],
      startCmd: '# Docker一键启动（推荐）\ndocker compose up -d\n# 启动：fgs-api + PostgreSQL + Qdrant，监听8000端口\n\n# 开发模式\npip install -e ".[dev]"\nuvicorn src.main:app --reload\n\n# CLI工具\nfgs --help',
      path: 'E:\\ASelf\\AISystem\\o0307\\film-genome-system'
    }
  },

  // ============================================================
  // 7. Doit 任务管理系统
  // ============================================================
  {
    id: 7,
    name: 'Doit · 多角色任务管理系统',
    cat: 'web',
    badge: 'Web全栈',
    badgeClass: 'badge-web',
    tags: ['Vue3','TypeScript','Vite','Pinia','FastAPI','PostgreSQL','PWA'],
    icon: 'check',
    difficulty: 3,
    shortDesc: '面向多角色的个人效率管理系统。集成番茄钟、日历视图、数据统计、多角色模式（学生/店长/程序员）的前后端分离应用。',
    detail: {
      overview: 'Doit是一个面向多场景个人任务管理的全栈Web应用。与传统Todo应用不同，Doit引入了"角色模式"概念：学生模式有课程表管理，店长模式有店铺和库存管理，化妆师模式有预约日程管理等。通过角色切换，同一套系统可以适应完全不同的使用场景。系统还包括番茄钟专注计时、日历视图（月/周/日）、数据统计看板等效率工具。',
      background: '市面上的任务管理工具往往"千人一面"，无法满足不同职业、不同身份用户的差异化需求。Doit通过"角色模式"解决了这个问题——每个角色预设了不同的任务分类、视图布局和功能模块，用户切换角色即切换整套工作流。',
      features: [
        '多角色模式：学生（课程表+作业）、店长（店铺/员工/库存管理）、化妆师（预约日程）、程序员（代码片段管理）、自习（专注计时）',
        '今日待办：任务增删改查、拖拽排序、优先级标记、到期提醒',
        '收集箱：快速记录灵感，一键转为正式任务',
        '日历视图：月/周/日三种视图，直观展示任务时间分布',
        '番茄钟：25分钟专注+5分钟休息的经典番茄工作法计时器',
        '数据统计：完成趋势折线图、分类饼图、时间热力图',
        '云端同步：基于Supabase的数据同步，多设备间无缝切换',
        'PWA离线：Service Worker缓存，断网也能使用'
      ],
      techStack: ['Vue 3 + Composition API','TypeScript','Vite','Pinia (状态管理)','Vue Router 4','Axios','Python FastAPI','SQLAlchemy 2.0','asyncpg / aiosqlite','Supabase','PWA (Service Worker)','ECharts 5', 'Vercel部署', 'Cloudflare Pages部署'],
      innovation: [
        '角色模式设计：同一个系统通过角色切换适配完全不同的人群和工作流，实现"千人千面"',
        '前后端统一TypeScript：前端Vue3 TS + 后端Python类型的混合类型安全',
        '渐进式数据同步：本地IndexedDB + 远程Supabase的双层存储，优先本地响应，后台异步同步'
      ],
      startCmd: '# 前端（二选一）\ncd frontend && npm install && npm run dev    # 端口5174\ncd frontend-vue && npm install && npm run dev  # Vue3纯净版\n\n# 后端\ncd backend\npip install -r requirements.txt\nuvicorn main:app --reload',
      path: 'E:\\ASelf\\AISystem\\o404do'
    }
  },

  // ============================================================
  // 8. BGF 光伏智检平台
  // ============================================================
  {
    id: 8,
    name: 'BGF · 光伏板缺陷智能检测平台',
    cat: 'ai',
    badge: 'AI系统',
    badgeClass: 'badge-ai',
    tags: ['Vue3','Flask','YOLOv8','PostgreSQL','Cesium','Qwen-VL','Docker'],
    icon: 'sun',
    difficulty: 5,
    shortDesc: '大型光伏电站智能巡检SaaS平台。YOLO深度学习检测10类缺陷，热成像+可见光双光联动，Cesium GIS地图+无人机航线管理。',
    detail: {
      overview: 'BGF（光伏智检平台）是一个面向大型光伏电站的智能巡检全流程SaaS平台。系统利用无人机采集光伏板的红外热成像和可见光图像，通过YOLO深度学习模型自动检测热斑、裂纹、异物遮盖等10类缺陷。检测结果关联到Cesium三维GIS地图上的具体光伏板位置，生成缺陷工单并通过闭环系统跟踪处理过程。平台还集成了阳光云(iSolarCloud)的发电数据，实现发电效率与设备健康状态的关联分析。',
      background: '大型光伏电站通常占地数千亩，包含数十万块光伏板。传统的人工巡检效率极低，且难以发现内部缺陷。BGF平台利用"无人机巡检 + AI自动检测 + GIS定位 + 工单闭环"的技术路线，将光伏电站的运维效率提升了数十倍。项目达到了92%的测试覆盖率，通过GitHub Actions实现CI/CD自动化。',
      architecture: `graph TB
    subgraph Front["🖥️ 前端 Vue3"]
        A[Element Plus UI]
        B[ECharts 数据大屏]
        C[Cesium 3D GIS]
        D[Pinia 状态管理]
    end
    subgraph Back["⚙️ 后端 Flask:5020"]
        E[RESTful API]
        F[SQLAlchemy ORM]
        G[JWT + RBAC 权限]
        H[文件上传处理]
    end
    subgraph AI["🧠 AI检测引擎"]
        I[YOLO v8/v11/v12]
        I1[热斑检测]
        I2[裂纹检测]
        I3[异物遮盖检测]
        I4[断栅/二极管故障]
        I5[玻璃碎裂/污渍]
        J[Qwen-VL 多模态]
        K[热成像+可见光联动]
    end
    subgraph Data["💾 数据层"]
        L[(PostgreSQL 16)]
        M[(TimescaleDB)]
        N[iSolarCloud API]
    end
    subgraph DevOps["🔄 CI/CD"]
        O[GitHub Actions]
        P[pytest + Vitest]
        Q[Docker Compose]
    end
    Front --> Back
    Back --> AI
    Back --> Data
    Data --> N
    O --> P
    Q --> L`,
      features: [
        'YOLO多版本支持：同时支持YOLOv8/v11/v12三个版本，可灵活切换',
        '10类缺陷检测：热斑、裂纹、异物遮盖、断栅、二极管故障、接线盒异常、玻璃碎裂、污渍、EVA变色等',
        '红外+可见光双光联动：红外热成像检测温度异常，可见光确认表面缺陷，双重确认降低误报',
        'Cesium 3D GIS：在三维地图上标注每块光伏板的位置和检测结果',
        '无人机航线管理：规划巡检航线，记录飞行轨迹',
        '缺陷工单闭环：自动发现→人工确认→派单维修→处理反馈→验收关闭',
        'iSolarCloud数据采集：接入阳光云平台获取实时发电数据',
        'AI辅助分析报告：基于Qwen-VL多模态大模型自动生成检测分析报告',
        '大屏可视化：电站总览、缺陷统计、发电数据实时展示',
        '92%测试覆盖率：pytest + Vitest双重测试，GitHub Actions CI/CD'
      ],
      techStack: ['Vue 3 + TypeScript + Composition API','Element Plus UI','ECharts 5','Cesium.js (3D GIS)','Pinia','Vite','Python Flask 3.x','SQLAlchemy 2.0','PostgreSQL 16','TimescaleDB','Ultralytics YOLOv8/v11/v12','Qwen-VL (多模态大模型)','Docker + docker-compose','GitHub Actions','pytest + Vitest','iSolarCloud OpenAPI'],
      innovation: [
        '双光联动检测：将红外热成像的温度异常与可见光的表面缺陷进行空间配准和关联分析，显著降低误报率',
        'GIS+AI融合：将AI检测结果精确映射到三维GIS坐标，实现"检测→定位→派单"的空间化闭环',
        '多YOLO版本支持：同一平台支持YOLOv8/v11/v12，用户可根据精度/速度需求灵活选择',
        '时序分析：通过TimescaleDB存储发电数据，进行缺陷与发电效率的时序关联分析'
      ],
      startCmd: '# 1. 启动数据库\ndocker-compose up -d postgres\n\n# 2. 后端\ncd web-flask\npip install -r requirements.txt\npython app.py    # 端口5020\n\n# 3. 前端\ncd web-vue\nnpm install\nnpm run dev      # 端口3000',
      path: 'E:\\BGF'
    }
  },

  // ============================================================
  // 9. LawLink 律法通
  // ============================================================
  {
    id: 9,
    name: 'LawLink · 律法通法律服务平台',
    cat: 'web',
    badge: 'Web全栈',
    badgeClass: 'badge-web',
    tags: ['Python','Streamlit','SQLite','AI Agent','Complete.dev','bcrypt'],
    icon: 'scale',
    difficulty: 2,
    shortDesc: '集成多AI Agent的法律服务SaaS平台。覆盖法律咨询、律师匹配、案件准备、简报生成全流程，Complete.dev黑客松项目。',
    detail: {
      overview: 'LawLink（律法通）是一个基于Streamlit框架构建的法律服务平台，专为Complete.dev黑客松比赛而开发。平台集成5个专用AI Agent，分别负责法律问题初步整理、律师智能匹配、材料准备指导、案件简报生成和数据分析，形成从用户咨询到案件处理的完整AI辅助法律服务闭环。',
      background: '法律服务行业长期存在"找律师难、咨询贵、流程复杂"的痛点。LawLink通过AI Agent协作，降低了法律服务的使用门槛：用户只需用自然语言描述问题，AI自动整理案情、匹配合适的律师、指导材料准备，并生成专业的案件简报。',
      features: [
        '五AI Agent协作：Intake(案情整理) → Matching(律师匹配) → Preparation(材料准备指导) → Brief(案件简报) → Insights(数据分析)',
        '三端角色分离：普通用户端（咨询/匹配）、律师端（仪表盘/预约管理）、管理员端（总览/AI管理）',
        '智能律师匹配：AI分析案情类型和复杂度，推荐最合适的律师',
        '案件简报自动生成：AI整理案情和证据材料，生成结构化案件简报',
        '佣金分级机制：按律师接单量10%-20%的阶梯佣金，激励律师积极接单',
        '中英文双语：界面和AI回答均支持中英文',
        '托管支付系统：平台托管律师费，案件完成后释放'
      ],
      techStack: ['Python 3.11+','Streamlit','SQLite','bcrypt','Complete.dev AI Agent API','requests','python-dotenv'],
      innovation: [
        '多Agent串联流程：5个Agent形成法律服务流水线，各司其职又协同工作',
        'Streamlit快速原型：在黑客松的时间限制下，使用Streamlit实现了完整的多角色SaaS平台',
        'AI驱动的律师匹配：基于语义分析进行案-人匹配，而非传统的按领域分类'
      ],
      startCmd: 'pip install -r requirements.txt\nstreamlit run app.py',
      path: 'E:\\ASelf\\Hakson\\lawlink_platformV3\\lawlink_platformV2'
    }
  },

  // ============================================================
  // 10-15: 精简版项目（含架构图但描述较精简）
  // ============================================================
  {
    id: 10,
    name: '智砼卫士 · 混凝土裂缝检测',
    cat: 'ml',
    badge: 'AI/ML',
    badgeClass: 'badge-ml',
    tags: ['Python','YOLOv8','OpenCV','PyTorch','报告生成','挑战杯'],
    icon: 'building',
    difficulty: 3,
    shortDesc: '基于改进YOLOv8的混凝土裂缝智能检测与评估系统。支持裂缝测量、颜色分析、报告自动生成，挑战杯参赛项目。',
    detail: {
      overview: '面向土木工程基础设施检测的AI系统，利用改进版YOLOv8模型对混凝土表面的裂缝进行自动检测、分割和量化测量。系统同时支持检测（detect）和分割（segment）两种模式，可以测量裂缝长度、分析颜色特征、计算破损面积占比，并自动生成包含图表和结论的PDF/Word检测报告。项目为挑战杯大学生课外学术科技作品竞赛参赛项目，含完整商业计划书。',
      features: ['YOLOv8改进版：针对裂缝检测场景优化的目标检测模型','裂缝长度测量：像素距离→实际尺寸自动换算','颜色分析：HSV空间分析裂缝区域颜色特征','PDF/Word报告自动生成','相机实时检测模式','数据对比分析','挑战杯完整申报材料：商业计划书+路演PPT+查新报告'],
      techStack: ['Python 3.9+','Ultralytics YOLOv8','OpenCV','PyTorch','PDF/Word报告生成库'],
      innovation: ['检测+分割双模式','裂缝长度自动换算','检测→评估→报告全流程自动化'],
      startCmd: 'python train.py          # 训练\npython predict_and_report.py  # 预测+报告\npython crack_camera_detect.py # 实时检测',
      path: 'E:\\AUniver\\机器学习\\机器小学习自主\\yolo\\5.18\\CrackProject'
    }
  },
  {
    id: 11,
    name: '牛油果成熟度检测 · HSI',
    cat: 'ml',
    badge: 'AI/ML',
    badgeClass: 'badge-ml',
    tags: ['PyTorch','高光谱','CNN','注意力机制','Grad-CAM','科研级'],
    icon: 'fruit',
    difficulty: 4,
    shortDesc: '基于高光谱成像和SE注意力CNN的牛油果成熟度智能检测。果实级准确率98%，含Grad-CAM可视化和消融实验。',
    detail: {
      overview: '利用高光谱成像技术对牛油果进行无损成熟度检测的深度学习科研项目。从高光谱图像中提取光谱特征，输入带SE（Squeeze-and-Excitation）注意力机制的CNN进行未熟/成熟/过熟三分类。通过多视角融合将单个样本级95%准确率提升到果实级98%。项目包含完整的科研实验设计：消融实验、多种子验证、Grad-CAM热力图可视化、EMA模型优化等。',
      features: ['高光谱图像光谱特征提取','SE注意力机制CNN','3分类(未熟/成熟/过熟)','样本级95%，果实级98%','Grad-CAM热力图','多视角融合','EMA优化','Warmup+CosineAnnealing','消融实验+多种子验证'],
      techStack: ['Python 3.8+','PyTorch 2.0+','NumPy','SciPy','scikit-learn','Matplotlib','Seaborn','Spectral','tqdm'],
      innovation: ['多视角融合提升果实级准确率','SE注意力在高光谱场景的应用验证','完整的科研实验方法论：消融+多种子+Grad-CAM'],
      startCmd: 'pip install torch torchvision numpy scipy scikit-learn matplotlib seaborn spectral tqdm\npython -m avocado_detection.main',
      path: 'E:\\ASelf\\DeepHS-Fruit\\HSI_Fruit_Maturity_Detection\\HSI_Fruit_Maturity_Detection'
    }
  },
  {
    id: 12,
    name: 'LabMate · 实验搭子',
    cat: 'web',
    badge: 'Web全栈',
    badgeClass: 'badge-web',
    tags: ['Vue3','TypeScript','FastAPI','Pinia','ECharts','VarletUI'],
    icon: 'flask',
    difficulty: 3,
    shortDesc: '化学实验数据管理与分析平台。涵盖实验全生命周期管理、OCR数据录入、统计分析、报告生成和6种化学计算器。',
    detail: {
      overview: '面向化学专业学生和科研人员的实验数据管理平台。系统覆盖实验从创建、数据录入、分析到报告生成的全生命周期。支持手动录入和OCR拍照识别两种数据采集方式，内建统计分析（异常值检测、曲线拟合）和6种常用化学计算器（摩尔质量、溶液配制、pH计算、滴定分析等）。提供6套主题和暗色模式。',
      features: ['实验全生命周期管理','OCR拍照数据录入','统计分析：异常值检测+曲线拟合','HTML/JSON报告导出','6种化学计算器','JWT认证','6套主题+暗色模式'],
      techStack: ['Vue 3 + TypeScript','Varlet UI','Pinia','Vue Router 4','ECharts 5','UnoCSS','Python FastAPI','SQLAlchemy','JWT'],
      startCmd: 'cd backend && pip install -r requirements.txt && uvicorn main:app --reload',
      path: 'E:\\ASelf\\LabMate'
    }
  },
  {
    id: 13,
    name: 'Qwen Agent · 本地AI助手',
    cat: 'ai',
    badge: 'AI Agent',
    badgeClass: 'badge-ai',
    tags: ['Python','Flask','Ollama','Qwen2.5','Agent','工具调用'],
    icon: 'sparkle',
    difficulty: 2,
    shortDesc: '基于本地Ollama大模型的智能聊天Agent。支持计算器、时间查询、联网搜索三种工具调用，完全可离线运行。',
    detail: {
      overview: '一个完全本地化运行的AI聊天Agent，使用Ollama运行通义千问Qwen2.5:7b模型，无需依赖云端API（除联网搜索工具外）。Agent支持三种工具调用：数学计算器、时间日期查询和DuckDuckGo联网搜索。Flask提供轻量级Web聊天界面，agent_core.py封装Ollama API交互和工具调用逻辑。',
      features: ['本地大模型运行（Ollama+Qwen2.5:7b）','三种工具调用','多轮对话记忆','Flask Web聊天界面','除搜索外完全离线可用'],
      techStack: ['Python','Flask','Ollama','Qwen2.5:7b','HTML5+JS'],
      innovation: ['本地Agent工具调用','无需云端API，隐私安全'],
      startCmd: 'ollama pull qwen2.5:7b\npip install flask requests\npython web_ui.py\n# 打开 http://localhost:5000',
      path: 'E:\\AUniver\\机器学习\\qwen-agent'
    }
  },
  {
    id: 14,
    name: 'Coze · 党务智能问答平台',
    cat: 'ai',
    badge: 'AI应用',
    badgeClass: 'badge-ai',
    tags: ['Python','FastAPI','CozeAPI','SSE','流式响应','AI问答'],
    icon: 'sparkle',
    difficulty: 2,
    thumb: 'images/suolvtu/智能党务.png',
    shortDesc: '基于字节跳动Coze AI的党务知识智能问答机器人。支持SSE流式响应、多轮对话和党务知识分类导航。',
    detail: {
      overview: '利用Coze（字节跳动AI对话引擎）构建的党务知识智能问答系统。采用Server-Sent Events（SSE）实现打字机式流式输出，提升交互体验。系统内置党务知识分类导航（党的基本理论、组织建设、党风廉政建设、党员权利义务等），支持多轮对话记忆和对话历史管理。',
      features: ['Coze AI智能问答','SSE流式响应','多轮对话','党务知识分类导航','新建/切换对话'],
      techStack: ['Python FastAPI','Coze API','SSE','HTML5+CSS+JS'],
      startCmd: 'pip install fastapi uvicorn cozepy\n# 配置Coze API Token\npython main.py\n# 打开 http://127.0.0.1:8000',
      path: 'E:\\AUniver\\机器学习\\机器小学习自主\\1Python_only_play\\AA_coze-local-proxy'
    }
  },
  {
    id: 15,
    name: '嵌入式AI · 手势识别',
    cat: 'ml',
    badge: 'AI/ML',
    badgeClass: 'badge-ml',
    tags: ['Python','OpenCV','MediaPipe','RK3568','嵌入式','手势识别'],
    icon: 'hand',
    difficulty: 3,
    shortDesc: '基于MediaPipe的实时手势识别系统，部署于RK3568嵌入式ARM开发板。识别手指21个关键点坐标。',
    detail: {
      overview: '面向嵌入式ARM平台的AI应用开发实训项目。使用Google MediaPipe框架在RK3568开发板上实现实时手势关键点检测，可识别单手21个关键点的三维坐标。项目包含完整的环境搭建指南（MediaPipe特定版本兼容性问题处理）和OpenCV基础案例集合。',
      features: ['MediaPipe实时手势检测','21个关键点坐标获取','RK3568嵌入式部署','完整环境搭建教程','OpenCV基础案例集'],
      techStack: ['Python 3.9/3.12','OpenCV','MediaPipe','NumPy','RK3568 ARM平台'],
      startCmd: '激活 yueqian_py39 或 .venv\ncd RK35手势识别\npython main.py',
      path: 'E:\\AUniver\\机器学习\\机器小学习自主\\粤嵌'
    }
  },
  {
    id: 16,
    name: '花火书房 · PWA知识库',
    cat: 'web',
    badge: 'Web前端',
    badgeClass: 'badge-web',
    tags: ['HTML5','CSS3','JavaScript','PWA','ServiceWorker','离线缓存'],
    icon: 'book',
    difficulty: 1,
    shortDesc: '个人知识库学习笔记PWA门户。多主题"魔法书"涵盖数据结构、NLP、Django等教程，支持离线访问。',
    detail: {
      overview: '一个渐进式Web应用(PWA)，将学习笔记包装成"魔法书"概念。书架导航展示多主题教程（数据结构、NLP、Django、Python、SQL、HTML等），包含PDF阅读器和个人作品展示。通过Service Worker实现离线缓存，无网络也能访问。',
      features: ['多主题"魔法书"教程','书架式UI导航','PDF阅读器','PWA离线访问','Service Worker自动缓存','个人作品展示'],
      techStack: ['HTML5+CSS3+JS (ES6+)','Service Worker PWA','纯前端无后端'],
      startCmd: '直接用浏览器打开 index.html',
      path: 'E:\\ASelf\\runoob-tutorials'
    }
  },
  {
    id: 17,
    name: 'Workspace · GrapesJS编辑器',
    cat: 'web',
    badge: 'Web全栈',
    badgeClass: 'badge-web',
    tags: ['Django','Python','SQLite','GrapesJS','拖拽编辑','可视化'],
    icon: 'wrench',
    difficulty: 2,
    shortDesc: '基于Django的Workspace，内置GrapesJS可视化拖拽网页编辑器。项目管理+内容编辑+素材管理的完整平台。',
    detail: {
      overview: '一个整合Django后端与GrapesJS前端可视化编辑器的全栈Workspace平台。用户可通过拖拽方式构建网页内容（标题/文本/代码块/图片/分割线等），系统将编辑器的JSON输出转化为可渲染的HTML。同时支持项目、图片素材、文本素材和心得笔记的管理。',
      features: ['GrapesJS拖拽网页编辑器','项目管理CRUD','图片/文本/笔记素材管理','用户认证系统','blocks_to_html自定义渲染引擎','中文界面(zh-hans)'],
      techStack: ['Python Django 5.2','SQLite','GrapesJS','HTML5+CSS3+jQuery'],
      startCmd: 'cd workspace\npip install django\npython manage.py runserver\n# 打开 http://localhost:8000',
      path: 'E:\\ASelf\\Web\\workspace'
    }
  },
  {
    id: 18,
    name: 'Showcase · 项目管理平台',
    cat: 'web',
    badge: 'Web全栈',
    badgeClass: 'badge-web',
    tags: ['Node.js','Express','Multer','REST API','JSON','管理后台'],
    icon: 'folder',
    difficulty: 2,
    shortDesc: '基于Express的项目展示管理平台。支持项目CRUD、文件上传、素材管理和预览托管。JSON文件存储，管理员认证。',
    detail: {
      overview: '一个轻量级的全栈项目展示管理平台。后端使用Express.js提供REST API（项目/图片/文字/笔记的CRUD），前端为单文件SPA（1198行内嵌CSS+JS），包含管理后台和公开浏览两种模式。文件上传通过Multer处理，数据通过JSON文件存储，无需数据库。支持托管HTML模板的预览。',
      features: ['项目CRUD+缩略图上传','图片/文字/笔记素材管理','管理员Token认证','ifrane预览托管','Lightbox图片查看','响应式时间线/网格视图'],
      techStack: ['Node.js + Express 4','Multer','JSON文件存储','原生HTML/CSS/JS (1198行单文件)','REST API设计'],
      startCmd: 'cd showcase\nnpm install\nnpm start\n# 打开 http://localhost:4000\n# 管理员密码: admin123',
      path: 'E:\\ASelf\\Web\\showcase'
    }
  },
  {
    id: 19,
    name: '月薪喵 · 终端桌宠',
    cat: 'tool',
    badge: '工具',
    badgeClass: 'badge-tool',
    tags: ['Python','Pillow','CLI','终端动画','PyInstaller'],
    icon: 'cat',
    difficulty: 1,
    shortDesc: '终端GIF动画渲染的猫咪桌宠。循环播放猫GIF，支持背景音乐和参数调节。可打包为独立exe免Python运行。',
    detail: {
      overview: '一个轻量级的终端桌宠程序，将GIF动画以ASCII/半块字符形式实时渲染在命令行终端中。读取cat.gif循环播放猫咪动画，可选播放music.mp3背景音乐。支持多种参数（--fps帧率、--scale缩放、--margin-rows边距、--smooth平滑、--half-block半块字符）。可通过PyInstaller打包为独立exe。附带代码打字机工具用于录制编程教学视频。',
      features: ['终端GIF动画渲染','猫咪循环动画','背景音乐播放','多参数调节','跨平台(Win/Mac/Linux)','PyInstaller打包exe','代码打字机录制工具'],
      techStack: ['Python 3.10+','Pillow','系统音频API','PyInstaller'],
      startCmd: 'pip install -r requirements.txt && python main.py\n# 或: pip install . && tban-cat\n# Windows: 直接运行 tban-cat-windows.exe',
      path: 'E:\\ASelf\\AISystem\\o6666\\月薪喵\\喵咪桌宠\\SalaryCat-main'
    }
  },
  {
    id: 20,
    name: '党务文章爬虫系统',
    cat: 'tool',
    badge: '工具',
    badgeClass: 'badge-tool',
    tags: ['Python','requests','BeautifulSoup','XPath','PDF','爬虫'],
    icon: 'spider',
    difficulty: 1,
    shortDesc: '从共产党员网定向爬取党规党章等规范性文件。支持HTML转PDF，多版本迭代优化。',
    detail: {
      overview: '一个定向Web爬虫项目，专门用于从共产党员网采集党规党章等规范性文件。覆盖党章、准则、条例、规则、规定、办法、细则等全部层级。经历了多个版本迭代：从最初的XPath路径调试，到半自动化爬取，再到最终的批量自动化爬取与PDF生成。',
      features: ['定向网站爬取','XPath精确定位','HTML转PDF','批量自动化','爬取报告生成','多版本迭代'],
      techStack: ['Python','requests','BeautifulSoup4','XPath','pdfkit+wkhtmltopdf','PyPDF2'],
      startCmd: 'pip install requests beautifulsoup4 pdfkit\npython test1.py  # 或其他脚本',
      path: 'E:\\AUniver\\机器学习\\机器小学习自主\\PACHONG'
    }
  },
  {
    id: 21,
    name: '粤嵌OpenCV学习合集',
    cat: 'ml',
    badge: 'AI/ML',
    badgeClass: 'badge-ml',
    tags: ['Python','OpenCV','Haar Cascade','OCR','人脸检测','车牌识别'],
    icon: 'eye',
    difficulty: 1,
    shortDesc: 'OpenCV计算机视觉基础入门练习集。涵盖视频读取、人脸检测、OCR文字识别等基础案例。',
    detail: {
      overview: '粤嵌嵌入式培训期间的OpenCV学习练习集。包含视频读取（本地文件/摄像头）、人脸检测（Haar Cascade）、人眼检测、车牌检测识别、OCR文字识别（pytesseract）等计算机视觉基础案例，为后续进阶机器视觉项目奠定基础。',
      features: ['本地视频/摄像头读取','Haar Cascade人脸/人眼检测','车牌检测识别','OCR文字识别','基础图像处理'],
      techStack: ['Python 3.12','OpenCV','matplotlib','NumPy','pytesseract','fonttools'],
      startCmd: '.\venv\Scripts\Activate.ps1\ncd opencv案例\npython t1读取本地视频.py\npython t2图片检测人脸.py',
      path: 'E:\\AUniver\\机器学习\\机器小学习自主\\yueqian'
    }
  }
];

// Export
if (typeof module !== 'undefined' && module.exports) { module.exports = projectsData; }
