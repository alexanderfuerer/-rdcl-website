import React from 'react';
import { FormattedText } from '../ui/FormattedText';

interface ServiceCardProps {
    title: string;
    imageUrl?: string;
    icon?: string;
    resultLabel: string;
    resultValue: string;
    colorClass: string; // e.g., 'text-secondary-blue'
    bgClass?: string; // Optional custom background class
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl, icon, resultLabel, resultValue, colorClass, bgClass }) => {
    return (
        <div className={`aspect-[4/5] ${bgClass || 'bg-[#f5f1ed]'} rounded-[2.5rem] relative flex flex-col items-center justify-start pt-20 p-8 transition-transform duration-500 group-hover/service:scale-[1.02] shadow-sm gap-8`}>
            <div className={`bg-white rounded-[2rem] shadow-sm border border-black/5 w-28 h-28 flex items-center justify-center shrink-0 ${imageUrl ? 'p-4 overflow-hidden' : 'p-5'}`}>
                {imageUrl ? (
                    <img src={imageUrl} className="w-full h-full object-contain" alt={title} />
                ) : (
                    <span className={`material-symbols-outlined text-6xl ${colorClass}`}>{icon || 'engineering'}</span>
                )}
            </div>
            <h3 className="font-serif text-4xl text-black text-center leading-tight max-w-[200px]">{title}</h3>
            <div className="bg-white px-8 py-6 rounded-[1.2rem] shadow-[0_15px_30px_rgba(0,0,0,0.12)] flex flex-col items-center border border-black/[0.03] absolute bottom-12 w-[calc(100%-4rem)]">
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#6b6965] uppercase mb-1 font-sans">{resultLabel}</span>
                <p className="font-serif italic text-[1.4rem] text-black text-center">
                    <FormattedText text={resultValue} />
                </p>
            </div>
        </div>
    );
};
