import React from 'react';
import { UploadSection } from '@/components/upload/UploadSection';
import { InstructionsCard } from '@/components/upload/InstructionsCard';
import logoTriaa from '@/assets/logo-triaa.png';

const UploadPage = () => {
  const uploadSections = [
    {
      title: "Cartões",
      uploadId: "cartao-normal",
      webhookUrl: "https://webhook.tc1.triacompany.com.br/webhook/receber-whatsapp-doc/cartao_normal"
    },
    {
      title: "Extrato", 
      uploadId: "cc-itau",
      webhookUrl: "https://webhook.tc1.triacompany.com.br/webhook/receber-whatsapp-doc/cc_itau"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <img 
              src={logoTriaa} 
              alt="Triaa Logo" 
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Upload de Planilhas</h1>
          <p className="text-muted-foreground">
            Envie suas planilhas diretamente para o N8N via webhook
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {uploadSections.map((section) => (
            <div key={section.uploadId}>
              <h2 className="text-lg font-semibold text-foreground mb-4">{section.title}</h2>
              <UploadSection
                title={section.title}
                uploadId={section.uploadId}
                defaultWebhookUrl={section.webhookUrl}
                fixedWebhook={true}
              />
            </div>
          ))}
        </div>

        {/* Instructions */}
        <InstructionsCard />
      </div>
    </div>
  );
};

export default UploadPage;