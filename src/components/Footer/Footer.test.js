import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('footer should render correctly in "debug" mode', () => {
    const component = shallow(<Footer debug />);
  
    expect(component).toMatchSnapshot();
  });
});