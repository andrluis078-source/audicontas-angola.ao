import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Search, Filter, Download, Calendar, FileText } from 'lucide-react';

const mockEntries = [
  { id: 1, date: '2026-02-20', desc: 'Compra de Mercadorias', debit: 150000, credit: 0, account: '21.1' },
  { id: 2, date: '2026-02-20', desc: 'Pagamento Fornecedor', debit: 0, credit: 150000, account: '32.1' },
  { id: 3, date: '2026-02-21', desc: 'Venda de Serviços', debit: 250000, credit: 0, account: '43.1' },
  { id: 4, date: '2026-02-21', desc: 'Receita de Serviços', debit: 0, credit: 250000, account: '62.1' },
];

export default function Journal() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Diário</h1>
          <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
            Registo cronológico de todas as operações (Kwanza - Kz)
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-red-200 hover:bg-red-700 transition-all">
            <Plus className="w-4 h-4" />
            Novo Lançamento
          </button>
        </div>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text"
              placeholder="Pesquisar lançamentos..."
              className="w-full pl-11 pr-4 py-2 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-500 transition-all outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Exportar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Data</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Conta PGC</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Descrição</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Débito (Kz)</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Crédito (Kz)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-gray-300" />
                      <span className="text-sm text-gray-600">{entry.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono font-bold text-red-600 bg-red-50 px-2 py-1 rounded-lg">
                      {entry.account}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900 font-medium">{entry.desc}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-sm font-bold ${entry.debit > 0 ? 'text-gray-900' : 'text-gray-300'}`}>
                      {entry.debit > 0 ? entry.debit.toLocaleString('pt-AO') : '-'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-sm font-bold ${entry.credit > 0 ? 'text-gray-900' : 'text-gray-300'}`}>
                      {entry.credit > 0 ? entry.credit.toLocaleString('pt-AO') : '-'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
