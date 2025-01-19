import React, { useState } from 'react';
import { ArrowLeft, Home, GraduationCap } from 'lucide-react';
import { CourseCard } from './CourseCard';
import { courseModules } from './courseData';

interface BasicCourseProps {
  onBack?: () => void;
}

export function BasicCourse({ onBack }: BasicCourseProps) {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const handleModuleSelect = (moduleId: number) => {
    setSelectedModule(moduleId);
    // Aquí se implementaría la lógica para mostrar el contenido del módulo
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Curso Básico de Impuestos
          </h1>
          <p className="text-gray-600">
            Domina los fundamentos de los impuestos en México con nuestro curso introductorio.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {courseModules.map(module => (
            <CourseCard
              key={module.id}
              module={module}
              onSelect={handleModuleSelect}
            />
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
    </div>
  );
}