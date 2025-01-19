import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { ChatInterface } from './ChatInterface';
import { CalculatorMenu } from '../calculators/CalculatorMenu';
import { Calendar } from '../calendar/Calendar';
import { FiscalLibrary } from '../library/FiscalLibrary';
import { BasicTemplates } from '../templates/BasicTemplates';
import { History } from '../history/History';
import { Notifications } from '../notifications/Notifications';
import { Support } from '../support/Support';
import { Webinars } from '../webinars/Webinars';
import { Glossary } from '../glossary/Glossary';
import { BasicCourse } from '../course/BasicCourse';
import { useGreeting } from '../../hooks/useGreeting';

export function DemoInterface() {
  const greeting = useGreeting();
  const [showCalculators, setShowCalculators] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showWebinars, setShowWebinars] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);
  const [showBasicCourse, setShowBasicCourse] = useState(false);
  
  const handleMenuClick = (label: string) => {
    if (label === 'Calculadora de Impuestos') {
      setShowCalculators(true);
    } else if (label === 'Recordatorios') {
      setShowCalendar(true);
    } else if (label === 'Biblioteca Fiscal') {
      setShowLibrary(true);
    } else if (label === 'Plantillas Básicas') {
      setShowTemplates(true);
    } else if (label === 'Historial') {
      setShowHistory(true);
    } else if (label === 'Notificaciones') {
      setShowNotifications(true);
    } else if (label === 'Soporte') {
      setShowSupport(true);
    } else if (label === 'Webinars') {
      setShowWebinars(true);
    } else if (label === 'Glosario') {
      setShowGlossary(true);
    } else if (label === 'Curso Básico') {
      setShowBasicCourse(true);
    }
  };

  if (showCalculators) {
    return <CalculatorMenu onBack={() => setShowCalculators(false)} />;
  }

  if (showCalendar) {
    return <Calendar onBack={() => setShowCalendar(false)} />;
  }

  if (showLibrary) {
    return <FiscalLibrary onBack={() => setShowLibrary(false)} />;
  }

  if (showTemplates) {
    return <BasicTemplates onBack={() => setShowTemplates(false)} />;
  }

  if (showHistory) {
    return <History onBack={() => setShowHistory(false)} />;
  }

  if (showNotifications) {
    return <Notifications onBack={() => setShowNotifications(false)} />;
  }

  if (showSupport) {
    return <Support onBack={() => setShowSupport(false)} />;
  }

  if (showWebinars) {
    return <Webinars onBack={() => setShowWebinars(false)} />;
  }

  if (showGlossary) {
    return <Glossary onBack={() => setShowGlossary(false)} />;
  }

  if (showBasicCourse) {
    return <BasicCourse onBack={() => setShowBasicCourse(false)} />;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onMenuClick={handleMenuClick} />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4">
          <h1 className="text-xl text-gray-800">
            {greeting} <span className="text-gray-500">(Tu nombre aparecerá aquí)</span>
          </h1>
        </header>
        <main className="flex-1 p-4">
          <ChatInterface />
        </main>
      </div>
    </div>
  );
}