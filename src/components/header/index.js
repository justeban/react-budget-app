import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i>
                <p className="sub-link">Home</p>
              </Link>
            </li>
            <li><Link to="/dashboard">
              <i className="fas fa-tachometer-alt"></i>
              <p className="sub-link">Dashboard</p>
            </Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}