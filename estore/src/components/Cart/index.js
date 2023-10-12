import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

function Cart(){
    const cart = useSelector(state=>state.cr);
    return (
    <div>
        {cart.cartItems.length===0 ? <EmptyCart/> : <FilledCart />}
    </div>
    );
}
export default Cart;