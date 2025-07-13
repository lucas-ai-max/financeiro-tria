import React from 'react';
import { UploadSection } from '@/components/upload/UploadSection';
import { InstructionsCard } from '@/components/upload/InstructionsCard';

const UploadPage = () => {
  const defaultWebhookUrl = 'https://webhook.plxdigital.com.br/webhook/receber-whatsapp-doc';

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
            <UploadSection
              title="Upload 1"
              uploadId="upload-1"
              defaultWebhookUrl={defaultWebhookUrl}
            />
          </div>

          {/* Upload 2 */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Upload 2</h2>
            <UploadSection
              title="Upload 2"
              uploadId="upload-2"
              defaultWebhookUrl={defaultWebhookUrl}
            />
          </div>
        </div>

        {/* Instructions */}
        <InstructionsCard />
      </div>
    </div>
  );
};

export default UploadPage;