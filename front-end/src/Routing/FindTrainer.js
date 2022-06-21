import axios from "axios";
import { useState } from "react";
import Trainer from "../Trainer";


const FindTrainer =({getData, fetchData})=>{

        const [id, setId] = useState();
        const [trainer, setTrainer] = useState([]);
        const [request, setRequest] = useState(false);
        //and id now:
        
        const handleSearch= (e)=>{
            e.preventDefault();

            axios.get("http://localhost:4494/trainers/read" + id)
             
            .then((res)=>{
                setTrainer(res.data);
                console.log(res);
                setTimeout(()=>{

                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done");
                setRequest(true);
            })
            .catch((error)=>alert(error));
        }

        // Does not render the result until request = true, means we dont have empty values sitting on page

        const render = () => {
            if (request) {
                return trainer.map = (<Trainer key={trainer._id} id={trainer._id} age={trainer.age} specialism={trainer.specialism} />)
            }

        }
            return (
                <div id="box">
                    <section>
                        <h4>Result:</h4>
                        {render()}
                    </section>
                    <section>
                        <form >
                         <h4>Select FIND (to find a trainer): </h4>
                         <h5> insert ID:</h5>
                         <input type="number" min={0} placeholder="ID" value={id} onChange={(e)=>{setId(e.target.value)}} required />
                         <br/>
                         <button className="button button2" onClick={handleSearch} >FIND</button>
                         <h2>Result:</h2>
                         {render()}
                        </form>
                    </section>
                </div>
              );
                  
              }
      export default FindTrainer;