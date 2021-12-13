import React from 'react'
import { FetchURL } from "../fetch/FetchURL"
import "./style.css";
import Modal2 from "../modal/Modal2"



function CardPoke({ url }) {
    const estado = FetchURL(url)
    const { cargando, data } = estado
    return (
        <div className="container-fluid w-100 row">
            {
                cargando
                    ?
                    <h1>Cargando...</h1>
                    :
                    <div className="card mia3 col m-auto" style={{ width: "14rem" }} data-bs-toggle="modal" data-bs-target={`#id${data.id} `} >
                        <div className="card-header col">
                            <h5 className="card-title text-justify col" >{data.id} </h5>
                        </div>
                        <div className="card-body row">
                            <img src={data.sprites.front_default} alt="pokemon" className="img-fluid col" />
                        </div>
                        <div className="card-footer row">
                            <p className="card-text text-capitalize col">{data.forms[0].name} </p>
                            <p className="card-text text-capitalize col">Type : {data.types.map((type,idx)=>{ return(<div key={idx}>{type.type.name}</div>)})} </p>
                            
                        </div>
                        <Modal2 id={`id${data.id}`} titulo={data.name} contenido={data.sprites.other["official-artwork"].front_default} tipo1={data.types.map((type,idx)=>{ return(<div key={idx}>{type.type.name}</div>)})} habilidad={data.abilities.map((abilities,idx)=>{ return(<div key={idx}>{abilities.ability.name}</div>)})} />

                    </div>

            }
        </div>
    )
}

export default CardPoke
