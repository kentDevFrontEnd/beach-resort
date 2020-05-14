import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero>
          <Banner
            title="luxurios rooms"
            subTitle="deluxe rooms starting at $2.99"
          >
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </React.Fragment>
    );
  }
}

export default Home;
