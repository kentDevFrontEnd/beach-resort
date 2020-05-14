import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

class Room extends Component {
  render() {
    const { name, slug, images, price } = this.props.room;
    return (
      <article className="room">
        <div className="img-container">
          <img src={images[0] || defaultImg} alt="single room" />
          <div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    );
  }
}
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
  }).isRequired,
};
export default Room;
