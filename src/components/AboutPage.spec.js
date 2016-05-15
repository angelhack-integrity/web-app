import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('should have a header with \'alt-header\' class', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h2').prop('className');
    const expected = 'alt-header';

    expect(actual).to.equal(expected);
  });
});
