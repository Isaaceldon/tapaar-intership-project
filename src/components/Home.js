import React from "react";
import { NavLink } from "react-router-dom";
import Services from "../components/Services";
import Projects from "../components/Projects";

import "../css/home.css";
import back_image from "../img/contactus-banner.png";
import image2 from "../img/categories.jpg";

export default function Home() {
  return (
    <main>
      <section className="presentation  border-2">
        <img src={back_image} alt="" />
      </section>

      <section className="business my-5">
        <div className="row container div-business w-75 m-auto">
          <div className="col-md-6 div-business-image">
            <img className="business-image" src={image2} />
          </div>
          <div className="col-md-6 div-business-texte">
            <h3 className="mb-3">
              Dedicate yourself to the in-things that really matter a Start
              business end
            </h3>
            <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer </p>

            <ul className="business-ul">
                <li><span className="business-inactive"><i className="fas fa-check-circle"></i></span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</li>
                <li><span className="business-active"><i className="fas fa-check-circle"></i></span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</li>
                <li><span className="business-inactive"><i className="fas fa-check-circle"></i></span>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</li>
            </ul>

            <button type="submit" className="button-discover">Discover more</button>
          </div>


         
        </div>
      </section>

      <section className="services my-5 text-center m-auto">
        <h5>Our Best Service</h5>
        <h2>WHAT WE ARE DOING</h2>
        <div className="row container m-auto w-75">
          <Services />
        </div>
      </section>

     

      <section className="projects my-5 text-center m-auto">
        <h5>We do for world</h5>
        <h2>OUR LATEST PROJECTS</h2>
        <div className="div-project container w-50 m-auto rounded-3">
          <ul className="d-flex filter-project">
            <NavLink to="#">
              <li className="active">All</li>
            </NavLink>
            <NavLink to="#">
              <li>Web Design</li>
            </NavLink>
            <NavLink to="#">
              <li>Blog Writer</li>
            </NavLink>
            <NavLink to="#">
              <li>Graphic Design</li>
            </NavLink>
            <NavLink to="#">
              <li>Seo Marketing</li>
            </NavLink>
          </ul>
        </div>
        <div className="row container m-auto w-75">
          <Projects />
        </div>
      </section>
    </main>
  );
}
