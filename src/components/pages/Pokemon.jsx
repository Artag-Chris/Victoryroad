import React from "react";
//import { FetchURL } from "../fetch/FetchURL"
import AllCards from "../cards/AllCards";


function Pokemon(props) {
  const { pokemons } = props
  console.log(pokemons)
  //const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
  //const estado = FetchURL(url)
  //const { cargando, data } = estado
  //cargando ? console.log("cargando") : console.log("...")
  return (

    <div>
      {
        //cargando
        //  ?
        //<h1>Cargando...</h1>
        // :
        <div className="container" >
          <AllCards results={pokemons} />
          {/* <div className="container m-auto">
              <button onClick={() => setUrl(pokemons.previus)} className="m-2 btn btn-dark" >Previus</button>
              <button onClick={() => setUrl(pokemons.next)} className="m-2 btn btn-dark" >Next</button>
                </div>*/}

        </div>
      }
    </div>
  );
}

export default Pokemon;
