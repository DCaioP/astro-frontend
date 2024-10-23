import React, { useState } from 'react';
import DayModal from './DayModal';
import { getDaysInMonth } from 'date-fns';

interface DayData {
  date: Date;
  filled: boolean;
}

const MonthlyCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dayData, setDayData] = useState<DayData[]>([]);

  const today = new Date();
  const daysInMonth = getDaysInMonth(today);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
  };

  const closeModal = () => {
    setSelectedDate(null);
  };

  return (
    <div>
      <h2>Calendário Mensal</h2>
      <div className="calendar-grid">
        {[...Array(daysInMonth)].map((_, index) => {
          const date = new Date(today.getFullYear(), today.getMonth(), index + 1);
          const isFilled = dayData.some((d) => d.date.toDateString() === date.toDateString() && d.filled);

          return (
            <div key={index} className="calendar-day" onClick={() => handleDayClick(date)}>
              {index + 1}
              {isFilled && <span className="filled-icon">✔️</span>}
            </div>
          );
        })}
      </div>
      {selectedDate && (
        <DayModal date={selectedDate} onClose={closeModal} dayData={dayData} setDayData={setDayData} />
      )}
    </div>
  );
};

export default MonthlyCalendar;
