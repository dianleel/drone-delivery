import React, { useEffect } from 'react';
import { useState } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      title: 'Оформление заказа',
      description: 'Клиент оформляет заказ через наш сайт, выбирая нужные товары и указывая адрес доставки.',
      icon: '📝',
      details: 'Процесс заказа максимально прост и интуитивен. Вы можете выбрать удобное время доставки и способ оплаты.'
    },
    {
      title: 'Подготовка заказа',
      description: 'Дрон подбирает заказ на складе, используя автоматизированную систему погрузки.',
      icon: '🏭',
      details: 'Наши дроны оснащены специальными захватами для безопасной транспортировки грузов различных размеров.'
    },
    {
      title: 'Доставка',
      description: 'Дрон доставляет заказ на указанный адрес, используя оптимальный маршрут.',
      icon: '🚁',
      details: 'Система навигации учитывает погодные условия и выбирает самый быстрый и безопасный путь.'
    }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Процесс доставки дронами прост, быстр и эффективен
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                activeStep === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => handleStepClick(index)}
            >
              <div className="text-4xl mb-4 animate-bounce">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Подробнее о процессе</h2>
          <div className="transition-all duration-300">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700">{steps[activeStep].details}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[500px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Процесс доставки дронами"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">У вас остались вопросы?</h2>
          <button
            onClick={() => window.location.href = '/order'}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;