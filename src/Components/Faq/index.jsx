import React, { useState } from 'react'
import "./Faq.css"
import {faq} from "../../data"
import { FaPlus, FaTimes } from 'react-icons/fa'
const Faq = () => {
    const [activeIndex,setActiveIndex] = useState(-1)
  return (
    <section className='faq'>
        <div className="container">
            <h1 className="title">
            Frequently <span className="g-text">Asked Question</span>
               <div className="faq_list">
                {
                    faq.map((list,index) => (
                        <div className={`faq ${activeIndex === index ? "active" : ""}`}
                         key={index}
                         onClick={()=> {if (activeIndex=== index) {
                            return setActiveIndex(-1)
                         }
                         setActiveIndex(index)
                        }}
                         
                         >
                        
                            <div className="question">
                                <h3>{list.title}</h3>
                                {
                                    activeIndex === index ? <div className="icon_container"><FaTimes/></div> :
                                   <div className="icon_container"><FaPlus/></div>
                                }
                            </div>
                            <div className="answer">
                                <p className="text-muted">{list.description}</p>
                            </div>
                        </div>
                    ))
                }
               </div>
            </h1>
        </div>
    </section>
  )
}

export default Faq