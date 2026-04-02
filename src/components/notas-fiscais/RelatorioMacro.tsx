import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, XCircle, DollarSign } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Transacao = Tables<"transacoes">;

interface RelatorioMacroProps {
  transacoes: Transacao[];
}

export function RelatorioMacro({ transacoes }: RelatorioMacroProps) {
  const total = transacoes.length;
  const pendentes = transacoes.filter((t) => !t.controle_emissao).length;
  const canceladas = transacoes.filter((t) => t.nota_cancelamento).length;
  const valorTotal = transacoes.reduce((acc, t) => {
    const val = parseFloat(t.valor_total?.replace(",", ".") || "0");
    return acc + (isNaN(val) ? 0 : val);
  }, 0);

  const cards = [
    { title: "Total de Transações", value: total, icon: FileText, format: (v: number) => v.toString() },
    { title: "Emissão Pendente", value: pendentes, icon: AlertTriangle, format: (v: number) => v.toString() },
    { title: "Notas Canceladas", value: canceladas, icon: XCircle, format: (v: number) => v.toString() },
    {
      title: "Valor Total",
      value: valorTotal,
      icon: DollarSign,
      format: (v: number) =>
        v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.format(card.value)}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
