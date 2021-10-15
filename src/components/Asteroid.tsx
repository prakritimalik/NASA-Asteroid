
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AsteroidInterface } from '../utils/types';

const Asteroid:FC<{data:AsteroidInterface}> = ({data}) => {
    return (
        <div>
            {
                <div className="card m-3" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">ID: {data.id}</h6>
                  <p className="card-text">Absolute Magnitude: {data.absolute_magnitude_h}</p>
                  <Link to={`/asteroid-detail/${data.id}`}>View More</Link>
           
                </div>
              </div>
}
        </div>
            
    )
}
export default Asteroid;