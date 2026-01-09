import React, { useState } from 'react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Quiz = ({ question, options, correctAnswerIndex, feedback }) => {
    const [selected, setSelected] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleSelect = (index) => {
        if (isAnswered) return;
        setSelected(index);
        setIsAnswered(true);
    };

    const isCorrect = selected === correctAnswerIndex;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto my-8">
            <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="text-googlebox-blue w-6 h-6" />
                <h3 className="text-lg font-bold text-gray-900">Quiz Rapido</h3>
            </div>

            <p className="text-gray-700 mb-6 font-medium">{question}</p>

            <div className="space-y-3">
                {options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(index)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ${isAnswered
                                ? index === correctAnswerIndex
                                    ? 'border-googlebox-green bg-green-50 text-green-900'
                                    : index === selected
                                        ? 'border-googlebox-red bg-red-50 text-red-900'
                                        : 'border-gray-100 text-gray-400'
                                : 'border-gray-100 hover:border-googlebox-blue hover:bg-blue-50 text-gray-700'
                            }`}
                    >
                        <span>{option}</span>
                        {isAnswered && index === correctAnswerIndex && <CheckCircle className="text-googlebox-green w-5 h-5" />}
                        {isAnswered && index === selected && index !== correctAnswerIndex && <XCircle className="text-googlebox-red w-5 h-5" />}
                    </button>
                ))}
            </div>

            {isAnswered && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={`mt-4 p-4 rounded-xl text-sm ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                >
                    <strong>{isCorrect ? 'Ottimo!' : 'Riprova prossima volta!'}</strong> {feedback}
                </motion.div>
            )}
        </div>
    );
};

export default Quiz;
