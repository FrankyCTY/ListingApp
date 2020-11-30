import React from "react";
import useRouter from "../../hooks/useRouter.hooks";

const ProdDetailsPage = ({imgUrl, name, intro, createdAt}) => {

  const router = useRouter();

return <h1>{router.match.params.productId}</h1>
}

export default ProdDetailsPage;