import {
    Baby, BookOpen, Briefcase, Zap, Feather,
    Star, Coffee, Building2, GraduationCap
} from 'lucide-react';
import {
    MagicalDecor, SeniorDecor, CEODecor, VibeDecor, AcademicDecor
} from '../components/Decorators';
import type { Persona, Theme, AudienceId } from '../types';

export const AUDIENCES: Persona[] = [
    { id: '5yo', icon: Baby, label: 'Child' },
    { id: 'senior', icon: BookOpen, label: 'Senior' },
    { id: 'ceo', icon: Briefcase, label: 'Executive' },
    { id: 'genz', icon: Zap, label: 'Gen Z' },
    { id: 'academic', icon: Feather, label: 'Academic' }
];

export const THEMES: Record<AudienceId, Theme> = {
    '5yo': {
        bgClass: 'bg-[#FFFBEB]',
        bgPattern: 'radial-gradient(#FCD34D 1.5px, transparent 1.5px)',
        bgSize: '40px 40px',
        font: 'Bubblegum Sans, cursive',
        title: 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-black tracking-tight drop-shadow-sm',
        desc: 'text-slate-500 font-bold',
        resultsBg: 'bg-white/40 backdrop-blur-xl border-4 border-white/60',
        icon: <Star className="text-yellow-400 fill-yellow-400 animate-[spin_4s_linear_infinite]" size={42} />,
        decor: <MagicalDecor />
    },
    'senior': {
        bgClass: 'bg-[#FDFCF8]',
        bgPattern: 'none',
        bgSize: '100% 100%',
        font: 'Playfair Display, serif',
        title: 'text-stone-800 font-serif tracking-tight border-b-4 border-stone-800 inline-block',
        desc: 'text-stone-600 italic font-serif mt-4 text-sm uppercase tracking-[0.2em]',
        resultsBg: 'bg-white/80 backdrop-blur-sm border border-stone-200',
        icon: <Coffee className="text-stone-700" size={32} />,
        decor: <SeniorDecor />
    },
    'ceo': {
        bgClass: 'bg-[#0a0a0c]',
        bgPattern: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
        bgSize: '32px 32px',
        font: 'Inter, sans-serif',
        title: 'text-white font-black tracking-tight uppercase text-5xl italic border-l-8 border-indigo-500 pl-6 py-2',
        desc: 'text-slate-400 font-medium tracking-[0.2em] uppercase text-xs flex items-center gap-2 mt-4',
        resultsBg: 'bg-[#121216] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl',
        icon: <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20"><Building2 className="text-indigo-400" size={32} /></div>,
        decor: <CEODecor />
    },
    'genz': {
        bgClass: 'bg-[#050505]',
        bgPattern: 'linear-gradient(rgba(204,255,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.05) 1px, transparent 1px)',
        bgSize: '40px 40px',
        font: 'Outfit, sans-serif',
        title: 'text-[#ccff00] font-[1000] uppercase tracking-[-0.05em] text-7xl italic leading-[0.8] drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]',
        desc: 'bg-gradient-to-r from-[#ccff00] to-[#00ffff] text-black font-black px-4 py-1 text-sm uppercase skew-x-[-15deg] inline-block mt-8 shadow-[4px_4px_0_#ff00ff]',
        resultsBg: 'bg-black border-4 border-[#ccff00] shadow-[12px_12px_0_#ff00ff]',
        icon: <Zap className="text-[#ccff00] drop-shadow-[0_0_10px_#ccff00]" size={42} />,
        decor: <VibeDecor />
    },
    'academic': {
        bgClass: 'bg-[#fcf8f3]',
        bgPattern: 'linear-gradient(#f1f5f9 1px, transparent 1px)',
        bgSize: '100% 32px',
        font: 'EB Garamond, serif',
        title: 'text-slate-900 font-serif font-medium tracking-tight border-b border-slate-300 pb-2',
        desc: 'text-slate-500 font-serif italic text-base',
        resultsBg: 'bg-white border-l-8 border-slate-900 shadow-sm',
        icon: <GraduationCap className="text-slate-900" size={32} />,
        decor: <AcademicDecor />
    }
};
