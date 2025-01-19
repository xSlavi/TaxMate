import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { WebinarCard } from './WebinarCard';
import { webinars } from './webinarsData';

interface WebinarsProps {
  onBack?: () => void;
}

export function Webinars({ onBack }: WebinarsProps) {
  const upcomingWebinars = webinars.filter(w => !w.attended);
  const pastWebinars = webinars.filter(w => w.attended);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Webinars Fiscales
        </h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Próximos Webinars ({upcomingWebinars.length})
          </h2>
          <div className="grid gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <WebinarCard key={index} webinar={webinar} />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Webinars Anteriores ({pastWebinars.length})
          </h2>
          <div className="grid gap-6">
            {pastWebinars.map((webinar, index) => (
              <WebinarCard key={index} webinar={webinar} />
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
    </div>
  );
}