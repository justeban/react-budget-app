import React from 'react';

export default class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      title: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handler(Object.assign({}, this.state));
    e.target.title.value = '';
  }

  handleChange(e) {
    let title = e.target.value;
    this.setState(Object.assign({}, this.state, { title }));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="title" type="text" />
      </form>
    );
  }
}