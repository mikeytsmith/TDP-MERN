import axios from 'axios';
import { useState } from 'react';

import Trainer from './Trainers_routing';

const DeleteTrainer = ({getData, fetchData}) => {

    const [id, setId] = useState();

    const handleDelete = () => {

        axios.delete(`http://localhost:4494/trainers/remove/` + id)
        .then((res) => {
            console.log(res);
            setTimeout(() => {
                getData(!fetchData)
                console.log("loading")
            }, 500)
            console.log("done")
        })
        .catch((err) => alert(err));
    }

    return (
        <div id="box">
            <section>
                <Trainer/>
            </section>
            <section>
            <form>
            
            <h4>Select DELETE (to delete a trainer)</h4>
            <h4>Insert ID:</h4>
            <input type="number" min={0} placeholder="ID" value={id} onChange={(event) => {setId(event.target.value)}} required/>
            <br/>
            <button className="button button3" onClick={handleDelete}>DELETE</button>
            </form>
            </section>
            </div>
    )
    
}

export default DeleteTrainer;