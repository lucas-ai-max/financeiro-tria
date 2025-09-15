import React from 'react';
import { UploadSection } from '@/components/upload/UploadSection';
import { InstructionsCard } from '@/components/upload/InstructionsCard';
import logoTriaa from '@/assets/logo-triaa.png';

const UploadPage = () => {
  const bankSections = [
    {
      title: "Nubank",
      uploadId: "nubank",
      webhookUrl: "https://webhook.tc1.triacompany.com.br/webhook/receber-whatsapp-doc/nubank"
    },
    {
      title: "Itaú Unibanco", 
      uploadId: "itau-unibanco",
      webhookUrl: "https://webhook.tc1.triacompany.com.br/webhook/receber-whatsapp-doc/itau_unibanco"
    },
    {
      title: "BTG Pactual",
      uploadId: "btg-pactual",
      webhookUrl: "https://webhook.tc1.triacompany.com.br/webhook/receber-whatsapp-doc/btg_pactual"
    }
  ];

  const cardSections = [
    {
      title: "BTG Cartão", 
      uploadId: "btg-cartao",
      webhookUrl: "https://webhook.tc1.triacompany.com.br/webhook/receber-whatsapp-doc/btg_cartao"
    },
    {
      title: "Nubank Violeta",
      uploadId: "nubank-violeta",
      webhookUrl: "https://webhook.tc1.triacompany.com.br/webhook/receber-whatsapp-doc/nubank_violeta"
    },
    {
      title: "Personallite Black", 
      uploadId: "personallite-black",
      webhookUrl: "https://webhook.tc1.triacompany.com.br/webhook/receber-whatsapp-doc/personallite_black"
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

        {/* Bancos Section */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <h2 className="text-2xl font-bold bg-gradient-green bg-clip-text text-transparent text-center mb-6">
            Bancos
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {bankSections.map((section) => (
              <div key={section.uploadId}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{section.title}</h3>
                <UploadSection
                  title={section.title}
                  uploadId={section.uploadId}
                  defaultWebhookUrl={section.webhookUrl}
                  fixedWebhook={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cartões Section */}
        <div className="p-6 border border-border rounded-lg bg-card">
          <h2 className="text-2xl font-bold bg-gradient-green bg-clip-text text-transparent text-center mb-6">
            Cartões
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cardSections.map((section) => (
              <div key={section.uploadId}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{section.title}</h3>
                <UploadSection
                  title={section.title}
                  uploadId={section.uploadId}
                  defaultWebhookUrl={section.webhookUrl}
                  fixedWebhook={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <InstructionsCard />
      </div>
    </div>
  );
};

export default UploadPage;