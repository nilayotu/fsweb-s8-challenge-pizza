import "./OrderPage.css";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function OrderPage(props) {

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
      size: document.querySelector('input[name="size"]:checked')?.nextSibling?.textContent?.trim() || "Seçilmedi",
      dough: document.querySelector('select')?.value || "Seçilmedi",
      ingredients: selectedIngredients,
      quantity,
      note: e.target.querySelector('input[type="text"]').value,
      totalPrice: Math.round(totalPrice * 100) / 100
    };

    props.history.push("/ozet", orderData);
    };

    return (
      <div>
      <header className="order-header"><img src="images/iteration-1-images/logo.svg"/></header>
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

        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <label className="label">Boyut Seç</label>
            <div className="options">
              <label><input type="radio" name="size" /> Küçük</label>
              <label><input type="radio" name="size" /> Orta</label>
              <label><input type="radio" name="size" /> Büyük</label>
            </div>
          </div>

          <div className="form-section">
            <label className="label">Hamur Seç <span className="required">*</span></label>
            <select>
              <option value="">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="normal">Normal</option>
              <option value="kalin">Kalın</option>
            </select>
          </div>

          <div className="form-section">
            <label className="label">Ek Malzemeler</label>
            <p className="subtext">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="ingredient-list">
                {ingredients.map((item, index) => (
                    <label key={index} style={{ display: 'block', marginBottom: '6px' }}>
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
                <p style={{ color: 'red' }}>En az 4 malzeme seçmelisiniz.</p>
              )}
            </div>
          </div>

          <div className="form-section">
            <label className="label">Sipariş Notu</label>
            <input type="text" placeholder="Siparişine eklemek istediğin bir not var mı?" />
          </div>

          <div className="form-bottom">
            <div className="quantity-box">
              <button type="button" onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button type="button" onClick={increaseQuantity}>+</button>
            </div>

            <div className="summary" style={{ marginTop: '20px' }}>
        <p>Seçimler <span>{extraCost}₺</span></p>
        <p className="total">Toplam <span>{Math.round(totalPrice * 100) / 100}₺</span></p>
      </div>
    </div>
          <button className="submit-btn" type="submit" disabled={!isIngredientCountValid}>SİPARİŞ VER</button>
        </form>
      </div>
     </div>
     </div>
    );
  }
  
export default withRouter(OrderPage);