import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../../../../src/components/dashboard/index.js';

describe('<Dashboad /> (Enzyme Test)', () => {

  it('testing intial state of Dashboard at start', () => {
    let app = shallow(<Dashboard />);
    expect(app.find('h2').exists()).toBeTruthy();
  });

});

describe('<Dashboard /> (Snapshot Test)', () => {

  it('renders cleanly', () => {
    const component = renderer.create(
      <Dashboard />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
