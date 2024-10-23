import React from 'react';

interface MonthlySummaryProps {
  dayData: any;
}

const MonthlySummary: React.FC<MonthlySummaryProps> = ({ dayData }) => {
  // Lógica para calcular as horas totais
  return (
    <div>
      <h3>Resumo Mensal</h3>
      {/* Exibir resumo das horas */}
    </div>
  );
};

export default MonthlySummary;

