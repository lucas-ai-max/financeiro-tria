import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import type { Tables } from "@/integrations/supabase/types";

type Produto = Tables<"produtos_cadastrados_emissao_notas">;

type ProdutoForm = {
  id_produto: string;
  nome_produto: string;
  porcentagem_servico: string;
  porcentagem_produto: string;
};

const EMPTY_FORM: ProdutoForm = {
  id_produto: "",
  nome_produto: "",
  porcentagem_servico: "",
  porcentagem_produto: "",
};

export default function Produtos() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [busca, setBusca] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Produto | null>(null);
  const [deleting, setDeleting] = useState<Produto | null>(null);
  const [form, setForm] = useState<ProdutoForm>(EMPTY_FORM);

  const { data: produtos = [], isLoading } = useQuery({
    queryKey: ["produtos_cadastrados"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("produtos_cadastrados_emissao_notas")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const filtered = produtos.filter((p) => {
    if (!busca) return true;
    const term = busca.toLowerCase();
    return (
      p.id_produto?.toLowerCase().includes(term) ||
      p.nome_produto?.toLowerCase().includes(term)
    );
  });

  const insertMutation = useMutation({
    mutationFn: async (data: ProdutoForm) => {
      const { error } = await supabase
        .from("produtos_cadastrados_emissao_notas")
        .insert(data as any);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produtos_cadastrados"] });
      toast({ title: "Produto cadastrado com sucesso" });
      closeForm();
    },
    onError: (e) => toast({ title: "Erro ao cadastrar", description: e.message, variant: "destructive" }),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: ProdutoForm }) => {
      const { error } = await supabase
        .from("produtos_cadastrados_emissao_notas")
        .update(data as any)
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produtos_cadastrados"] });
      toast({ title: "Produto atualizado com sucesso" });
      closeForm();
    },
    onError: (e) => toast({ title: "Erro ao atualizar", description: e.message, variant: "destructive" }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("produtos_cadastrados_emissao_notas")
        .delete()
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produtos_cadastrados"] });
      toast({ title: "Produto excluído" });
      setDeleting(null);
    },
    onError: (e) => toast({ title: "Erro ao excluir", description: e.message, variant: "destructive" }),
  });

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setFormOpen(true);
  }

  function openEdit(p: Produto) {
    setEditing(p);
    setForm({
      id_produto: p.id_produto ?? "",
      nome_produto: p.nome_produto ?? "",
      porcentagem_servico: p.porcentagem_servico ?? "",
      porcentagem_produto: p.porcentagem_produto ?? "",
    });
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setEditing(null);
    setForm(EMPTY_FORM);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.id_produto.trim()) {
      toast({ title: "ID do produto é obrigatório", variant: "destructive" });
      return;
    }
    if (editing) {
      updateMutation.mutate({ id: editing.id, data: form });
    } else {
      insertMutation.mutate(form);
    }
  }

  const loading = insertMutation.isPending || updateMutation.isPending;

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Produtos - Emissão de Notas</h1>
        <Button onClick={openCreate}>
          <Plus className="h-4 w-4 mr-2" /> Novo Produto
        </Button>
      </div>

      {/* Busca */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por ID ou nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Tabela */}
      {isLoading ? (
        <div className="text-center py-12 text-muted-foreground">Carregando produtos...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">Nenhum produto encontrado.</div>
      ) : (
        <>
          <div className="text-sm text-muted-foreground">{filtered.length} produto(s)</div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Produto</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>% Serviço</TableHead>
                  <TableHead>% Produto</TableHead>
                  <TableHead className="w-24">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-mono text-sm">{p.id_produto}</TableCell>
                    <TableCell>{p.nome_produto ?? "—"}</TableCell>
                    <TableCell>{p.porcentagem_servico ? `${p.porcentagem_servico}%` : "—"}</TableCell>
                    <TableCell>{p.porcentagem_produto ? `${p.porcentagem_produto}%` : "—"}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openEdit(p)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setDeleting(p)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}

      {/* Form Dialog */}
      <Dialog open={formOpen} onOpenChange={(open) => !open && closeForm()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Editar Produto" : "Novo Produto"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="id_produto">ID Produto *</Label>
              <Input
                id="id_produto"
                value={form.id_produto}
                onChange={(e) => setForm({ ...form, id_produto: e.target.value })}
                placeholder="Ex: PROD-001"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nome_produto">Nome do Produto</Label>
              <Input
                id="nome_produto"
                value={form.nome_produto}
                onChange={(e) => setForm({ ...form, nome_produto: e.target.value })}
                placeholder="Ex: Curso Expert Experience"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="porcentagem_servico">% Serviço</Label>
                <Input
                  id="porcentagem_servico"
                  value={form.porcentagem_servico}
                  onChange={(e) => setForm({ ...form, porcentagem_servico: e.target.value })}
                  placeholder="Ex: 80"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="porcentagem_produto">% Produto</Label>
                <Input
                  id="porcentagem_produto"
                  value={form.porcentagem_produto}
                  onChange={(e) => setForm({ ...form, porcentagem_produto: e.target.value })}
                  placeholder="Ex: 20"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={closeForm}>Cancelar</Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Salvando..." : editing ? "Salvar" : "Cadastrar"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <AlertDialog open={!!deleting} onOpenChange={(open) => !open && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir produto?</AlertDialogTitle>
            <AlertDialogDescription>
              Essa ação não pode ser desfeita. O produto "{deleting?.nome_produto || deleting?.id_produto}" será removido permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleting && deleteMutation.mutate(deleting.id)}>
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
