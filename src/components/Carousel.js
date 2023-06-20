import React from 'react'

export default function Carousel() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectfit:"contain !important"}}>
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption'> 
        <div className="input-group">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary">search</button>
</div>
</div>
          <div className="carousel-item active">
            <img src="http://source.unsplash.com/random/900x700/?burger" className="d-block w-100" style={{filter :"brightness(30%)"}} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="http://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" style={{filter :"brightness(30%)"}} alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="http://source.unsplash.com/random/900x700/?sandwich" className="d-block w-100" style={{filter :"brightness(30%)"}} alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
</>
  )
}
