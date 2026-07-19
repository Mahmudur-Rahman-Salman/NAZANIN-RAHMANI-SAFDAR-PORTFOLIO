const experiences = [
  {
    period: "May 2026 – Present | Toronto, ON",
    role: "Beauty Consultant",
    company: "Shoppers Drug Mart (BeautyBOUTIQUE)",
    highlights: [
      "Delivered advisory-based customer service within structured corporate operating environments while maintaining compliance and customer privacy standards.",
      "Built strong client relationships across diverse, high-volume customer segments to support loyalty and business performance.",
      "Applied consultative selling techniques to identify customer needs and support premium product and service growth.",
    ],
    skills: [
      "Client Advisory",
      "Relationship Building",
      "Sales Growth",
      "Compliance",
    ],
    current: true,
  },

  {
    period: "March 2025 – May 2026 | Toronto, ON",
    role: "Cashier & Customer Relationship Representative",
    company: "Shawarma Royale",
    highlights: [
      "Managed high-volume financial transactions with strong accuracy and operational balancing discipline.",
      "Resolved customer escalations and transactional discrepancies while protecting customer experience.",
      "Supported transaction monitoring, operational controls, and fraud prevention practices.",
    ],
    skills: [
      "Cash Operations",
      "Client Service",
      "Transaction Accuracy",
      "Risk Awareness",
    ],
    current: false,
  },

  {
    period: "2022 – 2024 | International",
    role: "Marketing Administration Specialist",
    company: "Protein Manufacturing Company",
    highlights: [
      "Optimized operational workflows and improved information processing efficiency across business functions.",
      "Executed market research initiatives and analyzed customer and competitive trends.",
      "Built reporting outputs and management insights to support forecasting and business planning.",
    ],
    skills: [
      "Business Analytics",
      "Market Research",
      "Data Reporting",
      "Strategic Planning",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-10 py-10 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* LEFT SIDE HEADER */}

        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-5xl font-extrabold tracking-wider uppercase animate-fade-in">
            Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Creating value through
            <span className="font-serif italic font-normal text-white">
              {" "}
              relationships and results.
            </span>
          </h2>

          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
              My professional journey spans client-facing operations, business
              administration, and high-volume service environments where trust,
              precision, and communication drive outcomes.
            </p>

            <p>
              Across each role, I have developed strong capabilities in
              relationship management, operational efficiency, business
              analysis, and delivering measurable value in structured
              environments.
            </p>
          </div>
        </div>

        {/* TIMELINE */}

        <div className="relative">
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-primary/70 via-primary/30 to-transparent
            md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8">
                {/* DOT */}

                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-70" />
                  )}
                </div>

                {/* CARD */}

                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass rounded-2xl p-6 border border-primary/30">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-2xl font-semibold mt-2">{exp.role}</h3>

                    <p className="text-muted-foreground mt-1">{exp.company}</p>

                    <ul className="mt-6 space-y-3">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {point}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`flex flex-wrap gap-2 mt-6 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-surface text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
