import { useDispatch, useSelector } from "react-redux";
import "./_products.scss";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {getProducts} from "../../Redux/Product/productAction";
import { addCartItem } from "../../Redux/Cart/cartSlice";
import { Link } from "react-router-dom";
//import "../../assets/images/shop/shop-1.jpg";
function Products() {
  const productData = useSelector(state=>state.pr.products);
  const cart=useSelector(state=>state.cr);
  const dispatch=useDispatch();

  useEffect(()=>{
     dispatch(getProducts())
  },[])
  
  function addToCart(itemData){
    const payload={...itemData,quantity:1}
    dispatch(addCartItem(payload));
  }
 
  return (
    <div className="products-container">
      {productData.map((product, index) => {
        return (
          <div className="mx-5 p-3 product-card">
            
              <Link to="/productDetails" state={product}>
                <div className="product-image-container">
                  <img src={require("../../assets/images/shop/"+product.product_image)} />
                </div>
              </Link>
            
            <div className="product-info">
              <h5>
                <Link to="/productDetails" state={product}>{product.product_name}</Link>
              </h5>
              <p className="product-price">Price: ${product.price} </p>
            </div>
            <div className="product-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          <div className="my-3" onClick={()=>addToCart(product)}>
            <div className="cart-button">
              <div className="cart-icon-container">
                <i className="fa fa-shopping-cart"/>
              </div>
              <div className="cart-text-container mx-3"> 
                <p>Add to Cart</p>
              </div>  
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
}
export default Products;
