import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DinnerPlans from '../../client/src/Components/DinnerPlans.js';

// Mock the fetch API call
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Success' }),
  })
);

describe('DinnerPlans', () => {
  it('renders correctly', () => {
    const { getByText } = render(<DinnerPlans onAnswer={jest.fn()} />);
    expect(
      getByText('Cool, nothing like a romantic evening inside')
    ).toBeInTheDocument();
    expect(
      getByText("What about dinner plans, is there anything you're craving?")
    ).toBeInTheDocument();
  });
});
