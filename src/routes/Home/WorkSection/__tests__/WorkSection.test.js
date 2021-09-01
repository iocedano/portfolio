import React from 'react';
import { render } from '@testing-library/react';
import JobsFixture from '../__fixtures__/jobs.json';
import Section from '..';

describe('WorkSection', () => {
  it('should not render without jobs if jobs prop is undefined', () => {
    const { container } = render(<Section />);

    expect(container.querySelectorAll('[data-id-test="a-job-test"]')).toHaveLength(0);
  });

  it('should render jobs if jobs prop is present', () => {
    const { container } = render(<Section jobs={JobsFixture.jobs} />);

    expect(container.querySelectorAll('[data-id-test="a-job-test"]')).toHaveLength(2);
  });
});
