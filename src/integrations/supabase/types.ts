export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      candidatos: {
        Row: {
          atualizado: boolean
          created_at: string | null
          data_de_nascimento: string | null
          demais_respostas: string | null
          feito: boolean | null
          id: string
          qual_a_vaga: string | null
          qual_o_seu_endereco: string | null
          qual_seu_email: string
          qual_seu_nome_completo: string
          qual_seu_perfil_do_instagram: string | null
          qual_seu_perfil_do_linkedin: string | null
          qual_seu_whatsapp: string | null
          qual_sua_disponibilidade_de_horario: string | null
          qual_sua_pretensao_salarial: number | null
        }
        Insert: {
          atualizado?: boolean
          created_at?: string | null
          data_de_nascimento?: string | null
          demais_respostas?: string | null
          feito?: boolean | null
          id?: string
          qual_a_vaga?: string | null
          qual_o_seu_endereco?: string | null
          qual_seu_email: string
          qual_seu_nome_completo: string
          qual_seu_perfil_do_instagram?: string | null
          qual_seu_perfil_do_linkedin?: string | null
          qual_seu_whatsapp?: string | null
          qual_sua_disponibilidade_de_horario?: string | null
          qual_sua_pretensao_salarial?: number | null
        }
        Update: {
          atualizado?: boolean
          created_at?: string | null
          data_de_nascimento?: string | null
          demais_respostas?: string | null
          feito?: boolean | null
          id?: string
          qual_a_vaga?: string | null
          qual_o_seu_endereco?: string | null
          qual_seu_email?: string
          qual_seu_nome_completo?: string
          qual_seu_perfil_do_instagram?: string | null
          qual_seu_perfil_do_linkedin?: string | null
          qual_seu_whatsapp?: string | null
          qual_sua_disponibilidade_de_horario?: string | null
          qual_sua_pretensao_salarial?: number | null
        }
        Relationships: []
      }
      conciliador_contas_pagar_exo_loteamentos: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_pagar_exo_participacoes: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_pagar_oliveira_participacoes: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_pagar_pf: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_pagar_plx: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_pagar_tria: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_receber_exo_loteamentos: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_receber_exo_participacoes: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_receber_oliveira_participacoes: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_receber_pf: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_receber_plx: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      conciliador_contas_receber_tria: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      contas_a_receber: {
        Row: {
          categoria: string | null
          codigo_cliente: string | null
          conta_corrente: string | null
          created_at: string | null
          data_emissao: string | null
          data_previsao: string | null
          data_recebimento: string | null
          data_registro: string | null
          data_vencimento: string | null
          departamento: string | null
          fornecedor: string | null
          gasto: string | null
          id: string
          id_categoria: string | null
          id_cc: string | null
          status: string | null
          valor_conta: string | null
          valor_recebimento: string | null
        }
        Insert: {
          categoria?: string | null
          codigo_cliente?: string | null
          conta_corrente?: string | null
          created_at?: string | null
          data_emissao?: string | null
          data_previsao?: string | null
          data_recebimento?: string | null
          data_registro?: string | null
          data_vencimento?: string | null
          departamento?: string | null
          fornecedor?: string | null
          gasto?: string | null
          id: string
          id_categoria?: string | null
          id_cc?: string | null
          status?: string | null
          valor_conta?: string | null
          valor_recebimento?: string | null
        }
        Update: {
          categoria?: string | null
          codigo_cliente?: string | null
          conta_corrente?: string | null
          created_at?: string | null
          data_emissao?: string | null
          data_previsao?: string | null
          data_recebimento?: string | null
          data_registro?: string | null
          data_vencimento?: string | null
          departamento?: string | null
          fornecedor?: string | null
          gasto?: string | null
          id?: string
          id_categoria?: string | null
          id_cc?: string | null
          status?: string | null
          valor_conta?: string | null
          valor_recebimento?: string | null
        }
        Relationships: []
      }
      contas_pagar: {
        Row: {
          categoria: string | null
          codigo_cliente: string | null
          conta_corrente: string | null
          created_at: string | null
          data_emissao: string | null
          data_pagamento: string | null
          data_previsao: string | null
          data_registro: string | null
          data_vencimento: string | null
          departamento: string | null
          fornecedor: string | null
          gasto: string | null
          id: string
          id_categoria: string | null
          id_cc: string | null
          status: string | null
          valor_conta: string | null
          valor_pagamento: string | null
        }
        Insert: {
          categoria?: string | null
          codigo_cliente?: string | null
          conta_corrente?: string | null
          created_at?: string | null
          data_emissao?: string | null
          data_pagamento?: string | null
          data_previsao?: string | null
          data_registro?: string | null
          data_vencimento?: string | null
          departamento?: string | null
          fornecedor?: string | null
          gasto?: string | null
          id: string
          id_categoria?: string | null
          id_cc?: string | null
          status?: string | null
          valor_conta?: string | null
          valor_pagamento?: string | null
        }
        Update: {
          categoria?: string | null
          codigo_cliente?: string | null
          conta_corrente?: string | null
          created_at?: string | null
          data_emissao?: string | null
          data_pagamento?: string | null
          data_previsao?: string | null
          data_registro?: string | null
          data_vencimento?: string | null
          departamento?: string | null
          fornecedor?: string | null
          gasto?: string | null
          id?: string
          id_categoria?: string | null
          id_cc?: string | null
          status?: string | null
          valor_conta?: string | null
          valor_pagamento?: string | null
        }
        Relationships: []
      }
      financas_mp: {
        Row: {
          cartao: string | null
          categoria: string | null
          created_at: string
          data: string | null
          "data do lançamento": string | null
          gasto: string | null
          id: number
          pais: string | null
          tipo: string | null
          valor: string | null
        }
        Insert: {
          cartao?: string | null
          categoria?: string | null
          created_at?: string
          data?: string | null
          "data do lançamento"?: string | null
          gasto?: string | null
          id?: number
          pais?: string | null
          tipo?: string | null
          valor?: string | null
        }
        Update: {
          cartao?: string | null
          categoria?: string | null
          created_at?: string
          data?: string | null
          "data do lançamento"?: string | null
          gasto?: string | null
          id?: number
          pais?: string | null
          tipo?: string | null
          valor?: string | null
        }
        Relationships: []
      }
      gastos_financeiros: {
        Row: {
          created_at: string | null
          data: string
          gasto: string
          id: number
          origem: string
          pais: string
          status: string
          tipo: string
          valor: number
        }
        Insert: {
          created_at?: string | null
          data: string
          gasto: string
          id?: number
          origem: string
          pais: string
          status: string
          tipo: string
          valor: number
        }
        Update: {
          created_at?: string | null
          data?: string
          gasto?: string
          id?: number
          origem?: string
          pais?: string
          status?: string
          tipo?: string
          valor?: number
        }
        Relationships: []
      }
      machine_marcos_paulo: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      omie_clientes: {
        Row: {
          bairro: string | null
          banco_agencia: string | null
          banco_chave_pix: string | null
          banco_codigo: string | null
          banco_conta_corrente: string | null
          banco_doc_titular: string | null
          banco_nome_titular: string | null
          banco_transf_padrao: string | null
          bloquear_faturamento: string | null
          cep: string | null
          cidade: string | null
          cidade_ibge: string | null
          cnpj_cpf: string | null
          codigo_cliente_integracao: string | null
          codigo_cliente_omie: number
          codigo_pais: string | null
          complemento: string | null
          created_at: string | null
          data_alteracao: string | null
          data_inclusao: string | null
          endereco: string | null
          endereco_numero: string | null
          entrega_bairro: string | null
          entrega_cep: string | null
          entrega_cidade: string | null
          entrega_cidade_ibge: string | null
          entrega_codigo_pais: string | null
          entrega_complemento: string | null
          entrega_endereco: string | null
          entrega_estado: string | null
          entrega_numero: string | null
          enviar_anexos: string | null
          estado: string | null
          exterior: string | null
          gerar_boletos: string | null
          hora_alteracao: string | null
          hora_inclusao: string | null
          id: number
          importado_api: string | null
          inativo: string | null
          inscricao_estadual: string | null
          inscricao_municipal: string | null
          nome_fantasia: string | null
          pessoa_fisica: string | null
          razao_social: string | null
          tags: Json | null
          tipo_assinante: string | null
          updated_at: string | null
          usuario_alteracao: string | null
          usuario_inclusao: string | null
        }
        Insert: {
          bairro?: string | null
          banco_agencia?: string | null
          banco_chave_pix?: string | null
          banco_codigo?: string | null
          banco_conta_corrente?: string | null
          banco_doc_titular?: string | null
          banco_nome_titular?: string | null
          banco_transf_padrao?: string | null
          bloquear_faturamento?: string | null
          cep?: string | null
          cidade?: string | null
          cidade_ibge?: string | null
          cnpj_cpf?: string | null
          codigo_cliente_integracao?: string | null
          codigo_cliente_omie: number
          codigo_pais?: string | null
          complemento?: string | null
          created_at?: string | null
          data_alteracao?: string | null
          data_inclusao?: string | null
          endereco?: string | null
          endereco_numero?: string | null
          entrega_bairro?: string | null
          entrega_cep?: string | null
          entrega_cidade?: string | null
          entrega_cidade_ibge?: string | null
          entrega_codigo_pais?: string | null
          entrega_complemento?: string | null
          entrega_endereco?: string | null
          entrega_estado?: string | null
          entrega_numero?: string | null
          enviar_anexos?: string | null
          estado?: string | null
          exterior?: string | null
          gerar_boletos?: string | null
          hora_alteracao?: string | null
          hora_inclusao?: string | null
          id?: number
          importado_api?: string | null
          inativo?: string | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          nome_fantasia?: string | null
          pessoa_fisica?: string | null
          razao_social?: string | null
          tags?: Json | null
          tipo_assinante?: string | null
          updated_at?: string | null
          usuario_alteracao?: string | null
          usuario_inclusao?: string | null
        }
        Update: {
          bairro?: string | null
          banco_agencia?: string | null
          banco_chave_pix?: string | null
          banco_codigo?: string | null
          banco_conta_corrente?: string | null
          banco_doc_titular?: string | null
          banco_nome_titular?: string | null
          banco_transf_padrao?: string | null
          bloquear_faturamento?: string | null
          cep?: string | null
          cidade?: string | null
          cidade_ibge?: string | null
          cnpj_cpf?: string | null
          codigo_cliente_integracao?: string | null
          codigo_cliente_omie?: number
          codigo_pais?: string | null
          complemento?: string | null
          created_at?: string | null
          data_alteracao?: string | null
          data_inclusao?: string | null
          endereco?: string | null
          endereco_numero?: string | null
          entrega_bairro?: string | null
          entrega_cep?: string | null
          entrega_cidade?: string | null
          entrega_cidade_ibge?: string | null
          entrega_codigo_pais?: string | null
          entrega_complemento?: string | null
          entrega_endereco?: string | null
          entrega_estado?: string | null
          entrega_numero?: string | null
          enviar_anexos?: string | null
          estado?: string | null
          exterior?: string | null
          gerar_boletos?: string | null
          hora_alteracao?: string | null
          hora_inclusao?: string | null
          id?: number
          importado_api?: string | null
          inativo?: string | null
          inscricao_estadual?: string | null
          inscricao_municipal?: string | null
          nome_fantasia?: string | null
          pessoa_fisica?: string | null
          razao_social?: string | null
          tags?: Json | null
          tipo_assinante?: string | null
          updated_at?: string | null
          usuario_alteracao?: string | null
          usuario_inclusao?: string | null
        }
        Relationships: []
      }
      omie_marcos: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      produtos_cadastrados_emissao_notas: {
        Row: {
          created_at: string
          id: string
          id_produto: string
          nome_produto: string | null
          porcentagem_produto: string | null
          porcentagem_servico: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          id_produto: string
          nome_produto?: string | null
          porcentagem_produto?: string | null
          porcentagem_servico?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          id_produto?: string
          nome_produto?: string | null
          porcentagem_produto?: string | null
          porcentagem_servico?: string | null
        }
        Relationships: []
      }
      relatorio_semanal_marcos_paulo: {
        Row: {
          data_lançamento: string
          id: number
          mensagem_dia: string | null
          numero_semana: string | null
        }
        Insert: {
          data_lançamento: string
          id?: number
          mensagem_dia?: string | null
          numero_semana?: string | null
        }
        Update: {
          data_lançamento?: string
          id?: number
          mensagem_dia?: string | null
          numero_semana?: string | null
        }
        Relationships: []
      }
      solicitacoes_pagamentos: {
        Row: {
          app_key: string | null
          app_secret: string | null
          Aprovado: boolean | null
          banco_de_categorias: string | null
          centro_custo: string | null
          comentario: string | null
          comentario_aprovacao: string | null
          ComentarioID: string | null
          Data_previsao: string | null
          id: number
          id_responsavel: string | null
          TaskID: string | null
          ThreadID: string | null
          tipo: string | null
        }
        Insert: {
          app_key?: string | null
          app_secret?: string | null
          Aprovado?: boolean | null
          banco_de_categorias?: string | null
          centro_custo?: string | null
          comentario?: string | null
          comentario_aprovacao?: string | null
          ComentarioID?: string | null
          Data_previsao?: string | null
          id?: number
          id_responsavel?: string | null
          TaskID?: string | null
          ThreadID?: string | null
          tipo?: string | null
        }
        Update: {
          app_key?: string | null
          app_secret?: string | null
          Aprovado?: boolean | null
          banco_de_categorias?: string | null
          centro_custo?: string | null
          comentario?: string | null
          comentario_aprovacao?: string | null
          ComentarioID?: string | null
          Data_previsao?: string | null
          id?: number
          id_responsavel?: string | null
          TaskID?: string | null
          ThreadID?: string | null
          tipo?: string | null
        }
        Relationships: []
      }
      solicitacoes_pagamentos_marcos_paulo: {
        Row: {
          app_key: string | null
          app_secret: string | null
          Aprovado: boolean | null
          banco_de_categorias: string | null
          centro_custo: string | null
          comentario: string | null
          comentario_aprovacao: string | null
          ComentarioID: string | null
          data: string | null
          id: number
          id_responsavel: string | null
          TaskID: string | null
          ThreadID: string | null
          tipo: string | null
        }
        Insert: {
          app_key?: string | null
          app_secret?: string | null
          Aprovado?: boolean | null
          banco_de_categorias?: string | null
          centro_custo?: string | null
          comentario?: string | null
          comentario_aprovacao?: string | null
          ComentarioID?: string | null
          data?: string | null
          id?: number
          id_responsavel?: string | null
          TaskID?: string | null
          ThreadID?: string | null
          tipo?: string | null
        }
        Update: {
          app_key?: string | null
          app_secret?: string | null
          Aprovado?: boolean | null
          banco_de_categorias?: string | null
          centro_custo?: string | null
          comentario?: string | null
          comentario_aprovacao?: string | null
          ComentarioID?: string | null
          data?: string | null
          id?: number
          id_responsavel?: string | null
          TaskID?: string | null
          ThreadID?: string | null
          tipo?: string | null
        }
        Relationships: []
      }
      transacoes: {
        Row: {
          "7 dias": boolean | null
          api_key: string | null
          app_secret: string | null
          bairro: string | null
          centro_custo: string | null
          cep: string | null
          cidade: string | null
          cod_categoria: string | null
          complemento: string | null
          controle_emissao: boolean | null
          cpf_cnpj: string | null
          data_aprovacao_pagamento: string | null
          email: string | null
          emissao_nota_produto: boolean | null
          emissao_nota_servico: boolean | null
          estado: string | null
          forma_pagamento: string | null
          id: number
          id_conta_corrente: string | null
          id_pedido: string | null
          id_servico: string | null
          logradouro: string | null
          nome_completo: string | null
          nota_cancelamento: boolean | null
          numero: string | null
          pais: string | null
          plataforma: string | null
          produtos: string | null
          status_pedido: string | null
          taxa_produto: string | null
          taxa_servico: string | null
          telefone: string | null
          tipo_pessoa: string | null
          valor_total: string | null
        }
        Insert: {
          "7 dias"?: boolean | null
          api_key?: string | null
          app_secret?: string | null
          bairro?: string | null
          centro_custo?: string | null
          cep?: string | null
          cidade?: string | null
          cod_categoria?: string | null
          complemento?: string | null
          controle_emissao?: boolean | null
          cpf_cnpj?: string | null
          data_aprovacao_pagamento?: string | null
          email?: string | null
          emissao_nota_produto?: boolean | null
          emissao_nota_servico?: boolean | null
          estado?: string | null
          forma_pagamento?: string | null
          id?: number
          id_conta_corrente?: string | null
          id_pedido?: string | null
          id_servico?: string | null
          logradouro?: string | null
          nome_completo?: string | null
          nota_cancelamento?: boolean | null
          numero?: string | null
          pais?: string | null
          plataforma?: string | null
          produtos?: string | null
          status_pedido?: string | null
          taxa_produto?: string | null
          taxa_servico?: string | null
          telefone?: string | null
          tipo_pessoa?: string | null
          valor_total?: string | null
        }
        Update: {
          "7 dias"?: boolean | null
          api_key?: string | null
          app_secret?: string | null
          bairro?: string | null
          centro_custo?: string | null
          cep?: string | null
          cidade?: string | null
          cod_categoria?: string | null
          complemento?: string | null
          controle_emissao?: boolean | null
          cpf_cnpj?: string | null
          data_aprovacao_pagamento?: string | null
          email?: string | null
          emissao_nota_produto?: boolean | null
          emissao_nota_servico?: boolean | null
          estado?: string | null
          forma_pagamento?: string | null
          id?: number
          id_conta_corrente?: string | null
          id_pedido?: string | null
          id_servico?: string | null
          logradouro?: string | null
          nome_completo?: string | null
          nota_cancelamento?: boolean | null
          numero?: string | null
          pais?: string | null
          plataforma?: string | null
          produtos?: string | null
          status_pedido?: string | null
          taxa_produto?: string | null
          taxa_servico?: string | null
          telefone?: string | null
          tipo_pessoa?: string | null
          valor_total?: string | null
        }
        Relationships: []
      }
      webhook_test_log: {
        Row: {
          error_message: string | null
          execution_id: string | null
          id: number
          response_body: string | null
          status: string | null
          timestamp: string | null
        }
        Insert: {
          error_message?: string | null
          execution_id?: string | null
          id?: number
          response_body?: string | null
          status?: string | null
          timestamp?: string | null
        }
        Update: {
          error_message?: string | null
          execution_id?: string | null
          id?: number
          response_body?: string | null
          status?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      contas_pagar_exo_loteamento_v: {
        Row: {
          content: string | null
          embedding: string | null
          id: number | null
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Relationships: []
      }
      contas_pagar_exo_loteamentos_v: {
        Row: {
          content: string | null
          embedding: string | null
          id: number | null
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Relationships: []
      }
      contas_pagar_exo_participacoes_v: {
        Row: {
          content: string | null
          embedding: string | null
          id: number | null
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Relationships: []
      }
      contas_pagar_oliveira_participacoes_v: {
        Row: {
          content: string | null
          embedding: string | null
          id: number | null
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Relationships: []
      }
      contas_receber_exo_loteamentos_v: {
        Row: {
          content: string | null
          embedding: string | null
          id: number | null
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Relationships: []
      }
      contas_receber_exo_participacoes_v: {
        Row: {
          content: string | null
          embedding: string | null
          id: number | null
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Relationships: []
      }
      contas_receber_oliveira_participacoes_v: {
        Row: {
          content: string | null
          embedding: string | null
          id: number | null
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number | null
          metadata?: Json | null
        }
        Relationships: []
      }
    }
    Functions: {
      match_categorias_marcos_paulo: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_categorias_plx: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_categorias_tria: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_pagar_exo_loteamentos: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_pagar_exo_participacoes: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_pagar_oliveira_participacoes: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_pagar_pf: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_pagar_plx: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_pagar_tria: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_receber_exo_loteamentos: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_receber_exo_participacoes: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_receber_oliveira_participacoes: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_receber_pf: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_receber_plx: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_contas_receber_tria: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_conciliador_marcos_paulo: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_contas_pagar_exo_loteamento_v: {
        Args: {
          match_count?: number
          match_threshold?: number
          query_embedding: string
        }
        Returns: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }[]
        SetofOptions: {
          from: "*"
          to: "conciliador_contas_pagar_exo_loteamentos"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      match_contas_pagar_exo_loteamentos: {
        Args: { filter: Json; match_count: number; query_embedding: string }
        Returns: Database["public"]["CompositeTypes"]["match_result_pagar_exo_loteamentos"][]
        SetofOptions: {
          from: "*"
          to: "match_result_pagar_exo_loteamentos"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      match_contas_pagar_exo_participacoes: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_contas_pagar_exo_participacoes_v: {
        Args: {
          match_count?: number
          match_threshold?: number
          query_embedding: string
        }
        Returns: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }[]
        SetofOptions: {
          from: "*"
          to: "conciliador_contas_pagar_exo_participacoes"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      match_contas_pagar_oliveira_participacoes: {
        Args: { filter: Json; match_count: number; query_embedding: string }
        Returns: Database["public"]["CompositeTypes"]["match_result_oliveira"][]
        SetofOptions: {
          from: "*"
          to: "match_result_oliveira"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      match_contas_pagar_oliveira_participacoes_v: {
        Args: {
          match_count?: number
          match_threshold?: number
          query_embedding: string
        }
        Returns: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }[]
        SetofOptions: {
          from: "*"
          to: "conciliador_contas_pagar_oliveira_participacoes"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      match_contas_receber_exo_loteamentos: {
        Args: { filter: Json; match_count: number; query_embedding: string }
        Returns: Database["public"]["CompositeTypes"]["match_result_receber_exo_loteamentos"][]
        SetofOptions: {
          from: "*"
          to: "match_result_receber_exo_loteamentos"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      match_contas_receber_exo_participacoes: {
        Args: { filter: Json; match_count: number; query_embedding: string }
        Returns: Database["public"]["CompositeTypes"]["match_result_receber_exo_participacoes"][]
        SetofOptions: {
          from: "*"
          to: "match_result_receber_exo_participacoes"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      match_contas_receber_oliveira_participacoes: {
        Args: { filter: Json; match_count: number; query_embedding: string }
        Returns: Database["public"]["CompositeTypes"]["match_result_receber_oliveira"][]
        SetofOptions: {
          from: "*"
          to: "match_result_receber_oliveira"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      match_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_machine_marcos_paulo: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      match_omie_marcos: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      match_result_oliveira: {
        id: number | null
        content: string | null
        metadata: Json | null
        embedding: string | null
        similarity: number | null
      }
      match_result_pagar_exo_loteamentos: {
        id: number | null
        content: string | null
        metadata: Json | null
        embedding: string | null
        similarity: number | null
      }
      match_result_receber_exo_loteamentos: {
        id: number | null
        content: string | null
        metadata: Json | null
        embedding: string | null
        similarity: number | null
      }
      match_result_receber_exo_participacoes: {
        id: number | null
        content: string | null
        metadata: Json | null
        embedding: string | null
        similarity: number | null
      }
      match_result_receber_oliveira: {
        id: number | null
        content: string | null
        metadata: Json | null
        embedding: string | null
        similarity: number | null
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
