import { Smile, Palette, Feather, TrendingUp, Check, Zap, Sparkles } from 'lucide-react';

export const PlayfulRenderer = ({ content }: { content: string }) => {
    const sections = content.split('\n');

    return (
        <div className="font-sans text-sm md:text-base space-y-4 relative pb-6 px-2">
            <div className="absolute top-0 -right-2 md:-right-4 animate-bounce opacity-20"><Smile className="text-yellow-400 w-10 h-10 md:w-12 md:h-12" /></div>
            <div className="absolute top-1/2 -left-2 md:-left-4 animate-pulse opacity-20 rotate-12"><Palette className="text-pink-400 w-8 h-8 md:w-10 md:h-10" /></div>

            <div className="flex flex-col gap-3 md:gap-4">
                {sections.map((line: string, idx: number) => {
                    const cleanLine = line.trim().replace(/[✨““”]/g, '');
                    if (cleanLine === '' && line.includes('✨')) return null;
                    if (line.trim() === '“' || line.trim() === '”') return null;

                    const isHeader = line.startsWith('## ');
                    const isSubHeader = line.startsWith('### ');

                    if (isHeader) {
                        const colors = {
                            'Idea': 'from-purple-400 to-pink-400 ring-purple-100',
                            'Details': 'from-amber-400 to-orange-400 ring-orange-100',
                            'Words': 'from-blue-400 to-cyan-400 ring-cyan-100',
                            'Try': 'from-green-400 to-emerald-400 ring-emerald-100',
                            'default': 'from-pink-400 to-rose-400 ring-rose-100'
                        };
                        const type = Object.keys(colors).find(k => line.includes(k)) || 'default';
                        const colorClass = colors[type as keyof typeof colors];

                        return (
                            <div key={idx} className="mt-4 md:mt-6 mb-1 md:mb-2">
                                <div className={`inline-flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-xl md:rounded-2xl text-white font-black text-base md:text-lg shadow-md transform -rotate-1 bg-gradient-to-r ${colorClass} ring-2 md:ring-4`}>
                                    <Sparkles size={16} className="md:w-[18px] md:h-[18px]" fill="currentColor" />
                                    {line.replace('## ', '').replace(/[🌟🎈🍭🎮❓]/g, '').trim()}
                                </div>
                            </div>
                        );
                    }

                    if (isSubHeader) {
                        return (
                            <div key={idx} className="ml-1 md:ml-2 mt-1 md:mt-2">
                                <h4 className="text-xs md:text-base font-black text-pink-500 uppercase flex items-center gap-1.5 md:gap-2 bg-pink-50 px-2 md:px-3 py-1 rounded-lg border-2 border-pink-100 inline-block">
                                    {line.replace('### ', '').replace(/[✨🔮🌊💧]/g, '').trim()}
                                </h4>
                            </div>
                        );
                    }

                    if (line.startsWith('- ')) {
                        return (
                            <div key={idx} className="bg-white p-2.5 md:p-3 rounded-[1.25rem] md:rounded-2xl border-2 border-dashed border-pink-200 flex gap-2 md:gap-3 items-center shadow-sm hover:translate-x-1 transition-transform max-w-2xl">
                                <div className="bg-pink-100 p-1.5 md:p-2 rounded-full text-pink-500 shrink-0"><Check className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={3} /></div>
                                <span className="font-bold text-slate-700 text-xs md:text-sm leading-tight">{line.replace('- ', '').replace(/\*\*/g, '')}</span>
                            </div>
                        );
                    }

                    if (line.trim() === '') return null;

                    const parts = line.split(/(\*\*.*?\*\*)/g);
                    return (
                        <div key={idx} className={`p-3.5 md:p-4 rounded-[1.5rem] md:rounded-3xl shadow-sm relative overflow-hidden group transition-all duration-300 transform ${idx % 2 === 0 ? 'bg-blue-50/60 rotate-[0.5deg]' : 'bg-yellow-50/60 -rotate-[0.5deg]'} max-w-3xl border border-white/50 backdrop-blur-sm`}>
                            <p className="text-slate-700 font-bold text-sm md:text-base leading-snug z-10 relative">
                                {parts.map((part: string, pIdx: number) =>
                                    part.startsWith('**') ? (
                                        <span key={pIdx} className="font-black text-pink-500 underline decoration-2 decoration-pink-100 underline-offset-2">
                                            {part.slice(2, -2)}
                                        </span>
                                    ) : part
                                )}
                            </p>
                            <div className="absolute -bottom-1 -right-1 text-2xl md:text-4xl opacity-5 group-hover:opacity-10 transition-opacity">✨</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const NewspaperRenderer = ({ content }: { content: string }) => {
    const sections = content.split('\n');
    const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="font-serif text-stone-900 selection:bg-stone-300 text-base md:text-lg">
            <div className="border-y-2 md:border-y-4 border-double border-stone-800 py-2 md:py-3 mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-center bg-stone-50/50 px-2 md:px-4 gap-2 md:gap-0">
                <span className="text-[8px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase order-2 md:order-1">Price: One Shilling</span>
                <span className="text-xl md:text-3xl font-black uppercase tracking-tighter order-1 md:order-2">The Global Chronicle</span>
                <span className="text-[8px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.3em] uppercase order-3">{date}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-8 flex flex-col gap-6 md:gap-8">
                    {sections.map((line: string, idx: number) => {
                        if (line.includes('## Visual Map')) return null;
                        if (line.startsWith('## ')) {
                            return (
                                <div key={idx} className="border-b border-stone-300 pb-1.5 md:pb-2 mb-1.5 md:mb-2 mt-2 md:mt-4">
                                    <h3 className="text-xl md:text-2xl font-black text-stone-800 uppercase tracking-tight leading-none italic">
                                        {line.replace('## ', '').replace(/\*\*/g, '')}
                                    </h3>
                                </div>
                            );
                        }
                        if (line.startsWith('### ')) return <h4 key={idx} className="text-base md:text-lg font-bold text-stone-600 uppercase tracking-widest mt-2">{line.replace('### ', '').replace(/\*\*/g, '')}</h4>;
                        if (line.startsWith('- ') || line.startsWith('* ')) {
                            const text = line.startsWith('- ') ? line.replace('- ', '') : line.replace('* ', '');
                            const parts = text.split(/(\*\*.*?\*\*)/g);
                            return (
                                <div key={idx} className="flex gap-3 md:gap-4 p-3 md:p-4 bg-stone-100/50 border-l-4 border-stone-800 font-medium italic">
                                    <span className="text-stone-400 text-xl md:text-2xl leading-none">“</span>
                                    <span className="text-sm md:text-base">
                                        {parts.map((part, pIdx) => part.startsWith('**') ? <span key={pIdx} className="font-black underline decoration-stone-200">{part.slice(2, -2)}</span> : part)}
                                    </span>
                                </div>
                            );
                        }
                        if (line.trim() === '') return null;

                        const parts = line.split(/(\*\*.*?\*\*)/g);
                        return (
                            <p key={idx} className="text-justify leading-relaxed column-count-1 md:column-count-2 gap-8 first-letter:text-5xl md:first-letter:text-6xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none text-sm md:text-base">
                                {parts.map((part: string, pIdx: number) => part.startsWith('**') ? <span key={pIdx} className="font-black underline decoration-stone-300 decoration-4 underline-offset-4">{part.slice(2, -2)}</span> : part)}
                            </p>
                        );
                    })}
                </div>

                <div className="md:col-span-4 flex flex-col gap-6 md:gap-8 border-t md:border-t-0 md:border-l border-stone-200 pt-8 md:pt-0 md:pl-8">
                    <div className="bg-stone-800 text-stone-100 p-4 md:p-6 rounded-sm">
                        <h5 className="font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4 text-stone-400 border-b border-stone-600 pb-2">Editorial Note</h5>
                        <p className="text-xs md:text-sm leading-relaxed italic opacity-80 font-serif">
                            "Knowledge is the only currency that never devalues. Our mission is to distill the complex into the essential, one insight at a time."
                        </p>
                    </div>
                    <div className="border border-stone-300 p-4 md:p-5 grayscale opacity-60 hover:grayscale-0 transition-all cursor-default flex flex-col items-center text-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-stone-900 rounded-full flex items-center justify-center text-stone-100 mb-3 md:mb-4">
                            <Feather size={24} className="md:w-8 md:h-8" />
                        </div>
                        <h6 className="font-black uppercase text-[10px] md:text-xs tracking-tighter mb-1.5 md:mb-2">Certified Authentic</h6>
                        <p className="text-[8px] md:text-[10px] leading-tight text-stone-500 tracking-wider font-sans uppercase">Guaranteed by the Bureau of Explanatory Excellence</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ExecutiveRenderer = ({ content }: { content: string }) => {
    const sections = content.split('\n');
    return (
        <div className="font-sans text-slate-300 leading-relaxed selection:bg-indigo-500/30 selection:text-white pb-10 md:pb-20">
            {/* KPI TOP BAR */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-16">
                <div className="bg-[#1a1a23] p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-indigo-500/50 transition-all shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-indigo-500/5 blur-[60px] md:blur-[80px] rounded-full"></div>
                    <div className="flex justify-between items-center mb-2 md:mb-4 relative z-10">
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-500">Target Priority</span>
                        <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    </div>
                    <div className="text-xl md:text-3xl font-black text-white tracking-tighter relative z-10">OPTIMAL ADOPTION</div>
                </div>
                <div className="bg-[#1a1a23] p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-emerald-500/50 transition-all shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-emerald-500/5 blur-[60px] md:blur-[80px] rounded-full"></div>
                    <div className="flex justify-between items-center mb-2 md:mb-4 relative z-10">
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-500">Market Delta</span>
                        <TrendingUp className="text-emerald-500 w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                    <div className="text-xl md:text-3xl font-black text-white tracking-tighter relative z-10">+24.8% ALPHA</div>
                </div>
                <div className="bg-indigo-600 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-[0_15px_30px_rgba(79,70,229,0.2)] md:shadow-[0_20px_40px_rgba(79,70,229,0.3)] flex flex-col justify-between transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                    <div className="flex justify-between items-center mb-2 md:mb-4">
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-indigo-100">Status</span>
                        <Check className="text-white w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                    <div className="text-xl md:text-3xl font-black text-white italic tracking-tighter uppercase">VERIFIED BRIEF</div>
                </div>
            </div>

            {/* CONTENT STREAM */}
            <div className="max-w-3xl mx-auto space-y-10 md:space-y-16">
                {sections.map((line: string, idx: number) => {
                    if (line.includes('## Visual Map')) return null;
                    if (line.includes('## Executive Summary')) {
                        return (
                            <div key={idx} className="relative group">
                                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[2rem] md:rounded-[3rem] blur-xl md:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="bg-[#1c1c24] border border-white/5 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-3xl relative overflow-hidden backdrop-blur-md">
                                    <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                                        <div className="w-8 md:w-10 h-[1px] bg-indigo-500"></div>
                                        <h4 className="text-indigo-400 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px]">Strategic Synthesis v1.0</h4>
                                    </div>
                                    <p className="text-xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-4 md:mb-6">
                                        Distilled intelligence for mission-critical decision support and framework alignment.
                                    </p>
                                    <div className="flex gap-2">
                                        <div className="px-2 py-0.5 md:px-3 md:py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[7px] md:text-[9px] font-black text-indigo-400 uppercase tracking-widest">Confidential</div>
                                        <div className="px-2 py-0.5 md:px-3 md:py-1 rounded bg-slate-800 border border-white/5 text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-widest">Internal Use</div>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    if (line.startsWith('## ')) {
                        return (
                            <div key={idx} className="flex items-start gap-4 md:gap-8 pt-4 md:pt-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-3 md:w-4 h-3 md:h-4 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-indigo-500"></div>
                                    </div>
                                    <div className="w-[1px] h-16 md:h-24 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none mb-1 md:mb-2">
                                        {line.replace('## ', '').replace(/\*\*/g, '')}
                                    </h3>
                                    <div className="text-[8px] md:text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">Operational Phase</div>
                                </div>
                            </div>
                        );
                    }

                    if (line.startsWith('### ')) {
                        return (
                            <div key={idx} className="ml-7 md:ml-12 mt-6 md:mt-8 mb-3 md:mb-4">
                                <h4 className="text-indigo-400 font-black uppercase tracking-widest text-[9px] md:text-[11px] flex items-center gap-1.5 md:gap-2">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-indigo-500 rotate-45"></div>
                                    {line.replace('### ', '').replace(/\*\*/g, '')}
                                </h4>
                            </div>
                        );
                    }

                    if (line.startsWith('- ')) {
                        return (
                            <div key={idx} className="ml-7 md:ml-12 flex gap-4 md:gap-6 mb-4 md:mb-6 p-4 md:p-8 rounded-2xl md:rounded-3xl bg-[#16161c] border border-white/5 shadow-md md:shadow-lg transition-all hover:bg-[#1a1a24] group">
                                <div className="w-8 md:w-12 h-8 md:h-12 bg-white/5 rounded-lg md:rounded-xl flex items-center justify-center text-indigo-400 border border-white/5 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0">
                                    <Zap className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <div className="flex flex-col gap-1 justify-center">
                                    <span className="text-white font-bold text-base md:text-xl leading-tight tracking-tight">
                                        {line.replace('- ', '').replace(/\*\*/g, '')}
                                    </span>
                                </div>
                            </div>
                        );
                    }

                    if (line.trim() === '') return null;
                    const parts = line.split(/(\*\*.*?\*\*)/g);
                    return (
                        <div key={idx} className="ml-7 md:ml-12 relative">
                            <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl italic font-serif opacity-80 border-l border-white/10 pl-4 md:pl-8">
                                {parts.map((part: string, pIdx: number) =>
                                    part.startsWith('**')
                                        ? <span key={pIdx} className="text-white font-bold not-italic decoration-indigo-500/50 underline underline-offset-4">{part.slice(2, -2)}</span>
                                        : part
                                )}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export const NeoBrutalistRenderer = ({ content }: { content: string }) => {
    const sections = content.split('\n').filter(s => s.trim() !== '');
    return (
        <div className="font-sans text-white relative space-y-4 pb-12 px-2">
            <div className="space-y-4">
                {sections.map((line: string, idx: number) => {
                    if (line.includes('## Visual Map')) return null;

                    if (line.startsWith('## ')) {
                        return (
                            <div key={idx} className="relative pt-4 md:pt-6 pb-1 md:pb-2">
                                <h2 className="text-3xl md:text-5xl font-[1000] tracking-tight text-white leading-[0.9]">
                                    {line.replace('## ', '').replace(/\*\*/g, '')}
                                </h2>
                                <div className="h-1 md:h-1.5 w-16 md:w-24 bg-[#ccff00] mt-1.5 md:mt-2"></div>
                            </div>
                        );
                    }

                    if (line.startsWith('### ')) {
                        return (
                            <div key={idx} className="inline-block bg-[#00ffff] text-black px-1.5 md:px-2 py-0.5 text-[8px] md:text-[10px] font-black uppercase tracking-widest transform -rotate-1">
                                {line.replace('### ', '').replace(/\*\*/g, '')}
                            </div>
                        );
                    }

                    if (line.includes('## tl;dr')) {
                        return (
                            <div key={idx} className="bg-white text-black p-4 md:p-5 border-l-4 md:border-l-8 border-black shadow-[4px_4px_0_#ccff00] md:shadow-[6px_6px_0_#ccff00]">
                                <div className="flex justify-between items-center mb-1.5 md:mb-2">
                                    <span className="bg-black text-white px-1.5 md:px-2 py-0.5 text-[8px] md:text-[10px] font-black italic tracking-widest whitespace-nowrap">BREAKING FACTS</span>
                                    <Sparkles className="text-pink-500 w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <p className="text-xl md:text-3xl font-[1000] leading-tight uppercase">
                                    STRAIGHT FAX.
                                </p>
                            </div>
                        );
                    }

                    if (line.startsWith('- ')) {
                        return (
                            <div key={idx} className="flex justify-start">
                                <div className="bg-[#ccff00] text-black p-3 md:p-4 max-w-[95%] md:max-w-[90%] shadow-[3px_3px_0_black] md:shadow-[4px_4px_0_black] border-2 border-black inline-block">
                                    <p className="text-base md:text-lg font-black leading-snug tracking-tight italic">
                                        {line.replace('- ', '').replace(/\*\*/g, '')}
                                    </p>
                                </div>
                            </div>
                        );
                    }

                    const parts = line.split(/(\*\*.*?\*\*)/g);
                    return (
                        <div key={idx} className="relative bg-white/5 border border-white/10 p-4 md:p-5 group hover:border-[#ccff00] transition-colors overflow-hidden">
                            <div className="absolute top-0 left-0 w-full flex gap-1 p-1">
                                <div className="h-0.5 flex-1 bg-[#ccff00] opacity-30"></div>
                                <div className="h-0.5 flex-1 bg-[#ccff00] opacity-10"></div>
                                <div className="h-0.5 flex-1 bg-[#ccff00] opacity-10"></div>
                            </div>
                            <p className="text-lg md:text-xl font-bold leading-relaxed tracking-tight text-white pt-1">
                                {parts.map((part: string, pIdx: number) =>
                                    part.startsWith('**')
                                        ? <span key={pIdx} className="text-[#ccff00] font-black underline decoration-[#ccff00]/30 underline-offset-4">{part.slice(2, -2)}</span>
                                        : part
                                )}
                            </p>
                            <div className="mt-3 md:mt-4 flex gap-2 md:gap-3 text-[7px] md:text-[8px] font-black text-white/20 uppercase">
                                <span>#REAL</span>
                                <span>#GOATED</span>
                                <span>#BASED</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="pt-6 md:pt-8 flex justify-center">
                <button className="bg-[#ccff00] text-black px-8 md:px-12 py-4 md:py-5 font-[1000] text-2xl md:text-3xl italic uppercase tracking-tighter shadow-[5px_5px_0_#ff00ff] md:shadow-[8px_8px_0_#ff00ff] border-2 md:border-4 border-black active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                    W 💅
                </button>
            </div>
        </div>
    );
};

export const AcademicRenderer = ({ content }: { content: string }) => {
    const sections = content.split('\n');
    return (
        <div className="font-serif text-slate-900 leading-relaxed text-sm md:text-base md:text-lg max-w-4xl mx-auto py-6 md:py-10 px-2 md:px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-slate-900 pb-2 md:pb-1 mb-8 md:mb-16 gap-2 md:gap-0">
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-500">Vol. 42 / Issue 7 // Peer Reviewed Output</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-500">Digital Archive v2025.04.16</span>
            </div>

            <div className="space-y-6 md:space-y-10">
                {sections.map((line: string, idx: number) => {
                    if (line.includes('## Visual Map')) return null;
                    if (line.includes('## Abstract')) {
                        return (
                            <div key={idx} className="bg-slate-50 p-5 md:p-8 border border-slate-200">
                                <div className="text-center font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] mb-4 md:mb-6 text-slate-400">Section I: Abstract Abstractum</div>
                                <p className="italic text-justify text-slate-700 leading-relaxed md:leading-loose md:indent-10 font-medium text-xs md:text-base">
                                    The following inquiry presents a comprehensive synthesis of the phenomenon under investigation. Through a rigorous analysis of conceptual frameworks and methodological considerations, we delineate the foundational principles that govern the observed complexity...
                                </p>
                            </div>
                        )
                    }
                    if (line.startsWith('## ')) {
                        return (
                            <div key={idx} className="flex flex-col gap-2 md:gap-4 mt-12 md:mt-20 mb-6 md:mb-10 border-t border-slate-100 pt-6 md:pt-10 first:mt-0 first:border-0 first:pt-0">
                                <div className="font-bold text-slate-400 text-[10px] md:text-xs tracking-widest uppercase">Chapter {(idx / 5).toFixed(0)}</div>
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 uppercase tracking-tighter leading-tight md:leading-none border-l-4 md:border-l-8 border-slate-900 pl-4 md:pl-8 transition-colors hover:text-slate-600">
                                    {line.replace('## ', '').replace(/\*\*/g, '')}
                                </h2>
                            </div>
                        );
                    }
                    if (line.startsWith('### ')) return <h3 key={idx} className="text-lg md:text-xl italic text-slate-700 mt-6 md:mt-8 mb-3 md:mb-4 font-bold tracking-tight border-b-2 border-slate-100 pb-2 inline-block pr-6 md:pr-10">{line.replace('### ', '').replace(/\*\*/g, '')}</h3>;
                    if (line.startsWith('- ') || line.startsWith('* ')) {
                        const text = line.startsWith('- ') ? line.replace('- ', '') : line.replace('* ', '');
                        const parts = text.split(/(\*\*.*?\*\*)/g);
                        return (
                            <li key={idx} className="ml-0 md:ml-2 list-none p-3 md:p-4 rounded-lg bg-slate-50/50 border border-slate-100 mb-3 md:mb-4 text-slate-800 font-medium grid grid-cols-12 gap-2 md:gap-4">
                                <span className="col-span-1 text-slate-300 font-mono text-[10px] md:text-xs">{(idx % 20).toString().padStart(2, '0')}</span>
                                <span className="col-span-11 text-xs md:text-base">
                                    {parts.map((part, pIdx) => part.startsWith('**') ? <span key={pIdx} className="font-black text-slate-900 underline decoration-slate-200">{part.slice(2, -2)}</span> : part)}
                                </span>
                            </li>
                        );
                    }
                    if (line.trim() === '') return null;

                    const parts = line.split(/(\[.*?\]|\*\*.*?\*\*)/g);
                    return (
                        <p key={idx} className="text-justify md:indent-12 leading-relaxed md:leading-[1.8] text-slate-800 selection:bg-slate-200 font-serif text-sm md:text-base">
                            {parts.map((part: string, pIdx: number) => {
                                if (part.startsWith('[')) return <sup key={pIdx} className="text-blue-700 font-bold text-[8px] md:text-[10px] cursor-pointer hover:bg-blue-50 px-0.5 transition-colors">{part}</sup>;
                                if (part.startsWith('**')) return <span key={pIdx} className="font-black text-slate-900 tracking-tight underline decoration-slate-200 decoration-2 underline-offset-4">{part.slice(2, -2)}</span>;
                                return part;
                            })}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};
