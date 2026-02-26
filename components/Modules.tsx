"use client";

import { motion } from "framer-motion";

const modules = [
    {
        number: "01",
        tag: "Fotografía editorial",
        title: "Editorial",
        tagline: "Imágenes que viven en revistas.",
        bullets: [
            "Colaboración con marcas de moda y lifestyle",
            "Dirección de arte desde el concepto hasta la entrega",
            "Edición profesional con perfil de color personalizado",
        ],
        description:
            "Trabajos editorials con narrativa visual fuerte, pensados para publicaciones impresas y digitales de alto nivel.",
    },
    {
        number: "02",
        tag: "Eventos & celebraciones",
        title: "Bodas",
        tagline: "El día más importante, para siempre.",
        bullets: [
            "Cobertura completa del día sin interrupciones",
            "Reportaje documental + sesión de retrato",
            "Álbum impreso de edición limitada incluido",
        ],
        description:
            "Un enfoque discreto y emotivo para preservar cada instante auténtico, sin poses forzadas ni momentos perdidos.",
    },
    {
        number: "03",
        tag: "Marca & producto",
        title: "Comercial",
        tagline: "Tu marca, en su mejor luz.",
        bullets: [
            "Fotografía de producto sobre fondo y en contexto",
            "Contenido para redes sociales y campañas digitales",
            "Paquetes por licencia o uso ilimitado",
        ],
        description:
            "Imágenes que elevan la percepción de tu marca y generan confianza en cada punto de contacto con el cliente.",
    },
];

export default function Modules() {
    return (
        <section className="py-24 sm:py-32 px-6 bg-[#050505] border-t border-white/[0.04]">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-14 sm:mb-20">
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/30 mb-3 sm:mb-4 font-light">
                        Áreas de trabajo
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
                        Un estilo,
                        <br />
                        <span className="text-white/30">muchas historias.</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {modules.map((mod, i) => (
                        <motion.div
                            key={mod.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="relative p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.015] flex flex-col gap-6 overflow-hidden"
                        >
                            {/* Number watermark */}
                            <span className="absolute -top-4 -right-2 text-7xl sm:text-8xl lg:text-[7rem] font-bold text-white/[0.03] select-none leading-none pointer-events-none">
                                {mod.number}
                            </span>

                            <div>
                                <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/25 mb-2 sm:mb-3 font-light">
                                    {mod.tag}
                                </p>
                                <h3 className="text-2xl sm:text-3xl font-semibold mb-1">{mod.title}</h3>
                                <p className="text-white/40 text-xs sm:text-sm font-light">{mod.tagline}</p>
                            </div>

                            <ul className="space-y-3">
                                {mod.bullets.map((b, bi) => (
                                    <li key={bi} className="flex items-start gap-3 text-xs sm:text-sm text-white/55 font-light leading-relaxed">
                                        <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-white/25" />
                                        {b}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-white/25 text-[10px] sm:text-xs leading-relaxed font-light border-t border-white/[0.05] pt-5 mt-auto">
                                {mod.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
