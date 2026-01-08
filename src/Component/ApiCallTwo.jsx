import React, { useEffect, useState } from "react";

export default function ApiCallTwo() {

const[count,setcount] = useState(1)



  const handlea = () => {
    console.log("callingggggggggggggggg");
  };

  useEffect(() => {
    // mouting
    handlea();

    // unmounting
    return () => {
      console.log("dead");
    };
  },[count]);

  return (
    <div>
      <h1>UseEffect</h1>
    </div>
  );
}

// born > live > die
// mounting> updating > unmounting
