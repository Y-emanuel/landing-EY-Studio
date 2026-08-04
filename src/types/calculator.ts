// src/types/calculator.ts

export interface CalculatorState {
  currency: 'USD' | 'ARS';
  exchangeRateARS: number;         // Ejemplo: 1200
  monthlyInquiries: number;        // Consultas/presupuestos emitidos por mes (Min: 50, Max: 2000)
  avgTreatmentValueUSD: number;   // Valor medio de tratamiento complejo (Implantes, Ortodoncia, Estética) (Min: 300, Max: 4000)
  unconvertedRate: number;         // Porcentaje estimado de presupuestos no cerrados por falta de seguimiento (0.20 = 20%)
}

export interface CalculatorOutputs {
  monthlyLossUSD: number;
  annualLossUSD: number;
  formattedMonthlyLoss: string;
  formattedAnnualLoss: string;
}

export function calculateROILoss(state: CalculatorState): CalculatorOutputs {
  const lostPatients = state.monthlyInquiries * state.unconvertedRate;
  const monthlyLossUSD = lostPatients * state.avgTreatmentValueUSD;
  const annualLossUSD = monthlyLossUSD * 12;

  const multiplier = state.currency === 'ARS' ? state.exchangeRateARS : 1;
  const symbol = state.currency === 'ARS' ? '$' : 'USD $';

  return {
    monthlyLossUSD,
    annualLossUSD,
    formattedMonthlyLoss: `${symbol}${(monthlyLossUSD * multiplier).toLocaleString('es-AR')}`,
    formattedAnnualLoss: `${symbol}${(annualLossUSD * multiplier).toLocaleString('es-AR')}`,
  };
}