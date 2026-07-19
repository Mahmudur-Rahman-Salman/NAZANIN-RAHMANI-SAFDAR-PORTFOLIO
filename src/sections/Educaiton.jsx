import { GraduationCap, BookOpen, TrendingUp } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-5xl font-extrabold tracking-wider uppercase">
            Education
          </span>
        </div>

        {/* Education Card */}
        <div className="glass rounded-3xl p-8 lg:p-10 glow-border">
          <div className="flex items-start gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Advanced Diploma in Business Marketing
              </h3>

              <p className="text-primary font-medium mt-1">
                Seneca Polytechnic • Toronto, ON
              </p>

              <p className="text-muted-foreground mt-2">
                Graduated — April 2026
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-8 mb-8">
            Completed advanced business education with emphasis on analytical
            decision-making, strategic communication, corporate operations, and
            client-focused business growth models aligned with modern financial
            environments.
          </p>

          {/* Capability Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-5">
              <div className="flex gap-3 items-center mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Strategic & Analytical Skills</h4>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Marketing Strategic Analytics</li>
                <li>Applied Corporate Research</li>
                <li>Advanced Business Statistics</li>
                <li>International Trade & Economics</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-5">
              <div className="flex gap-3 items-center mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">
                  Banking & Business Capabilities
                </h4>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Digital Business Systems</li>
                <li>Business Project Management</li>
                <li>Professional Relationship Selling</li>
                <li>Integrated Communication Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
