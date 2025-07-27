import { FileSpreadsheet, Upload, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import logoTriaa from '@/assets/logo-triaa.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src={logoTriaa} 
              alt="Triaa Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Sistema de Upload de Planilhas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Envie suas planilhas diretamente para o N8N através de webhooks de forma simples e segura
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Upload Simples
              </CardTitle>
              <CardDescription>
                Interface drag & drop intuitiva para upload de planilhas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Suporte a .xlsx, .xls, .csv e .ods</li>
                <li>• Arquivos até 10MB</li>
                <li>• Validação automática de formato</li>
                <li>• Feedback visual em tempo real</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-primary" />
                Integração N8N
              </CardTitle>
              <CardDescription>
                Conexão direta com seus workflows N8N via webhook
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Configuração flexível de webhook</li>
                <li>• Envio seguro de dados</li>
                <li>• Processamento automático</li>
                <li>• Status de entrega em tempo real</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Pronto para começar?
              </h2>
              <p className="text-muted-foreground mb-6">
                Configure seu webhook e envie sua primeira planilha em segundos
              </p>
              <Link to="/upload">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Fazer Upload de Planilha
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <div className="mt-12">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle>Como usar o sistema</CardTitle>
              <CardDescription>
                Siga estes passos simples para integrar com o N8N
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mx-auto">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground">Configure o N8N</h3>
                  <p className="text-sm text-muted-foreground">
                    Crie um workflow com webhook trigger no seu N8N
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mx-auto">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground">Insira a URL</h3>
                  <p className="text-sm text-muted-foreground">
                    Cole a URL do webhook na página de upload
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mx-auto">
                    3
                  </div>
                  <h3 className="font-semibold text-foreground">Envie o Arquivo</h3>
                  <p className="text-sm text-muted-foreground">
                    Faça upload da planilha e ela será processada automaticamente
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
