interface Reminder {
  date: number;
  title: string;
  type: 'payment' | 'declaration' | 'report' | 'other';
  description: string;
}

export const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export const WEEKDAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export const REMINDER_TYPES = {
  payment: { label: 'Pagos', color: 'bg-red-100 text-red-800' },
  declaration: { label: 'Declaraciones', color: 'bg-blue-100 text-blue-800' },
  report: { label: 'Reportes', color: 'bg-green-100 text-green-800' },
  other: { label: 'Otros', color: 'bg-gray-100 text-gray-800' }
};

export function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(month: number, year: number): number {
  return new Date(year, month, 1).getDay();
}

export function getMonthReminders(month: number): Reminder[] {
  const reminders: Record<number, Reminder[]> = {
    0: [ // Enero
      { date: 7, title: 'Pago IMSS', type: 'payment', description: 'Pago de cuotas obrero-patronales' },
      { date: 17, title: 'Declaración IVA', type: 'declaration', description: 'Presentar declaración mensual de IVA' },
      { date: 20, title: 'Nómina Digital', type: 'report', description: 'Timbrado de nómina quincenal' },
      { date: 25, title: 'Pago ISR', type: 'payment', description: 'Pago provisional de ISR' },
      { date: 31, title: 'DIOT', type: 'report', description: 'Presentar DIOT del mes anterior' }
    ],
    1: [ // Febrero
      { date: 7, title: 'Pago IMSS', type: 'payment', description: 'Pago de cuotas obrero-patronales' },
      { date: 15, title: 'Nómina Digital', type: 'report', description: 'Timbrado de nómina quincenal' },
      { date: 17, title: 'Declaración IVA', type: 'declaration', description: 'Presentar declaración mensual de IVA' },
      { date: 25, title: 'Pago ISR', type: 'payment', description: 'Pago provisional de ISR' },
      { date: 28, title: 'Declaración Informativa', type: 'declaration', description: 'Presentar declaraciones informativas múltiples' }
    ]
  };

  return reminders[month] || [];
}