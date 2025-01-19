import React from 'react';
import { Calculator, ArrowLeft, Home } from 'lucide-react';
import { PricingModal } from '../pricing/PricingModal';

interface CalculatorOption {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CalculatorMenuProps {
  onBack?: () => void;
}

export function CalculatorMenu({ onBack }: CalculatorMenuProps) {
  const [showPricing, setShowPricing] = React.useState(false);

  const calculators: CalculatorOption[] = [
    {
      title: "Calculadora de IVA",
      description: "Calcula el Impuesto al Valor Agregado para tus operaciones. Perfecta para determinar el IVA a pagar o acreditar en tus actividades empresariales.",
      icon: <Calculator className="h-6 w-6 text-orange-600" />
    },
    {
      title: "Calculadora de ISR",
      description: "Calcula tu Impuesto Sobre la Renta de manera sencilla. Ideal para personas físicas y morales que necesitan determinar su impuesto anual o mensual.",
      icon: <Calculator className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Calculadora de Retención de ISR e IVA",
      description: "Determina el monto correcto de retenciones para tus pagos a terceros. Especialmente útil para personas morales y físicas que realizan pagos por honorarios o arrendamiento.",
      icon: <Calculator className="h-6 w-6 text-green-600" />
    },
    {
      title: "Calculadora de Deducciones Fiscales",
      description: "Optimiza tus declaraciones identificando y calculando todas las deducciones aplicables a tu situación fiscal particular.",
      icon: <Calculator className="h-6 w-6 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Calculadoras Fiscales
        </h1>
        
        <div className="grid gap-6 mb-8">
          {calculators.map((calc, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {calc.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{calc.title}</h3>
                  <p className="text-gray-600 mb-4">{calc.description}</p>
                  <button
                    onClick={() => setShowPricing(true)}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Click aquí →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={onBack}
            className="flex items-center px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Volver</span>
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            <span>Volver al Demo</span>
          </button>
        </div>
      </div>

      <PricingModal
        isOpen={showPricing}
        onClose={() => setShowPricing(false)}
      />
    </div>
  );
}