import React from "react";

interface CodeNotAvailableModalProps {
  open: boolean;
  onClose: () => void;
}

const CodeNotAvailableModal: React.FC<CodeNotAvailableModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-xl font-bold mb-4">Code is not showing</h2>
        <p className="mb-6 text-muted-foreground">The code for this project is private or unavailable.</p>
        <button
          className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CodeNotAvailableModal;
