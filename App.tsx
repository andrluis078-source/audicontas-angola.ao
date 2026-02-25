import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ChartOfAccounts from './components/ChartOfAccounts';
import { motion, AnimatePresence } from 'motion/react';

import AuditAnalysis from './components/AuditAnalysis';
import Auth from './components/Auth';
import Journal from './components/Journal';
import Ledger from './components/Ledger';
import EntryAnalysis from './components/EntryAnalysis';
import Invoicing from './components/Invoicing';
import BalanceSheet from './components/BalanceSheet';
import TrialBalance from './components/TrialBalance';
import SecurityCenter from './components/SecurityCenter';
import EducationalAssistant from './components/EducationalAssistant';
import Landing from './components/Landing';
import AccountSettings from './components/AccountSettings';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPlan, setUserPlan] = useState<string>('essencial');
  const [userData, setUserData] = useState<any>(null);

  const handleLogin = (plan: string, data?: any) => {
    setUserPlan(plan);
    setIsAuthenticated(true);
    if (data) setUserData(data);
    // Set default tab based on plan
    if (plan === 'essencial') {
      setActiveTab('diario');
    } else {
      setActiveTab('dashboard');
    }
  };

  const renderContent = () => {
    if (!isAuthenticated) {
      return <Landing onLogin={handleLogin} />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'plano':
        return <ChartOfAccounts />;
      case 'auditoria':
        return <AuditAnalysis userPlan={userPlan} />;
      case 'auth':
        return <AccountSettings userPlan={userPlan} userData={userData} />;
      case 'diario':
        return <Journal />;
      case 'razao':
        return <Ledger />;
      case 'analise_lancamentos':
        return <EntryAnalysis />;
      case 'facturacao':
        return <Invoicing userPlan={userPlan} />;
      case 'balanco':
        return <BalanceSheet />;
      case 'balancete':
        return <TrialBalance />;
      case 'seguranca':
        return <SecurityCenter />;
      case 'educativo':
        return <EducationalAssistant />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[80vh] text-center p-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl">🏗️</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Módulo em Desenvolvimento</h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Estamos trabalhando para trazer as melhores ferramentas de análise para este módulo em breve.
            </p>
            <button 
              onClick={() => setActiveTab(userPlan === 'essencial' ? 'diario' : 'dashboard')}
              className="mt-8 px-8 py-3 bg-red-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-red-200 hover:bg-red-700 transition-all"
            >
              Voltar ao Início
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans selection:bg-red-100 selection:text-red-900">
      {isAuthenticated && (
        <Sidebar 
          isOpen={isSidebarOpen} 
          setIsOpen={setIsSidebarOpen} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userPlan={userPlan}
        />
      )}
      
      <main className="transition-all duration-300">
        <AnimatePresence mode="wait">
          <motion.div
            key={isAuthenticated ? activeTab : 'landing'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer micro-details */}
      {isAuthenticated && (
        <footer className="p-8 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
            AuditContas &copy; 2026 • Sistema de Análise PGC Angolano • Plano {userPlan.toUpperCase()}
          </p>
        </footer>
      )}
    </div>
  );
}
