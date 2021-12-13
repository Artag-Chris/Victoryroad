import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"
import { searchPokemon } from "./Buscar"
import Modal3 from "../modal/Modal3";



function Navbar() {
  
  const [search, setSearch] = useState("")
  const [pokemon,setPokemon] = useState();
  const onChange = (e) => {
  setSearch(e.target.value)
  }
  const onClick = async (e) => {
    const data = await searchPokemon(search);
    setPokemon(data);

  }
  const onSubmit = event => {
    event.preventDefault();
  }
  return (
    
    <div className="mb-3" >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid container-sm ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/">
              Victory Road
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/">
                  Main
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pokemon">
                  Pokemon List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/team" >Team Builder</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/calculator" >Damage Calculator</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/strategy" >Strategy</Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={onSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar Pokemon"
                aria-label="Search"
                onChange={onChange}
              />
              <button onClick={onClick} className="btn btn-outline-success" type="submit"data-bs-toggle="modal" data-bs-target="#exampleModal">
                {search}
              </button>
            </form>
            {pokemon && <Modal3 name={pokemon.name} img={pokemon.sprites.other["official-artwork"].front_default} types={pokemon.types.map((type,idx)=>{ return(<div key={idx}>{type.type.name}</div>)}) } habilidad={pokemon.abilities.map((abilities,idx)=>{ return(<div key={idx}>{abilities.ability.name}</div>)})} />}
            
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;
