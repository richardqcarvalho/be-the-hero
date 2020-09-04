const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('Deve criar uma ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "apad@apad.com",
        whatsapp: "98985297969",
        city: "São Luís",
        uf: "MA"
      });
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});