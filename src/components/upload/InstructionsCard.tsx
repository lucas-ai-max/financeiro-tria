import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const InstructionsCard: React.FC = () => {
  return (
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
  );
};