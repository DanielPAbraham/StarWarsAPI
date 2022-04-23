import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const People = ({ char }) => {
  return (
    <div className="card " style={{ width: "18rem", display: "inline-block" }}>
      <img
        className="card-img-top"
        src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_fb34a1ff.jpeg?region=131%2C0%2C951%2C536"
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{char.name}</h5>
        <div>Gender: {char.gender}</div>
        <div>Height: {char.height} cm</div>
        <div>Birth Year: {char.birth_year}</div>
        <div className="options d-flex justify-content-between">
          <a href="#" className="btn btn-primary">
            Learn more!
          </a>
          <span onClick={() => actions.addFav(props.group)}>
            {store.favorites.includes(prop.group) ? (
              <i class="fas fa-heart"></i>
            ) : (
              <i class="fas fa-heart"></i>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

People.propTypes = {
  match: PropTypes.object,
};
