import React from 'react';
import { motion } from 'motion/react';
import { FileText, Search, Download } from 'lucide-react';

export default function TrialBalance() {
  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Balancete de Verificação</h1>
          <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
            Conferência de saldos por conta (Kz)
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-red-200 hover:bg-red-700 transition-all">
          <Download className="w-4 h-4" />
          Gerar PDF
        </button>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Conta</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Descrição</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Saldo Devedor</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Saldo Credor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { code: '11', name: 'Imobilizações corpóreas', d: 800000, c: 0 },
                { code: '43', name: 'Depósitos à ordem', d: 450000, c: 0 },
                { code: '51', name: 'Capital', d: 0, c: 950000 },
                { code: '33', name: 'Empréstimos', d: 0, c: 300000 },
              ].map((row) => (
                <tr key={row.code} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono font-bold text-red-600">{row.code}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-gray-900">{row.d > 0 ? row.d.toLocaleString('pt-AO') : '-'}</td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-gray-900">{row.c > 0 ? row.c.toLocaleString('pt-AO') : '-'}</td>
                </tr>
              ))}
              <tr className="bg-red-50/50 font-bold">
                <td colSpan={2} className="px-6 py-4 text-sm text-gray-900">TOTAIS</td>
                <td className="px-6 py-4 text-sm text-right text-red-600">Kz 1.250.000</td>
                <td className="px-6 py-4 text-sm text-right text-red-600">Kz 1.250.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
