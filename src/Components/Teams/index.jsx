import React from 'react'
import "./Teams.css"
import{teams} from "../../data"
import { Link } from 'react-scroll'
const Teams = () => {
  return (
    <section className='team'>
         <div className="container">
            <h1 className="title"> Our <span className="g-text">Teams</span> </h1>
            <p className="text_muted description">
                Meet our diverse teams of creative minds, 
                and strategists - the driving force behind 
                every project's success
            </p>
            <div className="team_container">
                {
                  teams.map((team,index) => (
                    <div className="team_card" key={index}>
                        <div className="profile_container">
                            <img src={team.profile} alt={team.name} />
                        </div>
                        <div className="details">
                            <h3 className="name">{team.name}</h3>
                            <p className="text_muted">{team.title}</p>
                        </div>
                        <div className="social_container">
                            {
                                team.social.map((item,i) =>(
                                    <Link
                                     to={item.url || ""}
                                     target='_blank'
                                     className='icon_container'
                                     key={i}

                                    >{item.icon}</Link>
                                ))
                            }
                        </div>
                    </div>
                  ))
 
                }
            </div>
         </div>
    </section>
  )
}

export default Teams