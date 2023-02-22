import logo from "../images/logo.png";
import { NavLink } from "react-router-dom"
import Homepage from "../pages/Homepage"
function Header() {
  const styles = {
    header: {
      height: "10vh",
      width: "80vw",
      padding: "10px",
      margin: "10px",
      display: "flex",
      justifyContent: "space-around",     
      alignItems: "center",
    },

    img: {
        height: "80px",
        padding: "10px",
      
    },
    nav: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",       
        padding: "10px",
    },
    a:
    {
        paddingRight:"30px",
        fontWeight:"700",
        fontSize:"1.25rem",
        textDecoration: "none",
        color:"#25232d",
       
    },
  };
  return (
    <>
      <header style={styles.header}>
        <img style={styles.img} src={logo} alt="logo" onClick= {()=>{<Homepage />}}></img>
        <nav style={styles.nav}>
            <NavLink style={styles.a} to="/about" >About</NavLink>
            <NavLink style={styles.a} to="#">Resume</NavLink>
            <NavLink style={styles.a} to="#">Projects</NavLink>
            <NavLink style={styles.a} to="#">Contact</NavLink>
        </nav>
      </header>
    </>
  );
}
export default Header;
