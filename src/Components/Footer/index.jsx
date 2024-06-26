import React from 'react'
import "./Footer.css";
import { footer } from '../../data';
import { Link } from 'react-scroll';
import Logo from "../Logo"
const Footer = () => {
  return (
    <footer className='footer'>
         <div className="container">
            <div className="row">
                {
                    footer.map((list,index)=>(
                        <div className="column" key={index}>
                            <h3 className="routes_name">{list.name}</h3>
                            <div className="routes_container">
                                {
                                    list.routes.map((route,i)=>(
                                        <Link to={route.id || "#"} className='route_item' key={i}>
                                            <p className="name">{route.name}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
                <div className="column">
                <Logo/>
                    <div className="newsletter">
                        <h3>Get Weekly Update</h3>
                        <div className="control_container">
                            <input type="email" placeholder='Enter Your Email Address' className="control" />
                            <button className="btn">Subscribe</button>
                        </div>
                          
                    </div>
                </div>
            </div>
         </div>
         <div className="copyright">
            <div className="container">
                <h3>Copyright &copy; All reserved -| 2024 </h3>
                <p className="text_muted">Built with love by Md Foysal Ahammed</p>
            </div>
         </div>
    </footer>
  )
}

export default Footer