import { render } from '@testing-library/react';
import { Button } from '../index';

describe('Button', () => {
  it('to match snapshot', () => {
    const { container } = render(<Button>Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
