import './App.css'
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Container from "./components/Container/Container";
import Text from './components/Text/Text';
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import OrderPage from './components/OrderPage/OrderPage';
import OrderSummary from "./components/OrderSummary/OrderSummary";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Header />
      <Menu />
      <Container />
      <Text />
      <Button />
      <Card />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/siparis" component={OrderPage} />
        <Route path="/ozet" component={OrderSummary} />
      </Switch>
    </Router>
  );
}

export default App;