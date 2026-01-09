import React from 'react';
import Section from '../Layout/Section';
import { Settings, AlertTriangle, Truck, Cpu, ArrowUpCircle, CheckSquare } from 'lucide-react';
import Quiz from '../Interactive/Quiz';

const Building = () => {
    return (
        <Section id="building" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Costruire il <span className="text-googlebox-red">Robot</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Il cuore della tua squadra è lo <strong>Starter Bot</strong> basato sul kit <em>goBuilda</em>.
                    Ecco cosa devi sapere per assemblare un campione.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Truck className="text-googlebox-blue w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Strafer Chassis & Mecanum Wheels</h3>
                            <p className="text-gray-600">
                                Non usiamo ruote normali! Le <strong>Mecanum Wheels</strong> hanno rullini inclinati a 45°.
                                Questo permette al robot di muoversi in ogni direzione (avanti, indietro e <em>lateralmente</em>) senza girarsi.
                                Perfetto per allinearsi con precisione!
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                            <Cpu className="text-googlebox-yellow w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Control Hub (REV)</h3>
                            <p className="text-gray-600">
                                Il cervello del robot. Qui collegherai motori, servomotori e sensori.
                                Contiene al suo interno anche il modulo Wi-Fi per comunicare con il controller.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <ArrowUpCircle className="text-googlebox-green w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Intake & Launcher</h3>
                            <p className="text-gray-600">
                                L'Intake (raccoglitore) usa ruote com compliant (morbide) per "mangiare" le palline.
                                Il Launcher (lanciatore) le spara verso i bersagli. Ricorda: massimo 3 palline alla volta!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    {/* Placeholder for Robot Image */}
                    <div className="w-full h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center text-gray-400">
                        [Immagine Starter Bot]
                    </div>

                    <div className="bg-red-50 border-l-4 border-googlebox-red p-4 rounded-r-lg mb-6">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="text-googlebox-red w-6 h-6 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-googlebox-red">Manutenzione Critica: Loctite!</h4>
                                <p className="text-sm text-red-800 mt-1">
                                    Le vibrazioni del campo allentano le viti. Usa il <strong>frenafiletti (Loctite blu)</strong> su tutte le viti metallo-su-metallo,
                                    specialmente sui grani (set screws) dei motori o perderai ruote in gara!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold flex items-center gap-2 mb-4">
                            <CheckSquare className="w-5 h-5 text-gray-500" />
                            Checklist Pre-gara
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-googlebox-green"></div> Controlla i grani (set screws) sugli assi
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-googlebox-green"></div> Allinea i cavi (cable management)
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-googlebox-green"></div> Verifica carica batteria (Main & Phone)
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-googlebox-green"></div> Test meccanico Intake
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Quiz
                question="A cosa servono le ruote Mecanum?"
                options={[
                    "Per andare più veloce in discesa",
                    "Per muoversi lateralmente senza ruotare",
                    "Per avere più grip sul fango",
                    "Sono solo decorative"
                ]}
                correctAnswerIndex={1}
                feedback="Esatto! I rullini a 45° permettono vettori di forza che spostano il robot lateralmente."
            />
        </Section>
    );
};

export default Building;
