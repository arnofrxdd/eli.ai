import { Smile, Palette, Feather, TrendingUp, Check, Zap, Sparkles } from 'lucide-react';

export const PlayfulRenderer = ({ content }: { content: string }) => {
    const sections = content.split('\n');

    return (
        <div className="font-sans text-base space-y-4 relative pb-6 px-2">
            <div className="absolute top-0 -right-4 animate-bounce opacity-20"><Smile className="text-yellow-400 w-12 h-12" /></div>
            <div className="absolute top-1/2 -left-4 animate-pulse opacity-20 rotate-12"><Palette className="text-pink-400 w-10 h-10" /></div>

            <div className="flex flex-col gap-4">
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
                            <div key={idx} className="mt-6 mb-2">
                                <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-2xl text-white font-black text-lg shadow-md transform -rotate-1 bg-gradient-to-r ${colorClass} ring-4`}>
                                    <Sparkles size={18} fill="currentColor" />
                                    {line.replace('## ', '').replace(/[🌟🎈🍭🎮❓]/g, '').trim()}
                                </div>
                            </div>
                        );
                    }

                    if (isSubHeader) {
                        return (
                            <div key={idx} className="ml-2 mt-2">
                                <h4 className="text-base font-black text-pink-500 uppercase flex items-center gap-2 bg-pink-50 px-3 py-1 rounded-lg border-2 border-pink-100 inline-block">
                                    {line.replace('### ', '').replace(/[✨🔮🌊💧]/g, '').trim()}
                                </h4>
                            </div>
                        );
                    }

                    if (line.startsWith('- ')) {
                        return (
                            <div key={idx} className="bg-white p-3 rounded-2xl border-2 border-dashed border-pink-200 flex gap-3 items-center shadow-sm hover:translate-x-1 transition-transform max-w-2xl">
                                <div className="bg-pink-100 p-2 rounded-full text-pink-500 shrink-0"><Check size={16} strokeWidth={3} /></div>
                                <span className="font-bold text-slate-700 text-sm leading-tight">{line.replace('- ', '').replace(/\*\*/g, '')}</span>
                            </div>
                        );
                    }

                    if (line.trim() === '') return null;

                    const parts = line.split(/(\*\*.*?\*\*)/g);
                    return (
                        <div key={idx} className={`p-4 rounded-3xl shadow-sm relative overflow-hidden group transition-all duration-300 transform ${idx % 2 === 0 ? 'bg-blue-50/60 rotate-[0.5deg]' : 'bg-yellow-50/60 -rotate-[0.5deg]'} max-w-3xl border border-white/50 backdrop-blur-sm`}>
                            <p className="text-slate-700 font-bold text-base leading-snug z-10 relative">
                                {parts.map((part: string, pIdx: number) =>
                                    part.startsWith('**') ? (
                                        <span key={pIdx} className="font-black text-pink-500 underline decoration-2 decoration-pink-100 underline-offset-2">
                                            {part.slice(2, -2)}
                                        </span>
                                    ) : part
                                )}
                            </p>
                            <div className="absolute -bottom-2 -right-2 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">✨</div>
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
        <div className="font-serif text-stone-900 selection:bg-stone-300 text-lg md:text-xl">
            <div className="border-y-4 border-double border-stone-800 py-3 mb-12 flex justify-between items-center bg-stone-50/50 px-4">
                <span className="text-xs font-black tracking-[0.3em] uppercase">Price: One Shilling</span>
                <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter">The Global Chronicle</span>
                <span className="text-xs font-black tracking-[0.3em] uppercase">{date}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-8 flex flex-col gap-8">
                    {sections.map((line: string, idx: number) => {
                        if (line.includes('## Visual Map')) return null;
                        if (line.startsWith('## ')) {
                            return (
                                <div key={idx} className="border-b border-stone-300 pb-2 mb-2 mt-4">
                                    <h3 className="text-2xl font-black text-stone-800 uppercase tracking-tight leading-none italic">
                                        {line.replace('## ', '').replace(/\*\*/g, '')}
                                    </h3>
                                </div>
                            );
                        }
                        if (line.startsWith('### ')) return <h4 key={idx} className="text-lg font-bold text-stone-600 uppercase tracking-widest mt-2">{line.replace('### ', '').replace(/\*\*/g, '')}</h4>;
                        if (line.startsWith('- ') || line.startsWith('* ')) {
                            const text = line.startsWith('- ') ? line.replace('- ', '') : line.replace('* ', '');
                            const parts = text.split(/(\*\*.*?\*\*)/g);
                            return (
                                <div key={idx} className="flex gap-4 p-4 bg-stone-100/50 border-l-4 border-stone-800 font-medium italic">
                                    <span className="text-stone-400 text-2xl leading-none">“</span>
                                    <span>
                                        {parts.map((part, pIdx) => part.startsWith('**') ? <span key={pIdx} className="font-black underline decoration-stone-200">{part.slice(2, -2)}</span> : part)}
                                    </span>
                                </div>
                            );
                        }
                        if (line.trim() === '') return null;

                        const parts = line.split(/(\*\*.*?\*\*)/g);
                        return (
                            <p key={idx} className="text-justify leading-relaxed column-count-1 md:column-count-2 gap-8 first-letter:text-6xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                                {parts.map((part: string, pIdx: number) => part.startsWith('**') ? <span key={pIdx} className="font-black underline decoration-stone-300 decoration-4 underline-offset-4">{part.slice(2, -2)}</span> : part)}
                            </p>
                        );
                    })}
                </div>

                <div className="md:col-span-4 flex flex-col gap-8 border-l border-stone-200 pl-8">
                    <div className="bg-stone-800 text-stone-100 p-6 rounded-sm">
                        <h5 className="font-bold uppercase tracking-widest text-xs mb-4 text-stone-400 border-b border-stone-600 pb-2">Editorial Note</h5>
                        <p className="text-sm leading-relaxed italic opacity-80 font-serif">
                            "Knowledge is the only currency that never devalues. Our mission is to distill the complex into the essential, one insight at a time."
                        </p>
                    </div>
                    <div className="border border-stone-300 p-5 grayscale opacity-60 hover:grayscale-0 transition-all cursor-default flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center text-stone-100 mb-4">
                            <Feather size={32} />
                        </div>
                        <h6 className="font-black uppercase text-xs tracking-tighter mb-2">Certified Authentic</h6>
                        <p className="text-[10px] leading-tight text-stone-500 tracking-wider font-sans">GUARANTEED BY THE BUREAU OF EXPLANATORY EXCELLENCE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const ExecutiveRenderer = ({ content }: { content: string }) => {
    const sections = content.split('\n');
    return (
        <div className="font-sans text-slate-300 leading-relaxed selection:bg-indigo-500/30 selection:text-white pb-20">
            {/* KPI TOP BAR */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                <div className="bg-[#1a1a23] p-6 rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-indigo-500/50 transition-all shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[80px] rounded-full"></div>
                    <div className="flex justify-between items-center mb-4 relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Target Priority</span>
                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    </div>
                    <div className="text-3xl font-black text-white tracking-tighter relative z-10">OPTIMAL ADOPTION</div>
                </div>
                <div className="bg-[#1a1a23] p-6 rounded-2xl border border-white/5 flex flex-col justify-between group hover:border-emerald-500/50 transition-all shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[80px] rounded-full"></div>
                    <div className="flex justify-between items-center mb-4 relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Market Delta</span>
                        <TrendingUp className="text-emerald-500" size={16} />
                    </div>
                    <div className="text-3xl font-black text-white tracking-tighter relative z-10">+24.8% ALPHA</div>
                </div>
                <div className="bg-indigo-600 p-6 rounded-2xl shadow-[0_20px_40px_rgba(79,70,229,0.3)] flex flex-col justify-between transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-100">Status</span>
                        <Check className="text-white" size={16} />
                    </div>
                    <div className="text-3xl font-black text-white italic tracking-tighter uppercase">VERIFIED BRIEF</div>
                </div>
            </div>

            {/* CONTENT STREAM */}
            <div className="max-w-3xl mx-auto space-y-16">
                {sections.map((line: string, idx: number) => {
                    if (line.includes('## Visual Map')) return null;
                    if (line.includes('## Executive Summary')) {
                        return (
                            <div key={idx} className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="bg-[#1c1c24] border border-white/5 p-10 rounded-[2.5rem] shadow-3xl relative overflow-hidden backdrop-blur-md">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="w-10 h-[1px] bg-indigo-500"></div>
                                        <h4 className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px]">Strategic Synthesis v1.0</h4>
                                    </div>
                                    <p className="text-3xl font-bold text-white leading-tight tracking-tight mb-6">
                                        Distilled intelligence for mission-critical decision support and framework alignment.
                                    </p>
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-[9px] font-black text-indigo-400 uppercase tracking-widest">Confidential</div>
                                        <div className="px-3 py-1 rounded bg-slate-800 border border-white/5 text-[9px] font-black text-slate-400 uppercase tracking-widest">Internal Use</div>
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    if (line.startsWith('## ')) {
                        return (
                            <div key={idx} className="flex items-start gap-8 pt-6">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                    </div>
                                    <div className="w-[1px] h-24 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                                        {line.replace('## ', '').replace(/\*\*/g, '')}
                                    </h3>
                                    <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em]">Operational Phase</div>
                                </div>
                            </div>
                        );
                    }

                    if (line.startsWith('### ')) {
                        return (
                            <div key={idx} className="ml-12 mt-8 mb-4">
                                <h4 className="text-indigo-400 font-black uppercase tracking-widest text-[11px] flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rotate-45"></div>
                                    {line.replace('### ', '').replace(/\*\*/g, '')}
                                </h4>
                            </div>
                        );
                    }

                    if (line.startsWith('- ')) {
                        return (
                            <div key={idx} className="ml-12 flex gap-6 mb-6 p-8 rounded-3xl bg-[#16161c] border border-white/5 shadow-lg transition-all hover:bg-[#1a1a24] group">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400 border border-white/5 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                    <Zap size={20} />
                                </div>
                                <div className="flex flex-col gap-1 justify-center">
                                    <span className="text-white font-bold text-xl leading-tight tracking-tight">
                                        {line.replace('- ', '').replace(/\*\*/g, '')}
                                    </span>
                                </div>
                            </div>
                        );
                    }

                    if (line.trim() === '') return null;
                    const parts = line.split(/(\*\*.*?\*\*)/g);
                    return (
                        <div key={idx} className="ml-12 relative">
                            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl italic font-serif opacity-80 border-l border-white/10 pl-8">
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
        <div className="font-sans text-white relative space-y-4 pb-12">
            <div className="space-y-4">
                {sections.map((line: string, idx: number) => {
                    if (line.includes('## Visual Map')) return null;

                    if (line.startsWith('## ')) {
                        return (
                            <div key={idx} className="relative pt-6 pb-2">
                                <h2 className="text-5xl font-[1000] tracking-tight text-white leading-[0.9]">
                                    {line.replace('## ', '').replace(/\*\*/g, '')}
                                </h2>
                                <div className="h-1.5 w-24 bg-[#ccff00] mt-2"></div>
                            </div>
                        );
                    }

                    if (line.startsWith('### ')) {
                        return (
                            <div key={idx} className="inline-block bg-[#00ffff] text-black px-2 py-0.5 text-[10px] font-black uppercase tracking-widest transform -rotate-1">
                                {line.replace('### ', '').replace(/\*\*/g, '')}
                            </div>
                        );
                    }

                    if (line.includes('## tl;dr')) {
                        return (
                            <div key={idx} className="bg-white text-black p-5 border-l-8 border-black shadow-[6px_6px_0_#ccff00]">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="bg-black text-white px-2 py-0.5 text-[10px] font-black italic tracking-widest">BREAKING FACTS</span>
                                    <Sparkles className="text-pink-500" size={20} />
                                </div>
                                <p className="text-3xl font-[1000] leading-tight">
                                    STRAIGHT FAX.
                                </p>
                            </div>
                        );
                    }

                    if (line.startsWith('- ')) {
                        return (
                            <div key={idx} className="flex justify-start">
                                <div className="bg-[#ccff00] text-black p-4 max-w-[90%] shadow-[4px_4px_0_black] border-2 border-black inline-block">
                                    <p className="text-lg font-black leading-snug tracking-tight">
                                        {line.replace('- ', '').replace(/\*\*/g, '')}
                                    </p>
                                </div>
                            </div>
                        );
                    }

                    const parts = line.split(/(\*\*.*?\*\*)/g);
                    return (
                        <div key={idx} className="relative bg-white/5 border border-white/10 p-5 group hover:border-[#ccff00] transition-colors overflow-hidden">
                            <div className="absolute top-0 left-0 w-full flex gap-1 p-1">
                                <div className="h-0.5 flex-1 bg-[#ccff00] opacity-30"></div>
                                <div className="h-0.5 flex-1 bg-[#ccff00] opacity-10"></div>
                                <div className="h-0.5 flex-1 bg-[#ccff00] opacity-10"></div>
                            </div>
                            <p className="text-xl font-bold leading-relaxed tracking-tight text-white pt-1">
                                {parts.map((part: string, pIdx: number) =>
                                    part.startsWith('**')
                                        ? <span key={pIdx} className="text-[#ccff00] font-black underline decoration-[#ccff00]/30 underline-offset-4">{part.slice(2, -2)}</span>
                                        : part
                                )}
                            </p>
                            <div className="mt-4 flex gap-3 text-[8px] font-black text-white/20 uppercase">
                                <span>#REAL</span>
                                <span>#GOATED</span>
                                <span>#BASED</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="pt-8 flex justify-center">
                <button className="bg-[#ccff00] text-black px-12 py-5 font-[1000] text-3xl italic uppercase tracking-tighter shadow-[8px_8px_0_#ff00ff] border-4 border-black active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                    W 💅
                </button>
            </div>
        </div>
    );
};

export const AcademicRenderer = ({ content }: { content: string }) => {
    const sections = content.split('\n');
    return (
        <div className="font-serif text-slate-900 leading-relaxed text-base md:text-lg max-w-4xl mx-auto py-10">
            <div className="flex justify-between items-end border-b-2 border-slate-900 pb-1 mb-16">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Vol. 42 / Issue 7 // Peer Reviewed Output</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Digital Archive v2025.04.16</span>
            </div>

            <div className="space-y-10">
                {sections.map((line: string, idx: number) => {
                    if (line.includes('## Visual Map')) return null;
                    if (line.includes('## Abstract')) {
                        return (
                            <div key={idx} className="bg-slate-50 p-8 border border-slate-200">
                                <div className="text-center font-bold uppercase tracking-[0.3em] text-[11px] mb-6 text-slate-400">Section I: Abstract Abstractum</div>
                                <p className="italic text-justify text-slate-700 leading-loose indent-10 font-medium">
                                    The following inquiry presents a comprehensive synthesis of the phenomenon under investigation. Through a rigorous analysis of conceptual frameworks and methodological considerations, we delineate the foundational principles that govern the observed complexity...
                                </p>
                            </div>
                        )
                    }
                    if (line.startsWith('## ')) {
                        return (
                            <div key={idx} className="flex flex-col gap-4 mt-20 mb-10 border-t border-slate-100 pt-10 first:mt-0 first:border-0 first:pt-0">
                                <div className="font-bold text-slate-400 text-xs tracking-widest uppercase">Chapter {(idx / 5).toFixed(0)}</div>
                                <h2 className="text-4xl font-bold text-slate-900 uppercase tracking-tighter leading-none border-l-8 border-slate-900 pl-8 transition-colors hover:text-slate-600">
                                    {line.replace('## ', '').replace(/\*\*/g, '')}
                                </h2>
                            </div>
                        );
                    }
                    if (line.startsWith('### ')) return <h3 key={idx} className="text-xl italic text-slate-700 mt-8 mb-4 font-bold tracking-tight border-b-2 border-slate-100 pb-2 inline-block pr-10">{line.replace('### ', '').replace(/\*\*/g, '')}</h3>;
                    if (line.startsWith('- ') || line.startsWith('* ')) {
                        const text = line.startsWith('- ') ? line.replace('- ', '') : line.replace('* ', '');
                        const parts = text.split(/(\*\*.*?\*\*)/g);
                        return (
                            <li key={idx} className="ml-2 list-none p-4 rounded-lg bg-slate-50/50 border border-slate-100 mb-4 text-slate-800 font-medium grid grid-cols-12 gap-4">
                                <span className="col-span-1 text-slate-300 font-mono text-xs">{(idx % 20).toString().padStart(2, '0')}</span>
                                <span className="col-span-11">
                                    {parts.map((part, pIdx) => part.startsWith('**') ? <span key={pIdx} className="font-black text-slate-900 underline decoration-slate-200">{part.slice(2, -2)}</span> : part)}
                                </span>
                            </li>
                        );
                    }
                    if (line.trim() === '') return null;

                    const parts = line.split(/(\[.*?\]|\*\*.*?\*\*)/g);
                    return (
                        <p key={idx} className="text-justify indent-12 leading-[1.8] text-slate-800 selection:bg-slate-200 font-serif">
                            {parts.map((part: string, pIdx: number) => {
                                if (part.startsWith('[')) return <sup key={pIdx} className="text-blue-700 font-bold text-[10px] cursor-pointer hover:bg-blue-50 px-0.5 transition-colors">{part}</sup>;
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
