import React from "react";
import { render, act } from '@testing-library/react';
import ContactSection from "..";

describe('Home/ContactSection', () => {
  it('should render a email link', () => {
    const { container } = render(<ContactSection email="test#gmail.com" />);

    expect(container.querySelector('.contactsection-email-link')).toHaveAttribute('href', 'mailto:test#gmail.com');
  });

  it('should not render a lint of point of contact if the array is empty', () => {
    const { container } = render(<ContactSection email="test#gmail.com" />);

    expect(container.querySelector('ul li')).toBeNull();
  });

  it('should render a point of contact', async () => {
    const promise = Promise.resolve();
    const { container } = render(<ContactSection points={[ { type: 'github', url: 'https://localhost' }]} email="test#gmail.com" />);

    expect(container.querySelectorAll('ul li')).toHaveLength(1);
    await act(() => promise);
  });
});
