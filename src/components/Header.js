import logo from "../images/logo.png";
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
        cursor: 'pointer',
    },
  };
  return (
    <>
      <header style={styles.header}>
        <img style={styles.img} src={logo} alt="logo"></img>
        <nav style={styles.nav}>
            <a style={styles.a} href="#" >About</a>
            <a style={styles.a} href="#">Resume</a>
            <a style={styles.a} href="#">Projects</a>
            <a style={styles.a} href="#">Contact</a>
        </nav>
      </header>
    </>
  );
}
export default Header;
