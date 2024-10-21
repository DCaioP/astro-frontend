import React from 'react';

interface FiltersProps {
  month: string;
  machine: string;
  shift: string;
  onFilterChange: (filters: { month: string; machine: string; shift: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ month, machine, shift, onFilterChange }) => {
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ month: e.target.value, machine, shift });
  };

  const handleMachineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ month, machine: e.target.value, shift });
  };

  const handleShiftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ month, machine, shift: e.target.value });
  };

  return (
    <div>
      <label>
        Mês:
        <select value={month} onChange={handleMonthChange}>
          <option value="">Todos</option>
          <option value="6">Junho</option>
          {/* Adicione outros meses conforme necessário */}
        </select>
      </label>
      <label>
        Máquina:
        <input type="text" value={machine} onChange={handleMachineChange} placeholder="Nome da Máquina" />
      </label>
      <label>
        Turno:
        <input type="text" value={shift} onChange={handleShiftChange} placeholder="Turno" />
      </label>
    </div>
  );
};

export default Filters;

