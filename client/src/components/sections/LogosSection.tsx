/* ============================================================
   DESIGN: Neón Oscuro Futurista
   Logos: banda de confianza con logos de empresas (texto estilizado)
   ============================================================ */
export default function LogosSection() {
  const companies = [
    "Vercel", "Stripe", "Notion", "Linear", "Figma",
    "Supabase", "Cloudflare", "Resend",
  ];

  return (
    <section className="py-12 relative overflow-hidden border-y border-[oklch(0.18_0.02_270)]">
      <div className="absolute inset-0 bg-[oklch(0.09_0.01_270)]" />
      <div className="container relative z-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-[oklch(0.45_0.01_270)] mb-8">
          Empresas líderes que confían en NexaCore
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {companies.map((company) => (
            <span
              key={company}
              className="text-lg font-bold text-[oklch(0.35_0.01_270)] hover:text-[oklch(0.55_0.01_270)] transition-colors duration-200 tracking-tight select-none"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
