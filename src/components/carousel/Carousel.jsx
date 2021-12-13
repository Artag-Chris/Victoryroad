import React from 'react'
import ima1 from "../img/may.jpg"
import ima2 from "../img/ima1.png"
import ima3 from "../img/ima3.png"
import "./style.css"

function Carousel() {
    return (
        <div className="container ">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active claseART ">
      <img src={ima1} className="d-block w-100 img-fluid h-100 claseART" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="title">Competitive Pokemon </h5>
        <p className='text' >The Video Game Championships (VGC) is a yearly tournament, created by The Pokemon Company International in order to give video game players a large-scale ingame competition, similar to what they have already for the Trading Card Game. </p>
      </div>
    </div>
    <div className="carousel-item ">
      <img src={ima2} className="d-block w-100 img-fluid h-100 claseART" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="title">Pokémon breeding</h5>
        <p className='text'>From Generation II onward, Pokémon can be bred by leaving two compatible Pokémon at the Pokémon Day Care (that takes two Pokémon) or the Pokémon Nursery.

Two Pokémon are compatible if they are of the same species (or share at least one Egg Group) and are of opposite genders. Alternatively, breeding is usually still possible as long as one of them is Ditto, even if the other parent is gender unknown (such as Magnemite), and in fact, gender-unknown Pokémon can breed only with Ditto. Pokémon in the Undiscovered egg group cannot breed in any way whatsoever, and Ditto cannot breed with itself.</p>
      </div>
    </div>
    <div className="carousel-item claseART">
      <img src={ima3} className="d-block w-100 img-fluid h-100 claseART" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="title">Nessa the best PokeGirl</h5>
        <p className='text'>Nessa is a tall, slender black girl with long blue and black striped hair and blue eyes. She wears a gym uniform consisting of a white crop top and shorts with blue and orange details as well as a number 049 on it.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel
