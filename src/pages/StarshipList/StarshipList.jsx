import React, { useState, useEffect } from 'react'
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarshipList(starshipData.results))
  }, [])
  return (
    <>
    <header>Star Wars Starships</header>
      {starshipList.length ?
      <>
      {starshipList.map((starship) => (
      <div key={starship.index}>

        <Link
          to='/starship'
          state={{starship}}
          key={starship.name}
          >
          {starship.name}
          </Link><br />

      </div>
      ))}
      </>
      :
      <>
      <h2>Getting Starships..</h2>
      </>}
      
    </>  

  );
}

export default StarshipList;