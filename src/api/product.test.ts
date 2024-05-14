import {getProductById, getProductList} from './products';

const BASE_URL =
  'http://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

describe('getProductList', () => {
  it('Debe manejar respuestas inesperadas', async () => {
    const result = await getProductList();
    expect(result).toEqual({error: 'Unexpected format'});
  });
});

describe('getProductById', () => {
  it('Debe manejar respuestas inesperadas con un id existente', async () => {
    const result = await getProductById('1');
    expect(result).toEqual({error: 'Unexpected format'});
  });
});
