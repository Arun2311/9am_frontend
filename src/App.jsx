import React, { useState } from "react";
import Count from "./Component/Count";
import Navbar from "./Component/Navbar";
import Name from "./Component/Name";
import Product from "./Component/Product";
import ApiCall from "./Component/ApiCall";
import "./App.css";
import ApiCallTwo from "./Component/ApiCallTwo";
import Formtwo from "./Component/Formtwo";
import CompA from "./Component/CompA";
import { CounterProvider } from "./Component/context/CounterProvider";
import GrocerryList from "./Component/GrocerryList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [hide, sethide] = useState(true);


  const handlelogout = () => {
    sethide(false);
  };

  return (
    <div>

      <CounterProvider>
      {/* <h1>Arun</h1>

      <h2>Luffy</h2>
      <h2>zoro</h2> */}

      {/* Count() */}

      {/* <Navbar/> */}
      {/* <Count/> */}

      {/* <Name/> */}

      {/* <Product/> */}

      {/* <ApiCall/> */}

      {/* {hide ? <ApiCallTwo /> : "logout pls login"} */}

      {/* <button onClick={handlelogout}>Logout</button> */}

      {/* <Formone/> */}

      {/* <Formtwo/> */}

      {/* <CompA/> */}


{/* <GrocerryList/> */}


<h1>Arunachalam</h1>


</CounterProvider>
    </div>
  );
}

export default App;
