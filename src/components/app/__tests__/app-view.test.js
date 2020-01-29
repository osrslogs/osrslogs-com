import React from 'react';
import { shallow } from 'enzyme';
import App from '../app-view';

describe('<App />', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(
      <App />,
    );
    expect(tree).toMatchSnapshot();
  });
});