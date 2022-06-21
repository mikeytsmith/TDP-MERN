// import Heading from "./Heading";
// import Trainers from "./trainerApi/Trainers";
// import DeleteTrainer from "./trainerApi/DeleteTrainer";
// import AddNewTrainer from "./trainerApi/AddNewTrainer";
// import FindTrainer from "./trainerApi/FindTrainer";


// function App() {
//   return (
//     <div className="App">
//       {/* <Heading /> */}

//       <AddNewTrainer/>
//       <DeleteTrainer/>
//       <FindTrainer/>

//     </div>
//   );
// }

// export default App;
import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../src/Routing/Nav';
import Home from '../src/Routing/Home';
import Trainers_Routing from '../src/Routing/Trainers_routing';
import AddNewTrainer from '../src/Routing/AddNewTrainer';
import DeleteTrainer from '../src/Routing/DeleteTrainer';
import FindTrainer from '../src/Routing/FindTrainer';

import NotFound from '../src/Routing/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Heading /> */}

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/Trainers_Routing" element={<Trainers_Routing/>}/>
          <Route exact path ="/AddNewTrainer" element={<AddNewTrainer/>}/>
          <Route exact path ="/DeleteTrainer" element={<DeleteTrainer/>}/>
          <Route exact path ="/FindTrainer" element={<FindTrainer/>}/>
          <Route path = "*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
