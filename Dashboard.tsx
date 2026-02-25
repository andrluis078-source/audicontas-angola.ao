import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  AlertCircle, 
  Clock, 
  Euro, 
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  Scale
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { name: 'Débitos', value: 450000, color: '#ef4444' },
  { name: 'Créditos', value: 450000, color: '#f87171' },
];

const StatCard = ({ title, value, subtitle, icon: Icon, color, trend }: any) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4"
  >
    <div className="flex justify-between items-start">
      <div className={cn("p-3 rounded-2xl", color)}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      {trend && (
        <div className={cn("flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full", 
          trend > 0 ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600")}>
          {trend > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {Math.abs(trend)}%
        </div>
      )}
    </div>
    <div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  </motion.div>
);

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const KzIcon = () => (
  <span className="text-white font-bold text-lg leading-none">Kz</span>
);

export default function Dashboard() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <AnimatePresence>
        {showWelcome && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-red-600 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-red-100"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Bem-vindo ao AuditContas!</h2>
              </div>
              <p className="text-red-100 max-w-2xl leading-relaxed">
                Seu registo foi concluído com sucesso. Para começar, nosso assistente educativo recomenda 
                completar os dados fiscais da sua empresa na área "Minha Conta".
              </p>
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-3 bg-white text-red-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-50 transition-all">
                  Configuração Inicial
                </button>
                <button 
                  onClick={() => setShowWelcome(false)}
                  className="px-6 py-3 bg-red-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-800 transition-all"
                >
                  Ignorar por agora
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <Scale className="w-64 h-64 text-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header>
        <h1 className="text-4xl font-bold text-gray-900">Dashboard Principal</h1>
        <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
          Monitorização em tempo real da saúde financeira
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Saúde Financeira" 
          value="Excelente" 
          subtitle="Contas equilibradas" 
          icon={TrendingUp} 
          color="bg-red-600"
          trend={12}
        />
        <StatCard 
          title="Alertas Críticos" 
          value="0" 
          subtitle="Inconsistências pendentes" 
          icon={AlertCircle} 
          color="bg-red-500"
        />
        <StatCard 
          title="Atividade Recente" 
          value="124" 
          subtitle="Lançamentos este mês" 
          icon={Clock} 
          color="bg-red-400"
          trend={-5}
        />
        <StatCard 
          title="Fluxo de Caixa" 
          value="Kz 1.2M" 
          subtitle="Volume total processado" 
          icon={KzIcon} 
          color="bg-red-300"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Análise de Equilíbrio Patrimonial</h3>
              <p className="text-sm text-gray-500">Comparativo Débitos vs Créditos</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-600" />
                <span className="text-xs font-medium text-gray-600 uppercase">Débitos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <span className="text-xs font-medium text-gray-600 uppercase">Créditos</span>
              </div>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 500 }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]} barSize={60}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Audit Alerts */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-bold text-gray-900">Alertas de Auditoria</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-10 h-10 text-gray-200" />
            </div>
            <p className="text-sm font-bold text-gray-300 uppercase tracking-widest">Nenhum Erro</p>
            <p className="text-xs text-gray-400 mt-2">Sua contabilidade está em conformidade com o PGC.</p>
          </div>

          <button className="w-full mt-8 py-4 bg-gray-50 text-gray-600 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Verificação Rápida
          </button>
        </div>
      </div>

      {/* Ratios Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Liquidez Corrente', value: '2.45', ideal: '> 1.0', color: 'text-green-600' },
          { label: 'Autonomia Financeira', value: '65%', ideal: 'Capital Próprio / Total', color: 'text-blue-600' },
          { label: 'Equilíbrio (A = P + CP)', value: 'Verificado', ideal: 'Moeda: Kwanza (Kz)', color: 'text-emerald-600' }
        ].map((ratio, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{ratio.label}</p>
            <h4 className={cn("text-3xl font-bold mt-2", ratio.color)}>{ratio.value}</h4>
            <p className="text-[10px] text-gray-400 mt-2 font-medium">{ratio.ideal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
