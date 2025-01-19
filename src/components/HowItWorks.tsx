import React from 'react';
import { MessageSquare, Search, FileCheck } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
      title: "Haz tu Consulta",
      description: "Escribe tu pregunta en lenguaje natural, como si hablaras con un asesor."
    },
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "Obtén Respuestas",
      description: "TaxMate analiza tu consulta y proporciona respuestas precisas y actualizadas."
    },
    {
      icon: <FileCheck className="h-12 w-12 text-blue-600" />,
      title: "Resuelve tus Dudas",
      description: "Recibe orientación clara y acciones específicas para tu situación."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona TaxMate?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Usar TaxMate es tan simple como conversar con un asesor fiscal, 
            pero con la ventaja de estar disponible en cualquier momento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}