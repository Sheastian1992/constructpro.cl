/* ============================================================
   DESIGN: Neón Oscuro Futurista
   Navbar: glassmorphism, logo con gradiente, nav links con hover neón
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Características", href: "#features" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Precios", href: "#pricing" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-[oklch(0.82_0.18_200/0.15)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.82_0.18_200)] to-[oklch(0.52_0.26_295)] flex items-center justify-center glow-cyan transition-all duration-200 group-hover:scale-110">
            <Zap className="w-4 h-4 text-[oklch(0.08_0.01_270)]" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold gradient-text tracking-tight">NexaCore</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-4 py-2 text-sm font-medium text-[oklch(0.75_0.01_270)] hover:text-[oklch(0.82_0.18_200)] transition-colors duration-200 rounded-lg hover:bg-[oklch(0.82_0.18_200/0.08)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="btn-neon-outline px-5 py-2 rounded-lg text-sm"
          >
            Iniciar sesión
          </a>
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); handleNavClick("#pricing"); }}
            className="btn-neon px-5 py-2 rounded-lg text-sm"
          >
            Comenzar gratis
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[oklch(0.75_0.01_270)] hover:text-white hover:bg-[oklch(0.82_0.18_200/0.1)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-card border-t border-[oklch(0.82_0.18_200/0.15)] mt-0">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-3 text-sm font-medium text-[oklch(0.75_0.01_270)] hover:text-[oklch(0.82_0.18_200)] transition-colors rounded-lg hover:bg-[oklch(0.82_0.18_200/0.08)]"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-[oklch(0.82_0.18_200/0.1)]">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="btn-neon-outline px-5 py-2.5 rounded-lg text-sm text-center"
              >
                Iniciar sesión
              </a>
              <a
                href="#pricing"
                onClick={(e) => { e.preventDefault(); handleNavClick("#pricing"); }}
                className="btn-neon px-5 py-2.5 rounded-lg text-sm text-center"
              >
                Comenzar gratis
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
