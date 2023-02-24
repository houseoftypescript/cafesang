import { render } from '@testing-library/react';
import { Input } from '../index';

describe('Input', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Input
        id="id"
        name="name"
        placeholder="Placeholder"
        value="value"
        onChange={() => {}}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
