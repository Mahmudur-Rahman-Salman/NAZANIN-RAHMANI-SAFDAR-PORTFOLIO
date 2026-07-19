import { FaLinkedin, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nazanin-rahmani-safdar-55aa40366",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/ashlin_t_t?igsh=aGJkZ2p1N244OHp3",
    label: "Instagram",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#certifications", label: "Certifications" },
  { href: "#artgallery", label: "Art Gallery" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              NAZANIN RAHMANI SAFDAR<span className="text-primary"> .</span>
            </a>

            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Nazanin Rahmani Safdar. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
