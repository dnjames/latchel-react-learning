import {useState, useEffect} from "react";
import axios from 'axios'

function AgeGuesser({name}) {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://api.agify.io?name=${name}`;
    if (name) {
      axios.get(url).then(({data}) => setData(data));
    }

  }, [name]);

  return (
    <div>
      Estimate Age: {data.age}
    </div>
  )
}

export default AgeGuesser;