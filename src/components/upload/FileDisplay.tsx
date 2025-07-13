import React from 'react';
import { CheckCircle2, FileSpreadsheet, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileDisplayProps {
  selectedFile: File;
  onRemove: () => void;
  formatFileSize: (bytes: number) => string;
}

export const FileDisplay: React.FC<FileDisplayProps> = ({
  selectedFile,
  onRemove,
  formatFileSize
}) => {
  return (
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
              onClick={onRemove}
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
  );
};