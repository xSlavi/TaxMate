import React from 'react';

interface CalendarDayProps {
  day: number;
  reminders: Array<{
    title: string;
    type: string;
    description: string;
  }>;
  isToday: boolean;
}

export function CalendarDay({ day, reminders, isToday }: CalendarDayProps) {
  return (
    <div className={`min-h-[100px] p-2 border border-gray-200 ${isToday ? 'bg-blue-50' : 'bg-white'}`}>
      <div className={`text-sm font-semibold mb-1 ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
        {day}
      </div>
      <div className="space-y-1">
        {reminders.map((reminder, index) => (
          <div
            key={index}
            className={`text-xs p-1 rounded ${
              reminder.type === 'payment' ? 'bg-red-100 text-red-800' :
              reminder.type === 'declaration' ? 'bg-blue-100 text-blue-800' :
              reminder.type === 'report' ? 'bg-green-100 text-green-800' :
              'bg-gray-100 text-gray-800'
            }`}
            title={reminder.description}
          >
            {reminder.title}
          </div>
        ))}
      </div>
    </div>
  );
}