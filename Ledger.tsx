import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, BookOpen, Wallet, ArrowRightLeft } from 'lucide-react';

const ledgerData = [
  { 
    account: '43.1 - Depósitos à Ordem', 
    balance: 1250000, 
    entries: [
      { date: '2026-02-01', desc: 'Saldo Inicial', debit: 1000000, credit: 0, balance: 1000000 },
      { date: '2026-02-15', desc: 'Recebimento Cliente A', debit: 500000, credit: 0, balance: 1500000 },
      { date: '2026-02-20', desc: 'Pagamento Salários', debit: 0, credit: 250000, balance: 1250000 },
    ]
  },
  { 
    account: '21.1 - Compras de Mercadorias', 
    balance: 450000, 
    entries: [
      { date: '2026-02-05', desc: 'Compra Lote 01', debit: 450000, credit: 0, balance: 450000 },
    ]
  }
];

export default function Ledger() {
  const [expandedAccount, setExpandedAccount] = useState<string | null>(ledgerData[0].account);

  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header>
        <h1 className="text-4xl font-bold text-gray-900">Razão</h1>
        <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
          Movimentação detalhada por conta (Kwanza - Kz)
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {ledgerData.map((item) => (
          <div key={item.account} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div 
              onClick={() => setExpandedAccount(expandedAccount === item.account ? null : item.account)}
              className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.account}</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Saldo Atual</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <span className="text-xl font-bold text-gray-900">Kz {item.balance.toLocaleString('pt-AO')}</span>
                </div>
                <ChevronRight className={`w-5 h-5 text-gray-300 transition-transform ${expandedAccount === item.account ? 'rotate-90' : ''}`} />
              </div>
            </div>

            {expandedAccount === item.account && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="border-t border-gray-50"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50/50">
                        <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Data</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Descrição</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Débito</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Crédito</th>
                        <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Saldo Acum.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {item.entries.map((entry, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                          <td className="px-6 py-4 text-sm text-gray-500">{entry.date}</td>
                          <td className="px-6 py-4 text-sm text-gray-900 font-medium">{entry.desc}</td>
                          <td className="px-6 py-4 text-sm text-right font-bold text-gray-900">
                            {entry.debit > 0 ? entry.debit.toLocaleString('pt-AO') : '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-right font-bold text-gray-900">
                            {entry.credit > 0 ? entry.credit.toLocaleString('pt-AO') : '-'}
                          </td>
                          <td className="px-6 py-4 text-sm text-right font-bold text-red-600 bg-red-50/30">
                            Kz {entry.balance.toLocaleString('pt-AO')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
