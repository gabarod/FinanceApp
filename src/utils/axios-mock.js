import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const instance = axios.create({
  baseURL:
    'https://tribu-ti-staffing-desarrollo-afangwbmcruchqfh.201.azurefd.net/api-t-msa-productosfinancieros',
});

const mock = new MockAdapter(instance);

const products = [
  {
    id: '123455',
    nombre: 'Tarjeta Platino',
    descripcion: 'Tarjeta de crédito con límite alto y beneficios exclusivos.',
    logoUrl:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    fechaLiberacion: '2023-01-01',
    fechaRevision: '2024-01-01',
  },
  {
    id: '123456',
    nombre: 'Cuenta Corriente',
    descripcion: 'Cuenta para manejo diario con mínimo costo de mantenimiento.',
    logoUrl:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    fechaLiberacion: '2023-02-01',
    fechaRevision: '2024-02-01',
  },
  {
    id: '123457',
    nombre: 'Fondo de Inversión',
    descripcion:
      'Fondo que ofrece diversificación y rendimientos competitivos.',
    logoUrl:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    fechaLiberacion: '2023-03-01',
    fechaRevision: '2024-03-01',
  },
];

const productDetails = {
  123455: {
    id: '123455',
    nombre: 'Tarjeta Platino',
    descripcion:
      'Detalle completo de la Tarjeta Platino, incluyendo todos los beneficios y condiciones.',
    logoUrl:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    fechaLiberacion: '2023-01-01',
    fechaRevision: '2024-01-01',
  },
  123456: {
    id: '123456',
    nombre: 'Cuenta Corriente',
    descripcion:
      'Detalle completo de la Cuenta Corriente, incluyendo tarifas y acceso a servicios.',
    logoUrl:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    fechaLiberacion: '2023-02-01',
    fechaRevision: '2024-02-01',
  },
  123457: {
    id: '123457',
    nombre: 'Fondo de Inversión',
    descripcion:
      'Descripción completa del Fondo de Inversión, estrategias de inversión y objetivos.',
    logoUrl:
      'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    fechaLiberacion: '2023-03-01',
    fechaRevision: '2024-03-01',
  },
};

mock.onGet('/products').reply(200, products);

Object.keys(productDetails).forEach(key => {
  mock.onGet(`/products/${key}`).reply(200, productDetails[key]);
});

export default instance;
