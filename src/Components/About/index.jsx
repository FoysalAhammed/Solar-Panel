import React from 'react'
import "./About.css"
import { company__photo } from '../../assets'
import { FaCheck } from 'react-icons/fa6'
import { Link } from 'react-scroll'
const About = () => {
  return (
    <section className='about'>
        <div className="container">
            <div className="column company_photo">
                <img src={company__photo} alt="Solarix" />
            </div>
            <div className="column">
                <h3 className="sub_title">With 3+ years of experience</h3>
                <h1 className='sub_title'> <span className="g-text">Turning your Vision</span> into reality by focusing on basics</h1>
                <p className="text_muted description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem esse nisi
                     repellat harum inventore voluptate vero exercitationem reprehenderit qui molestias quod eaque ab velit 
                     consequatur, quas aspernatur neque nihil impedit?
                 </p>
                     {/* start group */}
                 <div className="group">
                    {/* start row */}
                    <div className="row">
                        <div className="icon_container"><FaCheck/></div>
                        <div className="details">
                            <p className="text_muted">Consultation</p>
                            <h3>Free</h3>
                        </div>
                    </div>
                   {/* end row */}
                    {/* start row */}
                    <div className="row">
                        <div className="icon_container"><FaCheck/></div>
                        <div className="details">
                            <p className="text_muted">Expert</p>
                            <h3>Engineer</h3>
                        </div>
                    </div>
                   {/* end row */}
                    {/* start row */}
                    <div className="row">
                        <div className="icon_container"><FaCheck/></div>
                        <div className="details">
                            <p className="text_muted">Customer</p>
                            <h3>Support</h3>
                        </div>
                    </div>
                   {/* end row */}
                    {/* start row */}
                    <div className="row">
                        <div className="icon_container"><FaCheck/></div>
                        <div className="details">
                            <p className="text_muted">Quality</p>
                            <h3>Service</h3>
                        </div>
                    </div>
                   {/* end row */}
                 </div>
                     {/* end group */}
                     <div className="buttons_container">
                        <Link to='project' smooth={true} className='btn'>Explore</Link>
                        <Link to='contact' smooth={true} className='btn btn_primary'>Get a quote</Link>
                     </div>
            </div>
        </div>
    </section>
  )
}

export default About;