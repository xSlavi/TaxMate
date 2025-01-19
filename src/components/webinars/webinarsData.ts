export interface Webinar {
  title: string;
  description: string;
  date: string;
  duration: string;
  instructor: string;
  attended: boolean;
}

export const webinars: Webinar[] = [
  // Próximos webinars
  {
    title: "Cambios Fiscales 2025",
    description: "Análisis detallado de las reformas fiscales y su impacto en contribuyentes.",
    date: "15 de Enero, 2025",
    duration: "2 horas",
    instructor: "Dr. Carlos Méndez",
    attended: false
  },
  {
    title: "Optimización Fiscal para PyMEs",
    description: "Estrategias efectivas para reducir la carga fiscal de tu negocio legalmente.",
    date: "22 de Enero, 2025",
    duration: "1.5 horas",
    instructor: "Mtra. Ana Ramírez",
    attended: false
  },
  {
    title: "Facturación Electrónica 4.0",
    description: "Nuevos requisitos y mejores prácticas en la emisión de CFDI.",
    date: "29 de Enero, 2025",
    duration: "2 horas",
    instructor: "Ing. Roberto Sánchez",
    attended: false
  },
  {
    title: "Declaración Anual 2024",
    description: "Guía paso a paso para presentar tu declaración anual sin complicaciones.",
    date: "5 de Febrero, 2025",
    duration: "2.5 horas",
    instructor: "CP. Laura Torres",
    attended: false
  },
  {
    title: "Precios de Transferencia",
    description: "Actualización en materia de precios de transferencia y operaciones con partes relacionadas.",
    date: "12 de Febrero, 2025",
    duration: "2 horas",
    instructor: "Dr. Miguel Ángel Pérez",
    attended: false
  },

  // Webinars pasados (asistidos)
  {
    title: "RESICO: Beneficios y Obligaciones",
    description: "Todo sobre el Régimen Simplificado de Confianza y cómo aprovecharlo.",
    date: "5 de Diciembre, 2024",
    duration: "2 horas",
    instructor: "CP. María González",
    attended: true
  },
  {
    title: "Deducciones Personales",
    description: "Maximiza tus deducciones personales para la declaración anual.",
    date: "12 de Diciembre, 2024",
    duration: "1.5 horas",
    instructor: "CP. Juan Martínez",
    attended: true
  },
  {
    title: "Cierre Fiscal 2024",
    description: "Preparación y mejores prácticas para el cierre del ejercicio fiscal.",
    date: "15 de Diciembre, 2024",
    duration: "2 horas",
    instructor: "Dra. Patricia López",
    attended: true
  },
  {
    title: "Estímulos Fiscales 2024",
    description: "Conoce y aprovecha los estímulos fiscales vigentes.",
    date: "18 de Diciembre, 2024",
    duration: "1.5 horas",
    instructor: "CP. Ricardo Vargas",
    attended: true
  },
  {
    title: "Contabilidad Electrónica",
    description: "Requisitos y procedimientos para la contabilidad electrónica.",
    date: "20 de Diciembre, 2024",
    duration: "2 horas",
    instructor: "Ing. Diana Ruiz",
    attended: true
  },
  {
    title: "Auditorías Electrónicas",
    description: "Cómo prepararte y responder ante una revisión electrónica del SAT.",
    date: "22 de Diciembre, 2024",
    duration: "2 horas",
    instructor: "CP. Fernando Silva",
    attended: true
  },
  {
    title: "Régimen de Incorporación Fiscal",
    description: "Última actualización sobre el RIF y su transición al RESICO.",
    date: "26 de Diciembre, 2024",
    duration: "1.5 horas",
    instructor: "Mtra. Sofía Hernández",
    attended: true
  },
  {
    title: "Planeación Fiscal 2025",
    description: "Estrategias y consideraciones para la planeación fiscal del próximo año.",
    date: "28 de Diciembre, 2024",
    duration: "2 horas",
    instructor: "Dr. Alberto Campos",
    attended: true
  },
  {
    title: "Obligaciones en Comercio Digital",
    description: "Aspectos fiscales del comercio electrónico y economía digital.",
    date: "30 de Diciembre, 2024",
    duration: "2 horas",
    instructor: "Mtro. Luis Ramírez",
    attended: true
  },
  {
    title: "Actualización en IVA",
    description: "Novedades en el Impuesto al Valor Agregado y su aplicación práctica.",
    date: "3 de Enero, 2025",
    duration: "1.5 horas",
    instructor: "CP. Carmen Ortiz",
    attended: true
  }
];