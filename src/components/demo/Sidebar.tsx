import React from 'react';
import { 
  Calculator, 
  Calendar, 
  BookOpen, 
  MessageSquare, 
  FileText, 
  History,
  Mail,
  Headphones,
  Video,
  Book,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  onMenuClick: (label: string) => void;
}

const menuItems = [
  { icon: MessageSquare, label: 'Consultas Fiscales' },
  { icon: Calculator, label: 'Calculadora de Impuestos' },
  { icon: Calendar, label: 'Recordatorios' },
  { icon: BookOpen, label: 'Biblioteca Fiscal' },
  { icon: FileText, label: 'Plantillas Básicas' },
  { icon: History, label: 'Historial' },
  { icon: Mail, label: 'Notificaciones' },
  { icon: Headphones, label: 'Soporte' },
  { icon: Video, label: 'Webinars' },
  { icon: Book, label: 'Glosario' },
  { icon: GraduationCap, label: 'Curso Básico' }
];

export function Sidebar({ onMenuClick }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button 
                onClick={() => onMenuClick(item.label)}
                className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => window.location.reload()}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <span>Cerrar Demo</span>
        </button>
      </div>
    </aside>
  );
}