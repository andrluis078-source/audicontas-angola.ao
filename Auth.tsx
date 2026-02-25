import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LogIn, UserPlus, Mail, Lock, User, ArrowRight, Building2, Phone, Briefcase } from 'lucide-react';

interface AuthProps {
  onAuthSuccess: (userData: any) => void;
}

export default function Auth({ onAuthSuccess }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    phone: '',
    userType: 'contabilista'
  });

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthSuccess(formData);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-xl border border-gray-100"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-200">
            {isLogin ? <LogIn className="text-white w-8 h-8" /> : <UserPlus className="text-white w-8 h-8" />}
          </div>
          <h2 className="text-2xl font-bold text-gray-900">{isLogin ? 'Iniciar Sessão' : 'Criar Conta'}</h2>
          <p className="text-gray-500 text-sm mt-2">
            {isLogin ? 'Bem-vindo de volta ao AuditContas' : 'Registo simples em 30 segundos'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleAuth}>
          {!isLogin && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Nome Completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      required
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Nome da Empresa</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      required
                      placeholder="Empresa Lda"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all outline-none text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Telefone (Opcional)</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="tel" 
                      placeholder="+244 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Tipo de Utilizador</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select 
                      value={formData.userType}
                      onChange={(e) => setFormData({...formData, userType: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all outline-none text-sm appearance-none"
                    >
                      <option value="contabilista">Contabilista Independente</option>
                      <option value="estudante">Estudante de Contabilidade</option>
                      <option value="financeiro">Outro Profissional Financeiro</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">E-mail Profissional</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="email" 
                required
                placeholder="exemplo@dominio.ao"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all outline-none text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Palavra-passe</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all outline-none text-sm"
              />
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="mt-1 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                <span className="text-xs text-gray-500 leading-relaxed">
                  Aceito os <button type="button" className="text-red-600 font-bold hover:underline">Termos e Condições</button> e a <button type="button" className="text-red-600 font-bold hover:underline">Política de Privacidade</button>.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="mt-1 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                <span className="text-xs text-gray-500 leading-relaxed">
                  Dou consentimento para o tratamento dos meus dados financeiros para fins de auditoria.
                </span>
              </label>
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <button type="button" className="text-xs font-bold text-red-600 hover:text-red-700 transition-colors">
                Esqueceu a palavra-passe?
              </button>
            </div>
          )}

          <button className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-red-200 hover:bg-red-700 transition-all flex items-center justify-center gap-2 group">
            {isLogin ? 'Entrar' : 'Registar Agora'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            {isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-bold text-red-600 hover:text-red-700 transition-colors"
            >
              {isLogin ? 'Criar conta agora' : 'Iniciar sessão'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
