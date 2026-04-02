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
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      account_deletion_requests: {
        Row: {
          account_id: string
          cancelled_at: string | null
          created_at: string | null
          deleted_at: string | null
          deletion_scheduled_for: string
          id: string
          is_cancelled: boolean | null
          is_deleted: boolean | null
          reason: string | null
          requested_at: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          account_id: string
          cancelled_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          deletion_scheduled_for: string
          id?: string
          is_cancelled?: boolean | null
          is_deleted?: boolean | null
          reason?: string | null
          requested_at?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          account_id?: string
          cancelled_at?: string | null
          created_at?: string | null
          deleted_at?: string | null
          deletion_scheduled_for?: string
          id?: string
          is_cancelled?: boolean | null
          is_deleted?: boolean | null
          reason?: string | null
          requested_at?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      admin_actions_log: {
        Row: {
          action_type: string
          admin_user_id: string
          created_at: string | null
          details: Json | null
          id: string
          target_user_id: string | null
        }
        Insert: {
          action_type: string
          admin_user_id: string
          created_at?: string | null
          details?: Json | null
          id?: string
          target_user_id?: string | null
        }
        Update: {
          action_type?: string
          admin_user_id?: string
          created_at?: string | null
          details?: Json | null
          id?: string
          target_user_id?: string | null
        }
        Relationships: []
      }
      agent_instances: {
        Row: {
          account_id: string
          avatar: string | null
          avatar_color: string | null
          created_at: string | null
          credential_mappings: Json | null
          custom_system_prompt: string | null
          description: string | null
          instance_id: string
          is_active: boolean | null
          is_default: boolean | null
          name: string
          template_id: string | null
          updated_at: string | null
        }
        Insert: {
          account_id: string
          avatar?: string | null
          avatar_color?: string | null
          created_at?: string | null
          credential_mappings?: Json | null
          custom_system_prompt?: string | null
          description?: string | null
          instance_id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          name: string
          template_id?: string | null
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          avatar?: string | null
          avatar_color?: string | null
          created_at?: string | null
          credential_mappings?: Json | null
          custom_system_prompt?: string | null
          description?: string | null
          instance_id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          name?: string
          template_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_instances_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "agent_templates"
            referencedColumns: ["template_id"]
          },
        ]
      }
      agent_knowledge_entry_assignments: {
        Row: {
          account_id: string
          agent_id: string
          assigned_at: string | null
          assignment_id: string
          enabled: boolean | null
          entry_id: string
        }
        Insert: {
          account_id: string
          agent_id: string
          assigned_at?: string | null
          assignment_id?: string
          enabled?: boolean | null
          entry_id: string
        }
        Update: {
          account_id?: string
          agent_id?: string
          assigned_at?: string | null
          assignment_id?: string
          enabled?: boolean | null
          entry_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_knowledge_entry_assignments_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
        ]
      }
      agent_runs: {
        Row: {
          agent_id: string | null
          agent_version_id: string | null
          completed_at: string | null
          created_at: string
          error: string | null
          id: string
          metadata: Json | null
          started_at: string
          status: string
          thread_id: string
          updated_at: string
        }
        Insert: {
          agent_id?: string | null
          agent_version_id?: string | null
          completed_at?: string | null
          created_at?: string
          error?: string | null
          id?: string
          metadata?: Json | null
          started_at?: string
          status?: string
          thread_id: string
          updated_at?: string
        }
        Update: {
          agent_id?: string | null
          agent_version_id?: string | null
          completed_at?: string | null
          created_at?: string
          error?: string | null
          id?: string
          metadata?: Json | null
          started_at?: string
          status?: string
          thread_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_runs_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
          {
            foreignKeyName: "agent_runs_agent_version_id_fkey"
            columns: ["agent_version_id"]
            isOneToOne: false
            referencedRelation: "agent_versions"
            referencedColumns: ["version_id"]
          },
          {
            foreignKeyName: "agent_runs_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      agent_templates: {
        Row: {
          categories: string[] | null
          config: Json | null
          created_at: string | null
          creator_id: string
          description: string | null
          download_count: number | null
          icon_background: string
          icon_color: string
          icon_name: string
          is_kortix_team: boolean | null
          is_public: boolean | null
          marketplace_published_at: string | null
          metadata: Json | null
          name: string
          profile_image_url: string | null
          tags: string[] | null
          template_id: string
          updated_at: string | null
          usage_examples: Json | null
        }
        Insert: {
          categories?: string[] | null
          config?: Json | null
          created_at?: string | null
          creator_id: string
          description?: string | null
          download_count?: number | null
          icon_background?: string
          icon_color?: string
          icon_name: string
          is_kortix_team?: boolean | null
          is_public?: boolean | null
          marketplace_published_at?: string | null
          metadata?: Json | null
          name: string
          profile_image_url?: string | null
          tags?: string[] | null
          template_id?: string
          updated_at?: string | null
          usage_examples?: Json | null
        }
        Update: {
          categories?: string[] | null
          config?: Json | null
          created_at?: string | null
          creator_id?: string
          description?: string | null
          download_count?: number | null
          icon_background?: string
          icon_color?: string
          icon_name?: string
          is_kortix_team?: boolean | null
          is_public?: boolean | null
          marketplace_published_at?: string | null
          metadata?: Json | null
          name?: string
          profile_image_url?: string | null
          tags?: string[] | null
          template_id?: string
          updated_at?: string | null
          usage_examples?: Json | null
        }
        Relationships: []
      }
      agent_templates_backup: {
        Row: {
          agentpress_tools: Json | null
          avatar: string | null
          avatar_color: string | null
          created_at: string | null
          creator_id: string | null
          description: string | null
          download_count: number | null
          is_kortix_team: boolean | null
          is_public: boolean | null
          marketplace_published_at: string | null
          mcp_requirements: Json | null
          metadata: Json | null
          name: string | null
          system_prompt: string | null
          tags: string[] | null
          template_id: string | null
          updated_at: string | null
        }
        Insert: {
          agentpress_tools?: Json | null
          avatar?: string | null
          avatar_color?: string | null
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          download_count?: number | null
          is_kortix_team?: boolean | null
          is_public?: boolean | null
          marketplace_published_at?: string | null
          mcp_requirements?: Json | null
          metadata?: Json | null
          name?: string | null
          system_prompt?: string | null
          tags?: string[] | null
          template_id?: string | null
          updated_at?: string | null
        }
        Update: {
          agentpress_tools?: Json | null
          avatar?: string | null
          avatar_color?: string | null
          created_at?: string | null
          creator_id?: string | null
          description?: string | null
          download_count?: number | null
          is_kortix_team?: boolean | null
          is_public?: boolean | null
          marketplace_published_at?: string | null
          mcp_requirements?: Json | null
          metadata?: Json | null
          name?: string | null
          system_prompt?: string | null
          tags?: string[] | null
          template_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      agent_triggers: {
        Row: {
          agent_id: string
          config: Json
          created_at: string | null
          description: string | null
          execution_type: string | null
          is_active: boolean | null
          name: string
          trigger_id: string
          trigger_type: Database["public"]["Enums"]["agent_trigger_type"]
          updated_at: string | null
          workflow_id: string | null
        }
        Insert: {
          agent_id: string
          config?: Json
          created_at?: string | null
          description?: string | null
          execution_type?: string | null
          is_active?: boolean | null
          name: string
          trigger_id?: string
          trigger_type: Database["public"]["Enums"]["agent_trigger_type"]
          updated_at?: string | null
          workflow_id?: string | null
        }
        Update: {
          agent_id?: string
          config?: Json
          created_at?: string | null
          description?: string | null
          execution_type?: string | null
          is_active?: boolean | null
          name?: string
          trigger_id?: string
          trigger_type?: Database["public"]["Enums"]["agent_trigger_type"]
          updated_at?: string | null
          workflow_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_triggers_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
        ]
      }
      agent_versions: {
        Row: {
          agent_id: string
          change_description: string | null
          config: Json
          created_at: string | null
          created_by: string | null
          is_active: boolean | null
          previous_version_id: string | null
          updated_at: string | null
          version_id: string
          version_name: string
          version_number: number
        }
        Insert: {
          agent_id: string
          change_description?: string | null
          config?: Json
          created_at?: string | null
          created_by?: string | null
          is_active?: boolean | null
          previous_version_id?: string | null
          updated_at?: string | null
          version_id?: string
          version_name: string
          version_number: number
        }
        Update: {
          agent_id?: string
          change_description?: string | null
          config?: Json
          created_at?: string | null
          created_by?: string | null
          is_active?: boolean | null
          previous_version_id?: string | null
          updated_at?: string | null
          version_id?: string
          version_name?: string
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "agent_versions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
          {
            foreignKeyName: "agent_versions_previous_version_id_fkey"
            columns: ["previous_version_id"]
            isOneToOne: false
            referencedRelation: "agent_versions"
            referencedColumns: ["version_id"]
          },
        ]
      }
      agent_workflows_backup: {
        Row: {
          agent_id: string | null
          created_at: string | null
          description: string | null
          id: string
          is_default: boolean | null
          name: string | null
          status: Database["public"]["Enums"]["agent_workflow_status"] | null
          steps: Json | null
          trigger_phrase: string | null
          updated_at: string | null
        }
        Insert: {
          agent_id?: string | null
          created_at?: string | null
          description?: string | null
          id: string
          is_default?: boolean | null
          name?: string | null
          status?: Database["public"]["Enums"]["agent_workflow_status"] | null
          steps?: Json | null
          trigger_phrase?: string | null
          updated_at?: string | null
        }
        Update: {
          agent_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          name?: string | null
          status?: Database["public"]["Enums"]["agent_workflow_status"] | null
          steps?: Json | null
          trigger_phrase?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      agents: {
        Row: {
          account_id: string
          agent_id: string
          created_at: string | null
          current_version_id: string | null
          description: string | null
          icon_background: string
          icon_color: string
          icon_name: string
          is_default: boolean | null
          is_public: boolean | null
          metadata: Json | null
          name: string
          profile_image_url: string | null
          tags: string[] | null
          updated_at: string | null
          version_count: number | null
        }
        Insert: {
          account_id: string
          agent_id?: string
          created_at?: string | null
          current_version_id?: string | null
          description?: string | null
          icon_background?: string
          icon_color?: string
          icon_name: string
          is_default?: boolean | null
          is_public?: boolean | null
          metadata?: Json | null
          name: string
          profile_image_url?: string | null
          tags?: string[] | null
          updated_at?: string | null
          version_count?: number | null
        }
        Update: {
          account_id?: string
          agent_id?: string
          created_at?: string | null
          current_version_id?: string | null
          description?: string | null
          icon_background?: string
          icon_color?: string
          icon_name?: string
          is_default?: boolean | null
          is_public?: boolean | null
          metadata?: Json | null
          name?: string
          profile_image_url?: string | null
          tags?: string[] | null
          updated_at?: string | null
          version_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "agents_current_version_id_fkey"
            columns: ["current_version_id"]
            isOneToOne: false
            referencedRelation: "agent_versions"
            referencedColumns: ["version_id"]
          },
        ]
      }
      agents_backup_cleanup_20250729: {
        Row: {
          account_id: string | null
          agent_id: string | null
          created_at: string | null
          description: string | null
          download_count: number | null
          is_default: boolean | null
          is_public: boolean | null
          marketplace_published_at: string | null
          metadata: Json | null
          name: string | null
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          account_id?: string | null
          agent_id?: string | null
          created_at?: string | null
          description?: string | null
          download_count?: number | null
          is_default?: boolean | null
          is_public?: boolean | null
          marketplace_published_at?: string | null
          metadata?: Json | null
          name?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          account_id?: string | null
          agent_id?: string | null
          created_at?: string | null
          description?: string | null
          download_count?: number | null
          is_default?: boolean | null
          is_public?: boolean | null
          marketplace_published_at?: string | null
          metadata?: Json | null
          name?: string | null
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      analise_1: {
        Row: {
          data_analise: string | null
          data_decisao: string | null
          decisao: string | null
          documento_fonte: string | null
          id: number
          juiz: string
          numero_processo: string
          pontos_fortes_defesa: string | null
          pontos_vulnerabilidade: string | null
          q1_2_fundamento: string | null
          q1_2_momento_processual: string | null
          q1_2_observacoes: string | null
          q1_3_fundamentacao_juridica: string | null
          q1_3_fundamento: string | null
          q1_3_observacoes: string | null
          q1_4_extensao_desconsideracao: string | null
          q1_4_fundamento: string | null
          q1_4_observacoes: string | null
          q10_1_fundamento: string | null
          q10_1_grupo_economico_fato: string | null
          q10_1_observacoes: string | null
          q10_2_fundamento: string | null
          q10_2_observacoes: string | null
          q10_2_requisitos_grupo_economico: string | null
          q10_3_fundamento: string | null
          q10_3_observacoes: string | null
          q10_3_prova_grupo_economico: string | null
          q13_1_beneficio_ordem: string | null
          q13_1_fundamento: string | null
          q13_1_observacoes: string | null
          q13_2_fundamento: string | null
          q13_2_observacoes: string | null
          q13_2_onus_insuficiencia: string | null
          q13_3_fundamento: string | null
          q13_3_observacoes: string | null
          q13_3_pesquisas_previas: string | null
          q14_1_fundamento: string | null
          q14_1_observacoes: string | null
          q14_1_substituicao_penhora: string | null
          q14_2_fundamento: string | null
          q14_2_limitacao_penhora: string | null
          q14_2_observacoes: string | null
          q14_3_fundamento: string | null
          q14_3_observacoes: string | null
          q14_3_requisitos_substituicao: string | null
          q16_1_fundamento: string | null
          q16_1_incentivo_composicao: string | null
          q16_1_observacoes: string | null
          q16_2_fundamento: string | null
          q16_2_observacoes: string | null
          q16_2_termos_acordos: string | null
          q16_3_fundamento: string | null
          q16_3_momento_adequado_acordo: string | null
          q16_3_observacoes: string | null
          q17_1_fundamento: string | null
          q17_1_observacoes: string | null
          q17_1_pedido_suspensao: string | null
          q17_2_decisao_suspensao: string | null
          q17_2_fundamento: string | null
          q17_2_observacoes: string | null
          q17_3_fundamento: string | null
          q17_3_observacoes: string | null
          q17_3_recurso_decisao: string | null
          q17_4_fundamento: string | null
          q17_4_observacoes: string | null
          q17_4_pertinencia_tematica: string | null
          q18_1_alegacao_incompetencia: string | null
          q18_1_fundamento: string | null
          q18_1_observacoes: string | null
          q18_2_analise_questoes_imobiliarias: string | null
          q18_2_fundamento: string | null
          q18_2_observacoes: string | null
          q18_3_existencia_coisa_julgada: string | null
          q18_3_fundamento: string | null
          q18_3_observacoes: string | null
          q18_4_fundamento: string | null
          q18_4_observacoes: string | null
          q18_4_reconhecimento_coisa_julgada: string | null
          q18_5_conflito_decisoes: string | null
          q18_5_fundamento: string | null
          q18_5_observacoes: string | null
          q19_1_elementos_inclusao_terceiro: string | null
          q19_1_fundamento: string | null
          q19_1_observacoes: string | null
          q19_10_fundamento: string | null
          q19_10_observacoes: string | null
          q19_10_teorias_aplicadas: string | null
          q19_2_fundamento: string | null
          q19_2_mera_aquisicao: string | null
          q19_2_observacoes: string | null
          q19_3_fundamento: string | null
          q19_3_observacoes: string | null
          q19_3_pagamentos_credores: string | null
          q19_4_fundamento: string | null
          q19_4_observacoes: string | null
          q19_4_presuncao_fraude: string | null
          q19_5_evidencias_testa_ferro: string | null
          q19_5_fundamento: string | null
          q19_5_observacoes: string | null
          q19_6_fluxo_reverso: string | null
          q19_6_fundamento: string | null
          q19_6_observacoes: string | null
          q19_7_fraude_execucao_sem_vinculo: string | null
          q19_7_fundamento: string | null
          q19_7_observacoes: string | null
          q19_8_clausulas_direcionamento: string | null
          q19_8_fundamento: string | null
          q19_8_observacoes: string | null
          q19_9_assuncao_sistematica: string | null
          q19_9_fundamento: string | null
          q19_9_observacoes: string | null
          q2_1_fundamento: string | null
          q2_1_observacoes: string | null
          q2_1_standard_probatorio: string | null
          q2_2_fundamento: string | null
          q2_2_observacoes: string | null
          q2_2_tipos_prova_valorados: string | null
          q2_3_fundamento: string | null
          q2_3_observacoes: string | null
          q2_3_prova_emprestada: string | null
          q2_4_fundamento: string | null
          q2_4_inversao_onus_prova: string | null
          q2_4_observacoes: string | null
          q3_1_fundamento: string | null
          q3_1_observacoes: string | null
          q3_1_protecao_terceiro_boa_fe: string | null
          q3_2_fundamento: string | null
          q3_2_observacoes: string | null
          q3_2_requisitos_boa_fe: string | null
          q3_3_fundamento: string | null
          q3_3_momento_afericao_boa_fe: string | null
          q3_3_observacoes: string | null
          q3_4_fundamento: string | null
          q3_4_observacoes: string | null
          q3_4_onus_diligencia_previa: string | null
          recomendacoes_estrategicas: string | null
          sintese_perfil_decisorio: string | null
          vara_tribunal: string | null
        }
        Insert: {
          data_analise?: string | null
          data_decisao?: string | null
          decisao?: string | null
          documento_fonte?: string | null
          id?: number
          juiz: string
          numero_processo: string
          pontos_fortes_defesa?: string | null
          pontos_vulnerabilidade?: string | null
          q1_2_fundamento?: string | null
          q1_2_momento_processual?: string | null
          q1_2_observacoes?: string | null
          q1_3_fundamentacao_juridica?: string | null
          q1_3_fundamento?: string | null
          q1_3_observacoes?: string | null
          q1_4_extensao_desconsideracao?: string | null
          q1_4_fundamento?: string | null
          q1_4_observacoes?: string | null
          q10_1_fundamento?: string | null
          q10_1_grupo_economico_fato?: string | null
          q10_1_observacoes?: string | null
          q10_2_fundamento?: string | null
          q10_2_observacoes?: string | null
          q10_2_requisitos_grupo_economico?: string | null
          q10_3_fundamento?: string | null
          q10_3_observacoes?: string | null
          q10_3_prova_grupo_economico?: string | null
          q13_1_beneficio_ordem?: string | null
          q13_1_fundamento?: string | null
          q13_1_observacoes?: string | null
          q13_2_fundamento?: string | null
          q13_2_observacoes?: string | null
          q13_2_onus_insuficiencia?: string | null
          q13_3_fundamento?: string | null
          q13_3_observacoes?: string | null
          q13_3_pesquisas_previas?: string | null
          q14_1_fundamento?: string | null
          q14_1_observacoes?: string | null
          q14_1_substituicao_penhora?: string | null
          q14_2_fundamento?: string | null
          q14_2_limitacao_penhora?: string | null
          q14_2_observacoes?: string | null
          q14_3_fundamento?: string | null
          q14_3_observacoes?: string | null
          q14_3_requisitos_substituicao?: string | null
          q16_1_fundamento?: string | null
          q16_1_incentivo_composicao?: string | null
          q16_1_observacoes?: string | null
          q16_2_fundamento?: string | null
          q16_2_observacoes?: string | null
          q16_2_termos_acordos?: string | null
          q16_3_fundamento?: string | null
          q16_3_momento_adequado_acordo?: string | null
          q16_3_observacoes?: string | null
          q17_1_fundamento?: string | null
          q17_1_observacoes?: string | null
          q17_1_pedido_suspensao?: string | null
          q17_2_decisao_suspensao?: string | null
          q17_2_fundamento?: string | null
          q17_2_observacoes?: string | null
          q17_3_fundamento?: string | null
          q17_3_observacoes?: string | null
          q17_3_recurso_decisao?: string | null
          q17_4_fundamento?: string | null
          q17_4_observacoes?: string | null
          q17_4_pertinencia_tematica?: string | null
          q18_1_alegacao_incompetencia?: string | null
          q18_1_fundamento?: string | null
          q18_1_observacoes?: string | null
          q18_2_analise_questoes_imobiliarias?: string | null
          q18_2_fundamento?: string | null
          q18_2_observacoes?: string | null
          q18_3_existencia_coisa_julgada?: string | null
          q18_3_fundamento?: string | null
          q18_3_observacoes?: string | null
          q18_4_fundamento?: string | null
          q18_4_observacoes?: string | null
          q18_4_reconhecimento_coisa_julgada?: string | null
          q18_5_conflito_decisoes?: string | null
          q18_5_fundamento?: string | null
          q18_5_observacoes?: string | null
          q19_1_elementos_inclusao_terceiro?: string | null
          q19_1_fundamento?: string | null
          q19_1_observacoes?: string | null
          q19_10_fundamento?: string | null
          q19_10_observacoes?: string | null
          q19_10_teorias_aplicadas?: string | null
          q19_2_fundamento?: string | null
          q19_2_mera_aquisicao?: string | null
          q19_2_observacoes?: string | null
          q19_3_fundamento?: string | null
          q19_3_observacoes?: string | null
          q19_3_pagamentos_credores?: string | null
          q19_4_fundamento?: string | null
          q19_4_observacoes?: string | null
          q19_4_presuncao_fraude?: string | null
          q19_5_evidencias_testa_ferro?: string | null
          q19_5_fundamento?: string | null
          q19_5_observacoes?: string | null
          q19_6_fluxo_reverso?: string | null
          q19_6_fundamento?: string | null
          q19_6_observacoes?: string | null
          q19_7_fraude_execucao_sem_vinculo?: string | null
          q19_7_fundamento?: string | null
          q19_7_observacoes?: string | null
          q19_8_clausulas_direcionamento?: string | null
          q19_8_fundamento?: string | null
          q19_8_observacoes?: string | null
          q19_9_assuncao_sistematica?: string | null
          q19_9_fundamento?: string | null
          q19_9_observacoes?: string | null
          q2_1_fundamento?: string | null
          q2_1_observacoes?: string | null
          q2_1_standard_probatorio?: string | null
          q2_2_fundamento?: string | null
          q2_2_observacoes?: string | null
          q2_2_tipos_prova_valorados?: string | null
          q2_3_fundamento?: string | null
          q2_3_observacoes?: string | null
          q2_3_prova_emprestada?: string | null
          q2_4_fundamento?: string | null
          q2_4_inversao_onus_prova?: string | null
          q2_4_observacoes?: string | null
          q3_1_fundamento?: string | null
          q3_1_observacoes?: string | null
          q3_1_protecao_terceiro_boa_fe?: string | null
          q3_2_fundamento?: string | null
          q3_2_observacoes?: string | null
          q3_2_requisitos_boa_fe?: string | null
          q3_3_fundamento?: string | null
          q3_3_momento_afericao_boa_fe?: string | null
          q3_3_observacoes?: string | null
          q3_4_fundamento?: string | null
          q3_4_observacoes?: string | null
          q3_4_onus_diligencia_previa?: string | null
          recomendacoes_estrategicas?: string | null
          sintese_perfil_decisorio?: string | null
          vara_tribunal?: string | null
        }
        Update: {
          data_analise?: string | null
          data_decisao?: string | null
          decisao?: string | null
          documento_fonte?: string | null
          id?: number
          juiz?: string
          numero_processo?: string
          pontos_fortes_defesa?: string | null
          pontos_vulnerabilidade?: string | null
          q1_2_fundamento?: string | null
          q1_2_momento_processual?: string | null
          q1_2_observacoes?: string | null
          q1_3_fundamentacao_juridica?: string | null
          q1_3_fundamento?: string | null
          q1_3_observacoes?: string | null
          q1_4_extensao_desconsideracao?: string | null
          q1_4_fundamento?: string | null
          q1_4_observacoes?: string | null
          q10_1_fundamento?: string | null
          q10_1_grupo_economico_fato?: string | null
          q10_1_observacoes?: string | null
          q10_2_fundamento?: string | null
          q10_2_observacoes?: string | null
          q10_2_requisitos_grupo_economico?: string | null
          q10_3_fundamento?: string | null
          q10_3_observacoes?: string | null
          q10_3_prova_grupo_economico?: string | null
          q13_1_beneficio_ordem?: string | null
          q13_1_fundamento?: string | null
          q13_1_observacoes?: string | null
          q13_2_fundamento?: string | null
          q13_2_observacoes?: string | null
          q13_2_onus_insuficiencia?: string | null
          q13_3_fundamento?: string | null
          q13_3_observacoes?: string | null
          q13_3_pesquisas_previas?: string | null
          q14_1_fundamento?: string | null
          q14_1_observacoes?: string | null
          q14_1_substituicao_penhora?: string | null
          q14_2_fundamento?: string | null
          q14_2_limitacao_penhora?: string | null
          q14_2_observacoes?: string | null
          q14_3_fundamento?: string | null
          q14_3_observacoes?: string | null
          q14_3_requisitos_substituicao?: string | null
          q16_1_fundamento?: string | null
          q16_1_incentivo_composicao?: string | null
          q16_1_observacoes?: string | null
          q16_2_fundamento?: string | null
          q16_2_observacoes?: string | null
          q16_2_termos_acordos?: string | null
          q16_3_fundamento?: string | null
          q16_3_momento_adequado_acordo?: string | null
          q16_3_observacoes?: string | null
          q17_1_fundamento?: string | null
          q17_1_observacoes?: string | null
          q17_1_pedido_suspensao?: string | null
          q17_2_decisao_suspensao?: string | null
          q17_2_fundamento?: string | null
          q17_2_observacoes?: string | null
          q17_3_fundamento?: string | null
          q17_3_observacoes?: string | null
          q17_3_recurso_decisao?: string | null
          q17_4_fundamento?: string | null
          q17_4_observacoes?: string | null
          q17_4_pertinencia_tematica?: string | null
          q18_1_alegacao_incompetencia?: string | null
          q18_1_fundamento?: string | null
          q18_1_observacoes?: string | null
          q18_2_analise_questoes_imobiliarias?: string | null
          q18_2_fundamento?: string | null
          q18_2_observacoes?: string | null
          q18_3_existencia_coisa_julgada?: string | null
          q18_3_fundamento?: string | null
          q18_3_observacoes?: string | null
          q18_4_fundamento?: string | null
          q18_4_observacoes?: string | null
          q18_4_reconhecimento_coisa_julgada?: string | null
          q18_5_conflito_decisoes?: string | null
          q18_5_fundamento?: string | null
          q18_5_observacoes?: string | null
          q19_1_elementos_inclusao_terceiro?: string | null
          q19_1_fundamento?: string | null
          q19_1_observacoes?: string | null
          q19_10_fundamento?: string | null
          q19_10_observacoes?: string | null
          q19_10_teorias_aplicadas?: string | null
          q19_2_fundamento?: string | null
          q19_2_mera_aquisicao?: string | null
          q19_2_observacoes?: string | null
          q19_3_fundamento?: string | null
          q19_3_observacoes?: string | null
          q19_3_pagamentos_credores?: string | null
          q19_4_fundamento?: string | null
          q19_4_observacoes?: string | null
          q19_4_presuncao_fraude?: string | null
          q19_5_evidencias_testa_ferro?: string | null
          q19_5_fundamento?: string | null
          q19_5_observacoes?: string | null
          q19_6_fluxo_reverso?: string | null
          q19_6_fundamento?: string | null
          q19_6_observacoes?: string | null
          q19_7_fraude_execucao_sem_vinculo?: string | null
          q19_7_fundamento?: string | null
          q19_7_observacoes?: string | null
          q19_8_clausulas_direcionamento?: string | null
          q19_8_fundamento?: string | null
          q19_8_observacoes?: string | null
          q19_9_assuncao_sistematica?: string | null
          q19_9_fundamento?: string | null
          q19_9_observacoes?: string | null
          q2_1_fundamento?: string | null
          q2_1_observacoes?: string | null
          q2_1_standard_probatorio?: string | null
          q2_2_fundamento?: string | null
          q2_2_observacoes?: string | null
          q2_2_tipos_prova_valorados?: string | null
          q2_3_fundamento?: string | null
          q2_3_observacoes?: string | null
          q2_3_prova_emprestada?: string | null
          q2_4_fundamento?: string | null
          q2_4_inversao_onus_prova?: string | null
          q2_4_observacoes?: string | null
          q3_1_fundamento?: string | null
          q3_1_observacoes?: string | null
          q3_1_protecao_terceiro_boa_fe?: string | null
          q3_2_fundamento?: string | null
          q3_2_observacoes?: string | null
          q3_2_requisitos_boa_fe?: string | null
          q3_3_fundamento?: string | null
          q3_3_momento_afericao_boa_fe?: string | null
          q3_3_observacoes?: string | null
          q3_4_fundamento?: string | null
          q3_4_observacoes?: string | null
          q3_4_onus_diligencia_previa?: string | null
          recomendacoes_estrategicas?: string | null
          sintese_perfil_decisorio?: string | null
          vara_tribunal?: string | null
        }
        Relationships: []
      }
      analyses: {
        Row: {
          created_at: string | null
          file_name: string | null
          id: string
          note: string | null
          page_url: string
          response: Json
          score: number | null
          status: Database["public"]["Enums"]["analysis_status"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          file_name?: string | null
          id?: string
          note?: string | null
          page_url: string
          response: Json
          score?: number | null
          status?: Database["public"]["Enums"]["analysis_status"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          file_name?: string | null
          id?: string
          note?: string | null
          page_url?: string
          response?: Json
          score?: number | null
          status?: Database["public"]["Enums"]["analysis_status"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      api_keys: {
        Row: {
          account_id: string
          created_at: string | null
          description: string | null
          expires_at: string | null
          key_id: string
          last_used_at: string | null
          public_key: string
          secret_key_hash: string
          status: Database["public"]["Enums"]["api_key_status"] | null
          title: string
        }
        Insert: {
          account_id: string
          created_at?: string | null
          description?: string | null
          expires_at?: string | null
          key_id?: string
          last_used_at?: string | null
          public_key: string
          secret_key_hash: string
          status?: Database["public"]["Enums"]["api_key_status"] | null
          title: string
        }
        Update: {
          account_id?: string
          created_at?: string | null
          description?: string | null
          expires_at?: string | null
          key_id?: string
          last_used_at?: string | null
          public_key?: string
          secret_key_hash?: string
          status?: Database["public"]["Enums"]["api_key_status"] | null
          title?: string
        }
        Relationships: []
      }
      arr_daily_churn: {
        Row: {
          churn_date: string
          created_at: string | null
          deleted_count: number | null
          downgrade_count: number | null
          id: string
          total_count: number | null
          updated_at: string | null
        }
        Insert: {
          churn_date: string
          created_at?: string | null
          deleted_count?: number | null
          downgrade_count?: number | null
          id?: string
          total_count?: number | null
          updated_at?: string | null
        }
        Update: {
          churn_date?: string
          created_at?: string | null
          deleted_count?: number | null
          downgrade_count?: number | null
          id?: string
          total_count?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      arr_monthly_actuals: {
        Row: {
          arr: number | null
          churn: number | null
          created_at: string | null
          id: string
          month_index: number
          month_name: string
          mrr: number | null
          new_paid: number | null
          overrides: Json | null
          platform: string
          signups: number | null
          subscribers: number | null
          updated_at: string | null
          views: number | null
        }
        Insert: {
          arr?: number | null
          churn?: number | null
          created_at?: string | null
          id?: string
          month_index: number
          month_name: string
          mrr?: number | null
          new_paid?: number | null
          overrides?: Json | null
          platform?: string
          signups?: number | null
          subscribers?: number | null
          updated_at?: string | null
          views?: number | null
        }
        Update: {
          arr?: number | null
          churn?: number | null
          created_at?: string | null
          id?: string
          month_index?: number
          month_name?: string
          mrr?: number | null
          new_paid?: number | null
          overrides?: Json | null
          platform?: string
          signups?: number | null
          subscribers?: number | null
          updated_at?: string | null
          views?: number | null
        }
        Relationships: []
      }
      arr_simulator_config: {
        Row: {
          arpu: number | null
          created_at: string | null
          id: string
          landing_conversion: number | null
          monthly_churn: number | null
          signup_to_paid: number | null
          starting_mrr: number | null
          starting_subs: number | null
          target_arr: number | null
          updated_at: string | null
          visitor_growth: number | null
          weekly_visitors: number | null
        }
        Insert: {
          arpu?: number | null
          created_at?: string | null
          id?: string
          landing_conversion?: number | null
          monthly_churn?: number | null
          signup_to_paid?: number | null
          starting_mrr?: number | null
          starting_subs?: number | null
          target_arr?: number | null
          updated_at?: string | null
          visitor_growth?: number | null
          weekly_visitors?: number | null
        }
        Update: {
          arpu?: number | null
          created_at?: string | null
          id?: string
          landing_conversion?: number | null
          monthly_churn?: number | null
          signup_to_paid?: number | null
          starting_mrr?: number | null
          starting_subs?: number | null
          target_arr?: number | null
          updated_at?: string | null
          visitor_growth?: number | null
          weekly_visitors?: number | null
        }
        Relationships: []
      }
      arr_weekly_actuals: {
        Row: {
          arr: number | null
          churn: number | null
          created_at: string | null
          id: string
          mrr: number | null
          new_paid: number | null
          overrides: Json | null
          platform: string
          signups: number | null
          subscribers: number | null
          updated_at: string | null
          views: number | null
          week_number: number
          week_start_date: string
        }
        Insert: {
          arr?: number | null
          churn?: number | null
          created_at?: string | null
          id?: string
          mrr?: number | null
          new_paid?: number | null
          overrides?: Json | null
          platform?: string
          signups?: number | null
          subscribers?: number | null
          updated_at?: string | null
          views?: number | null
          week_number: number
          week_start_date: string
        }
        Update: {
          arr?: number | null
          churn?: number | null
          created_at?: string | null
          id?: string
          mrr?: number | null
          new_paid?: number | null
          overrides?: Json | null
          platform?: string
          signups?: number | null
          subscribers?: number | null
          updated_at?: string | null
          views?: number | null
          week_number?: number
          week_start_date?: string
        }
        Relationships: []
      }
      audit_log: {
        Row: {
          account_id: string
          action: string
          category: string
          created_at: string | null
          details: Json | null
          id: string
          ip_address: string | null
          user_agent: string | null
        }
        Insert: {
          account_id: string
          action: string
          category: string
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: string | null
          user_agent?: string | null
        }
        Update: {
          account_id?: string
          action?: string
          category?: string
          created_at?: string | null
          details?: Json | null
          id?: string
          ip_address?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      avaliacao_qualidade_defesa: {
        Row: {
          data_analise: string | null
          data_manifestacao: string | null
          decisao: string | null
          defensor_advogado: string | null
          documento_fonte: string | null
          id: number
          justificativa_nota: string | null
          justificativa_prognostico: string | null
          lacunas_criticas: string | null
          nota_geral: number | null
          numero_processo: string
          pontos_fortes: string | null
          pontos_fracos: string | null
          prognostico: string | null
          q20_1_evidencia: string | null
          q20_1_qualidade: string | null
          q20_1_sugestao: string | null
          q20_1_suspensao_tema: string | null
          q20_10_evidencia: string | null
          q20_10_hasta_publica: string | null
          q20_10_qualidade: string | null
          q20_10_sugestao: string | null
          q20_11_evidencia: string | null
          q20_11_qualidade: string | null
          q20_11_requisitos_art50: string | null
          q20_11_sugestao: string | null
          q20_12_evidencia: string | null
          q20_12_onus_prova: string | null
          q20_12_qualidade: string | null
          q20_12_sugestao: string | null
          q20_13_evidencia: string | null
          q20_13_qualidade: string | null
          q20_13_subsidiariedade: string | null
          q20_13_sugestao: string | null
          q20_14_evidencia: string | null
          q20_14_qualidade: string | null
          q20_14_sugestao: string | null
          q20_14_tema_1232_stf: string | null
          q20_15_evidencia: string | null
          q20_15_qualidade: string | null
          q20_15_requisitos_fraude: string | null
          q20_15_sugestao: string | null
          q20_16_evidencia: string | null
          q20_16_marco_temporal: string | null
          q20_16_qualidade: string | null
          q20_16_sugestao: string | null
          q20_17_evidencia: string | null
          q20_17_penhora_registrada: string | null
          q20_17_qualidade: string | null
          q20_17_sugestao: string | null
          q20_18_boa_fe_adquirente: string | null
          q20_18_evidencia: string | null
          q20_18_qualidade: string | null
          q20_18_sugestao: string | null
          q20_19_evidencia: string | null
          q20_19_legitimidade_pagamentos: string | null
          q20_19_qualidade: string | null
          q20_19_sugestao: string | null
          q20_2_evidencia: string | null
          q20_2_incompetencia: string | null
          q20_2_qualidade: string | null
          q20_2_sugestao: string | null
          q20_20_evidencia: string | null
          q20_20_homologacao_judicial: string | null
          q20_20_qualidade: string | null
          q20_20_sugestao: string | null
          q20_21_anuencia_credores: string | null
          q20_21_evidencia: string | null
          q20_21_qualidade: string | null
          q20_21_sugestao: string | null
          q20_22_evidencia: string | null
          q20_22_juntada_provas: string | null
          q20_22_qualidade: string | null
          q20_22_sugestao: string | null
          q20_23_evidencia: string | null
          q20_23_producao_provas: string | null
          q20_23_qualidade: string | null
          q20_23_sugestao: string | null
          q20_24_contraprova: string | null
          q20_24_evidencia: string | null
          q20_24_qualidade: string | null
          q20_24_sugestao: string | null
          q20_25_evidencia: string | null
          q20_25_precedentes_favoraveis: string | null
          q20_25_qualidade: string | null
          q20_25_sugestao: string | null
          q20_26_doutrina: string | null
          q20_26_evidencia: string | null
          q20_26_qualidade: string | null
          q20_26_sugestao: string | null
          q20_27_evidencia: string | null
          q20_27_qualidade: string | null
          q20_27_sugestao: string | null
          q20_27_sumulas_enunciados: string | null
          q20_28_beneficio_ordem: string | null
          q20_28_evidencia: string | null
          q20_28_qualidade: string | null
          q20_28_sugestao: string | null
          q20_29_evidencia: string | null
          q20_29_pesquisas_patrimoniais: string | null
          q20_29_qualidade: string | null
          q20_29_sugestao: string | null
          q20_3_coisa_julgada: string | null
          q20_3_evidencia: string | null
          q20_3_qualidade: string | null
          q20_3_sugestao: string | null
          q20_30_bens_devedora: string | null
          q20_30_evidencia: string | null
          q20_30_qualidade: string | null
          q20_30_sugestao: string | null
          q20_31_evidencia: string | null
          q20_31_principios_constitucionais: string | null
          q20_31_qualidade: string | null
          q20_31_sugestao: string | null
          q20_32_distincao_institutos: string | null
          q20_32_evidencia: string | null
          q20_32_qualidade: string | null
          q20_32_sugestao: string | null
          q20_4_evidencia: string | null
          q20_4_nulidade_processual: string | null
          q20_4_qualidade: string | null
          q20_4_sugestao: string | null
          q20_5_citacao_incidente: string | null
          q20_5_evidencia: string | null
          q20_5_qualidade: string | null
          q20_5_sugestao: string | null
          q20_6_boa_fe_terceiro: string | null
          q20_6_evidencia: string | null
          q20_6_qualidade: string | null
          q20_6_sugestao: string | null
          q20_7_ausencia_vinculo: string | null
          q20_7_evidencia: string | null
          q20_7_qualidade: string | null
          q20_7_sugestao: string | null
          q20_8_aquisicao_legitima: string | null
          q20_8_evidencia: string | null
          q20_8_qualidade: string | null
          q20_8_sugestao: string | null
          q20_9_evidencia: string | null
          q20_9_preco_mercado: string | null
          q20_9_qualidade: string | null
          q20_9_sugestao: string | null
          recomendacoes_desejaveis: string | null
          recomendacoes_importantes: string | null
          recomendacoes_urgentes: string | null
          tipo_peca: string | null
          total_explorado: number | null
          total_nao_aplicavel: number | null
          total_nao_explorado: number | null
          total_parcialmente: number | null
        }
        Insert: {
          data_analise?: string | null
          data_manifestacao?: string | null
          decisao?: string | null
          defensor_advogado?: string | null
          documento_fonte?: string | null
          id?: number
          justificativa_nota?: string | null
          justificativa_prognostico?: string | null
          lacunas_criticas?: string | null
          nota_geral?: number | null
          numero_processo: string
          pontos_fortes?: string | null
          pontos_fracos?: string | null
          prognostico?: string | null
          q20_1_evidencia?: string | null
          q20_1_qualidade?: string | null
          q20_1_sugestao?: string | null
          q20_1_suspensao_tema?: string | null
          q20_10_evidencia?: string | null
          q20_10_hasta_publica?: string | null
          q20_10_qualidade?: string | null
          q20_10_sugestao?: string | null
          q20_11_evidencia?: string | null
          q20_11_qualidade?: string | null
          q20_11_requisitos_art50?: string | null
          q20_11_sugestao?: string | null
          q20_12_evidencia?: string | null
          q20_12_onus_prova?: string | null
          q20_12_qualidade?: string | null
          q20_12_sugestao?: string | null
          q20_13_evidencia?: string | null
          q20_13_qualidade?: string | null
          q20_13_subsidiariedade?: string | null
          q20_13_sugestao?: string | null
          q20_14_evidencia?: string | null
          q20_14_qualidade?: string | null
          q20_14_sugestao?: string | null
          q20_14_tema_1232_stf?: string | null
          q20_15_evidencia?: string | null
          q20_15_qualidade?: string | null
          q20_15_requisitos_fraude?: string | null
          q20_15_sugestao?: string | null
          q20_16_evidencia?: string | null
          q20_16_marco_temporal?: string | null
          q20_16_qualidade?: string | null
          q20_16_sugestao?: string | null
          q20_17_evidencia?: string | null
          q20_17_penhora_registrada?: string | null
          q20_17_qualidade?: string | null
          q20_17_sugestao?: string | null
          q20_18_boa_fe_adquirente?: string | null
          q20_18_evidencia?: string | null
          q20_18_qualidade?: string | null
          q20_18_sugestao?: string | null
          q20_19_evidencia?: string | null
          q20_19_legitimidade_pagamentos?: string | null
          q20_19_qualidade?: string | null
          q20_19_sugestao?: string | null
          q20_2_evidencia?: string | null
          q20_2_incompetencia?: string | null
          q20_2_qualidade?: string | null
          q20_2_sugestao?: string | null
          q20_20_evidencia?: string | null
          q20_20_homologacao_judicial?: string | null
          q20_20_qualidade?: string | null
          q20_20_sugestao?: string | null
          q20_21_anuencia_credores?: string | null
          q20_21_evidencia?: string | null
          q20_21_qualidade?: string | null
          q20_21_sugestao?: string | null
          q20_22_evidencia?: string | null
          q20_22_juntada_provas?: string | null
          q20_22_qualidade?: string | null
          q20_22_sugestao?: string | null
          q20_23_evidencia?: string | null
          q20_23_producao_provas?: string | null
          q20_23_qualidade?: string | null
          q20_23_sugestao?: string | null
          q20_24_contraprova?: string | null
          q20_24_evidencia?: string | null
          q20_24_qualidade?: string | null
          q20_24_sugestao?: string | null
          q20_25_evidencia?: string | null
          q20_25_precedentes_favoraveis?: string | null
          q20_25_qualidade?: string | null
          q20_25_sugestao?: string | null
          q20_26_doutrina?: string | null
          q20_26_evidencia?: string | null
          q20_26_qualidade?: string | null
          q20_26_sugestao?: string | null
          q20_27_evidencia?: string | null
          q20_27_qualidade?: string | null
          q20_27_sugestao?: string | null
          q20_27_sumulas_enunciados?: string | null
          q20_28_beneficio_ordem?: string | null
          q20_28_evidencia?: string | null
          q20_28_qualidade?: string | null
          q20_28_sugestao?: string | null
          q20_29_evidencia?: string | null
          q20_29_pesquisas_patrimoniais?: string | null
          q20_29_qualidade?: string | null
          q20_29_sugestao?: string | null
          q20_3_coisa_julgada?: string | null
          q20_3_evidencia?: string | null
          q20_3_qualidade?: string | null
          q20_3_sugestao?: string | null
          q20_30_bens_devedora?: string | null
          q20_30_evidencia?: string | null
          q20_30_qualidade?: string | null
          q20_30_sugestao?: string | null
          q20_31_evidencia?: string | null
          q20_31_principios_constitucionais?: string | null
          q20_31_qualidade?: string | null
          q20_31_sugestao?: string | null
          q20_32_distincao_institutos?: string | null
          q20_32_evidencia?: string | null
          q20_32_qualidade?: string | null
          q20_32_sugestao?: string | null
          q20_4_evidencia?: string | null
          q20_4_nulidade_processual?: string | null
          q20_4_qualidade?: string | null
          q20_4_sugestao?: string | null
          q20_5_citacao_incidente?: string | null
          q20_5_evidencia?: string | null
          q20_5_qualidade?: string | null
          q20_5_sugestao?: string | null
          q20_6_boa_fe_terceiro?: string | null
          q20_6_evidencia?: string | null
          q20_6_qualidade?: string | null
          q20_6_sugestao?: string | null
          q20_7_ausencia_vinculo?: string | null
          q20_7_evidencia?: string | null
          q20_7_qualidade?: string | null
          q20_7_sugestao?: string | null
          q20_8_aquisicao_legitima?: string | null
          q20_8_evidencia?: string | null
          q20_8_qualidade?: string | null
          q20_8_sugestao?: string | null
          q20_9_evidencia?: string | null
          q20_9_preco_mercado?: string | null
          q20_9_qualidade?: string | null
          q20_9_sugestao?: string | null
          recomendacoes_desejaveis?: string | null
          recomendacoes_importantes?: string | null
          recomendacoes_urgentes?: string | null
          tipo_peca?: string | null
          total_explorado?: number | null
          total_nao_aplicavel?: number | null
          total_nao_explorado?: number | null
          total_parcialmente?: number | null
        }
        Update: {
          data_analise?: string | null
          data_manifestacao?: string | null
          decisao?: string | null
          defensor_advogado?: string | null
          documento_fonte?: string | null
          id?: number
          justificativa_nota?: string | null
          justificativa_prognostico?: string | null
          lacunas_criticas?: string | null
          nota_geral?: number | null
          numero_processo?: string
          pontos_fortes?: string | null
          pontos_fracos?: string | null
          prognostico?: string | null
          q20_1_evidencia?: string | null
          q20_1_qualidade?: string | null
          q20_1_sugestao?: string | null
          q20_1_suspensao_tema?: string | null
          q20_10_evidencia?: string | null
          q20_10_hasta_publica?: string | null
          q20_10_qualidade?: string | null
          q20_10_sugestao?: string | null
          q20_11_evidencia?: string | null
          q20_11_qualidade?: string | null
          q20_11_requisitos_art50?: string | null
          q20_11_sugestao?: string | null
          q20_12_evidencia?: string | null
          q20_12_onus_prova?: string | null
          q20_12_qualidade?: string | null
          q20_12_sugestao?: string | null
          q20_13_evidencia?: string | null
          q20_13_qualidade?: string | null
          q20_13_subsidiariedade?: string | null
          q20_13_sugestao?: string | null
          q20_14_evidencia?: string | null
          q20_14_qualidade?: string | null
          q20_14_sugestao?: string | null
          q20_14_tema_1232_stf?: string | null
          q20_15_evidencia?: string | null
          q20_15_qualidade?: string | null
          q20_15_requisitos_fraude?: string | null
          q20_15_sugestao?: string | null
          q20_16_evidencia?: string | null
          q20_16_marco_temporal?: string | null
          q20_16_qualidade?: string | null
          q20_16_sugestao?: string | null
          q20_17_evidencia?: string | null
          q20_17_penhora_registrada?: string | null
          q20_17_qualidade?: string | null
          q20_17_sugestao?: string | null
          q20_18_boa_fe_adquirente?: string | null
          q20_18_evidencia?: string | null
          q20_18_qualidade?: string | null
          q20_18_sugestao?: string | null
          q20_19_evidencia?: string | null
          q20_19_legitimidade_pagamentos?: string | null
          q20_19_qualidade?: string | null
          q20_19_sugestao?: string | null
          q20_2_evidencia?: string | null
          q20_2_incompetencia?: string | null
          q20_2_qualidade?: string | null
          q20_2_sugestao?: string | null
          q20_20_evidencia?: string | null
          q20_20_homologacao_judicial?: string | null
          q20_20_qualidade?: string | null
          q20_20_sugestao?: string | null
          q20_21_anuencia_credores?: string | null
          q20_21_evidencia?: string | null
          q20_21_qualidade?: string | null
          q20_21_sugestao?: string | null
          q20_22_evidencia?: string | null
          q20_22_juntada_provas?: string | null
          q20_22_qualidade?: string | null
          q20_22_sugestao?: string | null
          q20_23_evidencia?: string | null
          q20_23_producao_provas?: string | null
          q20_23_qualidade?: string | null
          q20_23_sugestao?: string | null
          q20_24_contraprova?: string | null
          q20_24_evidencia?: string | null
          q20_24_qualidade?: string | null
          q20_24_sugestao?: string | null
          q20_25_evidencia?: string | null
          q20_25_precedentes_favoraveis?: string | null
          q20_25_qualidade?: string | null
          q20_25_sugestao?: string | null
          q20_26_doutrina?: string | null
          q20_26_evidencia?: string | null
          q20_26_qualidade?: string | null
          q20_26_sugestao?: string | null
          q20_27_evidencia?: string | null
          q20_27_qualidade?: string | null
          q20_27_sugestao?: string | null
          q20_27_sumulas_enunciados?: string | null
          q20_28_beneficio_ordem?: string | null
          q20_28_evidencia?: string | null
          q20_28_qualidade?: string | null
          q20_28_sugestao?: string | null
          q20_29_evidencia?: string | null
          q20_29_pesquisas_patrimoniais?: string | null
          q20_29_qualidade?: string | null
          q20_29_sugestao?: string | null
          q20_3_coisa_julgada?: string | null
          q20_3_evidencia?: string | null
          q20_3_qualidade?: string | null
          q20_3_sugestao?: string | null
          q20_30_bens_devedora?: string | null
          q20_30_evidencia?: string | null
          q20_30_qualidade?: string | null
          q20_30_sugestao?: string | null
          q20_31_evidencia?: string | null
          q20_31_principios_constitucionais?: string | null
          q20_31_qualidade?: string | null
          q20_31_sugestao?: string | null
          q20_32_distincao_institutos?: string | null
          q20_32_evidencia?: string | null
          q20_32_qualidade?: string | null
          q20_32_sugestao?: string | null
          q20_4_evidencia?: string | null
          q20_4_nulidade_processual?: string | null
          q20_4_qualidade?: string | null
          q20_4_sugestao?: string | null
          q20_5_citacao_incidente?: string | null
          q20_5_evidencia?: string | null
          q20_5_qualidade?: string | null
          q20_5_sugestao?: string | null
          q20_6_boa_fe_terceiro?: string | null
          q20_6_evidencia?: string | null
          q20_6_qualidade?: string | null
          q20_6_sugestao?: string | null
          q20_7_ausencia_vinculo?: string | null
          q20_7_evidencia?: string | null
          q20_7_qualidade?: string | null
          q20_7_sugestao?: string | null
          q20_8_aquisicao_legitima?: string | null
          q20_8_evidencia?: string | null
          q20_8_qualidade?: string | null
          q20_8_sugestao?: string | null
          q20_9_evidencia?: string | null
          q20_9_preco_mercado?: string | null
          q20_9_qualidade?: string | null
          q20_9_sugestao?: string | null
          recomendacoes_desejaveis?: string | null
          recomendacoes_importantes?: string | null
          recomendacoes_urgentes?: string | null
          tipo_peca?: string | null
          total_explorado?: number | null
          total_nao_aplicavel?: number | null
          total_nao_explorado?: number | null
          total_parcialmente?: number | null
        }
        Relationships: []
      }
      benchmark_results: {
        Row: {
          agent_run_id: string | null
          avg_chunk_interval_ms: number | null
          avg_tool_call_time_ms: number | null
          cold_start_time_ms: number | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          expected_tools_present: boolean | null
          id: string
          metadata: Json | null
          missing_tools: Json | null
          prompt_id: string
          prompt_text: string
          run_id: string
          slowest_tool_call: Json | null
          started_at: string
          status: Database["public"]["Enums"]["benchmark_result_status"]
          stream_chunk_count: number | null
          thread_id: string | null
          tool_call_breakdown: Json | null
          tool_calls: Json | null
          tool_calls_count: number | null
          total_duration_ms: number | null
        }
        Insert: {
          agent_run_id?: string | null
          avg_chunk_interval_ms?: number | null
          avg_tool_call_time_ms?: number | null
          cold_start_time_ms?: number | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          expected_tools_present?: boolean | null
          id?: string
          metadata?: Json | null
          missing_tools?: Json | null
          prompt_id: string
          prompt_text: string
          run_id: string
          slowest_tool_call?: Json | null
          started_at: string
          status?: Database["public"]["Enums"]["benchmark_result_status"]
          stream_chunk_count?: number | null
          thread_id?: string | null
          tool_call_breakdown?: Json | null
          tool_calls?: Json | null
          tool_calls_count?: number | null
          total_duration_ms?: number | null
        }
        Update: {
          agent_run_id?: string | null
          avg_chunk_interval_ms?: number | null
          avg_tool_call_time_ms?: number | null
          cold_start_time_ms?: number | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          expected_tools_present?: boolean | null
          id?: string
          metadata?: Json | null
          missing_tools?: Json | null
          prompt_id?: string
          prompt_text?: string
          run_id?: string
          slowest_tool_call?: Json | null
          started_at?: string
          status?: Database["public"]["Enums"]["benchmark_result_status"]
          stream_chunk_count?: number | null
          thread_id?: string | null
          tool_call_breakdown?: Json | null
          tool_calls?: Json | null
          tool_calls_count?: number | null
          total_duration_ms?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "benchmark_results_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "benchmark_runs"
            referencedColumns: ["id"]
          },
        ]
      }
      benchmark_runs: {
        Row: {
          completed_at: string | null
          concurrency_level: number
          created_at: string
          created_by: string | null
          duration_ms: number | null
          id: string
          metadata: Json | null
          model_name: string
          run_type: Database["public"]["Enums"]["benchmark_run_type"]
          started_at: string
          status: Database["public"]["Enums"]["benchmark_run_status"]
          total_prompts: number
          updated_at: string
        }
        Insert: {
          completed_at?: string | null
          concurrency_level?: number
          created_at?: string
          created_by?: string | null
          duration_ms?: number | null
          id?: string
          metadata?: Json | null
          model_name: string
          run_type: Database["public"]["Enums"]["benchmark_run_type"]
          started_at?: string
          status?: Database["public"]["Enums"]["benchmark_run_status"]
          total_prompts?: number
          updated_at?: string
        }
        Update: {
          completed_at?: string | null
          concurrency_level?: number
          created_at?: string
          created_by?: string | null
          duration_ms?: number | null
          id?: string
          metadata?: Json | null
          model_name?: string
          run_type?: Database["public"]["Enums"]["benchmark_run_type"]
          started_at?: string
          status?: Database["public"]["Enums"]["benchmark_run_status"]
          total_prompts?: number
          updated_at?: string
        }
        Relationships: []
      }
      casos_processamento: {
        Row: {
          created_at: string | null
          error_message: string | null
          id: number
          metadata: Json | null
          numero_caso: string
          projeto_id: string | null
          retry_count: number | null
          status: string | null
          updated_at: string | null
          zip_url: string | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          id?: number
          metadata?: Json | null
          numero_caso: string
          projeto_id?: string | null
          retry_count?: number | null
          status?: string | null
          updated_at?: string | null
          zip_url?: string | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          id?: number
          metadata?: Json | null
          numero_caso?: string
          projeto_id?: string | null
          retry_count?: number | null
          status?: string | null
          updated_at?: string | null
          zip_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "casos_processamento_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projeto"
            referencedColumns: ["id"]
          },
        ]
      }
      cct: {
        Row: {
          cct: string | null
          created_at: string
          id: number
          regras: Json | null
          sindicato_cnpj: string | null
          sindicato_codigo: string | null
          sindicato_nome: string | null
          vigencia_fim: string | null
          vigencia_inicio: string | null
        }
        Insert: {
          cct?: string | null
          created_at?: string
          id?: number
          regras?: Json | null
          sindicato_cnpj?: string | null
          sindicato_codigo?: string | null
          sindicato_nome?: string | null
          vigencia_fim?: string | null
          vigencia_inicio?: string | null
        }
        Update: {
          cct?: string | null
          created_at?: string
          id?: number
          regras?: Json | null
          sindicato_cnpj?: string | null
          sindicato_codigo?: string | null
          sindicato_nome?: string | null
          vigencia_fim?: string | null
          vigencia_inicio?: string | null
        }
        Relationships: []
      }
      cct_consolidado_string: {
        Row: {
          "Adic. Noturno": string | null
          "Assistência Odontológica": string | null
          "Auxílio Alimentação": string | null
          "Cidade/ Município": string | null
          "Desc. VT": string | null
          "Fim Vigência": string | null
          Função: string | null
          "Hora Extra": string | null
          id: number
          "Incentivo Lazer/Cultura": string | null
          "Inicio Vigência": string | null
          "Mensalidade Sindical": string | null
          "Nome do Documento": string | null
          Periculosidade: string | null
          "Plano Ambulatorial": string | null
          "Salário Base": string | null
          "Seguro de Vida": string | null
          Sindicato: string | null
          Tipo: string | null
          UF: string | null
        }
        Insert: {
          "Adic. Noturno"?: string | null
          "Assistência Odontológica"?: string | null
          "Auxílio Alimentação"?: string | null
          "Cidade/ Município"?: string | null
          "Desc. VT"?: string | null
          "Fim Vigência"?: string | null
          Função?: string | null
          "Hora Extra"?: string | null
          id?: number
          "Incentivo Lazer/Cultura"?: string | null
          "Inicio Vigência"?: string | null
          "Mensalidade Sindical"?: string | null
          "Nome do Documento"?: string | null
          Periculosidade?: string | null
          "Plano Ambulatorial"?: string | null
          "Salário Base"?: string | null
          "Seguro de Vida"?: string | null
          Sindicato?: string | null
          Tipo?: string | null
          UF?: string | null
        }
        Update: {
          "Adic. Noturno"?: string | null
          "Assistência Odontológica"?: string | null
          "Auxílio Alimentação"?: string | null
          "Cidade/ Município"?: string | null
          "Desc. VT"?: string | null
          "Fim Vigência"?: string | null
          Função?: string | null
          "Hora Extra"?: string | null
          id?: number
          "Incentivo Lazer/Cultura"?: string | null
          "Inicio Vigência"?: string | null
          "Mensalidade Sindical"?: string | null
          "Nome do Documento"?: string | null
          Periculosidade?: string | null
          "Plano Ambulatorial"?: string | null
          "Salário Base"?: string | null
          "Seguro de Vida"?: string | null
          Sindicato?: string | null
          Tipo?: string | null
          UF?: string | null
        }
        Relationships: []
      }
      checkout_clicks: {
        Row: {
          clicked_at: string
          user_id: string
        }
        Insert: {
          clicked_at?: string
          user_id: string
        }
        Update: {
          clicked_at?: string
          user_id?: string
        }
        Relationships: []
      }
      circuit_breaker_state: {
        Row: {
          circuit_name: string
          created_at: string | null
          failure_count: number
          last_failure_time: string | null
          state: string
          updated_at: string | null
        }
        Insert: {
          circuit_name: string
          created_at?: string | null
          failure_count?: number
          last_failure_time?: string | null
          state: string
          updated_at?: string | null
        }
        Update: {
          circuit_name?: string
          created_at?: string | null
          failure_count?: number
          last_failure_time?: string | null
          state?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      commitment_history: {
        Row: {
          account_id: string
          cancellation_reason: string | null
          cancelled_at: string | null
          commitment_type: string | null
          created_at: string | null
          end_date: string
          id: string
          price_id: string | null
          start_date: string
          stripe_subscription_id: string | null
        }
        Insert: {
          account_id: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          commitment_type?: string | null
          created_at?: string | null
          end_date: string
          id?: string
          price_id?: string | null
          start_date: string
          stripe_subscription_id?: string | null
        }
        Update: {
          account_id?: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          commitment_type?: string | null
          created_at?: string | null
          end_date?: string
          id?: string
          price_id?: string | null
          start_date?: string
          stripe_subscription_id?: string | null
        }
        Relationships: []
      }
      contratos_medmais: {
        Row: {
          contrato: string | null
          created_at: string
          id: number
          valores: Json | null
        }
        Insert: {
          contrato?: string | null
          created_at?: string
          id?: number
          valores?: Json | null
        }
        Update: {
          contrato?: string | null
          created_at?: string
          id?: number
          valores?: Json | null
        }
        Relationships: []
      }
      conversation_analytics: {
        Row: {
          account_id: string
          agent_run_id: string | null
          agent_run_status: string | null
          analyzed_at: string | null
          assistant_message_count: number | null
          churn_risk_score: number | null
          churn_signals: Json | null
          conversation_duration_seconds: number | null
          feature_request_text: string | null
          frustration_score: number | null
          frustration_signals: Json | null
          id: string
          intent_type: string | null
          is_feature_request: boolean | null
          is_useful: boolean | null
          primary_topic: string | null
          raw_analysis: Json | null
          sentiment_label: string | null
          sentiment_score: number | null
          thread_id: string
          topics: Json | null
          use_case_category: string | null
          user_message_count: number | null
        }
        Insert: {
          account_id: string
          agent_run_id?: string | null
          agent_run_status?: string | null
          analyzed_at?: string | null
          assistant_message_count?: number | null
          churn_risk_score?: number | null
          churn_signals?: Json | null
          conversation_duration_seconds?: number | null
          feature_request_text?: string | null
          frustration_score?: number | null
          frustration_signals?: Json | null
          id?: string
          intent_type?: string | null
          is_feature_request?: boolean | null
          is_useful?: boolean | null
          primary_topic?: string | null
          raw_analysis?: Json | null
          sentiment_label?: string | null
          sentiment_score?: number | null
          thread_id: string
          topics?: Json | null
          use_case_category?: string | null
          user_message_count?: number | null
        }
        Update: {
          account_id?: string
          agent_run_id?: string | null
          agent_run_status?: string | null
          analyzed_at?: string | null
          assistant_message_count?: number | null
          churn_risk_score?: number | null
          churn_signals?: Json | null
          conversation_duration_seconds?: number | null
          feature_request_text?: string | null
          frustration_score?: number | null
          frustration_signals?: Json | null
          id?: string
          intent_type?: string | null
          is_feature_request?: boolean | null
          is_useful?: boolean | null
          primary_topic?: string | null
          raw_analysis?: Json | null
          sentiment_label?: string | null
          sentiment_score?: number | null
          thread_id?: string
          topics?: Json | null
          use_case_category?: string | null
          user_message_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "conversation_analytics_agent_run_id_fkey"
            columns: ["agent_run_id"]
            isOneToOne: false
            referencedRelation: "agent_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "conversation_analytics_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      conversation_analytics_queue: {
        Row: {
          account_id: string
          agent_run_id: string | null
          attempts: number | null
          created_at: string | null
          error_message: string | null
          id: string
          processed_at: string | null
          status: string | null
          thread_id: string
        }
        Insert: {
          account_id: string
          agent_run_id?: string | null
          attempts?: number | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          processed_at?: string | null
          status?: string | null
          thread_id: string
        }
        Update: {
          account_id?: string
          agent_run_id?: string | null
          attempts?: number | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          processed_at?: string | null
          status?: string | null
          thread_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "conversation_analytics_queue_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      credential_usage_log: {
        Row: {
          action: string
          created_at: string | null
          credential_id: string
          error_message: string | null
          instance_id: string | null
          log_id: string
          metadata: Json | null
          success: boolean
        }
        Insert: {
          action: string
          created_at?: string | null
          credential_id: string
          error_message?: string | null
          instance_id?: string | null
          log_id?: string
          metadata?: Json | null
          success: boolean
        }
        Update: {
          action?: string
          created_at?: string | null
          credential_id?: string
          error_message?: string | null
          instance_id?: string | null
          log_id?: string
          metadata?: Json | null
          success?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "credential_usage_log_credential_id_fkey"
            columns: ["credential_id"]
            isOneToOne: false
            referencedRelation: "user_mcp_credentials"
            referencedColumns: ["credential_id"]
          },
          {
            foreignKeyName: "credential_usage_log_instance_id_fkey"
            columns: ["instance_id"]
            isOneToOne: false
            referencedRelation: "agent_instances"
            referencedColumns: ["instance_id"]
          },
        ]
      }
      credit_accounts: {
        Row: {
          account_id: string
          balance: number
          billing_cycle_anchor: string | null
          can_cancel_after: string | null
          commitment_end_date: string | null
          commitment_price_id: string | null
          commitment_start_date: string | null
          commitment_type: string | null
          created_at: string | null
          daily_credits_balance: number
          expiring_credits: number
          is_grandfathered_free: boolean | null
          last_daily_refresh: string | null
          last_grant_date: string | null
          last_payment_failure: string | null
          last_processed_invoice_id: string | null
          last_reconciled_at: string | null
          last_renewal_period_start: number | null
          lifetime_granted: number
          lifetime_purchased: number
          lifetime_used: number
          needs_reconciliation: boolean | null
          next_credit_grant: string | null
          non_expiring_credits: number
          payment_status: string | null
          plan_type: string | null
          provider: string | null
          reconciliation_discrepancy: number | null
          revenuecat_cancel_at_period_end: string | null
          revenuecat_cancelled_at: string | null
          revenuecat_customer_id: string | null
          revenuecat_pending_change_date: string | null
          revenuecat_pending_change_product: string | null
          revenuecat_pending_change_type: string | null
          revenuecat_product_id: string | null
          revenuecat_subscription_id: string | null
          scheduled_price_id: string | null
          scheduled_tier_change: string | null
          scheduled_tier_change_date: string | null
          stripe_subscription_id: string | null
          stripe_subscription_status: string | null
          tier: string | null
          trial_ends_at: string | null
          trial_started_at: string | null
          trial_status: string | null
          updated_at: string | null
        }
        Insert: {
          account_id: string
          balance?: number
          billing_cycle_anchor?: string | null
          can_cancel_after?: string | null
          commitment_end_date?: string | null
          commitment_price_id?: string | null
          commitment_start_date?: string | null
          commitment_type?: string | null
          created_at?: string | null
          daily_credits_balance?: number
          expiring_credits?: number
          is_grandfathered_free?: boolean | null
          last_daily_refresh?: string | null
          last_grant_date?: string | null
          last_payment_failure?: string | null
          last_processed_invoice_id?: string | null
          last_reconciled_at?: string | null
          last_renewal_period_start?: number | null
          lifetime_granted?: number
          lifetime_purchased?: number
          lifetime_used?: number
          needs_reconciliation?: boolean | null
          next_credit_grant?: string | null
          non_expiring_credits?: number
          payment_status?: string | null
          plan_type?: string | null
          provider?: string | null
          reconciliation_discrepancy?: number | null
          revenuecat_cancel_at_period_end?: string | null
          revenuecat_cancelled_at?: string | null
          revenuecat_customer_id?: string | null
          revenuecat_pending_change_date?: string | null
          revenuecat_pending_change_product?: string | null
          revenuecat_pending_change_type?: string | null
          revenuecat_product_id?: string | null
          revenuecat_subscription_id?: string | null
          scheduled_price_id?: string | null
          scheduled_tier_change?: string | null
          scheduled_tier_change_date?: string | null
          stripe_subscription_id?: string | null
          stripe_subscription_status?: string | null
          tier?: string | null
          trial_ends_at?: string | null
          trial_started_at?: string | null
          trial_status?: string | null
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          balance?: number
          billing_cycle_anchor?: string | null
          can_cancel_after?: string | null
          commitment_end_date?: string | null
          commitment_price_id?: string | null
          commitment_start_date?: string | null
          commitment_type?: string | null
          created_at?: string | null
          daily_credits_balance?: number
          expiring_credits?: number
          is_grandfathered_free?: boolean | null
          last_daily_refresh?: string | null
          last_grant_date?: string | null
          last_payment_failure?: string | null
          last_processed_invoice_id?: string | null
          last_reconciled_at?: string | null
          last_renewal_period_start?: number | null
          lifetime_granted?: number
          lifetime_purchased?: number
          lifetime_used?: number
          needs_reconciliation?: boolean | null
          next_credit_grant?: string | null
          non_expiring_credits?: number
          payment_status?: string | null
          plan_type?: string | null
          provider?: string | null
          reconciliation_discrepancy?: number | null
          revenuecat_cancel_at_period_end?: string | null
          revenuecat_cancelled_at?: string | null
          revenuecat_customer_id?: string | null
          revenuecat_pending_change_date?: string | null
          revenuecat_pending_change_product?: string | null
          revenuecat_pending_change_type?: string | null
          revenuecat_product_id?: string | null
          revenuecat_subscription_id?: string | null
          scheduled_price_id?: string | null
          scheduled_tier_change?: string | null
          scheduled_tier_change_date?: string | null
          stripe_subscription_id?: string | null
          stripe_subscription_status?: string | null
          tier?: string | null
          trial_ends_at?: string | null
          trial_started_at?: string | null
          trial_status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      credit_balance: {
        Row: {
          account_id: string
          balance_dollars: number
          last_updated: string | null
          metadata: Json | null
          total_purchased: number
          total_used: number
        }
        Insert: {
          account_id: string
          balance_dollars?: number
          last_updated?: string | null
          metadata?: Json | null
          total_purchased?: number
          total_used?: number
        }
        Update: {
          account_id?: string
          balance_dollars?: number
          last_updated?: string | null
          metadata?: Json | null
          total_purchased?: number
          total_used?: number
        }
        Relationships: []
      }
      credit_grants: {
        Row: {
          amount: number
          expires_at: string | null
          granted_at: string | null
          id: string
          period_end: string
          period_start: string
          tier: string | null
          tier_price_id: string | null
          user_id: string
        }
        Insert: {
          amount: number
          expires_at?: string | null
          granted_at?: string | null
          id?: string
          period_end: string
          period_start: string
          tier?: string | null
          tier_price_id?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          expires_at?: string | null
          granted_at?: string | null
          id?: string
          period_end?: string
          period_start?: string
          tier?: string | null
          tier_price_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      credit_ledger: {
        Row: {
          account_id: string
          amount: number
          balance_after: number
          created_at: string | null
          created_by: string | null
          description: string | null
          expires_at: string | null
          id: string
          idempotency_key: string | null
          is_expiring: boolean | null
          locked_at: string | null
          message_id: string | null
          metadata: Json | null
          processing_source: string | null
          reference_id: string | null
          reference_type: string | null
          stripe_event_id: string | null
          thread_id: string | null
          type: string
        }
        Insert: {
          account_id: string
          amount: number
          balance_after: number
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          expires_at?: string | null
          id?: string
          idempotency_key?: string | null
          is_expiring?: boolean | null
          locked_at?: string | null
          message_id?: string | null
          metadata?: Json | null
          processing_source?: string | null
          reference_id?: string | null
          reference_type?: string | null
          stripe_event_id?: string | null
          thread_id?: string | null
          type: string
        }
        Update: {
          account_id?: string
          amount?: number
          balance_after?: number
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          expires_at?: string | null
          id?: string
          idempotency_key?: string | null
          is_expiring?: boolean | null
          locked_at?: string | null
          message_id?: string | null
          metadata?: Json | null
          processing_source?: string | null
          reference_id?: string | null
          reference_type?: string | null
          stripe_event_id?: string | null
          thread_id?: string | null
          type?: string
        }
        Relationships: []
      }
      credit_purchases: {
        Row: {
          account_id: string
          amount_dollars: number
          completed_at: string | null
          created_at: string | null
          description: string | null
          expires_at: string | null
          id: string
          last_reconciliation_attempt: string | null
          metadata: Json | null
          provider: string | null
          reconciled_at: string | null
          reconciliation_attempts: number | null
          revenuecat_product_id: string | null
          revenuecat_transaction_id: string | null
          status: string
          stripe_charge_id: string | null
          stripe_payment_intent_id: string | null
        }
        Insert: {
          account_id: string
          amount_dollars: number
          completed_at?: string | null
          created_at?: string | null
          description?: string | null
          expires_at?: string | null
          id?: string
          last_reconciliation_attempt?: string | null
          metadata?: Json | null
          provider?: string | null
          reconciled_at?: string | null
          reconciliation_attempts?: number | null
          revenuecat_product_id?: string | null
          revenuecat_transaction_id?: string | null
          status?: string
          stripe_charge_id?: string | null
          stripe_payment_intent_id?: string | null
        }
        Update: {
          account_id?: string
          amount_dollars?: number
          completed_at?: string | null
          created_at?: string | null
          description?: string | null
          expires_at?: string | null
          id?: string
          last_reconciliation_attempt?: string | null
          metadata?: Json | null
          provider?: string | null
          reconciled_at?: string | null
          reconciliation_attempts?: number | null
          revenuecat_product_id?: string | null
          revenuecat_transaction_id?: string | null
          status?: string
          stripe_charge_id?: string | null
          stripe_payment_intent_id?: string | null
        }
        Relationships: []
      }
      credit_usage: {
        Row: {
          account_id: string
          amount_dollars: number
          created_at: string | null
          description: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          subscription_tier: string | null
          thread_id: string | null
          usage_type: string | null
        }
        Insert: {
          account_id: string
          amount_dollars: number
          created_at?: string | null
          description?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          subscription_tier?: string | null
          thread_id?: string | null
          usage_type?: string | null
        }
        Update: {
          account_id?: string
          amount_dollars?: number
          created_at?: string | null
          description?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          subscription_tier?: string | null
          thread_id?: string | null
          usage_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "credit_usage_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["message_id"]
          },
          {
            foreignKeyName: "credit_usage_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      daily_refresh_tracking: {
        Row: {
          account_id: string
          created_at: string
          credits_granted: number
          id: string
          processed_by: string
          refresh_date: string
          tier: string
        }
        Insert: {
          account_id: string
          created_at?: string
          credits_granted: number
          id?: string
          processed_by: string
          refresh_date: string
          tier: string
        }
        Update: {
          account_id?: string
          created_at?: string
          credits_granted?: number
          id?: string
          processed_by?: string
          refresh_date?: string
          tier?: string
        }
        Relationships: [
          {
            foreignKeyName: "daily_refresh_tracking_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "credit_accounts"
            referencedColumns: ["account_id"]
          },
        ]
      }
      device_tokens: {
        Row: {
          account_id: string
          created_at: string | null
          device_token: string
          device_type: string
          id: string
          is_active: boolean | null
          updated_at: string | null
        }
        Insert: {
          account_id: string
          created_at?: string | null
          device_token: string
          device_type: string
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          created_at?: string | null
          device_token?: string
          device_type?: string
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      discrepancias: {
        Row: {
          competencia_id: number | null
          created_at: string | null
          descricao: string
          funcionario_id: number | null
          id: number
          resolvida: boolean | null
          severidade: string | null
          tipo: string
          valor_cct: number | null
          valor_contrato: number | null
        }
        Insert: {
          competencia_id?: number | null
          created_at?: string | null
          descricao: string
          funcionario_id?: number | null
          id?: number
          resolvida?: boolean | null
          severidade?: string | null
          tipo: string
          valor_cct?: number | null
          valor_contrato?: number | null
        }
        Update: {
          competencia_id?: number | null
          created_at?: string | null
          descricao?: string
          funcionario_id?: number | null
          id?: number
          resolvida?: boolean | null
          severidade?: string | null
          tipo?: string
          valor_cct?: number | null
          valor_contrato?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "discrepancias_competencia_id_fkey"
            columns: ["competencia_id"]
            isOneToOne: false
            referencedRelation: "folha_competencia"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "discrepancias_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
        ]
      }
      distributed_locks: {
        Row: {
          acquired_at: string | null
          expires_at: string
          holder_id: string
          lock_key: string
          metadata: Json | null
        }
        Insert: {
          acquired_at?: string | null
          expires_at: string
          holder_id: string
          lock_key: string
          metadata?: Json | null
        }
        Update: {
          acquired_at?: string | null
          expires_at?: string
          holder_id?: string
          lock_key?: string
          metadata?: Json | null
        }
        Relationships: []
      }
      documento_chunks: {
        Row: {
          chunk_id: number
          content: string
          created_at: string | null
          document_id: string
          embedding: string | null
          filename: string
          id: number
          page_number: number
        }
        Insert: {
          chunk_id: number
          content: string
          created_at?: string | null
          document_id: string
          embedding?: string | null
          filename: string
          id?: number
          page_number: number
        }
        Update: {
          chunk_id?: number
          content?: string
          created_at?: string | null
          document_id?: string
          embedding?: string | null
          filename?: string
          id?: number
          page_number?: number
        }
        Relationships: []
      }
      documento_gerenciamento: {
        Row: {
          caminho_original: string | null
          caso_id: number | null
          completed_at: string | null
          created_at: string | null
          document_id: string | null
          error_message: string | null
          file_size_mb: number | null
          filename: string
          id: number
          origem: string | null
          projeto_id: string | null
          retry_count: number | null
          started_at: string | null
          status: string
          storage_path: string | null
          tamanho_bytes: number | null
          total_chunks: number | null
          total_pages: number | null
          updated_at: string | null
        }
        Insert: {
          caminho_original?: string | null
          caso_id?: number | null
          completed_at?: string | null
          created_at?: string | null
          document_id?: string | null
          error_message?: string | null
          file_size_mb?: number | null
          filename: string
          id?: number
          origem?: string | null
          projeto_id?: string | null
          retry_count?: number | null
          started_at?: string | null
          status: string
          storage_path?: string | null
          tamanho_bytes?: number | null
          total_chunks?: number | null
          total_pages?: number | null
          updated_at?: string | null
        }
        Update: {
          caminho_original?: string | null
          caso_id?: number | null
          completed_at?: string | null
          created_at?: string | null
          document_id?: string | null
          error_message?: string | null
          file_size_mb?: number | null
          filename?: string
          id?: number
          origem?: string | null
          projeto_id?: string | null
          retry_count?: number | null
          started_at?: string | null
          status?: string
          storage_path?: string | null
          tamanho_bytes?: number | null
          total_chunks?: number | null
          total_pages?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documento_gerenciamento_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projeto"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          account_id: string
          chunk_content: string
          chunk_id: string
          embedding: string
          last_updated_at: string | null
          thread_id: string
        }
        Insert: {
          account_id: string
          chunk_content: string
          chunk_id?: string
          embedding: string
          last_updated_at?: string | null
          thread_id: string
        }
        Update: {
          account_id?: string
          chunk_content?: string
          chunk_id?: string
          embedding?: string
          last_updated_at?: string | null
          thread_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_thread_account_fkey"
            columns: ["account_id", "thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["account_id", "thread_id"]
          },
        ]
      }
      feedback: {
        Row: {
          account_id: string
          context: Json | null
          created_at: string
          feedback_id: string
          feedback_text: string | null
          help_improve: boolean | null
          message_id: string | null
          rating: number
          thread_id: string | null
          updated_at: string
        }
        Insert: {
          account_id: string
          context?: Json | null
          created_at?: string
          feedback_id?: string
          feedback_text?: string | null
          help_improve?: boolean | null
          message_id?: string | null
          rating: number
          thread_id?: string | null
          updated_at?: string
        }
        Update: {
          account_id?: string
          context?: Json | null
          created_at?: string
          feedback_id?: string
          feedback_text?: string | null
          help_improve?: boolean | null
          message_id?: string | null
          rating?: number
          thread_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "feedback_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "messages"
            referencedColumns: ["message_id"]
          },
          {
            foreignKeyName: "feedback_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      file_uploads: {
        Row: {
          account_id: string
          agent_id: string | null
          bucket_name: string
          content_type: string | null
          created_at: string | null
          file_size: number
          id: string
          metadata: Json | null
          original_filename: string
          project_id: string | null
          signed_url: string | null
          storage_path: string
          thread_id: string | null
          updated_at: string | null
          url_expires_at: string | null
          user_id: string | null
        }
        Insert: {
          account_id: string
          agent_id?: string | null
          bucket_name: string
          content_type?: string | null
          created_at?: string | null
          file_size: number
          id?: string
          metadata?: Json | null
          original_filename: string
          project_id?: string | null
          signed_url?: string | null
          storage_path: string
          thread_id?: string | null
          updated_at?: string | null
          url_expires_at?: string | null
          user_id?: string | null
        }
        Update: {
          account_id?: string
          agent_id?: string | null
          bucket_name?: string
          content_type?: string | null
          created_at?: string | null
          file_size?: number
          id?: string
          metadata?: Json | null
          original_filename?: string
          project_id?: string | null
          signed_url?: string | null
          storage_path?: string
          thread_id?: string | null
          updated_at?: string | null
          url_expires_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "file_uploads_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
          {
            foreignKeyName: "file_uploads_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      folha_competencia: {
        Row: {
          competencia: string
          created_at: string | null
          id: number
          processada_em: string | null
          status: string
          total_funcionarios: number | null
        }
        Insert: {
          competencia: string
          created_at?: string | null
          id?: number
          processada_em?: string | null
          status?: string
          total_funcionarios?: number | null
        }
        Update: {
          competencia?: string
          created_at?: string | null
          id?: number
          processada_em?: string | null
          status?: string
          total_funcionarios?: number | null
        }
        Relationships: []
      }
      folha_de_pagamento_ia: {
        Row: {
          cpf: string | null
          created_at: string
          folha_pagamento: Json | null
          id: number
          mês: string | null
          nome: string | null
        }
        Insert: {
          cpf?: string | null
          created_at?: string
          folha_pagamento?: Json | null
          id?: number
          mês?: string | null
          nome?: string | null
        }
        Update: {
          cpf?: string | null
          created_at?: string
          folha_pagamento?: Json | null
          id?: number
          mês?: string | null
          nome?: string | null
        }
        Relationships: []
      }
      folha_de_pagamento_ia_duplicate: {
        Row: {
          auditoria: Json | null
          auditoria_at: string | null
          auditoria_markdown: string | null
          centro_custo: string | null
          comparacao_totais: Json | null
          competencia: string | null
          cpf: string | null
          created_at: string
          dashboard_data: Json | null
          discrepancias: Json | null
          folha_atual: Json | null
          folha_cct: Json | null
          folha_contrato: Json | null
          folha_ideal: Json | null
          funcao: string | null
          id: number
          matricula: string | null
          mês: string | null
          nome: string | null
          periodo: string | null
          sindicato: string | null
          versao_auditoria: string | null
        }
        Insert: {
          auditoria?: Json | null
          auditoria_at?: string | null
          auditoria_markdown?: string | null
          centro_custo?: string | null
          comparacao_totais?: Json | null
          competencia?: string | null
          cpf?: string | null
          created_at?: string
          dashboard_data?: Json | null
          discrepancias?: Json | null
          folha_atual?: Json | null
          folha_cct?: Json | null
          folha_contrato?: Json | null
          folha_ideal?: Json | null
          funcao?: string | null
          id?: number
          matricula?: string | null
          mês?: string | null
          nome?: string | null
          periodo?: string | null
          sindicato?: string | null
          versao_auditoria?: string | null
        }
        Update: {
          auditoria?: Json | null
          auditoria_at?: string | null
          auditoria_markdown?: string | null
          centro_custo?: string | null
          comparacao_totais?: Json | null
          competencia?: string | null
          cpf?: string | null
          created_at?: string
          dashboard_data?: Json | null
          discrepancias?: Json | null
          folha_atual?: Json | null
          folha_cct?: Json | null
          folha_contrato?: Json | null
          folha_ideal?: Json | null
          funcao?: string | null
          id?: number
          matricula?: string | null
          mês?: string | null
          nome?: string | null
          periodo?: string | null
          sindicato?: string | null
          versao_auditoria?: string | null
        }
        Relationships: []
      }
      folha_funcionario: {
        Row: {
          ausencias: Json | null
          cct_id: number | null
          competencia_id: number | null
          componentes_contrato: Json | null
          contrato_id: number | null
          created_at: string | null
          documento_gerado_em: string | null
          documento_path: string | null
          faltas: number | null
          fgts: number | null
          funcao: string | null
          funcionario_id: number | null
          horas_extras: Json | null
          horas_trabalhadas: number | null
          id: number
          inss: number | null
          irrf: number | null
          liquido: number | null
          salario_base: number | null
          salario_familia: number | null
          total_descontos: number | null
          total_proventos: number | null
          turno: string | null
        }
        Insert: {
          ausencias?: Json | null
          cct_id?: number | null
          competencia_id?: number | null
          componentes_contrato?: Json | null
          contrato_id?: number | null
          created_at?: string | null
          documento_gerado_em?: string | null
          documento_path?: string | null
          faltas?: number | null
          fgts?: number | null
          funcao?: string | null
          funcionario_id?: number | null
          horas_extras?: Json | null
          horas_trabalhadas?: number | null
          id?: number
          inss?: number | null
          irrf?: number | null
          liquido?: number | null
          salario_base?: number | null
          salario_familia?: number | null
          total_descontos?: number | null
          total_proventos?: number | null
          turno?: string | null
        }
        Update: {
          ausencias?: Json | null
          cct_id?: number | null
          competencia_id?: number | null
          componentes_contrato?: Json | null
          contrato_id?: number | null
          created_at?: string | null
          documento_gerado_em?: string | null
          documento_path?: string | null
          faltas?: number | null
          fgts?: number | null
          funcao?: string | null
          funcionario_id?: number | null
          horas_extras?: Json | null
          horas_trabalhadas?: number | null
          id?: number
          inss?: number | null
          irrf?: number | null
          liquido?: number | null
          salario_base?: number | null
          salario_familia?: number | null
          total_descontos?: number | null
          total_proventos?: number | null
          turno?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "folha_funcionario_cct_id_fkey"
            columns: ["cct_id"]
            isOneToOne: false
            referencedRelation: "cct"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "folha_funcionario_competencia_id_fkey"
            columns: ["competencia_id"]
            isOneToOne: false
            referencedRelation: "folha_competencia"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "folha_funcionario_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos_medmais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "folha_funcionario_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
        ]
      }
      folha_pagamento: {
        Row: {
          abono_ferias: number | null
          adicional_noturno: number | null
          ausencias_substituicoes: number | null
          auxilio_alimentacao: number | null
          auxilio_combustivel: number | null
          aviso_previo: number | null
          beneficio_social: number | null
          competencia: string
          created_at: string
          custo_total_empresa: number | null
          desc_faltas: number | null
          desc_inss: number | null
          desc_irrf: number | null
          desc_vale_refeicao: number | null
          desc_vale_transporte: number | null
          dias_trabalhados: number | null
          diferenca_orcamento: number | null
          discrepancias_cct: Json | null
          documento_gerado_em: string | null
          documento_path: string | null
          dsr_adicional_noturno: number | null
          dsr_horas_extras: number | null
          faltas_injustificadas: number | null
          faltas_justificadas: number | null
          fgts: number | null
          funcionario_id: number
          gratificacao: number | null
          horas_extras: number | null
          horas_extras_100: number | null
          horas_extras_50: number | null
          horas_noturnas: number | null
          id: number
          insalubridade: number | null
          inss_patronal: number | null
          multa_fgts: number | null
          periculosidade: number | null
          plano_odontologico: number | null
          plano_saude: number | null
          provisao_13: number | null
          provisao_ferias: number | null
          salario_base: number
          salario_familia: number | null
          seguro_vida: number | null
          status: string | null
          total_descontos: number | null
          total_liquido: number | null
          total_proventos: number | null
          vale_refeicao: number | null
          vale_transporte: number | null
          valor_orcado: number | null
        }
        Insert: {
          abono_ferias?: number | null
          adicional_noturno?: number | null
          ausencias_substituicoes?: number | null
          auxilio_alimentacao?: number | null
          auxilio_combustivel?: number | null
          aviso_previo?: number | null
          beneficio_social?: number | null
          competencia: string
          created_at?: string
          custo_total_empresa?: number | null
          desc_faltas?: number | null
          desc_inss?: number | null
          desc_irrf?: number | null
          desc_vale_refeicao?: number | null
          desc_vale_transporte?: number | null
          dias_trabalhados?: number | null
          diferenca_orcamento?: number | null
          discrepancias_cct?: Json | null
          documento_gerado_em?: string | null
          documento_path?: string | null
          dsr_adicional_noturno?: number | null
          dsr_horas_extras?: number | null
          faltas_injustificadas?: number | null
          faltas_justificadas?: number | null
          fgts?: number | null
          funcionario_id: number
          gratificacao?: number | null
          horas_extras?: number | null
          horas_extras_100?: number | null
          horas_extras_50?: number | null
          horas_noturnas?: number | null
          id?: number
          insalubridade?: number | null
          inss_patronal?: number | null
          multa_fgts?: number | null
          periculosidade?: number | null
          plano_odontologico?: number | null
          plano_saude?: number | null
          provisao_13?: number | null
          provisao_ferias?: number | null
          salario_base: number
          salario_familia?: number | null
          seguro_vida?: number | null
          status?: string | null
          total_descontos?: number | null
          total_liquido?: number | null
          total_proventos?: number | null
          vale_refeicao?: number | null
          vale_transporte?: number | null
          valor_orcado?: number | null
        }
        Update: {
          abono_ferias?: number | null
          adicional_noturno?: number | null
          ausencias_substituicoes?: number | null
          auxilio_alimentacao?: number | null
          auxilio_combustivel?: number | null
          aviso_previo?: number | null
          beneficio_social?: number | null
          competencia?: string
          created_at?: string
          custo_total_empresa?: number | null
          desc_faltas?: number | null
          desc_inss?: number | null
          desc_irrf?: number | null
          desc_vale_refeicao?: number | null
          desc_vale_transporte?: number | null
          dias_trabalhados?: number | null
          diferenca_orcamento?: number | null
          discrepancias_cct?: Json | null
          documento_gerado_em?: string | null
          documento_path?: string | null
          dsr_adicional_noturno?: number | null
          dsr_horas_extras?: number | null
          faltas_injustificadas?: number | null
          faltas_justificadas?: number | null
          fgts?: number | null
          funcionario_id?: number
          gratificacao?: number | null
          horas_extras?: number | null
          horas_extras_100?: number | null
          horas_extras_50?: number | null
          horas_noturnas?: number | null
          id?: number
          insalubridade?: number | null
          inss_patronal?: number | null
          multa_fgts?: number | null
          periculosidade?: number | null
          plano_odontologico?: number | null
          plano_saude?: number | null
          provisao_13?: number | null
          provisao_ferias?: number | null
          salario_base?: number
          salario_familia?: number | null
          seguro_vida?: number | null
          status?: string | null
          total_descontos?: number | null
          total_liquido?: number | null
          total_proventos?: number | null
          vale_refeicao?: number | null
          vale_transporte?: number | null
          valor_orcado?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "folha_pagamento_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
        ]
      }
      funcao_cct: {
        Row: {
          cct: Json | null
          created_at: string
          funcao: string | null
          id: number
        }
        Insert: {
          cct?: Json | null
          created_at?: string
          funcao?: string | null
          id?: number
        }
        Update: {
          cct?: Json | null
          created_at?: string
          funcao?: string | null
          id?: number
        }
        Relationships: []
      }
      funcionarios: {
        Row: {
          agencia: string | null
          bairro: string | null
          banco: string | null
          categoria: string | null
          cbo: string | null
          cct_id: number | null
          cep: string | null
          cnpj_sindicato: string | null
          cnpj_tomador: string | null
          cod_ccusto: string | null
          cod_departamento: string | null
          cod_funcao: string | null
          cod_sindicato: string | null
          cod_turno: string | null
          conta: string | null
          contrato_medmais_id: number | null
          cpf: string
          created_at: string
          desc_ccusto: string | null
          desc_departamento: string | null
          desc_funcao: string
          desc_sindicato: string | null
          desc_turno: string | null
          dt_admissao: string | null
          dt_demissao: string | null
          dt_nascimento: string | null
          email: string | null
          estado_civil: string | null
          filial: string | null
          funcao_precificacao: string | null
          grau_insalubridade: string | null
          grau_instrucao: string | null
          horas_diarias: number | null
          horas_mensais: number | null
          horas_semanais: number | null
          id: number
          match_confidence: number | null
          match_manual: boolean | null
          matricula: string
          municipio: string | null
          nexti_external_id: string | null
          nexti_person_id: number | null
          nome_completo: string
          nome_mae: string | null
          org_rg: string | null
          pis: string | null
          possui_periculosidade: boolean | null
          possui_plano_saude: boolean | null
          rg: string | null
          salario_base: number
          sexo: string | null
          situacao: string
          telefone: string | null
          tipo_contrato: string | null
          uf_moradia: string | null
          uf_sindicato: string | null
          updated_at: string
        }
        Insert: {
          agencia?: string | null
          bairro?: string | null
          banco?: string | null
          categoria?: string | null
          cbo?: string | null
          cct_id?: number | null
          cep?: string | null
          cnpj_sindicato?: string | null
          cnpj_tomador?: string | null
          cod_ccusto?: string | null
          cod_departamento?: string | null
          cod_funcao?: string | null
          cod_sindicato?: string | null
          cod_turno?: string | null
          conta?: string | null
          contrato_medmais_id?: number | null
          cpf: string
          created_at?: string
          desc_ccusto?: string | null
          desc_departamento?: string | null
          desc_funcao: string
          desc_sindicato?: string | null
          desc_turno?: string | null
          dt_admissao?: string | null
          dt_demissao?: string | null
          dt_nascimento?: string | null
          email?: string | null
          estado_civil?: string | null
          filial?: string | null
          funcao_precificacao?: string | null
          grau_insalubridade?: string | null
          grau_instrucao?: string | null
          horas_diarias?: number | null
          horas_mensais?: number | null
          horas_semanais?: number | null
          id?: number
          match_confidence?: number | null
          match_manual?: boolean | null
          matricula: string
          municipio?: string | null
          nexti_external_id?: string | null
          nexti_person_id?: number | null
          nome_completo: string
          nome_mae?: string | null
          org_rg?: string | null
          pis?: string | null
          possui_periculosidade?: boolean | null
          possui_plano_saude?: boolean | null
          rg?: string | null
          salario_base: number
          sexo?: string | null
          situacao?: string
          telefone?: string | null
          tipo_contrato?: string | null
          uf_moradia?: string | null
          uf_sindicato?: string | null
          updated_at?: string
        }
        Update: {
          agencia?: string | null
          bairro?: string | null
          banco?: string | null
          categoria?: string | null
          cbo?: string | null
          cct_id?: number | null
          cep?: string | null
          cnpj_sindicato?: string | null
          cnpj_tomador?: string | null
          cod_ccusto?: string | null
          cod_departamento?: string | null
          cod_funcao?: string | null
          cod_sindicato?: string | null
          cod_turno?: string | null
          conta?: string | null
          contrato_medmais_id?: number | null
          cpf?: string
          created_at?: string
          desc_ccusto?: string | null
          desc_departamento?: string | null
          desc_funcao?: string
          desc_sindicato?: string | null
          desc_turno?: string | null
          dt_admissao?: string | null
          dt_demissao?: string | null
          dt_nascimento?: string | null
          email?: string | null
          estado_civil?: string | null
          filial?: string | null
          funcao_precificacao?: string | null
          grau_insalubridade?: string | null
          grau_instrucao?: string | null
          horas_diarias?: number | null
          horas_mensais?: number | null
          horas_semanais?: number | null
          id?: number
          match_confidence?: number | null
          match_manual?: boolean | null
          matricula?: string
          municipio?: string | null
          nexti_external_id?: string | null
          nexti_person_id?: number | null
          nome_completo?: string
          nome_mae?: string | null
          org_rg?: string | null
          pis?: string | null
          possui_periculosidade?: boolean | null
          possui_plano_saude?: boolean | null
          rg?: string | null
          salario_base?: number
          sexo?: string | null
          situacao?: string
          telefone?: string | null
          tipo_contrato?: string | null
          uf_moradia?: string | null
          uf_sindicato?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "funcionarios_cct_id_fkey"
            columns: ["cct_id"]
            isOneToOne: false
            referencedRelation: "cct"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "funcionarios_contrato_medmais_id_fkey"
            columns: ["contrato_medmais_id"]
            isOneToOne: false
            referencedRelation: "contratos_medmais"
            referencedColumns: ["id"]
          },
        ]
      }
      google_oauth_tokens: {
        Row: {
          created_at: string
          encrypted_token: string | null
          expires_at: string | null
          id: string
          token_hash: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          encrypted_token?: string | null
          expires_at?: string | null
          id?: string
          token_hash?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          encrypted_token?: string | null
          expires_at?: string | null
          id?: string
          token_hash?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      knowledge_base_entries: {
        Row: {
          account_id: string
          created_at: string | null
          entry_id: string
          file_path: string
          file_size: number
          filename: string
          folder_id: string
          is_active: boolean | null
          mime_type: string | null
          summary: string
          updated_at: string | null
          usage_context: string | null
        }
        Insert: {
          account_id: string
          created_at?: string | null
          entry_id?: string
          file_path: string
          file_size: number
          filename: string
          folder_id: string
          is_active?: boolean | null
          mime_type?: string | null
          summary: string
          updated_at?: string | null
          usage_context?: string | null
        }
        Update: {
          account_id?: string
          created_at?: string | null
          entry_id?: string
          file_path?: string
          file_size?: number
          filename?: string
          folder_id?: string
          is_active?: boolean | null
          mime_type?: string | null
          summary?: string
          updated_at?: string | null
          usage_context?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_base_entries_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "knowledge_base_folders"
            referencedColumns: ["folder_id"]
          },
        ]
      }
      knowledge_base_folders: {
        Row: {
          account_id: string
          created_at: string | null
          description: string | null
          folder_id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          account_id: string
          created_at?: string | null
          description?: string | null
          folder_id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          created_at?: string | null
          description?: string | null
          folder_id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      matching_log: {
        Row: {
          aceito: boolean | null
          confidence: number | null
          contrato_id: number | null
          created_at: string | null
          funcao_match: string
          funcao_origem: string
          funcionario_id: number | null
          id: number
          metodo: string
        }
        Insert: {
          aceito?: boolean | null
          confidence?: number | null
          contrato_id?: number | null
          created_at?: string | null
          funcao_match: string
          funcao_origem: string
          funcionario_id?: number | null
          id?: number
          metodo: string
        }
        Update: {
          aceito?: boolean | null
          confidence?: number | null
          contrato_id?: number | null
          created_at?: string | null
          funcao_match?: string
          funcao_origem?: string
          funcionario_id?: number | null
          id?: number
          metodo?: string
        }
        Relationships: [
          {
            foreignKeyName: "matching_log_contrato_id_fkey"
            columns: ["contrato_id"]
            isOneToOne: false
            referencedRelation: "contratos_medmais"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matching_log_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
        ]
      }
      medmais_processos: {
        Row: {
          acordo_pos_sentenca: string | null
          advogados_ambas_partes: string | null
          analise_table: Json | null
          arquivo_original: string | null
          atos_decisorios: string | null
          cargo_reclamante: string | null
          cenario_base: string | null
          cenario_otimista: string | null
          cenario_pessimista: string | null
          classificacao_risco: string | null
          contribuicao_previdenciaria: string | null
          cpf_reclamante: string | null
          created_at: string | null
          data_admissao: string | null
          data_avaliacao_risco: string | null
          data_base_calculo: string | null
          data_demissao: string | null
          data_distribuicao: string | null
          data_processamento: string | null
          data_proxima_reavaliacao: string | null
          data_sentenca: string | null
          data_ultima_movimentacao: string | null
          departamento_reclamante: string | null
          fase_processual_atual: string | null
          filial_reclamante: string | null
          filial_unidade_processo: string | null
          fundamentacao_sentenca: string | null
          gestor_direto: string | null
          havia_advertencias: string | null
          id: number
          imposto_renda_retido: string | null
          indice_correcao: string | null
          juiz: string | null
          justificativa_risco: string | null
          liminar_ativa: string | null
          motivo_principal_reclamacao: string | null
          nome_reclamado: string | null
          nome_reclamante: string | null
          numero_caso: string | null
          numero_processo: string | null
          pedidos_verbas: string | null
          percentual_honorarios_advocaticios: string | null
          percentual_probabilidade_perda: string | null
          recomendacao_estrategica: string | null
          recurso_cada_parte: string | null
          responsavel_avaliacao: string | null
          resultado_recurso: string | null
          resultado_sentenca: string | null
          resumo_verbas_deferidas_indeferidas: string | null
          status_processo: string | null
          taxa_juros_mensal: string | null
          tempo_casa_meses: string | null
          tentou_acordo_extrajudicial: string | null
          tipo_desligamento: string | null
          tribunal: string | null
          ultimo_salario: string | null
          updated_at: string | null
          valor_acordo_pos_sentenca: string | null
          valor_acordo_sugerido: string | null
          valor_causa_original: string | null
          valor_corrigido: string | null
          valor_honorarios_advocaticios: string | null
          valor_juros: string | null
          valor_liquido_estimado: string | null
          valor_original_condenacao: string | null
          valor_pos_recurso: string | null
          valor_provisionado: string | null
          valor_total_atualizado: string | null
          valor_total_condenacao: string | null
          vara: string | null
        }
        Insert: {
          acordo_pos_sentenca?: string | null
          advogados_ambas_partes?: string | null
          analise_table?: Json | null
          arquivo_original?: string | null
          atos_decisorios?: string | null
          cargo_reclamante?: string | null
          cenario_base?: string | null
          cenario_otimista?: string | null
          cenario_pessimista?: string | null
          classificacao_risco?: string | null
          contribuicao_previdenciaria?: string | null
          cpf_reclamante?: string | null
          created_at?: string | null
          data_admissao?: string | null
          data_avaliacao_risco?: string | null
          data_base_calculo?: string | null
          data_demissao?: string | null
          data_distribuicao?: string | null
          data_processamento?: string | null
          data_proxima_reavaliacao?: string | null
          data_sentenca?: string | null
          data_ultima_movimentacao?: string | null
          departamento_reclamante?: string | null
          fase_processual_atual?: string | null
          filial_reclamante?: string | null
          filial_unidade_processo?: string | null
          fundamentacao_sentenca?: string | null
          gestor_direto?: string | null
          havia_advertencias?: string | null
          id?: number
          imposto_renda_retido?: string | null
          indice_correcao?: string | null
          juiz?: string | null
          justificativa_risco?: string | null
          liminar_ativa?: string | null
          motivo_principal_reclamacao?: string | null
          nome_reclamado?: string | null
          nome_reclamante?: string | null
          numero_caso?: string | null
          numero_processo?: string | null
          pedidos_verbas?: string | null
          percentual_honorarios_advocaticios?: string | null
          percentual_probabilidade_perda?: string | null
          recomendacao_estrategica?: string | null
          recurso_cada_parte?: string | null
          responsavel_avaliacao?: string | null
          resultado_recurso?: string | null
          resultado_sentenca?: string | null
          resumo_verbas_deferidas_indeferidas?: string | null
          status_processo?: string | null
          taxa_juros_mensal?: string | null
          tempo_casa_meses?: string | null
          tentou_acordo_extrajudicial?: string | null
          tipo_desligamento?: string | null
          tribunal?: string | null
          ultimo_salario?: string | null
          updated_at?: string | null
          valor_acordo_pos_sentenca?: string | null
          valor_acordo_sugerido?: string | null
          valor_causa_original?: string | null
          valor_corrigido?: string | null
          valor_honorarios_advocaticios?: string | null
          valor_juros?: string | null
          valor_liquido_estimado?: string | null
          valor_original_condenacao?: string | null
          valor_pos_recurso?: string | null
          valor_provisionado?: string | null
          valor_total_atualizado?: string | null
          valor_total_condenacao?: string | null
          vara?: string | null
        }
        Update: {
          acordo_pos_sentenca?: string | null
          advogados_ambas_partes?: string | null
          analise_table?: Json | null
          arquivo_original?: string | null
          atos_decisorios?: string | null
          cargo_reclamante?: string | null
          cenario_base?: string | null
          cenario_otimista?: string | null
          cenario_pessimista?: string | null
          classificacao_risco?: string | null
          contribuicao_previdenciaria?: string | null
          cpf_reclamante?: string | null
          created_at?: string | null
          data_admissao?: string | null
          data_avaliacao_risco?: string | null
          data_base_calculo?: string | null
          data_demissao?: string | null
          data_distribuicao?: string | null
          data_processamento?: string | null
          data_proxima_reavaliacao?: string | null
          data_sentenca?: string | null
          data_ultima_movimentacao?: string | null
          departamento_reclamante?: string | null
          fase_processual_atual?: string | null
          filial_reclamante?: string | null
          filial_unidade_processo?: string | null
          fundamentacao_sentenca?: string | null
          gestor_direto?: string | null
          havia_advertencias?: string | null
          id?: number
          imposto_renda_retido?: string | null
          indice_correcao?: string | null
          juiz?: string | null
          justificativa_risco?: string | null
          liminar_ativa?: string | null
          motivo_principal_reclamacao?: string | null
          nome_reclamado?: string | null
          nome_reclamante?: string | null
          numero_caso?: string | null
          numero_processo?: string | null
          pedidos_verbas?: string | null
          percentual_honorarios_advocaticios?: string | null
          percentual_probabilidade_perda?: string | null
          recomendacao_estrategica?: string | null
          recurso_cada_parte?: string | null
          responsavel_avaliacao?: string | null
          resultado_recurso?: string | null
          resultado_sentenca?: string | null
          resumo_verbas_deferidas_indeferidas?: string | null
          status_processo?: string | null
          taxa_juros_mensal?: string | null
          tempo_casa_meses?: string | null
          tentou_acordo_extrajudicial?: string | null
          tipo_desligamento?: string | null
          tribunal?: string | null
          ultimo_salario?: string | null
          updated_at?: string | null
          valor_acordo_pos_sentenca?: string | null
          valor_acordo_sugerido?: string | null
          valor_causa_original?: string | null
          valor_corrigido?: string | null
          valor_honorarios_advocaticios?: string | null
          valor_juros?: string | null
          valor_liquido_estimado?: string | null
          valor_original_condenacao?: string | null
          valor_pos_recurso?: string | null
          valor_provisionado?: string | null
          valor_total_atualizado?: string | null
          valor_total_condenacao?: string | null
          vara?: string | null
        }
        Relationships: []
      }
      medmais_processos_duplicate: {
        Row: {
          acordo_pos_sentenca: string | null
          advogados_ambas_partes: string | null
          analise_table: Json | null
          arquivo_original: string | null
          atos_decisorios: string | null
          cargo_reclamante: string | null
          cenario_base: string | null
          cenario_otimista: string | null
          cenario_pessimista: string | null
          classificacao_risco: string | null
          contribuicao_previdenciaria: string | null
          cpf_reclamante: string | null
          created_at: string | null
          data_admissao: string | null
          data_avaliacao_risco: string | null
          data_base_calculo: string | null
          data_demissao: string | null
          data_distribuicao: string | null
          data_processamento: string | null
          data_proxima_reavaliacao: string | null
          data_sentenca: string | null
          data_ultima_movimentacao: string | null
          departamento_reclamante: string | null
          fase_processual_atual: string | null
          filial_reclamante: string | null
          filial_unidade_processo: string | null
          fundamentacao_sentenca: string | null
          gestor_direto: string | null
          havia_advertencias: string | null
          id: number
          imposto_renda_retido: string | null
          indice_correcao: string | null
          juiz: string | null
          justificativa_risco: string | null
          liminar_ativa: string | null
          motivo_principal_reclamacao: string | null
          nome_reclamado: string | null
          nome_reclamante: string | null
          numero_caso: string | null
          numero_processo: string | null
          pedidos_verbas: string | null
          percentual_honorarios_advocaticios: string | null
          percentual_probabilidade_perda: string | null
          recomendacao_estrategica: string | null
          recurso_cada_parte: string | null
          responsavel_avaliacao: string | null
          resultado_recurso: string | null
          resultado_sentenca: string | null
          resumo_verbas_deferidas_indeferidas: string | null
          status_processo: string | null
          taxa_juros_mensal: string | null
          tempo_casa_meses: string | null
          tentou_acordo_extrajudicial: string | null
          tipo_desligamento: string | null
          tribunal: string | null
          ultimo_salario: string | null
          updated_at: string | null
          valor_acordo_pos_sentenca: string | null
          valor_acordo_sugerido: string | null
          valor_causa_original: string | null
          valor_corrigido: string | null
          valor_honorarios_advocaticios: string | null
          valor_juros: string | null
          valor_liquido_estimado: string | null
          valor_original_condenacao: string | null
          valor_pos_recurso: string | null
          valor_provisionado: string | null
          valor_total_atualizado: string | null
          valor_total_condenacao: string | null
          vara: string | null
        }
        Insert: {
          acordo_pos_sentenca?: string | null
          advogados_ambas_partes?: string | null
          analise_table?: Json | null
          arquivo_original?: string | null
          atos_decisorios?: string | null
          cargo_reclamante?: string | null
          cenario_base?: string | null
          cenario_otimista?: string | null
          cenario_pessimista?: string | null
          classificacao_risco?: string | null
          contribuicao_previdenciaria?: string | null
          cpf_reclamante?: string | null
          created_at?: string | null
          data_admissao?: string | null
          data_avaliacao_risco?: string | null
          data_base_calculo?: string | null
          data_demissao?: string | null
          data_distribuicao?: string | null
          data_processamento?: string | null
          data_proxima_reavaliacao?: string | null
          data_sentenca?: string | null
          data_ultima_movimentacao?: string | null
          departamento_reclamante?: string | null
          fase_processual_atual?: string | null
          filial_reclamante?: string | null
          filial_unidade_processo?: string | null
          fundamentacao_sentenca?: string | null
          gestor_direto?: string | null
          havia_advertencias?: string | null
          id?: number
          imposto_renda_retido?: string | null
          indice_correcao?: string | null
          juiz?: string | null
          justificativa_risco?: string | null
          liminar_ativa?: string | null
          motivo_principal_reclamacao?: string | null
          nome_reclamado?: string | null
          nome_reclamante?: string | null
          numero_caso?: string | null
          numero_processo?: string | null
          pedidos_verbas?: string | null
          percentual_honorarios_advocaticios?: string | null
          percentual_probabilidade_perda?: string | null
          recomendacao_estrategica?: string | null
          recurso_cada_parte?: string | null
          responsavel_avaliacao?: string | null
          resultado_recurso?: string | null
          resultado_sentenca?: string | null
          resumo_verbas_deferidas_indeferidas?: string | null
          status_processo?: string | null
          taxa_juros_mensal?: string | null
          tempo_casa_meses?: string | null
          tentou_acordo_extrajudicial?: string | null
          tipo_desligamento?: string | null
          tribunal?: string | null
          ultimo_salario?: string | null
          updated_at?: string | null
          valor_acordo_pos_sentenca?: string | null
          valor_acordo_sugerido?: string | null
          valor_causa_original?: string | null
          valor_corrigido?: string | null
          valor_honorarios_advocaticios?: string | null
          valor_juros?: string | null
          valor_liquido_estimado?: string | null
          valor_original_condenacao?: string | null
          valor_pos_recurso?: string | null
          valor_provisionado?: string | null
          valor_total_atualizado?: string | null
          valor_total_condenacao?: string | null
          vara?: string | null
        }
        Update: {
          acordo_pos_sentenca?: string | null
          advogados_ambas_partes?: string | null
          analise_table?: Json | null
          arquivo_original?: string | null
          atos_decisorios?: string | null
          cargo_reclamante?: string | null
          cenario_base?: string | null
          cenario_otimista?: string | null
          cenario_pessimista?: string | null
          classificacao_risco?: string | null
          contribuicao_previdenciaria?: string | null
          cpf_reclamante?: string | null
          created_at?: string | null
          data_admissao?: string | null
          data_avaliacao_risco?: string | null
          data_base_calculo?: string | null
          data_demissao?: string | null
          data_distribuicao?: string | null
          data_processamento?: string | null
          data_proxima_reavaliacao?: string | null
          data_sentenca?: string | null
          data_ultima_movimentacao?: string | null
          departamento_reclamante?: string | null
          fase_processual_atual?: string | null
          filial_reclamante?: string | null
          filial_unidade_processo?: string | null
          fundamentacao_sentenca?: string | null
          gestor_direto?: string | null
          havia_advertencias?: string | null
          id?: number
          imposto_renda_retido?: string | null
          indice_correcao?: string | null
          juiz?: string | null
          justificativa_risco?: string | null
          liminar_ativa?: string | null
          motivo_principal_reclamacao?: string | null
          nome_reclamado?: string | null
          nome_reclamante?: string | null
          numero_caso?: string | null
          numero_processo?: string | null
          pedidos_verbas?: string | null
          percentual_honorarios_advocaticios?: string | null
          percentual_probabilidade_perda?: string | null
          recomendacao_estrategica?: string | null
          recurso_cada_parte?: string | null
          responsavel_avaliacao?: string | null
          resultado_recurso?: string | null
          resultado_sentenca?: string | null
          resumo_verbas_deferidas_indeferidas?: string | null
          status_processo?: string | null
          taxa_juros_mensal?: string | null
          tempo_casa_meses?: string | null
          tentou_acordo_extrajudicial?: string | null
          tipo_desligamento?: string | null
          tribunal?: string | null
          ultimo_salario?: string | null
          updated_at?: string | null
          valor_acordo_pos_sentenca?: string | null
          valor_acordo_sugerido?: string | null
          valor_causa_original?: string | null
          valor_corrigido?: string | null
          valor_honorarios_advocaticios?: string | null
          valor_juros?: string | null
          valor_liquido_estimado?: string | null
          valor_original_condenacao?: string | null
          valor_pos_recurso?: string | null
          valor_provisionado?: string | null
          valor_total_atualizado?: string | null
          valor_total_condenacao?: string | null
          vara?: string | null
        }
        Relationships: []
      }
      medmais_processos_etapa0: {
        Row: {
          created_at: string
          id: number
          processo_id: string | null
          tabela: Json | null
          url_documento: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          processo_id?: string | null
          tabela?: Json | null
          url_documento?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          processo_id?: string | null
          tabela?: Json | null
          url_documento?: string | null
        }
        Relationships: []
      }
      memory_extraction_queue: {
        Row: {
          account_id: string
          created_at: string
          error_message: string | null
          message_ids: Json
          priority: number | null
          processed_at: string | null
          queue_id: string
          status: Database["public"]["Enums"]["memory_extraction_status"]
          thread_id: string
        }
        Insert: {
          account_id: string
          created_at?: string
          error_message?: string | null
          message_ids?: Json
          priority?: number | null
          processed_at?: string | null
          queue_id?: string
          status?: Database["public"]["Enums"]["memory_extraction_status"]
          thread_id: string
        }
        Update: {
          account_id?: string
          created_at?: string
          error_message?: string | null
          message_ids?: Json
          priority?: number | null
          processed_at?: string | null
          queue_id?: string
          status?: Database["public"]["Enums"]["memory_extraction_status"]
          thread_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_thread"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      messages: {
        Row: {
          agent_id: string | null
          agent_version_id: string | null
          content: Json
          created_at: string
          is_llm_message: boolean
          message_id: string
          metadata: Json | null
          thread_id: string
          type: string
          updated_at: string
        }
        Insert: {
          agent_id?: string | null
          agent_version_id?: string | null
          content: Json
          created_at?: string
          is_llm_message?: boolean
          message_id?: string
          metadata?: Json | null
          thread_id: string
          type: string
          updated_at?: string
        }
        Update: {
          agent_id?: string | null
          agent_version_id?: string | null
          content?: Json
          created_at?: string
          is_llm_message?: boolean
          message_id?: string
          metadata?: Json | null
          thread_id?: string
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
          {
            foreignKeyName: "messages_agent_version_id_fkey"
            columns: ["agent_version_id"]
            isOneToOne: false
            referencedRelation: "agent_versions"
            referencedColumns: ["version_id"]
          },
          {
            foreignKeyName: "messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      metricas_diarias: {
        Row: {
          atrasadas: number | null
          concluidas: number | null
          created_at: string
          data_registro: string
          em_progresso: number | null
          id: string
          membro: string | null
        }
        Insert: {
          atrasadas?: number | null
          concluidas?: number | null
          created_at?: string
          data_registro?: string
          em_progresso?: number | null
          id?: string
          membro?: string | null
        }
        Update: {
          atrasadas?: number | null
          concluidas?: number | null
          created_at?: string
          data_registro?: string
          em_progresso?: number | null
          id?: string
          membro?: string | null
        }
        Relationships: []
      }
      notification_settings: {
        Row: {
          account_id: string
          created_at: string | null
          email_enabled: boolean | null
          in_app_enabled: boolean | null
          push_enabled: boolean | null
          updated_at: string | null
        }
        Insert: {
          account_id: string
          created_at?: string | null
          email_enabled?: boolean | null
          in_app_enabled?: boolean | null
          push_enabled?: boolean | null
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          created_at?: string | null
          email_enabled?: boolean | null
          in_app_enabled?: boolean | null
          push_enabled?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      oauth_installations: {
        Row: {
          access_token: string
          expires_in: number | null
          installation_id: string
          installed_at: string | null
          provider: string
          provider_data: Json | null
          refresh_token: string | null
          scope: string | null
          trigger_id: string
          updated_at: string | null
        }
        Insert: {
          access_token: string
          expires_in?: number | null
          installation_id?: string
          installed_at?: string | null
          provider: string
          provider_data?: Json | null
          refresh_token?: string | null
          scope?: string | null
          trigger_id: string
          updated_at?: string | null
        }
        Update: {
          access_token?: string
          expires_in?: number | null
          installation_id?: string
          installed_at?: string | null
          provider?: string
          provider_data?: Json | null
          refresh_token?: string | null
          scope?: string | null
          trigger_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "oauth_installations_trigger_id_fkey"
            columns: ["trigger_id"]
            isOneToOne: false
            referencedRelation: "agent_triggers"
            referencedColumns: ["trigger_id"]
          },
        ]
      }
      "precificação por contrato": {
        Row: {
          "% Adicional Noturno": string | null
          "% Gratificação": string | null
          "% Hora Extra": string | null
          "1/12 13° Salário": string | null
          "1/12 Férias": string | null
          "1/3 Abono Férias": string | null
          "Ausências e Substituições (3%)": string | null
          "Auxílio Alim.": string | null
          "Aviso Prévio Indenizado (0,22%)": string | null
          "Benefício Social": string | null
          "Carga Horária Mensal": string | null
          Contrato: string | null
          "Desconto VR": string | null
          "Desconto VT": string | null
          "Dias Trabalho": string | null
          "Dias Trabalho_1": string | null
          DSR: string | null
          DSR_1: string | null
          "FGTS 8%": string | null
          Gratificação: string | null
          Gratificação1: string | null
          "Horas Extras": string | null
          "Horas Noturnas": string | null
          id: string
          "Incide Gratificação?": string | null
          "Incide Multa FGTS (40%)": string | null
          "Informe o Grau": string | null
          "INSS Patronal 26,8%": string | null
          "Multa FGTS 40%": string | null
          Odonto: string | null
          "Plano de Saúde": string | null
          "Possui?": string | null
          Profissional: string | null
          "Quantidade ": string | null
          "Redutor INSS": string | null
          "Salário CLT": string | null
          "Salário PJ": string | null
          "Seguro de Vida": string | null
          Valor: string | null
          "Valor Adicional Noturno": string | null
          "Valor Base Insalubridade": string | null
          "Valor Horas Extras": string | null
          Valor_1: string | null
          "VR Total": string | null
          "VR Unitário": string | null
          "VT Total": string | null
          "VT Unitário": string | null
        }
        Insert: {
          "% Adicional Noturno"?: string | null
          "% Gratificação"?: string | null
          "% Hora Extra"?: string | null
          "1/12 13° Salário"?: string | null
          "1/12 Férias"?: string | null
          "1/3 Abono Férias"?: string | null
          "Ausências e Substituições (3%)"?: string | null
          "Auxílio Alim."?: string | null
          "Aviso Prévio Indenizado (0,22%)"?: string | null
          "Benefício Social"?: string | null
          "Carga Horária Mensal"?: string | null
          Contrato?: string | null
          "Desconto VR"?: string | null
          "Desconto VT"?: string | null
          "Dias Trabalho"?: string | null
          "Dias Trabalho_1"?: string | null
          DSR?: string | null
          DSR_1?: string | null
          "FGTS 8%"?: string | null
          Gratificação?: string | null
          Gratificação1?: string | null
          "Horas Extras"?: string | null
          "Horas Noturnas"?: string | null
          id?: string
          "Incide Gratificação?"?: string | null
          "Incide Multa FGTS (40%)"?: string | null
          "Informe o Grau"?: string | null
          "INSS Patronal 26,8%"?: string | null
          "Multa FGTS 40%"?: string | null
          Odonto?: string | null
          "Plano de Saúde"?: string | null
          "Possui?"?: string | null
          Profissional?: string | null
          "Quantidade "?: string | null
          "Redutor INSS"?: string | null
          "Salário CLT"?: string | null
          "Salário PJ"?: string | null
          "Seguro de Vida"?: string | null
          Valor?: string | null
          "Valor Adicional Noturno"?: string | null
          "Valor Base Insalubridade"?: string | null
          "Valor Horas Extras"?: string | null
          Valor_1?: string | null
          "VR Total"?: string | null
          "VR Unitário"?: string | null
          "VT Total"?: string | null
          "VT Unitário"?: string | null
        }
        Update: {
          "% Adicional Noturno"?: string | null
          "% Gratificação"?: string | null
          "% Hora Extra"?: string | null
          "1/12 13° Salário"?: string | null
          "1/12 Férias"?: string | null
          "1/3 Abono Férias"?: string | null
          "Ausências e Substituições (3%)"?: string | null
          "Auxílio Alim."?: string | null
          "Aviso Prévio Indenizado (0,22%)"?: string | null
          "Benefício Social"?: string | null
          "Carga Horária Mensal"?: string | null
          Contrato?: string | null
          "Desconto VR"?: string | null
          "Desconto VT"?: string | null
          "Dias Trabalho"?: string | null
          "Dias Trabalho_1"?: string | null
          DSR?: string | null
          DSR_1?: string | null
          "FGTS 8%"?: string | null
          Gratificação?: string | null
          Gratificação1?: string | null
          "Horas Extras"?: string | null
          "Horas Noturnas"?: string | null
          id?: string
          "Incide Gratificação?"?: string | null
          "Incide Multa FGTS (40%)"?: string | null
          "Informe o Grau"?: string | null
          "INSS Patronal 26,8%"?: string | null
          "Multa FGTS 40%"?: string | null
          Odonto?: string | null
          "Plano de Saúde"?: string | null
          "Possui?"?: string | null
          Profissional?: string | null
          "Quantidade "?: string | null
          "Redutor INSS"?: string | null
          "Salário CLT"?: string | null
          "Salário PJ"?: string | null
          "Seguro de Vida"?: string | null
          Valor?: string | null
          "Valor Adicional Noturno"?: string | null
          "Valor Base Insalubridade"?: string | null
          "Valor Horas Extras"?: string | null
          Valor_1?: string | null
          "VR Total"?: string | null
          "VR Unitário"?: string | null
          "VT Total"?: string | null
          "VT Unitário"?: string | null
        }
        Relationships: []
      }
      pricing_views: {
        Row: {
          first_viewed_at: string
          last_viewed_at: string
          user_id: string
          view_count: number
        }
        Insert: {
          first_viewed_at?: string
          last_viewed_at?: string
          user_id: string
          view_count?: number
        }
        Update: {
          first_viewed_at?: string
          last_viewed_at?: string
          user_id?: string
          view_count?: number
        }
        Relationships: []
      }
      processar_agora: {
        Row: {
          created_at: string | null
          id: number
          projeto_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          projeto_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          projeto_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "processar_agora_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projeto"
            referencedColumns: ["id"]
          },
        ]
      }
      processing_metrics: {
        Row: {
          created_at: string | null
          details: Json | null
          duration_ms: number | null
          id: number
          metric_type: string
          metric_value: number | null
          projeto_id: string | null
        }
        Insert: {
          created_at?: string | null
          details?: Json | null
          duration_ms?: number | null
          id?: number
          metric_type: string
          metric_value?: number | null
          projeto_id?: string | null
        }
        Update: {
          created_at?: string | null
          details?: Json | null
          duration_ms?: number | null
          id?: number
          metric_type?: string
          metric_value?: number | null
          projeto_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          account_id: string
          categories: string[] | null
          category: string | null
          created_at: string
          description: string | null
          icon_name: string | null
          is_public: boolean | null
          last_categorized_at: string | null
          name: string
          project_id: string
          sandbox: Json | null
          sandbox_resource_id: string | null
          updated_at: string
        }
        Insert: {
          account_id: string
          categories?: string[] | null
          category?: string | null
          created_at?: string
          description?: string | null
          icon_name?: string | null
          is_public?: boolean | null
          last_categorized_at?: string | null
          name: string
          project_id?: string
          sandbox?: Json | null
          sandbox_resource_id?: string | null
          updated_at?: string
        }
        Update: {
          account_id?: string
          categories?: string[] | null
          category?: string | null
          created_at?: string
          description?: string | null
          icon_name?: string | null
          is_public?: boolean | null
          last_categorized_at?: string | null
          name?: string
          project_id?: string
          sandbox?: Json | null
          sandbox_resource_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_sandbox_resource_id_fkey"
            columns: ["sandbox_resource_id"]
            isOneToOne: false
            referencedRelation: "resources"
            referencedColumns: ["id"]
          },
        ]
      }
      projeto: {
        Row: {
          created_at: string | null
          id: string
          nome: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          nome: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          nome?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      prompt_config: {
        Row: {
          created_at: string | null
          id: number
          projeto_id: string | null
          prompt_text: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          projeto_id?: string | null
          prompt_text: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          projeto_id?: string | null
          prompt_text?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "prompt_config_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: true
            referencedRelation: "projeto"
            referencedColumns: ["id"]
          },
        ]
      }
      referral_codes: {
        Row: {
          account_id: string
          code: string
          created_at: string | null
          expired_at: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          account_id: string
          code: string
          created_at?: string | null
          expired_at?: string | null
          id?: string
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          code?: string
          created_at?: string | null
          expired_at?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      referral_stats: {
        Row: {
          account_id: string
          created_at: string | null
          last_referral_at: string | null
          successful_referrals: number
          total_credits_earned: number
          total_referrals: number
          updated_at: string | null
        }
        Insert: {
          account_id: string
          created_at?: string | null
          last_referral_at?: string | null
          successful_referrals?: number
          total_credits_earned?: number
          total_referrals?: number
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          created_at?: string | null
          last_referral_at?: string | null
          successful_referrals?: number
          total_credits_earned?: number
          total_referrals?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      referrals: {
        Row: {
          completed_at: string | null
          created_at: string | null
          credits_awarded: number
          id: string
          metadata: Json | null
          referral_code: string
          referred_account_id: string
          referrer_id: string
          status: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          credits_awarded?: number
          id?: string
          metadata?: Json | null
          referral_code: string
          referred_account_id: string
          referrer_id: string
          status?: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          credits_awarded?: number
          id?: string
          metadata?: Json | null
          referral_code?: string
          referred_account_id?: string
          referrer_id?: string
          status?: string
        }
        Relationships: []
      }
      refund_history: {
        Row: {
          account_id: string
          amount_refunded: number
          created_at: string | null
          credits_deducted: number
          error_message: string | null
          id: string
          metadata: Json | null
          processed_at: string | null
          refund_reason: string | null
          status: string
          stripe_charge_id: string
          stripe_payment_intent_id: string | null
          stripe_refund_id: string
        }
        Insert: {
          account_id: string
          amount_refunded: number
          created_at?: string | null
          credits_deducted?: number
          error_message?: string | null
          id?: string
          metadata?: Json | null
          processed_at?: string | null
          refund_reason?: string | null
          status?: string
          stripe_charge_id: string
          stripe_payment_intent_id?: string | null
          stripe_refund_id: string
        }
        Update: {
          account_id?: string
          amount_refunded?: number
          created_at?: string | null
          credits_deducted?: number
          error_message?: string | null
          id?: string
          metadata?: Json | null
          processed_at?: string | null
          refund_reason?: string | null
          status?: string
          stripe_charge_id?: string
          stripe_payment_intent_id?: string | null
          stripe_refund_id?: string
        }
        Relationships: []
      }
      renewal_processing: {
        Row: {
          account_id: string
          created_at: string | null
          credits_granted: number
          id: string
          period_end: number
          period_start: number
          processed_at: string | null
          processed_by: string
          provider: string | null
          revenuecat_product_id: string | null
          revenuecat_transaction_id: string | null
          stripe_event_id: string | null
          subscription_id: string
        }
        Insert: {
          account_id: string
          created_at?: string | null
          credits_granted: number
          id?: string
          period_end: number
          period_start: number
          processed_at?: string | null
          processed_by: string
          provider?: string | null
          revenuecat_product_id?: string | null
          revenuecat_transaction_id?: string | null
          stripe_event_id?: string | null
          subscription_id: string
        }
        Update: {
          account_id?: string
          created_at?: string | null
          credits_granted?: number
          id?: string
          period_end?: number
          period_start?: number
          processed_at?: string | null
          processed_by?: string
          provider?: string | null
          revenuecat_product_id?: string | null
          revenuecat_transaction_id?: string | null
          stripe_event_id?: string | null
          subscription_id?: string
        }
        Relationships: []
      }
      resources: {
        Row: {
          account_id: string | null
          config: Json | null
          created_at: string | null
          external_id: string | null
          id: string
          last_used_at: string | null
          pooled_at: string | null
          status: string
          type: string
          updated_at: string | null
        }
        Insert: {
          account_id?: string | null
          config?: Json | null
          created_at?: string | null
          external_id?: string | null
          id?: string
          last_used_at?: string | null
          pooled_at?: string | null
          status?: string
          type: string
          updated_at?: string | null
        }
        Update: {
          account_id?: string | null
          config?: Json | null
          created_at?: string | null
          external_id?: string | null
          id?: string
          last_used_at?: string | null
          pooled_at?: string | null
          status?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      respaldo_jurisprudencial_defesa: {
        Row: {
          classificacao_geral: string | null
          data_analise: string | null
          data_decisao: string | null
          decisao: string | null
          documento_decisao: string | null
          fundamentacao_predominante: string | null
          id: number
          instancia: string | null
          juiz_relator: string | null
          numero_processo: string
          q25_1_aplicabilidade: string | null
          q25_1_citacao: string | null
          q25_1_forca_vinculante: string | null
          q25_1_fundamento_legal: string | null
          q25_1_protecao_arrematante: string | null
          q25_10_aplicabilidade: string | null
          q25_10_citacao: string | null
          q25_10_forca_vinculante: string | null
          q25_10_fundamento_legal: string | null
          q25_10_pagamento_homologado: string | null
          q25_11_aplicabilidade: string | null
          q25_11_citacao: string | null
          q25_11_distincao_pagamentos: string | null
          q25_11_forca_vinculante: string | null
          q25_11_fundamento_legal: string | null
          q25_12_anuencia_credor: string | null
          q25_12_aplicabilidade: string | null
          q25_12_citacao: string | null
          q25_12_forca_vinculante: string | null
          q25_12_fundamento_legal: string | null
          q25_13_aplicabilidade: string | null
          q25_13_citacao: string | null
          q25_13_forca_vinculante: string | null
          q25_13_fundamento_legal: string | null
          q25_13_reducao_valor_onus: string | null
          q25_14_aplicabilidade: string | null
          q25_14_citacao: string | null
          q25_14_exigencia_laudo: string | null
          q25_14_forca_vinculante: string | null
          q25_14_fundamento_legal: string | null
          q25_15_aplicabilidade: string | null
          q25_15_citacao: string | null
          q25_15_desagio_justificado: string | null
          q25_15_forca_vinculante: string | null
          q25_15_fundamento_legal: string | null
          q25_16_aplicabilidade: string | null
          q25_16_citacao: string | null
          q25_16_forca_vinculante: string | null
          q25_16_fundamento_legal: string | null
          q25_16_preco_leilao: string | null
          q25_17_aplicabilidade: string | null
          q25_17_citacao: string | null
          q25_17_forca_vinculante: string | null
          q25_17_fundamento_legal: string | null
          q25_17_incompetencia_anular: string | null
          q25_18_aplicabilidade: string | null
          q25_18_citacao: string | null
          q25_18_forca_vinculante: string | null
          q25_18_fundamento_legal: string | null
          q25_18_vedacao_revisao: string | null
          q25_19_aplicabilidade: string | null
          q25_19_citacao: string | null
          q25_19_forca_vinculante: string | null
          q25_19_fundamento_legal: string | null
          q25_19_questao_prejudicial: string | null
          q25_2_aplicabilidade: string | null
          q25_2_citacao: string | null
          q25_2_coisa_julgada_civil: string | null
          q25_2_forca_vinculante: string | null
          q25_2_fundamento_legal: string | null
          q25_20_aplicabilidade: string | null
          q25_20_citacao: string | null
          q25_20_competencia_exclusiva: string | null
          q25_20_forca_vinculante: string | null
          q25_20_fundamento_legal: string | null
          q25_21_aplicabilidade: string | null
          q25_21_citacao: string | null
          q25_21_eficacia_coisa_julgada: string | null
          q25_21_forca_vinculante: string | null
          q25_21_fundamento_legal: string | null
          q25_22_aplicabilidade: string | null
          q25_22_citacao: string | null
          q25_22_forca_vinculante: string | null
          q25_22_fundamento_legal: string | null
          q25_22_preclusao_consumativa: string | null
          q25_23_aplicabilidade: string | null
          q25_23_citacao: string | null
          q25_23_eficacia_preclusiva: string | null
          q25_23_forca_vinculante: string | null
          q25_23_fundamento_legal: string | null
          q25_24_aplicabilidade: string | null
          q25_24_citacao: string | null
          q25_24_forca_vinculante: string | null
          q25_24_fundamento_legal: string | null
          q25_24_hierarquia_credores: string | null
          q25_25_aplicabilidade: string | null
          q25_25_citacao: string | null
          q25_25_entendimento_restritivo: string | null
          q25_25_forca_vinculante: string | null
          q25_25_fundamento_legal: string | null
          q25_26_aplicabilidade: string | null
          q25_26_citacao: string | null
          q25_26_forca_vinculante: string | null
          q25_26_fundamento_legal: string | null
          q25_26_requisitos_cumulativos: string | null
          q25_27_aplicabilidade: string | null
          q25_27_citacao: string | null
          q25_27_forca_vinculante: string | null
          q25_27_fundamento_legal: string | null
          q25_27_vedacao_atalho: string | null
          q25_28_aplicabilidade: string | null
          q25_28_citacao: string | null
          q25_28_cumulacao_requisitos: string | null
          q25_28_forca_vinculante: string | null
          q25_28_fundamento_legal: string | null
          q25_29_aplicabilidade: string | null
          q25_29_citacao: string | null
          q25_29_forca_vinculante: string | null
          q25_29_fundamento_legal: string | null
          q25_29_prazo_prescricional: string | null
          q25_3_aplicabilidade: string | null
          q25_3_citacao: string | null
          q25_3_direito_adquirido: string | null
          q25_3_forca_vinculante: string | null
          q25_3_fundamento_legal: string | null
          q25_30_aplicabilidade: string | null
          q25_30_citacao: string | null
          q25_30_forca_vinculante: string | null
          q25_30_fundamento_legal: string | null
          q25_30_preclusao_temporal: string | null
          q25_31_aplicabilidade: string | null
          q25_31_citacao: string | null
          q25_31_distincao_prazos: string | null
          q25_31_forca_vinculante: string | null
          q25_31_fundamento_legal: string | null
          q25_32_aplicabilidade: string | null
          q25_32_citacao: string | null
          q25_32_forca_vinculante: string | null
          q25_32_fundamento_legal: string | null
          q25_32_preclusao_inercia: string | null
          q25_33_aplicabilidade: string | null
          q25_33_citacao: string | null
          q25_33_forca_vinculante: string | null
          q25_33_fundamento_legal: string | null
          q25_33_vinculacao_cessionario: string | null
          q25_34_aplicabilidade: string | null
          q25_34_citacao: string | null
          q25_34_forca_vinculante: string | null
          q25_34_fundamento_legal: string | null
          q25_34_ma_fe_credor: string | null
          q25_35_aplicabilidade: string | null
          q25_35_citacao: string | null
          q25_35_forca_vinculante: string | null
          q25_35_fundamento_legal: string | null
          q25_35_litisconsorcio: string | null
          q25_36_aplicabilidade: string | null
          q25_36_chamamento_processo: string | null
          q25_36_citacao: string | null
          q25_36_forca_vinculante: string | null
          q25_36_fundamento_legal: string | null
          q25_37_aplicabilidade: string | null
          q25_37_citacao: string | null
          q25_37_forca_vinculante: string | null
          q25_37_fundamento_legal: string | null
          q25_37_requisitos_fraude: string | null
          q25_38_aplicabilidade: string | null
          q25_38_citacao: string | null
          q25_38_forca_vinculante: string | null
          q25_38_fundamento_legal: string | null
          q25_38_marco_temporal: string | null
          q25_39_aplicabilidade: string | null
          q25_39_citacao: string | null
          q25_39_distincao_fraude_civil_trabalhista: string | null
          q25_39_forca_vinculante: string | null
          q25_39_fundamento_legal: string | null
          q25_4_aplicabilidade: string | null
          q25_4_citacao: string | null
          q25_4_forca_vinculante: string | null
          q25_4_fundamento_legal: string | null
          q25_4_preclusao_pro_judicato: string | null
          q25_40_aplicabilidade: string | null
          q25_40_citacao: string | null
          q25_40_forca_vinculante: string | null
          q25_40_fundamento_legal: string | null
          q25_40_penhora_registrada: string | null
          q25_41_aplicabilidade: string | null
          q25_41_citacao: string | null
          q25_41_forca_vinculante: string | null
          q25_41_fundamento_legal: string | null
          q25_41_litigancia_ma_fe: string | null
          q25_42_aplicabilidade: string | null
          q25_42_citacao: string | null
          q25_42_forca_vinculante: string | null
          q25_42_fundamento_legal: string | null
          q25_42_onus_prova_qualificado: string | null
          q25_43_aplicabilidade: string | null
          q25_43_citacao: string | null
          q25_43_forca_vinculante: string | null
          q25_43_fundamento_legal: string | null
          q25_43_honorarios_sucumbenciais: string | null
          q25_44_abuso_direito_acao: string | null
          q25_44_aplicabilidade: string | null
          q25_44_citacao: string | null
          q25_44_forca_vinculante: string | null
          q25_44_fundamento_legal: string | null
          q25_45_aplicabilidade: string | null
          q25_45_citacao: string | null
          q25_45_forca_vinculante: string | null
          q25_45_fundamento_legal: string | null
          q25_45_presuncao_legitimidade: string | null
          q25_46_aplicabilidade: string | null
          q25_46_boa_fe_due_diligence: string | null
          q25_46_citacao: string | null
          q25_46_forca_vinculante: string | null
          q25_46_fundamento_legal: string | null
          q25_47_aplicabilidade: string | null
          q25_47_citacao: string | null
          q25_47_forca_vinculante: string | null
          q25_47_fundamento_legal: string | null
          q25_47_teoria_aparencia: string | null
          q25_48_aplicabilidade: string | null
          q25_48_citacao: string | null
          q25_48_forca_vinculante: string | null
          q25_48_fundamento_legal: string | null
          q25_48_presuncao_ato_registral: string | null
          q25_49_aplicabilidade: string | null
          q25_49_citacao: string | null
          q25_49_forca_vinculante: string | null
          q25_49_fundamento_legal: string | null
          q25_49_protecao_propriedade: string | null
          q25_5_aplicabilidade: string | null
          q25_5_citacao: string | null
          q25_5_exigencia_vinculo: string | null
          q25_5_forca_vinculante: string | null
          q25_5_fundamento_legal: string | null
          q25_50_aplicabilidade: string | null
          q25_50_citacao: string | null
          q25_50_contraditorio_ampla_defesa: string | null
          q25_50_forca_vinculante: string | null
          q25_50_fundamento_legal: string | null
          q25_51_aplicabilidade: string | null
          q25_51_citacao: string | null
          q25_51_forca_vinculante: string | null
          q25_51_fundamento_legal: string | null
          q25_51_proporcionalidade: string | null
          q25_52_aplicabilidade: string | null
          q25_52_citacao: string | null
          q25_52_forca_vinculante: string | null
          q25_52_fundamento_legal: string | null
          q25_52_ponderacao_interesses: string | null
          q25_6_aplicabilidade: string | null
          q25_6_citacao: string | null
          q25_6_forca_vinculante: string | null
          q25_6_fundamento_legal: string | null
          q25_6_mera_aquisicao: string | null
          q25_7_aplicabilidade: string | null
          q25_7_citacao: string | null
          q25_7_forca_vinculante: string | null
          q25_7_fundamento_legal: string | null
          q25_7_requisitos_afastar_confusao: string | null
          q25_8_aplicabilidade: string | null
          q25_8_citacao: string | null
          q25_8_desconsideracao_inversa: string | null
          q25_8_forca_vinculante: string | null
          q25_8_fundamento_legal: string | null
          q25_9_aplicabilidade: string | null
          q25_9_citacao: string | null
          q25_9_forca_vinculante: string | null
          q25_9_fundamento_legal: string | null
          q25_9_legitimidade_pagamento_credores: string | null
          recomendacao_uso: string | null
          tipo_decisao: string | null
          top5_argumentos: string | null
          total_desfavoravel: number | null
          total_favoravel_forte: number | null
          total_favoravel_moderado: number | null
          total_neutro: number | null
          trechos_citacao: string | null
          tribunal_vara: string
        }
        Insert: {
          classificacao_geral?: string | null
          data_analise?: string | null
          data_decisao?: string | null
          decisao?: string | null
          documento_decisao?: string | null
          fundamentacao_predominante?: string | null
          id?: number
          instancia?: string | null
          juiz_relator?: string | null
          numero_processo: string
          q25_1_aplicabilidade?: string | null
          q25_1_citacao?: string | null
          q25_1_forca_vinculante?: string | null
          q25_1_fundamento_legal?: string | null
          q25_1_protecao_arrematante?: string | null
          q25_10_aplicabilidade?: string | null
          q25_10_citacao?: string | null
          q25_10_forca_vinculante?: string | null
          q25_10_fundamento_legal?: string | null
          q25_10_pagamento_homologado?: string | null
          q25_11_aplicabilidade?: string | null
          q25_11_citacao?: string | null
          q25_11_distincao_pagamentos?: string | null
          q25_11_forca_vinculante?: string | null
          q25_11_fundamento_legal?: string | null
          q25_12_anuencia_credor?: string | null
          q25_12_aplicabilidade?: string | null
          q25_12_citacao?: string | null
          q25_12_forca_vinculante?: string | null
          q25_12_fundamento_legal?: string | null
          q25_13_aplicabilidade?: string | null
          q25_13_citacao?: string | null
          q25_13_forca_vinculante?: string | null
          q25_13_fundamento_legal?: string | null
          q25_13_reducao_valor_onus?: string | null
          q25_14_aplicabilidade?: string | null
          q25_14_citacao?: string | null
          q25_14_exigencia_laudo?: string | null
          q25_14_forca_vinculante?: string | null
          q25_14_fundamento_legal?: string | null
          q25_15_aplicabilidade?: string | null
          q25_15_citacao?: string | null
          q25_15_desagio_justificado?: string | null
          q25_15_forca_vinculante?: string | null
          q25_15_fundamento_legal?: string | null
          q25_16_aplicabilidade?: string | null
          q25_16_citacao?: string | null
          q25_16_forca_vinculante?: string | null
          q25_16_fundamento_legal?: string | null
          q25_16_preco_leilao?: string | null
          q25_17_aplicabilidade?: string | null
          q25_17_citacao?: string | null
          q25_17_forca_vinculante?: string | null
          q25_17_fundamento_legal?: string | null
          q25_17_incompetencia_anular?: string | null
          q25_18_aplicabilidade?: string | null
          q25_18_citacao?: string | null
          q25_18_forca_vinculante?: string | null
          q25_18_fundamento_legal?: string | null
          q25_18_vedacao_revisao?: string | null
          q25_19_aplicabilidade?: string | null
          q25_19_citacao?: string | null
          q25_19_forca_vinculante?: string | null
          q25_19_fundamento_legal?: string | null
          q25_19_questao_prejudicial?: string | null
          q25_2_aplicabilidade?: string | null
          q25_2_citacao?: string | null
          q25_2_coisa_julgada_civil?: string | null
          q25_2_forca_vinculante?: string | null
          q25_2_fundamento_legal?: string | null
          q25_20_aplicabilidade?: string | null
          q25_20_citacao?: string | null
          q25_20_competencia_exclusiva?: string | null
          q25_20_forca_vinculante?: string | null
          q25_20_fundamento_legal?: string | null
          q25_21_aplicabilidade?: string | null
          q25_21_citacao?: string | null
          q25_21_eficacia_coisa_julgada?: string | null
          q25_21_forca_vinculante?: string | null
          q25_21_fundamento_legal?: string | null
          q25_22_aplicabilidade?: string | null
          q25_22_citacao?: string | null
          q25_22_forca_vinculante?: string | null
          q25_22_fundamento_legal?: string | null
          q25_22_preclusao_consumativa?: string | null
          q25_23_aplicabilidade?: string | null
          q25_23_citacao?: string | null
          q25_23_eficacia_preclusiva?: string | null
          q25_23_forca_vinculante?: string | null
          q25_23_fundamento_legal?: string | null
          q25_24_aplicabilidade?: string | null
          q25_24_citacao?: string | null
          q25_24_forca_vinculante?: string | null
          q25_24_fundamento_legal?: string | null
          q25_24_hierarquia_credores?: string | null
          q25_25_aplicabilidade?: string | null
          q25_25_citacao?: string | null
          q25_25_entendimento_restritivo?: string | null
          q25_25_forca_vinculante?: string | null
          q25_25_fundamento_legal?: string | null
          q25_26_aplicabilidade?: string | null
          q25_26_citacao?: string | null
          q25_26_forca_vinculante?: string | null
          q25_26_fundamento_legal?: string | null
          q25_26_requisitos_cumulativos?: string | null
          q25_27_aplicabilidade?: string | null
          q25_27_citacao?: string | null
          q25_27_forca_vinculante?: string | null
          q25_27_fundamento_legal?: string | null
          q25_27_vedacao_atalho?: string | null
          q25_28_aplicabilidade?: string | null
          q25_28_citacao?: string | null
          q25_28_cumulacao_requisitos?: string | null
          q25_28_forca_vinculante?: string | null
          q25_28_fundamento_legal?: string | null
          q25_29_aplicabilidade?: string | null
          q25_29_citacao?: string | null
          q25_29_forca_vinculante?: string | null
          q25_29_fundamento_legal?: string | null
          q25_29_prazo_prescricional?: string | null
          q25_3_aplicabilidade?: string | null
          q25_3_citacao?: string | null
          q25_3_direito_adquirido?: string | null
          q25_3_forca_vinculante?: string | null
          q25_3_fundamento_legal?: string | null
          q25_30_aplicabilidade?: string | null
          q25_30_citacao?: string | null
          q25_30_forca_vinculante?: string | null
          q25_30_fundamento_legal?: string | null
          q25_30_preclusao_temporal?: string | null
          q25_31_aplicabilidade?: string | null
          q25_31_citacao?: string | null
          q25_31_distincao_prazos?: string | null
          q25_31_forca_vinculante?: string | null
          q25_31_fundamento_legal?: string | null
          q25_32_aplicabilidade?: string | null
          q25_32_citacao?: string | null
          q25_32_forca_vinculante?: string | null
          q25_32_fundamento_legal?: string | null
          q25_32_preclusao_inercia?: string | null
          q25_33_aplicabilidade?: string | null
          q25_33_citacao?: string | null
          q25_33_forca_vinculante?: string | null
          q25_33_fundamento_legal?: string | null
          q25_33_vinculacao_cessionario?: string | null
          q25_34_aplicabilidade?: string | null
          q25_34_citacao?: string | null
          q25_34_forca_vinculante?: string | null
          q25_34_fundamento_legal?: string | null
          q25_34_ma_fe_credor?: string | null
          q25_35_aplicabilidade?: string | null
          q25_35_citacao?: string | null
          q25_35_forca_vinculante?: string | null
          q25_35_fundamento_legal?: string | null
          q25_35_litisconsorcio?: string | null
          q25_36_aplicabilidade?: string | null
          q25_36_chamamento_processo?: string | null
          q25_36_citacao?: string | null
          q25_36_forca_vinculante?: string | null
          q25_36_fundamento_legal?: string | null
          q25_37_aplicabilidade?: string | null
          q25_37_citacao?: string | null
          q25_37_forca_vinculante?: string | null
          q25_37_fundamento_legal?: string | null
          q25_37_requisitos_fraude?: string | null
          q25_38_aplicabilidade?: string | null
          q25_38_citacao?: string | null
          q25_38_forca_vinculante?: string | null
          q25_38_fundamento_legal?: string | null
          q25_38_marco_temporal?: string | null
          q25_39_aplicabilidade?: string | null
          q25_39_citacao?: string | null
          q25_39_distincao_fraude_civil_trabalhista?: string | null
          q25_39_forca_vinculante?: string | null
          q25_39_fundamento_legal?: string | null
          q25_4_aplicabilidade?: string | null
          q25_4_citacao?: string | null
          q25_4_forca_vinculante?: string | null
          q25_4_fundamento_legal?: string | null
          q25_4_preclusao_pro_judicato?: string | null
          q25_40_aplicabilidade?: string | null
          q25_40_citacao?: string | null
          q25_40_forca_vinculante?: string | null
          q25_40_fundamento_legal?: string | null
          q25_40_penhora_registrada?: string | null
          q25_41_aplicabilidade?: string | null
          q25_41_citacao?: string | null
          q25_41_forca_vinculante?: string | null
          q25_41_fundamento_legal?: string | null
          q25_41_litigancia_ma_fe?: string | null
          q25_42_aplicabilidade?: string | null
          q25_42_citacao?: string | null
          q25_42_forca_vinculante?: string | null
          q25_42_fundamento_legal?: string | null
          q25_42_onus_prova_qualificado?: string | null
          q25_43_aplicabilidade?: string | null
          q25_43_citacao?: string | null
          q25_43_forca_vinculante?: string | null
          q25_43_fundamento_legal?: string | null
          q25_43_honorarios_sucumbenciais?: string | null
          q25_44_abuso_direito_acao?: string | null
          q25_44_aplicabilidade?: string | null
          q25_44_citacao?: string | null
          q25_44_forca_vinculante?: string | null
          q25_44_fundamento_legal?: string | null
          q25_45_aplicabilidade?: string | null
          q25_45_citacao?: string | null
          q25_45_forca_vinculante?: string | null
          q25_45_fundamento_legal?: string | null
          q25_45_presuncao_legitimidade?: string | null
          q25_46_aplicabilidade?: string | null
          q25_46_boa_fe_due_diligence?: string | null
          q25_46_citacao?: string | null
          q25_46_forca_vinculante?: string | null
          q25_46_fundamento_legal?: string | null
          q25_47_aplicabilidade?: string | null
          q25_47_citacao?: string | null
          q25_47_forca_vinculante?: string | null
          q25_47_fundamento_legal?: string | null
          q25_47_teoria_aparencia?: string | null
          q25_48_aplicabilidade?: string | null
          q25_48_citacao?: string | null
          q25_48_forca_vinculante?: string | null
          q25_48_fundamento_legal?: string | null
          q25_48_presuncao_ato_registral?: string | null
          q25_49_aplicabilidade?: string | null
          q25_49_citacao?: string | null
          q25_49_forca_vinculante?: string | null
          q25_49_fundamento_legal?: string | null
          q25_49_protecao_propriedade?: string | null
          q25_5_aplicabilidade?: string | null
          q25_5_citacao?: string | null
          q25_5_exigencia_vinculo?: string | null
          q25_5_forca_vinculante?: string | null
          q25_5_fundamento_legal?: string | null
          q25_50_aplicabilidade?: string | null
          q25_50_citacao?: string | null
          q25_50_contraditorio_ampla_defesa?: string | null
          q25_50_forca_vinculante?: string | null
          q25_50_fundamento_legal?: string | null
          q25_51_aplicabilidade?: string | null
          q25_51_citacao?: string | null
          q25_51_forca_vinculante?: string | null
          q25_51_fundamento_legal?: string | null
          q25_51_proporcionalidade?: string | null
          q25_52_aplicabilidade?: string | null
          q25_52_citacao?: string | null
          q25_52_forca_vinculante?: string | null
          q25_52_fundamento_legal?: string | null
          q25_52_ponderacao_interesses?: string | null
          q25_6_aplicabilidade?: string | null
          q25_6_citacao?: string | null
          q25_6_forca_vinculante?: string | null
          q25_6_fundamento_legal?: string | null
          q25_6_mera_aquisicao?: string | null
          q25_7_aplicabilidade?: string | null
          q25_7_citacao?: string | null
          q25_7_forca_vinculante?: string | null
          q25_7_fundamento_legal?: string | null
          q25_7_requisitos_afastar_confusao?: string | null
          q25_8_aplicabilidade?: string | null
          q25_8_citacao?: string | null
          q25_8_desconsideracao_inversa?: string | null
          q25_8_forca_vinculante?: string | null
          q25_8_fundamento_legal?: string | null
          q25_9_aplicabilidade?: string | null
          q25_9_citacao?: string | null
          q25_9_forca_vinculante?: string | null
          q25_9_fundamento_legal?: string | null
          q25_9_legitimidade_pagamento_credores?: string | null
          recomendacao_uso?: string | null
          tipo_decisao?: string | null
          top5_argumentos?: string | null
          total_desfavoravel?: number | null
          total_favoravel_forte?: number | null
          total_favoravel_moderado?: number | null
          total_neutro?: number | null
          trechos_citacao?: string | null
          tribunal_vara: string
        }
        Update: {
          classificacao_geral?: string | null
          data_analise?: string | null
          data_decisao?: string | null
          decisao?: string | null
          documento_decisao?: string | null
          fundamentacao_predominante?: string | null
          id?: number
          instancia?: string | null
          juiz_relator?: string | null
          numero_processo?: string
          q25_1_aplicabilidade?: string | null
          q25_1_citacao?: string | null
          q25_1_forca_vinculante?: string | null
          q25_1_fundamento_legal?: string | null
          q25_1_protecao_arrematante?: string | null
          q25_10_aplicabilidade?: string | null
          q25_10_citacao?: string | null
          q25_10_forca_vinculante?: string | null
          q25_10_fundamento_legal?: string | null
          q25_10_pagamento_homologado?: string | null
          q25_11_aplicabilidade?: string | null
          q25_11_citacao?: string | null
          q25_11_distincao_pagamentos?: string | null
          q25_11_forca_vinculante?: string | null
          q25_11_fundamento_legal?: string | null
          q25_12_anuencia_credor?: string | null
          q25_12_aplicabilidade?: string | null
          q25_12_citacao?: string | null
          q25_12_forca_vinculante?: string | null
          q25_12_fundamento_legal?: string | null
          q25_13_aplicabilidade?: string | null
          q25_13_citacao?: string | null
          q25_13_forca_vinculante?: string | null
          q25_13_fundamento_legal?: string | null
          q25_13_reducao_valor_onus?: string | null
          q25_14_aplicabilidade?: string | null
          q25_14_citacao?: string | null
          q25_14_exigencia_laudo?: string | null
          q25_14_forca_vinculante?: string | null
          q25_14_fundamento_legal?: string | null
          q25_15_aplicabilidade?: string | null
          q25_15_citacao?: string | null
          q25_15_desagio_justificado?: string | null
          q25_15_forca_vinculante?: string | null
          q25_15_fundamento_legal?: string | null
          q25_16_aplicabilidade?: string | null
          q25_16_citacao?: string | null
          q25_16_forca_vinculante?: string | null
          q25_16_fundamento_legal?: string | null
          q25_16_preco_leilao?: string | null
          q25_17_aplicabilidade?: string | null
          q25_17_citacao?: string | null
          q25_17_forca_vinculante?: string | null
          q25_17_fundamento_legal?: string | null
          q25_17_incompetencia_anular?: string | null
          q25_18_aplicabilidade?: string | null
          q25_18_citacao?: string | null
          q25_18_forca_vinculante?: string | null
          q25_18_fundamento_legal?: string | null
          q25_18_vedacao_revisao?: string | null
          q25_19_aplicabilidade?: string | null
          q25_19_citacao?: string | null
          q25_19_forca_vinculante?: string | null
          q25_19_fundamento_legal?: string | null
          q25_19_questao_prejudicial?: string | null
          q25_2_aplicabilidade?: string | null
          q25_2_citacao?: string | null
          q25_2_coisa_julgada_civil?: string | null
          q25_2_forca_vinculante?: string | null
          q25_2_fundamento_legal?: string | null
          q25_20_aplicabilidade?: string | null
          q25_20_citacao?: string | null
          q25_20_competencia_exclusiva?: string | null
          q25_20_forca_vinculante?: string | null
          q25_20_fundamento_legal?: string | null
          q25_21_aplicabilidade?: string | null
          q25_21_citacao?: string | null
          q25_21_eficacia_coisa_julgada?: string | null
          q25_21_forca_vinculante?: string | null
          q25_21_fundamento_legal?: string | null
          q25_22_aplicabilidade?: string | null
          q25_22_citacao?: string | null
          q25_22_forca_vinculante?: string | null
          q25_22_fundamento_legal?: string | null
          q25_22_preclusao_consumativa?: string | null
          q25_23_aplicabilidade?: string | null
          q25_23_citacao?: string | null
          q25_23_eficacia_preclusiva?: string | null
          q25_23_forca_vinculante?: string | null
          q25_23_fundamento_legal?: string | null
          q25_24_aplicabilidade?: string | null
          q25_24_citacao?: string | null
          q25_24_forca_vinculante?: string | null
          q25_24_fundamento_legal?: string | null
          q25_24_hierarquia_credores?: string | null
          q25_25_aplicabilidade?: string | null
          q25_25_citacao?: string | null
          q25_25_entendimento_restritivo?: string | null
          q25_25_forca_vinculante?: string | null
          q25_25_fundamento_legal?: string | null
          q25_26_aplicabilidade?: string | null
          q25_26_citacao?: string | null
          q25_26_forca_vinculante?: string | null
          q25_26_fundamento_legal?: string | null
          q25_26_requisitos_cumulativos?: string | null
          q25_27_aplicabilidade?: string | null
          q25_27_citacao?: string | null
          q25_27_forca_vinculante?: string | null
          q25_27_fundamento_legal?: string | null
          q25_27_vedacao_atalho?: string | null
          q25_28_aplicabilidade?: string | null
          q25_28_citacao?: string | null
          q25_28_cumulacao_requisitos?: string | null
          q25_28_forca_vinculante?: string | null
          q25_28_fundamento_legal?: string | null
          q25_29_aplicabilidade?: string | null
          q25_29_citacao?: string | null
          q25_29_forca_vinculante?: string | null
          q25_29_fundamento_legal?: string | null
          q25_29_prazo_prescricional?: string | null
          q25_3_aplicabilidade?: string | null
          q25_3_citacao?: string | null
          q25_3_direito_adquirido?: string | null
          q25_3_forca_vinculante?: string | null
          q25_3_fundamento_legal?: string | null
          q25_30_aplicabilidade?: string | null
          q25_30_citacao?: string | null
          q25_30_forca_vinculante?: string | null
          q25_30_fundamento_legal?: string | null
          q25_30_preclusao_temporal?: string | null
          q25_31_aplicabilidade?: string | null
          q25_31_citacao?: string | null
          q25_31_distincao_prazos?: string | null
          q25_31_forca_vinculante?: string | null
          q25_31_fundamento_legal?: string | null
          q25_32_aplicabilidade?: string | null
          q25_32_citacao?: string | null
          q25_32_forca_vinculante?: string | null
          q25_32_fundamento_legal?: string | null
          q25_32_preclusao_inercia?: string | null
          q25_33_aplicabilidade?: string | null
          q25_33_citacao?: string | null
          q25_33_forca_vinculante?: string | null
          q25_33_fundamento_legal?: string | null
          q25_33_vinculacao_cessionario?: string | null
          q25_34_aplicabilidade?: string | null
          q25_34_citacao?: string | null
          q25_34_forca_vinculante?: string | null
          q25_34_fundamento_legal?: string | null
          q25_34_ma_fe_credor?: string | null
          q25_35_aplicabilidade?: string | null
          q25_35_citacao?: string | null
          q25_35_forca_vinculante?: string | null
          q25_35_fundamento_legal?: string | null
          q25_35_litisconsorcio?: string | null
          q25_36_aplicabilidade?: string | null
          q25_36_chamamento_processo?: string | null
          q25_36_citacao?: string | null
          q25_36_forca_vinculante?: string | null
          q25_36_fundamento_legal?: string | null
          q25_37_aplicabilidade?: string | null
          q25_37_citacao?: string | null
          q25_37_forca_vinculante?: string | null
          q25_37_fundamento_legal?: string | null
          q25_37_requisitos_fraude?: string | null
          q25_38_aplicabilidade?: string | null
          q25_38_citacao?: string | null
          q25_38_forca_vinculante?: string | null
          q25_38_fundamento_legal?: string | null
          q25_38_marco_temporal?: string | null
          q25_39_aplicabilidade?: string | null
          q25_39_citacao?: string | null
          q25_39_distincao_fraude_civil_trabalhista?: string | null
          q25_39_forca_vinculante?: string | null
          q25_39_fundamento_legal?: string | null
          q25_4_aplicabilidade?: string | null
          q25_4_citacao?: string | null
          q25_4_forca_vinculante?: string | null
          q25_4_fundamento_legal?: string | null
          q25_4_preclusao_pro_judicato?: string | null
          q25_40_aplicabilidade?: string | null
          q25_40_citacao?: string | null
          q25_40_forca_vinculante?: string | null
          q25_40_fundamento_legal?: string | null
          q25_40_penhora_registrada?: string | null
          q25_41_aplicabilidade?: string | null
          q25_41_citacao?: string | null
          q25_41_forca_vinculante?: string | null
          q25_41_fundamento_legal?: string | null
          q25_41_litigancia_ma_fe?: string | null
          q25_42_aplicabilidade?: string | null
          q25_42_citacao?: string | null
          q25_42_forca_vinculante?: string | null
          q25_42_fundamento_legal?: string | null
          q25_42_onus_prova_qualificado?: string | null
          q25_43_aplicabilidade?: string | null
          q25_43_citacao?: string | null
          q25_43_forca_vinculante?: string | null
          q25_43_fundamento_legal?: string | null
          q25_43_honorarios_sucumbenciais?: string | null
          q25_44_abuso_direito_acao?: string | null
          q25_44_aplicabilidade?: string | null
          q25_44_citacao?: string | null
          q25_44_forca_vinculante?: string | null
          q25_44_fundamento_legal?: string | null
          q25_45_aplicabilidade?: string | null
          q25_45_citacao?: string | null
          q25_45_forca_vinculante?: string | null
          q25_45_fundamento_legal?: string | null
          q25_45_presuncao_legitimidade?: string | null
          q25_46_aplicabilidade?: string | null
          q25_46_boa_fe_due_diligence?: string | null
          q25_46_citacao?: string | null
          q25_46_forca_vinculante?: string | null
          q25_46_fundamento_legal?: string | null
          q25_47_aplicabilidade?: string | null
          q25_47_citacao?: string | null
          q25_47_forca_vinculante?: string | null
          q25_47_fundamento_legal?: string | null
          q25_47_teoria_aparencia?: string | null
          q25_48_aplicabilidade?: string | null
          q25_48_citacao?: string | null
          q25_48_forca_vinculante?: string | null
          q25_48_fundamento_legal?: string | null
          q25_48_presuncao_ato_registral?: string | null
          q25_49_aplicabilidade?: string | null
          q25_49_citacao?: string | null
          q25_49_forca_vinculante?: string | null
          q25_49_fundamento_legal?: string | null
          q25_49_protecao_propriedade?: string | null
          q25_5_aplicabilidade?: string | null
          q25_5_citacao?: string | null
          q25_5_exigencia_vinculo?: string | null
          q25_5_forca_vinculante?: string | null
          q25_5_fundamento_legal?: string | null
          q25_50_aplicabilidade?: string | null
          q25_50_citacao?: string | null
          q25_50_contraditorio_ampla_defesa?: string | null
          q25_50_forca_vinculante?: string | null
          q25_50_fundamento_legal?: string | null
          q25_51_aplicabilidade?: string | null
          q25_51_citacao?: string | null
          q25_51_forca_vinculante?: string | null
          q25_51_fundamento_legal?: string | null
          q25_51_proporcionalidade?: string | null
          q25_52_aplicabilidade?: string | null
          q25_52_citacao?: string | null
          q25_52_forca_vinculante?: string | null
          q25_52_fundamento_legal?: string | null
          q25_52_ponderacao_interesses?: string | null
          q25_6_aplicabilidade?: string | null
          q25_6_citacao?: string | null
          q25_6_forca_vinculante?: string | null
          q25_6_fundamento_legal?: string | null
          q25_6_mera_aquisicao?: string | null
          q25_7_aplicabilidade?: string | null
          q25_7_citacao?: string | null
          q25_7_forca_vinculante?: string | null
          q25_7_fundamento_legal?: string | null
          q25_7_requisitos_afastar_confusao?: string | null
          q25_8_aplicabilidade?: string | null
          q25_8_citacao?: string | null
          q25_8_desconsideracao_inversa?: string | null
          q25_8_forca_vinculante?: string | null
          q25_8_fundamento_legal?: string | null
          q25_9_aplicabilidade?: string | null
          q25_9_citacao?: string | null
          q25_9_forca_vinculante?: string | null
          q25_9_fundamento_legal?: string | null
          q25_9_legitimidade_pagamento_credores?: string | null
          recomendacao_uso?: string | null
          tipo_decisao?: string | null
          top5_argumentos?: string | null
          total_desfavoravel?: number | null
          total_favoravel_forte?: number | null
          total_favoravel_moderado?: number | null
          total_neutro?: number | null
          trechos_citacao?: string | null
          tribunal_vara?: string
        }
        Relationships: []
      }
      resultados_analise: {
        Row: {
          arquivo_original: string
          created_at: string | null
          dados_json: Json
          data_processamento: string | null
          id: number
          numero_caso: string | null
          projeto_id: string | null
        }
        Insert: {
          arquivo_original: string
          created_at?: string | null
          dados_json: Json
          data_processamento?: string | null
          id?: number
          numero_caso?: string | null
          projeto_id?: string | null
        }
        Update: {
          arquivo_original?: string
          created_at?: string | null
          dados_json?: Json
          data_processamento?: string | null
          id?: number
          numero_caso?: string | null
          projeto_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "resultados_analise_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projeto"
            referencedColumns: ["id"]
          },
        ]
      }
      resultados_analise_medmais: {
        Row: {
          arquivo_original: string
          created_at: string | null
          dados_json: Json
          data_processamento: string | null
          id: number
          numero_caso: string | null
          projeto_id: string | null
          table: Json | null
        }
        Insert: {
          arquivo_original: string
          created_at?: string | null
          dados_json: Json
          data_processamento?: string | null
          id?: number
          numero_caso?: string | null
          projeto_id?: string | null
          table?: Json | null
        }
        Update: {
          arquivo_original?: string
          created_at?: string | null
          dados_json?: Json
          data_processamento?: string | null
          id?: number
          numero_caso?: string | null
          projeto_id?: string | null
          table?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "resultados_analise_medmais_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projeto"
            referencedColumns: ["id"]
          },
        ]
      }
      samy_copy_history: {
        Row: {
          created_at: string
          file_name: string | null
          id: string
          page_url: string
          response: Json
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          file_name?: string | null
          id?: string
          page_url: string
          response: Json
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          file_name?: string | null
          id?: string
          page_url?: string
          response?: Json
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      status_analise: {
        Row: {
          analise1: boolean | null
          analise2: boolean | null
          analise3: boolean | null
          created_at: string
          document_id: string | null
          filename: string | null
          id: number
        }
        Insert: {
          analise1?: boolean | null
          analise2?: boolean | null
          analise3?: boolean | null
          created_at?: string
          document_id?: string | null
          filename?: string | null
          id?: number
        }
        Update: {
          analise1?: boolean | null
          analise2?: boolean | null
          analise3?: boolean | null
          created_at?: string
          document_id?: string | null
          filename?: string | null
          id?: number
        }
        Relationships: []
      }
      tarefas: {
        Row: {
          categoria: string | null
          coluna: number | null
          complexidade: number
          complexidade_norm: number | null
          created_at: string | null
          id: string
          impacto: number
          impacto_norm: number | null
          linha: number | null
          prioridade: number | null
          risco: number
          risco_norm: number | null
          task_link: string | null
          titulo: string
          updated_at: string | null
          urgencia: number
          urgencia_norm: number | null
        }
        Insert: {
          categoria?: string | null
          coluna?: number | null
          complexidade: number
          complexidade_norm?: number | null
          created_at?: string | null
          id?: string
          impacto: number
          impacto_norm?: number | null
          linha?: number | null
          prioridade?: number | null
          risco: number
          risco_norm?: number | null
          task_link?: string | null
          titulo: string
          updated_at?: string | null
          urgencia: number
          urgencia_norm?: number | null
        }
        Update: {
          categoria?: string | null
          coluna?: number | null
          complexidade?: number
          complexidade_norm?: number | null
          created_at?: string | null
          id?: string
          impacto?: number
          impacto_norm?: number | null
          linha?: number | null
          prioridade?: number | null
          risco?: number
          risco_norm?: number | null
          task_link?: string | null
          titulo?: string
          updated_at?: string | null
          urgencia?: number
          urgencia_norm?: number | null
        }
        Relationships: []
      }
      threads: {
        Row: {
          account_id: string | null
          created_at: string
          initialization_completed_at: string | null
          initialization_error: string | null
          initialization_started_at: string | null
          is_public: boolean | null
          memory_enabled: boolean | null
          metadata: Json | null
          name: string | null
          project_id: string | null
          status: Database["public"]["Enums"]["thread_status"] | null
          thread_id: string
          total_message_count: number | null
          updated_at: string
          user_message_count: number | null
        }
        Insert: {
          account_id?: string | null
          created_at?: string
          initialization_completed_at?: string | null
          initialization_error?: string | null
          initialization_started_at?: string | null
          is_public?: boolean | null
          memory_enabled?: boolean | null
          metadata?: Json | null
          name?: string | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["thread_status"] | null
          thread_id?: string
          total_message_count?: number | null
          updated_at?: string
          user_message_count?: number | null
        }
        Update: {
          account_id?: string | null
          created_at?: string
          initialization_completed_at?: string | null
          initialization_error?: string | null
          initialization_started_at?: string | null
          is_public?: boolean | null
          memory_enabled?: boolean | null
          metadata?: Json | null
          name?: string | null
          project_id?: string | null
          status?: Database["public"]["Enums"]["thread_status"] | null
          thread_id?: string
          total_message_count?: number | null
          updated_at?: string
          user_message_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "threads_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
        ]
      }
      trial_history: {
        Row: {
          account_id: string
          converted_to_paid: boolean | null
          created_at: string | null
          ended_at: string | null
          error_message: string | null
          id: string
          started_at: string
          status: string | null
          stripe_checkout_session_id: string | null
        }
        Insert: {
          account_id: string
          converted_to_paid?: boolean | null
          created_at?: string | null
          ended_at?: string | null
          error_message?: string | null
          id?: string
          started_at: string
          status?: string | null
          stripe_checkout_session_id?: string | null
        }
        Update: {
          account_id?: string
          converted_to_paid?: boolean | null
          created_at?: string | null
          ended_at?: string | null
          error_message?: string | null
          id?: string
          started_at?: string
          status?: string | null
          stripe_checkout_session_id?: string | null
        }
        Relationships: []
      }
      user_agent_library: {
        Row: {
          added_at: string | null
          agent_id: string
          id: string
          is_favorite: boolean | null
          original_agent_id: string
          user_account_id: string
        }
        Insert: {
          added_at?: string | null
          agent_id: string
          id?: string
          is_favorite?: boolean | null
          original_agent_id: string
          user_account_id: string
        }
        Update: {
          added_at?: string | null
          agent_id?: string
          id?: string
          is_favorite?: boolean | null
          original_agent_id?: string
          user_account_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_agent_library_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
          {
            foreignKeyName: "user_agent_library_original_agent_id_fkey"
            columns: ["original_agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
        ]
      }
      user_mcp_credential_profiles: {
        Row: {
          account_id: string
          config_hash: string
          created_at: string | null
          display_name: string
          encrypted_config: string
          is_active: boolean | null
          is_default: boolean | null
          last_used_at: string | null
          mcp_qualified_name: string
          profile_id: string
          profile_name: string
          updated_at: string | null
        }
        Insert: {
          account_id: string
          config_hash: string
          created_at?: string | null
          display_name: string
          encrypted_config: string
          is_active?: boolean | null
          is_default?: boolean | null
          last_used_at?: string | null
          mcp_qualified_name: string
          profile_id?: string
          profile_name: string
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          config_hash?: string
          created_at?: string | null
          display_name?: string
          encrypted_config?: string
          is_active?: boolean | null
          is_default?: boolean | null
          last_used_at?: string | null
          mcp_qualified_name?: string
          profile_id?: string
          profile_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_mcp_credentials: {
        Row: {
          account_id: string
          config_hash: string
          created_at: string | null
          credential_id: string
          display_name: string
          encrypted_config: string
          is_active: boolean | null
          last_used_at: string | null
          mcp_qualified_name: string
          updated_at: string | null
        }
        Insert: {
          account_id: string
          config_hash: string
          created_at?: string | null
          credential_id?: string
          display_name: string
          encrypted_config: string
          is_active?: boolean | null
          last_used_at?: string | null
          mcp_qualified_name: string
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          config_hash?: string
          created_at?: string | null
          credential_id?: string
          display_name?: string
          encrypted_config?: string
          is_active?: boolean | null
          last_used_at?: string | null
          mcp_qualified_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_memories: {
        Row: {
          account_id: string
          confidence_score: number | null
          content: string
          created_at: string
          embedding: string | null
          memory_id: string
          memory_type: Database["public"]["Enums"]["memory_type"]
          metadata: Json | null
          source_thread_id: string | null
          updated_at: string
        }
        Insert: {
          account_id: string
          confidence_score?: number | null
          content: string
          created_at?: string
          embedding?: string | null
          memory_id?: string
          memory_type?: Database["public"]["Enums"]["memory_type"]
          metadata?: Json | null
          source_thread_id?: string | null
          updated_at?: string
        }
        Update: {
          account_id?: string
          confidence_score?: number | null
          content?: string
          created_at?: string
          embedding?: string | null
          memory_id?: string
          memory_type?: Database["public"]["Enums"]["memory_type"]
          metadata?: Json | null
          source_thread_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_source_thread"
            columns: ["source_thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      user_presence_sessions: {
        Row: {
          account_id: string
          active_thread_id: string | null
          client_timestamp: string | null
          created_at: string | null
          device_info: Json | null
          last_seen: string | null
          platform: string | null
          session_id: string
          updated_at: string | null
        }
        Insert: {
          account_id: string
          active_thread_id?: string | null
          client_timestamp?: string | null
          created_at?: string | null
          device_info?: Json | null
          last_seen?: string | null
          platform?: string | null
          session_id?: string
          updated_at?: string | null
        }
        Update: {
          account_id?: string
          active_thread_id?: string | null
          client_timestamp?: string | null
          created_at?: string | null
          device_info?: Json | null
          last_seen?: string | null
          platform?: string | null
          session_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          granted_at: string | null
          granted_by: string | null
          metadata: Json | null
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          granted_at?: string | null
          granted_by?: string | null
          metadata?: Json | null
          role?: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          granted_at?: string | null
          granted_by?: string | null
          metadata?: Json | null
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
        Relationships: []
      }
      vapi_calls: {
        Row: {
          agent_id: string | null
          call_id: string
          cost: number | null
          created_at: string
          direction: string
          duration_seconds: number | null
          ended_at: string | null
          id: string
          phone_number: string
          started_at: string | null
          status: string
          thread_id: string | null
          transcript: Json | null
          updated_at: string
        }
        Insert: {
          agent_id?: string | null
          call_id: string
          cost?: number | null
          created_at?: string
          direction: string
          duration_seconds?: number | null
          ended_at?: string | null
          id?: string
          phone_number: string
          started_at?: string | null
          status?: string
          thread_id?: string | null
          transcript?: Json | null
          updated_at?: string
        }
        Update: {
          agent_id?: string | null
          call_id?: string
          cost?: number | null
          created_at?: string
          direction?: string
          duration_seconds?: number | null
          ended_at?: string | null
          id?: string
          phone_number?: string
          started_at?: string | null
          status?: string
          thread_id?: string | null
          transcript?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "vapi_calls_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
          {
            foreignKeyName: "vapi_calls_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["thread_id"]
          },
        ]
      }
      vercel_analytics_daily: {
        Row: {
          date: string
          device_ids: string[] | null
        }
        Insert: {
          date: string
          device_ids?: string[] | null
        }
        Update: {
          date?: string
          device_ids?: string[] | null
        }
        Relationships: []
      }
      videogen_generations: {
        Row: {
          ambient_sound: string | null
          aspect_ratio: string | null
          completed_at: string | null
          created_at: string | null
          credits_used: number | null
          current_step: number | null
          director_output: Json | null
          error_message: string | null
          final_video_url: string | null
          generated_audio_url: string | null
          generated_image_url: string | null
          id: string
          input_audio_url: string | null
          input_image_url: string | null
          input_prompt: string | null
          input_type: string
          lipsync_video_url: string | null
          mixed_audio_url: string | null
          opus_clip_url: string | null
          opus_project_id: string | null
          processing_time_ms: number | null
          status: string | null
          thumbnail_url: string | null
          user_id: string
          voice_id: string | null
        }
        Insert: {
          ambient_sound?: string | null
          aspect_ratio?: string | null
          completed_at?: string | null
          created_at?: string | null
          credits_used?: number | null
          current_step?: number | null
          director_output?: Json | null
          error_message?: string | null
          final_video_url?: string | null
          generated_audio_url?: string | null
          generated_image_url?: string | null
          id?: string
          input_audio_url?: string | null
          input_image_url?: string | null
          input_prompt?: string | null
          input_type: string
          lipsync_video_url?: string | null
          mixed_audio_url?: string | null
          opus_clip_url?: string | null
          opus_project_id?: string | null
          processing_time_ms?: number | null
          status?: string | null
          thumbnail_url?: string | null
          user_id: string
          voice_id?: string | null
        }
        Update: {
          ambient_sound?: string | null
          aspect_ratio?: string | null
          completed_at?: string | null
          created_at?: string | null
          credits_used?: number | null
          current_step?: number | null
          director_output?: Json | null
          error_message?: string | null
          final_video_url?: string | null
          generated_audio_url?: string | null
          generated_image_url?: string | null
          id?: string
          input_audio_url?: string | null
          input_image_url?: string | null
          input_prompt?: string | null
          input_type?: string
          lipsync_video_url?: string | null
          mixed_audio_url?: string | null
          opus_clip_url?: string | null
          opus_project_id?: string | null
          processing_time_ms?: number | null
          status?: string | null
          thumbnail_url?: string | null
          user_id?: string
          voice_id?: string | null
        }
        Relationships: []
      }
      videogen_voices: {
        Row: {
          created_at: string | null
          elevenlabs_voice_id: string
          id: string
          is_cloned: boolean | null
          name: string
          preview_url: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          elevenlabs_voice_id: string
          id?: string
          is_cloned?: boolean | null
          name: string
          preview_url?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          elevenlabs_voice_id?: string
          id?: string
          is_cloned?: boolean | null
          name?: string
          preview_url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      webhook_config: {
        Row: {
          backend_url: string
          id: number
          updated_at: string | null
          webhook_secret: string
        }
        Insert: {
          backend_url: string
          id?: number
          updated_at?: string | null
          webhook_secret: string
        }
        Update: {
          backend_url?: string
          id?: number
          updated_at?: string | null
          webhook_secret?: string
        }
        Relationships: []
      }
      webhook_events: {
        Row: {
          created_at: string | null
          error_message: string | null
          event_id: string
          event_type: string
          id: string
          payload: Json | null
          processed_at: string | null
          processing_started_at: string | null
          retry_count: number | null
          status: string
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          event_id: string
          event_type: string
          id?: string
          payload?: Json | null
          processed_at?: string | null
          processing_started_at?: string | null
          retry_count?: number | null
          status?: string
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          event_id?: string
          event_type?: string
          id?: string
          payload?: Json | null
          processed_at?: string | null
          processing_started_at?: string | null
          retry_count?: number | null
          status?: string
        }
        Relationships: []
      }
    }
    Views: {
      batch_stats: {
        Row: {
          data_batch: string | null
          primeiro_doc: string | null
          projeto_id: string | null
          status: string | null
          tamanho_total_bytes: number | null
          total_docs: number | null
          total_erros: number | null
          ultimo_update: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documento_gerenciamento_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projeto"
            referencedColumns: ["id"]
          },
        ]
      }
      estatisticas_juiz: {
        Row: {
          apos_contraditorio: number | null
          defere_liminarmente: number | null
          exige_esgotamento: number | null
          incentiva_acordo: number | null
          juiz: string | null
          protege_boa_fe: number | null
          total_analises: number | null
        }
        Relationships: []
      }
      forca_vinculante_precedentes: {
        Row: {
          essenciais: number | null
          importantes: number | null
          instancia: string | null
          media_argumentos_fortes: number | null
          total_precedentes: number | null
        }
        Relationships: []
      }
      hourly_performance: {
        Row: {
          avg_ms: number | null
          hora: string | null
          max_ms: number | null
          metric_type: string | null
          min_ms: number | null
          total: number | null
        }
        Relationships: []
      }
      lacunas_criticas_frequentes: {
        Row: {
          percentual: number | null
          ponto: string | null
          total_analisado: number | null
          total_nao_explorado: number | null
        }
        Relationships: []
      }
      performance_defensores: {
        Row: {
          casos_alta_chance: number | null
          casos_baixa_chance: number | null
          defensor_advogado: string | null
          media_lacunas: number | null
          media_pontos_explorados: number | null
          nota_media: number | null
          total_casos: number | null
        }
        Relationships: []
      }
      precedentes_essenciais: {
        Row: {
          data_decisao: string | null
          instancia: string | null
          juiz_relator: string | null
          numero_processo: string | null
          top5_argumentos: string | null
          total_favoravel_forte: number | null
          total_favoravel_moderado: number | null
          trechos_citacao: string | null
          tribunal_vara: string | null
        }
        Insert: {
          data_decisao?: string | null
          instancia?: string | null
          juiz_relator?: string | null
          numero_processo?: string | null
          top5_argumentos?: string | null
          total_favoravel_forte?: number | null
          total_favoravel_moderado?: number | null
          trechos_citacao?: string | null
          tribunal_vara?: string | null
        }
        Update: {
          data_decisao?: string | null
          instancia?: string | null
          juiz_relator?: string | null
          numero_processo?: string | null
          top5_argumentos?: string | null
          total_favoravel_forte?: number | null
          total_favoravel_moderado?: number | null
          trechos_citacao?: string | null
          tribunal_vara?: string | null
        }
        Relationships: []
      }
      questoes_prioritarias: {
        Row: {
          data_decisao: string | null
          juiz: string | null
          numero_processo: string | null
          q13_1_beneficio_ordem: string | null
          q13_3_pesquisas_previas: string | null
          q16_1_incentivo_composicao: string | null
          q16_2_termos_acordos: string | null
          q19_3_pagamentos_credores: string | null
          q19_4_presuncao_fraude: string | null
          q19_8_clausulas_direcionamento: string | null
          q3_1_protecao_terceiro_boa_fe: string | null
          q3_2_requisitos_boa_fe: string | null
          recomendacoes_estrategicas: string | null
          sintese_perfil_decisorio: string | null
          vara_tribunal: string | null
        }
        Insert: {
          data_decisao?: string | null
          juiz?: string | null
          numero_processo?: string | null
          q13_1_beneficio_ordem?: string | null
          q13_3_pesquisas_previas?: string | null
          q16_1_incentivo_composicao?: string | null
          q16_2_termos_acordos?: string | null
          q19_3_pagamentos_credores?: string | null
          q19_4_presuncao_fraude?: string | null
          q19_8_clausulas_direcionamento?: string | null
          q3_1_protecao_terceiro_boa_fe?: string | null
          q3_2_requisitos_boa_fe?: string | null
          recomendacoes_estrategicas?: string | null
          sintese_perfil_decisorio?: string | null
          vara_tribunal?: string | null
        }
        Update: {
          data_decisao?: string | null
          juiz?: string | null
          numero_processo?: string | null
          q13_1_beneficio_ordem?: string | null
          q13_3_pesquisas_previas?: string | null
          q16_1_incentivo_composicao?: string | null
          q16_2_termos_acordos?: string | null
          q19_3_pagamentos_credores?: string | null
          q19_4_presuncao_fraude?: string | null
          q19_8_clausulas_direcionamento?: string | null
          q3_1_protecao_terceiro_boa_fe?: string | null
          q3_2_requisitos_boa_fe?: string | null
          recomendacoes_estrategicas?: string | null
          sintese_perfil_decisorio?: string | null
          vara_tribunal?: string | null
        }
        Relationships: []
      }
      recent_errors: {
        Row: {
          error_message: string | null
          filename: string | null
          id: number | null
          projeto_id: string | null
          retry_count: number | null
          status: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documento_gerenciamento_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projeto"
            referencedColumns: ["id"]
          },
        ]
      }
      status_atual: {
        Row: {
          projeto_id: string | null
          status: string | null
          total: number | null
        }
        Relationships: []
      }
      status_casos: {
        Row: {
          com_retry: number | null
          media_retries: number | null
          projeto_id: string | null
          status: string | null
          total: number | null
          ultimo_update: string | null
        }
        Relationships: [
          {
            foreignKeyName: "casos_processamento_projeto_id_fkey"
            columns: ["projeto_id"]
            isOneToOne: false
            referencedRelation: "projeto"
            referencedColumns: ["id"]
          },
        ]
      }
      v_circuit_breaker_status: {
        Row: {
          circuit_name: string | null
          failure_count: number | null
          last_failure_time: string | null
          seconds_since_failure: number | null
          seconds_until_retry: number | null
          state: string | null
          status_display: string | null
          updated_at: string | null
        }
        Insert: {
          circuit_name?: string | null
          failure_count?: number | null
          last_failure_time?: string | null
          seconds_since_failure?: never
          seconds_until_retry?: never
          state?: string | null
          status_display?: never
          updated_at?: string | null
        }
        Update: {
          circuit_name?: string | null
          failure_count?: number | null
          last_failure_time?: string | null
          seconds_since_failure?: never
          seconds_until_retry?: never
          state?: string | null
          status_display?: never
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      accept_invitation: {
        Args: { lookup_invitation_token: string }
        Returns: Json
      }
      acquire_distributed_lock: {
        Args: {
          p_holder_id: string
          p_lock_key: string
          p_timeout_seconds?: number
        }
        Returns: boolean
      }
      add_agent_to_library: {
        Args: { p_original_agent_id: string; p_user_account_id: string }
        Returns: string
      }
      add_credits:
        | {
            Args: {
              p_amount: number
              p_purchase_id?: string
              p_user_id: string
            }
            Returns: number
          }
        | {
            Args: {
              p_amount: number
              p_created_by?: string
              p_description: string
              p_type: string
              p_user_id: string
            }
            Returns: number
          }
      admin_list_users_by_tier: {
        Args: {
          p_page?: number
          p_page_size?: number
          p_search_email?: string
          p_sort_by?: string
          p_sort_order?: string
          p_tier?: string
        }
        Returns: Json
      }
      atomic_add_credits: {
        Args: {
          p_account_id: string
          p_amount: number
          p_description?: string
          p_expires_at?: string
          p_idempotency_key?: string
          p_is_expiring?: boolean
          p_stripe_event_id?: string
          p_type?: string
        }
        Returns: Json
      }
      atomic_daily_credit_refresh: {
        Args: {
          p_account_id: string
          p_credit_amount: number
          p_processed_by: string
          p_refresh_interval_hours?: number
          p_tier: string
        }
        Returns: Json
      }
      atomic_grant_renewal_credits:
        | {
            Args: {
              p_account_id: string
              p_credits: number
              p_invoice_id?: string
              p_period_end: number
              p_period_start: number
              p_processed_by: string
              p_stripe_event_id?: string
            }
            Returns: Json
          }
        | {
            Args: {
              p_account_id: string
              p_credits: number
              p_invoice_id?: string
              p_period_end: number
              p_period_start: number
              p_processed_by: string
              p_provider?: string
              p_revenuecat_product_id?: string
              p_revenuecat_transaction_id?: string
              p_stripe_event_id?: string
            }
            Returns: Json
          }
      atomic_reset_expiring_credits: {
        Args: {
          p_account_id: string
          p_description?: string
          p_new_credits: number
          p_stripe_event_id?: string
        }
        Returns: Json
      }
      atomic_use_credits: {
        Args: {
          p_account_id: string
          p_amount: number
          p_description?: string
          p_message_id?: string
          p_thread_id?: string
        }
        Returns: Json
      }
      calcular_posicao_matriz: { Args: { pontuacao: number }; Returns: number }
      calculate_next_billing_date: {
        Args: { anchor_date: string; from_date?: string }
        Returns: string
      }
      calculate_priority: {
        Args: {
          p_complexidade_norm: number
          p_impacto_norm: number
          p_risco_norm: number
          p_urgencia_norm: number
        }
        Returns: number
      }
      can_cancel_subscription: {
        Args: { p_account_id: string }
        Returns: boolean
      }
      cancel_account_deletion_job: {
        Args: { p_deletion_request_id: string }
        Returns: boolean
      }
      check_renewal_already_processed: {
        Args: { p_account_id: string; p_period_start: number }
        Returns: Json
      }
      check_user_role: {
        Args: { required_role: Database["public"]["Enums"]["user_role"] }
        Returns: boolean
      }
      claim_pooled_sandbox: {
        Args: {
          p_account_id: string
          p_project_id: string
          p_updated_at: string
        }
        Returns: {
          config: Json
          external_id: string
          id: string
        }[]
      }
      cleanup_expired_credits: {
        Args: never
        Returns: {
          account_id: string
          credits_removed: number
          new_balance: number
        }[]
      }
      cleanup_old_webhook_events: { Args: never; Returns: number }
      cleanup_stale_circuit_breakers: { Args: never; Returns: number }
      cleanup_stale_presence_sessions: { Args: never; Returns: undefined }
      count_suna_agents_by_version: {
        Args: { p_version: string }
        Returns: number
      }
      create_account: { Args: { name?: string; slug?: string }; Returns: Json }
      create_agent_kb_processing_job: {
        Args: {
          p_account_id: string
          p_agent_id: string
          p_job_type: string
          p_source_info: Json
        }
        Returns: string
      }
      create_agent_version: {
        Args: {
          p_agent_id: string
          p_agentpress_tools?: Json
          p_configured_mcps?: Json
          p_created_by?: string
          p_custom_mcps?: Json
          p_system_prompt: string
        }
        Returns: string
      }
      create_invitation: {
        Args: {
          account_id: string
          account_role: "owner" | "member"
          invitation_type: "one_time" | "24_hour"
        }
        Returns: Json
      }
      create_template_from_agent: {
        Args: { p_agent_id: string; p_creator_id: string }
        Returns: string
      }
      current_user_account_role: { Args: { account_id: string }; Returns: Json }
      deduct_credits: {
        Args: {
          p_amount: number
          p_description: string
          p_reference_id?: string
          p_reference_type?: string
          p_user_id: string
        }
        Returns: {
          new_balance: number
          success: boolean
          transaction_id: string
        }[]
      }
      delete_invitation: { Args: { invitation_id: string }; Returns: undefined }
      delete_user_data: {
        Args: { p_account_id: string; p_user_id: string }
        Returns: boolean
      }
      delete_user_immediately: {
        Args: { p_account_id: string; p_user_id: string }
        Returns: boolean
      }
      determine_category: {
        Args: { p_impacto_norm: number; p_urgencia_norm: number }
        Returns: Database["public"]["Enums"]["task_category"]
      }
      execute_account_deletion: {
        Args: { p_deletion_request_id: string }
        Returns: undefined
      }
      expire_referral_code: { Args: { p_account_id: string }; Returns: Json }
      find_suna_agents_needing_update: {
        Args: { p_target_version: string }
        Returns: {
          account_id: string
          agent_id: string
          current_version: string
          last_central_update: string
          name: string
        }[]
      }
      find_suna_default_agent_for_account: {
        Args: { p_account_id: string }
        Returns: {
          account_id: string
          agent_id: string
          agentpress_tools: Json
          avatar: string
          avatar_color: string
          configured_mcps: Json
          created_at: string
          current_version_id: string
          custom_mcps: Json
          description: string
          download_count: number
          is_active: boolean
          is_default: boolean
          is_public: boolean
          marketplace_published_at: string
          metadata: Json
          name: string
          system_prompt: string
          tags: string[]
          updated_at: string
          version_count: number
        }[]
      }
      generate_referral_code: {
        Args: { p_account_id: string }
        Returns: string
      }
      get_account: { Args: { account_id: string }; Returns: Json }
      get_account_active_threads: {
        Args: { account_id_param: string }
        Returns: {
          last_seen: string
          session_count: number
          thread_id: string
        }[]
      }
      get_account_billing_status: {
        Args: { account_id: string }
        Returns: Json
      }
      get_account_by_slug: { Args: { slug: string }; Returns: Json }
      get_account_id: { Args: { slug: string }; Returns: string }
      get_account_invitations: {
        Args: {
          account_id: string
          results_limit?: number
          results_offset?: number
        }
        Returns: Json
      }
      get_account_members: {
        Args: {
          account_id: string
          results_limit?: number
          results_offset?: number
        }
        Returns: Json
      }
      get_accounts: { Args: never; Returns: Json }
      get_active_subscription_counts: {
        Args: never
        Returns: {
          revenuecat_paid: number
          stripe_paid: number
        }[]
      }
      get_active_users_week: {
        Args: { p_week_start: string }
        Returns: {
          count: number
        }[]
      }
      get_agent_config: { Args: { p_agent_id: string }; Returns: Json }
      get_agent_kb_processing_jobs: {
        Args: { p_agent_id: string; p_limit?: number }
        Returns: {
          completed_at: string
          created_at: string
          entries_created: number
          error_message: string
          job_id: string
          job_type: string
          result_info: Json
          source_info: Json
          status: string
          total_files: number
        }[]
      }
      get_agent_knowledge_base: {
        Args: { p_agent_id: string; p_include_inactive?: boolean }
        Returns: {
          content: string
          content_tokens: number
          created_at: string
          description: string
          entry_id: string
          is_active: boolean
          name: string
          updated_at: string
          usage_context: string
        }[]
      }
      get_agent_knowledge_base_context: {
        Args: { p_agent_id: string; p_max_tokens?: number }
        Returns: string
      }
      get_agent_mcp_config: { Args: { p_agent_id: string }; Returns: Json }
      get_agent_restrictions: {
        Args: { agent_row: Database["public"]["Tables"]["agents"]["Row"] }
        Returns: Json
      }
      get_agent_version_config: {
        Args: { p_version_id: string }
        Returns: Json
      }
      get_all_suna_default_agents: {
        Args: never
        Returns: {
          account_id: string
          agent_id: string
          agentpress_tools: Json
          avatar: string
          avatar_color: string
          centrally_managed: boolean
          configured_mcps: Json
          created_at: string
          custom_mcps: Json
          description: string
          is_active: boolean
          is_default: boolean
          management_version: string
          metadata: Json
          name: string
          system_prompt: string
          updated_at: string
        }[]
      }
      get_batch_progress: { Args: { p_projeto_id: string }; Returns: Json }
      get_conversation_insights: {
        Args: { p_date_from?: string; p_date_to?: string }
        Returns: Json
      }
      get_credit_balance: { Args: { p_user_id: string }; Returns: number }
      get_credit_breakdown: {
        Args: { p_account_id: string }
        Returns: {
          daily: number
          extra: number
          monthly: number
          total: number
        }[]
      }
      get_daily_top_users: {
        Args: {
          p_date_from: string
          p_date_to: string
          p_page?: number
          p_page_size?: number
          p_timezone?: string
        }
        Returns: {
          active_days: number
          agent_runs_in_range: number
          email: string
          first_activity: string
          last_activity: string
          threads_in_range: number
          total_count: number
          user_id: string
        }[]
      }
      get_engagement_metrics: {
        Args: {
          p_month_start: string
          p_today_end: string
          p_today_start: string
          p_week_start: string
        }
        Returns: {
          dau: number
          mau: number
          threads_today: number
          threads_week: number
          wau: number
        }[]
      }
      get_free_signups_funnel_counts: {
        Args: { date_from: string; date_to: string }
        Returns: {
          clicked_checkout: number
          converted: number
          total_signups: number
          tried_and_viewed: number
          tried_task: number
          viewed_pricing: number
        }[]
      }
      get_free_signups_with_activity: {
        Args: { date_from: string; date_to: string }
        Returns: {
          has_activity: boolean
          is_converted: boolean
          user_id: string
          viewed_pricing: boolean
        }[]
      }
      get_llm_formatted_messages: {
        Args: { p_thread_id: string }
        Returns: Json
      }
      get_marketplace_agents: {
        Args: {
          p_limit?: number
          p_offset?: number
          p_search?: string
          p_tags?: string[]
        }
        Returns: {
          agent_id: string
          agentpress_tools: Json
          avatar: string
          avatar_color: string
          configured_mcps: Json
          created_at: string
          creator_name: string
          description: string
          download_count: number
          marketplace_published_at: string
          name: string
          system_prompt: string
          tags: string[]
        }[]
      }
      get_memory_stats: {
        Args: { p_account_id: string }
        Returns: {
          memories_by_type: Json
          newest_memory: string
          oldest_memory: string
          total_memories: number
        }[]
      }
      get_missing_credentials_for_template: {
        Args: { p_account_id: string; p_template_id: string }
        Returns: {
          display_name: string
          qualified_name: string
          required_config: string[]
        }[]
      }
      get_or_create_referral_code: {
        Args: { p_account_id: string }
        Returns: string
      }
      get_other_checkout_clicks_count: {
        Args: { date_from: string; date_to: string }
        Returns: number
      }
      get_personal_account: { Args: never; Returns: Json }
      get_processing_dashboard: {
        Args: { p_projeto_id?: string }
        Returns: Json
      }
      get_project_category_distribution:
        | {
            Args: { end_date: string; start_date: string }
            Returns: {
              category: string
              count: number
            }[]
          }
        | {
            Args: { end_date: string; p_tier?: string; start_date: string }
            Returns: {
              category: string
              count: number
            }[]
          }
      get_referral_stats: { Args: { p_account_id: string }; Returns: Json }
      get_retention_cohorts: {
        Args: { p_cohorts_back?: number; p_weeks_to_measure?: number }
        Returns: {
          cohort_size: number
          cohort_week_end: string
          cohort_week_start: string
          week_1_pct: number
          week_10_pct: number
          week_11_pct: number
          week_12_pct: number
          week_2_pct: number
          week_3_pct: number
          week_4_pct: number
          week_5_pct: number
          week_6_pct: number
          week_7_pct: number
          week_8_pct: number
          week_9_pct: number
        }[]
      }
      get_retention_data: {
        Args: {
          p_min_weeks_active?: number
          p_page?: number
          p_page_size?: number
          p_weeks_back?: number
        }
        Returns: {
          email: string
          first_activity: string
          last_activity: string
          total_count: number
          total_threads: number
          user_id: string
          weeks_active: number
        }[]
      }
      get_revenuecat_revenue_by_tier: {
        Args: { end_date: string; start_date: string }
        Returns: {
          payment_count: number
          tier: string
          total_revenue: number
          unique_users: number
          user_emails: string[]
        }[]
      }
      get_signup_activation_stats: {
        Args: { date_from: string; date_to: string }
        Returns: {
          activated_signups: number
          bucket_0: number
          bucket_1: number
          bucket_10_plus: number
          bucket_2_5: number
          bucket_6_10: number
          total_signups: number
        }[]
      }
      get_signups_by_date: {
        Args: { end_date: string; start_date: string }
        Returns: {
          count: number
          signup_date: string
        }[]
      }
      get_stale_projects_for_categorization: {
        Args: { max_count?: number; stale_threshold: string }
        Returns: {
          project_id: string
        }[]
      }
      get_suna_default_agent_stats: {
        Args: never
        Returns: {
          active_agents: number
          creation_dates: Json
          inactive_agents: number
          total_agents: number
          version_distribution: Json
        }[]
      }
      get_task_performance: {
        Args: { p_end: string; p_start: string }
        Returns: {
          avg_duration_seconds: number
          completed_runs: number
          failed_runs: number
          pending_runs: number
          running_runs: number
          runs_by_status: Json
          stopped_runs: number
          total_runs: number
        }[]
      }
      get_thread_knowledge_base: {
        Args: { p_include_inactive?: boolean; p_thread_id: string }
        Returns: {
          content: string
          created_at: string
          description: string
          entry_id: string
          is_active: boolean
          name: string
          usage_context: string
        }[]
      }
      get_thread_memory_enabled: {
        Args: { p_thread_id: string }
        Returns: boolean
      }
      get_thread_message_distribution: {
        Args: { end_date: string; start_date: string }
        Returns: {
          five_plus_messages: number
          one_message: number
          total_threads: number
          two_three_messages: number
          zero_messages: number
        }[]
      }
      get_thread_tier_distribution: {
        Args: { end_date: string; start_date: string }
        Returns: {
          count: number
          tier: string
        }[]
      }
      get_thread_viewers: {
        Args: { thread_id_param: string }
        Returns: {
          account_id: string
          last_seen: string
          platform: string
          session_count: number
        }[]
      }
      get_threads_by_category: {
        Args: {
          p_category: string
          p_date_from?: string
          p_date_to?: string
          p_limit?: number
          p_max_messages?: number
          p_min_messages?: number
          p_offset?: number
          p_sort_by?: string
          p_sort_order?: string
        }
        Returns: {
          account_id: string
          created_at: string
          is_public: boolean
          project_id: string
          thread_id: string
          total_message_count: number
          updated_at: string
          user_message_count: number
        }[]
      }
      get_threads_by_category_count: {
        Args: {
          p_category: string
          p_date_from?: string
          p_date_to?: string
          p_max_messages?: number
          p_min_messages?: number
        }
        Returns: number
      }
      get_threads_by_tier: {
        Args: {
          p_date_from?: string
          p_date_to?: string
          p_limit?: number
          p_max_messages?: number
          p_min_messages?: number
          p_offset?: number
          p_sort_by?: string
          p_sort_order?: string
          p_tier: string
        }
        Returns: {
          account_id: string
          created_at: string
          is_public: boolean
          project_id: string
          thread_id: string
          total_message_count: number
          updated_at: string
          user_message_count: number
        }[]
      }
      get_threads_by_tier_and_category: {
        Args: {
          p_category?: string
          p_date_from?: string
          p_date_to?: string
          p_limit?: number
          p_max_messages?: number
          p_min_messages?: number
          p_offset?: number
          p_sort_by?: string
          p_sort_order?: string
          p_tier?: string
        }
        Returns: {
          account_id: string
          created_at: string
          is_public: boolean
          project_id: string
          thread_id: string
          total_message_count: number
          updated_at: string
          user_message_count: number
        }[]
      }
      get_threads_by_tier_and_category_count: {
        Args: {
          p_category?: string
          p_date_from?: string
          p_date_to?: string
          p_max_messages?: number
          p_min_messages?: number
          p_tier?: string
        }
        Returns: number
      }
      get_threads_by_tier_count: {
        Args: {
          p_date_from?: string
          p_date_to?: string
          p_max_messages?: number
          p_min_messages?: number
          p_tier: string
        }
        Returns: number
      }
      get_usage_costs_by_tier: {
        Args: { end_date: string; start_date: string }
        Returns: {
          provider: string
          tier: string
          total_cost: number
          user_count: number
        }[]
      }
      get_use_case_patterns: {
        Args: { p_date_from?: string; p_date_to?: string; p_limit?: number }
        Returns: Json
      }
      get_user_account_by_email: {
        Args: { email_input: string }
        Returns: Json
      }
      get_user_email: { Args: { user_id: string }; Returns: string }
      get_user_memory_enabled: {
        Args: { p_account_id: string }
        Returns: boolean
      }
      get_user_metadata: { Args: { user_id: string }; Returns: Json }
      get_user_referrals: {
        Args: { p_account_id: string; p_limit?: number; p_offset?: number }
        Returns: Json
      }
      get_vercel_analytics: {
        Args: { target_date: string }
        Returns: {
          pageviews: number
          unique_visitors: number
        }[]
      }
      get_vercel_analytics_range: {
        Args: { end_date: string; start_date: string }
        Returns: {
          analytics_date: string
          pageviews: number
          unique_visitors: number
        }[]
      }
      grant_tier_credits:
        | {
            Args: { p_amount: number; p_tier: string; p_user_id: string }
            Returns: boolean
          }
        | {
            Args: { p_amount: number; p_tier: string; p_user_id: string }
            Returns: boolean
          }
      grant_user_role: {
        Args: {
          new_role: Database["public"]["Enums"]["user_role"]
          target_user_id: string
        }
        Returns: boolean
      }
      increment_analytics_attempts: {
        Args: { queue_id: string }
        Returns: undefined
      }
      increment_retry: {
        Args: { p_id: number; p_table: string }
        Returns: number
      }
      increment_template_download_count: {
        Args: { template_id_param: string }
        Returns: undefined
      }
      inserir_analise: {
        Args: {
          p_data_decisao: string
          p_documento: string
          p_juiz: string
          p_processo: string
          p_vara: string
        }
        Returns: number
      }
      install_template_as_instance: {
        Args: {
          p_account_id: string
          p_instance_name?: string
          p_template_id: string
        }
        Returns: string
      }
      is_centrally_managed_agent: {
        Args: { agent_row: Database["public"]["Tables"]["agents"]["Row"] }
        Returns: boolean
      }
      is_suna_default_agent: {
        Args: { agent_row: Database["public"]["Tables"]["agents"]["Row"] }
        Returns: boolean
      }
      log_metric: {
        Args: {
          p_details?: Json
          p_duration_ms?: number
          p_projeto_id: string
          p_type: string
          p_value?: number
        }
        Returns: undefined
      }
      lookup_invitation: {
        Args: { lookup_invitation_token: string }
        Returns: Json
      }
      match_chunks: {
        Args: {
          filter_document_id?: string
          match_count?: number
          query_embedding: string
        }
        Returns: {
          content: string
          document_id: string
          filename: string
          id: number
          page_number: number
          similarity: number
        }[]
      }
      match_workflows: {
        Args: {
          match_count: number
          match_threshold: number
          query_embedding: string
        }
        Returns: {
          id: string
          name: string
          similarity: number
          workflow_json: Json
        }[]
      }
      migrate_agents_to_versioned: { Args: never; Returns: undefined }
      migrate_user_to_credits: { Args: { p_user_id: string }; Returns: boolean }
      normalize_score: { Args: { score: number }; Returns: number }
      process_monthly_refills: {
        Args: never
        Returns: {
          account_id: string
          credits_granted: number
          next_grant_date: string
          status: string
          tier: string
        }[]
      }
      process_referral: {
        Args: {
          p_credits_amount?: number
          p_referral_code: string
          p_referred_account_id: string
          p_referrer_id: string
        }
        Returns: Json
      }
      process_scheduled_account_deletions: {
        Args: never
        Returns: {
          deleted_accounts: number
          errors: number
          processed_count: number
        }[]
      }
      publish_agent_to_marketplace: {
        Args: { p_agent_id: string }
        Returns: undefined
      }
      reconcile_credit_balance: {
        Args: { p_account_id: string }
        Returns: {
          difference: number
          new_balance: number
          old_balance: number
          was_fixed: boolean
        }[]
      }
      relatorio_precedentes_por_tese: {
        Args: { p_tese: string }
        Returns: {
          citacao: string
          data_decisao: string
          fundamento: string
          instancia: string
          processo: string
          status: string
          tribunal: string
        }[]
      }
      release_distributed_lock: {
        Args: { p_holder_id: string; p_lock_key: string }
        Returns: boolean
      }
      remove_account_member: {
        Args: { account_id: string; user_id: string }
        Returns: undefined
      }
      reprocess_case: { Args: { p_case_id: number }; Returns: Json }
      reprocess_errors: {
        Args: { p_max_retries?: number; p_projeto_id: string }
        Returns: Json
      }
      reset_circuit_breaker: {
        Args: { p_circuit_name: string }
        Returns: boolean
      }
      sanitize_config_for_template: {
        Args: { input_config: Json }
        Returns: Json
      }
      schedule_account_deletion: {
        Args: { p_deletion_request_id: string; p_scheduled_time: string }
        Returns: string
      }
      schedule_trigger_http: {
        Args: {
          body?: Json
          headers?: Json
          job_name: string
          schedule: string
          timeout_ms?: number
          url: string
        }
        Returns: number
      }
      search_memories_by_similarity: {
        Args: {
          p_account_id: string
          p_limit?: number
          p_query_embedding: string
          p_similarity_threshold?: number
        }
        Returns: {
          confidence_score: number
          content: string
          created_at: string
          memory_id: string
          memory_type: Database["public"]["Enums"]["memory_type"]
          metadata: Json
          similarity: number
        }[]
      }
      search_n8n_knowledge: {
        Args: {
          knowledge_types: string[]
          match_count: number
          match_threshold: number
          query_embedding: string
        }
        Returns: {
          category: string
          code_example: Json
          content: Json
          description: string
          id: string
          knowledge_type: string
          node_type: string
          popularity_score: number
          similarity: number
          tags: string[]
          title: string
          use_cases: string[]
        }[]
      }
      service_role_upsert_customer_subscription: {
        Args: { account_id: string; customer?: Json; subscription?: Json }
        Returns: undefined
      }
      set_thread_memory_enabled: {
        Args: { p_enabled: boolean; p_thread_id: string }
        Returns: undefined
      }
      set_user_memory_enabled: {
        Args: { p_account_id: string; p_enabled: boolean }
        Returns: undefined
      }
      show_limit: { Args: never; Returns: number }
      show_trgm: { Args: { "": string }; Returns: string[] }
      switch_agent_version: {
        Args: {
          p_agent_id: string
          p_changed_by?: string
          p_version_id: string
        }
        Returns: undefined
      }
      track_checkout_click: {
        Args: { p_tier?: string; p_user_id: string }
        Returns: undefined
      }
      track_pricing_view: { Args: { p_user_id: string }; Returns: undefined }
      trigger_stale_project_categorization: { Args: never; Returns: undefined }
      unpublish_agent_from_marketplace: {
        Args: { p_agent_id: string }
        Returns: undefined
      }
      unschedule_job_by_name: { Args: { job_name: string }; Returns: undefined }
      update_account: {
        Args: {
          account_id: string
          name?: string
          public_metadata?: Json
          replace_metadata?: boolean
          slug?: string
        }
        Returns: Json
      }
      update_account_user_role: {
        Args: {
          account_id: string
          make_primary_owner?: boolean
          new_account_role: "owner" | "member"
          user_id: string
        }
        Returns: undefined
      }
      update_agent_kb_job_status: {
        Args: {
          p_entries_created?: number
          p_error_message?: string
          p_job_id: string
          p_result_info?: Json
          p_status: string
          p_total_files?: number
        }
        Returns: undefined
      }
      upsert_vercel_pageview: {
        Args: { p_date: string; p_device_id: string }
        Returns: undefined
      }
      validate_referral_code: { Args: { p_code: string }; Returns: string }
    }
    Enums: {
      agent_trigger_type:
        | "telegram"
        | "slack"
        | "webhook"
        | "schedule"
        | "email"
        | "github"
        | "discord"
        | "teams"
      agent_workflow_status: "draft" | "active" | "paused" | "archived"
      analysis_status: "draft" | "ready" | "archived"
      api_key_status: "active" | "revoked" | "expired"
      benchmark_result_status: "completed" | "failed" | "timeout" | "error"
      benchmark_run_status: "running" | "completed" | "failed" | "cancelled"
      benchmark_run_type: "core_test" | "stress_test"
      memory_extraction_status:
        | "pending"
        | "processing"
        | "completed"
        | "failed"
      memory_type: "fact" | "preference" | "context" | "conversation_summary"
      task_category: "fazer_agora" | "agendar" | "delegar" | "eliminar"
      thread_status: "pending" | "initializing" | "ready" | "error"
      user_role: "user" | "admin" | "super_admin"
    }
    CompositeTypes: {
      [_ in never]: never
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
    Enums: {
      agent_trigger_type: [
        "telegram",
        "slack",
        "webhook",
        "schedule",
        "email",
        "github",
        "discord",
        "teams",
      ],
      agent_workflow_status: ["draft", "active", "paused", "archived"],
      analysis_status: ["draft", "ready", "archived"],
      api_key_status: ["active", "revoked", "expired"],
      benchmark_result_status: ["completed", "failed", "timeout", "error"],
      benchmark_run_status: ["running", "completed", "failed", "cancelled"],
      benchmark_run_type: ["core_test", "stress_test"],
      memory_extraction_status: [
        "pending",
        "processing",
        "completed",
        "failed",
      ],
      memory_type: ["fact", "preference", "context", "conversation_summary"],
      task_category: ["fazer_agora", "agendar", "delegar", "eliminar"],
      thread_status: ["pending", "initializing", "ready", "error"],
      user_role: ["user", "admin", "super_admin"],
    },
  },
} as const
