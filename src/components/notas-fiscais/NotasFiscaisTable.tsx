import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Transacao = Tables<"transacoes">;

interface NotasFiscaisTableProps {
  transacoes: Transacao[];
  onEdit: (t: Transacao) => void;
  onDelete: (t: Transacao) => void;
}

function BoolBadge({ value, labelTrue = "Sim", labelFalse = "Não" }: { value: boolean | null; labelTrue?: string; labelFalse?: string }) {
  return (
    <Badge variant={value ? "default" : "secondary"} className="text-xs">
      {value ? labelTrue : labelFalse}
    </Badge>
  );
}

export function NotasFiscaisTable({ transacoes, onEdit, onDelete }: NotasFiscaisTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID Pedido</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Plataforma</TableHead>
            <TableHead>Valor Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ctrl Emissão</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Serviço</TableHead>
            <TableHead>Cancelamento</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transacoes.length === 0 ? (
            <TableRow>
              <TableCell colSpan={10} className="text-center text-muted-foreground py-8">
                Nenhuma transação encontrada.
              </TableCell>
            </TableRow>
          ) : (
            transacoes.map((t) => (
              <TableRow key={t.id}>
                <TableCell className="font-mono text-xs">{t.id_pedido || "-"}</TableCell>
                <TableCell>{t.nome_completo || "-"}</TableCell>
                <TableCell>{t.plataforma || "-"}</TableCell>
                <TableCell>{t.valor_total || "-"}</TableCell>
                <TableCell>
                  <Badge variant={t.status_pedido === "aprovado" ? "default" : "secondary"}>
                    {t.status_pedido || "-"}
                  </Badge>
                </TableCell>
                <TableCell><BoolBadge value={t.controle_emissao} labelTrue="Emitido" labelFalse="Pendente" /></TableCell>
                <TableCell><BoolBadge value={t.emissao_nota_produto} /></TableCell>
                <TableCell><BoolBadge value={t.emissao_nota_servico} /></TableCell>
                <TableCell><BoolBadge value={t.nota_cancelamento} /></TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => onEdit(t)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => onDelete(t)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
