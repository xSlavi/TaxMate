import { taxRegimes } from './taxRegimes';
import { pricingPlans } from '../components/pricing/pricingData';

let messageCount = 0;

const greetings = [
  '¡Hola! ¿Qué tal? Espero que estés teniendo un excelente día. 😊 Soy tu asistente personal de TaxMate y estoy aquí para ayudarte con todas tus dudas fiscales.',
  '¡Hola! Me alegra mucho saludarte. ¿Cómo va tu día? 🌟 Estoy aquí para hacer que tus trámites fiscales sean más sencillos.',
  '¡Qué gusto saludarte! Espero que estés muy bien. 💫 Cuéntame, ¿en qué puedo ayudarte hoy?'
];

const conversationalResponses = {
  greeting: greetings,
  asesoria: [
    '¡Qué bueno que me preguntas por asesoría! Me encanta poder ayudarte. 😊 Tengo experiencia en varios temas:',
    '• Obligaciones fiscales (¡para que siempre estés al día!)',
    '• Regímenes fiscales (encontremos el ideal para ti)',
    '• Declaraciones y pagos (¡sin dolores de cabeza!)',
    '• Facturación electrónica (rápido y sencillo)',
    '• Asesoría para tu negocio (¡vamos a hacerlo crecer!)',
    '\n¿Qué tema te interesa explorar primero? Estoy aquí para guiarte paso a paso. 💪'
  ],
  "asesoria a tu negocio": [
    '¡Me emociona que quieras mejorar tu negocio! 🚀 Para darte la mejor orientación personalizada, cuéntame:',
    '¿Eres persona física o persona moral?',
    '\nJuntos encontraremos las mejores estrategias para tu empresa. ¡Estoy aquí para apoyarte! 💫'
  ],
  planSuggestion: [
    '\n\n¡Oye! Veo que estás muy interesado en nuestros servicios. 🌟',
    'Para que puedas aprovechar al máximo todas nuestras herramientas y recibir asesoría personalizada,',
    'me encantaría mostrarte nuestros planes especialmente diseñados para tus necesidades.',
    '\nEscribe "ver planes" y descubre todos los beneficios que tenemos para ti. ✨'
  ]
};

export function processMessage(input: string): string {
  messageCount++;
  const lowercaseInput = input.toLowerCase();
  let response = '';

  // Check for greetings first
  if (lowercaseInput.includes('hola') || lowercaseInput.includes('buenos') || lowercaseInput.includes('saludos')) {
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  if (lowercaseInput === "persona fisica") {
    response = '¡Excelente elección! Los emprendedores como tú son el motor de nuestra economía. 💪\n\nMira, estos son los regímenes que podrían interesarte:\n\n' +
      taxRegimes.personaFisica.map(regime => 
        `📌 ${regime.name}:\n${regime.description}\n\nRequisitos principales:\n${regime.requirements.map(req => `✓ ${req}`).join('\n')}`
      ).join('\n\n') +
      '\n\n¿Te gustaría que profundicemos en alguno de estos regímenes? ¡Estoy aquí para resolver todas tus dudas! 😊';
  }
  else if (lowercaseInput === "persona moral") {
    response = '¡Perfecto! Las empresas como la tuya tienen necesidades específicas, y estoy aquí para ayudarte. 🏢\n\nEstos son los regímenes disponibles:\n\n' +
      taxRegimes.personaMoral.map(regime => 
        `📌 ${regime.name}:\n${regime.description}\n\nRequisitos principales:\n${regime.requirements.map(req => `✓ ${req}`).join('\n')}`
      ).join('\n\n') +
      '\n\n¿Sobre cuál régimen te gustaría más información? ¡Cuéntame! 🤔';
  }
  else if (lowercaseInput.includes("asesoria")) {
    response = conversationalResponses.asesoria.join('\n');
  }
  else if (lowercaseInput === "ver planes") {
    response = '¡Con mucho gusto! Mira, estos planes los diseñamos pensando en tus necesidades:\n\n' +
      pricingPlans.map(plan => 
        `✨ ${plan.name} - $${plan.price} MXN/mes\nBeneficios destacados:\n${plan.features.slice(0, 5).map(f => `• ${f}`).join('\n')}\n`
      ).join('\n');
  }
  else {
    response = '¡Claro! Estoy aquí para ayudarte con todo lo que necesites:\n\n' +
      '📋 Facturas y comprobantes\n' +
      '📊 Declaraciones mensuales y anuales\n' +
      '💰 Deducciones y beneficios fiscales\n' +
      '🆔 Trámites de RFC\n' +
      '💼 Cálculo de impuestos\n' +
      '🤝 Asesoría personalizada\n\n' +
      '¿Qué te gustaría consultar primero? ¡Estoy aquí para guiarte! 😊';
  }

  // Add plan suggestion after third message
  if (messageCount === 3) {
    response += conversationalResponses.planSuggestion.join('\n');
  }

  return response;
}