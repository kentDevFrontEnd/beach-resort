import React, { Component } from "react";

class Banner extends Component {
  render() {
    const { children, title, subTitle } = this.props;
    return (
      <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subTitle}</p>
        {children}
      </div>
    );
  }
}

export default Banner;
