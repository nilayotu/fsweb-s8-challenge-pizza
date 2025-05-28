import React, { useEffect, useState } from "react";
import axios from "axios";

function OrderSummary(props) {
    const [order, setOrder] = useState(null);
    useEffect(() => {
    const data = props.location.state;

    if (data) {
      axios.post("https://reqres.in/api/pizza", data)
        .then((res) => {
          console.log("Sunucu yanıtı:", res.data);
        })
        .catch((err) => {
          console.error("API hatası:", err);
        });

      setOrder(data);
    }
  }, [props.location.state]);
  if (!order) return <p>Yükleniyor...</p>;

  return (
    <div className="summary-container">
      <h2>Sipariş Özeti</h2>
      <p><strong>Pizza:</strong> Position Absolute Acı Pizza</p>
      <p><strong>Boyut:</strong> {order.size}</p>
      <p><strong>Hamur:</strong> {order.dough}</p>
      <p><strong>Ek Malzemeler:</strong> {order.ingredients.join(", ")}</p>
      <p><strong>Adet:</strong> {order.quantity}</p>
      <p><strong>Not:</strong> {order.note || "Yok"}</p>
      <p><strong>Toplam Tutar:</strong> {order.totalPrice}₺</p>
    </div>
  );
}

export default OrderSummary;