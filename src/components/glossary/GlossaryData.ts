export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'general' | 'impuestos' | 'contabilidad' | 'legal';
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "CFDI",
    definition: "Comprobante Fiscal Digital por Internet. Documento electrónico que cumple con los requisitos legales y reglamentarios exigibles para todos los comprobantes fiscales.",
    category: "general"
  },
  {
    term: "ISR",
    definition: "Impuesto Sobre la Renta. Contribución que grava los ingresos de las personas físicas y morales.",
    category: "impuestos"
  },
  {
    term: "IVA",
    definition: "Impuesto al Valor Agregado. Impuesto indirecto que grava el consumo de bienes y servicios.",
    category: "impuestos"
  },
  {
    term: "RESICO",
    definition: "Régimen Simplificado de Confianza. Esquema fiscal para personas físicas con ingresos de hasta 3.5 millones de pesos anuales.",
    category: "impuestos"
  },
  {
    term: "Persona Moral",
    definition: "Organización con derechos y obligaciones, que existe física pero no como individuo sino como institución.",
    category: "legal"
  },
  {
    term: "Persona Física",
    definition: "Individuo con capacidad para contraer obligaciones y ejercer derechos.",
    category: "legal"
  },
  {
    term: "Deducible",
    definition: "Gasto que puede restarse de los ingresos para efectos del cálculo de impuestos.",
    category: "contabilidad"
  },
  {
    term: "Base Gravable",
    definition: "Monto sobre el cual se calcula un impuesto.",
    category: "impuestos"
  },
  {
    term: "Ejercicio Fiscal",
    definition: "Periodo de 12 meses en el que se realizan las operaciones y se calculan los impuestos.",
    category: "contabilidad"
  },
  {
    term: "RFC",
    definition: "Registro Federal de Contribuyentes. Clave única que identifica a los contribuyentes.",
    category: "general"
  }
];