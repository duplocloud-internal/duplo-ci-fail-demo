// tests/app.test.js
const app = require('../src/app');
const request = require('supertest');

describe('App Test', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Goodbye World'); // Intentional fail
  });
});
