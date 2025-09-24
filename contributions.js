// Dados das tabelas de contribuição extraídos dos PDFs

export const assistencialTable = [
  { min: 1, max: 3, value: 425.00 },
  { min: 4, max: 6, value: 1365.00 },
  { min: 7, max: 10, value: 2730.00 },
  { min: 11, max: 20, value: 5460.00 },
  { min: 21, max: 50, value: 6825.00 },
  { min: 51, max: 150, value: 13650.00 },
  { min: 151, max: 300, value: 27300.00 },
  { min: 301, max: 400, value: 41265.00 },
  { min: 401, max: 500, value: 61425.00 },
  { min: 501, max: 700, value: 70875.00 },
  { min: 701, max: 1000, value: 114607.00 },
  { min: 1001, max: 1500, value: 127000.00 }
];

export const confederativaTable = [
  { min: 1, max: 3, value: 405.00 },
  { min: 4, max: 6, value: 1300.00 },
  { min: 7, max: 10, value: 2600.00 },
  { min: 11, max: 20, value: 5200.00 },
  { min: 21, max: 50, value: 6500.00 },
  { min: 51, max: 150, value: 13000.00 },
  { min: 151, max: 300, value: 26000.00 },
  { min: 301, max: 400, value: 39300.00 },
  { min: 401, max: 500, value: 58500.00 },
  { min: 501, max: 700, value: 67500.00 },
  { min: 701, max: 1000, value: 109150.00 },
  { min: 1001, max: 1500, value: 121000.00 }
];

export const sindicalTable = [
  { min: 0.01, max: 40278.75, aliquota: 0, adicionar: 322.23, tipo: 'minima' },
  { min: 40278.76, max: 80557.50, aliquota: 0.008, adicionar: 0 },
  { min: 80557.51, max: 805575.00, aliquota: 0.002, adicionar: 483.34 },
  { min: 805575.01, max: 80557500.00, aliquota: 0.001, adicionar: 1288.92 },
  { min: 80557500.01, max: 429640000.00, aliquota: 0.0002, adicionar: 65734.92 },
  { min: 429640000.01, max: Infinity, aliquota: 0, adicionar: 151662.92, tipo: 'maxima' }
];

// Função para calcular contribuição assistencial baseada no número de lojas
export function calculateAssistencial(numLojas) {
  const faixa = assistencialTable.find(f => numLojas >= f.min && numLojas <= f.max);
  return faixa ? faixa.value : 0;
}

// Função para calcular contribuição confederativa baseada no número de lojas
export function calculateConfederativa(numLojas) {
  const faixa = confederativaTable.find(f => numLojas >= f.min && numLojas <= f.max);
  return faixa ? faixa.value : 0;
}

// Função para calcular contribuição sindical (patronal) baseada no capital social
export function calculateSindical(capitalSocial) {
  const faixa = sindicalTable.find(f => capitalSocial >= f.min && capitalSocial <= f.max);
  if (!faixa) return 0;
  
  if (faixa.tipo === 'minima') {
    return faixa.adicionar;
  } else if (faixa.tipo === 'maxima') {
    return faixa.adicionar;
  } else {
    return (capitalSocial * faixa.aliquota) + faixa.adicionar;
  }
}

// Função principal para calcular todas as contribuições
export function calculateAllContributions(capitalSocial, numLojas) {
  const assistencial = calculateAssistencial(numLojas);
  const confederativa = calculateConfederativa(numLojas);
  const sindical = calculateSindical(capitalSocial);
  
  const totalAnual = assistencial + confederativa;
  const totalMensal = totalAnual / 12;
  const custoPorLoja = totalMensal / numLojas;
  
  return {
    assistencial,
    confederativa,
    sindical,
    totalAnual,
    totalMensal,
    custoPorLoja
  };
}
