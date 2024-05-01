import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/jest-dom';
// import fetchMock from 'jest-fetch-mock';

import DateIdeas from '../../client/src/Components/DateIdeas.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ suggestions: ['idea 1', 'idea 2'] }),
  })
);

describe('DateIdeas component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders date suggestions after fetching', async () => {
    render(<DateIdeas ideas={[]} />);

    await waitFor(() => screen.getByText('idea 1'));

    expect(screen.getByText('idea 1')).toBeInTheDocument();
    expect(screen.getByText('idea 2')).toBeInTheDocument();
  });
});

// import fetchMock from 'fetch-mock';
// const fetch = require('node-fetch'); //

// fetchMock.enableMocks();

// global.fetch = jest.fn();

// describe('DateIdeas Component', () => {});
