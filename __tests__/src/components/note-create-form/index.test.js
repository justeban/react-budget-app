import React from 'react';
import renderer from 'react-test-renderer';

import NoteForm from '../../../../src/components/note-create-form/index.js';

describe('<Dashboad /> (Enzyme Test)', () => {

  it('testing intial state of NoteForm at start', () => {
    let app = shallow(<NoteForm />);
    expect(app.find('form').exists()).toBeTruthy();
  });

});

describe('<NoteForm /> (Snapshot Test)', () => {

  it('renders cleanly', () => {
    const component = renderer.create(
      <NoteForm />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
