"use client";

import dynamic from "next/dynamic";

const CameraScroll = dynamic(() => import("./CameraScroll"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-screen bg-[#050505] flex items-center justify-center">
            <p className="text-xs tracking-[0.3em] uppercase text-white/20 font-light animate-pulse">
                Cargando…
            </p>
        </div>
    ),
});

export default function CameraScrollWrapper() {
    return <CameraScroll />;
}
