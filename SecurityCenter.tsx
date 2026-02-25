import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye, Key, ShieldAlert } from 'lucide-react';

export default function SecurityCenter() {
  return (
    <div className="space-y-8 p-4 md:p-8 pt-20">
      <header>
        <h1 className="text-4xl font-bold text-gray-900">Centro de Segurança</h1>
        <p className="text-gray-500 mt-2 uppercase text-xs font-bold tracking-widest">
          Proteção de dados e integridade do sistema
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Estado do Sistema</h3>
              <p className="text-xs text-green-600 font-bold uppercase">Protegido</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Seus dados estão encriptados com tecnologia AES-256. Backups automáticos realizados a cada 24 horas.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Autenticação</h3>
              <p className="text-xs text-blue-600 font-bold uppercase">2FA Ativo</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            A autenticação de dois fatores está ativa para sua conta, garantindo uma camada extra de proteção.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Registos de Acesso Recentes</h3>
        <div className="space-y-4">
          {[
            { date: '2026-02-25 15:42', ip: '197.231.x.x', device: 'Chrome / Windows', status: 'Sucesso' },
            { date: '2026-02-24 09:15', ip: '197.231.x.x', device: 'Safari / iPhone', status: 'Sucesso' },
          ].map((log, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <Eye className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{log.date}</p>
                  <p className="text-xs text-gray-500">{log.device} • {log.ip}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-green-600 uppercase bg-green-50 px-2 py-1 rounded-lg">
                {log.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
