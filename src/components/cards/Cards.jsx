import React from 'react'
import steven from "../img/steven.jpg"
import cynthia from "../img/cynthia.jpg"
import red from "../img/red3.jpg"
import iris from "../img/iris2.jpg"
import leon from "../img/leon.jpg"
import lance from "../img/lance.jpg"
import diantha from "../img/dianta.png"
import blue from "../img/blue3.jpg"
import "./style.css"
import Modal1 from '../modal/Modal1'

const champs = [{
  id: 1,
  name: "Steven",
  text: "Steven is the son of Mr. Stone. the creator of the PokéNav and the President of the Devon Corporation. He is the Pokémon League Champion in Hoenn",
  url: "https://www.youtube.com/embed/7uu_uhfbK0w",
  img: steven
}, {
  id: 2,
  name: "Cynthia",
  text: "Cynthia is a powerful Pokémon Trainer and the Champion of the Sinnoh region where Professor Carolina, Cynthia's grandmother, runs the Pokémon Research Lab in Celestic Town.",
  url: "https://www.youtube.com/embed/DeRPE-DyISA",
  img: cynthia
}, {
  id: 3,
  name: "Red",
  text: "Red has been referred to as 'the Hero of Kanto', the 'Ultimate Pokémon Trainer', and the 'Pokémon Champion'. Red is a very serious person, especially when he battles. This can be seen easily because he seldom smiles. ",
  url: "https://www.youtube.com/embed/HVgCnNe8opM",
  img: red
}, {
  id: 4,
  name: "Iris",
  text: "Iris will go from being a gym leader to become the new champion of the Pokémon League. Her team will no longer be made up of only dragon-type Pokémon.",
  url: "https://www.youtube.com/embed/ywOqB3CYLbQ",
  img: iris
}, {
  id: 5,
  name: "Leon",
  text: "is the champion of the Pokémon League of the Galar region. He is quite an admired young man in Galar as he has never been defeated in an official Pokémon battle.",
  url: "https://www.youtube.com/embed/NwQ6AtCpSok",
  img: leon
}, {
  id: 6,
  name: "Lance",
  text: "is a dragon-type Pokémon master. He was the fourth and last member of the Kanto High Command, then became the champion of the Johto Pokémon League.",
  url: "https://www.youtube.com/embed/EHPhfreSHi0",
  img: lance
}, {
  id: 7,
  name: "Diantha",
  text: "is a very famous actress adored by the inhabitants of Kalos. She is also the champion of the Pokémon League. She is interested in trainers who show potential",
  url: "https://www.youtube.com/embed/5G77Yo5Nynw",
  img: diantha
}, {
  id: 8,
  name: "Blue",
  text: "He is the grandson of Professor Oak and Red's rival, he was Kanto Pokémon League Champion once for a short time He is notable for being cocky and arrogant.",
  url: "https://www.youtube.com/embed/dj39-hi2NAM",
  img: blue
}
]
function Cards() {
   

    const Champions = champs.map(champ => (

    <div key={champ.id} className="card m-3 col-4 container-fluid d-flex justify-content-evenly shadowCard" style={{ width: '18rem' }}>
      <div className="w-auto h-auto row m-auto " ></div>
      <div className=" card row-12 container-fluid  " >
        <img src={champ.img} className=" img-fluid col  " alt="Champion" />
      </div>
      <div className="card-body col m-3 w-75">
        <h5 className="card-title row">{champ.name} </h5>
        <p className="card-text row">{champ.text} </p>
        <a className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${champ.id} `}>Video</a>
        <Modal1 id={`id${champ.id}`} url={champ.url} name={champ.name} />
      </div>
    </div>
  ))
  return (
    <div className="container-fluid row  d-flex justify-content-center w-auto">{Champions} </div>
  )
}

export default Cards
