import React from 'react';
import { Calculator, FileText, MessageSquare, Briefcase, PieChart, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Calculator className="h-6 w-6 text-blue-600" />,
      title: "Cálculos Precisos",
      description: "Obtén cálculos fiscales exactos y actualizados según la legislación vigente."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Documentación Clara",
      description: "Genera informes y documentación fiscal en formato simple y comprensible."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Consultas Ilimitadas",
      description: "Realiza todas las preguntas que necesites sin costo adicional."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      title: "Casos Específicos",
      description: "Obtén asesoría personalizada para tu situación particular."
    },
    {
      icon: <PieChart className="h-6 w-6 text-blue-600" />,
      title: "Análisis Detallado",
      description: "Recibe análisis completos de tu situación fiscal con recomendaciones."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Actualizaciones Automáticas",
      description: "Mantente al día con los cambios en la legislación fiscal."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Todo lo que Necesitas para tu Gestión Fiscal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TaxMate combina la potencia de la IA con conocimiento fiscal experto 
            para ofrecerte un servicio completo y confiable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}