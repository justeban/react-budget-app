import React from 'react';

import CategoryForm from '../category-form/index.js';
import ExpenseForm from '../expense-form/index.js';
import ExpenseItem from '../expense-item/index.js';

import {connect} from 'react-redux';
import{expenseCreate, expenseDestroy, expenseUpdate} from '../../app/actions/expenses.js';

class CategoryItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  toggleEditing = () => {
    if (!this.state.editing) {
      this.setState({editing: true});
    } else {
      this.setState({editing: false});
    }
  }

  handleBudgetChange = () => {
    let expAmt = this.props.expenses[this.props.category.id].reduce((acc, exp) => {
      acc += parseFloat(exp.amountSpent);
      return acc;
    }, 0);
    let amt = parseFloat(this.props.category.budget) - expAmt;
    return `${amt}`.match(/\./) ? amt.toFixed(2): amt;

  }

  render() {
    return (
      <React.Fragment>
        <div className="category-title">
          <h3>{this.props.category.title}</h3>
          <div className="budget">$ {this.props.category.budget} | $ {this.handleBudgetChange()}</div>
          <div className="cat-icons">
            <i className="fas fa-trash-alt" alt="Delete Category" title="Delete Category" onClick={() => this.props.handleDestroy(this.props.category.id)}></i>
            <i className="fas fa-pencil-alt" alt="Edit Category" title="Edit Category" onClick={this.toggleEditing}></i>
          </div>
        </div>
        {
          this.state.editing ? <CategoryForm handler={this.props.handleUpdate} category={this.props.category} toggle={this.toggleEditing}/> : null
        }
        <h4>Add An Expense Item: </h4>
        <ExpenseForm handler={this.props.handleCreateExpense} category={this.props.category}/>
        <div className="expense-items">
          {
            this.props.expenses[this.props.category.id].map((expense, i) => 
              <div key={i} className="expense-item">
                <ExpenseItem 
                  key={expense.id}
                  expense={expense}
                  handleUpdate={this.props.handleUpdateExpense}
                  handleDestory={this.props.handleDestroyExpense}
                  updateBudget={this.handleBudgetChange}
                />
              </div>
            )
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCreateExpense: expense => dispatch(expenseCreate(expense)),
  handleUpdateExpense: expense => dispatch(expenseUpdate(expense)),
  handleDestroyExpense: expense => dispatch(expenseDestroy(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);