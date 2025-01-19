import React from 'react';
import { BookOpen, Clock, CheckCircle } from 'lucide-react';
import { CourseModule } from './courseData';

interface CourseCardProps {
  module: CourseModule;
  onSelect: (moduleId: number) => void;
}

export function CourseCard({ module, onSelect }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <BookOpen className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>{module.duration}</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{module.description}</p>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progreso</span>
              <span>{module.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${module.progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {module.lessons.map(lesson => (
              <div key={lesson.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  {lesson.completed ? (
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <div className="h-4 w-4 border-2 border-gray-300 rounded-full mr-2" />
                  )}
                  <span className={lesson.completed ? 'text-gray-600' : 'text-gray-500'}>
                    {lesson.title}
                  </span>
                </div>
                <span className="text-gray-400">{lesson.duration}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => onSelect(module.id)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            {module.progress === 100 ? 'Repasar' : 'Continuar'}
          </button>
        </div>
      </div>
    </div>
  );
}