import { useDispatch, useSelector } from "react-redux";
import "./_filled-cart.scss";
import { UpdateItemQuantity } from "../../../Redux/Cart/cartSlice";
import {deleteCartItem} from "../../../Redux/Cart/cartSlice";

function FilledCart(){
    const cart = useSelector(state=>state.cr);
    const dispatch = useDispatch();

    function quantityHandler(e,item,key){
      const payload ={
         operator : e.target.innerText,
         item,
         key
      };
      dispatch(UpdateItemQuantity(payload));
    }
    function deleteHandler(item){
      dispatch(deleteCartItem(item));
    }

    return (
    <div>
     <div className="row my-5 fc-main-div">
       <div className="col-8 p-4">
         {
            cart.cartItems.map((item,key)=>{
                return (
                <div>
                  <div className="row cart-item-card">
                    <div className="col-4">
                        <img src={require("../../../assets/images/shop/"+item.product_image)} />
                    </div>
                    <div className="col-8">
                        <div className="p-3 cart-item-details">
                              <span className="cart-item-name">{item.product_name}</span>      
                            <div className="cart-item-price">
                              <span>${item.price}</span>
                            </div>
                            <div>
                              <span>
                                <i className="fa fa-star text-warning" />
                                <i className="fa fa-star text-warning" />
                                <i className="fa fa-star text-warning" />
                                <i className="fa fa-star text-warning" />
                                <i className="fa fa-star text-warning" />
                              </span>
                            </div>
                            <hr/>
                            <div className="cart-container">
                            <div className="cart-edit-container">
                              <div className="btn-group mx-3" onClick={(e)=>quantityHandler(e,item,key)}>
                                <div className="btn btn-outline-dark">
                                  <span> - </span>
                                </div>
                                <div className="btn">
                                    {item.quantity}
                                </div>
                                <div className="btn btn-outline-dark">
                                    <span> + </span>
                                </div>
                              </div>
                            </div>
                            <div className="btn btn-outline-danger my-4" onClick={()=>deleteHandler(item)}>
                                <span><i className="fa fa-trash mx-2" /> Remove Item </span>
                            </div> 
                            </div>  
                      </div>       
                    </div>
                  </div>
                </div>
                );
            })
         } 
       </div>
       <div className="col-4 px-4 py-3 my-4 cart-summary">
          <h2 className="mb-5 mt-3"> Summary </h2>
          <div>
            <span> Cart Total : ${cart.totalItemPrice} </span>
            <p> Shipping Charge : Free </p>
            <hr/>
            <span className="summary-total"> Total : ${cart.totalItemPrice} </span>
            <hr/>
          </div>
          <div className="btn btn-outline-dark w-100 mb-4 mt-1">
            Checkout
          </div>
       </div>
     </div>
    </div>
    );
}
export default FilledCart;