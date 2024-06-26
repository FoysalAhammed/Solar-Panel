import React, { useEffect, useState } from 'react'
import "./ProjectNavigation.css"
const ProjectNavigation = ({tabs,onChange}) => {
    const [active,setActive] = useState("All");
    useEffect(() => {
        onChange(active);
    },[active])
  return (
    <div className='project_navigation'>
        {
            tabs.map((name,index) => (
                <button 
                className={`${active === name ? "active" : ""}`}
                onClick={() => setActive(name)}
                key={index}
                >
                    {name}
                </button>
            ))
        }
    </div>
  )
}

export default ProjectNavigation