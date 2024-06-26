import React from 'react'
import "./Testimonial.css"
import Slider from 'react-slick'
import { testimonial } from '../../data'
import { FaStar } from 'react-icons/fa'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Testimonial = () => {
    const settings = {
        infinite:true,
        speed:500,
        slidesToShow:2,
        pauseOnHover:true,
        autoPlay:true,
        autoPlaySpeed:3000,
        responsive:[
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    }
  return (
    <div className='testimonial'> 
        <div className="container">
            <h1 className="title">Clients <span className="g-text">Testimonials</span></h1>
            <Slider className="clients_container" {...settings}>
                {
                    testimonial.map((list,index) => (
                       <React.Fragment key={index}>
                        <div className="stars_container">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        <p className="text_muted content">{list.review}</p>
                        <div className="user_row">
                            <div className="profile">
                                <img src={list.image} alt={list.name} />
                            </div>
                            <div className="details">
                                <h3 className="name">{list.name}</h3>
                                <small>CEO of behav</small>
                            </div>
                        </div>
                       </React.Fragment>
                    ))
                }
            </Slider>
        </div>
     </div>
  )
}

export default Testimonial