import { useRef, useEffect } from 'react';

interface AutoTextareaProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    minHeight?: string;
}

export const AutoTextarea = ({ value, onChange, placeholder, className, style = {}, minHeight = "120px" }: AutoTextareaProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = minHeight;
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = `${Math.max(parseInt(minHeight), scrollHeight)}px`;
        }
    }, [value, minHeight]);

    return (
        <textarea
            ref={textareaRef}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            style={{ ...style, overflow: 'hidden' }}
        />
    );
};
