import axios from "axios";
import { useEffect, useState } from "react";
import Trainer from "../Trainer";

const Trainers= () => {

    const [trainers, setTrainers] = useState([]);
    const [fetchData, setFetchData] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:4494/trainers/readAll")
            .then(res => setTrainers(res.data))
            .catch(err => console.error(err));
    }, [fetchData]);
    //the square brackets state to refresh the contents whenever there has been a change to this parameter
   

    return ( 
        <div id="box">
        <section id="list">
        <h2>List of Trainers:</h2>
        {
            trainers.map(trainer => <Trainer key={trainer._id} id={trainer._id} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>)
        }
        </section>
        </div>
     );
}

export default Trainers;