import {React, useEffect, useState} from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchProduct = async () =>{
      const {data} = await axios.get('/api/products');
      console.log(data);
      setProducts(data);
    }
    fetchProduct();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product.name}</h3> */}
            <Product product={products}/>
          </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
