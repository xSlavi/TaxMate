import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { CalendarDay } from './CalendarDay';
import { 
  getMonthReminders, 
  getDaysInMonth, 
  getFirstDayOfMonth, 
  REMINDER_TYPES,
  MONTHS,
  WEEKDAYS 
} from '../../utils/calendarData';

interface CalendarProps {
  onBack?: () => void;
}

export function Calendar({ onBack }: CalendarProps) {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
  const reminders = getMonthReminders(currentMonth);

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Recordatorios Fiscales - {MONTHS[currentMonth]} {currentYear}
        </h1>

        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Tipos de Recordatorios:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(REMINDER_TYPES).map(([type, { label, color }]) => (
              <div key={type} className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded ${color.split(' ')[0]}`}></div>
                <span className="text-sm text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {WEEKDAYS.map(day => (
              <div key={day} className="text-center font-semibold text-gray-600">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {blanks.map(blank => (
              <div key={`blank-${blank}`} className="min-h-[100px] bg-gray-50"></div>
            ))}
            {days.map(day => (
              <CalendarDay
                key={day}
                day={day}
                reminders={reminders.filter(r => r.date === day)}
                isToday={day === currentDay}
              />
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