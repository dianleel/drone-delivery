import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">О нас</h3>
            <p className="text-gray-300">
              Мы предлагаем инновационные решения для доставки с использованием дронов,
              делая доставку быстрее и экологичнее.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-300 hover:text-white">
                  Заказать
                </Link>
              </li>
              <li>
                <Link to="/advantages" className="text-gray-300 hover:text-white">
                  Преимущества
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-gray-300 hover:text-white">
                  Партнеры
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white">
                  Как это работает
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Телефон: +7 (777) 777-77-77</li>
              <li>Email: info@dronedelivery.kz</li>
              <li>Адрес: г. Алматы, ул. Примерная, 123</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 Drone Delivery Service. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
