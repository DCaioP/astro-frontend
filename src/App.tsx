import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import Filters from './Filters';
import MonthlyCalendar from './componets/MonthlyCalendar';
import MonthlySummary from './componets/MonthlySummary';

interface DataPoint {
  data_conclusao: string;
  ho_diaria_realizada: number;
  ho_acumulada: number;
  ho_meta_diaria: number;
  ho_meta_acumulada: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [month, setMonth] = useState<string>('6'); // Padrão para junho
  const [machine, setMachine] = useState<string>('Nilpeter');
  const [shift, setShift] = useState<string>('1 Turno');

  const fetchData = () => {
    axios
      .get<DataPoint[]>('http://localhost:5000/data', {
        params: {
          month,
          machine,
          shift,
        },
      })
      .then((response) => {
        // Formatar a data para um formato legível
        const formattedData = response.data.map((item) => ({
          ...item,
          data_conclusao: new Date(item.data_conclusao).toLocaleDateString('pt-BR'),
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [month, machine, shift]);

  const handleFilterChange = (filters: { month: string; machine: string; shift: string }) => {
    setMonth(filters.month);
    setMachine(filters.machine);
    setShift(filters.shift);
  };

  return (
    <div>
      <h1>Gráfico de Hora Ouro</h1>
      <Filters month={month} machine={machine} shift={shift} onFilterChange={handleFilterChange} />
      <LineChart width={1000} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data_conclusao"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="ho_diaria_realizada"
          stroke="#8884d8"
          name="HO Diária Realizada"
        />
        <Line
          type="monotone"
          dataKey="ho_acumulada"
          stroke="#82ca9d"
          name="HO Acumulada"
        />
        <Line
          type="monotone"
          dataKey="ho_meta_diaria"
          stroke="#ff7300"
          name="HO Meta Diária"
          strokeDasharray="5 5"
        />
        <Line
          type="monotone"
          dataKey="ho_meta_acumulada"
          stroke="#387908"
          name="HO Meta Acumulada"
          strokeDasharray="3 4 5 2"
        />
      </LineChart>
      <MonthlySummary dayData/>
      <MonthlyCalendar />
    </div>
  );
};

export default App;

