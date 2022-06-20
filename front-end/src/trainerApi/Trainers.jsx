import axios from "axios";
import { useEffect, useState } from "react";
import Trainer from "../Trainer";
import AddNewTrainer from "./AddNewTrainer";

const Trainers= () => {

    const [trainers, setTrainers] = useState([]);
    // this constant is trainers and setTrainers. which is equal to the 
    // pre set function of useState - an array response.
    // the array response to define setTrainers is defined on line 18
    // whichis the response data found when we go to that URL.
    const [fetchData, setFetchData] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:4494/trainers/readAll")
            .then(res => setTrainers(res.data))
            .catch(err => console.error(err));
    }, [fetchData]);
// fetch data in [] is a condition to tell the programme when to render the page
// in this case when fetchData is updated/changes.
    return ( 
        <>
        <h2>List of trainers: </h2>
        {
            trainers.map(trainer => <Trainer key={trainer._id} id={trainer._id} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>)
        }
        <br/>
        <h2>Add new trainer: </h2>
        <AddNewTrainer getData={setFetchData} fetchData={fetchData}/>
        </>
     );
}

export default Trainers;
