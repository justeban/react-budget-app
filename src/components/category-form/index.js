import React from 'react';
import uuid from 'uuid/v4';

export default class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = this.props.category || { title: '', budget: 0 };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let category = this.state;
    category.id = uuid();
    category.createDate = new Date();
    this.props.handler(Object.assign({}, category));
    
    this.setState({title: '', budget: ''});
    
    if (this.props.toggle) { this.props.toggle(); }
    if (this.props.setExpenseFocus) { this.props.setExpenseFocus(category.id); }
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