import React from 'react';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item/index.js';

import {connect} from 'react-redux';
import { categoryCreate, categoryUpdate, categoryDestroy} from '../../app/actions/categories.js';

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Dashboard</h2>
        <div id="board">
          <CategoryForm handler={this.props.handleCreateCategory}/>
          <div id="expense-categories">
            {
              this.props.categories.map((category, i) => 
                <CategoryItem 
                  key={category.id} 
                  title={category.title} 
                  budget={category.budget}
                  category={category}
                  handleUpdate={this.props.handleUpdateCategory}
                  handleDestroy={this.props.handleDestroyCategory}
                /> )
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleCreateCategory: category => dispatch(categoryCreate(category)),
  handleUpdateCategory: category => dispatch(categoryUpdate(category)),
  handleDestroyCategory: category => dispatch(categoryDestroy(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);