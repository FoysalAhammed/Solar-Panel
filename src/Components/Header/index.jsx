import React from 'react'
import { solar__skyscraper } from '../../assets'
import {Link} from "react-scroll"
import "./Header.css"
import SolarSystem from '../SolarSystem'
const Header = () => {
  return (
    <header className='header'>
      <div className="system_wrapper">
           <SolarSystem/>
      </div>
      <div className="container full_height blur-effect">
        <div className="column">
          <h1 className="title">Revolutionary Home <span className='g-text'>Solar System</span></h1>
          <p className="text_muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi omnis recusandae nisi illo ipsum rem ratione explicabo! Eum doloribus nemo, ullam quis cumque obcaecati rem voluptas reiciendis ratione aut asperiores?</p>
           <div className="buttons_container">
            <Link to="services" className="btn">Our Services</Link>
            <Link to="contact" className="btn btn_primary">Contact Us</Link>
           </div>
        </div>
        <div className="column">
          <div className="image_container primary-effect">
             <img src={solar__skyscraper} alt="Solarix" />
             </div>
        </div>
      </div>
    </header>
  )
}

export default Header