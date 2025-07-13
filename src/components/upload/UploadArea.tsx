import React from 'react';
import { Upload } from 'lucide-react';
import { FileDisplay } from './FileDisplay';

interface UploadAreaProps {
  selectedFile: File | null;
  isDragOver: boolean;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveFile: () => void;
  acceptedFileTypes: string;
  uploadId: string;
  formatFileSize: (bytes: number) => string;
}

export const UploadArea: React.FC<UploadAreaProps> = ({
  selectedFile,
  isDragOver,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileInputChange,
  onRemoveFile,
  acceptedFileTypes,
  uploadId,
  formatFileSize
}) => {
  return (
    <div
      className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
        isDragOver
          ? 'border-upload-area-border bg-upload-area-hover'
          : 'border-upload-area-border bg-upload-area hover:bg-upload-area-hover'
      }`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <input
        type="file"
        accept={acceptedFileTypes}
        onChange={onFileInputChange}
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
        <FileDisplay
          selectedFile={selectedFile}
          onRemove={onRemoveFile}
          formatFileSize={formatFileSize}
        />
      )}
    </div>
  );
};