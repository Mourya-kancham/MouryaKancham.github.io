
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CVDisplay from './CVDisplay';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

const CVModal = ({ isOpen, onClose, onDownload }: CVModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Mourya Kancham - CV</DialogTitle>
        </DialogHeader>
        <CVDisplay onDownload={onDownload} />
      </DialogContent>
    </Dialog>
  );
};

export default CVModal;
