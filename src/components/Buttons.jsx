import satData from "./satData";
import './styling.css'
const Buttons = ({ filterByType, setSat, displaySats }) => {




  return (
    <div>
      {
        displaySats.map((item, id) => {
                                     return (
                                             <button onClick={() => filterByType(item)}          key={id} >
                                               {id}-{item} Orbit 
                                              </button>
                                             );
                                    }
                        )
      }
      
      <button  onClick={()=>{setSat(satData)}}  >All Orbits</button>
    </div>
    
  );
};

export default Buttons;