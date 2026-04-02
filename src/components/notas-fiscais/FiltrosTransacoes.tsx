import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface Filtros {
  busca: string;
  status_pedido: string;
  plataforma: string;
  controle_emissao: string;
  emissao_nota_produto: string;
  emissao_nota_servico: string;
  nota_cancelamento: string;
  forma_pagamento: string;
}

interface FiltrosTransacoesProps {
  filtros: Filtros;
  onChange: (filtros: Filtros) => void;
  onClear: () => void;
}

const PLATAFORMAS = ["Guru", "TMB", "Kiwify"];
const STATUS = ["aprovado", "cancelado"];

export function FiltrosTransacoes({ filtros, onChange, onClear }: FiltrosTransacoesProps) {
  const update = (key: keyof Filtros, value: string) =>
    onChange({ ...filtros, [key]: value });

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <Input
          placeholder="Buscar por nome, email, CPF/CNPJ ou ID pedido..."
          value={filtros.busca}
          onChange={(e) => update("busca", e.target.value)}
          className="max-w-sm"
        />
        <Select value={filtros.status_pedido} onValueChange={(v) => update("status_pedido", v)}>
          <SelectTrigger className="w-[160px]"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {STATUS.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
          </SelectContent>
        </Select>
        <Select value={filtros.plataforma} onValueChange={(v) => update("plataforma", v)}>
          <SelectTrigger className="w-[160px]"><SelectValue placeholder="Plataforma" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            {PLATAFORMAS.map((p) => (<SelectItem key={p} value={p}>{p}</SelectItem>))}
          </SelectContent>
        </Select>
        <Select value={filtros.controle_emissao} onValueChange={(v) => update("controle_emissao", v)}>
          <SelectTrigger className="w-[170px]"><SelectValue placeholder="Ctrl Emissão" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="true">Emitido</SelectItem>
            <SelectItem value="false">Pendente</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filtros.nota_cancelamento} onValueChange={(v) => update("nota_cancelamento", v)}>
          <SelectTrigger className="w-[170px]"><SelectValue placeholder="Cancelamento" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="true">Sim</SelectItem>
            <SelectItem value="false">Não</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon" onClick={onClear} title="Limpar filtros">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
