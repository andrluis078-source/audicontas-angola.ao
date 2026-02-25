import React from 'react';
import { motion } from 'motion/react';
import { FilePlus, Lock, Crown, Check, ArrowRight, FileText } from 'lucide-react';

interface InvoicingProps {
  userPlan: string;
}

export default function Invoicing({ userPlan }: InvoicingProps) {
  const isPremium = true; // Now available for everyone in Essencial

  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header>
        <h1 className="text-4xl font-bold text-gray-900">Facturação</h1>
        <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
          Emissão de facturas certificadas pela AGT
        </p>
      </header>

      {!isPremium ? (
        <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Crown className="w-64 h-64 text-red-600" />
          </div>
          
          <div className="p-12 md:p-20 text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Crown className="w-4 h-4" />
              Plano Enterprise
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Emita facturas diretamente pelo AuditContas
            </h2>
            <p className="text-gray-500 mt-6 text-lg">
              Esta funcionalidade está disponível exclusivamente no nosso plano mais completo. 
              Automatize seu fluxo de caixa e mantenha-se em conformidade com a AGT.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
              {[
                'Facturas Certificadas (AGT)',
                'Envio automático por e-mail',
                'Gestão de Clientes e Stocks',
                'Relatórios de Vendas em tempo real',
                'Integração direta com o Diário',
                'Suporte prioritário 24/7'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-red-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-16 w-full md:w-auto px-12 py-5 bg-red-600 text-white rounded-2xl font-bold text-lg uppercase tracking-widest shadow-2xl shadow-red-200 hover:bg-red-700 transition-all flex items-center justify-center gap-3 group">
              Upgrade para Enterprise
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-3xl border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Últimas Facturas</h3>
            <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-red-200 hover:bg-red-700 transition-all">
              <FilePlus className="w-4 h-4" />
              Emitir Factura
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center h-64 text-center border-2 border-dashed border-gray-100 rounded-3xl">
            <FileText className="w-12 h-12 text-gray-200 mb-4" />
            <p className="text-gray-400">Nenhuma factura emitida este mês.</p>
          </div>
        </div>
      )}
    </div>
  );
}
