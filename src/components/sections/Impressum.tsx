import React from 'react';

export const Impressum: React.FC = () => (
    <section className="py-32 bg-white text-black min-h-screen">
        <div className="mx-auto max-w-[800px] px-6">
            <h1 className="font-serif text-5xl mb-12">Impressum</h1>

            <div className="space-y-8 text-lg text-[#6b6965] font-light leading-relaxed">
                <div>
                    <h3 className="text-black font-semibold mb-2">Kontaktadresse</h3>
                    <p>RDCL AG</p>
                    <p>Rolandstrasse 33</p>
                    <p>8005 Zürich</p>
                </div>
            </div>
        </div>
    </section>
);
