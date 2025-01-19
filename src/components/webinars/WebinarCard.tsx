import React from 'react';
import { Video, Clock, Calendar, CheckCircle, User } from 'lucide-react';
import { Webinar } from './webinarsData';

interface WebinarCardProps {
  webinar: Webinar;
}

export function WebinarCard({ webinar }: WebinarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <Video className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{webinar.title}</h3>
            {webinar.attended ? (
              <span className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-1" />
                <span className="text-sm">Asistido</span>
              </span>
            ) : (
              <span className="text-sm text-blue-600 font-medium">Próximamente</span>
            )}
          </div>
          <p className="text-gray-600 mb-4">{webinar.description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{webinar.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{webinar.duration}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{webinar.instructor}</span>
            </div>
          </div>
          {!webinar.attended && (
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Reservar Lugar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}