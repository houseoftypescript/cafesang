import { render } from '@testing-library/react';
import { CTA } from '../index';

describe('CTA', () => {
  it('to match snapshot', () => {
    const { container } = render(<CTA />);
    expect(container).toMatchSnapshot();
  });
});
