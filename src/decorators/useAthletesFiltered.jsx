import { useState, useEffect } from 'react';
import { getAthletesFrom } from 'helpers/athleteHelper.js'

const useAthletesFiltered = (athletes, team) => {
    const [athletesFiltered, setAthletesFiltered] = useState(athletes)

  useEffect(() => {
    if( team ){
      setAthletesFiltered(getAthletesFrom(athletes, team))
    }
  }, [ athletes ,setAthletesFiltered, team ]
  )

  return athletesFiltered;
}

export default useAthletesFiltered