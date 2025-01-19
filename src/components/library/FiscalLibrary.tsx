import React, { useState } from 'react';
import { ArrowLeft, Home, BookOpen } from 'lucide-react';
import { PricingModal } from '../pricing/PricingModal';
import { fiscalBooks } from './fiscalBooksData';

interface FiscalLibraryProps {
  onBack?: () => void;
}

export function FiscalLibrary({ onBack }: FiscalLibraryProps) {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Biblioteca Fiscal
        </h1>

        <div className="grid gap-6 mb-8">
          {fiscalBooks.map((book, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-4">{book.description}</p>
                  <button
                    onClick={() => setShowPricing(true)}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Click aquí para leer →
                  </button>
                </div>
              </div>
            </div>
          ))}
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