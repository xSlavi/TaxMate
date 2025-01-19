import React from 'react';
import { BookOpen } from 'lucide-react';
import { GlossaryTerm } from './GlossaryData';

interface GlossaryCardProps {
  term: GlossaryTerm;
}

export function GlossaryCard({ term }: GlossaryCardProps) {
  const categoryColors = {
    general: 'bg-blue-50 text-blue-700',
    impuestos: 'bg-green-50 text-green-700',
    contabilidad: 'bg-purple-50 text-purple-700',
    legal: 'bg-orange-50 text-orange-700'
  };

  const categoryLabels = {
    general: 'General',
    impuestos: 'Impuestos',
    contabilidad: 'Contabilidad',
    legal: 'Legal'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-gray-50 rounded-lg">
          <BookOpen className="h-6 w-6 text-gray-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{term.term}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[term.category]}`}>
              {categoryLabels[term.category]}
            </span>
          </div>
          <p className="text-gray-600">{term.definition}</p>
        </div>
      </div>
    </div>
  );
}