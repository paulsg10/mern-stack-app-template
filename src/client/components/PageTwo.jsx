import React, { Component } from 'react';
import axios from 'axios';

class PageTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // AXIOS call for data
  }

  render() {
    return (
      <div className="page-two">
        <h1>Page Two</h1>
      </div>
    );
  }
}

export default PageTwo;
