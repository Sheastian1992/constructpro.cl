/* ============================================================
   DESIGN: Neón Oscuro Futurista
   Features: grid asimétrico de cards glassmorphism con íconos neón
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Zap, Shield, BarChart3, Globe, Cpu, Lock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Velocidad extrema",
    description: "Infraestructura distribuida globalmente que garantiza tiempos de respuesta inferiores a 50ms en cualquier parte del mundo.",
    color: "cyan",
    size: "large",
  },
  {
    icon: Shield,
    title: "Seguridad de nivel empresarial",
    description: "Cifrado de extremo a extremo, autenticación multifactor y cumplimiento con ISO 27001, SOC 2 y GDPR.",
    color: "violet",
    size: "normal",
  },
  {
    icon: BarChart3,
    title: "Analytics en tiempo real",
    description: "Dashboards interactivos con datos actualizados al instante para tomar decisiones basadas en evidencia.",
    color: "cyan",
    size: "normal",
  },
  {
    icon: Globe,
    title: "Alcance global",
    description: "Presencia en 40+ regiones con CDN inteligente que adapta el contenido según la ubicación del usuario.",
    color: "violet",
    size: "normal",
  },
  {
    icon: Cpu,
    title: "IA integrada",
    description: "Modelos de inteligencia artificial entrenados específicamente para automatizar y optimizar tus flujos de trabajo.",
    color: "cyan",
    size: "normal",
  },
  {
    icon: Lock,
    title: "Control total",
    description: "Gestión granular de permisos, roles y accesos. Tu equipo, tus reglas.",
    color: "violet",
    size: "normal",
  },
];

function FeatureCard({
  feature,
  index,
  visible,
}: {
  feature: (typeof features)[0];
  index: number;
  visible: boolean;
}) {
  const isCyan = feature.color === "cyan";
  const Icon = feature.icon;

  return (
    <div
      className={`glass-card rounded-2xl p-6 border transition-all duration-500 hover:border-[oklch(0.82_0.18_200/0.4)] hover:shadow-[0_0_30px_oklch(0.82_0.18_200/0.1)] group ${
        isCyan
          ? "border-[oklch(0.82_0.18_200/0.15)]"
          : "border-[oklch(0.52_0.26_295/0.2)]"
      } ${feature.size === "large" ? "lg:col-span-2" : ""} ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.2s, box-shadow 0.2s",
      }}
    >
      <div className="flex flex-col gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${
            isCyan
              ? "bg-[oklch(0.82_0.18_200/0.15)] text-[oklch(0.82_0.18_200)]"
              : "bg-[oklch(0.52_0.26_295/0.15)] text-[oklch(0.65_0.26_295)]"
          }`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-sm text-[oklch(0.65_0.01_270)] leading-relaxed">
            {feature.description}
          </p>
        </div>
        {feature.size === "large" && (
          <div className="mt-2 flex gap-3 flex-wrap">
            {["Alta disponibilidad", "Auto-escalado", "Sin configuración"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-[oklch(0.82_0.18_200/0.1)] text-[oklch(0.82_0.18_200)] border border-[oklch(0.82_0.18_200/0.2)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[oklch(0.52_0.26_295/0.04)] blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[oklch(0.82_0.18_200)] bg-[oklch(0.82_0.18_200/0.1)] border border-[oklch(0.82_0.18_200/0.2)] mb-4">
            Características
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Todo lo que necesitas,{" "}
            <span className="gradient-text">en un solo lugar</span>
          </h2>
          <p className="text-lg text-[oklch(0.65_0.01_270)] max-w-2xl mx-auto">
            Herramientas de clase mundial diseñadas para equipos que no se conforman con lo ordinario.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
