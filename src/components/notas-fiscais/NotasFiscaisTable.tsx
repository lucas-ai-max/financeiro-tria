import { useState } from "react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Pencil, Trash2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type Transacao = Tables<"transacoes">;

interface NotasFiscaisTableProps {
  transacoes: Transacao[];
  onEdit: (t: Transacao) => void;
  onDelete: (t: Transacao) => void;
}

function formatDate(value: string | null) {
  if (!value) return "-";
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleDateString("pt-BR");
}

function BoolBadge({ value, labelTrue = "Sim", labelFalse = "Não" }: { value: boolean | null; labelTrue?: string; labelFalse?: string }) {
  return (
    <Badge variant={value ? "default" : "secondary"} className="text-xs">
      {value ? labelTrue : labelFalse}
    </Badge>
  );
}

function DetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-start py-2 border-b border-border last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-right max-w-[60%]">{value || "-"}</span>
    </div>
  );
}

export function NotasFiscaisTable({ transacoes, onEdit, onDelete }: NotasFiscaisTableProps) {
  const [viewing, setViewing] = useState<Transacao | null>(null);

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data Venda</TableHead>
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
                <TableCell colSpan={11} className="text-center text-muted-foreground py-8">
                  Nenhuma transação encontrada.
                </TableCell>
              </TableRow>
            ) : (
              transacoes.map((t) => (
                <TableRow
                  key={t.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setViewing(t)}
                >
                  <TableCell className="text-sm font-medium whitespace-nowrap">
                    {formatDate(t.data_aprovacao_pagamento)}
                  </TableCell>
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
                    <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
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

      <Dialog open={!!viewing} onOpenChange={(open) => !open && setViewing(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes da Transação</DialogTitle>
          </DialogHeader>
          {viewing && (
            <div className="space-y-1">
              <DetailRow label="Data da Venda" value={formatDate(viewing.data_aprovacao_pagamento)} />
              <DetailRow label="ID Pedido" value={viewing.id_pedido} />
              <DetailRow label="Nome Completo" value={viewing.nome_completo} />
              <DetailRow label="Email" value={viewing.email} />
              <DetailRow label="CPF/CNPJ" value={viewing.cpf_cnpj} />
              <DetailRow label="Telefone" value={viewing.telefone} />
              <DetailRow label="Plataforma" value={viewing.plataforma} />
              <DetailRow label="Produtos" value={viewing.produtos} />
              <DetailRow label="Valor Total" value={viewing.valor_total} />
              <DetailRow label="Forma de Pagamento" value={viewing.forma_pagamento} />
              <DetailRow label="Status" value={
                <Badge variant={viewing.status_pedido === "aprovado" ? "default" : "secondary"}>
                  {viewing.status_pedido || "-"}
                </Badge>
              } />
              <DetailRow label="Controle Emissão" value={<BoolBadge value={viewing.controle_emissao} labelTrue="Emitido" labelFalse="Pendente" />} />
              <DetailRow label="Nota Produto" value={<BoolBadge value={viewing.emissao_nota_produto} />} />
              <DetailRow label="Nota Serviço" value={<BoolBadge value={viewing.emissao_nota_servico} />} />
              <DetailRow label="Nota Cancelamento" value={<BoolBadge value={viewing.nota_cancelamento} />} />
              <DetailRow label="Endereço" value={
                [viewing.logradouro, viewing.numero, viewing.complemento, viewing.bairro, viewing.cidade, viewing.estado, viewing.cep]
                  .filter(Boolean).join(", ") || null
              } />
              <DetailRow label="Tipo Pessoa" value={viewing.tipo_pessoa} />
              <DetailRow label="Centro de Custo" value={viewing.centro_custo} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
