import './styling.css'
const Table = ({ sat }) => {



  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
     
       {sat.map((item,id)=>{ 
                         return(
                          <tr key={id} >
                          <td> {item.name} </td> 
                          <td> {item.type}  </td> 
                          <td> {item.launchDate}  </td> 
                          <td> {item.operational? "active" :"inactive"}  </td>
                          </tr>
                          );
                        }
                )
        }

     </tbody>
   </table>
  );
};

export default Table;