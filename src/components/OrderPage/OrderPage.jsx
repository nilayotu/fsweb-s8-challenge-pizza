import "./OrderPage.css";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../Footer/Footer";

function OrderPage(props) {

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length > 0 && value.length < 3) {
      setError("En az 3 karakter giriniz.");
    } else {
      setError("");
    }
  };

    const basePrice = 85.50;
    const extraPrice = 5.00;

    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const ingredients = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan",
    "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Ananas", "Kabak"
  ];

  const handleIngredientChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      if (selectedIngredients.length < 10) {
        setSelectedIngredients([...selectedIngredients, value]);
      }
    } else {
      setSelectedIngredients(selectedIngredients.filter(item => item !== value));
    }
  };

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1)); 

  const extraCost = selectedIngredients.length * extraPrice;
  const totalPrice = (basePrice + extraCost) * quantity ;
  const isIngredientCountValid = selectedIngredients.length >= 4;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isIngredientCountValid) return;

    const orderData = {
      name,
      note,
      size: document.querySelector('input[name="size"]:checked')?.nextSibling?.textContent?.trim() || "Seçilmedi",
      dough: document.querySelector('select')?.value || "Seçilmedi",
      ingredients: selectedIngredients,
      quantity,
      extraCost: Math.round(extraCost * 100) / 100,
      totalPrice: Math.round(totalPrice * 100) / 100
    };

    props.history.push("/ozet", orderData);
    };

    return (
      <div style={{ backgroundColor: "white" }}>
      <div style={{ backgroundColor: "white" }}>
      <header className="order-header"><img src="images/iteration-1-images/logo.svg"/></header>
      <div className="second-header">
        <div className="order-container">
          <img className="form-banner" src="./images/iteration-2-images/pictures/form-banner.png" />
         <div className="order-content">
        <p className="breadcrumb">Anasayfa - <span className="red">Sipariş Oluştur</span></p>

        <h2 className="pizza-title">Position Absolute Acı Pizza</h2>

        <div className="price-review">
          <span className="price">{basePrice}₺</span>
          <span className="rating">4.9</span>
          <span className="review-count">(200)</span>
        </div>

        <p className="description">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
          Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde
          bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
          İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>
        </div>
        </div>
        </div>
        <div className="order-form-container">
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-row">
          <div className="form-section">
            <label className="label">Boyut Seç <span className="required">*</span></label>
            <div className="options">
    <label className="radio-box">
      <input type="radio" name="size" value="S" />
      <span>S</span>
    </label>
    <label className="radio-box">
      <input type="radio" name="size" value="M" />
      <span>M</span>
    </label>
    <label className="radio-box">
      <input type="radio" name="size" value="L" />
      <span>L</span>
    </label>
  </div>
          </div>
          <div className="top-summary">
          <div className="form-section">
            <label className="label">Hamur Seç <span className="required">*</span></label>
            <select>
              <option value="" style={{color: " #292929"}}>Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Kalın</option>
            </select>
          </div>
          </div>
          <div className="form-section">
            <label className="label">Ek Malzemeler</label>
            <p className="subtext">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="ingredient-list">
                {ingredients.map((item, index) => (
                    <label key={index} style={{ display: 'block', marginBottom: '6px' }}>
                      <span className="checkmark"></span>
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleIngredientChange}
                    checked={selectedIngredients.includes(item)}
                    disabled={
                      !selectedIngredients.includes(item) &&
                      selectedIngredients.length >= 10
                    }
                  />
                  {" "}{item}
          </label>
          ))}
          {!isIngredientCountValid && (
                <p style={{ color: '#CE2829' }}>En az 4 malzeme seçmelisiniz.</p>
              )}
            </div>
          </div>
                <div className="name-section">
              <label className="label" htmlFor="comment">Ad Soyad</label>
              <input
              id="comment"
                type="text"
                placeholder="Sipariş oluşturan kişinin ad soyadını giriniz."
                value={name}
                onChange={handleChange}
                minLength={3}
                required
                className={error ? "input-error" : ""}
              />
              {error && <p className="error-message">{error}</p>}
            </div>
          <div className="form-section">
            <label htmlFor="note" className="label">Sipariş Notu</label>
            <input 
            id="note"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Siparişine eklemek istediğin bir not var mı?" 
          />
          </div>
          </div>
          <div className="form-bottom">
            <div className="quantity-box">
              <button type="button" onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button type="button" onClick={increaseQuantity}>+</button>
            </div>
              </div>
            <div className="summary">
              <h3 style={{ color: "#292929"}}>Sipariş Toplamı</h3>
              <h4 style={{ color: "#292929"}}>Seçimler<span>{extraCost}₺</span></h4>
              <h4 className="total" style={{ color: "#CE2829"}}>Toplam <span>{Math.round(totalPrice * 100) / 100}₺</span></h4>
              <button className="submit-btn" type="submit" disabled={!isIngredientCountValid}>SİPARİŞ VER</button>
            </div> 
        </form>
        </div>
     <Footer />
     </div>
     </div>
    );
  }
export default withRouter(OrderPage);