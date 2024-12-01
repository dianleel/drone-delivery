import React from 'react';
import { Link } from 'react-router-dom';

const Advantages = () => {
  const advantages = [
    {
      title: 'Быстрая доставка',
      description: 'Доставка менее чем за 30 минут в любую точку города',
      icon: '⚡'
    },
    {
      title: 'Экологичность',
      description: 'Минимальные выбросы углерода в атмосферу',
      icon: '🌱'
    },
    {
      title: 'Экономичность',
      description: 'Доступные цены на доставку благодаря автоматизации',
      icon: '💰'
    },
    {
      title: 'Доступность',
      description: 'Доставка в труднодоступные места',
      icon: '🎯'
    }
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Почему выбирают нас</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Узнать больше
          </Link>
        </div>
      </div>
    </div>
  );
};
