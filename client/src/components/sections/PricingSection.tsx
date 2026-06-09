/* ============================================================
   DESIGN: Neón Oscuro Futurista
   Pricing: 3 planes, card central destacada con glow, toggle mensual/anual
   ============================================================ */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Para equipos pequeños que quieren empezar.",
    features: [
      "Hasta 3 usuarios",
      "5 proyectos activos",
      "10 GB de almacenamiento",
      "Integraciones básicas",
      "Soporte por email",
    ],
    cta: "Comenzar gratis",
    featured: false,
    color: "cyan",
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 23,
    description: "Para equipos en crecimiento que necesitan más poder.",
    features: [
      "Hasta 25 usuarios",
      "Proyectos ilimitados",
      "100 GB de almacenamiento",
      "Todas las integraciones",
      "Analytics avanzados",
      "IA integrada",
      "Soporte prioritario 24/7",
    ],
    cta: "Empezar con Pro",
    featured: true,
    color: "gradient",
    badge: "Más popular",
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "Para organizaciones que exigen el máximo rendimiento.",
    features: [
      "Usuarios ilimitados",
      "Proyectos ilimitados",
      "1 TB de almacenamiento",
      "Integraciones personalizadas",
      "SLA garantizado 99.99%",
      "Gestor de cuenta dedicado",
      "Onboarding personalizado",
    ],
    cta: "Contactar ventas",
    featured: false,
    color: "violet",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const { ref, visible } = useScrollReveal();

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[oklch(0.82_0.18_200/0.04)] blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[oklch(0.82_0.18_200)] bg-[oklch(0.82_0.18_200/0.1)] border border-[oklch(0.82_0.18_200/0.2)] mb-4">
            Precios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Planes para cada{" "}
            <span className="gradient-text">etapa de crecimiento</span>
          </h2>
          <p className="text-lg text-[oklch(0.65_0.01_270)] max-w-xl mx-auto mb-8">
            Sin sorpresas. Sin letra pequeña. Cancela cuando quieras.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-2 py-2 border border-[oklch(0.82_0.18_200/0.15)]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !annual
                  ? "bg-gradient-to-r from-[oklch(0.82_0.18_200)] to-[oklch(0.52_0.26_295)] text-[oklch(0.08_0.01_270)]"
                  : "text-[oklch(0.65_0.01_270)] hover:text-white"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? "bg-gradient-to-r from-[oklch(0.82_0.18_200)] to-[oklch(0.52_0.26_295)] text-[oklch(0.08_0.01_270)]"
                  : "text-[oklch(0.65_0.01_270)] hover:text-white"
              }`}
            >
              Anual
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                plan.featured
                  ? "border border-[oklch(0.82_0.18_200/0.5)] bg-gradient-to-b from-[oklch(0.13_0.02_270)] to-[oklch(0.1_0.015_270)] shadow-[0_0_40px_oklch(0.82_0.18_200/0.15)]"
                  : "glass-card border border-[oklch(0.22_0.02_270)]"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[oklch(0.82_0.18_200)] to-[oklch(0.52_0.26_295)] text-[oklch(0.08_0.01_270)]">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-[oklch(0.6_0.01_270)]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-bold text-white">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-[oklch(0.6_0.01_270)] mb-2">/mes</span>
                </div>
                {annual && plan.monthlyPrice > 0 && (
                  <p className="text-xs text-green-400 mt-1">
                    Ahorras ${(plan.monthlyPrice - plan.annualPrice) * 12}/año
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.featured
                        ? "bg-[oklch(0.82_0.18_200/0.2)]"
                        : "bg-[oklch(0.52_0.26_295/0.15)]"
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${
                        plan.featured ? "text-[oklch(0.82_0.18_200)]" : "text-[oklch(0.65_0.26_295)]"
                      }`} />
                    </div>
                    <span className="text-sm text-[oklch(0.75_0.01_270)]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.featured
                    ? "btn-neon"
                    : "btn-neon-outline"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
