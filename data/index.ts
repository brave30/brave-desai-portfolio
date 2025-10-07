export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  {name: "Experience", link: "#experience"},
  { name: "Contact", link: "#contact" },
];

// Featured projects for the new section
export type FeaturedProjectTag = "ML" | "Data Engineering" | "Analytics";

export type FeaturedProject = {
  slug: string;
  title: string;
  outcome: string; // measurable result
  problem: string;
  solution: string;
  stack: string[];
  tags: FeaturedProjectTag[];
  github?: string;
  img?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "hubermangpt",
    title: "HubermanGPT",
    outcome: "-42% follow‑up questions; +18% helpfulness score",
    problem: "Users struggled to find precise answers across long podcast transcripts.",
    solution: "Built domain Q&A with QLoRA‑tuned Phi‑2 and multi‑step RAG with guardrails.",
    stack: ["Phi‑2", "QLoRA", "RAG", "LlamaIndex", "Bedrock"],
    tags: ["ML", "Analytics"],
    github: "#",
    img: "/app.svg",
  },
  {
    slug: "transformer-from-scratch",
    title: "Transformer from Scratch",
    outcome: "Trained on toy corpus to 96% token‑level accuracy",
    problem: "Needed a transparent baseline to teach/verify attention behaviors.",
    solution: "Implemented encoder–decoder, MHA, and positional encodings in PyTorch.",
    stack: ["PyTorch", "Attention", "Lightning"],
    tags: ["ML"],
    github: "#",
    img: "/three.svg",
  },
  {
    slug: "flight-price-predictor",
    title: "Flight Price Predictor",
    outcome: "MAPE ↓ to 11.7% on validation",
    problem: "Pricing volatility made budgeting and alerts unreliable for travelers.",
    solution: "Built feature store and models over heterogeneous data with robust eval.",
    stack: ["Pandas", "XGBoost", "Postgres", "Airflow"],
    tags: ["Analytics", "Data Engineering"],
    github: "#",
    img: "/cloud.svg",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Developing scalable AI and ML pipelines to solve complex challenges.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full opacity-50",
    titleClassName: "justify-end",
    img: "./AI.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Quick to adapt, seamless to work with",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Learning.\nApplying.\nImproving.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start items-start",
    img: "./grid.svg",
    spareImg: "./b4.svg",
  },

  {
    id: 5,
    title: "Currently building:\nVisual Multimodal\nSearch Engine",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-start items-start",
    img: "./b5.svg",
    spareImg: "./grid.svg",
  },
  {
    id: 6,
    title: "Want to create intelligent solutions together?",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "HubermanGPT",
    des: "Built a domain Q&A chatbot by chunking Huberman Lab podcasts and fine-tuning Microsoft Phi‑2 with QLoRA; added agentic reasoning and feedback loops for factual, context-aware replies.",
    img: "./app.svg",
    height: "300px",
    width: "400px",
    link: "",
  },
  {
    id: 2,
    title: "Transformer from Scratch",
    des: "Implemented the full Transformer (multi-head attention, positional encodings, encoder–decoder) in PyTorch, following Vaswani et al. (2017).",
    img: "./three.svg",
    height: "300px",
    width: "400px",
    link: "",
  },
  {
    id: 3,
    title: "Siamese Face Recognition + Augmentation",
    des: "Developed a Siamese CNN facial recognition system with augmentation; presented at IEEE WCONF 2024, focusing on robustness and generalization.",
    img: "./face.jpg",
    height: "300px",
    width: "400px",
    link: "",
  },
  {
    id: 4,
    title: "Flight Price Predictor",
    des: "Processed heterogeneous structured and unstructured datasets to build predictive models for flight price estimation.",
    img: "./cloud.svg",
    height: "300px",
    width: "400px",
    link: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Scientist, Growexx",
    desc: "Built AI platforms (Ojavix & Hirin.ai) with advanced NLP and agentic reasoning (Claude 3.7, Llama 3.3); deployed on AWS Bedrock achieving 98%+ retrieval accuracy through optimized vector embeddings and semantic search. Led multi-layered RAG with ReAct planning, reducing response time by 40% and improving user satisfaction scores by 35%. Implemented continuous evaluation pipeline using Comet Opik and DeepEval for real-time model performance monitoring.",
    className: "md:col-span-2",
    thumbnail: "./AI.jpg",
    period: "2023 - 2024",
    location: "Ahmedabad, India",
    company: "Growexx",
  },
  {
    id: 2,
    title: "Data Engineer Intern, Growexx",
    desc: "Maintained large-scale Python/SQL ingestion pipelines; built NLP/ML apps with GPT and Azure Cognitive Search; automated evaluations and improved engagement; documented scalable ML/LLM workflows.",
    className: "md:col-span-2",
    thumbnail: "./git.svg",
    period: "2023",
    location: "Ahmedabad, India",
    company: "Growexx",
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Data Science",
    institution: "Stony Brook University",
    period: "2025 - Present",
    location: "Stony Brook, NY",
    gpa: "In Progress",
    status: "current",
    desc: "Pursuing advanced studies in data science with focus on machine learning, computer vision, and statistical methods. Engaging in cutting-edge research and practical applications.",
    coursework: [
      "Data Structures and Algorithms",
      "Data Analysis", 
      "Introduction to Computer Vision",
      "Machine Learning",
      "Statistical Methods"
    ],
    achievements: [
      "Published research in computer vision",
      "Dean's List recognition"
    ],
    thumbnail: "./s.svg",
  },
  {
    id: 2,
    degree: "B.Tech in Information and Communication Technology",
    institution: "Pandit Deendayal Energy University",
    period: "2019 - 2023",
    location: "Gujarat, India",
    gpa: "3.8/4.0",
    status: "completed",
    desc: "Completed comprehensive undergraduate program in Information and Communication Technology with focus on software development, database systems, and emerging technologies.",
    coursework: [
      "Operating Systems",
      "Database Management Systems",
      "Cloud Computing",
      "Machine Learning",
      "Probability and Statistics",
      "Big Data Analytics",
      "AI Systems"
    ],
    achievements: [
      "Published research in computer vision",
      "Technical Paper Presentation Winner"
    ],
    thumbnail: "./re.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "./link.svg",
    link: "https://linkedin.com/in/bd4",
  },
];