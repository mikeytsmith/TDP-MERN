import "./App.css";
// import Heading from "./Heading";
import Trainers from "./trainerApi/Trainers";
import DeleteTrainer from "./trainerApi/DeleteTrainer";

function App() {
  return (
    <div className="App">
      {/* <Heading /> */}

      <Trainers />
      <DeleteTrainer/>
    </div>
  );
}

export default App;
