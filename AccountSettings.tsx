import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Building2, 
  Mail, 
  Phone, 
  Briefcase, 
  ShieldCheck, 
  Clock, 
  AlertTriangle, 
  ChevronRight, 
  CreditCard, 
  Users, 
  FileCheck, 
  MapPin, 
  Calendar,
  GraduationCap,
  Lock,
  Smartphone
} from 'lucide-react';

interface AccountSettingsProps {
  userPlan: string;
  userData: any;
}

export default function AccountSettings({ userPlan, userData }: AccountSettingsProps) {
  const [activeSection, setActiveSection] = useState('profile');

  const suspiciousAlerts = [
    { id: 1, date: '2026-02-24 23:15', location: 'Luanda, AO', device: 'Unknown Browser / Linux', type: 'warning' },
  ];

  const sections = [
    { id: 'profile', label: 'Perfil e Dados', icon: User },
    { id: 'company', label: 'Dados Fiscais', icon: Building2 },
    { id: 'plan', label: 'Plano e Facturação', icon: CreditCard },
    { id: 'security', label: 'Segurança e Acessos', icon: ShieldCheck },
    { id: 'team', label: 'Equipa', icon: Users },
  ];

  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header>
        <h1 className="text-4xl font-bold text-gray-900">Minha Conta</h1>
        <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
          Gestão de perfil, segurança e subscrição
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${
                activeSection === section.id 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-100' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              <section.icon className="w-5 h-5" />
              {section.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-8">
          {activeSection === 'profile' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informações de Registo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nome Completo</p>
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                      <User className="w-4 h-4 text-gray-300" />
                      {userData?.name || 'Utilizador AuditContas'}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">E-mail Profissional</p>
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                      <Mail className="w-4 h-4 text-gray-300" />
                      {userData?.email || 'contato@empresa.ao'}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Empresa</p>
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                      <Building2 className="w-4 h-4 text-gray-300" />
                      {userData?.company || 'Não informada'}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Telefone</p>
                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                      <Phone className="w-4 h-4 text-gray-300" />
                      {userData?.phone || 'Não informado'}
                    </div>
                  </div>
                </div>
              </div>

              {userData?.userType === 'estudante' && (
                <div className="bg-red-50 p-8 rounded-[32px] border border-red-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-900">Perfil de Estudante</h3>
                      <p className="text-sm text-red-700">Complete seus dados para manter o desconto de 50%</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input placeholder="Universidade / Instituição" className="bg-white border-transparent rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-red-500/20" />
                    <input placeholder="Ano Curricular" className="bg-white border-transparent rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-red-500/20" />
                  </div>
                </div>
              )}

              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Identificação Profissional</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nº Cédula Profissional</label>
                    <input placeholder="Ex: OCPCA-0000" className="w-full bg-gray-50 border-transparent rounded-xl p-3 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ano de Formação</label>
                    <input type="number" placeholder="YYYY" className="w-full bg-gray-50 border-transparent rounded-xl p-3 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'company' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Dados Fiscais da Empresa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">NIF da Empresa</label>
                    <input placeholder="5000000000" className="w-full bg-gray-50 border-transparent rounded-xl p-3 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Regime Tributário</label>
                    <select className="w-full bg-gray-50 border-transparent rounded-xl p-3 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 appearance-none">
                      <option>Regime Geral</option>
                      <option>Regime Simplificado</option>
                      <option>Regime de Exclusão</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Moeda Padrão</label>
                    <input disabled value="Kwanza (Kz - AOA)" className="w-full bg-gray-100 border-transparent rounded-xl p-3 text-sm text-gray-500" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ano Fiscal Corrente</label>
                    <input type="number" defaultValue={2026} className="w-full bg-gray-50 border-transparent rounded-xl p-3 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20" />
                  </div>
                  <div className="md:col-span-2 space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Endereço Sede</label>
                    <textarea placeholder="Rua, Bairro, Província..." className="w-full bg-gray-50 border-transparent rounded-xl p-3 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-red-500/20 min-h-[100px]" />
                  </div>
                </div>
                <button className="mt-8 px-8 py-3 bg-red-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-red-100 hover:bg-red-700 transition-all">
                  Guardar Alterações
                </button>
              </div>
            </motion.div>
          )}

          {activeSection === 'plan' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-red-50 rounded-[24px] flex items-center justify-center">
                    <CreditCard className="w-10 h-10 text-red-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Plano Atual</p>
                    <h3 className="text-2xl font-bold text-gray-900 uppercase">AuditContas {userPlan}</h3>
                    <div className="flex items-center gap-2 mt-1 text-green-600 font-bold text-xs">
                      <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                      Subscrição Ativa
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="flex items-center gap-2 justify-center md:justify-end text-gray-900 font-bold mb-1">
                    <Clock className="w-4 h-4 text-red-600" />
                    26 Dias Restantes
                  </div>
                  <p className="text-xs text-gray-400">Próxima renovação: 23 de Março, 2026</p>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-[32px] text-white flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold">Precisa de mais recursos?</h4>
                  <p className="text-gray-400 text-sm mt-1">Faça o upgrade para o plano Premium e tenha Auditoria Inteligente.</p>
                </div>
                <button className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-all">
                  Ver Planos
                </button>
              </div>
            </motion.div>
          )}

          {activeSection === 'security' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {/* Suspicious Alerts */}
              {suspiciousAlerts.length > 0 && (
                <div className="bg-amber-50 p-8 rounded-[32px] border border-amber-100">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                    <h3 className="text-lg font-bold text-amber-900">Alertas de Segurança</h3>
                  </div>
                  <div className="space-y-4">
                    {suspiciousAlerts.map(alert => (
                      <div key={alert.id} className="bg-white p-4 rounded-2xl flex justify-between items-center border border-amber-200">
                        <div>
                          <p className="text-sm font-bold text-gray-900">Tentativa de Acesso Suspeita</p>
                          <p className="text-xs text-gray-500">{alert.date} • {alert.location} • {alert.device}</p>
                        </div>
                        <button className="text-xs font-bold text-red-600 hover:underline">Não fui eu</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Configurações de Segurança</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Verificação de E-mail</p>
                        <p className="text-xs text-green-600 font-medium">Verificado</p>
                      </div>
                    </div>
                    <Check className="w-5 h-5 text-green-600" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Smartphone className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Autenticação 2FA (SMS)</p>
                        <p className="text-xs text-gray-500 font-medium">Desativado</p>
                      </div>
                    </div>
                    <button className="text-xs font-bold text-red-600 uppercase tracking-widest">Ativar</button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Lock className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">Palavra-passe</p>
                        <p className="text-xs text-gray-500 font-medium">Alterada há 3 meses</p>
                      </div>
                    </div>
                    <button className="text-xs font-bold text-red-600 uppercase tracking-widest">Mudar</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'team' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900">Gestão de Equipa</h3>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-100 hover:bg-red-700 transition-all">
                    Convidar Membro
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-2xl flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600">AL</div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">André Luís (Você)</p>
                        <p className="text-xs text-gray-500">Administrador</p>
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-green-600 uppercase bg-green-50 px-2 py-1 rounded-lg">Online</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-[24px] border border-blue-100">
                  <p className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">Capacidade do Plano</p>
                  <div className="w-full bg-blue-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-1/5" />
                  </div>
                  <p className="text-[10px] text-blue-700 mt-2 font-medium">1 de 5 membros utilizados no Plano {userPlan}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

import { Check } from 'lucide-react';
