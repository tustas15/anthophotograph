"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TextStage {
    start: number;
    end: number;
    content: React.ReactNode;
}

export default function CameraScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const rafRef = useRef<number | null>(null);

    const [loadProgress, setLoadProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollPct, setScrollPct] = useState(0);
    const [showScrollHint, setShowScrollHint] = useState(true);

    // ── Draw a frame on canvas ────────────────────────────────
    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const img = imagesRef.current[index];
        if (!img || img.naturalWidth === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // We use the raw canvas pixel dimensions
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        // Calculate scale to fit "contain"
        const scale = Math.min(cw / iw, ch / ih);
        const width = iw * scale;
        const height = ih * scale;
        const dx = (cw - width) / 2;
        const dy = (ch - height) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, dx, dy, width, height);
    }, []);

    // ── Resize canvas to screen, respecting DPR ───────────────
    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Set internal resolution
        canvas.width = w * dpr;
        canvas.height = h * dpr;

        // Set display size
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";

        // Important: Do NOT call ctx.scale() here if we want to draw using raw pixel coordinates
        // We will just draw using canvas.width/height in drawFrame
        drawFrame(currentFrameRef.current);
    }, [drawFrame]);

    // ── Load all frames ───────────────────────────────────────
    useEffect(() => {
        let active = true;
        async function loadFrames() {
            let urls: string[] = [];
            try {
                const res = await fetch("/frames/manifest.json");
                if (!res.ok) throw new Error();
                urls = await res.json();
            } catch {
                // Fallback to 240 frames
                urls = Array.from({ length: 240 }, (_, i) =>
                    `/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`
                );
            }

            const total = urls.length;
            let loaded = 0;

            const images = await Promise.all(
                urls.map(
                    (src) =>
                        new Promise<HTMLImageElement>((resolve) => {
                            const img = new window.Image();
                            img.onload = () => {
                                if (!active) return;
                                loaded++;
                                setLoadProgress(Math.round((loaded / total) * 100));
                                resolve(img);
                            };
                            img.onerror = () => {
                                if (!active) return;
                                loaded++;
                                setLoadProgress(Math.round((loaded / total) * 100));
                                resolve(img);
                            };
                            img.src = src;
                        })
                )
            );

            if (active) {
                imagesRef.current = images;
                setIsLoaded(true);
                requestAnimationFrame(() => drawFrame(0));
            }
        }

        loadFrames();
        return () => { active = false; };
    }, [drawFrame]);

    // ── Listeners ─────────────────────────────────────────────
    useEffect(() => {
        resizeCanvas();
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const containerHeight = container.offsetHeight;

            const scrolled = -rect.top;
            const scrollableRange = containerHeight - viewportHeight;
            const progress = Math.min(1, Math.max(0, scrolled / scrollableRange));

            setScrollPct(progress);
            if (progress > 0.02) setShowScrollHint(false);

            const totalFrames = imagesRef.current.length;
            if (totalFrames === 0) return;

            const frameIndex = Math.round(progress * (totalFrames - 1));

            if (frameIndex !== currentFrameRef.current) {
                currentFrameRef.current = frameIndex;
                if (rafRef.current) cancelAnimationFrame(rafRef.current);
                rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
            }
        };

        window.addEventListener("resize", resizeCanvas);
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isLoaded, resizeCanvas, drawFrame]);

    // ── Content Stages ────────────────────────────────────────
    const stages: TextStage[] = [
        {
            start: 0,
            end: 0.18,
            content: (
                <div className="text-center px-4 max-w-lg">
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/40 mb-3 font-light">
                        Fotografía profesional / Anthophotograph
                    </p>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none mb-4">
                        Capturando lo que otros no ven.
                    </h1>
                </div>
            ),
        },
        {
            start: 0.25,
            end: 0.45,
            content: (
                <div className="text-center px-4 max-w-lg">
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/40 mb-4 font-light">
                        Filosofía
                    </p>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                        Cada disparo,
                        <br />
                        <span className="text-white/40">una historia.</span>
                    </h2>
                </div>
            ),
        },
        {
            start: 0.55,
            end: 0.75,
            content: (
                <div className="text-center px-4 max-w-lg">
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/40 mb-4 font-light">
                        Visión
                    </p>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-relaxed">
                        <span className="text-white/40">Luz.</span> Composición.{" "}
                        <span className="text-white/40">Emoción.</span>
                    </h2>
                </div>
            ),
        },
        {
            start: 0.85,
            end: 1.0,
            content: (
                <div className="text-center px-4 flex flex-col items-center gap-5 max-w-lg">
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/40 font-light">
                        Hablemos
                    </p>
                    <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                        Hagamos algo memorable juntos.
                    </h2>
                    <a
                        href="#servicios"
                        className="mt-1 inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-full hover:bg-white/80 transition-all duration-300"
                    >
                        Ver servicios
                    </a>
                </div>
            ),
        },
    ];

    function getOp(stage: TextStage, p: number) {
        const f = 0.05;
        if (p < stage.start - f || p > stage.end + f) return 0;
        if (p < stage.start) return (p - (stage.start - f)) / f;
        if (p > stage.end) return 1 - (p - stage.end) / f;
        return 1;
    }

    return (
        <div ref={containerRef} style={{ height: "400vh" }} className="relative bg-[#050505]">
            {/* Sticky Hero */}
            <div className="sticky top-0 w-full h-[100dvh] flex items-center justify-center overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full block object-contain"
                />

                {/* Loader */}
                <AnimatePresence>
                    {!isLoaded && (
                        <motion.div
                            key="loader"
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#050505] flex flex-col items-center justify-center z-50 px-6"
                        >
                            <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-light mb-4">Anthophotograph</p>
                            <div className="w-40 sm:w-64 h-px bg-white/5 relative">
                                <motion.div className="absolute inset-y-0 left-0 bg-white/80" style={{ width: `${loadProgress}%` }} />
                            </div>
                            <p className="text-white/20 text-[10px] mt-2">{loadProgress}%</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Text Layers */}
                <div className="relative z-20 pointer-events-none flex items-center justify-center w-full h-full">
                    {stages.map((s, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 flex items-center justify-center p-6"
                            style={{ opacity: getOp(s, scrollPct), pointerEvents: (getOp(s, scrollPct) > 0.8 && i === 3) ? 'auto' : 'none' }}
                        >
                            {s.content}
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual background gradient for blending */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-30 z-10" />
        </div>
    );
}
