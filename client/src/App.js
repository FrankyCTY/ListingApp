import React, {useEffect, useState} from "react";
import axios from "axios";
import Url from "./url";
import './App.css';
import './style/main.css';
import PixelSpinner from "./Components/Spinners/PixelSpinner/PixelSpinner.component";
import NavBarContainer from "./Containers/navBar/navBar.component";
import ProductListContainer from "./Containers/ProductList/ProductList.component";
import ProdDetailsPage from "./Pages/ProdDetailsPage/ProdDetails.page";

import { Switch, Route } from "react-router-dom";

function App() {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios({
        method: "GET",
        url: `${Url}/products`
      })

      const products = await res.data.data.products;
      console.log({products});
      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    // Suspense is only for lazy loading
    <React.Suspense 
          fallback={
            <PixelSpinner
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              size={2}
              animationDuration={800}
            />
          }
        >
          <NavBarContainer/>
          <Switch>
            <Route
              exact
              path="/"
            >
              <h1>Hello world</h1>
            </Route>         
            <Route
              exact
              path="/shop"
            >
              <ProductListContainer products={products}/>
            </Route>         
            <Route
              exact
              path="/shop/:productId"
            >
              <ProdDetailsPage />
            </Route>
            <Route path="">
              <h1>Not Found Page</h1>
            </Route>  
          </Switch>
    </React.Suspense>
  );
}

export default App;
