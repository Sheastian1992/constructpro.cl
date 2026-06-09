/* ============================================================
   DESIGN: Neón Oscuro Futurista
   Contact: formulario glassmorphism + info de contacto
   ============================================================ */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("¡Mensaje enviado! Te contactaremos pronto.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[oklch(0.1_0.012_270)]" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.82_0.18_200/0.3)] to-transparent" />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[oklch(0.82_0.18_200)] bg-[oklch(0.82_0.18_200/0.1)] border border-[oklch(0.82_0.18_200/0.2)] mb-4">
            Contacto
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Hablemos sobre tu{" "}
            <span className="gradient-text">próximo proyecto</span>
          </h2>
          <p className="text-lg text-[oklch(0.65_0.01_270)] max-w-xl mx-auto">
            Nuestro equipo responde en menos de 24 horas. Sin compromisos.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "hola@nexacore.io",
                color: "cyan",
              },
              {
                icon: Phone,
                label: "Teléfono",
                value: "+1 (555) 000-1234",
                color: "violet",
              },
              {
                icon: MapPin,
                label: "Oficina",
                value: "San Francisco, CA · Madrid, ES",
                color: "cyan",
              },
              {
                icon: MessageSquare,
                label: "Chat en vivo",
                value: "Disponible 24/7",
                color: "violet",
              },
            ].map((item) => {
              const Icon = item.icon;
              const isCyan = item.color === "cyan";
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isCyan
                        ? "bg-[oklch(0.82_0.18_200/0.15)] text-[oklch(0.82_0.18_200)]"
                        : "bg-[oklch(0.52_0.26_295/0.15)] text-[oklch(0.65_0.26_295)]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[oklch(0.55_0.01_270)] uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`lg:col-span-3 glass-card rounded-2xl p-8 border border-[oklch(0.82_0.18_200/0.15)] flex flex-col gap-5 transition-all duration-500 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[oklch(0.65_0.01_270)] uppercase tracking-wide">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="bg-[oklch(0.14_0.015_270)] border border-[oklch(0.25_0.02_270)] rounded-xl px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_270)] focus:outline-none focus:border-[oklch(0.82_0.18_200/0.5)] focus:ring-1 focus:ring-[oklch(0.82_0.18_200/0.3)] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[oklch(0.65_0.01_270)] uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="bg-[oklch(0.14_0.015_270)] border border-[oklch(0.25_0.02_270)] rounded-xl px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_270)] focus:outline-none focus:border-[oklch(0.82_0.18_200/0.5)] focus:ring-1 focus:ring-[oklch(0.82_0.18_200/0.3)] transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[oklch(0.65_0.01_270)] uppercase tracking-wide">
                Mensaje
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Cuéntanos sobre tu proyecto..."
                className="bg-[oklch(0.14_0.015_270)] border border-[oklch(0.25_0.02_270)] rounded-xl px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_270)] focus:outline-none focus:border-[oklch(0.82_0.18_200/0.5)] focus:ring-1 focus:ring-[oklch(0.82_0.18_200/0.3)] transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-neon w-full py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {sending ? (
                <>
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
