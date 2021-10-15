import React, { useState } from "react";
import { start } from "repl";
import asteroidApi from "../apis/asteroidApi";
import { AsteroidInterface } from "../utils/types";
import Asteroid from "./Asteroid";

const SearchByDate = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [asteroids, setAsteroids] = useState<AsteroidInterface[]>();

  const handleStartDate = (e: any) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e: any) => {
    setEndDate(e.target.value);
  };

  const onButtonClick = async () => {
    const response = await asteroidApi.get<any>("/feed", {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    });

    var merged = [].concat.apply([], Object.values(response.data.near_earth_objects));
    setAsteroids(merged);
  };

  return (
    <div>
      <h1 className="m-4">Search by Closest Date</h1>
      <label className="m-4"> Start Date </label>
      <input onChange={handleStartDate} type="date" />
      <label className="m-4"> End Date</label>
      <input onChange={handleEndDate} type="date" />
      <button className="m-2 btn btn-primary" onClick={() => onButtonClick()}> Search Asteroids </button>
      <div className="d-flex flex-wrap">
            {asteroids && asteroids.map(asteroid => {
                return <Asteroid data={asteroid}/>
  
            }
            )}
            </div>
    </div>
  );
};
export default SearchByDate;
