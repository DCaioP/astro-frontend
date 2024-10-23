export const validateTimes = (entryTime: string, exitTime: string): string | null => {
  if (!entryTime || !exitTime) {
    return 'Os horários de entrada e saída são obrigatórios.';
  }
  if (exitTime <= entryTime) {
    return 'O horário de saída deve ser após o horário de entrada.';
  }
  return null;
};
