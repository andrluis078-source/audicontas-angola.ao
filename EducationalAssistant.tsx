import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, HelpCircle, Lightbulb, MessageSquare } from 'lucide-react';

export default function EducationalAssistant() {
  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header>
        <h1 className="text-4xl font-bold text-gray-900">Assistente Educativo</h1>
        <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
          Suporte para estudantes e profissionais (PGC Angolano)
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dica do Dia</h3>
            </div>
            <p className="text-gray-600 leading-relaxed italic">
              "Lembre-se que no PGC Angolano, as amortizações do exercício devem ser registadas na Classe 7 (Custos por Natureza), especificamente na conta 73."
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h3>
            <div className="space-y-4">
              {[
                'Como classificar imobilizações em curso?',
                'Quais as principais alterações do Decreto 82/01?',
                'Como realizar o encerramento de contas?',
              ].map((q, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-50 rounded-2xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <span className="text-sm font-medium text-gray-700">{q}</span>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-red-600 p-8 rounded-3xl shadow-xl shadow-red-200 text-white">
            <MessageSquare className="w-10 h-10 mb-6 opacity-50" />
            <h3 className="text-xl font-bold">Dúvida Técnica?</h3>
            <p className="mt-4 text-red-100 text-sm leading-relaxed">
              Nossa IA especializada em contabilidade angolana está pronta para ajudar.
            </p>
            <button className="mt-8 w-full py-4 bg-white text-red-600 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-red-50 transition-colors">
              Iniciar Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ChevronRight } from 'lucide-react';
