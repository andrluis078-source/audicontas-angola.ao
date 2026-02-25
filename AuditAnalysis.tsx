import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Info,
  Search,
  Filter,
  Crown,
  ArrowRight,
  Check
} from 'lucide-react';

interface AuditAnalysisProps {
  userPlan: string;
}

const errors = [
  { 
    id: 1, 
    type: 'critical', 
    title: 'Desequilíbrio Patrimonial', 
    desc: 'O Total do Ativo (Kz 1.200.000) não coincide com o Total do Passivo + CP (Kz 1.150.000).',
    suggestion: 'Verifique os lançamentos na Classe 5 (Capital e Reservas).'
  },
  { 
    id: 2, 
    type: 'warning', 
    title: 'Conta de Caixa com Saldo Credor', 
    desc: 'A conta 45.1 (Fundo Fixo) apresenta um saldo credor de Kz 15.000.',
    suggestion: 'Revise os pagamentos efetuados em numerário.'
  },
  { 
    id: 3, 
    type: 'info', 
    title: 'Amortizações Pendentes', 
    desc: 'Não foram detectados lançamentos de amortização para o imobilizado da Classe 11 neste período.',
    suggestion: 'Gere os lançamentos automáticos de amortização.'
  }
];

export default function AuditAnalysis({ userPlan }: AuditAnalysisProps) {
  const isPremium = userPlan === 'premium';

  if (!isPremium) {
    return (
      <div className="space-y-8 p-4 md:p-8 pt-20">
        <header>
          <h1 className="text-4xl font-bold text-gray-900">Auditoria Inteligente</h1>
          <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
            Análise automática de inconsistências e erros
          </p>
        </header>

        <div className="bg-white rounded-[40px] shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <ShieldCheck className="w-64 h-64 text-violet-600" />
          </div>
          
          <div className="p-12 md:p-20 text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 text-violet-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Crown className="w-4 h-4" />
              Plano Premium
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              O grande diferencial competitivo do seu escritório
            </h2>
            <p className="text-gray-500 mt-6 text-lg">
              A Auditoria Inteligente reduz riscos e aumenta a segurança total da sua contabilidade. 
              Disponível exclusivamente no Plano Premium.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
              {[
                'Detecção automática de A ≠ P + CP',
                'Alertas de saldos credores em Ativo',
                'Verificação de conformidade fiscal',
                'Análise de anomalias em lançamentos',
                'Sugestões de correção em tempo real',
                'Relatórios de auditoria exportáveis'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-violet-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-16 w-full md:w-auto px-12 py-5 bg-violet-600 text-white rounded-2xl font-bold text-lg uppercase tracking-widest shadow-2xl shadow-violet-200 hover:bg-violet-700 transition-all flex items-center justify-center gap-3 group">
              Upgrade para Premium
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Auditoria Inteligente</h1>
          <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
            Análise automática de inconsistências e erros
          </p>
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-400" />
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-red-200 hover:bg-red-700 transition-all">
            <Search className="w-4 h-4" />
            Nova Análise
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {errors.map((error) => (
          <motion.div
            key={error.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex gap-6 items-start"
          >
            <div className={`p-4 rounded-2xl ${
              error.type === 'critical' ? 'bg-red-50 text-red-600' : 
              error.type === 'warning' ? 'bg-amber-50 text-amber-600' : 
              'bg-blue-50 text-blue-600'
            }`}>
              {error.type === 'critical' ? <AlertTriangle className="w-6 h-6" /> : 
               error.type === 'warning' ? <AlertTriangle className="w-6 h-6" /> : 
               <Info className="w-6 h-6" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">{error.title}</h3>
                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                  error.type === 'critical' ? 'bg-red-100 text-red-700' : 
                  error.type === 'warning' ? 'bg-amber-100 text-amber-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  {error.type}
                </span>
              </div>
              <p className="text-gray-600 mt-2 text-sm">{error.desc}</p>
              <div className="mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sugestão de Correção</p>
                <p className="text-sm text-gray-700 mt-1">{error.suggestion}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 flex items-center gap-6">
        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
          <CheckCircle2 className="text-white w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-emerald-900">Conformidade Legal</h3>
          <p className="text-emerald-700 text-sm mt-1">
            Sua estrutura de contas segue rigorosamente o Decreto n.º 82/01 do PGC Angolano.
          </p>
        </div>
      </div>
    </div>
  );
}
