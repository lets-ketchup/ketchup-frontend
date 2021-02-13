// pages/About.js

import React from "react";
import logo from '../components/logo.jpeg';

const About = () => (
  <div>
    <h1 className="title is-1">This is the About Page</h1>
    <div>
      <img src={logo}/>
      <div>We are ketchup</div>
    </div>
  </div>
);

export default About;