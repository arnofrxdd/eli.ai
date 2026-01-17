import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { AiService } from './services/AiService';
import { AUDIENCES, THEMES } from './constants/personaData';
import { Balloons } from './components/Balloons';
import { PersonaNav } from './components/PersonaNav';
import { PersonaInput } from './components/PersonaInput';
import {
  PlayfulRenderer,
  NewspaperRenderer,
  ExecutiveRenderer,
  NeoBrutalistRenderer,
  AcademicRenderer
} from './components/Renderers';
import type { AudienceId, ResultState } from './types';

export default function ExplainApp() {
  const [inputText, setInputText] = useState('');
  const [audience, setAudience] = useState<AudienceId>('5yo');

  const [results, setResults] = useState<Record<AudienceId, ResultState>>({
    '5yo': { text: null, loading: false, error: null },
    'senior': { text: null, loading: false, error: null },
    'ceo': { text: null, loading: false, error: null },
    'genz': { text: null, loading: false, error: null },
    'academic': { text: null, loading: false, error: null }
  });

  const requestIdRef = useRef(0);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentResult = results[audience];
    if (currentResult.text && !currentResult.loading) {
      const timer = setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [results, audience]);

  const currentTheme = THEMES[audience];

  const handleExplain = async () => {
    if (!inputText.trim()) return;

    const currentRequestId = ++requestIdRef.current;

    setResults(prev => {
      const next = { ...prev };
      (Object.keys(next) as AudienceId[]).forEach((key) => {
        next[key] = { ...next[key], loading: true, error: null };
      });
      return next;
    });

    const audienceIds: AudienceId[] = ['5yo', 'senior', 'ceo', 'genz', 'academic'];

    audienceIds.forEach(async (aud) => {
      try {
        const text = await AiService.generateExplanation(inputText, aud);

        if (requestIdRef.current !== currentRequestId) return;

        if (text) {
          console.log(`[AI Success] Generation complete for persona "${aud}".`);
          setResults(prev => ({ ...prev, [aud]: { text: text, loading: false, error: null } }));
        }
      } catch (err: unknown) {
        if (requestIdRef.current !== currentRequestId) return;

        const errorMessage = err instanceof Error ? err.message : 'Generation failed.';
        console.error(`[ExplainApp] Generation failed for persona "${aud}":`, err);
        setResults(prev => ({ ...prev, [aud]: { text: null, loading: false, error: errorMessage } }));
      }
    });
  };

  const handleClear = () => {
    requestIdRef.current++;
    setInputText('');
    setResults(() => {
      const reset: Record<AudienceId, ResultState> = {
        '5yo': { text: null, loading: false, error: null },
        'senior': { text: null, loading: false, error: null },
        'ceo': { text: null, loading: false, error: null },
        'genz': { text: null, loading: false, error: null },
        'academic': { text: null, loading: false, error: null }
      };
      return reset;
    });
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden flex flex-col items-center p-4 md:p-8 transition-all duration-700`} style={{ fontFamily: currentTheme.font }}>

      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 z-0">
        {(Object.keys(THEMES) as AudienceId[]).map((key) => (
          <div
            key={key}
            className={`absolute inset-0 transition-opacity duration-1000 ${audience === key ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className={`absolute inset-0 transition-colors duration-1000 ${THEMES[key].bgClass}`}
              style={{
                backgroundImage: THEMES[key].bgPattern,
                backgroundSize: THEMES[key].bgSize,
              }}
            >
              {/* Persona Specific Decorators */}
              <div className={`absolute inset-0 transition-opacity duration-1000 ${audience === key ? 'opacity-100' : 'opacity-0'}`}>
                {THEMES[key].decor}
              </div>
            </div>
          </div>
        ))}
      </div>

      {audience === '5yo' && <Balloons />}

      <div className="w-full max-w-4xl mx-auto z-20">

        {/* HEADER */}
        <div className="text-center mb-2 mt-2 relative">
          <div className="flex justify-center mb-1 transition-transform duration-500 hover:scale-110 cursor-default opacity-50">{currentTheme.icon}</div>

          <div className="relative min-h-[4rem] mb-0 flex justify-center items-center">
            {AUDIENCES.map((aud) => (
              <div
                key={aud.id}
                className={`absolute w-full transition-all duration-700 transform flex justify-center items-center ${audience === aud.id
                  ? 'opacity-100 translate-y-0 scale-100 blur-0'
                  : 'opacity-0 translate-y-2 scale-95 blur-md pointer-events-none'
                  }`}
              >
                <h1 className={`text-3xl md:text-5xl leading-tight py-1 ${THEMES[aud.id].title}`}>
                  {aud.id === '5yo' ? 'Explain Like I\'m 5!' :
                    aud.id === 'senior' ? 'The Daily Explainer' :
                      aud.id === 'ceo' ? 'Strategic Briefing' :
                        aud.id === 'genz' ? 'THE VIBE CHECK' :
                          'The Knowledge Review'}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* --- DYNAMIC INTERFACE AREA --- */}
        <div className="mb-2">
          <PersonaNav
            audience={audience}
            setAudience={setAudience}
            audiences={AUDIENCES}
          />
        </div>

        {/* --- INPUT AREA --- */}
        <div
          className={`transition-all duration-1000 transition-spring transform ${results[audience].text && !results[audience].loading
            ? 'opacity-0 -translate-y-32 scale-75 rotate-3 pointer-events-none absolute w-full'
            : 'opacity-100 translate-y-0 scale-100 rotate-0 translate-z-0'
            }`}
        >
          <PersonaInput
            audience={audience}
            inputText={inputText}
            setInputText={setInputText}
            handleExplain={handleExplain}
            handleClear={handleClear}
            results={results}
          />
        </div>

        {/* RESULTS AREA */}
        <div
          ref={resultsRef}
          className={`transition-all duration-1000 transition-spring transform ${results[audience].text && !results[audience].loading
            ? 'translate-y-0 opacity-100 scale-100 mt-12'
            : 'translate-y-64 opacity-0 scale-90 blur-xl pointer-events-none absolute w-full'
            }`}
        >
          {results[audience].text && !results[audience].loading && (
            <div className={`p-6 md:p-12 rounded-[2.5rem] shadow-2xl transition-all duration-700 ${currentTheme.resultsBg}`}>
              {/* Action Row when Result is Present */}
              <div className="flex justify-between items-center mb-6 border-b border-black/5 pb-4">
                <button
                  onClick={handleClear}
                  className={`group relative z-50 flex items-center gap-2 font-black uppercase text-[10px] px-4 py-2 rounded-full transition-all tracking-widest ${audience === '5yo' ? 'bg-pink-400 text-white shadow-[0_4px_0_#be185d]' :
                    audience === 'senior' ? 'bg-stone-800 text-[#FEFEFA]' :
                      audience === 'ceo' ? 'bg-indigo-600 text-white' :
                        audience === 'genz' ? 'bg-[#ccff00] text-black border-2 border-black shadow-[4px_4px_0_black]' :
                          'bg-slate-900 text-white'
                    } hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden`}
                >
                  <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" size={12} />
                  <span className="relative z-10">New Insight</span>
                </button>

              </div>

              {/* RENDERERS */}
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                {audience === '5yo' && <PlayfulRenderer content={results[audience].text!} />}
                {audience === 'senior' && <NewspaperRenderer content={results[audience].text!} />}
                {audience === 'ceo' && <ExecutiveRenderer content={results[audience].text!} />}
                {audience === 'genz' && <NeoBrutalistRenderer content={results[audience].text!} />}
                {audience === 'academic' && <AcademicRenderer content={results[audience].text!} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}