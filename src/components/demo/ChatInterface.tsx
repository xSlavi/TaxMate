import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { processMessage } from '../../utils/chatProcessor';
import { PricingModal } from '../pricing/PricingModal';

export function ChatInterface() {
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    { text: '¡Hola! Soy TaxMate, tu asistente fiscal virtual. ¿En qué puedo ayudarte hoy?', isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [showPricing, setShowPricing] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newMessageCount = messageCount + 1;
    setMessageCount(newMessageCount);
    
    const userMessage = { text: input, isUser: true };
    const response = processMessage(input);
    const botMessage = { text: response, isUser: false };
    
    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput('');

    // Show pricing after third message
    if (newMessageCount === 3) {
      setTimeout(() => {
        setShowPricing(true);
      }, 1000);
    }
  };

  return (
    <>
      <div className="h-full flex flex-col bg-white rounded-lg shadow-sm">
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.isUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe tu consulta fiscal aquí..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={messageCount >= 3}
            />
            <button
              onClick={handleSend}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              disabled={messageCount >= 3}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          {messageCount >= 3 && (
            <p className="mt-2 text-sm text-gray-600 text-center">
              Chat demo finalizado. Por favor, selecciona un plan para continuar.
            </p>
          )}
        </div>
      </div>

      <PricingModal 
        isOpen={showPricing}
        onClose={() => setShowPricing(false)}
      />
    </>
  );
}