import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';

// 1. import the module I want to mock into test file
import DateIdeas from '../../client/src/Components/DateIdeas.js';
import { fetchDateSuggestions } from '../../client/src/Components/DateIdeas.js';

// jest.mock() the module
// use .mockResolvedValue(<mocked response>) to mock the response

// notes from discussion with May:
// dependency injection/modularization
// DateIdeas component, declaring this function
// we want to tell DateIdeas to use a mockFn instead of fetchDateSuggestions > pass in fetchdateSuggestion to DateIdeas
// pass jestFn to DateIdeas when we render, and jest will tell us if it has been called/not
// conditional check, if FDS is falsy, then initialize it to func from lines 15-30
// change the component (lookup dependency injection)

// testing FDS functionality > more modularization/put it in its own component
// pass it as an arg to DateIdeas
// testing, import FDS into its own test file

describe('when API call is successful', () => {
  it('returns date ideas prompt', async () => {
    const post = jest.fn(() => {
      return Promise.resolve({
        data: { suggestions: 'mock suggestion' },
      });
    });
  });
});

it('renders DateIdeas component', async () => {
  const mockIdeas = jest.fn();
  fetchDateSuggestions = jest.fn();
  render(<DateIdeas ideas={mockIdeas} />);

  expect(screen.getByText('final-suggestion')).toBeInTheDocument();

  // const someElement = result.container.querySelector('final-suggestion');

  // expect(someElement).toBeInTheDocument();
});

// describe('Has the appropriate heading and paragraph tags', () => {
//   // it('Has a paragraph tag with id of final-suggestion', async () => ()
//   it('Has the "Welcome to Date Night" heading', async () => {
//     // In order to test component DateIdeas, need to render with mock API call..
//     const result = render(<DateIdeas />);
//     const someElement = result.container.querySelector('final-suggestion');

//     expect(someElement).toBeInTheDocument();

//     // expect(screen.getByTestId('id')).toHaveTextContent('final-suggestion');

//     // expect(screen.getByText('Welcome to Date Night')).toBeInTheDocument();
//   });
// });
