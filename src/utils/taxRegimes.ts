// Regímenes fiscales para personas físicas y morales
export const taxRegimes = {
  personaFisica: [
    {
      name: "Régimen Simplificado de Confianza (RESICO)",
      description: "Para personas físicas con ingresos hasta 3.5 millones de pesos anuales.",
      requirements: ["Ingresos anuales máximos de 3.5 millones", "Actividades empresariales, profesionales o arrendamiento"]
    },
    {
      name: "Actividades Empresariales y Profesionales",
      description: "Para personas que realizan actividades comerciales, industriales o profesionales.",
      requirements: ["Llevar contabilidad", "Emitir facturas", "Presentar declaraciones mensuales"]
    },
    {
      name: "Arrendamiento",
      description: "Para personas que obtienen ingresos por renta de bienes inmuebles.",
      requirements: ["Emitir facturas por rentas", "Presentar declaraciones mensuales", "Llevar contabilidad simplificada"]
    },
    {
      name: "Sueldos y Salarios",
      description: "Para personas que perciben salarios y prestaciones laborales.",
      requirements: ["Presentar declaración anual en ciertos casos", "Conservar recibos de nómina"]
    }
  ],
  personaMoral: [
    {
      name: "Régimen General",
      description: "Régimen principal para sociedades mercantiles.",
      requirements: ["Llevar contabilidad completa", "Presentar declaraciones mensuales y anuales", "Emitir facturas"]
    },
    {
      name: "Sin Fines de Lucro",
      description: "Para organizaciones con fines no lucrativos.",
      requirements: ["Mantener transparencia fiscal", "Presentar informes de transparencia", "Cumplir objeto social"]
    },
    {
      name: "Régimen Simplificado",
      description: "Para sector primario y autotransporte.",
      requirements: ["Actividades específicas del sector", "Límites de ingresos establecidos", "Presentar información de operaciones"]
    }
  ]
};