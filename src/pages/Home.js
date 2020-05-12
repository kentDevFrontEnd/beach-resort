import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

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
