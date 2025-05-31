import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import "./OrderSummary.css";

function OrderSummary(props) {
    const [order, setOrder] = useState(null);
    useEffect(() => {
    const data = props.location.state;

    if (data) {
      const postOrder = async () => {
        try {
          const res = await axios.post("https://reqres.in/api/pizza", data, {
            headers: {
              "x-api-key": "reqres-free-v1"
            }
          });
          console.log("Sunucu yanıtı:", res.data);
          setOrder(data);
        } catch (err) {
          console.error("API hatası:", err);
        }
      };

      postOrder();
    }
  }, [props.location.state]);

    if (!order) return <p>Yükleniyor...</p>;

    
return (
    <div className="order-page">
      <header className="order-header">
        <img src="/images/iteration-1-images/logo.svg" alt="logo" />
      </header>
      <h4 className="subtitle" style={{fontWeight: "lighter", fontFamily: "satisfy", fontSize: "32px"}}>lezzetin yolda</h4>
      <h1 className="title" style={{fontWeight: "lighter", fontFamily: "barlow", fontSize: "96px"}}>SİPARİŞ ALINDI</h1>
      <hr className="divider" />

      <p>Ad Soyad: <strong>{order.name}</strong></p>
      <p>Sipariş Notu: <strong>{order.note || "Not eklenmemiş."}</strong></p>

      <hr className="divider" />
      <div className="summary-container">
        <h3 style={{fontFamily: "barlow", fontSize: "1.6rem", fontWeight: "500"}}>Position Absolute Acı Pizza</h3>
        <p>Boyut: <strong>{order.size}</strong></p>
        <p>Hamur: <strong>{order.dough}</strong></p>
        <p>Ek Malzemeler: {
          order.ingredients.map((i, index) => (
            <span key={index} style={{ fontWeight: "bolder" }}>
              {i}{index < order.ingredients.length - 1 ? ", " : ""}
            </span>
          ))
        }</p>

        <div className="summary-box">
          <p><strong style={{fontSize: "1.2rem", fontWeight: "700"}}>Sipariş Toplamı</strong></p>
          <div className="price-line">
            <span style={{fontWeight: "500"}}>Seçimler</span>
            <span style={{fontWeight: "500"}}>{(order.extraCost || 0).toFixed(2)}₺</span>
          </div>
          <div className="price-line">
            <span style={{fontWeight: "500"}}>Toplam</span>
            <span style={{fontWeight: "500"}}>{(order.totalPrice || 0).toFixed(2)}₺</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderSummary;