import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';

import App from '../client/src/App.js';
import QuestionWindow from '../client/src/Components/QuestionWindow.js';
import Maintainer from '../client/src/Components/Maintainer.js';
import Location from '../client/src/Components/Location.js';
import ActivityType from '../client/src/Components/ActivityType.js';
import Activity from '../client/src/Components/Activity.js';
import DinnerPlans from '../client/src/Components/DinnerPlans.js';
import DateIdeas from '../client/src/Components/DateIdeas.js';

describe('Empty state before interactions', () => {
  beforeEach(async () => {});
});

// check that state is empty, checking initial state
// not directly state
//
