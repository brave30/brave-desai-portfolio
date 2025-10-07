export default function ResumePage() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-start flex-col overflow-hidden mx-auto sm:px-10 px-5 py-24">
      <div className="max-w-4xl w-full space-y-10">
        <a href="/" className="text-sm text-white-100 underline">← Back to home</a>
        <header className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">Brave Desai</h1>
          <p className="text-white-100">+1 347 614 7903 · brave.d302001@gmail.com · linkedin.com/in/bd4</p>
        </header>

        <section className="space-y-2">
          <h2 className="heading">Education</h2>
          <div className="space-y-1">
            <p className="font-semibold">Stony Brook University — Master of Science in Data Science</p>
            <p className="text-white-100">08/2025 – 05/2027 · Stony Brook, NY · Coursework: Data Structures and Algorithms, Data Analysis, Introduction to Computer Vision</p>
          </div>
          <div className="space-y-1">
            <p className="font-semibold">Pandit Deendayal Energy University — B.Tech in Information and Communication Technology (GPA 3.8)</p>
            <p className="text-white-100">08/2019 – 05/2023 · Gujarat, India · Coursework: OS, DBMS, Cloud Computing, Machine Learning, Probability and Statistics, Big Data Analytics, AI Systems</p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="heading">Skills</h2>
          <ul className="list-disc pl-6 space-y-1 text-white-100">
            <li>Programming: Python (Pandas, NumPy, SciPy, Scikit-Learn, PyTorch, TensorFlow, OpenCV), R, SQL, Java</li>
            <li>Deep Learning & LLMs: NLP, Generative AI, Agentic Systems, RAG, LoRA/QLoRA, Prompt Engineering, LangGraph, Pydantic AI, DeepEval, Comet Opik, LlamaIndex, LlamaParse</li>
            <li>Frameworks: PyTorch, PyTorch Lightning, TensorFlow, Scikit-Learn, PySpark; Regression & Classification</li>
            <li>Deployment & Tools: Docker, Git, Flask, FastAPI, Hugging Face, Power BI, Tableau</li>
            <li>Databases & Cloud: PostgreSQL, MongoDB, Snowflake, Vector DBs; Azure (Data Factory, SQL, Synapse); AWS (S3, EC2, SageMaker, Bedrock, Lambda)</li>
          </ul>
        </section>

        <section className="space-y-4" id="experience">
          <h2 className="heading">Professional Experience</h2>
          <div className="space-y-2">
            <div>
              <p className="font-semibold">Data Scientist — Growexx</p>
              <p className="text-white-100">08/2023 – 05/2025 · India</p>
              <ul className="list-disc pl-6 text-white-100 space-y-1">
                <li>Built AI platforms (Ojavix & Hirin.ai) using advanced NLP & agentic reasoning (Claude 3.7, Llama 3.3); deployed on AWS Bedrock achieving 98%+ retrieval accuracy.</li>
                <li>Led multi-layered RAG with ReAct planning, user-interaction loops, and agent evaluation; achieved &lt; 3s latency in production.</li>
                <li>Integrated continuous evaluation with Comet Opik & DeepEval; documented design and monitoring best practices.</li>
                <li>Developed Text-to-SQL for non-technical users over large proprietary datasets; 90%+ accuracy via schema-aware retrieval.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Data Engineer Intern — Growexx</p>
              <p className="text-white-100">01/2023 – 08/2023 · India</p>
              <ul className="list-disc pl-6 text-white-100 space-y-1">
                <li>Maintained Python/SQL ingestion pipelines; improved reliability and reduced failures.</li>
                <li>Built NLP/ML apps with GPT and Azure Cognitive Search; automated evaluation workflows and improved engagement by 50%.</li>
                <li>Documented scalable ML/LLM pipelines; collaborated cross‑functionally to test releases and resolve data issues.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-2" id="projects">
          <h2 className="heading">Projects & Publications</h2>
          <ul className="list-disc pl-6 text-white-100 space-y-2">
            <li>
              <span className="font-semibold">HubermanGPT</span> — QLoRA fine‑tune of Microsoft Phi‑2 for domain Q&A; agentic reasoning and feedback loops for factual, context‑aware responses.
            </li>
            <li>
              <span className="font-semibold">Transformer Architecture Implementation</span> — Implemented full Transformer in PyTorch (multi‑head attention, positional encodings, encoder–decoder).
            </li>
            <li>
              <span className="font-semibold">Facial Recognition Using Siamese Neural Network</span> — Presented at IEEE WCONF 2024; focused on robustness and generalization.
            </li>
            <li>
              <span className="font-semibold">Flight Price Predictor</span> — Built predictive models from heterogeneous datasets.
            </li>
          </ul>
        </section>

        <section className="pt-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <a
              href="/Brave_Desai_Resume.pdf"
              className="px-4 py-2 rounded-md bg-white text-black font-semibold hover:opacity-90"
            >
              Download PDF
            </a>
            <p className="text-white-100 text-sm">This downloads the file at <code>/public/Brave_Desai_Resume.pdf</code>.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
