import React from 'react';
import { Bell, Info, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { Notification } from './notificationsData';

const typeIcons = {
  warning: AlertTriangle,
  info: Info,
  success: CheckCircle,
  update: RefreshCw
};

const typeStyles = {
  warning: 'bg-yellow-50 border-yellow-200',
  info: 'bg-blue-50 border-blue-200',
  success: 'bg-green-50 border-green-200',
  update: 'bg-purple-50 border-purple-200'
};

interface NotificationCardProps {
  notification: Notification;
}

export function NotificationCard({ notification }: NotificationCardProps) {
  const Icon = typeIcons[notification.type];
  const style = typeStyles[notification.type];

  return (
    <div className={`p-4 rounded-lg border ${style} ${!notification.read ? 'ring-2 ring-blue-400' : ''}`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${notification.type === 'warning' ? 'text-yellow-600' : 
            notification.type === 'info' ? 'text-blue-600' :
            notification.type === 'success' ? 'text-green-600' : 'text-purple-600'}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">{notification.title}</h3>
            <span className="text-xs text-gray-500">{new Date(notification.date).toLocaleDateString()}</span>
          </div>
          <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
        </div>
      </div>
    </div>
  );
}