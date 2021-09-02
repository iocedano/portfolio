import React from 'react';
import { render, act } from '@testing-library/react';
import SkillSection from '..';

const Skills = [{ type: 'yarn' }];

describe('Home/SkillSection', () => {
  it('should render', async () => {
    const promise = Promise.resolve();
    const { container } = render(<SkillSection skills={Skills} />);

    expect(container.firstChild).toMatchSnapshot();
    await act(() => promise)
  });

  it('should not render the list if the skills is empty', () => {
    const { container } = render(<SkillSection skills={[]} />);

    expect(container.querySelector('ul li')).toBeNull();
  });

  it('should render the list if the skills', async() => {
    const promise = Promise.resolve();
    const { container } = render(<SkillSection skills={Skills} />);

    expect(container.querySelectorAll('ul li')).toHaveLength(1);
    await act(() => promise)
  });
});
