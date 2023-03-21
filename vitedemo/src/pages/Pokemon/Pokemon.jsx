import { useState } from "react";
export const Pokemon = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 onClick={()=>{setCounter(counter + 1)}}>Pokemon {counter}</h1>
    </div>
  );
};
