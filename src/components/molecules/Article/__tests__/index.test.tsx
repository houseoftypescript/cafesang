import { render } from '@testing-library/react';
import { Article } from '../index';

describe('Button', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Article url={''} title={''} image={''} category={''} description={''} />
    );
    expect(container).toMatchSnapshot();
  });
});
