import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {incCounter} from "./actions";
import Header from "./components/header/Header";
import ProductList from "./components/product-list/ProductList";
import Card from "./components/card/Card";

function App() {
  const counter = useSelector((state) => state.counter);
  const isCardOpen = useSelector(({isCardOpen}) => isCardOpen);

  const dispatch = useDispatch();
  return (
    <div className='app-container'>
      <button onClick={()=>dispatch(incCounter())}>counter{counter}</button>
      <Header/>
      <ProductList/>
      {isCardOpen &&<Card/>}
    </div>

  )
}

export default App;
