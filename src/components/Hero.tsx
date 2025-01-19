import React, { useState } from 'react';
import { Bot, Clock, Shield } from 'lucide-react';
import { PricingModal } from './pricing/PricingModal';
import { DemoInterface } from './demo/DemoInterface';

export function Hero() {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  if (isDemoOpen) {
    return <DemoInterface />;
  }

  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tu Asesor Fiscal Virtual
              <span className="text-blue-600"> Disponible 24/7</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              TaxMate revoluciona la asesoría fiscal con inteligencia artificial, 
              brindando respuestas claras y precisas en un lenguaje que todos pueden entender.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setIsPricingOpen(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Planes TaxMate
              </button>
              <button 
                onClick={() => setIsDemoOpen(true)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
              >
                Ver Demo
              </button>
            </div>
            {/* Rest of the component remains the same */}
          </div>
        </div>
      </div>

      <PricingModal 
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
      />
    </>
  );
}