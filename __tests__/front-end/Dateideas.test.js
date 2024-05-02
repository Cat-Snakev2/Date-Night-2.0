import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DateIdeas from '../../client/src/Components/DateIdeas';

test('fetchDateSuggestions is called when component is rendered', () => {
  const mockFetchDateSuggestions = jest.fn();

  render(<DateIdeas fetchDateSuggestions={mockFetchDateSuggestions} />);

  fireEvent.click(getByText('Fetch Date Suggestions'));

  expect(mockFetchDateSuggestions).toHaveBeenCalled();
});
