import React, { Component } from 'react';
import axios from 'axios';

class PageOne extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // AXIOS call for data
  }

  render() {
    return (
      <div className="page-one">
        <h1>Page One</h1>
      </div>
    );
  }
}

export default PageOne;
