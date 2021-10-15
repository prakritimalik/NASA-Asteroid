

import React , {useState, useEffect} from 'react';
import Asteroid from './Asteroid';
import asteroidApi from '../apis/asteroidApi';
import { AsteroidInterface} from '../utils/types';

const AsteroidList = () => {
    const [asteroids, setAsteroids] = useState<AsteroidInterface[]>();
    useEffect(() => {
        async function fetchMyAPI() {
          let response = await asteroidApi.get<any>('/neo/browse');

         var merged = [].concat.apply([], Object.values(response.data.near_earth_objects)).slice(0,10);
        setAsteroids(merged);
        }
    
        fetchMyAPI()
      }, [])

    return (
        <div>
            <h1 className="m-4">Asteroid List</h1> 
            <div className="d-flex flex-wrap">
            {asteroids && asteroids.map(asteroid => {
                return <Asteroid data={asteroid}/>
  
            }
            )}
            </div>
            
        </div>
    )
}
export default AsteroidList;