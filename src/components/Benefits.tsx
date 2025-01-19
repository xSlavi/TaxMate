import React from 'react';
import { CheckCircle } from 'lucide-react';

export function Benefits() {
  const benefits = [
    "Ahorra tiempo y dinero en consultas fiscales",
    "Evita errores costosos en tus declaraciones",
    "Accede a información actualizada al instante",
    "Obtén respuestas claras sin jerga técnica",
    "Planifica mejor tus obligaciones fiscales",
    "Reduce el estrés relacionado con impuestos"
  ];

  return (
    <section id="benefits" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Beneficios de Usar TaxMate
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
              alt="Persona trabajando con TaxMate"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}