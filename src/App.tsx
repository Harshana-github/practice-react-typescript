import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Harshana",
    last: "Lakmal",
  };

  const nameList = [
    {
      id: 1,
      first: "Mavan",
      last: "Athapaththu",
    },
    {
      id: 2,
      first: "Sanath",
      last: "Jayasooriya",
    },
    {
      id: 3,
      first: "Jehan",
      last: "Mubarak",
    },
  ];

  return (
    <div className="App">
      <Greet name="Harshana" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
