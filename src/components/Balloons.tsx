export const Balloons = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute bottom-[-100px] animate-[float_15s_linear_infinite]"
                style={{ left: `${(i * 15) % 90 + 5}%`, animationDelay: `${i * 1.2}s`, opacity: 0.6 }}>
                <div className="w-12 h-16 md:w-16 md:h-20 rounded-[50%] relative shadow-sm" style={{ backgroundColor: ['#FDA4AF', '#FCD34D', '#67E8F9', '#C4B5FD', '#A7F3D0', '#FFCFD2'][i % 6] }}>
                    <div className="absolute bottom-[-10px] left-[calc(50%-1px)] w-[2px] h-[30px] bg-slate-400"></div>
                    <div className="absolute top-3 right-4 w-3 h-6 rounded-[50%] bg-white/40 rotate-12"></div>
                </div>
            </div>
        ))}
        <style>{`@keyframes float { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 5% { opacity: 0.8; } 100% { transform: translateY(-130vh) rotate(25deg); opacity: 0; } }`}</style>
    </div>
);
