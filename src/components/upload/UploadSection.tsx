import React, { useState, useCallback } from 'react';
import { Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { WebhookConfig } from './WebhookConfig';
import { UploadArea } from './UploadArea';
import { SendButton } from './SendButton';

interface UploadSectionProps {
  title: string;
  uploadId: string;
  defaultWebhookUrl: string;
}

export const UploadSection: React.FC<UploadSectionProps> = ({
  title,
  uploadId,
  defaultWebhookUrl
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [webhookUrl, setWebhookUrl] = useState(defaultWebhookUrl);
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
        title: `Arquivo selecionado (${title})`,
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
        title: `Dados incompletos (${title})`,
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
      formData.append('source', `planilha-${uploadId}`);

      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: `Sucesso! (${title})`,
          description: "Planilha enviada para o N8N com sucesso",
        });
        setSelectedFile(null);
      } else {
        throw new Error('Falha na resposta do servidor');
      }
    } catch (error) {
      console.error('Erro ao enviar para N8N:', error);
      toast({
        title: `Erro no envio (${title})`,
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
    <div className="space-y-6">
      <WebhookConfig
        title={title}
        webhookUrl={webhookUrl}
        setWebhookUrl={setWebhookUrl}
        uploadId={uploadId}
      />

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
          <UploadArea
            selectedFile={selectedFile}
            isDragOver={isDragOver}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onFileInputChange={handleFileInputChange}
            onRemoveFile={removeFile}
            acceptedFileTypes={acceptedFileTypes}
            uploadId={uploadId}
            formatFileSize={formatFileSize}
          />

          <Separator className="my-6" />

          <SendButton
            onSend={sendToN8N}
            disabled={!selectedFile || !webhookUrl || isUploading}
            isUploading={isUploading}
            selectedFile={selectedFile}
            webhookUrl={webhookUrl}
          />
        </CardContent>
      </Card>
    </div>
  );
};