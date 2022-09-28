import { Fragment } from "react";
import Deals from "./components/Deals/Deals";
// import Cart from "./components/Cart/Cart";
// import CartProvider from "./store/CartProvider";
import pagebreak from "./assets/golden.jpg";
import classes from "./app.module.css";

function App() {
 // const [cartIsShown, setCartIsShown] = useState(false);

  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };

  // const hideCartHandler = () => {
  //   setCartIsShown(false);
  // };

  return (
         <>
      <main>
              <Deals />
      </main>
      <Fragment>
        <img className={classes.img} src={pagebreak} alt="page break" />
      </Fragment>
      </>
     );
}

export default App;
