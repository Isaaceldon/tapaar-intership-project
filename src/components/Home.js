import React from "react";
import Services from '../components/Services';
import Projects from '../components/Projects';
import '../css/home.css'
export default function Home() {
  return (
    <main>
      <section className="presentation w-100  border-2"></section>

      <section className="services my-5 text-center">
      <h5>Our Best Service</h5>
        <h2>WHAT WE ARE DOING</h2>
        <div className="row container m-auto w-75">
        <Services/>
        </div>
       
      </section>

      <section className="projects my-5 text-center">
      <h5>We do for world</h5>
        <h2>OUR LATEST PROJECTS</h2>
        <div className="row container m-auto w-75">
        <Projects/>
        </div>
       
      </section>
    </main>
  );
}
