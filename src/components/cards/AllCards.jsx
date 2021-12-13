import React from 'react'
import CardPoke from './CardPoke'
import "./style.css"

function AllCards({results}) {
    return (
        <div className="container " >
            <ul className="cards mia " >
                {
                    results.map(pokemon=>(
                        <li className="card-item mia2" key={pokemon.name} >
                            <CardPoke url={pokemon.url} />
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default AllCards
