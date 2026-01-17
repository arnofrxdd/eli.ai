import { Sparkle, Heart, Palette, Star, Coffee, PenTool } from 'lucide-react';

export const MagicalDecor = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] animate-pulse"><Sparkle className="text-pink-300 w-12 h-12" /></div>
        <div className="absolute top-40 right-[15%] animate-bounce"><Heart className="text-red-300 w-8 h-8 fill-red-200" /></div>
        <div className="absolute bottom-20 left-[20%] animate-spin-slow"><Palette className="text-purple-300 w-16 h-16" /></div>
        <div className="absolute bottom-40 right-[5%] animate-pulse"><Star className="text-yellow-300 w-20 h-20 fill-yellow-100" /></div>
    </div>
);

export const SeniorDecor = () => (
    <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }}>
        <div className="absolute top-10 left-10"><Coffee className="text-stone-900 w-32 h-32 opacity-10" /></div>
        <div className="absolute bottom-10 right-10 rotate-12"><PenTool className="text-stone-900 w-48 h-48 opacity-10" /></div>
    </div>
);

export const CEODecor = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-48 h-[2px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent animate-shimmer"></div>
    </div>
);

export const VibeDecor = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-[#ccff00] opacity-[0.35] rounded-full blur-[100px] animate-[pulse_6s_infinite] mix-blend-screen"></div>
        <div className="absolute top-[20%] -right-[15%] w-[70%] h-[70%] bg-[#ff00ff] opacity-[0.25] rounded-full blur-[130px] animate-[pulse_9s_infinite_reverse] mix-blend-plus-lighter"></div>
        <div className="absolute -bottom-[20%] left-[10%] w-[80%] h-[80%] bg-[#00ffff] opacity-[0.25] rounded-full blur-[150px] animate-[pulse_12s_infinite] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-indigo-500 opacity-[0.15] rounded-full blur-[100px] animate-pulse mix-blend-overlay"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-[#ff3e00] opacity-[0.2] rounded-full blur-[120px] animate-[pulse_10s_infinite_reverse] mix-blend-plus-lighter"></div>
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 3px)' }}></div>
        <div className="absolute top-[10%] right-[5%] text-[15vw] font-black text-white/[0.04] select-none -rotate-12 tracking-tighter italic leading-none whitespace-nowrap uppercase">no cap</div>
        <div className="absolute bottom-[15%] left-[2%] text-[12vw] font-black text-[#ccff00]/[0.03] select-none rotate-3 tracking-tighter leading-none whitespace-nowrap uppercase italic">vibe check</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-extrabold text-[#ff00ff]/[0.015] select-none pointer-events-none uppercase italic tracking-widest leading-none">BET</div>
    </div>
);

export const AcademicDecor = () => (
    <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-20 right-20 font-serif text-6xl text-slate-200 select-none">Σ</div>
        <div className="absolute bottom-40 left-20 font-serif text-6xl text-slate-200 select-none">Φ</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-slate-100"></div>
    </div>
);
