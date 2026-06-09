/* ============================================================
   DESIGN: Neón Oscuro Futurista
   CTA final: banner con gradiente neón, texto grande, botón prominente
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`relative rounded-3xl overflow-hidden p-12 lg:p-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.02_270)] via-[oklch(0.1_0.015_270)] to-[oklch(0.08_0.01_270)]" />
          {/* Neon glow corners */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[oklch(0.82_0.18_200/0.12)] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[oklch(0.52_0.26_295/0.12)] blur-3xl" />
          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-[oklch(0.82_0.18_200/0.2)]" />
          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid opacity-30" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[oklch(0.82_0.18_200/0.3)] mb-6">
              <Sparkles className="w-4 h-4 text-[oklch(0.82_0.18_200)]" />
              <span className="text-xs font-medium text-[oklch(0.82_0.18_200)]">
                Comienza hoy, gratis para siempre
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Listo para llevar tu negocio
              <br />
              <span className="gradient-text">al siguiente nivel?</span>
            </h2>

            <p className="text-lg text-[oklch(0.65_0.01_270)] max-w-xl mx-auto mb-10">
              Únete a más de 12,000 equipos que ya están construyendo el futuro con NexaCore. Sin tarjeta de crédito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const el = document.querySelector("#pricing");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-neon px-8 py-4 rounded-xl text-base flex items-center justify-center gap-2 group"
              >
                Empezar gratis ahora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-neon-outline px-8 py-4 rounded-xl text-base"
              >
                Hablar con ventas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
