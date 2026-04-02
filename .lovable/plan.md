

# Plano: Aba de Controle de Notas Fiscais

## Pré-requisito: Conectar Supabase

O projeto ainda não tem uma conexão com o Supabase. Para acessar a tabela `transacoes`, você precisa conectar seu projeto Supabase ao Lovable primeiro:

1. No painel do Lovable, clique no ícone do **Supabase** (na barra lateral)
2. Conecte seu projeto Supabase existente (onde a tabela `transacoes` está)
3. Após conectar, me avise para eu implementar a funcionalidade

## Funcionalidades a implementar (após conexão)

### 1. Nova rota `/notas-fiscais`
- Criar página `src/pages/NotasFiscais.tsx` com a aba de controle
- Adicionar rota no `App.tsx`
- Adicionar link de navegação na página inicial

### 2. Tabela de Transações com filtros
- Listagem paginada das transações da tabela `transacoes`
- Filtros por: status do pedido, plataforma, controle de emissão, emissão nota produto/serviço, nota cancelamento, forma de pagamento
- Busca por nome, email, CPF/CNPJ ou ID do pedido
- Colunas principais visíveis: ID Pedido, Nome, Plataforma, Valor Total, Status, Controle Emissão, Emissão Produto, Emissão Serviço, Nota Cancelamento

### 3. CRUD completo
- **Adicionar**: Dialog/modal com formulário para nova transação
- **Editar**: Dialog com formulário preenchido para edição
- **Excluir**: Confirmação antes de deletar

### 4. Relatório macro de acompanhamento
- Cards resumo no topo: total de transações, total com emissão pendente, total com nota cancelada, valor total
- Breakdown por plataforma
- Breakdown por status de pedido
- Indicadores de emissão (produto vs serviço)

### Estrutura técnica
- Integração Supabase client para queries na tabela `transacoes`
- Componentes: `NotasFiscaisTable`, `TransacaoForm`, `RelatorioMacro`, `FiltrosTransacoes`
- Uso dos componentes UI existentes (Table, Dialog, Card, Tabs, Input, Select, Button)

---

**Próximo passo**: Conecte o Supabase ao projeto e me avise para começar a implementação.

