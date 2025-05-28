import "./Header.css";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

    return (
    
    <header className="background">
    <img className="logo" src="images/iteration-1-images/logo.svg" />
    <h2 className="firsat">fırsatı kaçırma</h2>
    <h1 className="first">KOD ACIKTIRIR<br/>PIZZA, DOYURUR</h1>

    <button className="btn" onClick={() => history.push('/siparis')}>ACIKTIM</button>

    </header>
  );
  }
  
  export default Header;