import React from 'react';

import ExpenseForm from '../expense-form/index.js';

export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editing: false,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing() {
    if (!this.state.editing) {
      this.setState({ editing: true });
    } else {
      this.setState({ editing: false });
    }
  }
  render() {
    return (
      <React.Fragment>
        <h4>{this.props.title}</h4>
        <div>{this.props.amountSpent}</div>
        <p>{this.props.memo}</p>
        <a href="#" onClick={() => this.props.handleDestory(this.props.expense)}>DELETE</a>
        <a href="#" onClick={this.toggleEditing}>EDIT EXPENSE</a>
        {
          this.state.editing ? <ExpenseForm handler={this.props.handleUpdate} expense={this.props.expense} toggle={this.toggleEditing} /> : null
        }
      </React.Fragment>
    );
  }
}