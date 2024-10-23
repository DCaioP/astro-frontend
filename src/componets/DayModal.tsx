import React from 'react';
import ShiftForm from './ShiftForm';

interface DayModalProps {
  date: Date;
  onClose: () => void;
  dayData: any;
  setDayData: any;
}

const DayModal: React.FC<DayModalProps> = ({ date, onClose, dayData, setDayData }) => {
  return (
    <div className="modal">
      <h3>Turnos para {date.toLocaleDateString()}</h3>
      <ShiftForm date={date} dayData={dayData} setDayData={setDayData} />
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default DayModal;
