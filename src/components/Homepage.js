import Header from './Header'
import avatar from "../images/avatar.png"
import './Homepage.css'
function Homepage()
{
 return (
    <>
    <Header />
    <main>
   <section>
      <h1 className="heading">Hello I'm Sanjana Sethiya  </h1>
      <h3>Born and bought up in Inda ,currently based in Coventry. Environmentalist and food lover.</h3>     
   </section>
   <div className="avatar">
      <img src={avatar} alt="avatar"></img>
      
   </div>
    
   </main>
    </>
 )
}
export default Homepage