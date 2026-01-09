import React from 'react';
import Section from '../Layout/Section';
import { ScanSearch, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <Section id="home" className="bg-gradient-to-b from-blue-50/50 to-white pt-32 pb-20">
            <div className="text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-googlebox-blue/10 text-googlebox-blue text-sm font-semibold tracking-wide mb-4">
                        Stagione 2025-2026
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Sfida <span className="text-googlebox-blue">DECODE</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Benvenuti esploratori! Quest'anno il vostro robot dovrà diventare un <strong>archeologo digitale</strong>.
                        La missione? "Decifrare" il campo di gara per recuperare antichi reperti (palline)
                        e portarli al sicuro.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#building" className="px-8 py-3 bg-googlebox-blue text-white font-semibold rounded-full hover:bg-blue-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Inizia a Costruire
                        </a>
                        <a href="#coding" className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition">
                            Guida al Coding
                        </a>
                    </div>
                </motion.div>

                {/* Values Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-20 grid md:grid-cols-3 gap-8 text-left"
                >
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition card-hover">
                        <div className="w-12 h-12 bg-googlebox-red/10 rounded-xl flex items-center justify-center mb-4">
                            <ScanSearch className="text-googlebox-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Esplora</h3>
                        <p className="text-gray-600">Analizza il campo usando sensori e telecamere per trovare la strada migliore.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition card-hover">
                        <div className="w-12 h-12 bg-googlebox-yellow/10 rounded-xl flex items-center justify-center mb-4">
                            <Cpu className="text-googlebox-yellow" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Costruisci</h3>
                        <p className="text-gray-600">Progetta un robot solido con il kit goBuilda capace di raccogliere e lanciare.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition card-hover">
                        <div className="w-12 h-12 bg-googlebox-green/10 rounded-xl flex items-center justify-center mb-4">
                            <Globe className="text-googlebox-green" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Gracious Professionalism</h3>
                        <p className="text-gray-600">Competi con grinta, ma rispetta sempre gli altri team. Aiutare è vincere.</p>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
