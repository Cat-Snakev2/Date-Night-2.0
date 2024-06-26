import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import subject from '../../client/src/Components/QuestionWindow.js';
import QuestionWindow from '../../client/src/Components/QuestionWindow.js';

describe('Empty state before interactions', () => {
  let state;

  beforeEach(() => {
    state = {
      step: 1,
      answers: {},
      synced: true, // JC to check what 'synced' does
    };
  });

  describe('default state', () => {
    it('should return default state when given an undefined input', () => {
      render(<QuestionWindow />);
      // if I want to check actual state, I need to be checking wherever that state is rendered
      // check screen.getBy... (check with methods we need to get the state)
      expect(subject(state)).toBe(state);
    });
  });
});
