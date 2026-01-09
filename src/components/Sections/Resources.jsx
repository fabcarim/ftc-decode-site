import React from 'react';
import Section from '../Layout/Section';
import { FileText, ExternalLink } from 'lucide-react';

const Resources = () => {
    const resources = [
        { title: "Manuale di Gioco Parte 1", subtitle: "Regole Generali", link: "#" },
        { title: "Manuale di Gioco Parte 2", subtitle: "Sfida DECODE", link: "#" },
        { title: "Guida goBuilda Kit", subtitle: "Istruzioni di Montaggio", link: "#" },
        { title: "Guida alla Programmazione", subtitle: "Blocchi e Java", link: "#" },
    ];

    return (
        <Section id="resources" className="bg-gray-50 pb-32">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Risorse Utili
                </h2>
                <p className="text-gray-600">
                    Tutto quello che serve per approfondire.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((res, idx) => (
                    <a
                        key={idx}
                        href={res.link}
                        className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-googlebox-blue hover:shadow-lg transition flex flex-col items-center text-center"
                    >
                        <div className="bg-gray-100 group-hover:bg-blue-50 p-4 rounded-full mb-4 transition">
                            <FileText className="w-8 h-8 text-gray-500 group-hover:text-googlebox-blue transition" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">{res.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">{res.subtitle}</p>
                        <div className="mt-auto flex items-center text-googlebox-blue text-sm font-semibold">
                            Scarica PDF <ExternalLink className="w-4 h-4 ml-1" />
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
};

export default Resources;
