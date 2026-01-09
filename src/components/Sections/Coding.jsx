import React from 'react';
import Section from '../Layout/Section';
import { Code, Eye, Clock, Gamepad2 } from 'lucide-react';
import Quiz from '../Interactive/Quiz';

const Coding = () => {
    return (
        <Section id="coding" className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Dare Vita al <span className="text-googlebox-blue">Robot</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Il robot è un ammasso di metallo finché non gli dici cosa fare.
                    Non serve essere hacker: usiamo i <strong>Blocchi</strong>!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <Code className="text-googlebox-blue w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">Programmazione a Blocchi</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Simile a Scratch, trascini i comandi logici per creare il comportamento del robot.
                        È visivo, intuitivo e perfetto per iniziare.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-700">
                        IF (Gamepad.A_Button == Pressed) <br />
                        &nbsp;&nbsp;THEN Motor.Power = 1.0; <br />
                        ELSE <br />
                        &nbsp;&nbsp;THEN Motor.Power = 0;
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-red-100 p-3 rounded-lg">
                            <Eye className="text-googlebox-red w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold">VisionPortal & AprilTags</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Il robot ha degli "occhi" (webcam). Gli <strong>AprilTags</strong> sono come QR Code speciali posizionati sul campo.
                        Il robot li legge per capire esattamente dove si trova (localizzazione) e prendere decisioni autonome.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="p-8 text-center">
                        <Clock className="w-10 h-10 text-googlebox-yellow mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Autonomous Period</h3>
                        <span className="inline-block bg-gray-100 text-gray-600 text-sm font-bold px-2 py-1 rounded mb-4">Primi 30 secondi</span>
                        <p className="text-gray-600 text-sm">
                            Il robot si muove <strong>da solo</strong> usando il codice pre-scritto e i sensori.
                            Nessun controllo umano permesso!
                        </p>
                    </div>
                    <div className="p-8 text-center">
                        <Gamepad2 className="w-10 h-10 text-googlebox-green mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">TeleOp Period</h3>
                        <span className="inline-block bg-gray-100 text-gray-600 text-sm font-bold px-2 py-1 rounded mb-4">Ultimi 2 minuti</span>
                        <p className="text-gray-600 text-sm">
                            I <strong>Driver</strong> prendono il controllo usando i gamepad.
                            È il momento di raccogliere, lanciare e fare punti!
                        </p>
                    </div>
                </div>
            </div>

            <Quiz
                question="Cosa sono gli AprilTags?"
                options={[
                    "I tag con il nome del team",
                    "Codici visivi per la localizzazione del robot",
                    "Etichette per i cavi",
                    "Un mese dell'anno"
                ]}
                correctAnswerIndex={1}
                feedback="Bravissimo! Il robot usa la visione artificiale per calcolare la sua posizione guardando questi tag."
            />
        </Section>
    );
};

export default Coding;
