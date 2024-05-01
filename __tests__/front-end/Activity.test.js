import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Activity from '../../client/src/Components/Activity.js';

test('activity update state on the input', () => {
  const mockOnAnswer = jest.fn();
  render(<Activity onAnswer={mockOnAnswer} />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Testing' } });

  expect(input.value).toBe('Testing');
});
// unit testing React components
describe('Unit testing Activity React component', () => {
  it('Renders with the appropriate text', () => {
    render(<Activity />);
    const text = screen.getByText(
      'Mmmm... Yum you want something casual or a little more high-end'
    );
    expect(text).toHaveTextContent(
      'Mmmm... Yum you want something casual or a little more high-end'
    );
  });

  it('Page loads with one button', async () => {
    render(<Activity />);
    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(1);
  });
});
