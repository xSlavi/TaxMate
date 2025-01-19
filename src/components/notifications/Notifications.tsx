import React, { useState } from 'react';
import { ArrowLeft, Home, Bell } from 'lucide-react';
import { NotificationCard } from './NotificationCard';
import { notifications } from './notificationsData';

interface NotificationsProps {
  onBack?: () => void;
}

export function Notifications({ onBack }: NotificationsProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Notificaciones</h1>
          {unreadCount > 0 && (
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {unreadCount} sin leer
            </span>
          )}
        </div>

        <div className="space-y-4 mb-8">
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
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