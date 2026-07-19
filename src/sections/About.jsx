import { ShieldCheck, TrendingUp, BarChart3, Users} from "lucide-react";

const highlights = [
  {
    icon: BarChart3,
    title: "Financial Operations",
    description:
      "High-volume transaction processing, cash reconciliation, and accurate operational reporting in regulated environments.",
  },
  {
    icon: Users,
    title: "Client Relationship Management",
    description:
      "Building trust through consultative service, issue resolution, and long-term portfolio development.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Compliance",
    description:
      "Strict adherence to AML frameworks, fraud prevention protocols, and internal audit standards.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth & Analytics",
    description:
      "Leveraging data insights, CRM systems, and market analysis to support client and revenue growth.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-5xl font-extrabold tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building trust through
              <span className="font-serif italic font-normal text-white">
                {" "}
                precision and performance.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a business and corporate banking professional with
                experience in retail banking operations, cash management
                processes, and client relationship development in regulated
                financial environments.
              </p>

              <p>
                My focus is on understanding client needs, supporting portfolio
                growth, and ensuring accuracy in financial operations while
                adhering strictly to risk and compliance frameworks, including
                anti money laundering standards.
              </p>

              <p>
                I bring a strong analytical mindset combined with practical
                experience in client servicing and operational efficiency,
                enabling me to contribute effectively in fast-paced financial
                institutions.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to deliver reliable, compliant, and client-focused
                financial solutions that strengthen trust and drive sustainable
                business growth."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
