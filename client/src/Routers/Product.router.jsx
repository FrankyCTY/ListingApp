import React, { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import useRouter from "../hooks/useRouter.hooks";
import ProductListPage from "../Pages/ProductList/ProductList.Page";

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
      </Switch>
    </div>
  );
};

export default ProductRouter;