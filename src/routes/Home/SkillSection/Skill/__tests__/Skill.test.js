import React from 'react';
import { render, act } from '@testing-library/react';
import Skill from '..';

describe('Home/SkillSection/Skill', () => {
  it('should render', async () => {
    const promise = Promise.resolve();
    const { container } = render(<Skill type="yarn" />);

    expect(container.firstChild).toMatchSnapshot();
    await act(() => promise);
  })
});
