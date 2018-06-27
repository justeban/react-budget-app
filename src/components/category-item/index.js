import React from 'react';

import CategoryForm from '../category-form/index.js';

export default class CategoryItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing() {
    if (!this.state.editing) {
      this.setState({editing: true});
    } else {
      this.setState({editing: false});
    }
  }

  render() {
    return (
      <React.Fragment>
        <h3>{this.props.title}</h3>
        <div className="budget">{this.props.budget}</div>
        <a href="#" onClick={() => this.props.handleDestroy(this.props.category.id)}>Delete</a>
        <a href="#" onClick={this.toggleEditing}>Edit Category</a>
        {
          this.state.editing ? <CategoryForm handler={this.props.handleUpdate} category={this.props.category} toggle={this.toggleEditing}/> : null
        }
      </React.Fragment>
    );
  }
}
