import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import type { Tables } from "@/integrations/supabase/types";

type Transacao = Tables<"transacoes">;

interface TransacaoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transacao?: Transacao | null;
  onSubmit: (data: Partial<Transacao>) => void;
  loading?: boolean;
}

export function TransacaoForm({ open, onOpenChange, transacao, onSubmit, loading }: TransacaoFormProps) {
  const { register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      id_pedido: transacao?.id_pedido || "",
      nome_completo: transacao?.nome_completo || "",
      email: transacao?.email || "",
      cpf_cnpj: transacao?.cpf_cnpj || "",
      telefone: transacao?.telefone || "",
      plataforma: transacao?.plataforma || "",
      valor_total: transacao?.valor_total || "",
      status_pedido: transacao?.status_pedido || "aprovado",
      forma_pagamento: transacao?.forma_pagamento || "",
      controle_emissao: transacao?.controle_emissao ?? false,
      emissao_nota_produto: transacao?.emissao_nota_produto ?? false,
      emissao_nota_servico: transacao?.emissao_nota_servico ?? false,
      nota_cancelamento: transacao?.nota_cancelamento ?? false,
      produtos: transacao?.produtos || "",
      data_aprovacao_pagamento: transacao?.data_aprovacao_pagamento || "",
    },
  });

  const controle_emissao = watch("controle_emissao");
  const emissao_nota_produto = watch("emissao_nota_produto");
  const emissao_nota_servico = watch("emissao_nota_servico");
  const nota_cancelamento = watch("nota_cancelamento");

  const onFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{transacao ? "Editar Transação" : "Nova Transação"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={onFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="id_pedido">ID Pedido</Label>
              <Input id="id_pedido" {...register("id_pedido")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nome_completo">Nome Completo</Label>
              <Input id="nome_completo" {...register("nome_completo")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cpf_cnpj">CPF/CNPJ</Label>
              <Input id="cpf_cnpj" {...register("cpf_cnpj")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" {...register("telefone")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plataforma">Plataforma</Label>
              <Select value={watch("plataforma")} onValueChange={(v) => setValue("plataforma", v)}>
                <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Guru">Guru</SelectItem>
                  <SelectItem value="TMB">TMB</SelectItem>
                  <SelectItem value="Kiwify">Kiwify</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="valor_total">Valor Total</Label>
              <Input id="valor_total" {...register("valor_total")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status_pedido">Status</Label>
              <Select value={watch("status_pedido")} onValueChange={(v) => setValue("status_pedido", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="aprovado">Aprovado</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="forma_pagamento">Forma de Pagamento</Label>
              <Input id="forma_pagamento" {...register("forma_pagamento")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="produtos">Produtos</Label>
              <Input id="produtos" {...register("produtos")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="data_aprovacao_pagamento">Data Aprovação</Label>
              <Input id="data_aprovacao_pagamento" {...register("data_aprovacao_pagamento")} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <Label htmlFor="controle_emissao">Controle de Emissão</Label>
              <Switch id="controle_emissao" checked={controle_emissao} onCheckedChange={(v) => setValue("controle_emissao", v)} />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <Label htmlFor="emissao_nota_produto">Emissão Nota Produto</Label>
              <Switch id="emissao_nota_produto" checked={emissao_nota_produto} onCheckedChange={(v) => setValue("emissao_nota_produto", v)} />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <Label htmlFor="emissao_nota_servico">Emissão Nota Serviço</Label>
              <Switch id="emissao_nota_servico" checked={emissao_nota_servico} onCheckedChange={(v) => setValue("emissao_nota_servico", v)} />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <Label htmlFor="nota_cancelamento">Nota Cancelamento</Label>
              <Switch id="nota_cancelamento" checked={nota_cancelamento} onCheckedChange={(v) => setValue("nota_cancelamento", v)} />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
            <Button type="submit" disabled={loading}>{loading ? "Salvando..." : "Salvar"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
