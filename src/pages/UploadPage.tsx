import React, { useState, useCallback } from 'react';
import { Upload, FileSpreadsheet, Send, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const UploadPage = () => {
  // Upload 1 states
  const [selectedFile1, setSelectedFile1] = useState<File | null>(null);
  const [webhookUrl1, setWebhookUrl1] = useState('https://webhook.plxdigital.com.br/webhook/receber-whatsapp-doc');
  const [isUploading1, setIsUploading1] = useState(false);
  const [isDragOver1, setIsDragOver1] = useState(false);
  
  // Upload 2 states
  const [selectedFile2, setSelectedFile2] = useState<File | null>(null);
  const [webhookUrl2, setWebhookUrl2] = useState('https://webhook.plxdigital.com.br/webhook/receber-whatsapp-doc');
  const [isUploading2, setIsUploading2] = useState(false);
  const [isDragOver2, setIsDragOver2] = useState(false);
  
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

  // Upload 1 handlers
  const handleFileSelect1 = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile1(file);
      toast({
        title: "Arquivo selecionado (Upload 1)",
        description: `${file.name} foi selecionado com sucesso`,
      });
    }
  };

  const handleDragOver1 = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver1(true);
  }, []);

  const handleDragLeave1 = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver1(false);
  }, []);

  const handleDrop1 = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver1(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect1(files[0]);
    }
  }, []);

  const handleFileInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect1(files[0]);
    }
  };

  const removeFile1 = () => {
    setSelectedFile1(null);
  };

  const sendToN8N1 = async () => {
    if (!selectedFile1 || !webhookUrl1) {
      toast({
        title: "Dados incompletos (Upload 1)",
        description: "Por favor, selecione um arquivo e insira a URL do webhook",
        variant: "destructive",
      });
      return;
    }

    setIsUploading1(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile1);
      formData.append('filename', selectedFile1.name);
      formData.append('filesize', selectedFile1.size.toString());
      formData.append('timestamp', new Date().toISOString());
      formData.append('source', 'planilha-upload-1');

      const response = await fetch(webhookUrl1, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Sucesso! (Upload 1)",
          description: "Planilha enviada para o N8N com sucesso",
        });
        setSelectedFile1(null);
      } else {
        throw new Error('Falha na resposta do servidor');
      }
    } catch (error) {
      console.error('Erro ao enviar para N8N:', error);
      toast({
        title: "Erro no envio (Upload 1)",
        description: "Não foi possível enviar a planilha. Verifique a URL do webhook e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsUploading1(false);
    }
  };

  // Upload 2 handlers
  const handleFileSelect2 = (file: File) => {
    if (validateFile(file)) {
      setSelectedFile2(file);
      toast({
        title: "Arquivo selecionado (Upload 2)",
        description: `${file.name} foi selecionado com sucesso`,
      });
    }
  };

  const handleDragOver2 = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver2(true);
  }, []);

  const handleDragLeave2 = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver2(false);
  }, []);

  const handleDrop2 = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver2(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect2(files[0]);
    }
  }, []);

  const handleFileInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect2(files[0]);
    }
  };

  const removeFile2 = () => {
    setSelectedFile2(null);
  };

  const sendToN8N2 = async () => {
    if (!selectedFile2 || !webhookUrl2) {
      toast({
        title: "Dados incompletos (Upload 2)",
        description: "Por favor, selecione um arquivo e insira a URL do webhook",
        variant: "destructive",
      });
      return;
    }

    setIsUploading2(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile2);
      formData.append('filename', selectedFile2.name);
      formData.append('filesize', selectedFile2.size.toString());
      formData.append('timestamp', new Date().toISOString());
      formData.append('source', 'planilha-upload-2');

      const response = await fetch(webhookUrl2, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Sucesso! (Upload 2)",
          description: "Planilha enviada para o N8N com sucesso",
        });
        setSelectedFile2(null);
      } else {
        throw new Error('Falha na resposta do servidor');
      }
    } catch (error) {
      console.error('Erro ao enviar para N8N:', error);
      toast({
        title: "Erro no envio (Upload 2)",
        description: "Não foi possível enviar a planilha. Verifique a URL do webhook e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsUploading2(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const renderUploadSection = (
    title: string,
    selectedFile: File | null,
    webhookUrl: string,
    setWebhookUrl: (url: string) => void,
    isDragOver: boolean,
    handleDragOver: (e: React.DragEvent) => void,
    handleDragLeave: (e: React.DragEvent) => void,
    handleDrop: (e: React.DragEvent) => void,
    handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    removeFile: () => void,
    sendToN8N: () => void,
    isUploading: boolean,
    uploadId: string
  ) => (
    <div className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5 text-primary" />
            {title} - Webhook
          </CardTitle>
          <CardDescription>
            Insira a URL do webhook do N8N para onde a planilha será enviada
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor={`webhook-url-${uploadId}`}>URL do Webhook N8N</Label>
            <Input
              id={`webhook-url-${uploadId}`}
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
            {title} - Upload de Arquivo
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
              id={`file-upload-${uploadId}`}
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
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Upload de Planilhas</h1>
          <p className="text-muted-foreground">
            Envie suas planilhas diretamente para o N8N via webhook
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload 1 */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Upload 1</h2>
            {renderUploadSection(
              "Upload 1",
              selectedFile1,
              webhookUrl1,
              setWebhookUrl1,
              isDragOver1,
              handleDragOver1,
              handleDragLeave1,
              handleDrop1,
              handleFileInputChange1,
              removeFile1,
              sendToN8N1,
              isUploading1,
              "1"
            )}
          </div>

          {/* Upload 2 */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Upload 2</h2>
            {renderUploadSection(
              "Upload 2",
              selectedFile2,
              webhookUrl2,
              setWebhookUrl2,
              isDragOver2,
              handleDragOver2,
              handleDragLeave2,
              handleDrop2,
              handleFileInputChange2,
              removeFile2,
              sendToN8N2,
              isUploading2,
              "2"
            )}
          </div>
        </div>

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