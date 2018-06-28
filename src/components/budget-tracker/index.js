import React from 'react';

export default class Budget extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      budget: 0,
      masterBudget: this.props.masterBudget || 0,
      total: this.props.masterBudget,
    };

    this.doTheMath = this.doTheMath.bind(this);
  }


  componentDidUpdate() {
    this.doTheMath();
    console.log('__BDUGET_STATE__', this.state);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.masterBudget !== this.props.masterBudget) {
      this.setState({ masterBudget: nextProps.masterBudget });
    }
  }

  doTheMath() {
    let budget = this.props.children.reduce((accumulator, item) => accumulator + parseInt(item.props.amountSpent), 0);
    let total = parseInt(this.state.masterBudget) - budget;

    if (total !== this.state.total) {
      this.setState({total: total});
    }
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.props.children}</div>
        <div id="total-left">{this.state.total}</div>
      </React.Fragment>
    );
  }
}