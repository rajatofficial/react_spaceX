import React from 'react';
import { shallow } from 'enzyme';
import SatelliteCard from './satelliteCard';

describe('Satellite Card Component', () => {
  it('Satellite Card should render correctly in "debug" mode', () => {
    const component = shallow(<SatelliteCard debug />);
  
    expect(component).toMatchSnapshot();
  });
});