const request = require('supertest');
const app = require('../src/app');

describe('Login API Tests', () => {
  it('should login successfully with valid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: '1234' });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Login successful');
  });

  it('should fail with invalid password', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: 'wrong' });
    expect(res.statusCode).toBe(401);
  });

  it('should fail if username or password is missing', async () => {
    const res = await request(app).post('/login').send({});
    expect(res.statusCode).toBe(400);
  });
});