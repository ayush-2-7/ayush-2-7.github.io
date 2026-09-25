// ============================================================
//  ALL SITE CONTENT LIVES HERE. Edit this file, commit, push.
// ============================================================

const SITE = {
  name: "Ayush Rawat",
  role: "Data Scientist · AI & Analytics",
  location: "Munich, Germany",
  status: "Open to Data Science & AI roles",
  pitch:
    "I turn messy enterprise data into models, pipelines, dashboards and LLM-powered tools. " +
    "5 roles so far at Allianz, Munich Re, Samsung Semiconductor and BIBB. " +
    "Based in Munich and finishing my M.Sc. in Web & Data Science (Nov 2026).",

  links: {
    email: "arawat23456@gmail.com",
    github: "https://github.com/ayush-2-7",
    linkedin: "https://www.linkedin.com/in/ayush-rawat-2b9554160/",
    cv: "assets/Ayush_Rawat_CV.pdf",
  },

  stats: [
    { value: "5", label: "industry roles since 2023" },
    { value: "4", label: "companies in Munich & Bonn" },
    { value: "M.Sc.", label: "Web & Data Science" },
    { value: "3", label: "excellent reference letters" },
  ],

  // The role you're in right now. Add bullets as you go.
  now: {
    title: "Working Student, AI Use Case Delivery",
    org: "Allianz Technology · AI Factory",
    period: "Since 09/2026",
    blurb:
      "Part of the team that takes AI use cases from idea to production across the Allianz Group.",
    bullets: [
      // "Add what you've built here, e.g. 'Built an evaluation harness for …'",
    ],
    note: "Started recently. More here soon.",
  },

  experience: [
    {
      title: "Internal Audit Data Analyst",
      org: "Allianz Commercial",
      period: "03/2026 – 08/2026",
      place: "Munich",
      bullets: [
        "Built AI agents on Allianz's internal LLM for the audit team, speeding up data analysis and standardising documentation.",
        "Turned recurring audit test cases into reusable Power BI dashboards for continuous risk monitoring, cutting repetitive manual testing.",
        "Developed and executed audit test cases so auditors could validate controls and spot risk areas across business processes.",
      ],
      tags: ["LLM agents", "Power BI", "Risk analytics"],
    },
    {
      title: "Data Analysis / Data Science Working Student",
      org: "Samsung Semiconductor Europe",
      period: "08/2025 – 02/2026",
      place: "Munich",
      bullets: [
        "Designed and deployed ETL pipelines that use Samsung's in-house LLM to parse unstructured Excel and PDF data, substantially reducing manual effort in the Quality department.",
        "Built Python automation and an internal Streamlit app for data entry and management on MS SQL Server.",
        "Built optimised SQL views and Power BI dashboards tracking quality KPIs against automotive client specifications.",
      ],
      tags: ["Python", "LLM", "ETL", "SQL Server", "Streamlit", "Power BI"],
    },
    {
      title: "Investment Steering Intern",
      org: "Munich Re · Group Investment Management",
      period: "09/2024 – 07/2025",
      place: "Munich",
      bullets: [
        "Designed Power BI dashboards on asset allocation for several international branches, supporting strategic investment decisions.",
        "Acted as Product Owner in an agile IT project to redevelop the dashboards on in-house Power Platform tools.",
        "Streamlined SQL queries and reduced dashboard refresh times; ran EDA on global investment assets.",
      ],
      tags: ["SQL", "Power BI", "EDA", "Product Owner"],
    },
    {
      title: "Data Analyst Working Student",
      org: "Allianz Technology · Global Talent Management",
      period: "10/2023 – 08/2024",
      place: "Munich",
      bullets: [
        "Built Power BI dashboards tracking talent-management KPIs and led multi-source Power BI solutions.",
        "Automated repetitive processes with Power Automate and helped other departments set up their own flows.",
      ],
      tags: ["Power BI", "Power Automate", "Excel"],
    },
    {
      title: "Research Intern",
      org: "Bundesinstitut für Berufsbildung (BIBB)",
      period: "04/2023 – 09/2023",
      place: "Bonn",
      bullets: [
        "Built and automated an ETL pipeline for job-advertisement data with AWS S3, Apache Airflow and PySpark into PostgreSQL.",
        "Created interactive dashboards and automated reports in Apache Superset.",
      ],
      tags: ["PySpark", "Airflow", "AWS S3", "PostgreSQL", "Superset"],
    },
  ],

  projects: [
    {
      name: "Thesis Research Agent",
      kind: "Multi-agent system",
      desc:
        "A local multi-agent research environment on the Claude Agent SDK. An orchestrator routes requests to specialist subagents (thesis, literature research) with scoped tools per agent, logging of every tool call and approval for destructive actions. Includes a CLI, web UI and MCP server.",
      tags: ["Claude Agent SDK", "Multi-agent", "MCP", "Python"],
      links: [{ label: "GitHub", url: "https://github.com/ayush-2-7/thesis-research-agent" }],
      featured: true,
    },
    {
      name: "Social Media AI Content Generator",
      kind: "Agentic AI",
      desc:
        "A Streamlit app where LangGraph agents generate, critique and iteratively refine social media posts, powered by Llama-3.3-70B on the Groq API.",
      tags: ["LangGraph", "LangChain", "Groq", "Streamlit"],
      links: [{ label: "GitHub", url: "https://github.com/ayush-2-7/SocialMedia-AgenticAI" }],
    },
    {
      name: "Fine-tuning Llama 3.2-3B",
      kind: "LLM fine-tuning",
      desc:
        "Fine-tuned Llama 3.2-3B-Instruct to generate football match results from 2003 to 2023 by team and season, using PEFT/LoRA in 4-bit precision, and published the model and tokenizer to the Hugging Face Hub.",
      tags: ["Transformers", "PEFT / LoRA", "BitsAndBytes", "HF Hub"],
      links: [{ label: "Hugging Face", url: "https://huggingface.co/mrp1mple/Llama-3.2-3B-Instruct-Football_Match_History" }],
    },
    {
      name: "Sentiment Analysis with LSTM",
      kind: "Deep learning",
      desc: "An LSTM text-sentiment classifier trained in Keras and served through a small Python app.",
      tags: ["Keras", "LSTM", "NLP"],
      links: [{ label: "GitHub", url: "https://github.com/ayush-2-7/Sentiment_LSTM" }],
    },
    {
      name: "Bundesliga Analytics",
      kind: "Sports analytics",
      desc: "Exploratory analysis of Bundesliga and 2. Bundesliga data covering tables, fixtures, player stats, discipline and nationalities.",
      tags: ["Pandas", "EDA", "Visualisation"],
      links: [{ label: "GitHub", url: "https://github.com/ayush-2-7/Footballanalytics" }],
    },
  ],

  quotes: [
    {
      text: "We sincerely regret his departure, as we will be losing an exceptionally capable employee.",
      org: "Samsung Semiconductor Europe",
      meta: "Quality Group · 2026",
    },
    {
      text: "He always found excellent solutions for any problems which arose. The performance of Mr Rawat during his entire internship was fully appreciated by us in every respect.",
      org: "Munich Re",
      meta: "Group Investment Management · 2025",
    },
    {
      text: "He found excellent new, creative ideas at all times and convinced through his highly innovative approaches.",
      org: "Allianz Technology",
      meta: "Global Talent Management · 2024",
    },
  ],

  // Ordered by target role: Data Science → AI → BI / Analytics Engineering
  skills: [
    { group: "Data Science & ML", items: ["Python", "R", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow / Keras", "EDA", "Jupyter"] },
    { group: "GenAI & LLMs", items: ["LangChain", "LangGraph", "LlamaIndex", "LangSmith", "Hugging Face", "PEFT / LoRA", "OpenAI", "Ollama", "Claude Agent SDK"] },
    { group: "Data Engineering", items: ["SQL", "PySpark", "Airflow", "Databricks", "AWS", "Azure", "PostgreSQL", "MS SQL Server", "Scala"] },
    { group: "BI & Analytics", items: ["Power BI", "Tableau", "Looker", "Superset", "Power Automate", "SAP BW", "Streamlit", "Excel"] },
  ],

  education: [
    {
      degree: "M.Sc. Web and Data Science",
      school: "University of Koblenz",
      period: "04/2023 – 11/2026 (final semester)",
    },
    {
      degree: "B.Tech. Computer Science and Engineering",
      school: "Guru Gobind Singh Indraprastha University, New Delhi",
      period: "08/2017 – 07/2021",
    },
  ],
};
