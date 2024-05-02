jest.mock('../server/controllers/controller.js', () => ({
  // mock simulates the api calls
  getActivities: jest.fn().mockResolvedValue('A romantic dinner in rome'),
  // expected response from mock api call
}));

const { getActivities } = require('../server/controllers/controller.js');

describe('getActivities', () => {
  it('should return a good evening date idea', async () => {
    // any parameter works because mock simulate the answer
    const response = await getActivities('city', 'type', 'cravings');

    expect(response).toBe('A romantic dinner in rome');
  });

  it('should handle errors', async () => {
    getActivities.mockRejectedValue(new Error('No dates could be found'));
    try {
      await getActivities('city', 'type', 'craving');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
