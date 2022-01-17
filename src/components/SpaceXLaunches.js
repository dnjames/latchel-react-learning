import {useState, useEffect} from "react";
import axios from 'axios';
import ResultCard from  './ResultCard';

function SpaceXLaunches() {
    const [launches, setLaunches] = useState([]);
    const [getLaunches, setLaunchRetrieve] = useState(true);

    const checkLaunches = () => {
      setLaunchRetrieve(true);
    };

    useEffect(() => {
      if (getLaunches) {
        axios.get('https://api.spacexdata.com/v3/launches').then(({data}) =>  setLaunches(data)).finally(setLaunchRetrieve(false));
      }
    });
    console.log(launches);
    return (
          <div>
              <button className="nameSubmit" onClick={checkLaunches}>Check Launches</button>
              <table>
                <thead>
                    <tr>
                        <th>Mission Name</th>
                        <th>Flight Number</th>
                    </tr>
                </thead>
                <tbody>
                    {launches.map(launch => <ResultCard launch={launch} />)}
                </tbody>
              </table>
          </div>
    )
}

export default SpaceXLaunches;