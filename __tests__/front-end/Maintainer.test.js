import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Maintainer from '../../client/src/Components/Maintainer.js';

describe('Maintainer Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Maintainer />);

    expect(container).toBeInTheDocument();
  });
});
