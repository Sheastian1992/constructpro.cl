/* ============================================================
   DESIGN: Neón Oscuro Futurista
   Footer: oscuro con gradiente superior, links organizados, copyright
   ============================================================ */
import { Zap, Twitter, Github, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Producto: ["Características", "Precios", "Changelog", "Roadmap"],
  Empresa: ["Sobre nosotros", "Blog", "Carreras", "Prensa"],
  Recursos: ["Documentación", "Tutoriales", "API Reference", "Estado del sistema"],
  Legal: ["Privacidad", "Términos de uso", "Cookies", "Seguridad"],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[oklch(0.22_0.02_270)]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.82_0.18_200/0.4)] to-transparent" />
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.07_0.01_270)]" />

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.82_0.18_200)] to-[oklch(0.52_0.26_295)] flex items-center justify-center">
                <Zap className="w-4 h-4 text-[oklch(0.08_0.01_270)]" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold gradient-text">NexaCore</span>
            </div>
            <p className="text-sm text-[oklch(0.55_0.01_270)] leading-relaxed mb-5 max-w-xs">
              La plataforma de innovación digital que impulsa el futuro de los negocios modernos.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-card border border-[oklch(0.22_0.02_270)] flex items-center justify-center text-[oklch(0.55_0.01_270)] hover:text-[oklch(0.82_0.18_200)] hover:border-[oklch(0.82_0.18_200/0.3)] transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.82_0.18_200)] mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[oklch(0.55_0.01_270)] hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[oklch(0.15_0.015_270)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[oklch(0.45_0.01_270)]">
            © {new Date().getFullYear()} NexaCore, Inc. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-[oklch(0.45_0.01_270)]">Todos los sistemas operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
