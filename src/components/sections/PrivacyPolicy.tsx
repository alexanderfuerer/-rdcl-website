import React from 'react';

export const PrivacyPolicy: React.FC = () => (
    <section className="py-32 bg-white text-black min-h-screen">
        <div className="mx-auto max-w-[800px] px-6">
            <h1 className="font-serif text-5xl mb-12">Datenschutz</h1>

            <div className="space-y-12 text-lg text-[#6b6965] font-light leading-relaxed">
                <div>
                    <h2 className="text-2xl font-serif text-black mb-4">Wie wir Ihre Daten erfassen und bearbeiten</h2>
                </div>

                <div>
                    <h3 className="text-xl text-black font-medium mb-3">1. Erhebung, Verarbeitung und Nutzung personenbezogener Daten</h3>
                    <p>Bei einem Besuch dieser Website erheben wir keine personenbezogenen Daten von Ihnen. Personenbezogene Daten werden nur erhoben, wenn Sie uns diese selbst über unser Kontaktformular mitteilen. Diese Daten werden ausschliesslich zur Beantwortung Ihres Anliegens genutzt.</p>
                </div>

                <div>
                    <h3 className="text-xl text-black font-medium mb-3">2. Verwendung von eigenen Cookies</h3>
                    <p>Beim Aufruf bestimmter Seiten wird ein so genanntes «Session-Cookie» gesetzt. Hierbei handelt es sich um eine kleine Textdatei, die nach Ende der Browser-Sitzung automatisch wieder von Ihrem Computer gelöscht wird. Diese Datei dient ausschliesslich dazu, bestimmte Applikationen nutzen zu können. Sie können bei den meisten Webbrowsern die Einstellungen so ändern, dass Ihr Browser neue Cookies nicht akzeptiert oder Sie können erhaltenen Cookies löschen lassen. Wie dies konkret für Ihren Browser funktioniert, kann in der Regel über dessen Hilfe-Funktion in Erfahrung gebracht werden.</p>
                </div>

                <div>
                    <h3 className="text-xl text-black font-medium mb-3">3. Server-Log-Dateien</h3>
                    <p>Wie bei jeder Verbindung mit einem Webserver protokolliert und speichern unsere Server, bestimmte technische Daten. Zu diesen Daten gehören die IP-Adresse und das Betriebssystem Ihres Geräts, die Daten, die Zugriffszeit, die Art des Browsers sowie die Browser-Anfrage inklusive der Herkunft der Anfrage (Referrer). Dies ist aus technischen Gründen erforderlich, um Ihnen unsere Website zur Verfügung zu stellen. Wir schützten diese Daten mit technischen und organisatorischen Massnahmen vor unerlaubten Zugriffen und geben Sie nicht an Dritte weiter. Soweit wir dabei personenbezogene Daten verarbeiten, tun wir dies aufgrund unseres Interesses, Ihnen die bestmögliche Nutzererfahrung zu bieten und die Sicherheit und Stabilität unserer Systeme zu gewährleisten.</p>
                </div>

                <div>
                    <h3 className="text-xl text-black font-medium mb-3">4. Email / Formulare</h3>
                    <p>Daten, die von Ihnen über E-Mail oder ein Kontaktformular übermittelt werden, müssen nach schweizerischem Obligationenrecht (Art. 957 bis 963) für 10 Jahre archiviert werden.</p>
                </div>

                <div>
                    <h3 className="text-xl text-black font-medium mb-3">5. Ihre Rechte</h3>
                    <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstösst oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.</p>
                </div>

                <div>
                    <p>Sie erreichen uns unter folgender Email-Adresse: <a href="mailto:alex@rdcl.ai" className="text-secondary-blue hover:underline">alex@rdcl.ai</a></p>
                </div>
            </div>
        </div>
    </section>
);
