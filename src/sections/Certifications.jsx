import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "Inbound Certified",
      image: "/public/certificates/certificate 1.jpeg",
      description:
        "The bearer of this certificate is hereby deemed capable and skilled in the methodology of inbound. They have been tested on best practices and are capable of applying them to develop a flywheel business model that attracts, engages, and delights prospects and customers.",
      issuer: "HubSpot Academy",
      verify: "#certifications",
    },
    {
      title: "DIGITAL MARKETING CERTIFICATION ",
      image: "/public/certificates/certificate 2.jpeg",
      description:
        "The bearer of this certificate has successfully proven that they are fully capable and skilled in applying digital marketing techniques. They have been tested on best practices and have signified experience managing digital marketing campaigns, conducting keyword research, making data-driven decisions relative to revenues and profits, and making report-based strategy adjustments.",
      issuer: "Stukent",
      verify:
        "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:23ebaeb6-3d34-4f37-9f44-34f3ca561187",
    },
    {
      title: "Generative AI for Digital Marketers",
      image: "/public/certificates/certificate 3.jpeg",
      description:
        "The bearer of this certificate has successfully proven that they are fully capable and skilled in applying generative AI techniques to digital marketing. They have been tested on best practices and have signified experience managing digital marketing campaigns, conducting keyword research, making data-driven decisions relative to revenues and profits, and making report-based strategy adjustments. ",
      issuer: "Linkedin Learning",
      verify:
        "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:319d81c8-208d-4350-8989-4b8e053222e2",
    },
    {
      title: "How to Research and Write Using Generative AI Tools (2023)",
      image: "/public/certificates/certificate 4.jpeg",
      description:
        "The bearer of this certificate has successfully proven that they are fully capable and skilled in applying generative AI techniques to research and writing. They have been tested on best practices and have signified experience managing digital marketing campaigns, conducting keyword research, making data-driven decisions relative to revenues and profits, and making report-based strategy adjustments. ",
      verify:
        "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:9f52476f-a37a-44c5-b136-7a1cee472c1d",
    },
  ];

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ---------------- Header ---------------- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-5xl font-extrabold tracking-wider uppercase">
            CERTIFICATIONS
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-6 text-secondary-foreground">
            Continuous learning through
            <span className="font-serif italic font-normal text-white">
              {" "}
              industry-recognized certifications.
            </span>
          </h2>

          <p className="text-muted-foreground leading-8">
            Professional certifications demonstrating practical knowledge in
            cybersecurity, software engineering, cloud technologies, and modern
            web development.
          </p>
        </div>

        {/* ---------------- Cards ---------------- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => (
            <article
              key={index}
              className="
                glass
                rounded-2xl
                overflow-hidden
                border border-border/40
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/30
                hover:shadow-2xl
                animate-fade-in
              "
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* ---------- Clickable Image ---------- */}
              <a
                href={certificate.verify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${certificate.title}`}
                className="group block overflow-hidden"
              >
                <figure className="relative">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                    className="
                      h-60
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Hover Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/50
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-300
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        px-5
                        py-2
                        rounded-full
                        bg-primary
                        text-primary-foreground
                        font-medium
                      "
                    >
                      View Certificate →
                    </span>
                  </div>
                </figure>
              </a>

              {/* ---------- Content ---------- */}
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-primary mb-2">
                  {certificate.issuer}
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {certificate.title}
                </h3>

                <p className="text-muted-foreground leading-7 text-sm text-justify">
                  {certificate.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
