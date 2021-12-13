import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react"
import Navbar from "./components/nav/Navbar";
import Main from "./components/pages/Main";
import Pokemon from "./components/pages/Pokemon";
import Team from "./components/pages/Team";
import Calculator from "./components/pages/Calculator";
import Smogon from "./components/pages/Smogon";
import { getPokemons } from "./components/nav/Buscar";



function App() {
  

  
  const [pokemons,setPokemons] = useState([])

  const fetchPokemons = async()=>{
    try {
      const data= await getPokemons();
     setPokemons(data.results);
     
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchPokemons();
   console.log("estamos en useEffect")
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/pokemon" ><Pokemon pokemons={pokemons} /> </Route>
          <Route path="/team" component={Team} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/strategy" component={Smogon} />

        </Switch>
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
