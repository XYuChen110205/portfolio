// ========== i18n.js — 中英双语翻译引擎 ==========
const LANG_KEY = 'seeyu_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'zh';

function t(key) {
  const val = i18nMap[currentLang]?.[key];
  if (val !== undefined) return val;
  // fallback to zh
  return i18nMap['zh']?.[key] ?? key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  // Re-render everything
  location.reload();
  // In production we'd do: renderAll(); but reload is cleaner
}

function langLabel(lang) {
  return lang === 'zh' ? '中' : 'EN';
}

// ================================================================
// Translation Map
// ================================================================
const i18nMap = {
  zh: {
    // --- Nav ---
    nav_section_nav: '导航',
    nav_home: '首页',
    nav_section_work: '作品',
    nav_projects: '项目作品集',
    nav_section_me: '个人',
    nav_skills: '技术技能',
    nav_about: '关于我',
    nav_contact: '联系方式',
    nav_cta: '联系我',
    tw_roles: ['全栈开发者', 'AI工程师', '计算机视觉工程师'],

    // --- Hero ---
    hero_greeting: '你好，我是',
    hero_title: 'AI & 全栈开发者 / 计算机视觉工程师',
    hero_desc: '专注于 AI、计算机视觉与 Web 全栈技术的交叉融合。',
    hero_btn_projects: '查看项目',
    hero_btn_more: '了解更多',
    hero_stat_projects: '项目作品',
    hero_stat_tech: '技术栈',
    hero_stat_years: '年开发经验',
    hero_scroll: '滚动探索',
    hero_reset_pos: '重置位置',

    // --- Section Headers ---
    sec_projects_tag: 'Portfolio',
    sec_projects_title: '项目作品集',
    sec_projects_desc: '涵盖 AI Agent、深度学习、计算机视觉、Web全栈、桌面应用 等多个领域。点击项目卡片查看详细架构设计与技术分析。',
    sec_about_tag: 'About',
    sec_about_title: '关于我',
    sec_about_desc: '技术成长历程',
    sec_skills_tag: 'Skills',
    sec_skills_title: '技术技能',
    sec_skills_desc: '持续积累的技术栈与工具链',
    sec_contact_tag: 'Contact',
    sec_contact_title: '联系方式',
    sec_contact_desc: '欢迎技术交流与合作探讨',

    // --- Filter ---
    filter_all: '全部项目',
    filter_ai: 'AI 智能',
    filter_web: 'Web 全栈',
    filter_ml: '机器学习/CV',
    filter_tool: '工具',

    // --- Difficulty ---
    diff_1: '入门',
    diff_2: '基础',
    diff_3: '中等',
    diff_4: '进阶',
    diff_5: '复杂',

    // --- Sidebar ---
    sidebar_role: 'AI & Full-Stack Developer',
    sidebar_status: '在线',
    photo_label_pro: '专业照',
    photo_label_life: '生活照',

    // --- Project Short Descriptions ---
    proj_1_short: '以沉浸式数字叙事手法展现平陆运河世纪工程的全貌，融合Three.js 3D渲染与GSAP动画的交互式展览网站。',
    proj_2_short: '三方法对比的车牌识别系统，集成CNN/SVM/EasyOCR，GUI全流程操作，零基础可操作。',
    proj_3_short: '多智能体协作的Windows桌面AI助手。语音唤醒，自然语言交互，PC自动化与微信控制。',
    proj_4_short: '仿iPhone界面的AI恋人角色模拟器，六个可交互App构建完整虚拟恋爱体验。纯前端实现。',
    proj_5_short: '融合Roguelike游戏机制的英语学习工具。词书学习、文章临摹、地下城挑战系统。',
    proj_6_short: '检索增强创作范式的AI影视制作管线。四维基因提取，五层声音设计，Docker部署。',
    proj_7_short: '多角色任务管理系统。番茄钟、日历视图、数据统计、学生/店长/程序员等多种模式。',
    proj_8_short: '大型光伏电站智能巡检SaaS。YOLO检测10类缺陷，红外+可见光联动，3D GIS定位。',
    proj_9_short: '5 AI Agent协作的法律服务平台。智能咨询、律师匹配、案件简报生成，黑客松项目。',
    proj_10_short: '改进YOLOv8的混凝土裂缝检测系统。裂缝测量、颜色分析、PDF报告自动生成，挑战杯作品。',
    proj_11_short: '高光谱成像+SE注意力CNN的牛油果成熟度检测。果实级98%准确率，含消融实验。',
    proj_12_short: '化学实验数据管理平台。OCR数据录入、统计分析、报告生成、6种化学计算器。',
    proj_13_short: '本地Ollama大模型聊天Agent。支持计算器、时间查询、联网搜索三种工具调用。',
    proj_14_short: '基于字节跳动Coze AI的党务知识智能问答。SSE流式响应、多轮对话、知识分类。',
    proj_15_short: '基于MediaPipe的实时手势识别系统，部署于RK3568嵌入式ARM开发板。',
    proj_16_short: '个人知识库学习笔记PWA门户。多主题教程，书架UI，Service Worker离线缓存。',
    proj_17_short: '基于Django的Workspace，内置GrapesJS可视化拖拽网页编辑器。项目管理+内容编辑平台。',
    proj_18_short: '基于Express的项目展示管理平台。支持CRUD、文件上传、素材管理和预览托管。',
    proj_19_short: '终端GIF动画渲染的猫咪桌宠。循环播放猫GIF，支持背景音乐和参数调节。',
    proj_20_short: '从共产党员网定向爬取党规党章等规范性文件。HTML转PDF，多版本迭代。',
    proj_21_short: 'OpenCV计算机视觉基础入门练习集。人脸检测、车牌识别、OCR等基础案例。',

    // --- Detail Panel Headings ---
    detail_overview: '项目概述',
    detail_try: '试用项目',
    detail_background: '项目背景与意义',
    detail_architecture: '系统架构设计',
    detail_flowchart: '核心业务流程',
    detail_features: '核心功能',
    detail_techstack: '技术栈',
    detail_innovation: '创新点与技术特色',
    detail_start: '启动方式',
    detail_path: '项目路径',
    detail_diagram_caption_arch: '系统架构图',
    detail_diagram_caption_flow: '核心流程图',

    // --- Skills ---
    skill_ai: 'AI / 深度学习',
    skill_ai_desc: 'PyTorch, YOLOv8, Ollama, LangChain, LangGraph, Transformers, Sentence-Transformers, Qwen-VL, Coze API',
    skill_web: 'Web前端开发',
    skill_web_desc: 'Vue 3, React 18, TypeScript, HTML5/CSS3, TailwindCSS, Vite, PWA, Framer Motion, Zustand, Pinia',
    skill_backend: '后端服务开发',
    skill_backend_desc: 'Python FastAPI, Flask, Django, Node.js Express, Cloudflare Worker, WebSocket, SSE, RESTful API',
    skill_db: '数据库与存储',
    skill_db_desc: 'PostgreSQL, TimescaleDB, SQLite, Qdrant向量数据库, Supabase, IndexedDB (Dexie), Redis',
    skill_cv: '计算机视觉',
    skill_cv_desc: 'OpenCV, YOLO系列(v5/v8/v11/v12), MediaPipe, OCR/Tesseract, 高光谱分析, SIFT特征匹配',
    skill_devops: 'DevOps与工具链',
    skill_devops_desc: 'Docker/Docker Compose, Git/GitHub, GitHub Actions CI/CD, PyInstaller, FFmpeg, Nginx, Vercel, Cloudflare Pages',

    // --- About Timeline ---
    tl_1_period: '2024 – 至今',
    tl_1_title: 'AI Agent开发 & 深度学习科研',
    tl_1_desc: '深入AI Agent多智能体协作（LangChain/LangGraph）、计算机视觉（YOLO系列）、NLP等前沿领域。参与挑战杯项目、黑客松比赛，将AI技术落地于法律咨询、光伏检测、英语学习等实际场景，积累端到端的AI产品开发经验。',
    tl_2_period: '2023 – 2024',
    tl_2_title: 'Web全栈 & 深度学习入门',
    tl_2_desc: '系统学习Vue3/React前端框架、FastAPI/Django后端框架，掌握YOLOv8、PyTorch、OpenCV等深度学习与计算机视觉工具。构建多个Web全栈项目和机器视觉应用，从单体应用到微服务架构逐步演进。',
    tl_3_period: '2022 – 2023',
    tl_3_title: '编程基础构建期',
    tl_3_desc: '系统学习Python、HTML/CSS/JavaScript、C/C++等编程语言，掌握数据结构与算法核心知识。完成多个小型练手项目，初步建立软件工程思维。通过爬虫、GUI、Web等项目实践，快速积累开发经验。',
    tl_4_period: '2021',
    tl_4_title: '编程启蒙',
    tl_4_desc: '从Hello World起步，开启技术探索之旅。对计算机世界产生浓厚兴趣，确立以AI与Web技术为核心的发展方向。',

    // --- Contact ---
    contact_github: 'GitHub',
    contact_github_desc: '查看全部开源项目',
    contact_github_link: 'github.com/XYuChen110205',
    contact_mail: '联系方式',
    contact_mail_desc: '欢迎技术交流与合作',
    contact_mail_link: '通过 GitHub Issues 联系',
    contact_about: '关于我',
    contact_about_desc: 'AI与全栈技术爱好者，专注于AI Agent、计算机视觉与Web全栈的交叉领域，热爱将前沿技术落地为实用产品。',

    // --- Footer ---
    footer_text: 'Mermaid.js for architecture diagrams | 全部项目为独立开发完成',
    footer_built_pre: '用',
    footer_built_post: '与纯 HTML/CSS/JS 构建 — © 2026 Seeyu',
    page_title: 'Seeyu · 个人作品集',
    page_desc: 'Seeyu 个人作品集 - AI & 全栈开发者的项目展示',

    // --- Misc ---
    online: '在线',
  },

  // ================================================================
  en: {
    // --- Nav ---
    nav_section_nav: 'Navigate',
    nav_home: 'Home',
    nav_section_work: 'Work',
    nav_projects: 'Portfolio',
    nav_section_me: 'Personal',
    nav_skills: 'Skills',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_cta: 'Contact Me',
    tw_roles: ['Full-Stack Developer', 'AI Engineer', 'Computer Vision Engineer'],

    // --- Hero ---
    hero_greeting: 'Hello, I am',
    hero_title: 'AI & Full-Stack Developer / Computer Vision Engineer',
    hero_desc: 'Focused on the intersection of AI, Computer Vision, and Web Full-Stack technologies.',
    hero_btn_projects: 'View Projects',
    hero_btn_more: 'Learn More',
    hero_stat_projects: 'Projects',
    hero_stat_tech: 'Tech Stack',
    hero_stat_years: 'Years of Exp.',
    hero_scroll: 'Scroll Down',
    hero_reset_pos: 'Reset Positions',

    // --- Section Headers ---
    sec_projects_tag: 'Portfolio',
    sec_projects_title: 'Project Portfolio',
    sec_projects_desc: 'Covering AI Agent, Deep Learning, Computer Vision, Web Full-Stack, Desktop Apps and more. Click project cards for detailed architecture & technical analysis.',
    sec_about_tag: 'About',
    sec_about_title: 'About Me',
    sec_about_desc: 'My tech journey',
    sec_skills_tag: 'Skills',
    sec_skills_title: 'Technical Skills',
    sec_skills_desc: 'Continuously growing tech stack & toolchain',
    sec_contact_tag: 'Contact',
    sec_contact_title: 'Get in Touch',
    sec_contact_desc: 'Open to collaboration & discussion',

    // --- Filter ---
    filter_all: 'All',
    filter_ai: 'AI',
    filter_web: 'Web Full-Stack',
    filter_ml: 'ML / CV',
    filter_tool: 'Tools',

    // --- Difficulty ---
    diff_1: 'Beginner',
    diff_2: 'Basic',
    diff_3: 'Medium',
    diff_4: 'Advanced',
    diff_5: 'Complex',

    // --- Sidebar ---
    sidebar_role: 'AI & Full-Stack Developer',
    sidebar_status: 'Online',
    photo_label_pro: 'Professional',
    photo_label_life: 'Lifestyle',

    // --- Project Short Descriptions ---
    proj_1_short: 'An immersive digital narrative website showcasing the Pinglu Canal megaproject, blending Three.js 3D rendering with GSAP animations.',
    proj_2_short: 'A license plate recognition system comparing CNN/SVM/EasyOCR methods with a full GUI workflow — zero coding required.',
    proj_3_short: 'A multi-agent Windows desktop AI assistant with voice wake-up, natural language interaction, PC automation, and WeChat control.',
    proj_4_short: 'An iPhone-style AI companion simulator with six interactive apps, building a complete virtual relationship experience — pure frontend.',
    proj_5_short: 'An English learning tool blending Roguelike game mechanics with vocabulary mastery, article transcription, and dungeon challenges.',
    proj_6_short: 'A Retrieval-Augmented Creation pipeline for AI filmmaking. Four-dimensional gene extraction, five-layer sound design, Docker deployment.',
    proj_7_short: 'A multi-role task management system featuring Pomodoro timers, calendar views, analytics, and role-based modes (Student/Manager/Dev).',
    proj_8_short: 'A large-scale solar farm intelligent inspection SaaS. YOLO detects 10 defect types, infrared + visible dual-spectrum, 3D GIS mapping.',
    proj_9_short: 'A 5-AI-Agent legal service platform. Smart consultation, lawyer matching, case brief generation — a hackathon project.',
    proj_10_short: 'An improved YOLOv8 concrete crack detection system. Crack measurement, color analysis, auto PDF/Word report — Challenge Cup entry.',
    proj_11_short: 'Hyperspectral imaging + SE-attention CNN for avocado maturity detection. 98% fruit-level accuracy with ablation studies.',
    proj_12_short: 'A chemistry lab data management platform with OCR data entry, statistical analysis, report generation, and 6 built-in calculators.',
    proj_13_short: 'A local Ollama LLM chat agent with calculator, time query, and web search tool-calling capabilities.',
    proj_14_short: 'A Party-affairs Q&A bot powered by ByteDance Coze AI with SSE streaming, multi-turn dialogue, and knowledge classification.',
    proj_15_short: 'A real-time gesture recognition system using MediaPipe, deployed on RK3568 embedded ARM development board.',
    proj_16_short: 'A personal knowledge base PWA portal with multi-topic tutorials, bookshelf UI, and Service Worker offline caching.',
    proj_17_short: 'A Django-powered workspace with an integrated GrapesJS drag-and-drop visual web editor for project management & content editing.',
    proj_18_short: 'An Express-based project showcase management platform with CRUD, file uploads, asset management, and preview hosting.',
    proj_19_short: 'A terminal GIF-animated cat desktop pet. Loops cat GIFs with optional background music and adjustable parameters.',
    proj_20_short: 'A targeted web crawler for Party regulation documents from CPC News, with HTML-to-PDF conversion and multi-version iteration.',
    proj_21_short: 'An OpenCV computer vision fundamentals exercise collection covering face detection, license plate recognition, OCR, and more.',

    // --- Detail Panel Headings ---
    detail_overview: 'Overview',
    detail_try: 'Try it',
    detail_background: 'Background & Significance',
    detail_architecture: 'System Architecture',
    detail_flowchart: 'Core Workflow',
    detail_features: 'Key Features',
    detail_techstack: 'Tech Stack',
    detail_innovation: 'Innovation & Highlights',
    detail_start: 'How to Run',
    detail_path: 'Project Path',
    detail_diagram_caption_arch: 'Figure: System Architecture',
    detail_diagram_caption_flow: 'Figure: Core Workflow',

    // --- Skills ---
    skill_ai: 'AI / Deep Learning',
    skill_ai_desc: 'PyTorch, YOLOv8, Ollama, LangChain, LangGraph, Transformers, Sentence-Transformers, Qwen-VL, Coze API',
    skill_web: 'Web Frontend',
    skill_web_desc: 'Vue 3, React 18, TypeScript, HTML5/CSS3, TailwindCSS, Vite, PWA, Framer Motion, Zustand, Pinia',
    skill_backend: 'Backend Development',
    skill_backend_desc: 'Python FastAPI, Flask, Django, Node.js Express, Cloudflare Worker, WebSocket, SSE, RESTful API',
    skill_db: 'Database & Storage',
    skill_db_desc: 'PostgreSQL, TimescaleDB, SQLite, Qdrant Vector DB, Supabase, IndexedDB (Dexie), Redis',
    skill_cv: 'Computer Vision',
    skill_cv_desc: 'OpenCV, YOLO Series (v5/v8/v11/v12), MediaPipe, OCR/Tesseract, Hyperspectral Analysis, SIFT',
    skill_devops: 'DevOps & Toolchain',
    skill_devops_desc: 'Docker/Docker Compose, Git/GitHub, GitHub Actions CI/CD, PyInstaller, FFmpeg, Nginx, Vercel, Cloudflare Pages',

    // --- About Timeline ---
    tl_1_period: '2024 – Present',
    tl_1_title: 'AI Agent & Deep Learning Research',
    tl_1_desc: 'Diving deep into multi-agent collaboration (LangChain/LangGraph), computer vision (YOLO series), and NLP. Participated in Challenge Cup and hackathons, applying AI to legal consultation, solar inspection, and English learning.',
    tl_2_period: '2023 – 2024',
    tl_2_title: 'Full-Stack Web & Deep Learning Foundations',
    tl_2_desc: 'Systematically learned Vue3/React, FastAPI/Django, YOLOv8/PyTorch, OpenCV. Built multiple full-stack web apps and computer vision projects, evolving from monoliths to microservices.',
    tl_3_period: '2022 – 2023',
    tl_3_title: 'Programming Fundamentals',
    tl_3_desc: 'Learned Python, HTML/CSS/JS, C/C++, mastering data structures & algorithms. Completed crawlers, GUIs, and web projects, building software engineering thinking through hands-on practice.',
    tl_4_period: '2021',
    tl_4_title: 'First Contact with Code',
    tl_4_desc: 'Started with Hello World and never looked back. Discovered a passion for computer science and set AI + Web as my core direction.',

    // --- Contact ---
    contact_github: 'GitHub',
    contact_github_desc: 'All open-source projects',
    contact_github_link: 'github.com/XYuChen110205',
    contact_mail: 'Contact',
    contact_mail_desc: 'Open to tech discussion & collaboration',
    contact_mail_link: 'Reach me via GitHub Issues',
    contact_about: 'About Me',
    contact_about_desc: 'AI and full-stack enthusiast, focused on the intersection of AI Agents, Computer Vision, and Web technologies. Passionate about turning cutting-edge tech into practical products.',

    // --- Footer ---
    footer_text: 'Mermaid.js for architecture diagrams | All projects independently developed',
    footer_built_pre: 'Built with',
    footer_built_post: 'and pure HTML/CSS/JS — © 2026 Seeyu',
    page_title: 'Seeyu · Portfolio',
    page_desc: 'Seeyu Portfolio - Projects by an AI & Full-Stack Developer',

    // --- Misc ---
    online: 'Online',
  },

  // ================================================================
  'zh-TW': {
    // --- Nav ---
    nav_section_nav: '導航',
    nav_home: '首頁',
    nav_section_work: '作品',
    nav_projects: '專案作品集',
    nav_section_me: '個人',
    nav_skills: '技術技能',
    nav_about: '關於我',
    nav_contact: '聯絡方式',
    nav_cta: '聯絡我',
    tw_roles: ['全端開發者', 'AI工程師', '電腦視覺工程師'],

    // --- Hero ---
    hero_greeting: '你好，我是',
    hero_title: 'AI & 全端開發者 / 電腦視覺工程師',
    hero_desc: '專注於 AI、電腦視覺與 Web 全端技術的交叉融合。',
    hero_btn_projects: '查看專案',
    hero_btn_more: '了解更多',
    hero_stat_projects: '專案作品',
    hero_stat_tech: '技術棧',
    hero_stat_years: '年開發經驗',
    hero_scroll: '捲動探索',
    hero_reset_pos: '重設位置',

    // --- Section Headers ---
    sec_projects_tag: 'Portfolio',
    sec_projects_title: '專案作品集',
    sec_projects_desc: '涵蓋 AI Agent、深度學習、電腦視覺、Web 全端、桌面應用 等多個領域。點擊專案卡片查看詳細架構設計與技術分析。',
    sec_about_tag: 'About',
    sec_about_title: '關於我',
    sec_about_desc: '技術成長歷程',
    sec_skills_tag: 'Skills',
    sec_skills_title: '技術技能',
    sec_skills_desc: '持續累積的技術棧與工具鏈',
    sec_contact_tag: 'Contact',
    sec_contact_title: '聯絡方式',
    sec_contact_desc: '歡迎技術交流與合作探討',

    // --- Filter ---
    filter_all: '全部專案',
    filter_ai: 'AI 智慧',
    filter_web: 'Web 全端',
    filter_ml: '機器學習/CV',
    filter_tool: '工具',

    // --- Difficulty ---
    diff_1: '入門',
    diff_2: '基礎',
    diff_3: '中等',
    diff_4: '進階',
    diff_5: '複雜',

    // --- Sidebar ---
    sidebar_role: 'AI & Full-Stack Developer',
    sidebar_status: '線上',
    photo_label_pro: '專業照',
    photo_label_life: '生活照',

    // --- Project Short Descriptions ---
    proj_1_short: '以沉浸式數位敘事手法呈現平陸運河世紀工程的全貌，融合 Three.js 3D 渲染與 GSAP 動畫的互動式展覽網站。',
    proj_2_short: '三方法對比的車牌辨識系統，整合 CNN/SVM/EasyOCR，GUI 全流程操作，零基礎可上手。',
    proj_3_short: '多智慧體協作的 Windows 桌面 AI 助手。語音喚醒、自然語言互動、PC 自動化與微信控制。',
    proj_4_short: '仿 iPhone 介面的 AI 戀人角色模擬器，六個可互動 App 建構完整虛擬戀愛體驗。純前端實現。',
    proj_5_short: '融合 Roguelike 遊戲機制的英語學習工具。單字書學習、文章臨摹、地下城挑戰系統。',
    proj_6_short: '檢索增強創作範式的 AI 影視製作管線。四維基因擷取，五層聲音設計，Docker 部署。',
    proj_7_short: '多角色任務管理系統。番茄鐘、行事曆檢視、資料統計、學生/店長/程式設計師等多種模式。',
    proj_8_short: '大型光電電站智慧巡檢 SaaS。YOLO 偵測 10 類缺陷，紅外線 + 可見光聯動，3D GIS 定位。',
    proj_9_short: '5 個 AI Agent 協作的法律服務平台。智慧諮詢、律師媒合、案件簡報生成，黑客松專案。',
    proj_10_short: '改進 YOLOv8 的混凝土裂縫偵測系統。裂縫量測、顏色分析、PDF 報告自動生成，挑戰盃作品。',
    proj_11_short: '高光譜成像 + SE 注意力 CNN 的酪梨成熟度偵測。果實級 98% 準確率，含消融實驗。',
    proj_12_short: '化學實驗資料管理平台。OCR 資料錄入、統計分析、報告生成、6 種化學計算機。',
    proj_13_short: '本機 Ollama 大模型聊天 Agent。支援計算機、時間查詢、聯網搜尋三種工具呼叫。',
    proj_14_short: '基於位元組跳動 Coze AI 的黨務知識智慧問答。SSE 串流回應、多輪對話、知識分類。',
    proj_15_short: '基於 MediaPipe 的即時手勢辨識系統，部署於 RK3568 嵌入式 ARM 開發板。',
    proj_16_short: '個人知識庫學習筆記 PWA 入口。多主題教學、書架 UI、Service Worker 離線快取。',
    proj_17_short: '基於 Django 的 Workspace，內建 GrapesJS 視覺化拖曳網頁編輯器。專案管理 + 內容編輯平台。',
    proj_18_short: '基於 Express 的專案展示管理平台。支援 CRUD、檔案上傳、素材管理與預覽託管。',
    proj_19_short: '終端機 GIF 動畫渲染的貓咪桌寵。循環播放貓 GIF，支援背景音樂與參數調節。',
    proj_20_short: '從共產黨員網定向爬取黨規黨章等規範性文件。HTML 轉 PDF，多版本迭代。',
    proj_21_short: 'OpenCV 電腦視覺基礎入門練習集。人臉偵測、車牌辨識、OCR 等基礎案例。',

    // --- Detail Panel Headings ---
    detail_overview: '專案概述',
    detail_try: '試用專案',
    detail_background: '專案背景與意義',
    detail_architecture: '系統架構設計',
    detail_flowchart: '核心業務流程',
    detail_features: '核心功能',
    detail_techstack: '技術棧',
    detail_innovation: '創新點與技術特色',
    detail_start: '啟動方式',
    detail_path: '專案路徑',
    detail_diagram_caption_arch: '系統架構圖',
    detail_diagram_caption_flow: '核心流程圖',

    // --- Skills ---
    skill_ai: 'AI / 深度學習',
    skill_ai_desc: 'PyTorch, YOLOv8, Ollama, LangChain, LangGraph, Transformers, Sentence-Transformers, Qwen-VL, Coze API',
    skill_web: 'Web 前端開發',
    skill_web_desc: 'Vue 3, React 18, TypeScript, HTML5/CSS3, TailwindCSS, Vite, PWA, Framer Motion, Zustand, Pinia',
    skill_backend: '後端服務開發',
    skill_backend_desc: 'Python FastAPI, Flask, Django, Node.js Express, Cloudflare Worker, WebSocket, SSE, RESTful API',
    skill_db: '資料庫與儲存',
    skill_db_desc: 'PostgreSQL, TimescaleDB, SQLite, Qdrant 向量資料庫, Supabase, IndexedDB (Dexie), Redis',
    skill_cv: '電腦視覺',
    skill_cv_desc: 'OpenCV, YOLO 系列(v5/v8/v11/v12), MediaPipe, OCR/Tesseract, 高光譜分析, SIFT 特徵比對',
    skill_devops: 'DevOps 與工具鏈',
    skill_devops_desc: 'Docker/Docker Compose, Git/GitHub, GitHub Actions CI/CD, PyInstaller, FFmpeg, Nginx, Vercel, Cloudflare Pages',

    // --- About Timeline ---
    tl_1_period: '2024 – 至今',
    tl_1_title: 'AI Agent 開發 & 深度學習研究',
    tl_1_desc: '深入 AI Agent 多智慧體協作（LangChain/LangGraph）、電腦視覺（YOLO 系列）、NLP 等前沿領域。參與挑戰盃專案、黑客松比賽，將 AI 技術落地於法律諮詢、光電檢測、英語學習等實際場景，累積端到端的 AI 產品開發經驗。',
    tl_2_period: '2023 – 2024',
    tl_2_title: 'Web 全端 & 深度學習入門',
    tl_2_desc: '系統學習 Vue3/React 前端框架、FastAPI/Django 後端框架，掌握 YOLOv8、PyTorch、OpenCV 等深度學習與電腦視覺工具。建構多個 Web 全端專案與機器視覺應用，從單體應用到微服務架構逐步演進。',
    tl_3_period: '2022 – 2023',
    tl_3_title: '程式基礎建構期',
    tl_3_desc: '系統學習 Python、HTML/CSS/JavaScript、C/C++ 等程式語言，掌握資料結構與演算法核心知識。完成多個小型練手專案，初步建立軟體工程思維。透過爬蟲、GUI、Web 等專案實踐，快速累積開發經驗。',
    tl_4_period: '2021',
    tl_4_title: '程式啟蒙',
    tl_4_desc: '從 Hello World 起步，開啟技術探索之旅。對電腦世界產生濃厚興趣，確立以 AI 與 Web 技術為核心的發展方向。',

    // --- Contact ---
    contact_github: 'GitHub',
    contact_github_desc: '查看全部開源專案',
    contact_github_link: 'github.com/XYuChen110205',
    contact_mail: '聯絡方式',
    contact_mail_desc: '歡迎技術交流與合作',
    contact_mail_link: '透過 GitHub Issues 聯絡',
    contact_about: '關於我',
    contact_about_desc: 'AI 與全端技術愛好者，專注於 AI Agent、電腦視覺與 Web 全端的交叉領域，熱愛將前沿技術落地為實用產品。',

    // --- Footer ---
    footer_text: 'Mermaid.js for architecture diagrams | 全部專案為獨立開發完成',
    footer_built_pre: '用',
    footer_built_post: '與純 HTML/CSS/JS 構建 — © 2026 Seeyu',
    page_title: 'Seeyu · 個人作品集',
    page_desc: 'Seeyu 個人作品集 - AI & 全端開發者的專案展示',

    // --- Misc ---
    online: '線上',
  },

  // ================================================================
  ja: {
    // --- Nav ---
    nav_section_nav: 'ナビ',
    nav_home: 'ホーム',
    nav_section_work: '作品',
    nav_projects: 'ポートフォリオ',
    nav_section_me: 'プロフィール',
    nav_skills: 'スキル',
    nav_about: '私について',
    nav_contact: 'お問い合わせ',
    nav_cta: 'お問い合わせ',
    tw_roles: ['フルスタック開発者', 'AIエンジニア', 'コンピュータビジョンエンジニア'],

    // --- Hero ---
    hero_greeting: 'こんにちは、私は',
    hero_title: 'AI & フルスタック開発者 / コンピュータビジョンエンジニア',
    hero_desc: 'AI・コンピュータビジョン・Web フルスタック技術の融合に注力しています。',
    hero_btn_projects: 'プロジェクトを見る',
    hero_btn_more: '詳しく見る',
    hero_stat_projects: 'プロジェクト',
    hero_stat_tech: '技術スタック',
    hero_stat_years: '年の開発経験',
    hero_scroll: 'スクロール',
    hero_reset_pos: '位置をリセット',

    // --- Section Headers ---
    sec_projects_tag: 'Portfolio',
    sec_projects_title: 'プロジェクト一覧',
    sec_projects_desc: 'AI エージェント、深層学習、コンピュータビジョン、Web フルスタック、デスクトップアプリなど幅広い領域をカバー。カードをクリックすると詳細なアーキテクチャと技術分析を確認できます。',
    sec_about_tag: 'About',
    sec_about_title: '私について',
    sec_about_desc: '技術的な成長の歩み',
    sec_skills_tag: 'Skills',
    sec_skills_title: '技術スキル',
    sec_skills_desc: '積み重ねてきた技術スタックとツールチェーン',
    sec_contact_tag: 'Contact',
    sec_contact_title: 'お問い合わせ',
    sec_contact_desc: '技術交流やコラボレーションを歓迎します',

    // --- Filter ---
    filter_all: 'すべて',
    filter_ai: 'AI',
    filter_web: 'Web フルスタック',
    filter_ml: 'ML / CV',
    filter_tool: 'ツール',

    // --- Difficulty ---
    diff_1: '入門',
    diff_2: '基礎',
    diff_3: '中級',
    diff_4: '上級',
    diff_5: '高度',

    // --- Sidebar ---
    sidebar_role: 'AI & Full-Stack Developer',
    sidebar_status: 'オンライン',
    photo_label_pro: 'プロフィール写真',
    photo_label_life: '日常写真',

    // --- Project Short Descriptions ---
    proj_1_short: '平陸運河の世紀の大工業を没入型デジタルナラティブで表現。Three.js の 3D レンダリングと GSAP アニメーションを融合したインタラクティブ展示サイト。',
    proj_2_short: 'CNN/SVM/EasyOCR の3手法を比較するナンバープレート認識システム。GUI による全工程操作で初心者でも扱えます。',
    proj_3_short: 'マルチエージェント協調型の Windows デスクトップ AI アシスタント。音声起動、自然言語対話、PC 自動化と WeChat 制御。',
    proj_4_short: 'iPhone 風 UI の AI 恋人シミュレーター。6つのインタラクティブアプリで完全な仮想恋愛体験を構築。フロントエンドのみで実装。',
    proj_5_short: 'ローグライクのゲーム要素を取り入れた英語学習ツール。単語帳学習、文章模写、ダンジョン挑戦システム。',
    proj_6_short: '検索拡張型の AI 映像制作パイプライン。四次元遺伝子抽出、五層のサウンドデザイン、Docker デプロイ。',
    proj_7_short: 'マルチロールのタスク管理システム。ポモドーロ、カレンダー表示、データ統計、学生/店長/開発者など複数モード。',
    proj_8_short: '大規模太陽光発電所のスマート点検 SaaS。YOLO で10種の欠陥を検出、赤外線+可視光連動、3D GIS 測位。',
    proj_9_short: '5つの AI エージェントが協調する法律サービスプラットフォーム。スマート相談、弁護士マッチング、案件概要生成。ハッカソン作品。',
    proj_10_short: 'YOLOv8 を改良したコンクリートひび割れ検出システム。ひび計測、色分析、PDF レポート自動生成。チャレンジカップ出品作。',
    proj_11_short: 'ハイパースペクトル撮像 + SE アテンション CNN によるアボカド熟度検出。果実レベルで98%の精度、アブレーション実験付き。',
    proj_12_short: '化学実験データ管理プラットフォーム。OCR データ入力、統計分析、レポート生成、6種の化学計算機。',
    proj_13_short: 'ローカル Ollama LLM チャットエージェント。電卓、時刻照会、Web 検索の3種類のツール呼び出しに対応。',
    proj_14_short: 'ByteDance Coze AI を用いた党務知識スマート Q&A。SSE ストリーミング応答、マルチターン対話、知識分類。',
    proj_15_short: 'MediaPipe ベースのリアルタイムジェスチャー認識システム。RK3568 組込み ARM 開発ボードに展開。',
    proj_16_short: '個人ナレッジベースの学習ノート PWA ポータル。マルチトピックチュートリアル、本棚 UI、Service Worker オフラインキャッシュ。',
    proj_17_short: 'Django 製のワークスペース。GrapesJS ビジュアルドラッグ&ドロップ Web エディタを内蔵。プロジェクト管理+コンテンツ編集プラットフォーム。',
    proj_18_short: 'Express ベースのプロジェクト展示管理プラットフォーム。CRUD、ファイルアップロード、素材管理、プレビューホスティングに対応。',
    proj_19_short: 'ターミナルで GIF アニメを描画する猫のデスクトップペット。猫 GIF をループ再生、BGM やパラメータ調整に対応。',
    proj_20_short: '共産党員網から党規約などの規範文書を対象クロール。HTML を PDF へ変換、複数バージョンで反復。',
    proj_21_short: 'OpenCV コンピュータビジョン入門練習集。顔検出、ナンバープレート認識、OCR などの基礎事例。',

    // --- Detail Panel Headings ---
    detail_overview: '概要',
    detail_try: '試してみる',
    detail_background: '背景と意義',
    detail_architecture: 'システムアーキテクチャ',
    detail_flowchart: '主要業務フロー',
    detail_features: '主な機能',
    detail_techstack: '技術スタック',
    detail_innovation: '革新性と技術的特徴',
    detail_start: '起動方法',
    detail_path: 'プロジェクトパス',
    detail_diagram_caption_arch: 'システム構成図',
    detail_diagram_caption_flow: 'コアフロー図',

    // --- Skills ---
    skill_ai: 'AI / 深層学習',
    skill_ai_desc: 'PyTorch, YOLOv8, Ollama, LangChain, LangGraph, Transformers, Sentence-Transformers, Qwen-VL, Coze API',
    skill_web: 'Web フロントエンド',
    skill_web_desc: 'Vue 3, React 18, TypeScript, HTML5/CSS3, TailwindCSS, Vite, PWA, Framer Motion, Zustand, Pinia',
    skill_backend: 'バックエンド開発',
    skill_backend_desc: 'Python FastAPI, Flask, Django, Node.js Express, Cloudflare Worker, WebSocket, SSE, RESTful API',
    skill_db: 'データベースとストレージ',
    skill_db_desc: 'PostgreSQL, TimescaleDB, SQLite, Qdrant ベクトル DB, Supabase, IndexedDB (Dexie), Redis',
    skill_cv: 'コンピュータビジョン',
    skill_cv_desc: 'OpenCV, YOLO シリーズ(v5/v8/v11/v12), MediaPipe, OCR/Tesseract, ハイパースペクトル分析, SIFT 特徴マッチング',
    skill_devops: 'DevOps とツールチェーン',
    skill_devops_desc: 'Docker/Docker Compose, Git/GitHub, GitHub Actions CI/CD, PyInstaller, FFmpeg, Nginx, Vercel, Cloudflare Pages',

    // --- About Timeline ---
    tl_1_period: '2024 – 現在',
    tl_1_title: 'AI エージェント開発 & 深層学習研究',
    tl_1_desc: 'AI エージェントのマルチエージェント協調（LangChain/LangGraph）、コンピュータビジョン（YOLO シリーズ）、NLP などの最先端領域を深掘り。チャレンジカップやハッカソンに参加し、法律相談・太陽光点検・英語学習などの実場面へ AI を応用し、エンドツーエンドの AI プロダクト開発経験を積みました。',
    tl_2_period: '2023 – 2024',
    tl_2_title: 'Web フルスタック & 深層学習入門',
    tl_2_desc: 'Vue3/React、FastAPI/Django を体系的に学び、YOLOv8・PyTorch・OpenCV などの深層学習・CV ツールを習得。複数の Web フルスタックおよびマシンビジョンアプリを構築し、モノリスからマイクロサービスへ段階的に発展させました。',
    tl_3_period: '2022 – 2023',
    tl_3_title: 'プログラミング基礎の構築',
    tl_3_desc: 'Python、HTML/CSS/JavaScript、C/C++ などを体系的に学習し、データ構造とアルゴリズムの核心を習得。小規模な練習プロジェクトを多数完成させ、ソフトウェアエンジニアリング思考を形成しました。',
    tl_4_period: '2021',
    tl_4_title: 'プログラミングとの出会い',
    tl_4_desc: 'Hello World から技術探求の旅を開始。コンピュータの世界に強い興味を持ち、AI と Web を核とする方向性を確立しました。',

    // --- Contact ---
    contact_github: 'GitHub',
    contact_github_desc: 'すべての OSS プロジェクトを見る',
    contact_github_link: 'github.com/XYuChen110205',
    contact_mail: '連絡先',
    contact_mail_desc: '技術交流・協業を歓迎します',
    contact_mail_link: 'GitHub Issues から連絡',
    contact_about: '私について',
    contact_about_desc: 'AI とフルスタックの愛好家。AI エージェント、コンピュータビジョン、Web の交差領域に注力し、先端技術を実用的なプロダクトへと落とし込むことに情熱を注いでいます。',

    // --- Footer ---
    footer_text: 'アーキテクチャ図に Mermaid.js を使用 | すべてのプロジェクトを単独で開発',
    footer_built_pre: '',
    footer_built_post: 'と純粋な HTML/CSS/JS で構築 — © 2026 Seeyu',
    page_title: 'Seeyu · ポートフォリオ',
    page_desc: 'Seeyu ポートフォリオ - AI & フルスタック開発者のプロジェクト集',

    // --- Misc ---
    online: 'オンライン',
  },

  // ================================================================
  ko: {
    // --- Nav ---
    nav_section_nav: '내비게이션',
    nav_home: '홈',
    nav_section_work: '작품',
    nav_projects: '포트폴리오',
    nav_section_me: '프로필',
    nav_skills: '기술',
    nav_about: '소개',
    nav_contact: '연락처',
    nav_cta: '문의하기',
    tw_roles: ['풀스택 개발자', 'AI 엔지니어', '컴퓨터 비전 엔지니어'],

    // --- Hero ---
    hero_greeting: '안녕하세요, 저는',
    hero_title: 'AI & 풀스택 개발자 / 컴퓨터 비전 엔지니어',
    hero_desc: '인공지능, 컴퓨터 비전, 웹 풀스택 기술의 융합에 집중합니다.',
    hero_btn_projects: '프로젝트 보기',
    hero_btn_more: '더 알아보기',
    hero_stat_projects: '프로젝트',
    hero_stat_tech: '기술 스택',
    hero_stat_years: '년 개발 경력',
    hero_scroll: '스크롤',
    hero_reset_pos: '위치 초기화',

    // --- Section Headers ---
    sec_projects_tag: 'Portfolio',
    sec_projects_title: '프로젝트 포트폴리오',
    sec_projects_desc: 'AI 에이전트, 딥러닝, 컴퓨터 비전, 웹 풀스택, 데스크톱 앱 등 다양한 분야를 아우릅니다. 카드를 클릭하면 상세 아키텍처와 기술 분석을 볼 수 있습니다.',
    sec_about_tag: 'About',
    sec_about_title: '소개',
    sec_about_desc: '기술 성장 과정',
    sec_skills_tag: 'Skills',
    sec_skills_title: '기술 역량',
    sec_skills_desc: '꾸준히 쌓아온 기술 스택과 툴체인',
    sec_contact_tag: 'Contact',
    sec_contact_title: '연락처',
    sec_contact_desc: '기술 교류와 협업을 환영합니다',

    // --- Filter ---
    filter_all: '전체',
    filter_ai: 'AI',
    filter_web: '웹 풀스택',
    filter_ml: 'ML / CV',
    filter_tool: '도구',

    // --- Difficulty ---
    diff_1: '입문',
    diff_2: '기초',
    diff_3: '중급',
    diff_4: '고급',
    diff_5: '복잡',

    // --- Sidebar ---
    sidebar_role: 'AI & Full-Stack Developer',
    sidebar_status: '온라인',
    photo_label_pro: '프로필 사진',
    photo_label_life: '일상 사진',

    // --- Project Short Descriptions ---
    proj_1_short: '핑루 운하 세기의 대공사를 몰입형 디지털 내러티브로 표현. Three.js 3D 렌더링과 GSAP 애니메이션을 결합한 인터랙티브 전시 웹사이트.',
    proj_2_short: 'CNN/SVM/EasyOCR 세 가지 방법을 비교하는 번호판 인식 시스템. GUI 전체 워크플로우로 초보자도 사용 가능.',
    proj_3_short: '멀티 에이전트 협업형 Windows 데스크톱 AI 비서. 음성 호출, 자연어 상호작용, PC 자동화 및 WeChat 제어.',
    proj_4_short: 'iPhone 스타일 UI의 AI 연인 시뮬레이터. 6개의 인터랙티브 앱으로 완전한 가상 연애 경험 구현. 순수 프런트엔드.',
    proj_5_short: '로그라이크 게임 요소를 결합한 영어 학습 도구. 단어장 학습, 문장 필사, 던전 챌린지 시스템.',
    proj_6_short: '검색 증강 창작 방식의 AI 영상 제작 파이프라인. 4차원 유전자 추출, 5계층 사운드 디자인, Docker 배포.',
    proj_7_short: '멀티 역할 작업 관리 시스템. 뽀모도로, 캘린더 뷰, 데이터 통계, 학생/점장/개발자 등 다양한 모드.',
    proj_8_short: '대규모 태양광 발전소 스마트 점검 SaaS. YOLO로 10종 결함 감지, 적외선+가시광 연동, 3D GIS 측위.',
    proj_9_short: '5개 AI 에이전트가 협업하는 법률 서비스 플랫폼. 스마트 상담, 변호사 매칭, 사건 브리핑 생성. 해커톤 프로젝트.',
    proj_10_short: 'YOLOv8을 개선한 콘크리트 균열 감지 시스템. 균열 측정, 색상 분석, PDF 보고서 자동 생성. 챌린지컵 출품작.',
    proj_11_short: '초분광 이미징 + SE 어텐션 CNN 기반 아보카도 성숙도 감지. 과실 단위 98% 정확도, 소거 실험 포함.',
    proj_12_short: '화학 실험 데이터 관리 플랫폼. OCR 데이터 입력, 통계 분석, 보고서 생성, 6종 화학 계산기.',
    proj_13_short: '로컬 Ollama LLM 채팅 에이전트. 계산기, 시간 조회, 웹 검색 세 가지 도구 호출 지원.',
    proj_14_short: 'ByteDance Coze AI 기반 당무 지식 스마트 Q&A. SSE 스트리밍 응답, 멀티턴 대화, 지식 분류.',
    proj_15_short: 'MediaPipe 기반 실시간 제스처 인식 시스템. RK3568 임베디드 ARM 개발 보드에 배포.',
    proj_16_short: '개인 지식베이스 학습 노트 PWA 포털. 멀티 토픽 튜토리얼, 책장 UI, Service Worker 오프라인 캐시.',
    proj_17_short: 'Django 기반 워크스페이스. GrapesJS 비주얼 드래그 앤 드롭 웹 에디터 내장. 프로젝트 관리+콘텐츠 편집 플랫폼.',
    proj_18_short: 'Express 기반 프로젝트 전시 관리 플랫폼. CRUD, 파일 업로드, 소재 관리, 미리보기 호스팅 지원.',
    proj_19_short: '터미널에서 GIF 애니메이션을 렌더링하는 고양이 데스크톱 펫. 고양이 GIF 반복 재생, 배경음악과 파라미터 조절 지원.',
    proj_20_short: '공산당원망에서 당규·당장 등 규범 문서를 대상 크롤링. HTML을 PDF로 변환, 여러 버전 반복.',
    proj_21_short: 'OpenCV 컴퓨터 비전 기초 입문 연습 모음. 얼굴 감지, 번호판 인식, OCR 등 기초 사례.',

    // --- Detail Panel Headings ---
    detail_overview: '개요',
    detail_try: '체험하기',
    detail_background: '배경과 의의',
    detail_architecture: '시스템 아키텍처',
    detail_flowchart: '핵심 업무 흐름',
    detail_features: '핵심 기능',
    detail_techstack: '기술 스택',
    detail_innovation: '혁신성과 기술 특징',
    detail_start: '실행 방법',
    detail_path: '프로젝트 경로',
    detail_diagram_caption_arch: '시스템 구성도',
    detail_diagram_caption_flow: '핵심 흐름도',

    // --- Skills ---
    skill_ai: 'AI / 딥러닝',
    skill_ai_desc: 'PyTorch, YOLOv8, Ollama, LangChain, LangGraph, Transformers, Sentence-Transformers, Qwen-VL, Coze API',
    skill_web: '웹 프런트엔드',
    skill_web_desc: 'Vue 3, React 18, TypeScript, HTML5/CSS3, TailwindCSS, Vite, PWA, Framer Motion, Zustand, Pinia',
    skill_backend: '백엔드 개발',
    skill_backend_desc: 'Python FastAPI, Flask, Django, Node.js Express, Cloudflare Worker, WebSocket, SSE, RESTful API',
    skill_db: '데이터베이스와 스토리지',
    skill_db_desc: 'PostgreSQL, TimescaleDB, SQLite, Qdrant 벡터 DB, Supabase, IndexedDB (Dexie), Redis',
    skill_cv: '컴퓨터 비전',
    skill_cv_desc: 'OpenCV, YOLO 시리즈(v5/v8/v11/v12), MediaPipe, OCR/Tesseract, 초분광 분석, SIFT 특징 매칭',
    skill_devops: 'DevOps와 툴체인',
    skill_devops_desc: 'Docker/Docker Compose, Git/GitHub, GitHub Actions CI/CD, PyInstaller, FFmpeg, Nginx, Vercel, Cloudflare Pages',

    // --- About Timeline ---
    tl_1_period: '2024 – 현재',
    tl_1_title: 'AI 에이전트 개발 & 딥러닝 연구',
    tl_1_desc: 'AI 에이전트 멀티 에이전트 협업(LangChain/LangGraph), 컴퓨터 비전(YOLO 시리즈), NLP 등 최첨단 분야를 깊이 파고들었습니다. 챌린지컵과 해커톤에 참여해 법률 상담, 태양광 점검, 영어 학습 등 실제 시나리오에 AI를 적용하며 엔드투엔드 AI 제품 개발 경험을 쌓았습니다.',
    tl_2_period: '2023 – 2024',
    tl_2_title: '웹 풀스택 & 딥러닝 입문',
    tl_2_desc: 'Vue3/React, FastAPI/Django를 체계적으로 학습하고 YOLOv8, PyTorch, OpenCV 등 딥러닝·CV 도구를 익혔습니다. 여러 웹 풀스택 및 머신 비전 앱을 구축하며 모놀리식에서 마이크로서비스로 점진적으로 발전시켰습니다.',
    tl_3_period: '2022 – 2023',
    tl_3_title: '프로그래밍 기초 구축',
    tl_3_desc: 'Python, HTML/CSS/JavaScript, C/C++ 등을 체계적으로 학습하고 자료구조와 알고리즘의 핵심을 익혔습니다. 다수의 소규모 실습 프로젝트를 완성하며 소프트웨어 엔지니어링 사고를 형성했습니다.',
    tl_4_period: '2021',
    tl_4_title: '프로그래밍 입문',
    tl_4_desc: 'Hello World로 시작해 기술 탐구의 여정을 열었습니다. 컴퓨터 세계에 깊은 흥미를 느끼고 AI와 웹을 핵심으로 하는 방향을 확립했습니다.',

    // --- Contact ---
    contact_github: 'GitHub',
    contact_github_desc: '모든 오픈소스 프로젝트 보기',
    contact_github_link: 'github.com/XYuChen110205',
    contact_mail: '연락처',
    contact_mail_desc: '기술 교류와 협업을 환영합니다',
    contact_mail_link: 'GitHub Issues로 연락',
    contact_about: '소개',
    contact_about_desc: 'AI와 풀스택 애호가로 AI 에이전트, 컴퓨터 비전, 웹의 교차 영역에 집중하며 최첨단 기술을 실용적인 제품으로 구현하는 것을 좋아합니다.',

    // --- Footer ---
    footer_text: '아키텍처 다이어그램에 Mermaid.js 사용 | 모든 프로젝트 단독 개발',
    footer_built_pre: '',
    footer_built_post: '와 순수 HTML/CSS/JS로 제작 — © 2026 Seeyu',
    page_title: 'Seeyu · 포트폴리오',
    page_desc: 'Seeyu 포트폴리오 - AI & 풀스택 개발자의 프로젝트 모음',

    // --- Misc ---
    online: '온라인',
  },

  // ================================================================
  it: {
    // --- Nav ---
    nav_section_nav: 'Navigazione',
    nav_home: 'Home',
    nav_section_work: 'Lavori',
    nav_projects: 'Portfolio',
    nav_section_me: 'Profilo',
    nav_skills: 'Competenze',
    nav_about: 'Chi sono',
    nav_contact: 'Contatti',
    nav_cta: 'Contattami',
    tw_roles: ['Sviluppatore Full-Stack', 'Ingegnere AI', 'Ingegnere di Computer Vision'],

    // --- Hero ---
    hero_greeting: 'Ciao, sono',
    hero_title: 'Sviluppatore AI & Full-Stack / Ingegnere di Computer Vision',
    hero_desc: 'Focalizzato sull\'intersezione tra AI, computer vision e sviluppo web full-stack.',
    hero_btn_projects: 'Vedi i progetti',
    hero_btn_more: 'Scopri di più',
    hero_stat_projects: 'Progetti',
    hero_stat_tech: 'Stack tecnologico',
    hero_stat_years: 'Anni di esperienza',
    hero_scroll: 'Scorri',
    hero_reset_pos: 'Reimposta posizioni',

    // --- Section Headers ---
    sec_projects_tag: 'Portfolio',
    sec_projects_title: 'Portfolio progetti',
    sec_projects_desc: 'Copre AI Agent, Deep Learning, Computer Vision, Web Full-Stack, applicazioni desktop e altro. Clicca sulle schede per vedere architettura dettagliata e analisi tecnica.',
    sec_about_tag: 'About',
    sec_about_title: 'Chi sono',
    sec_about_desc: 'Il mio percorso tecnico',
    sec_skills_tag: 'Skills',
    sec_skills_title: 'Competenze tecniche',
    sec_skills_desc: 'Stack e strumenti in costante crescita',
    sec_contact_tag: 'Contact',
    sec_contact_title: 'Contatti',
    sec_contact_desc: 'Aperto a scambi tecnici e collaborazioni',

    // --- Filter ---
    filter_all: 'Tutti',
    filter_ai: 'AI',
    filter_web: 'Web Full-Stack',
    filter_ml: 'ML / CV',
    filter_tool: 'Strumenti',

    // --- Difficulty ---
    diff_1: 'Principiante',
    diff_2: 'Base',
    diff_3: 'Medio',
    diff_4: 'Avanzato',
    diff_5: 'Complesso',

    // --- Sidebar ---
    sidebar_role: 'AI & Full-Stack Developer',
    sidebar_status: 'Online',
    photo_label_pro: 'Foto professionale',
    photo_label_life: 'Foto quotidiana',

    // --- Project Short Descriptions ---
    proj_1_short: 'Un sito espositivo interattivo che racconta la megaopera del Canale di Pinglu con una narrazione digitale immersiva, combinando rendering 3D Three.js e animazioni GSAP.',
    proj_2_short: 'Sistema di riconoscimento targhe che confronta tre metodi (CNN/SVM/EasyOCR) con flusso GUI completo, utilizzabile anche da principianti.',
    proj_3_short: 'Assistente AI desktop Windows multi-agente. Attivazione vocale, interazione in linguaggio naturale, automazione PC e controllo WeChat.',
    proj_4_short: 'Simulatore di partner AI in stile iPhone con sei app interattive per un\'esperienza di relazione virtuale completa. Solo frontend.',
    proj_5_short: 'Strumento di apprendimento dell\'inglese che unisce meccaniche roguelike: studio del vocabolario, ricopiatura di testi e sistema di sfide dungeon.',
    proj_6_short: 'Pipeline di produzione video AI basata su Retrieval-Augmented Creation. Estrazione genetica a quattro dimensioni, sound design a cinque livelli, deploy Docker.',
    proj_7_short: 'Sistema di gestione attività multi-ruolo. Timer Pomodoro, vista calendario, statistiche e modalità Studente/Manager/Sviluppatore.',
    proj_8_short: 'SaaS di ispezione intelligente per grandi impianti fotovoltaici. YOLO rileva 10 tipi di difetti, integrazione infrarosso+visibile, posizionamento GIS 3D.',
    proj_9_short: 'Piattaforma di servizi legali con 5 AI Agent collaborativi. Consulenza smart, matching avvocati, generazione brief. Progetto hackathon.',
    proj_10_short: 'Sistema di rilevamento crepe nel calcestruzzo basato su YOLOv8 migliorato. Misura crepe, analisi colore, report PDF automatici. Opera Challenge Cup.',
    proj_11_short: 'Rilevamento della maturità degli avocado con imaging iperspettrale + CNN con attenzione SE. Accuratezza del 98% a livello di frutto, con studi di ablazione.',
    proj_12_short: 'Piattaforma di gestione dati per laboratori chimici. Inserimento dati OCR, analisi statistica, generazione report e 6 calcolatrici chimiche.',
    proj_13_short: 'Agente chat con LLM Ollama locale. Supporta tre strumenti: calcolatrice, orario e ricerca web.',
    proj_14_short: 'Q&A intelligente sulle conoscenze di partito basato su ByteDance Coze AI. Risposte in streaming SSE, dialogo multi-turno, classificazione della conoscenza.',
    proj_15_short: 'Sistema di riconoscimento gesti in tempo reale basato su MediaPipe, distribuito su scheda di sviluppo ARM embedded RK3568.',
    proj_16_short: 'Portale PWA per note di studio e knowledge base personale. Tutorial multi-argomento, UI a scaffale, cache offline con Service Worker.',
    proj_17_short: 'Workspace basato su Django con editor web visuale drag-and-drop GrapesJS integrato. Piattaforma di gestione progetti e editing contenuti.',
    proj_18_short: 'Piattaforma di gestione e vetrina progetti basata su Express. Supporta CRUD, upload file, gestione risorse e hosting anteprime.',
    proj_19_short: 'Pet da scrivania a forma di gatto reso con GIF animate nel terminale. Riproduce GIF di gatti in loop, con musica di sottofondo e parametri regolabili.',
    proj_20_short: 'Crawler mirato per documenti normativi di partito dal sito CPC News. Conversione HTML in PDF, iterazioni multi-versione.',
    proj_21_short: 'Raccolta di esercizi introduttivi di computer vision con OpenCV. Rilevamento volti, riconoscimento targhe, OCR e altri casi base.',

    // --- Detail Panel Headings ---
    detail_overview: 'Panoramica',
    detail_try: 'Prova',
    detail_background: 'Contesto e significato',
    detail_architecture: 'Architettura del sistema',
    detail_flowchart: 'Flusso operativo principale',
    detail_features: 'Funzionalità chiave',
    detail_techstack: 'Stack tecnologico',
    detail_innovation: 'Innovazione e punti di forza',
    detail_start: 'Come avviare',
    detail_path: 'Percorso del progetto',
    detail_diagram_caption_arch: 'Diagramma dell\'architettura',
    detail_diagram_caption_flow: 'Diagramma di flusso principale',

    // --- Skills ---
    skill_ai: 'AI / Deep Learning',
    skill_ai_desc: 'PyTorch, YOLOv8, Ollama, LangChain, LangGraph, Transformers, Sentence-Transformers, Qwen-VL, Coze API',
    skill_web: 'Frontend Web',
    skill_web_desc: 'Vue 3, React 18, TypeScript, HTML5/CSS3, TailwindCSS, Vite, PWA, Framer Motion, Zustand, Pinia',
    skill_backend: 'Sviluppo Backend',
    skill_backend_desc: 'Python FastAPI, Flask, Django, Node.js Express, Cloudflare Worker, WebSocket, SSE, RESTful API',
    skill_db: 'Database e archiviazione',
    skill_db_desc: 'PostgreSQL, TimescaleDB, SQLite, Qdrant Vector DB, Supabase, IndexedDB (Dexie), Redis',
    skill_cv: 'Computer Vision',
    skill_cv_desc: 'OpenCV, serie YOLO (v5/v8/v11/v12), MediaPipe, OCR/Tesseract, analisi iperspettrale, matching SIFT',
    skill_devops: 'DevOps e toolchain',
    skill_devops_desc: 'Docker/Docker Compose, Git/GitHub, GitHub Actions CI/CD, PyInstaller, FFmpeg, Nginx, Vercel, Cloudflare Pages',

    // --- About Timeline ---
    tl_1_period: '2024 – oggi',
    tl_1_title: 'Sviluppo AI Agent & Ricerca Deep Learning',
    tl_1_desc: 'Approfondimento della collaborazione multi-agente (LangChain/LangGraph), computer vision (serie YOLO) e NLP. Partecipazione a Challenge Cup e hackathon, applicando l\'AI a consulenza legale, ispezione fotovoltaica e apprendimento dell\'inglese, maturando esperienza end-to-end nello sviluppo di prodotti AI.',
    tl_2_period: '2023 – 2024',
    tl_2_title: 'Web Full-Stack & basi di Deep Learning',
    tl_2_desc: 'Studio sistematico di Vue3/React, FastAPI/Django, YOLOv8, PyTorch e OpenCV. Creazione di diversi progetti web full-stack e applicazioni di machine vision, evolvendo da monoliti a microservizi.',
    tl_3_period: '2022 – 2023',
    tl_3_title: 'Costruzione delle basi di programmazione',
    tl_3_desc: 'Studio sistematico di Python, HTML/CSS/JavaScript, C/C++ e padronanza di strutture dati e algoritmi. Completamento di vari progetti pratici, sviluppando una mentalità da ingegneria del software.',
    tl_4_period: '2021',
    tl_4_title: 'Primo contatto con il codice',
    tl_4_desc: 'Dal primo Hello World è iniziato il viaggio nella tecnologia. Nasce una forte passione per l\'informatica e la scelta di AI e Web come direzione principale.',

    // --- Contact ---
    contact_github: 'GitHub',
    contact_github_desc: 'Tutti i progetti open source',
    contact_github_link: 'github.com/XYuChen110205',
    contact_mail: 'Contatti',
    contact_mail_desc: 'Aperto a confronti tecnici e collaborazioni',
    contact_mail_link: 'Contattami via GitHub Issues',
    contact_about: 'Chi sono',
    contact_about_desc: 'Appassionato di AI e full-stack, focalizzato sull\'intersezione tra AI Agent, computer vision e web. Amo trasformare le tecnologie all\'avanguardia in prodotti concreti.',

    // --- Footer ---
    footer_text: 'Mermaid.js per i diagrammi di architettura | Tutti i progetti sviluppati in autonomia',
    footer_built_pre: 'Realizzato con',
    footer_built_post: 'e puro HTML/CSS/JS — © 2026 Seeyu',
    page_title: 'Seeyu · Portfolio',
    page_desc: 'Portfolio di Seeyu - Progetti di uno sviluppatore AI & Full-Stack',

    // --- Misc ---
    online: 'Online',
  },

  // ================================================================
  fr: {
    // --- Nav ---
    nav_section_nav: 'Navigation',
    nav_home: 'Accueil',
    nav_section_work: 'Travaux',
    nav_projects: 'Portfolio',
    nav_section_me: 'Profil',
    nav_skills: 'Compétences',
    nav_about: 'À propos',
    nav_contact: 'Contact',
    nav_cta: 'Me contacter',
    tw_roles: ['Développeur Full-Stack', 'Ingénieur IA', 'Ingénieur en vision par ordinateur'],

    // --- Hero ---
    hero_greeting: 'Bonjour, je suis',
    hero_title: 'Développeur IA & Full-Stack / Ingénieur en vision par ordinateur',
    hero_desc: 'Spécialisé dans l\'intersection de l\'IA, de la vision par ordinateur et du développement web full-stack.',
    hero_btn_projects: 'Voir les projets',
    hero_btn_more: 'En savoir plus',
    hero_stat_projects: 'Projets',
    hero_stat_tech: 'Stack technique',
    hero_stat_years: 'Ans d\'expérience',
    hero_scroll: 'Défiler',
    hero_reset_pos: 'Réinitialiser les positions',

    // --- Section Headers ---
    sec_projects_tag: 'Portfolio',
    sec_projects_title: 'Portfolio de projets',
    sec_projects_desc: 'Couvre les AI Agent, le deep learning, la vision par ordinateur, le web full-stack, les applications de bureau et plus. Cliquez sur les cartes pour voir l\'architecture détaillée et l\'analyse technique.',
    sec_about_tag: 'About',
    sec_about_title: 'À propos',
    sec_about_desc: 'Mon parcours technique',
    sec_skills_tag: 'Skills',
    sec_skills_title: 'Compétences techniques',
    sec_skills_desc: 'Stack et outils en constante évolution',
    sec_contact_tag: 'Contact',
    sec_contact_title: 'Contact',
    sec_contact_desc: 'Ouvert aux échanges techniques et aux collaborations',

    // --- Filter ---
    filter_all: 'Tous',
    filter_ai: 'IA',
    filter_web: 'Web Full-Stack',
    filter_ml: 'ML / CV',
    filter_tool: 'Outils',

    // --- Difficulty ---
    diff_1: 'Débutant',
    diff_2: 'Basique',
    diff_3: 'Moyen',
    diff_4: 'Avancé',
    diff_5: 'Complexe',

    // --- Sidebar ---
    sidebar_role: 'AI & Full-Stack Developer',
    sidebar_status: 'En ligne',
    photo_label_pro: 'Photo professionnelle',
    photo_label_life: 'Photo du quotidien',

    // --- Project Short Descriptions ---
    proj_1_short: 'Un site d\'exposition interactif présentant le méga-projet du canal de Pinglu par une narration numérique immersive, combinant rendu 3D Three.js et animations GSAP.',
    proj_2_short: 'Système de reconnaissance de plaques comparant trois méthodes (CNN/SVM/EasyOCR) avec un workflow GUI complet, accessible aux débutants.',
    proj_3_short: 'Assistant IA de bureau Windows multi-agents. Activation vocale, interaction en langage naturel, automatisation du PC et contrôle de WeChat.',
    proj_4_short: 'Simulateur de partenaire IA façon iPhone avec six applications interactives pour une expérience de relation virtuelle complète. Frontend uniquement.',
    proj_5_short: 'Outil d\'apprentissage de l\'anglais mêlant des mécaniques roguelike : apprentissage du vocabulaire, transcription de textes et système de défis en donjon.',
    proj_6_short: 'Pipeline de production vidéo IA basé sur la création augmentée par récupération. Extraction génétique en quatre dimensions, sound design en cinq couches, déploiement Docker.',
    proj_7_short: 'Système de gestion de tâches multi-rôles. Minuteur Pomodoro, vue calendrier, statistiques et modes Étudiant/Gérant/Développeur.',
    proj_8_short: 'SaaS d\'inspection intelligente pour grandes centrales photovoltaïques. YOLO détecte 10 types de défauts, couplage infrarouge+visible, localisation GIS 3D.',
    proj_9_short: 'Plateforme de services juridiques avec 5 AI Agent collaboratifs. Consultation intelligente, mise en relation d\'avocats, génération de synthèses. Projet hackathon.',
    proj_10_short: 'Système de détection de fissures du béton basé sur un YOLOv8 amélioré. Mesure des fissures, analyse des couleurs, rapports PDF automatiques. Œuvre Challenge Cup.',
    proj_11_short: 'Détection de la maturité des avocats par imagerie hyperspectrale + CNN à attention SE. Précision de 98% au niveau du fruit, avec études d\'ablation.',
    proj_12_short: 'Plateforme de gestion de données pour laboratoire de chimie. Saisie de données OCR, analyse statistique, génération de rapports et 6 calculatrices chimiques.',
    proj_13_short: 'Agent de chat avec LLM Ollama local. Prend en charge trois outils : calculatrice, requête d\'heure et recherche web.',
    proj_14_short: 'Q&R intelligente sur les connaissances du parti basée sur ByteDance Coze AI. Réponses en streaming SSE, dialogue multi-tours, classification des connaissances.',
    proj_15_short: 'Système de reconnaissance de gestes en temps réel basé sur MediaPipe, déployé sur une carte de développement ARM embarquée RK3568.',
    proj_16_short: 'Portail PWA de notes d\'étude et base de connaissances personnelle. Tutoriels multi-sujets, interface bibliothèque, cache hors ligne via Service Worker.',
    proj_17_short: 'Espace de travail basé sur Django avec éditeur web visuel glisser-déposer GrapesJS intégré. Plateforme de gestion de projets et d\'édition de contenu.',
    proj_18_short: 'Plateforme de gestion et de vitrine de projets basée sur Express. Prend en charge CRUD, téléversement de fichiers, gestion des ressources et hébergement d\'aperçus.',
    proj_19_short: 'Mascotte de bureau en forme de chat rendue en GIF animés dans le terminal. Lecture en boucle de GIF de chats, musique de fond et paramètres réglables.',
    proj_20_short: 'Robot d\'exploration ciblé pour les documents réglementaires du parti depuis le site CPC News. Conversion HTML en PDF, itérations multi-versions.',
    proj_21_short: 'Collection d\'exercices d\'introduction à la vision par ordinateur avec OpenCV. Détection de visages, reconnaissance de plaques, OCR et autres cas de base.',

    // --- Detail Panel Headings ---
    detail_overview: 'Aperçu',
    detail_try: 'Essayer',
    detail_background: 'Contexte et enjeux',
    detail_architecture: 'Architecture du système',
    detail_flowchart: 'Flux métier principal',
    detail_features: 'Fonctionnalités clés',
    detail_techstack: 'Stack technique',
    detail_innovation: 'Innovation et points forts',
    detail_start: 'Comment lancer',
    detail_path: 'Chemin du projet',
    detail_diagram_caption_arch: 'Schéma d\'architecture',
    detail_diagram_caption_flow: 'Schéma de flux principal',

    // --- Skills ---
    skill_ai: 'IA / Deep Learning',
    skill_ai_desc: 'PyTorch, YOLOv8, Ollama, LangChain, LangGraph, Transformers, Sentence-Transformers, Qwen-VL, Coze API',
    skill_web: 'Frontend Web',
    skill_web_desc: 'Vue 3, React 18, TypeScript, HTML5/CSS3, TailwindCSS, Vite, PWA, Framer Motion, Zustand, Pinia',
    skill_backend: 'Développement Backend',
    skill_backend_desc: 'Python FastAPI, Flask, Django, Node.js Express, Cloudflare Worker, WebSocket, SSE, RESTful API',
    skill_db: 'Bases de données et stockage',
    skill_db_desc: 'PostgreSQL, TimescaleDB, SQLite, Qdrant Vector DB, Supabase, IndexedDB (Dexie), Redis',
    skill_cv: 'Vision par ordinateur',
    skill_cv_desc: 'OpenCV, série YOLO (v5/v8/v11/v12), MediaPipe, OCR/Tesseract, analyse hyperspectrale, appariement SIFT',
    skill_devops: 'DevOps et toolchain',
    skill_devops_desc: 'Docker/Docker Compose, Git/GitHub, GitHub Actions CI/CD, PyInstaller, FFmpeg, Nginx, Vercel, Cloudflare Pages',

    // --- About Timeline ---
    tl_1_period: '2024 – aujourd\'hui',
    tl_1_title: 'Développement d\'AI Agent & Recherche en Deep Learning',
    tl_1_desc: 'Approfondissement de la collaboration multi-agents (LangChain/LangGraph), de la vision par ordinateur (série YOLO) et du NLP. Participation à des Challenge Cup et hackathons, en appliquant l\'IA à la consultation juridique, l\'inspection photovoltaïque et l\'apprentissage de l\'anglais, avec une expérience de bout en bout dans le développement de produits IA.',
    tl_2_period: '2023 – 2024',
    tl_2_title: 'Web Full-Stack & bases du Deep Learning',
    tl_2_desc: 'Apprentissage systématique de Vue3/React, FastAPI/Django, YOLOv8, PyTorch et OpenCV. Création de plusieurs projets web full-stack et applications de vision par ordinateur, évoluant du monolithe vers les microservices.',
    tl_3_period: '2022 – 2023',
    tl_3_title: 'Construction des bases de la programmation',
    tl_3_desc: 'Apprentissage systématique de Python, HTML/CSS/JavaScript, C/C++ et maîtrise des structures de données et algorithmes. Réalisation de nombreux projets pratiques, développant une pensée d\'ingénierie logicielle.',
    tl_4_period: '2021',
    tl_4_title: 'Premier contact avec le code',
    tl_4_desc: 'Le voyage technique a commencé avec un Hello World. Une forte passion pour l\'informatique est née, avec l\'IA et le Web comme direction principale.',

    // --- Contact ---
    contact_github: 'GitHub',
    contact_github_desc: 'Tous les projets open source',
    contact_github_link: 'github.com/XYuChen110205',
    contact_mail: 'Contact',
    contact_mail_desc: 'Ouvert aux échanges techniques et collaborations',
    contact_mail_link: 'Contactez-moi via GitHub Issues',
    contact_about: 'À propos',
    contact_about_desc: 'Passionné d\'IA et de full-stack, focalisé sur l\'intersection des AI Agent, de la vision par ordinateur et du web. J\'aime transformer les technologies de pointe en produits concrets.',

    // --- Footer ---
    footer_text: 'Mermaid.js pour les schémas d\'architecture | Tous les projets développés en solo',
    footer_built_pre: 'Réalisé avec',
    footer_built_post: 'et du HTML/CSS/JS pur — © 2026 Seeyu',
    page_title: 'Seeyu · Portfolio',
    page_desc: 'Portfolio de Seeyu - Projets d\'un développeur IA & Full-Stack',

    // --- Misc ---
    online: 'En ligne',
  }
};

// Helper: get diff label
function diffLabel(n) {
  const key = 'diff_' + n;
  const labels = { 1: t('diff_1'), 2: t('diff_2'), 3: t('diff_3'), 4: t('diff_4'), 5: t('diff_5') };
  return labels[n] || '';
}
