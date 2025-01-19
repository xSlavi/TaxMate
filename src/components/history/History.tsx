import React, { useState } from 'react';
import { ArrowLeft, Home, History as HistoryIcon, TrendingDown, Percent } from 'lucide-react';
import { PricingModal } from '../pricing/PricingModal';
import { taxHistory } from './historyData';

interface HistoryProps {
  onBack?: () => void;
}

export function History({ onBack }: HistoryProps) {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Historial Fiscal
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Último Periodo</h2>
            <span className="text-sm text-gray-500">Enero 2024</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-600 font-medium">Impuesto Pagado</span>
                <HistoryIcon className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">$24,850 MXN</p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-600 font-medium">Ahorro con TaxMate</span>
                <TrendingDown className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">$3,728 MXN</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-600 font-medium">Optimización</span>
                <Percent className="h-5 w-5 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">15%</p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 mb-8">
            <p className="text-yellow-800">
              <span className="font-semibold">¡Felicitaciones!</span> Con TaxMate has optimizado tus declaraciones y ahorrado un 15% en tu último periodo fiscal. 
              ¿Te gustaría saber cómo ahorrar aún más? 
              <button
                onClick={() => setShowPricing(true)}
                className="text-blue-600 font-semibold hover:text-blue-700 ml-2"
              >
                Descubre nuestro plan Premium →
              </button>
            </p>
          </div>

          <div className="space-y-4">
            {taxHistory.map((entry, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{entry.period}</h3>
                    <p className="text-sm text-gray-600">{entry.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${entry.amount} MXN</p>
                    <p className="text-sm text-green-600">Ahorro: ${entry.savings} MXN</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
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