import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      <div className="h-screen relative">
        <img
          src="/drone-delivery.jpeg"
          alt="Drone Delivery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">
              Доставка будущего с помощью дронов
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Мы создаем будущее доставки, делая её быстрее, экологичнее и доступнее
            </p>
            <Link
              to="/order"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
            >
              Заказать сейчас
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;