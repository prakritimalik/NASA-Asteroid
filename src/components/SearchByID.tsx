import axios from "axios";
import React, { useState } from "react";
import asteroidApi from "../apis/asteroidApi";
import { AsteroidInterface } from "../utils/types";
import Asteroid from "./Asteroid";

const SearchByID = () => {
  const [id, setId] = useState("");
  const [asteroid, setAsteroid] = useState<AsteroidInterface>();

  const handleId = (e: any) => {
    setId(e.target.value);
  };

  const onButtonClick = async () => {
    const response = await asteroidApi.get<any>(`/neo/${id}`);
    if(response.status === 404){
      console.log('Please check ID');
    }
    const { name, absolute_magnitude_h, is_potentially_hazardous_asteroid, is_sentry_object } = response.data;
    setAsteroid({ name, absolute_magnitude_h, id , is_potentially_hazardous_asteroid , is_sentry_object});
  };

  return (
    <div>
      <h1 className="m-4">Search by ID</h1>
      <label className="m-4"> Asteroid ID</label>
      <input  onChange={handleId} />
      <button className="mx-2 btn btn-primary" onClick={() => onButtonClick()}> Search Asteroid </button>
      <div className="m-2">{asteroid && <Asteroid data={asteroid} />}</div>
    </div>
  );
};
export default SearchByID;
