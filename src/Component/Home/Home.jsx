import React, { useEffect } from 'react'
import './Home.css'
import banare2 from "../../Images/banare2.jpg"
import banare1 from "../../Images/banare1.jpeg"
import banare3 from "../../Images/banare3.jpeg"
import banare from "../../Images/banare.webp"
import Shop from '../Shop/Shop'
import TraindingCollection from '../TraindingColection/TraindingCollection'
import SeasonCollection from '../Seasoncollection/SeasonCollection'
import Limtedtime from '../Limtedtime/Limtedtime'

const Home = () => {
  useEffect(()=>{
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  },[])
  return (
 <>
 <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banare} class="d-block w-100" alt="..." style={{height:420}}/>
    </div>
    <div class="carousel-item ">
      <img src={banare1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={banare2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={banare3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<section style={{marginTop:50}}>
<Shop />
</section>
<section>
  <TraindingCollection />
</section>
<section>
  <SeasonCollection />
</section>
<section>
  <Limtedtime />
</section>
 </>
  )
}

export default Home