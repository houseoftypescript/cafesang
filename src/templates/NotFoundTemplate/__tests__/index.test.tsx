import { render } from '@testing-library/react';
import { NotFoundTemplate } from '../index';

describe('NotFoundTemplate', () => {
  it('to match snapshot', () => {
    const { container } = render(<NotFoundTemplate />);
    expect(container).toMatchSnapshot();
  });
});
