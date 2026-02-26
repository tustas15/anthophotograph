"use client";

import { motion } from "framer-motion";

const links = [
    {
        heading: "Trabajo",
        items: ["Retrato & Moda", "Fotografía Comercial", "Bodas & Eventos", "Naturaleza"],
    },
    {
        heading: "Servicios",
        items: ["Sesiones", "Cobertura de boda", "Producto & marca", "Licencias"],
    },
    {
        heading: "Sobre mí",
        items: ["Mi historia", "Equipo", "Proceso creativo", "Testimonios"],
    },
    {
        heading: "Contacto",
        items: ["Reservar sesión", "Presupuesto", "Instagram", "Email"],
    },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] border-t border-white/[0.06] pt-16 sm:pt-24 pb-12 px-6 overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* CTA banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 sm:mb-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 p-8 sm:p-10 rounded-2xl border border-white/[0.07] bg-white/[0.02] shadow-2xl"
                >
                    <div>
                        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2 sm:mb-3 font-light">
                            Anthophotograph
                        </p>
                        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-tight">
                            Hagamos algo
                            <br />
                            <span className="text-white/40">memorable juntos.</span>
                        </h2>
                    </div>
                    <a
                        href="mailto:hola@anthophotograph.com"
                        className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-white/85 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/60 shadow-lg shadow-white/5"
                    >
                        Explorar Anthophotograph
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                                d="M2 7h10M7 2l5 5-5 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </motion.div>

                {/* Link columns */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 sm:mb-20">
                    {links.map((col, i) => (
                        <motion.div
                            key={col.heading}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/25 mb-4 sm:mb-5 font-light">
                                {col.heading}
                            </p>
                            <ul className="space-y-2 sm:space-y-3">
                                {col.items.map((item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="text-xs sm:text-sm text-white/45 hover:text-white/80 transition-colors duration-200 font-light"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/[0.05]">
                    <p className="text-[10px] sm:text-xs text-white/20 font-light">
                        © 2025 Anthophotograph. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-4 sm:gap-6">
                        {["Privacidad", "Términos", "Instagram"].map((l) => (
                            <a
                                key={l}
                                href="#"
                                className="text-[10px] sm:text-xs text-white/20 hover:text-white/50 transition-colors duration-200 font-light"
                            >
                                {l}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
