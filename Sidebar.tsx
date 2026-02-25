import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  LayoutDashboard, 
  BookOpen, 
  Scale, 
  FileText, 
  ShieldCheck, 
  Search, 
  GraduationCap, 
  LogOut,
  ChevronRight,
  User
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userPlan: string;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard Principal', icon: LayoutDashboard, minPlan: 'profissional' },
  { id: 'diario', label: 'Diário', icon: BookOpen, minPlan: 'essencial' },
  { id: 'razao', label: 'Razão', icon: BookOpen, minPlan: 'essencial' },
  { id: 'analise_lancamentos', label: 'Análise de Lançamentos', icon: Search, minPlan: 'profissional' },
  { id: 'balanco', label: 'Balanço Patrimonial', icon: Scale, minPlan: 'essencial' },
  { id: 'balancete', label: 'Balancete de Verificação', icon: FileText, minPlan: 'essencial' },
  { id: 'facturacao', label: 'Facturação (AGT)', icon: FileText, minPlan: 'essencial' },
  { id: 'seguranca', label: 'Centro de Segurança', icon: ShieldCheck, minPlan: 'essencial' },
  { id: 'auditoria', label: 'Auditoria Inteligente', icon: Search, minPlan: 'premium' },
  { id: 'educativo', label: 'Assistente Educativo', icon: GraduationCap, minPlan: 'profissional' },
  { id: 'plano', label: 'Plano de Contas', icon: BookOpen, minPlan: 'essencial' },
  { id: 'auth', label: 'Minha Conta', icon: User, minPlan: 'essencial' },
];

const planHierarchy = ['essencial', 'profissional', 'premium'];

export default function Sidebar({ isOpen, setIsOpen, activeTab, setActiveTab, userPlan }: SidebarProps) {
  const userPlanIndex = planHierarchy.indexOf(userPlan);

  const filteredMenuItems = menuItems.filter(item => {
    const minPlanIndex = planHierarchy.indexOf(item.minPlan);
    return userPlanIndex >= minPlanIndex;
  });

  return (
    <>
      {/* Hamburger Button - Fixed at top left */}
      <button
        id="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6 text-red-600" /> : <Menu className="w-6 h-6 text-red-600" />}
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <motion.aside
        id="sidebar"
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 overflow-y-auto"
      >
        <div className="p-6 pt-20">
          <div className="flex items-center gap-2 mb-8 px-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <Scale className="text-white w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider">Menu Principal</h2>
          </div>

          <nav className="space-y-1">
            {filteredMenuItems.map((item) => (
              <button
                key={item.id}
                id={`menu-item-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  activeTab === item.id 
                    ? "bg-red-600 text-white shadow-lg shadow-red-200" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <item.icon className={cn("w-5 h-5", activeTab === item.id ? "text-white" : "text-gray-400")} />
                <span className="flex-1 text-left">{item.label}</span>
                {activeTab === item.id && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </nav>

          <div className="mt-12 pt-6 border-t border-gray-100">
            <button
              id="logout-btn"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span>Encerrar Sessão</span>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
