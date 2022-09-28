import { Fragment } from "react";

import pagebreak from "./assets/golden.jpg";
import classes from "./app.module.css";
import Tratos from "./components/Deals/Tratos";

function AppE() {
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
        <Tratos/>
      </main>
      <Fragment>
        <img className={classes.img} src={pagebreak} alt="page break" />
      </Fragment>
  </>
  );
}

export default AppE;