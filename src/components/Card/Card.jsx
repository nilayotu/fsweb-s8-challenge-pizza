import "./Card.css";

function Card() {

  return (
    <div className="card-container">
        <div className="card">
          <img src="images/iteration-2-images/pictures/food-1.png" alt="Terminal pizza"/>
          <h3>Terminal Pizza</h3>
          <div className="card-info">
            <h6 className="rate">4.9</h6>
            <h6 className="comment">(200)</h6>
            <h6 className="price">60₺</h6>
          </div>
        </div>
        <div className="card">
          <img src="images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza"/>
          <h3>Position Absolute Acı Pizza</h3>
          <div className="card-info">
            <h6 className="rate">4.9</h6>
            <h6 className="comment">(200)</h6>
            <h6 className="price">60₺</h6>
          </div>
        </div>
        <div className="card">
          <img src="images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger"/>
          <h3>useEffect Tavuklu Burger</h3>
          <div className="card-info">
            <h6 className="rate">4.9</h6>
            <h6 className="comment">(200)</h6>
            <h6 className="price">60₺</h6>
          </div>
        </div>
      </div>
  );
}

export default Card;