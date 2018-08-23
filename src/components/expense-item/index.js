import React from 'react';

import ExpenseForm from '../expense-form/index.js';

export default class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      editing: false,
    };
  }


  toggleEditing = () => {
    if (!this.state.editing) {
      this.setState({ editing: true });
    } else {
      this.setState({ editing: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <title>{this.props.expense.title}</title>
        <cost>$ {this.props.expense.amountSpent}</cost>
        <memo>{this.props.expense.memo}</memo>
        <utilities>
          <i className="fas fa-pencil-alt" alt="Edit Expense" title="Edit Expense" onClick={this.toggleEditing}></i>
          <i className="fas fa-trash-alt" alt="Delete Expense" title="Delete Expense" onClick={() => this.props.handleDestory(this.props.expense)}></i>
        </utilities>
        {
          this.state.editing ? <ExpenseForm handler={this.props.handleUpdate} expense={this.props.expense} toggle={this.toggleEditing} classGiven={'hide'}/> : null
        }
      </React.Fragment>
    );
  }
}