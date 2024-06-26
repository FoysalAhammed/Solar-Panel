import React from 'react'
import {services} from "../../data"
import { Link } from 'react-scroll'
import "./Services.css"
const Services = () => {
  return (
    <section className='services'>
        <div className="container">
            <h1 className="title">Our <span className="g-text">Services</span></h1>
            <h3 className="sub_title text_muted">We are traiblazers in the realm of renewable energy.</h3>
            <div className="services_container">
                {
                    services.map((service,index) =>(
                        <div className="service" key={index}>
                            <div className='picture'>
                                <img src={service.image} alt={service.name} />
                            </div>
                            <div className="details">
                                <h3>{service.name}</h3>
                                <p className="text_muted description">{service.description}</p>
                            </div>
                            <div className="buttons_container">
                                <button className="btn">Read More</button>
                                <Link to='contact' className='btn btn_primary'>Get Started</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services