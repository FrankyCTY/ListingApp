import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import useRouter from "../hooks/useRouter.hooks";
import ProductListPage from "../Pages/ProductList/ProductList.Page";
import ProductDetailsPage from "../Pages/ProductDetails/ProductDetails.Page";

const ProductRouter = () => {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("shop router fetch")
  //   // isLogged && dispatch(fetchApplicationsStart());
  //   dispatch(fetchApplicationsStart());
  // }, [dispatch]);

  const router = useRouter();

  return (
    <div className="products-page">
      <Switch>
        <Route
          exact
          path={`${router.matchPath}`}
        ><h1>hi</h1></Route>
        <Route
          exact
          path={`${router.matchPath}/:productType`} // etc. pork
        >{ProductListPage}</Route>
        <Route
          exact
          path={`${router.matchPath}/:productType/:productId`} // etc. :productId = 1 -> 豬肉雞軟骨餃子
        >{ProductDetailsPage}</Route>
      </Switch>
    </div>
  );
};

export default ProductRouter;