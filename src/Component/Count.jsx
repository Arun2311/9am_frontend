import React, { useState } from "react";

function Count() {
  // state -> hook inbuilt function usestate()

  const [count,setcount] = useState(1);

  function changename() {
    setcount(count + 1)
  }

  return (
    <div>
      <h1>Count - {count}</h1>

      <button onClick={changename}>Change</button>
    </div>
  );
}

export default Count;
