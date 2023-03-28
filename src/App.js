import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart/Cart.jsx';
import User from './components/User/User';
import { useState } from 'react';
import Gift from './components/Two-way-binding/Gift';
import UseEffect from './components/useEffect/UseEffect';
import Product from './components/CustomCheckbox/Product';



function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="App">
      <Cart isShow={true} />
      {
        isShow && <User />
      }
      <UseEffect />
      <Gift />
      <Product />
      <button onClick={() => setIsShow((prevState) => !prevState)}>
        Change isShow
      </button>
    </div>
  );
}

export default App;
