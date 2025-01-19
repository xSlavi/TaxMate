import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { RegistrationModal } from './auth/RegistrationModal';

export function Navbar() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TaxMate</span>
            </div>
            <div>
              <button
                onClick={() => setIsRegistrationOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </nav>

      <RegistrationModal 
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </>
  );
}