import "./Footer.css";

function Footer() {

  return (<>
    <footer className="site-footer">
      <div className="footer-column">
        <img className="logo-footer" src="images/iteration-2-images/footer/logo-footer.svg"/>
        <nav className="contact">
          <a><img src="images/iteration-2-images/footer/icons/icon-1.png"/>341 Londonderry Road,<br/>Istanbul Türkiye</a>
          <a><img src="images/iteration-2-images/footer/icons/icon-2.png"/>aciktim@teknolojikyemekler.com</a>
          <a><img src="images/iteration-2-images/footer/icons/icon-3.png"/>+90 216 123 45 67</a>
        </nav>
      </div>
      <div className="footer-column">
        <h4>Hot Menu</h4>
        <a className="hot-menu" href="terminal-pizza.html/">Terminal Pizza</a>
        <a className="hot-menu" href="hackathlon-pizza.html/">5 Kişilik Hackathlon Pizza</a>
        <a className="hot-menu" href="tavuklu-pizza.html/">useEffect Tavuklu Pizza</a>
        <a className="hot-menu" href="console-frosty.html/">Beyaz Console Frosty</a>
        <a className="hot-menu" href="mutlu-burger.html/">Testler Geçti Mutlu Burger</a>
        <a className="hot-menu" href="aci-burger.html/">Position Absolute Acı Burger</a>
      </div>
      <div className="footer-column">
        <h4>Instagram</h4>
        <div className="instagram-grid">
          <img src="images/iteration-2-images/footer/insta/li-0.png"/>
          <img src="images/iteration-2-images/footer/insta/li-1.png"/>
          <img src="images/iteration-2-images/footer/insta/li-2.png"/>
          <img src="images/iteration-2-images/footer/insta/li-3.png"/>
          <img src="images/iteration-2-images/footer/insta/li-4.png"/>
          <img src="images/iteration-2-images/footer/insta/li-5.png"/>
        </div>
      </div>
    </footer>
    <div className="footer-bottom">
      <p className="copyright">©2023 Teknolojik Yemekler.</p> 
      <i className="fa-brands fa-twitter"/>
    </div>
    </>
  );
}

export default Footer;