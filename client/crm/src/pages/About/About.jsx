import React from 'react'
import {Link} from "react-router-dom"

function About() {

  return (
    <>
      <h1>Hello! My name is Alexey Kyselov and I`m a junior FullStack-developer</h1>
      <p style={{fontWeight: "600"}}>My contacts are below</p>
      <p style={{fontStyle: "italic"}}>LinkedIn: <Link to="https://www.linkedin.com/in/oleksii-kyseliov-0786b6183/" target="_blank" >https://www.linkedin.com/in/oleksii-kyseliov-0786b6183/</Link></p>
      <p style={{fontStyle: "italic"}}>GitHub: <Link to="https://github.com/CyberZayka/crm_test" target="_blank">https://github.com/CyberZayka/crm_test</Link></p>
    </>
  );
}

export default About;