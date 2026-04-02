import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import logoTriaa from "@/assets/logo-triaa.png";
import { Lock, User } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      toast({
        title: "Erro",
        description: "Usuário ou senha incorretos.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-950 to-slate-900 px-4">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center space-y-2">
          <img src={logoTriaa} alt="Triaa" className="h-14 w-auto mx-auto brightness-200" />
          <p className="text-sm text-slate-400 tracking-wide">Painel Financeiro</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-10 h-11 rounded-xl border-slate-700 bg-slate-800/50 text-slate-100 placeholder:text-slate-500 focus:border-slate-600"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 h-11 rounded-xl border-slate-700 bg-slate-800/50 text-slate-100 placeholder:text-slate-500 focus:border-slate-600"
              />
            </div>
            <Button type="submit" className="w-full h-11 rounded-xl text-sm font-medium">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
