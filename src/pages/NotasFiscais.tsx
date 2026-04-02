import { useState, useMemo, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { RelatorioMacro } from "@/components/notas-fiscais/RelatorioMacro";
import { FiltrosTransacoes, type Filtros } from "@/components/notas-fiscais/FiltrosTransacoes";
import { NotasFiscaisTable } from "@/components/notas-fiscais/NotasFiscaisTable";
import { TransacaoForm } from "@/components/notas-fiscais/TransacaoForm";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationNext, PaginationPrevious,
} from "@/components/ui/pagination";
import type { Tables } from "@/integrations/supabase/types";

type Transacao = Tables<"transacoes">;

const EMPTY_FILTROS: Filtros = {
  busca: "", status_pedido: "all", plataforma: "all",
  controle_emissao: "all", emissao_nota_produto: "all",
  emissao_nota_servico: "all", nota_cancelamento: "all",
  forma_pagamento: "all",
};

const PAGE_SIZE = 20;

export default function NotasFiscais() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [filtros, setFiltros] = useState<Filtros>(EMPTY_FILTROS);
  const [page, setPage] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Transacao | null>(null);
  const [deleting, setDeleting] = useState<Transacao | null>(null);

  const { data: allTransacoes = [], isLoading } = useQuery({
    queryKey: ["transacoes"],
    queryFn: async () => {
      // Fetch all (may need multiple pages if > 1000)
      let all: Transacao[] = [];
      let from = 0;
      const batchSize = 1000;
      let hasMore = true;
      while (hasMore) {
        const { data, error } = await supabase
          .from("transacoes")
          .select("*")
          .range(from, from + batchSize - 1)
          .order("id", { ascending: false });
        if (error) throw error;
        all = all.concat(data || []);
        hasMore = (data?.length || 0) === batchSize;
        from += batchSize;
      }
      return all;
    },
  });

  const filtered = useMemo(() => {
    return allTransacoes.filter((t) => {
      if (filtros.busca) {
        const q = filtros.busca.toLowerCase();
        const match =
          t.nome_completo?.toLowerCase().includes(q) ||
          t.email?.toLowerCase().includes(q) ||
          t.cpf_cnpj?.toLowerCase().includes(q) ||
          t.id_pedido?.toLowerCase().includes(q);
        if (!match) return false;
      }
      if (filtros.status_pedido !== "all" && t.status_pedido !== filtros.status_pedido) return false;
      if (filtros.plataforma !== "all" && t.plataforma !== filtros.plataforma) return false;
      if (filtros.controle_emissao !== "all") {
        const expected = filtros.controle_emissao === "true";
        if (!!t.controle_emissao !== expected) return false;
      }
      if (filtros.nota_cancelamento !== "all") {
        const expected = filtros.nota_cancelamento === "true";
        if (!!t.nota_cancelamento !== expected) return false;
      }
      return true;
    });
  }, [allTransacoes, filtros]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  useEffect(() => { setPage(0); }, [filtros]);

  const insertMutation = useMutation({
    mutationFn: async (data: Partial<Transacao>) => {
      const { error } = await supabase.from("transacoes").insert(data as any);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transacoes"] });
      toast({ title: "Transação criada com sucesso" });
      setFormOpen(false);
    },
    onError: (e: any) => toast({ title: "Erro ao criar", description: e.message, variant: "destructive" }),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<Transacao> }) => {
      const { error } = await supabase.from("transacoes").update(data as any).eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transacoes"] });
      toast({ title: "Transação atualizada com sucesso" });
      setFormOpen(false);
      setEditing(null);
    },
    onError: (e: any) => toast({ title: "Erro ao atualizar", description: e.message, variant: "destructive" }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase.from("transacoes").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transacoes"] });
      toast({ title: "Transação excluída" });
      setDeleting(null);
    },
    onError: (e: any) => toast({ title: "Erro ao excluir", description: e.message, variant: "destructive" }),
  });

  const handleFormSubmit = (data: Partial<Transacao>) => {
    if (editing) {
      updateMutation.mutate({ id: editing.id, data });
    } else {
      insertMutation.mutate(data);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Controle de Notas Fiscais</h1>
        </div>
        <Button onClick={() => { setEditing(null); setFormOpen(true); }}>
          <Plus className="h-4 w-4 mr-2" /> Nova Transação
        </Button>
      </div>

      <RelatorioMacro transacoes={filtered} />

      <FiltrosTransacoes filtros={filtros} onChange={setFiltros} onClear={() => setFiltros(EMPTY_FILTROS)} />

      {isLoading ? (
        <div className="text-center py-12 text-muted-foreground">Carregando transações...</div>
      ) : (
        <>
          <div className="text-sm text-muted-foreground">
            {filtered.length} resultado(s) — Página {page + 1} de {totalPages}
          </div>
          <NotasFiscaisTable
            transacoes={paged}
            onEdit={(t) => { setEditing(t); setFormOpen(true); }}
            onDelete={(t) => setDeleting(t)}
          />
          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setPage((p) => Math.max(0, p - 1))}
                    className={page === 0 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const start = Math.max(0, Math.min(page - 2, totalPages - 5));
                  const pageNum = start + i;
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        isActive={pageNum === page}
                        onClick={() => setPage(pageNum)}
                        className="cursor-pointer"
                      >
                        {pageNum + 1}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                    className={page >= totalPages - 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}

      {formOpen && (
        <TransacaoForm
          open={formOpen}
          onOpenChange={(open) => { setFormOpen(open); if (!open) setEditing(null); }}
          transacao={editing}
          onSubmit={handleFormSubmit}
          loading={insertMutation.isPending || updateMutation.isPending}
        />
      )}

      <AlertDialog open={!!deleting} onOpenChange={(open) => !open && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir transação?</AlertDialogTitle>
            <AlertDialogDescription>
              Essa ação não pode ser desfeita. A transação #{deleting?.id_pedido || deleting?.id} será removida permanentemente.
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
