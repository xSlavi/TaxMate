import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { RegistrationModal } from './auth/RegistrationModal';

export function Footer() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Menu */}
          <div className="py-4 border-b border-gray-800">
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#features" className="text-gray-400 hover:text-white transition">Características</a>
              <a href="#benefits" className="text-gray-400 hover:text-white transition">Beneficios</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition">Cómo Funciona</a>
              <button 
                onClick={() => setIsRegistrationOpen(true)}
                className="text-gray-400 hover:text-white transition"
              >
                Comenzar Ahora
              </button>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">TaxMate</span>
              </div>
              <p className="text-gray-400">
                Tu asesor fiscal virtual disponible 24/7
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Producto</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Características</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white">Beneficios</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">Cómo Funciona</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Centro de Ayuda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentación</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Términos de Servicio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Aviso Legal</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 py-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TaxMate. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <RegistrationModal 
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </>
  );
}