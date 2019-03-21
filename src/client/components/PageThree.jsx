import React, { Component } from 'react';
import axios from 'axios';

class PageThree extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // AXIOS call for data
  }

  render() {
    return (
      <div className="page-three">
        <h1>Page Three</h1>
      </div>
    );
  }
}

export default PageThree;
