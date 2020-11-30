import React from "react";
import {Card, Button} from "react-bootstrap";
import useRouter from "../../hooks/useRouter.hooks";

const ProductListContainer = ({products}) => {
  const router = useRouter();

  return <div className="grid gap-4 grid-cols-2 justify-items-center mt-32">
    {products.map((product) => <Card key={product.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.imgSrc} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      {product.intro}
    </Card.Text>
    <Button variant="primary" onClick={() => router.push(`/shop/${product.route}`)}>Product Details</Button>
  </Card.Body>
</Card>)}
  </div>
}

export default ProductListContainer;