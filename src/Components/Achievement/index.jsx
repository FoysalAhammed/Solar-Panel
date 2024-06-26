import React, { useState, useRef } from "react";
import { FaAward, FaDiagramProject, FaUsersLine } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import Odometer from "react-odometerjs";
import "./Achievement.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Achievement = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [teams, setTeams] = useState(0);
  const [award, setAward] = useState(0);
  const container = useRef(null);
  const updateData = () => {
    const timeout = setTimeout(() => {
      setClients(120);
      setProjects(150);
      setTeams(44);
      setAward(89);
    }, 500);
    return () => clearInterval(timeout);
  };
  const resetData = () => {
    setClients(0);
    setProjects(0);
    setTeams(0);
    setAward(0);
  };
  useGSAP(() =>{
    const timeline = gsap.timeline({
      scrollTrigger:{
        trigger:container.current,
        start:'top bottom',
        end:'bottom top',
        scrub:4,
        onEnter:updateData,
        onLeaveBack:resetData
      }
    });
    return () => timeline.revert();

  },{scope:container})
  return (
    <div className="achievement_container" ref={container}>
      <div className="container">
        {/* start achievement */}

        <div className="achievement">
          <div className="icon_container">
            <FaUsersLine />
          </div>
          <div className="details">
            <div className="row">
              <Odometer value={clients} className="title" />
              <h1 className="title">K</h1>
            </div>
            <small className="text_muted">Happy Customers</small>
          </div>
        </div>
        {/* end achievement */}

        {/* start achievement */}
        <div className="achievement">
          <div className="icon_container">
            <FaDiagramProject />
          </div>
          <div className="details">
            <div className="row">
              <Odometer value={projects} className="title" />
              <h1 className="title">+</h1>
            </div>
            <small className="text_muted">Completed Projects</small>
          </div>
        </div>
        {/* end achievement */}

        {/* start achievement */}
        <div className="achievement">
          <div className="icon_container">
            <GiTeamIdea />
          </div>
          <div className="details">
            <div className="row">
              <Odometer value={teams} className="title" />
              <h1 className="title">+</h1>
            </div>
            <small className="text_muted">Expert Workers</small>
          </div>
        </div>
        {/* end achievement */}

        {/* start achievement */}
        <div className="achievement">
          <div className="icon_container">
            <FaAward />
          </div>
          <div className="details">
            <div className="row">
              <Odometer value={award} className="title" />
              <h1 className="title">+</h1>
            </div>
            <small className="text_muted">Awards winning</small>
          </div>
        </div>
        {/* end achievement */}
      </div>
    </div>
  );
};

export default Achievement;
