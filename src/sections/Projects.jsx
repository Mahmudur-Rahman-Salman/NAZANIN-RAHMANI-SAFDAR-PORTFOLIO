const projects = [
  {
    title: "AI Business Intelligence & Workflow Optimization",
    description:
      "Engineered and deployed end-to-end cloud-based workflow automation systems using Make.com and large language model integrations to reduce corporate administrative workload and improve operational efficiency.",

    achievements: [
      "Designed scalable workflow automation infrastructure",
      "Integrated LLM-based process optimization logic",
      "Reduced manual administrative processes through automation",
    ],

    capabilities: [
      "Workflow Automation",
      "Business Intelligence",
      "Process Optimization",
      "Digital Operations",
    ],
  },

  {
    title:
      "Applied Financial Market Research & Strategic Communications Portfolio",
    description:
      "Conducted quantitative consumer behavior research using demographic data to identify financial and operational inefficiencies across defined market segments, supported by structured strategic planning.",

    achievements: [
      "Performed structured quantitative market analysis",
      "Identified financial and operational pain points across segments",
      "Developed multi-channel strategic campaign framework",
      "Built ROI forecasting and budget allocation model",
    ],

    capabilities: [
      "Market Research",
      "Business Strategy",
      "Financial Analysis",
      "ROI Forecasting",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-5xl font-extrabold tracking-wider uppercase">
            PROJECTS
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-6 text-secondary-foreground">
            Applied work in
            <span className="font-serif italic font-normal text-white">
              {" "}
              business intelligence & strategy.
            </span>
          </h2>

          
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-8 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-8">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wide text-primary mb-3">
                  Key Outcomes
                </h4>

                <ul className="space-y-2">
                  {project.achievements.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.capabilities.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full
                    bg-surface text-xs
                    border border-border/50
                    text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
