import fetchApi from '../../services/apiService';
import mockApps from '../../mocks/apiMock';

describe('apiService', () => {

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: mockApps }),
      })
    );
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  test('return data correctly', async () => {
    const result = await fetchApi();
    expect(result).toEqual({ data: mockApps });
  });

  test('handle error API fetch', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      })
    );

    await expect(fetchApi()).rejects.toThrow('Erro ao obter dados da API: 404');
  });
});
