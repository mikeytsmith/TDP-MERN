import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/Trainers_Routing">List of Trainers</Link>
            <br/>
            <Link to="/AddNewTrainer">Add or Update</Link>
            <br/>
            <Link to="/DeleteTrainer">Delete</Link>
            <br/>
            <Link to="/FindTrainer">Find a Trainer</Link>
        </>
    )
}

export default Nav;