import {useState, useEffect} from "react";
import axios from 'axios';

function AgeGuesser({name}) {
  const [data, setData] = useState("");

  useEffect(() => {
    const url = `https://api.agify.io?name=${name}`;
    if (name) {
      axios.get(url).then(({data}) => setData(data));
    }

  }, [name]);

  if (isNum(name)) {
    return (
      <div>
        Please enter a valid name!
      </div>
    )
  }

  return (
    <div>
      Estimate Age: {data.age}
    </div>
  )
}

function isNum(v) {
  return /\d/.test(v);
}

export default AgeGuesser;