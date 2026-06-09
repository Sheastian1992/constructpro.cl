/* ============================================================
   DESIGN: Neón Oscuro Futurista
   How it works: pasos numerados con línea conectora neón
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { UserPlus, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crea tu cuenta",
    description: "Regístrate en menos de 2 minutos. Sin tarjeta de crédito, sin compromisos. Accede de inmediato a todas las funciones del plan gratuito.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configura tu espacio",
    description: "Conecta tus herramientas existentes, importa tus datos y personaliza el entorno según las necesidades de tu equipo.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lanza y escala",
    description: "Despliega en producción con un clic. Monitorea el rendimiento en tiempo real y escala automáticamente según la demanda.",
  },
];

export default function HowItWorksSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[oklch(0.1_0.012_270)]" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.82_0.18_200/0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.52_0.26_295/0.3)] to-transparent" />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[oklch(0.65_0.26_295)] bg-[oklch(0.52_0.26_295/0.1)] border border-[oklch(0.52_0.26_295/0.25)] mb-4">
            Cómo funciona
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Tres pasos para{" "}
            <span className="gradient-text">transformar tu negocio</span>
          </h2>
          <p className="text-lg text-[oklch(0.65_0.01_270)] max-w-xl mx-auto">
            Diseñado para que puedas empezar a ver resultados desde el primer día.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-[oklch(0.82_0.18_200/0.5)] via-[oklch(0.52_0.26_295/0.5)] to-[oklch(0.82_0.18_200/0.5)]" />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col items-center text-center transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl glass-card border border-[oklch(0.82_0.18_200/0.3)] flex items-center justify-center glow-cyan animate-pulse-glow">
                      <Icon className="w-7 h-7 text-[oklch(0.82_0.18_200)]" />
                    </div>
                    {/* Step number */}
                    <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gradient-to-br from-[oklch(0.82_0.18_200)] to-[oklch(0.52_0.26_295)] flex items-center justify-center text-[10px] font-bold text-[oklch(0.08_0.01_270)]">
                      {i + 1}
                    </span>
                  </div>

                  {/* Number label */}
                  <span className="text-5xl font-bold text-[oklch(0.82_0.18_200/0.08)] font-mono mb-2">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-[oklch(0.65_0.01_270)] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
