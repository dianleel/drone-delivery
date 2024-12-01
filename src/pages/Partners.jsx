import React from 'react';

const Partners = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Наши партнеры</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/magnum.jpg"
              alt="Magnum"
              className="w-64 h-auto"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">Magnum</h2>
              <p className="text-gray-600 mb-6">
                Magnum использует нашу службу доставки дронами для быстрой 
                доставки продуктов своим клиентам. Это позволяет значительно 
                сократить время доставки и повысить удовлетворенность клиентов.
              </p>
              <a
                href="https://magnum.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Заказать
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};