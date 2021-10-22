

import React , {useState, useEffect} from 'react';
import Asteroid from './Asteroid';
import asteroidApi from '../apis/asteroidApi';
import { AsteroidInterface} from '../utils/types';
import Loader from './Loader';

const AsteroidList = () => {
    const [asteroids, setAsteroids] = useState<AsteroidInterface[]>();
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchMyAPI() {
        console.log(isLoading);
          let response = await asteroidApi.get<any>('/neo/browse');

         var merged = [].concat.apply([], Object.values(response.data.near_earth_objects)).slice(0,10);
        setAsteroids(merged);
        setLoading(false)
        }
    
        fetchMyAPI()
        
      }, [])

    return (
        <div>
            <h1 className="m-4">Asteroid List</h1> 

            {isLoading? <Loader/> : 
            (
    <div  className="d-flex flex-wrap"> 
    {asteroids && asteroids.map((asteroid) => {return <Asteroid  data={asteroid}/>})}
    </div>
    )
}
            
               
  
            
            
            </div>
            

    )
}
export default AsteroidList;