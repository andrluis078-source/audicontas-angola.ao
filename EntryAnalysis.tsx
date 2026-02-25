import React from 'react';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { AlertCircle, CheckCircle2, TrendingUp, Filter } from 'lucide-react';

const distributionData = [
  { name: 'Ativos', value: 60, color: '#ef4444' },
  { name: 'Passivos', value: 25, color: '#f87171' },
  { name: 'Capital Próprio', value: 15, color: '#fee2e2' },
];

const volumeData = [
  { month: 'Jan', volume: 1200000 },
  { month: 'Fev', volume: 1800000 },
  { month: 'Mar', volume: 1500000 },
];

export default function EntryAnalysis() {
  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header>
        <h1 className="text-4xl font-bold text-gray-900">Análise de Lançamentos</h1>
        <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
          Insights estatísticos e volumetria de dados (Kz)
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Distribution Chart */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center uppercase tracking-wider text-xs">Distribuição Patrimonial</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distributionData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Volume Chart */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center uppercase tracking-wider text-xs">Volume de Transações (Kz)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="volume" fill="#ef4444" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900">Consistência</h4>
          </div>
          <p className="text-sm text-gray-500">98% dos lançamentos estão devidamente documentados e classificados.</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600" />
            </div>
            <h4 className="font-bold text-gray-900">Anomalias</h4>
          </div>
          <p className="text-sm text-gray-500">Detectados 2 lançamentos com valores atípicos para a Classe 6.</p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900">Tendência</h4>
          </div>
          <p className="text-sm text-gray-500">Aumento de 15% nas despesas operacionais em relação ao mês anterior.</p>
        </div>
      </div>
    </div>
  );
}
