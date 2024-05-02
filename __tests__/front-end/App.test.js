import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../client/src/App.js';

it('Has the appropriate heading of "Welcome to DateNight"', async () => {
  render(<App />);
  expect(screen.getByText('Welcome to DateNight')).toBeInstanceOf(Node);
  const headings = await screen.findAllByRole('heading');
  // expect(...headings).toBeInTheDocument();
  expect(...headings).toHaveTextContent('Welcome to DateNight');
});

// include some test to check that the textbox starts off as blank field?
