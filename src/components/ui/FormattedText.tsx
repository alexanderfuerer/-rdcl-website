import React, { useMemo } from 'react';

interface FormattedTextProps {
    text: string;
    className?: string;
}

// Regex patterns compiled once outside component
const LINK_PATTERN = /(\[.*?\]\(.*?\))/g;
const LINK_TEXT_PATTERN = /\[(.*?)\]\(.*?\)/;
const LINK_URL_PATTERN = /\((.*?)\)/;

export const FormattedText: React.FC<FormattedTextProps> = ({ text, className }) => {
    // Memoize the parsed content to avoid re-parsing on every render
    const parsedContent = useMemo(() => {
        if (!text) return null;

        const parts = text.split(LINK_PATTERN);

        return parts.map((part, i) => {
            const match = part.match(LINK_TEXT_PATTERN);
            if (match) {
                const urlMatch = part.match(LINK_URL_PATTERN);
                const url = urlMatch ? urlMatch[1] : "#";
                return (
                    <a
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-blue hover:text-secondary-orange underline decoration-secondary-blue/30 transition-all font-semibold"
                    >
                        {match[1]}
                    </a>
                );
            }
            return part;
        });
    }, [text]);

    if (!parsedContent) return null;

    return <span className={className}>{parsedContent}</span>;
};
