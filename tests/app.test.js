const axios = require('axios');

describe('API Test', () => {
  it('should return 200 and expected data', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('nonExistentField');
  });
});
