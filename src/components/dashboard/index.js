import React from 'react';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item/index.js';

import {connect} from 'react-redux';
import { categoryCreate, categoryUpdate, categoryDestroy} from '../../app/actions/categories.js';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <section className="dashboard">
          <div className="category-form">
            <h2>Add a New Budget Category</h2>
            <CategoryForm handler={this.props.handleCreateCategory}/>
          </div>
          <div className="expense-categories">
            {
              this.props.categories.map((category, i) => 
                <div key={i} className="category">
                  <CategoryItem 
                    key={i} 
                    category={category}
                    handleUpdate={this.props.handleUpdateCategory}
                    handleDestroy={this.props.handleDestroyCategory}
                  /> 
                </div>)
            }
          </div>
        </section>
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