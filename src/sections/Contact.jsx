import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rahmanii.nazanin81@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: " (437) 755-1415",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Toronto, ON",
    
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-secondary-foreground text-5xl font-extrabold tracking-wider uppercase">
            Contact
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-6 text-secondary-foreground">
            Let’s connect and
            <span className="font-serif italic font-normal text-white">
              {" "}
              explore opportunities.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Open to opportunities in banking, business operations, and
            client-focused roles. Feel free to reach out directly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="glass rounded-3xl p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

              <span className="font-medium">Currently Available</span>
            </div>

            <p className="text-muted-foreground leading-7">
              I am open to opportunities in corporate banking, client advisory,
              business operations, and financial services roles. Focused on
              roles where I can contribute to client growth, operational
              efficiency, and data-driven decision making.
            </p>

            <div className="mt-6 flex items-center gap-3 text-green-400">
              <CheckCircle className="w-5 h-5" />

              <span className="text-sm">Ready for full-time opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
