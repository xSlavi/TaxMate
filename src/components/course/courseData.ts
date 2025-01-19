export interface CourseModule {
  id: number;
  title: string;
  description: string;
  duration: string;
  lessons: CourseLessonData[];
  progress: number;
}

export interface CourseLessonData {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

export const courseModules: CourseModule[] = [
  {
    id: 1,
    title: "Fundamentos Fiscales",
    description: "Introducción a los conceptos básicos del sistema tributario mexicano.",
    duration: "2 horas",
    progress: 100,
    lessons: [
      { id: 1, title: "¿Qué son los impuestos?", duration: "20 min", completed: true },
      { id: 2, title: "Sistema Tributario Mexicano", duration: "25 min", completed: true },
      { id: 3, title: "Obligaciones Fiscales Básicas", duration: "35 min", completed: true },
      { id: 4, title: "RFC y Firma Electrónica", duration: "40 min", completed: true }
    ]
  },
  {
    id: 2,
    title: "Regímenes Fiscales",
    description: "Conoce los diferentes regímenes fiscales y sus características.",
    duration: "2.5 horas",
    progress: 75,
    lessons: [
      { id: 1, title: "Personas Físicas vs Morales", duration: "30 min", completed: true },
      { id: 2, title: "RESICO y sus Beneficios", duration: "35 min", completed: true },
      { id: 3, title: "Régimen de Actividades Empresariales", duration: "40 min", completed: true },
      { id: 4, title: "Otros Regímenes Fiscales", duration: "45 min", completed: false }
    ]
  },
  {
    id: 3,
    title: "Facturación Electrónica",
    description: "Aprende todo sobre CFDI 4.0 y facturación electrónica.",
    duration: "1.5 horas",
    progress: 33,
    lessons: [
      { id: 1, title: "Introducción a los CFDI", duration: "25 min", completed: true },
      { id: 2, title: "Requisitos del CFDI 4.0", duration: "30 min", completed: false },
      { id: 3, title: "Emisión y Cancelación", duration: "35 min", completed: false }
    ]
  }
];