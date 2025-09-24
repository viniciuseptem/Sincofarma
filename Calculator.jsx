import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { calculateAllContributions } from '../data/contributions.js'
import { 
  Calculator as CalculatorIcon, 
  CreditCard, 
  Banknote, 
  Receipt,
  Store,
  DollarSign,
  Calendar,
  Percent,
  FileText
} from 'lucide-react'

export default function Calculator() {
  const [capitalSocial, setCapitalSocial] = useState('')
  const [numLojas, setNumLojas] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [cnpjError, setCnpjError] = useState(false)
  const [results, setResults] = useState(null)

  const handleCnpjChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 14) {
      value = value.substring(0, 14);
    }

    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');

    setCnpj(value);
    setCnpjError(value.replace(/\D/g, '').length !== 14 && value.replace(/\D/g, '').length !== 0);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const handleCalculate = () => {
    const capital = parseFloat(capitalSocial.replace(/[^\d,]/g, '').replace(',', '.'))
    const lojas = parseInt(numLojas)

    if (capital > 0 && lojas > 0 && !cnpjError && cnpj.replace(/\D/g, '').length === 14) {
      const calculations = calculateAllContributions(capital, lojas)
      setResults(calculations)
    }
  }

  const handleCapitalChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')
    value = (value / 100).toFixed(2).replace('.', ',')
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    setCapitalSocial('R$ ' + value)
  }

  const pixDiscount = results ? results.totalAnual * 0.9 : 0

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
            <CalculatorIcon className="w-5 h-5 mr-2" />
            Calculadora de Contribuições
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Calcule suas Contribuições
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informe o capital social da sua empresa e o número de lojas para descobrir 
            o valor das suas contribuições anuais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-white">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-gray-900">Dados da Empresa</CardTitle>
              <CardDescription className="text-gray-600">
                Preencha as informações abaixo para calcular suas contribuições
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cnpj" className="text-sm font-medium text-gray-700">
                  CNPJ
                </Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="cnpj"
                    type="text"
                    placeholder="00.000.000/0000-00"
                    value={cnpj}
                    onChange={handleCnpjChange}
                    className={`pl-10 h-12 text-lg ${cnpjError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'}`}
                    maxLength="18"
                  />
                  {cnpjError && <p className="text-red-500 text-xs mt-1">CNPJ deve ter 14 dígitos numéricos.</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="capital" className="text-sm font-medium text-gray-700">
                  Capital Social
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="capital"
                    type="text"
                    placeholder="R$ 0,00"
                    value={capitalSocial}
                    onChange={handleCapitalChange}
                    className="pl-10 h-12 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lojas" className="text-sm font-medium text-gray-700">
                  Número de Lojas (Matriz + Filiais)
                </Label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    id="lojas"
                    type="number"
                    placeholder="Ex: 5"
                    value={numLojas}
                    onChange={(e) => setNumLojas(e.target.value)}
                    className="pl-10 h-12 text-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    min="1"
                  />
                </div>
              </div>

              <Button 
                onClick={handleCalculate}
                className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                disabled={!capitalSocial || !numLojas || !cnpj || cnpjError}
              >
                <CalculatorIcon className="w-5 h-5 mr-2" />
                Calcular Contribuições
              </Button>
            </CardContent>
          </Card>

          {results && (
            <div className="space-y-6">
              <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800 flex items-center">
                    <Receipt className="w-6 h-6 mr-2" />
                    Contribuição Total Anual
                  </CardTitle>
                  <CardDescription>
                    Assistencial + Confederativa (dividido em 12 parcelas)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-green-600">
                      {formatCurrency(results.totalAnual)}
                    </div>
                    <div className="text-lg text-gray-600">
                      ou <span className="font-semibold text-green-600">{formatCurrency(results.totalMensal)}</span> por mês
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                      <div className="text-sm text-green-700 font-medium">Custo por loja/mês:</div>
                      <div className="text-xl font-bold text-green-800">{formatCurrency(results.custoPorLoja)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-800 flex items-center">
                    <Calendar className="w-6 h-6 mr-2" />
                    Contribuição Patronal
                  </CardTitle>
                  <CardDescription>
                    Pagamento à vista - Vencimento: 31/01/2026
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {formatCurrency(results.sindical)}
                  </div>
                  <div className="text-sm text-orange-700 bg-orange-100 p-3 rounded-lg">
                    Esta contribuição deve ser paga integralmente até 31 de janeiro de 2026
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-800">Formas de Pagamento</CardTitle>
                  <CardDescription>
                    Para a Contribuição Total Anual ({formatCurrency(results.totalAnual)})
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">Cartão de Crédito</div>
                        <div className="text-sm text-gray-600">Em até 12x sem juros</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(results.totalMensal)}/mês
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center">
                      <Banknote className="w-6 h-6 text-green-600 mr-3" />
                      <div>
                        <div className="font-semibold text-green-800">PIX à vista</div>
                        <div className="text-sm text-green-600 flex items-center">
                          <Percent className="w-4 h-4 mr-1" />
                          10% de desconto
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">
                        {formatCurrency(pixDiscount)}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        {formatCurrency(results.totalAnual)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center">
                      <Receipt className="w-6 h-6 text-gray-600 mr-3" />
                      <div>
                        <div className="font-semibold text-gray-900">Boleto à vista</div>
                        <div className="text-sm text-gray-600">Pagamento único</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(results.totalAnual)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {!results && (
            <div className="flex items-center justify-center h-96 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
              <div className="text-center">
                <CalculatorIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-xl text-gray-500">
                  Preencha os dados para ver os resultados
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

