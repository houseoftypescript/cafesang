import { render } from '@testing-library/react';
import { Hero } from '../index';
import { Article } from '../../Articles';

describe('Hero', () => {
  it('to match snapshot', () => {
    const { container } = render(<Hero article={{} as Article} />);
    expect(container).toMatchSnapshot();
  });
});
