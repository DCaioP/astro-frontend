import React from 'react';

interface CopyShiftButtonProps {
  onCopy: () => void;
}

const CopyShiftButton: React.FC<CopyShiftButtonProps> = ({ onCopy }) => {
  return <button onClick={onCopy}>Copiar Turno</button>;
};

export default CopyShiftButton;
