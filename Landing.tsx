import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Star, Shield, Zap, Scale } from 'lucide-react';
import Auth from './Auth';

interface LandingProps {
  onLogin: (plan: string, userData: any) => void;
}

const plans = [
  {
    id: 'essencial',
    name: 'Plano Essencial',
    price: '45.000',
    color: 'emerald',
    focus: 'Operação contábil básica',
    features: [
      'Lançamentos no razão',
      'Plano de contas',
      'Balancete de verificação',
      'Balanço patrimonial',
      'Emissão de facturas',
      'Fluxo de caixa diário'
    ],
    ideal: 'Ideal para contadores autônomos e pequenas empresas.'
  },
  {
    id: 'profissional',
    name: 'Plano Profissional',
    price: '120.000',
    color: 'blue',
    popular: true,
    focus: 'Gestão + Análise',
    features: [
      'Tudo do Essencial',
      'Dashboard Financeiro',
      'Análise de saúde financeira',
      'Alertas financeiros',
      'Análise de lançamentos',
      'Assistente educativo'
    ],
    ideal: 'Aqui o cliente começa a “pensar estrategicamente”, não apenas registrar.'
  },
  {
    id: 'premium',
    name: 'Plano Premium',
    price: '280.000',
    color: 'violet',
    focus: 'Auditoria e Automação Avançada',
    features: [
      'Tudo do Profissional',
      'Auditoria inteligente'
    ],
    ideal: 'O grande diferencial competitivo. Recurso âncora que justifica o valor premium.'
  }
];

export default function Landing({ onLogin }: LandingProps) {
  const [showAuth, setShowAuth] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  if (showAuth) {
    return <Auth onAuthSuccess={(data) => onLogin(selectedPlan || 'essencial', data)} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] selection:bg-red-100 selection:text-red-900">
      {/* Hero Section */}
      <header className="pt-20 pb-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <Scale className="w-4 h-4" />
            AuditContas Angola
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Contabilidade Inteligente para o <span className="text-red-600 underline decoration-red-200 underline-offset-8">Mercado Angolano</span>
          </h1>
          <p className="text-xl text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed">
            A plataforma definitiva para contabilistas, estudantes e gestores. 
            Conformidade com o PGC (Decreto 82/01) e inteligência gerencial.
          </p>
        </motion.div>
      </header>

      {/* Plans Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Escolha o plano ideal para o seu negócio</h2>
          <p className="text-gray-500 mt-4">Distribuição Estratégica de Funcionalidades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -8 }}
              className={`relative bg-white p-8 rounded-[40px] shadow-xl border-2 transition-all ${
                plan.popular ? 'border-blue-500 ring-4 ring-blue-50' : 'border-gray-50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" />
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className={`text-xs font-bold uppercase mt-2 tracking-wider ${
                  plan.color === 'emerald' ? 'text-emerald-600' : 
                  plan.color === 'blue' ? 'text-blue-600' : 'text-violet-600'
                }`}>
                  {plan.focus}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-400 font-medium">AOA/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : 
                      plan.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-violet-100 text-violet-600'
                    }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-8 p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-500 italic leading-relaxed">
                  {plan.ideal}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedPlan(plan.id);
                  setShowAuth(true);
                }}
                className={`w-full py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 group ${
                  plan.color === 'emerald' ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-100' : 
                  plan.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100' : 
                  'bg-violet-600 text-white hover:bg-violet-700 shadow-violet-100'
                }`}
              >
                Começar Agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategy Footer */}
      <section className="bg-gray-900 py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Nossa Estratégia de Valor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="text-emerald-500 w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Essencial</h4>
              <p className="text-gray-400 text-sm">Resolve a obrigação legal básica.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="text-blue-500 w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Profissional</h4>
              <p className="text-gray-400 text-sm">Melhora a tomada de decisão estratégica.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="text-violet-500 w-6 h-6" />
              </div>
              <h4 className="font-bold mb-2">Premium</h4>
              <p className="text-gray-400 text-sm">Reduz risco e aumenta a segurança total.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
