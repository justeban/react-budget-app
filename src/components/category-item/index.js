import React from 'react';

export default class CategoryItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        <p>Content Stuff</p>
      </React.Fragment>
    );
  }
}
