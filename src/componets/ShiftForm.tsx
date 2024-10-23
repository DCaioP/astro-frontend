import React, { useState } from 'react';
import { validateTimes } from './Validation';

interface ShiftFormProps {
  date: Date;
  dayData: any;
  setDayData: any;
}

const ShiftForm: React.FC<ShiftFormProps> = ({ date, dayData, setDayData }) => {
  const [shift, setShift] = useState('');
  const [machine, setMachine] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [exitTime, setExitTime] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = () => {
    const validationError = validateTimes(entryTime, exitTime);
    if (validationError) {
      setErrors(validationError);
    } else {
      setErrors('');
      // Salvar os dados do turno
      setDayData([...dayData, { date, shift, machine, entryTime, exitTime, filled: true }]);
    }
  };

  return (
    <div>
      <label>
        Turno:
        <select value={shift} onChange={(e) => setShift(e.target.value)}>
          <option value="">Selecione</option>
          <option value="1º">1º Turno</option>
          <option value="2º">2º Turno</option>
          <option value="3º">3º Turno</option>
        </select>
      </label>
      <label>
        Máquina:
        <select value={machine} onChange={(e) => setMachine(e.target.value)}>
          <option value="">Selecione</option>
          <option value="GALLUS">GALLUS</option>
          {/* Outras máquinas */}
        </select>
      </label>
      <label>
        Horário de Entrada:
        <input
          type="time"
          value={entryTime}
          onChange={(e) => setEntryTime(e.target.value)}
          placeholder="hh:mm"
        />
      </label>
      <label>
        Horário de Saída:
        <input
          type="time"
          value={exitTime}
          onChange={(e) => setExitTime(e.target.value)}
          placeholder="hh:mm"
        />
      </label>
      {errors && <div className="error">{errors}</div>}
      <button onClick={handleSubmit}>Salvar</button>
    </div>
  );
};

export default ShiftForm;
