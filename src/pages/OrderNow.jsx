import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderNow = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    deliveryTime: 'now',
    scheduledTime: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const validateCard = () => {
    return (
      formData.cardNumber === '4400430043004300' &&
      formData.expiryDate === '11/26' &&
      formData.cvv === '111'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCard()) {
      // Handle successful order
      alert('Ваш заказ принят! Номер заказа: ' + Math.random().toString(36).substr(2, 9));
      navigate('/');
    } else {
      alert('Неверные данные карты');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Оформление заказа</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Имя и фамилия
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Номер телефона
          </label>
          <input
            type="tel"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Адрес доставки
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Время доставки
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.deliveryTime}
            onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
          >
            <option value="now">Сейчас</option>
            <option value="scheduled">Запланированное время</option>
          </select>
        </div>

        {formData.deliveryTime === 'scheduled' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Выберите время
            </label>
            <input
              type="datetime-local"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.scheduledTime}
              onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Номер карты
          </label>
          <input
            type="text"
            required
            maxLength="16"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Срок действия (MM/YY)
            </label>
            <input
              type="text"
              required
              placeholder="MM/YY"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              CVV
            </label>
            <input
              type="text"
              required
              maxLength="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              value={formData.cvv}
              onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Оформить заказ
        </button>
      </form>
    </div>
  );
};