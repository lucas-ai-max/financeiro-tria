import React from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SendButtonProps {
  onSend: () => void;
  disabled: boolean;
  isUploading: boolean;
  selectedFile: File | null;
  webhookUrl: string;
}

export const SendButton: React.FC<SendButtonProps> = ({
  onSend,
  disabled,
  isUploading,
  selectedFile,
  webhookUrl
}) => {
  return (
    <div className="space-y-4">
      <Button
        onClick={onSend}
        disabled={disabled}
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
  );
};