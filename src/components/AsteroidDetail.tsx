
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import asteroidApi from '../apis/asteroidApi';
import { AsteroidInterface } from '../utils/types';

const AsteroidDetail = () => {
    const [asteroid, setAsteroid] = useState<AsteroidInterface>();
    const {id} = useParams<{id: string}>();

    // useEffect(  () =>  {
    //     const response = await asteroidApi.get<any>(`/neo/${id}`);
    // }, []);

    useEffect(() => {
        async function fetchMyAPI() {
          let response = await asteroidApi.get<any>(`/neo/${id}`);
          const {name, absolute_magnitude_h, is_potentially_hazardous_asteroid , is_sentry_object} = response.data;
          setAsteroid({name, absolute_magnitude_h, id, is_potentially_hazardous_asteroid ,is_sentry_object});
        }
    
        fetchMyAPI()
      }, [])
    
    return (
      <div>
      {
          <div className="card m-3" style={{width: "18rem"}}>
          <div className="card-body">
            <h4> Asteroid Details </h4>
            <h5 className="card-title">Name: {asteroid?.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">ID: {asteroid?.id}</h6>
            <p className="card-text">Absolute Magnitude: {asteroid?.absolute_magnitude_h}</p>
            <p className="card-text"> Is potentially hazardous? {asteroid?.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
            <p className="card-text"> Is Sentry object? {asteroid?.is_sentry_object ? 'Yes' : 'No'}</p>
          </div>
        </div>
}
  </div>
    )
}

export default AsteroidDetail;