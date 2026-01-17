import {
    Sun, Wand2, ArrowRight, PenTool, Feather,
    Loader2, Play, FileText
} from 'lucide-react';
import { AutoTextarea } from './AutoTextarea';
import { SmoothWrapper } from './SmoothWrapper';
import type { AudienceId, ResultState } from '../types';

interface PersonaInputProps {
    audience: AudienceId;
    inputText: string;
    setInputText: (t: string) => void;
    handleExplain: () => void;
    handleClear: () => void;
    results: Record<AudienceId, ResultState>;
}

export const PersonaInput = ({ audience, inputText, setInputText, handleExplain, handleClear, results }: PersonaInputProps) => {

    const renderInput = (type: AudienceId) => {
        const isLoading = results[type].loading;

        // 1. 5yo: Enhanced Magical Cloud Container
        if (type === '5yo') {
            return (
                <div className="relative">
                    <div className="absolute -top-8 md:-top-12 left-5 md:left-10 text-4xl md:text-6xl animate-bounce delay-1000 z-0 opacity-50 md:opacity-100">🌈</div>
                    <div className="absolute -bottom-6 md:-bottom-8 right-10 md:right-20 text-3xl md:text-5xl animate-bounce delay-500 z-20 opacity-50 md:opacity-100">🦄</div>
                    <div className="absolute top-1/2 -left-6 md:-left-12 text-2xl md:text-4xl animate-pulse z-0 opacity-30 md:opacity-100">✨</div>
                    <div className="absolute top-10 md:top-20 -right-5 md:-right-10 text-2xl md:text-4xl animate-pulse delay-700 z-20 opacity-30 md:opacity-100">🍦</div>

                    <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 border-[4px] md:border-[6px] border-pink-200 shadow-[0_8px_0_#fbcfe8] md:shadow-[0_12px_0_#fbcfe8] relative z-10 transition-all hover:scale-[1.01] hover:border-pink-300 group">
                        <div className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-pink-300 text-pink-900 px-4 md:px-6 py-1 md:py-2 rounded-full font-black -rotate-1 text-[10px] md:text-sm border-2 md:border-4 border-white shadow-sm flex items-center gap-1 md:gap-2 whitespace-nowrap">
                            <Sun size={14} className="md:w-[18px] md:h-[18px] animate-spin-slow" /> Magical Question Box
                        </div>

                        <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="Type something hard here... I'll make it fun! 🎈" minHeight="140px md:180px"
                            className="w-full resize-none outline-none text-xl md:text-2xl text-slate-700 font-bold placeholder:text-pink-200 placeholder:font-bold rounded-xl md:rounded-2xl p-3 md:p-4 bg-pink-50/30 focus:bg-pink-50 transition-colors" />
                    </div>

                    <div className="flex justify-center mt-6 md:mt-8">
                        <button onClick={handleExplain} disabled={isLoading || !inputText}
                            className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white text-lg md:text-xl font-black px-6 md:px-10 py-3 md:py-5 rounded-full shadow-[0_4px_0_#c084fc] md:shadow-[0_6px_0_#c084fc] hover:shadow-[0_4px_0_#c084fc] hover:translate-y-1 active:translate-y-2 transition-all flex items-center gap-2 md:gap-3 animate-pulse border-2 md:border-4 border-white">
                            {isLoading ? (
                                <><Loader2 className="animate-spin" /> Casting Spell...</>
                            ) : (
                                <><Wand2 size={20} className="md:w-6 md:h-6" /> Make it Magic! <ArrowRight size={20} className="md:w-6 md:h-6" /></>
                            )}
                        </button>
                    </div>
                </div>
            );
        }

        // 2. Senior: Lined Paper
        if (type === 'senior') {
            return (
                <div className="max-w-2xl mx-auto px-2">
                    <div className="bg-[#fcfcfc] border border-stone-300 shadow-md p-0.5 md:p-1 transform md:rotate-1 transition-transform hover:rotate-0">
                        <div className="border-b border-stone-200 p-2 flex justify-between bg-stone-50">
                            <span className="font-serif italic text-stone-400 text-[10px] md:text-xs">To the Editor:</span>
                            <span className="font-serif text-stone-400 text-[10px] md:text-xs">{new Date().toLocaleDateString()}</span>
                        </div>
                        <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="Dear Editor, I would like to understand..." minHeight="160px md:180px"
                            className="w-full resize-none outline-none bg-transparent font-serif text-lg md:text-xl text-stone-800 px-4 md:px-6 pt-0 pb-6 leading-[2.5rem] md:leading-[3rem]"
                            style={{ backgroundImage: 'linear-gradient(transparent 97%, #e7e5e4 97%)', backgroundSize: '100% 2.5rem md:3rem' }} />
                    </div>
                    <div className="flex flex-col-reverse md:flex-row justify-end mt-4 gap-2 md:gap-4">
                        {inputText && <button onClick={handleClear} className="font-serif text-stone-400 underline hover:text-stone-600 transition-colors text-sm text-center md:text-left">Scrap this</button>}
                        <button onClick={handleExplain} disabled={isLoading || !inputText}
                            className="bg-stone-800 text-[#FEFEFA] font-serif uppercase tracking-widest px-6 md:px-8 py-3 hover:bg-stone-700 shadow-lg border-2 border-stone-600 flex items-center justify-center gap-2 transition-all hover:-translate-y-1 text-sm md:text-base">
                            {isLoading ? (
                                <><Feather className="animate-bounce" size={16} /> Consulting Archives...</>
                            ) : (
                                <><PenTool size={16} /> Publish Request</>
                            )}
                        </button>
                    </div>
                </div>
            );
        }

        // 3. CEO: Glass Dashboard
        if (type === 'ceo') {
            return (
                <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto mx-2 md:mx-auto">
                    <div className="bg-slate-900 text-slate-300 px-3 md:px-6 py-1.5 md:py-3 flex justify-between items-center border-b border-white/5">
                        <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-xs font-mono uppercase tracking-widest overflow-hidden whitespace-nowrap">
                            <div className={`w-1 md:w-2 h-1 md:h-2 rounded-full ${isLoading ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse flex-shrink-0`}></div>
                            <span className="truncate opacity-80">{isLoading ? 'PROCESSING...' : 'SYSTEM READY'}</span>
                        </div>
                        <div className="flex gap-1 md:gap-2">
                            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500/50"></div>
                        </div>
                    </div>
                    <div className="p-4 md:p-8">
                        <h3 className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2">Input Parameters</h3>
                        <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="Enter strategic topic..." minHeight="120px md:140px"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 md:p-4 font-sans text-base md:text-lg text-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                    </div>
                    <div className="bg-slate-50 px-4 md:px-8 py-3 md:py-4 flex flex-col md:flex-row justify-between items-center border-t border-slate-200 gap-3 md:gap-0">
                        <button onClick={handleClear} className="text-slate-400 text-[10px] md:text-sm font-medium hover:text-slate-600 transition-colors">Reset Parameters</button>
                        <button onClick={handleExplain} disabled={isLoading || !inputText}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 md:px-6 py-2 md:py-2.5 rounded-lg font-medium shadow-lg shadow-indigo-200 flex items-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0 text-xs md:text-base w-full md:w-auto justify-center">
                            {isLoading ? (
                                <><Loader2 className="animate-spin" size={16} /> Crunching Data</>
                            ) : (
                                <>Initialize <Play size={14} fill="currentColor" /></>
                            )}
                        </button>
                    </div>
                </div>
            );
        }

        // 4. Gen Z: Terminal Block
        if (type === 'genz') {
            return (
                <div className="max-w-3xl mx-auto relative group px-2">
                    <div className="absolute inset-0 bg-[#ccff00] translate-x-1 translate-y-1 opacity-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                    <div className="relative bg-black border-2 border-white/10 p-0">
                        <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="yapping starts here..." minHeight="120px md:140px"
                            className="w-full bg-transparent p-4 md:p-6 font-sans font-black text-xl md:text-2xl text-white outline-none placeholder:text-white/20 italic uppercase tracking-tighter" />
                        <div className="p-3 md:p-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center bg-white/5 gap-3 md:gap-0">
                            <button onClick={handleClear} className="text-white/40 hover:text-white text-[10px] md:text-xs font-black uppercase tracking-widest italic md:self-center self-start">clear query</button>
                            <button onClick={handleExplain} disabled={isLoading || !inputText}
                                className="bg-[#ccff00] text-black px-6 md:px-8 py-2 md:py-3 font-[1000] italic uppercase text-lg md:text-xl hover:bg-white transition-colors flex items-center gap-2 w-full md:w-auto justify-center">
                                {isLoading ? <Loader2 className="animate-spin" /> : <>SEND IT <ArrowRight size={18} className="md:w-5 md:h-5" /></>}
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        // 5. Academic: Manuscript
        if (type === 'academic') {
            return (
                <div className="bg-white max-w-4xl mx-auto shadow-sm border border-slate-300 mx-2 md:mx-auto">
                    <div className="bg-slate-100 border-b border-slate-300 px-2 md:px-4 py-1 flex gap-2 md:gap-4 text-[10px] md:text-xs font-serif text-slate-500 overflow-x-auto no-scrollbar">
                        <span className="hover:bg-slate-200 px-2 py-1 cursor-pointer transition-colors whitespace-nowrap">File</span>
                        <span className="hover:bg-slate-200 px-2 py-1 cursor-pointer transition-colors whitespace-nowrap">Edit</span>
                        <span className="hover:bg-slate-200 px-2 py-1 cursor-pointer transition-colors whitespace-nowrap">View</span>
                        <span className="hover:bg-slate-200 px-2 py-1 cursor-pointer transition-colors whitespace-nowrap">Insert</span>
                    </div>
                    <div className="flex">
                        <div className="w-8 md:w-12 bg-slate-50 border-r border-slate-200 text-right pr-1 md:pr-2 py-3 md:py-4 text-slate-300 font-mono text-[10px] md:text-xs select-none">
                            1<br />2<br />3<br />4<br />5
                        </div>
                        <div className="flex-1 p-0">
                            <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="Insert query..." minHeight="160px md:200px"
                                className="w-full p-3 md:p-4 font-serif text-base md:text-lg leading-loose outline-none text-slate-800 placeholder:text-slate-300" />
                        </div>
                    </div>
                    <div className="border-t border-slate-200 p-2 bg-slate-50 flex flex-col md:flex-row justify-end gap-2">
                        <button onClick={handleExplain} disabled={isLoading || !inputText}
                            className="px-4 py-1.5 md:py-1 bg-white border border-slate-300 shadow-sm text-slate-700 font-serif text-xs md:text-sm hover:bg-slate-100 active:translate-y-px transition-all flex items-center justify-center gap-2">
                            {isLoading ? <><Loader2 className="animate-spin" size={12} /> Reviewing...</> : <><FileText size={12} /> Submit Query</>}
                        </button>
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
                            className={`col-start-1 row-start-1 w-full transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 z-10 pointer-events-auto relative transform translate-x-0 blur-0' : 'opacity-0 z-0 pointer-events-none absolute top-0 left-0 transform translate-x-4 blur-sm'}`}
                        >
                            {renderInput(type)}
                        </div>
                    );
                })}
            </div>
        </SmoothWrapper>
    );
};
