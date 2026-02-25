import React from 'react';
import { motion } from 'motion/react';
import { Scale, TrendingUp, AlertCircle } from 'lucide-react';

export default function BalanceSheet() {
  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header>
        <h1 className="text-4xl font-bold text-gray-900">Balanço Patrimonial</h1>
        <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
          Posição financeira e patrimonial (Kwanza - Kz)
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ativo */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Ativo</h3>
            <span className="text-sm font-bold text-red-600">Total: Kz 1.250.000</span>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
              <span className="text-sm text-gray-600 font-medium">Ativo Não Corrente</span>
              <span className="text-sm font-bold text-gray-900">Kz 800.000</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
              <span className="text-sm text-gray-600 font-medium">Ativo Corrente</span>
              <span className="text-sm font-bold text-gray-900">Kz 450.000</span>
            </div>
          </div>
        </div>

        {/* Passivo + CP */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Passivo + Capital Próprio</h3>
            <span className="text-sm font-bold text-red-600">Total: Kz 1.250.000</span>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
              <span className="text-sm text-gray-600 font-medium">Capital Próprio</span>
              <span className="text-sm font-bold text-gray-900">Kz 950.000</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
              <span className="text-sm text-gray-600 font-medium">Passivo Não Corrente</span>
              <span className="text-sm font-bold text-gray-900">Kz 200.000</span>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
              <span className="text-sm text-gray-600 font-medium">Passivo Corrente</span>
              <span className="text-sm font-bold text-gray-900">Kz 100.000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-center gap-4">
        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
          <Scale className="text-white w-5 h-5" />
        </div>
        <p className="text-red-900 font-medium text-sm">
          Equilíbrio Patrimonial Verificado: Ativo = Passivo + Capital Próprio.
        </p>
      </div>
    </div>
  );
}
