import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Planets = ({planet}) => {
    return (
        <div className="card" style={{width: "18rem", display: "inline-block"}}>
            <img className="card-img-top" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/12/tattooine-twin-suns.jpg" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <div>Diameter: {planet.diameter} km</div>
                    <div>Population: {planet.population}</div>
                    <div>Climate: {planet.climate}</div>
                    <div className="options d-flex justify-content-between"><a href="#" className="btn btn-primary">Learn more!</a><a href="#" className="btn btn-primary"><i class="fas fa-heart"></i></a></div>
                </div>
        </div>
    );
};

Planets.propTypes = {
    match: PropTypes.object
};