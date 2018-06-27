import React from 'react';

export default class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = this.props.category || { title: '', budget: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handler(Object.assign({}, this.state));
    e.target.title.value = '';
    e.target.budget.value = '';

    if (this.props.toggle) this.props.toggle();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="title" type="text" value={this.state.title}/>
        <input onChange={this.handleChange} name="budget" type="number" value={this.state.budget} />
        <input type="submit"/>
      </form>
    );
  }
}