import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

// import DateIdeas from '../../client/src/Components/DateIdeas.js';

import DateIdeas from '../../client/src/Components/DateIdeas.js';
// import fetchDateSuggestions from '../../client/src/Components/DateIdeas.js';

//JC: mocking fetch calls
// const MOCK_MESSAGE = 'testing';

// access global fetch and replace with mock version
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ ideas: {} }),
  })
);

it('Fetch reply', async () => {
  const reply = await DateIdeas();

  expect(fetch).toHaveBeenCalled(1);
});
