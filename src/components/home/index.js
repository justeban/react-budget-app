import React from 'react';

export default class Home extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <section className={this.props.class}>
          <div className="site-logo">
            <i className="fas fa-money-bill-wave"></i>
            <div className="site-title">
              <p>Budget</p>
              <p>Tracker</p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}