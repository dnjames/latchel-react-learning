import { useState } from "react";

function Input({ name, setName }) {
  const [name1 , setName1] = useState("");

  return (
    <div>
      <input className="nameInput" required value={name1} onChange={(e) => setName1(e.target.value)}></input>
      <button className="nameSubmit" onClick={() => setName(name1)}>Submit</button>
    </div>
  );
}

export default Input;
