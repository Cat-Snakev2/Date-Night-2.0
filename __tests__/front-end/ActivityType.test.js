import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActivityType from '../../client/src/Components/ActivityType.js';

test('activity update state on the input', () => {
  const mockOnAnswer = jest.fn();
  render(<ActivityType onAnswer={mockOnAnswer} />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Testing' } });

  expect(input.value).toBe('Testing');
});
// unit testing React components
describe('Unit testing ActivityType React component', () => {
  it('Renders with the appropriate text', () => {
    render(<ActivityType />);
    const text = screen.getByText(
      'Are we looking for something indoors or outdoors?'
    );
    expect(text).toHaveTextContent(
      'Are we looking for something indoors or outdoors?'
    );
  });

  it('Page loads with one button', async () => {
    render(<ActivityType />);
    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(1);
  });
});
