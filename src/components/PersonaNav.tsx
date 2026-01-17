import { SmoothWrapper } from './SmoothWrapper';
import type { Persona, AudienceId } from '../types';

interface PersonaNavProps {
    audience: AudienceId;
    setAudience: (a: AudienceId) => void;
    audiences: Persona[];
}

export const PersonaNav = ({ audience, setAudience, audiences }: PersonaNavProps) => {
    const renderNav = (type: AudienceId) => {
        // 1. 5yo: Bubble Buttons
        if (type === '5yo') {
            return (
                <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-4">
                    {audiences.map((item) => (
                        <button key={item.id} onClick={() => setAudience(item.id)} disabled={audience === item.id}
                            className={`flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-all duration-500 shadow-[0_6px_0_#fbcfe8] md:shadow-[0_8px_0_#fbcfe8] hover:shadow-[0_4px_0_#fbcfe8] active:shadow-none active:translate-y-1 ${audience === item.id
                                ? 'bg-pink-400 text-white scale-110 rotate-6 ring-2 md:ring-4 ring-white cursor-default shadow-[0_4px_0_#be185d] md:shadow-[0_6px_0_#be185d]'
                                : 'bg-white text-slate-400 hover:bg-yellow-100 hover:scale-110 hover:-rotate-3'
                                }`}>
                            <div className="animate-bounce-slow"><item.icon size={20} className="md:w-6 md:h-6" /></div>
                            <span className="text-[8px] md:text-[10px] font-black mt-1 uppercase tracking-tighter">{item.label}</span>
                        </button>
                    ))}
                </div>
            );
        }

        // 2. Senior: Newspaper Section Links
        if (type === 'senior') {
            return (
                <div className="flex justify-center flex-wrap gap-x-4 md:gap-x-6 gap-y-2 mb-8 border-t border-b border-stone-800 py-3 bg-[#FEFEFA] px-4">
                    {audiences.map((item, idx) => (
                        <div key={item.id} className="flex items-center gap-4 md:gap-6">
                            <button onClick={() => setAudience(item.id)} disabled={audience === item.id} className={`font-serif uppercase tracking-widest text-[10px] md:text-sm transition-colors ${audience === item.id ? 'text-stone-900 font-bold underline decoration-2 underline-offset-4 cursor-default' : 'text-stone-500 hover:text-stone-800'}`}>
                                {item.label}
                            </button>
                            {idx < audiences.length - 1 && <span className="text-stone-300 font-serif hidden xs:inline">|</span>}
                        </div>
                    ))}
                </div>
            );
        }

        // 3. CEO: Tactical Dashboard Navigation
        if (type === 'ceo') {
            return (
                <div className="flex justify-center mb-8 px-2">
                    <div className="bg-[#1a1a1f] p-1 md:p-1.5 rounded-lg md:rounded-xl border border-white/5 flex flex-wrap justify-center gap-1 md:gap-2 shadow-2xl w-full max-w-sm md:max-w-none">
                        {audiences.map((item) => (
                            <button key={item.id} onClick={() => setAudience(item.id)} disabled={audience === item.id}
                                className={`flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2.5 rounded-md md:rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] transition-all duration-300 ${audience === item.id
                                    ? 'bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] cursor-default'
                                    : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                                    }`}>
                                <item.icon size={12} className={audience === item.id ? 'text-white' : 'text-slate-600'} />
                                <span className="whitespace-nowrap">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        // 4. Gen Z: Floating Stories / Pills
        if (type === 'genz') {
            return (
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 px-2">
                    {audiences.map((item) => (
                        <button key={item.id} onClick={() => setAudience(item.id)} disabled={audience === item.id}
                            className={`group relative px-4 md:px-6 py-1.5 md:py-2 transition-all duration-500 rounded-full overflow-hidden ${audience === item.id
                                ? 'bg-[#ccff00] text-black scale-105 md:scale-110 shadow-[0_0_30px_rgba(204,255,0,0.4)] ring-2 ring-[#ccff00] cursor-default'
                                : 'bg-white/5 text-slate-500 hover:text-white border border-white/10 hover:border-[#ccff00]/50'
                                }`}>
                            {/* Animated background on active */}
                            {audience === item.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-cyan-400 opacity-20 animate-pulse"></div>
                            )}
                            <div className="relative flex items-center gap-1.5 md:gap-2">
                                <item.icon size={14} className={audience === item.id ? 'text-black' : 'group-hover:text-[#ccff00] transition-colors'} />
                                <span className="font-black italic uppercase text-[10px] md:text-xs tracking-tighter whitespace-nowrap">{item.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            );
        }

        // 5. Academic: Manuscript Index
        if (type === 'academic') {
            return (
                <div className="max-w-4xl mx-auto px-2">
                    {/* Desktop: Traditional Folder Tabs */}
                    <div className="hidden md:flex justify-start gap-1 mb-0 border-b border-slate-300">
                        {audiences.map((item) => (
                            <button key={item.id} onClick={() => setAudience(item.id)} disabled={audience === item.id}
                                className={`px-4 md:px-6 py-2 md:py-3 font-serif text-[10px] md:text-sm rounded-t-lg border-t border-l border-r transition-all whitespace-nowrap ${audience === item.id ? 'bg-white border-slate-300 text-slate-900 font-bold relative top-[1px] cursor-default' : 'bg-slate-100 border-transparent text-slate-500 hover:text-slate-800'}`}>
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile: Reimagined "Archive Drawer" Interface */}
                    <div className="md:hidden flex flex-col gap-4 mb-6 px-1">
                        <div className="relative h-px bg-slate-300 w-full flex justify-center items-center">
                            <div className="bg-[#fcf8f3] px-3 font-serif text-[9px] uppercase tracking-[0.4em] text-slate-400 italic">Manuscript Archives</div>
                        </div>
                        <div className="flex overflow-x-auto no-scrollbar gap-3 px-2 pb-4 snap-x">
                            {audiences.map((item, idx) => (
                                <button
                                    key={item.id}
                                    onClick={() => setAudience(item.id)}
                                    disabled={audience === item.id}
                                    className={`snap-center flex-shrink-0 flex flex-col items-start p-4 min-w-[120px] transition-all duration-700 ${audience === item.id
                                        ? 'bg-white border-l-4 border-slate-900 shadow-xl scale-105 translate-z-0'
                                        : 'bg-slate-50/50 border-l border-slate-200 text-slate-400 grayscale opacity-70'
                                        }`}
                                >
                                    <span className="font-mono text-[8px] mb-1 opacity-50">REF. 00{idx + 1}</span>
                                    <div className="flex items-center gap-2">
                                        <item.icon size={12} className={audience === item.id ? 'text-slate-900' : 'text-slate-400'} />
                                        <span className="font-serif text-[11px] font-bold tracking-wide uppercase italic">{item.label}</span>
                                    </div>
                                    <div className={`h-0.5 w-full mt-2 transition-all duration-500 ${audience === item.id ? 'bg-slate-900 opacity-100' : 'bg-transparent opacity-0'}`}></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <SmoothWrapper className="relative w-full">
            <div className="grid grid-cols-1 grid-rows-1">
                {(['5yo', 'senior', 'ceo', 'genz', 'academic'] as AudienceId[]).map((type) => {
                    const isActive = audience === type;
                    return (
                        <div
                            key={type}
                            className={`col-start-1 row-start-1 w-full transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 z-10 pointer-events-auto relative transform translate-y-0' : 'opacity-0 z-0 pointer-events-none absolute top-0 left-0 transform -translate-y-2'}`}
                        >
                            {renderNav(type)}
                        </div>
                    );
                })}
            </div>
        </SmoothWrapper>
    );
};
