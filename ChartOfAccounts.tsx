import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PGC_CLASSES, Account } from '../types/pgc';
import { Search, ChevronDown, ChevronRight, Book } from 'lucide-react';

interface AccountRowProps {
  account: Account;
  depth?: number;
}

const AccountRow: React.FC<AccountRowProps> = ({ account, depth = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(depth === 0);
  const hasChildren = account.children && account.children.length > 0;

  return (
    <div className="w-full">
      <div 
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
        className={`
          flex items-center gap-4 py-4 px-6 cursor-pointer transition-colors
          ${depth === 0 ? 'bg-red-50/50 border-b border-red-100' : 'hover:bg-gray-50 border-b border-gray-50'}
        `}
        style={{ paddingLeft: `${depth * 2 + 1.5}rem` }}
      >
        <div className="flex items-center gap-3 flex-1">
          <span className={`font-mono text-sm ${depth === 0 ? 'font-bold text-red-600' : 'text-gray-400'}`}>
            {account.code}
          </span>
          <span className={`text-sm ${depth === 0 ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
            {account.name}
          </span>
        </div>
        {hasChildren && (
          <div className="text-gray-400">
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </div>
        )}
      </div>
      {hasChildren && isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="overflow-hidden"
        >
          {account.children?.map((child) => (
            <AccountRow key={child.code} account={child} depth={depth + 1} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default function ChartOfAccounts() {
  const [search, setSearch] = useState('');

  const filteredClasses = PGC_CLASSES.filter(cls => 
    cls.name.toLowerCase().includes(search.toLowerCase()) || 
    cls.code.includes(search) ||
    cls.children?.some(child => child.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Plano de Contas</h1>
          <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
            Estrutura baseada no PGC Angolano (Decreto n.º 82/01)
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text"
            placeholder="Pesquisar conta ou código..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-11 pr-6 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all w-full md:w-80"
          />
        </div>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-100 flex items-center gap-4">
          <Book className="w-4 h-4 text-gray-400" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Quadro e Lista de Contas</span>
        </div>
        <div className="divide-y divide-gray-50">
          {filteredClasses.map((cls) => (
            <AccountRow key={cls.code} account={cls} />
          ))}
        </div>
      </div>
    </div>
  );
}
