"use client";

import { motion } from "framer-motion";

const services = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth="1.3">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
            </svg>
        ),
        label: "Especialidad",
        title: "Retrato & Moda",
        description:
            "Retratos editoriales y de moda que revelan personalidad. Luz natural o estudio, siempre auténtico.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth="1.3">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.5" cy="7.5" r="1" fill="currentColor" />
            </svg>
        ),
        label: "Especialidad",
        title: "Fotografía Comercial",
        description:
            "Productos, marcas y campañas. Imágenes que comunican el valor de tu negocio y convierten.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth="1.3">
                <path d="M3 8l4-4 4 4 4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 16c3-3 6-1 9-4s6-1 9-4" strokeLinecap="round" />
            </svg>
        ),
        label: "Especialidad",
        title: "Naturaleza & Paisaje",
        description:
            "Paisajes, entornos naturales y viajes. Cada escena capturada en su momento perfecto de luz.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth="1.3">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        label: "Especialidad",
        title: "Eventos & Bodas",
        description:
            "Momentos únicos e irrepetibles. Cobertura discreta y completa del día más importante.",
    },
];

export default function Features() {
    return (
        <section id="servicios" className="py-20 sm:py-32 px-6 bg-[#050505] scroll-mt-20 sm:scroll-mt-0">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 sm:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/30 mb-3 sm:mb-4 font-light">
                            Servicios
                        </p>
                        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                            Lo que hago
                            <br />
                            <span className="text-white/30">con pasión.</span>
                        </h2>
                    </div>
                    <p className="text-white/40 text-xs sm:text-sm max-w-xs leading-relaxed font-light">
                        Cada proyecto es único. Trabajamos juntos para encontrar la imagen que mejor cuenta tu historia.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="group relative p-6 sm:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-2xl" />
                            <div className="text-white/40 group-hover:text-white/70 transition-colors duration-300 mb-5 sm:mb-6">
                                {s.icon}
                            </div>
                            <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/25 mb-2 font-light">
                                {s.label}
                            </p>
                            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 leading-tight">{s.title}</h3>
                            <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-light">{s.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
