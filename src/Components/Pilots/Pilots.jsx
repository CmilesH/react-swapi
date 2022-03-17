import { useState, useEffect } from "react";

const Pilots = (props) => {
  const [pilotsList, listPilots] = useState([])

  const pilotUrls = props.pilots

  async function getPilots(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()))
    const pilotObjects = await Promise.all(promises)
    return pilotObjects
  }

  useEffect(() => {
      getPilots(pilotUrls).then(pilots => listPilots(pilots))
    }, [])

  return(
    <>
    {pilotsList.length ?
    
    <>
      {pilotsList.map((pilot) => (
        
        <>
          <p>
            {pilot.name}
          </p>
        
        </>
      
      
      ))}
    </>
      :
      <>
      <h2>No Pilots..</h2>
      
      </>}
    </>
  )
}

export{
  Pilots
}