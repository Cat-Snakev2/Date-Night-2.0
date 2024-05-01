import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Location from '../../client/src/Components/Location';

test('activity update state on the input', () => {
  const mockOnAnswer = jest.fn();
  render(<Location onAnswer={mockOnAnswer} />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Testing' } });

  expect(input.value).toBe('Testing');
});
// unit testing React components
describe('Unit testing Location React component', () => {
  it('Renders with the appropriate text', () => {
    render(<Location />);
    const text = screen.getByText('So... what city are we meeting up at?');
    expect(text).toHaveTextContent('So... what city are we meeting up at?');
  });

  it('Page loads with one button', async () => {
    render(<Location />);
    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(1);
  });
});
