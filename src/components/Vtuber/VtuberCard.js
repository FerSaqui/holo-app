import React from 'react'
import { Link } from 'react-router-dom';

export const VtuberCard = ({ id, name, publisher, profile, first_appearance, presentation }) => {
    const imagePath = `/assets/${id}.png`;

    return (
        <div className="col-12 col-md-6 col-lg-4 my-5 text-center animate__animated animate__fadeIn">
            <div className="card text-white">
                <img src={imagePath} className="card-img img-fluid" alt={ name } />
                <div className="card-img-overlay">
                    <Link to={`/vtuber/${id}`}>
                        <h5 className="card-title bg-info rounded-pill">{ name }</h5>
                    </Link>
                    <p className={`card-text ${publisher === "Hololive EN" ? "bg-danger" : "bg-warning"} rounded-pill`}>{ publisher }</p>
                    <p className="card-text bg-info rounded position-absolute bottom-0 start-0">{ first_appearance }</p>
                </div>
            </div>
        </div>
    )
}
