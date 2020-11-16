import React from 'react';
import {shallow} from 'enzyme';
import {TripSummary} from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const expectedLink = '/trip/abc';

    const component = shallow(<TripSummary id='1234' image='image.png' name='Australia' cost='$51' days='3' tags={['tag1','tag2']} />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
    console.log(component.debug());
  });
  it('should render correct src and alt for image', () => {
    const expectedAlt = 'Lorem ipsum';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TripSummary id='1234' image='image.png' name='Australia' cost='$51' days='3' tags={['tag1','tag2']}  />);
  
    expect(component.find('.image').prop('alt')).toEqual(expectedAlt);
    expect(component.find('.image').prop('src')).toEqual(expectedSrc);
  });

  it('should render props name, cost and days', () => {
    const component = shallow(<TripSummary id='1234' image='image.png' name='Australia' cost='$51' days='1' tags={['tag1','tag2']}  />);
  
    expect(component.find('img').prop('alt')).toBe(true);
    expect(component.find('.details span')).at(0).toEqual('3 days');
    expect(component.find('.details').prop('span')).toBe(true);
    console.log(component.debug());
  });
  it('should throw error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render 3 tags in span in order', () => {
    const expectedTags=['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags.tag').at(0)).toEqual(expectedTags[0]);
    expect(component.find('.tags.tag').at(1)).toEqual(expectedTags[1]);
    expect(component.find('.tags.tag').at(2)).toEqual(expectedTags[2]);
  });

  it('should not render div without tags', () => {
    const expectedTags=[];

    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags')).toBeNull();

  });

});