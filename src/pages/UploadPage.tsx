import React, { useState, useCallback } from 'react';
import { Upload, FileSpreadsheet, Send, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();

  const acceptedFileTypes = '.xlsx,.xls,.csv,.ods';
  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const validateFile = (file: File): boolean => {
    const validTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
                       'application/vnd.ms-excel', 
                       'text/csv', 
                       'application/vnd.oasis.opendocument.spreadsheet'];
    
    if (!validTypes.includes(file.type) && !file.name.match(/\.(xlsx|xls|csv|ods)$/i)) {
      toast({
        title: "Tipo de arquivo inválido",
        description: "Por favor, selecione um arquivo de planilha (.xlsx, .xls, .csv, .ods)",
        variant: "destructive",
      });
      return false;
    }

    if (file.size > maxFileSize) {
      toast({
        title: "Arquivo muito grande",
        description: "O arquivo deve ter no máximo 10MB",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleFileSelect = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile(file);
      toast({
        title: "Arquivo selecionado",
        description: `${file.name} foi selecionado com sucesso`,
      });
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, []);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const sendToN8N = async () => {
    if (!selectedFile || !webhookUrl) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, selecione um arquivo e insira a URL do webhook",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('filename', selectedFile.name);
      formData.append('filesize', selectedFile.size.toString());
      formData.append('timestamp', new Date().toISOString());
      formData.append('source', 'planilha-upload');

      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Sucesso!",
          description: "Planilha enviada para o N8N com sucesso",
        });
        setSelectedFile(null);
        setWebhookUrl('');
      } else {
        throw new Error('Falha na resposta do servidor');
      }
    } catch (error) {
      console.error('Erro ao enviar para N8N:', error);
      toast({
        title: "Erro no envio",
        description: "Não foi possível enviar a planilha. Verifique a URL do webhook e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Upload de Planilhas</h1>
          <p className="text-muted-foreground">
            Envie suas planilhas diretamente para o N8N via webhook
          </p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5 text-primary" />
              Configuração do Webhook
            </CardTitle>
            <CardDescription>
              Insira a URL do webhook do N8N para onde a planilha será enviada
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="webhook-url">URL do Webhook N8N</Label>
              <Input
                id="webhook-url"
                type="url"
                placeholder="https://seu-n8n.com/webhook/planilhas"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="bg-input border-border"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Upload de Arquivo
            </CardTitle>
            <CardDescription>
              Arraste e solte ou clique para selecionar uma planilha (.xlsx, .xls, .csv, .ods)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                isDragOver
                  ? 'border-upload-area-border bg-upload-area-hover'
                  : 'border-upload-area-border bg-upload-area hover:bg-upload-area-hover'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                accept={acceptedFileTypes}
                onChange={handleFileInputChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="file-upload"
              />
              
              {!selectedFile ? (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-foreground">
                      Arraste sua planilha aqui
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ou clique para selecionar um arquivo
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Formatos aceitos: .xlsx, .xls, .csv, .ods (máx. 10MB)
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <CheckCircle2 className="h-12 w-12 text-success mx-auto" />
                  <div className="space-y-2">
                    <p className="text-lg font-medium text-foreground">
                      Arquivo selecionado
                    </p>
                    <div className="bg-secondary rounded-lg p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileSpreadsheet className="h-4 w-4 text-primary" />
                          <span className="font-medium text-sm text-foreground">
                            {selectedFile.name}
                          </span>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={removeFile}
                          className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(selectedFile.size)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Separator className="my-6" />

            {/* Send Button */}
            <div className="space-y-4">
              <Button
                onClick={sendToN8N}
                disabled={!selectedFile || !webhookUrl || isUploading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                {isUploading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar para N8N
                  </>
                )}
              </Button>

              {(!selectedFile || !webhookUrl) && (
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>
                    {!selectedFile && !webhookUrl
                      ? 'Selecione um arquivo e configure o webhook'
                      : !selectedFile
                      ? 'Selecione um arquivo'
                      : 'Configure a URL do webhook'}
                  </span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Como configurar o webhook no N8N:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">1.</span>
                  Crie um novo workflow no N8N
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">2.</span>
                  Adicione um nó "Webhook" como trigger
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">3.</span>
                  Configure o método como "POST"
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-primary">4.</span>
                  Copie a URL do webhook e cole no campo acima
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UploadPage;