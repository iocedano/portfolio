import React from 'react';
import { render } from '@testing-library/react';
import SingleJobFixture from '../__fixtures__/single.json';
import Job from '..';

describe('Job', () => {
  it('should render a single job', () => {
    const { title, description, company } = SingleJobFixture;
    const { container } = render(<Job title={title} description={description} company={company} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render description if not present', () => {
    const { container } = render(<Job title="title"  company="test" />);

    expect(container.querySelector('p')).toBeNull();
  })
});
