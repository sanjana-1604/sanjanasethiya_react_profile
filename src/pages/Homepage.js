import Header from '../components/Header'
import avatar from "../images/avatar.png"
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import email from '../images/email.png'
import resume from '../images/CV.png'
import './Homepage.css'
import { NavLink } from 'react-router-dom'
function Homepage()
{
 return (
    <>
    <Header />
    <main>
   <section>
      <h1 className="heading">Hello I'm Sanjana Sethiya  </h1>
      <h3>Born and bought up in Inda ,currently based in Coventry. Environmentalist and food lover.</h3>
      <div className="socialmedia">
   <NavLink to="https://www.linkedin.com/in/sanjanasethiya-webdeveloper"><img src={linkedin} alt="avatar" /></NavLink>
   <NavLink to="https://github.com/sanjana-1604"><img src={github} alt="avatar" /></NavLink>
   <NavLink to ="mailto:porwal.sanjana@gmail.com"><img src={email} alt="avatar" /></NavLink>
   <NavLink><img src={resume} alt="avatar" /></NavLink>
  
   </div>     
   </section>
   <div className="avatar">
      <img src={avatar} alt="avatar"></img>
      
   </div>
  
    
   </main>
  
    </>
 )
}
export default Homepage