import AllPets from "./components/AllPets";
import NewPet from "./components/NewPet";
import ShowPet from "./components/ShowPet";
import EditPet from "./components/EditPet";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
      <h1>Pet Shelter</h1>

        <Switch>
          <Route exact path = "/">
            <Link className="btn btn-success" to="/new">Add a pet to the shelter</Link>
            <AllPets></AllPets>
          </Route>
          <Route exact path = "/new">
            
            <NewPet></NewPet>
          </Route>
          <Route exact path = "/pet/:_id">
            
            <ShowPet></ShowPet>
          </Route>
          <Route exact path="/pet/edit/:_id">
            <EditPet></EditPet>
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
