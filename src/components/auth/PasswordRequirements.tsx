import React from 'react';
import { Check, X } from 'lucide-react';

interface RequirementProps {
  met: boolean;
  text: string;
}

function Requirement({ met, text }: RequirementProps) {
  return (
    <div className="flex items-center space-x-2">
      {met ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <X className="h-4 w-4 text-red-500" />
      )}
      <span className={met ? "text-green-700" : "text-red-700"}>{text}</span>
    </div>
  );
}

interface PasswordRequirementsProps {
  password: string;
}

export function PasswordRequirements({ password }: PasswordRequirementsProps) {
  const requirements = [
    { met: password.length >= 8, text: "Mínimo 8 caracteres" },
    { met: /[A-Z]/.test(password), text: "Al menos una mayúscula" },
    { met: /[a-z]/.test(password), text: "Al menos una minúscula" },
    { met: /[0-9]/.test(password), text: "Al menos un número" },
    { met: /[^A-Za-z0-9]/.test(password), text: "Al menos un carácter especial" }
  ];

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-700">Requisitos de contraseña:</p>
      <div className="space-y-1">
        {requirements.map((req, index) => (
          <Requirement key={index} met={req.met} text={req.text} />
        ))}
      </div>
    </div>
  );
}