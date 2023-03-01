import { render } from '@testing-library/react';
import { Articles } from '../index';

describe('Button', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Articles loading={true} error={null} articles={[]} />
    );
    expect(container).toMatchSnapshot();
  });
});
