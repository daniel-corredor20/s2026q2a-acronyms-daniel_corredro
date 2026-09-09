const request = require('supertest');
const app = require('./index');

describe('Pruebas de la API y Middleware CORS', () => {
  test('GET / debe responder con status 200 y mensaje', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('API funcionando correctamente');
  });

  test('GET /api/data debe retornar los datos de la API', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body.data.id).toBe(1);
  });
});