import { FileSpreadsheet, Upload, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoTriaa from '@/assets/logo-triaa.png';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center space-y-10">
        <div className="space-y-3">
          <img src={logoTriaa} alt="Triaa" className="h-14 w-auto mx-auto brightness-200" />
          <p className="text-sm text-slate-400 tracking-wide">Painel Financeiro</p>
        </div>

        <div className="space-y-4">
          <Link to="/notas-fiscais" className="block group">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-5 shadow-sm transition-all hover:shadow-lg hover:shadow-blue-500/5 hover:border-slate-700 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FileSpreadsheet className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-slate-100">Controle de Notas Fiscais</p>
                <p className="text-sm text-slate-500">Gerenciar e consultar notas</p>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-slate-400" />
            </div>
          </Link>

          <Link to="/upload" className="block group">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 px-6 py-5 shadow-sm transition-all hover:shadow-lg hover:shadow-emerald-500/5 hover:border-slate-700 hover:-translate-y-0.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <Upload className="h-5 w-5" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-slate-100">Upload de Faturas</p>
                <p className="text-sm text-slate-500">Enviar planilhas via webhook</p>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-slate-400" />
            </div>
          </Link>
        </div>

        <button
          onClick={logout}
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          <LogOut className="h-3.5 w-3.5" />
          Sair
        </button>
      </div>
    </div>
  );
};

export default Index;
