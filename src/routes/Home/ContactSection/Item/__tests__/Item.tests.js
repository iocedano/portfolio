import React from 'react';
import { render, act } from '@testing-library/react';
import Item from '..';

describe('Home/ContactSection/Item', () => {
  it('should render', async () => {
    const promise = Promise.resolve();
    const { container } = render(<Item type="github" url="https://localhost"/>);

    expect(container.firstChild).toMatchSnapshot();
    await act(() => promise);
  });
});
