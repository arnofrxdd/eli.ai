import React, { useState, useRef, useLayoutEffect } from 'react';

interface SmoothWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export const SmoothWrapper = ({ children, className }: SmoothWrapperProps) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | 'auto'>('auto');

    useLayoutEffect(() => {
        if (!contentRef.current) return;
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setHeight(entry.contentRect.height);
            }
        });
        resizeObserver.observe(contentRef.current);
        return () => resizeObserver.disconnect();
    }, [children]);

    return (
        <div
            className={`transition-[height] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${className}`}
            style={{ height: height === 'auto' ? 'auto' : `${height}px` }}
        >
            <div ref={contentRef} className="h-full">{children}</div>
        </div>
    );
};
