interface PricingPlan {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Plan Básico",
    price: "200",
    features: [
      "Consultas fiscales ilimitadas",
      "Calculadora de impuestos básica",
      "Recordatorios de fechas importantes",
      "Acceso a biblioteca fiscal básica",
      "Chat con IA 8/5",
      "Respuestas en menos de 24 horas",
      "Exportación de reportes básicos",
      "1 RFC registrado",
      "¡NUEVO! Guías paso a paso",
      "Plantillas básicas de documentos fiscales",
      "Calculadora de retenciones",
      "Historial de consultas",
      "Notificaciones por email",
      "Soporte por chat",
      "Acceso a webinars mensuales",
      "Glosario fiscal interactivo",
      "¡GRATIS! Curso básico de impuestos",
      "Descuentos en cursos adicionales"
    ]
  },
  {
    name: "Plan Premium",
    price: "300",
    popular: true,
    features: [
      "Todo lo del Plan Básico",
      "Chat con IA 24/7",
      "Respuestas en menos de 2 horas",
      "Análisis predictivo de obligaciones",
      "Alertas personalizadas",
      "Exportación de reportes avanzados",
      "3 RFCs registrados",
      "Simulador de escenarios fiscales",
      "Integración con contabilidad electrónica",
      "¡NUEVO! Asistente de deducciones",
      "¡NUEVO! Análisis de riesgo fiscal",
      "Comparativo de ejercicios fiscales",
      "Plantillas premium personalizables",
      "Agenda fiscal automatizada",
      "Recordatorios personalizados",
      "Acceso prioritario a webinars",
      "¡GRATIS! 3 cursos especializados",
      "Descuento en asesorías personalizadas",
      "Módulo de facturación electrónica",
      "Dashboard personalizado",
      "Reportes comparativos mensuales",
      "Calculadora de beneficios fiscales",
      "¡EXCLUSIVO! Comunidad Premium"
    ]
  },
  {
    name: "Plan Diamante",
    price: "500",
    features: [
      "Todo lo del Plan Premium",
      "Prioridad en respuestas (< 30 min)",
      "RFCs ilimitados",
      "Asesoría fiscal personalizada",
      "Análisis de optimización fiscal",
      "Reportes ejecutivos mensuales",
      "Dashboard personalizado",
      "Integración con SAT",
      "¡EXCLUSIVO! Predicción de auditorías",
      "¡NUEVO! Planificación fiscal estratégica",
      "Soporte prioritario 24/7",
      "Respaldo de documentos en la nube",
      "¡NUEVO! Asistente de planeación patrimonial",
      "Análisis sectorial comparativo",
      "Módulo de precios de transferencia",
      "Gestión de múltiples empresas",
      "Alertas de cambios legislativos",
      "Simulador de fusiones y adquisiciones",
      "¡EXCLUSIVO! Asesor fiscal dedicado",
      "Reportes personalizados ilimitados",
      "API para integraciones empresariales",
      "Acceso anticipado a nuevas funciones",
      "Webinars privados mensuales",
      "¡GRATIS! Todos los cursos disponibles",
      "Herramienta de auditoría preventiva",
      "Gestión de controversias fiscales",
      "Análisis de beneficios internacionales",
      "Módulo de comercio exterior"
    ]
  }
];