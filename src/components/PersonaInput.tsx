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
                    <div className="absolute -top-12 left-10 text-6xl animate-bounce delay-1000 z-0">🌈</div>
                    <div className="absolute -bottom-8 right-20 text-5xl animate-bounce delay-500 z-20">🦄</div>
                    <div className="absolute top-1/2 -left-12 text-4xl animate-pulse z-0">✨</div>
                    <div className="absolute top-20 -right-10 text-4xl animate-pulse delay-700 z-20">🍦</div>

                    <div className="bg-white rounded-[3rem] p-8 border-[6px] border-pink-200 shadow-[0_12px_0_#fbcfe8] relative z-10 transition-all hover:scale-[1.01] hover:border-pink-300 group">
                        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-pink-300 text-pink-900 px-6 py-2 rounded-full font-black -rotate-1 text-sm border-4 border-white shadow-sm flex items-center gap-2">
                            <Sun size={18} className="animate-spin-slow" /> Magical Question Box
                        </div>

                        <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="Type something hard here... I'll make it fun! 🎈" minHeight="180px"
                            className="w-full resize-none outline-none text-2xl text-slate-700 font-bold placeholder:text-pink-200 placeholder:font-bold rounded-2xl p-4 bg-pink-50/30 focus:bg-pink-50 transition-colors" />
                    </div>

                    <div className="flex justify-center mt-8">
                        <button onClick={handleExplain} disabled={isLoading || !inputText}
                            className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white text-xl font-black px-10 py-5 rounded-full shadow-[0_6px_0_#c084fc] hover:shadow-[0_4px_0_#c084fc] hover:translate-y-1 active:translate-y-2 transition-all flex items-center gap-3 animate-pulse border-4 border-white">
                            {isLoading ? (
                                <><Loader2 className="animate-spin" /> Casting Spell...</>
                            ) : (
                                <><Wand2 size={24} /> Make it Magic! <ArrowRight size={24} /></>
                            )}
                        </button>
                    </div>
                </div>
            );
        }

        // 2. Senior: Lined Paper
        if (type === 'senior') {
            return (
                <div className="max-w-2xl mx-auto">
                    <div className="bg-[#fcfcfc] border border-stone-300 shadow-md p-1 transform rotate-1 transition-transform hover:rotate-0">
                        <div className="border-b border-stone-200 p-2 flex justify-between bg-stone-50">
                            <span className="font-serif italic text-stone-400 text-xs">To the Editor:</span>
                            <span className="font-serif text-stone-400 text-xs">{new Date().toLocaleDateString()}</span>
                        </div>
                        <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="Dear Editor, I would like to understand..." minHeight="180px"
                            className="w-full resize-none outline-none bg-transparent font-serif text-xl text-stone-800 px-6 pt-0 pb-6 leading-[3rem]"
                            style={{ backgroundImage: 'linear-gradient(transparent 97%, #e7e5e4 97%)', backgroundSize: '100% 3rem' }} />
                    </div>
                    <div className="flex justify-end mt-4 gap-4">
                        {inputText && <button onClick={handleClear} className="font-serif text-stone-400 underline hover:text-stone-600 transition-colors">Scrap this</button>}
                        <button onClick={handleExplain} disabled={isLoading || !inputText}
                            className="bg-stone-800 text-[#FEFEFA] font-serif uppercase tracking-widest px-8 py-3 hover:bg-stone-700 shadow-lg border-2 border-stone-600 flex items-center gap-2 transition-all hover:-translate-y-1">
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
                <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
                    <div className="bg-slate-900 text-slate-300 px-6 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest">
                            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-500' : 'bg-green-500'} animate-pulse`}></div>
                            {isLoading ? 'PROCESSING...' : 'SYSTEM READY'}
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Input Parameters</h3>
                        <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="Enter strategic topic..." minHeight="140px"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 font-sans text-lg text-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                    </div>
                    <div className="bg-slate-50 px-8 py-4 flex justify-between items-center border-t border-slate-200">
                        <button onClick={handleClear} className="text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors">Reset Parameters</button>
                        <button onClick={handleExplain} disabled={isLoading || !inputText}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-indigo-200 flex items-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0">
                            {isLoading ? (
                                <><Loader2 className="animate-spin" size={18} /> Crunching Data</>
                            ) : (
                                <>Initialize <Play size={16} fill="currentColor" /></>
                            )}
                        </button>
                    </div>
                </div>
            );
        }

        // 4. Gen Z: Terminal Block
        if (type === 'genz') {
            return (
                <div className="max-w-3xl mx-auto relative group">
                    <div className="absolute inset-0 bg-[#ccff00] translate-x-1 translate-y-1 opacity-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                    <div className="relative bg-black border-2 border-white/10 p-0">
                        <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="yapping starts here..." minHeight="140px"
                            className="w-full bg-transparent p-6 font-sans font-black text-2xl text-white outline-none placeholder:text-white/20 italic uppercase tracking-tighter" />
                        <div className="p-4 border-t border-white/10 flex justify-between items-center bg-white/5">
                            <button onClick={handleClear} className="text-white/40 hover:text-white text-xs font-black uppercase tracking-widest italic">clear</button>
                            <button onClick={handleExplain} disabled={isLoading || !inputText}
                                className="bg-[#ccff00] text-black px-8 py-3 font-[1000] italic uppercase text-xl hover:bg-white transition-colors flex items-center gap-2">
                                {isLoading ? <Loader2 className="animate-spin" /> : <>SEND IT <ArrowRight size={20} /></>}
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        // 5. Academic: Manuscript
        if (type === 'academic') {
            return (
                <div className="bg-white max-w-4xl mx-auto shadow-sm border border-slate-300">
                    <div className="bg-slate-100 border-b border-slate-300 px-4 py-1 flex gap-4 text-xs font-serif text-slate-500">
                        <span className="hover:bg-slate-200 px-2 py-1 cursor-pointer transition-colors">File</span>
                        <span className="hover:bg-slate-200 px-2 py-1 cursor-pointer transition-colors">Edit</span>
                        <span className="hover:bg-slate-200 px-2 py-1 cursor-pointer transition-colors">View</span>
                        <span className="hover:bg-slate-200 px-2 py-1 cursor-pointer transition-colors">Insert</span>
                    </div>
                    <div className="flex">
                        <div className="w-12 bg-slate-50 border-r border-slate-200 text-right pr-2 py-4 text-slate-300 font-mono text-xs select-none">
                            1<br />2<br />3<br />4<br />5
                        </div>
                        <div className="flex-1 p-0">
                            <AutoTextarea value={inputText} onChange={(e: any) => setInputText(e.target.value)} placeholder="Insert query..." minHeight="200px"
                                className="w-full p-4 font-serif text-lg leading-loose outline-none text-slate-800 placeholder:text-slate-300" />
                        </div>
                    </div>
                    <div className="border-t border-slate-200 p-2 bg-slate-50 flex justify-end">
                        <button onClick={handleExplain} disabled={isLoading || !inputText}
                            className="px-4 py-1 bg-white border border-slate-300 shadow-sm text-slate-700 font-serif text-sm hover:bg-slate-100 active:translate-y-px transition-all flex items-center gap-2">
                            {isLoading ? <><Loader2 className="animate-spin" size={12} /> Peer Reviewing...</> : <><FileText size={12} /> Submit for Review</>}
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
