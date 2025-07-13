import React from 'react';
import { FileSpreadsheet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface WebhookConfigProps {
  title: string;
  webhookUrl: string;
  setWebhookUrl: (url: string) => void;
  uploadId: string;
}

export const WebhookConfig: React.FC<WebhookConfigProps> = ({
  title,
  webhookUrl,
  setWebhookUrl,
  uploadId
}) => {
  return (
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
  );
};