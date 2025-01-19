export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'warning' | 'info' | 'success' | 'update';
  date: string;
  read: boolean;
}

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'Declaración mensual presentada',
    message: 'Tu declaración de Diciembre 2024 ha sido presentada exitosamente. Conserva tu acuse.',
    type: 'success',
    date: '2025-01-05',
    read: false
  },
  {
    id: '2',
    title: 'Recordatorio de pago IMSS',
    message: 'El pago de cuotas IMSS de Diciembre debe realizarse antes del día 17.',
    type: 'warning',
    date: '2024-12-28',
    read: false
  },
  {
    id: '3',
    title: 'Cierre fiscal 2024',
    message: 'Prepara tu documentación para el cierre fiscal 2024. Revisa nuestra guía actualizada.',
    type: 'info',
    date: '2024-12-20',
    read: true
  },
  {
    id: '4',
    title: 'Actualización de tasas fiscales',
    message: 'Se han actualizado las tasas y tarifas fiscales para el ejercicio 2025.',
    type: 'update',
    date: '2024-12-15',
    read: true
  },
  {
    id: '5',
    title: 'Declaración provisional ISR',
    message: 'Tu declaración provisional de ISR de Diciembre ha sido procesada correctamente.',
    type: 'success',
    date: '2024-12-10',
    read: true
  }
];