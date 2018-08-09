import React from 'react';

export default class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = this.props.category || { title: '', budget: 0 };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handler(Object.assign({}, this.state));

    if (this.props.toggle) { this.props.toggle(); }
    this.setState({title: '', budget: ''});
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} placeholder="Enter Category Name"name="title" type="text" required value={this.state.title}/>
        <span>$</span> 
        <input onChange={this.handleChange} placeholder="Enter Budget Amt" name="budget" type="number" required value={this.state.budget} />
        <input type="submit"/>
      </form>
    );
  }
}