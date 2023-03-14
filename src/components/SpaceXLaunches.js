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
                    {launches.map(launch => <ResultCard key={launch.flight_number + '-' + launch.launch_date_unix} launch={launch} />)}
                </tbody>
              </table>
          </div>
    )
}

export default SpaceXLaunches;