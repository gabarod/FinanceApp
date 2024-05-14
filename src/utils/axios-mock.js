import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BASE_URL } from '../api/products';

const instance = axios.create({
  baseURL: BASE_URL,
});

const mock = new MockAdapter(instance);

const products = [
  {
    id: '123455',
    name: 'Tarjeta Platino',
    description: 'Tarjeta de crédito con límite alto y beneficios exclusivos.',
    logo:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '2023-01-01',
    date_revision: '2024-01-01',
  },
  {
    id: '123456',
    name: 'Cuenta Corriente',
    description: 'Cuenta para manejo diario con mínimo costo de mantenimiento.',
    logo:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '2023-02-01',
    date_revision: '2024-02-01',
  },
  {
    id: '123457',
    name: 'Fondo de Inversión',
    description:
      'Fondo que ofrece diversificación y rendimientos competitivos.',
    logo:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '2023-03-01',
    date_revision: '2024-03-01',
  },
];

const productDetails = {
  123455: {
    id: '123455',
    name: 'Tarjeta Platino',
    description:
      'Detalle completo de la Tarjeta Platino, incluyendo todos los beneficios y condiciones.',
    logo:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '2023-01-01',
    date_revision: '2024-01-01',
  },
  123456: {
    id: '123456',
    name: 'Cuenta Corriente',
    description:
      'Detalle completo de la Cuenta Corriente, incluyendo tarifas y acceso a servicios.',
    logo:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '2023-02-01',
    date_revision: '2024-02-01',
  },
  123457: {
    id: '123457',
    name: 'Fondo de Inversión',
    description:
      'Descripción completa del Fondo de Inversión, estrategias de inversión y objetivos.',
    logo:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '2023-03-01',
    date_revision: '2024-03-01',
  },
};

mock.onGet('/bp/products').reply(200, products);

Object.keys(productDetails).forEach(key => {
  mock.onGet(`/bp/products/${key}`).reply(200, productDetails[key]);
});

export default instance;
