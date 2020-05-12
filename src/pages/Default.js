import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
class Default extends Component {
  render() {
    return (
      <Hero>
        <Banner title="404" subTitle="page not found">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default Default;
