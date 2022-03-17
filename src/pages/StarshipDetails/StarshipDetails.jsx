import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails } from '../../services/sw-api';


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getDetails(location.state.starship.url)
    .then(starshipData => setStarshipDetails(starshipData))
  })

  return ( 
    <>
      {StarshipDetails.name ?
        <div>
          <h3>Starship Deets</h3>
            <h2>Name: {starshipDetails.name}</h2>
            <h2>Model: {starshipDetails.model}</h2>
            <a href='/'><h2>RETURN</h2></a>
        </div>
        :
        <>
        <h2 className='loading'>Loading Starship Details...</h2>
        </>
        }
    </>
   );
}
 
export default StarshipDetails;