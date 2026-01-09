import React from 'react';
import Section from '../Layout/Section';
import { Target, BookOpen, Users, AlertCircle, Download } from 'lucide-react';

const Strategy = () => {
    return (
        <Section id="strategy" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Strategia & <span className="text-googlebox-yellow">Trucchi</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Non basta un buon robot per vincere la sfida DECODE.
                    Serve intelligenza, costanza e... documentazione!
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <Target className="w-10 h-10 text-googlebox-blue mb-4" />
                    <h3 className="text-xl font-bold mb-2">Precisione {'>'} Velocità</h3>
                    <p className="text-gray-700">
                        Un robot lento che segna sempre è meglio di uno veloce che sbatte ovunque.
                        Prendetevi il tempo per allinearvi prima di lanciare.
                    </p>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <AlertCircle className="w-10 h-10 text-googlebox-red mb-4" />
                    <h3 className="text-xl font-bold mb-2">Regola del Lancio</h3>
                    <p className="text-gray-700">
                        Potete caricare massimo <strong>3 palline</strong> alla volta.
                        Coordinatevi con l'alleato: non lanciate tutti insieme o vi ostacolerete!
                    </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                    <BookOpen className="w-10 h-10 text-googlebox-yellow mb-4" />
                    <h3 className="text-xl font-bold mb-2">Engineering Notebook</h3>
                    <p className="text-gray-700">
                        <strong>Segreto:</strong> I premi più importanti si vincono con il diario di bordo.
                        Scrivete TUTTO: disegni, errori, test falliti e successi.
                    </p>
                </div>
            </div>

            <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Il Vostro Diario di Bordo</h3>
                        <p className="text-gray-300 mb-6 text-lg">
                            Abbiamo preparato un template per voi. Scaricatelo e compilatelo alla fine di ogni lezione.
                            Ricordate: se non è scritto, non è successo!
                        </p>
                        <button className="flex items-center gap-2 bg-googlebox-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all">
                            <Download className="w-5 h-5" />
                            Scarica Template Diario
                        </button>
                    </div>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                        <h4 className="font-bold mb-4 text-xl">Ruoli del Team</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <div className="bg-googlebox-blue p-2 rounded-lg"><Users className="w-4 h-4" /></div>
                                <div><strong>Meccanici:</strong> Costruiscono e mantengono il robot.</div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-googlebox-red p-2 rounded-lg"><Users className="w-4 h-4" /></div>
                                <div><strong>Programmatori:</strong> Gestiscono il codice su laptop.</div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-googlebox-yellow p-2 rounded-lg"><Users className="w-4 h-4" /></div>
                                <div><strong>Driver:</strong> Guidano il robot in gara.</div>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="bg-googlebox-green p-2 rounded-lg"><Users className="w-4 h-4" /></div>
                                <div><strong>Documentatori:</strong> Curano il sito e il diario.</div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-googlebox-blue/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-googlebox-purple/20 rounded-full blur-3xl"></div>
            </div>
        </Section>
    );
};

export default Strategy;
