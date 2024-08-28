import { useState } from "react";
import satData from "./components/satData";
import Table from "./components/Table";
import Buttons from "./components/Buttons";

import Banner from "./components/Banner";




function App() {
  const [sats, setSat]=useState(satData);
  //const [sats, setSat]=useState([]);
  const [orbitType, setOrbitType]=useState("All");
  const displaySats =[...new Set(satData.map((obj)=>obj.orbitType))];


  

  const filterByType = (currentType) => {

    let sat2display = satData.filter((newSatDisplay) => {
       console.log(`-${newSatDisplay.orbitType}-  vs   -${currentType}-`);
       return newSatDisplay.orbitType === currentType;
    });

    console.log(` found ${sat2display.length}  element in ${currentType} `);
    console.log(sat2display);
    setSat(sat2display);

  //const [sat, setSatilites]=useState(satData);

   // setSat([]);
 };


 

  return (
    <div>
      <Banner/>
      <Buttons    filterByType={filterByType} 
                  setSat={setSat} 
                  displaySats={displaySats} 
                  
                  />
      <Table  sat={sats}  />
    </div>
  );
}

export default App;
