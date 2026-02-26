"use client";

import { motion } from "framer-motion";

const about = [
    { category: "Sobre mí", name: "Nombre", value: "Anthophotograph" },
    { category: "Sobre mí", name: "Ubicación", value: "Disponible internacionalmente" },
    { category: "Sobre mí", name: "Experiencia", value: "+8 años" },
    { category: "Sobre mí", name: "Sesiones", value: "+450 completadas" },
    { category: "Equipo", name: "Cámara", value: "Full-Frame High Res" },
    { category: "Equipo", name: "Objetivos", value: "35mm · 85mm · 70–200mm" },
    { category: "Equipo", name: "Software", value: "Lightroom · Capture One" },
    { category: "Servicios", name: "Editorial & Moda", value: "Desde €450" },
    { category: "Servicios", name: "Bodas", value: "Consultar disponibilidad" },
    { category: "Servicios", name: "Portofolio sesión", value: "Desde €180" },
    { category: "Servicios", name: "Entrega", value: "5–10 días hábiles" },
    { category: "Contacto", name: "Email", value: "hola@anthophotograph.com" },
    { category: "Contacto", name: "Social", value: "@anthophotograph" },
];

export default function Specs() {
    const categories = [...new Set(about.map((s) => s.category))];

    return (
        <section
            id="servicios"
            className="py-24 sm:py-32 px-6 bg-[#050505] border-t border-white/[0.04] scroll-mt-0"
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 sm:mb-16">
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/30 mb-3 sm:mb-4 font-light">
                        Información
                    </p>
                    <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
                        Acerca de mí.
                    </h2>
                </div>

                {/* Table */}
                <div className="space-y-12">
                    {categories.map((cat, ci) => {
                        const rows = about.filter((s) => s.category === cat);
                        return (
                            <motion.div
                                key={cat}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: ci * 0.05 }}
                            >
                                <h3 className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/25 mb-4 font-light">
                                    {cat}
                                </h3>
                                <div className="divide-y divide-white/[0.05]">
                                    {rows.map((row) => (
                                        <div
                                            key={row.name}
                                            className="grid grid-cols-2 py-3 sm:py-4 gap-4 sm:gap-8 -mx-3 px-3 sm:-mx-4 sm:px-4 rounded-lg hover:bg-white/[0.02] transition-colors duration-200"
                                        >
                                            <span className="text-[11px] sm:text-sm text-white/40 font-light">{row.name}</span>
                                            <span className="text-[11px] sm:text-sm text-white/85 font-light text-right sm:text-left">{row.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <p className="mt-16 text-[10px] text-white/20 font-light leading-relaxed">
                    Los precios son orientativos y pueden variar. © 2025 Anthophotograph.
                </p>
            </div>
        </section>
    );
}
