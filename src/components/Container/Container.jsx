import "./Container.css";
import { useHistory } from "react-router-dom";

function Container() {
  const history = useHistory();

  return (
    <div className="container">
        <section className="ozel-lezzetus">
          <h1>Özel<br/>Lezzetus</h1>
          <h4>Position:Absolute Acı Burger</h4>
          
          <button className="btn-2" onClick={() => history.push('/siparis')}>SİPARİŞ VER</button>
          
        </section>
          <div className="sag-kolon">
        <section className="hackathlon">
          <h3>Hackathlon<br/>Burger Menü</h3>
          
          <button className="btn-3" onClick={() => history.push('/siparis')}>SİPARİŞ VER</button>
          
        </section>
        <section className="npm">
        <h3><span className="renkli">Çoooook</span> hızlı<br/>npm gibi kurye</h3>
        
        <button className="btn-3" onClick={() => history.push('/siparis')}>SİPARİŞ VER</button>
        
        </section>
      </div>
    </div>
  );
}

export default Container;