import React from 'react';

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);

    let defaultState = {
      categoryId: this.props.category && this.props.category.id || '',
      title: '',
      amountSpent: 0,
      memo: '',
    };

    this.state = this.props.expense || defaultState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handler(Object.assign({}, this.state));

    this.setState({ title: '', amountSpent: '', memo: '' });
    
    if (this.props.toggle) { this.props.toggle(); }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} placeholder="Expense" type="text" required name="title" value={this.state.title}/>
        $ <input onChange={this.handleChange} placeholder="Amt Spent" type="number" required name="amountSpent" value={this.state.amountSpent} />
        <input onChange={this.handleChange} placeholder="Memo" type="text" name="memo" value={this.state.memo}/>
        <input onChange={this.handleChange} type="submit" />
      </form>
    );
  }
}

