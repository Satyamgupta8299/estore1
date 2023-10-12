import "./_top-nav.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import {gapi} from "gapi-script";

function TopNav() {
  const cartItemCount=useSelector(state=>state.cr.totalItems);
  const [userDetail,setuserDetail]=useState();

  function successHandler(res){
   //setuserDetail(res.profileObj);
   console.log(res);
  }
  return (
    <div>
      <div className="header bg-dark">
        <div className="top-nav-row">
          <div className="brand my-1">
            <h1> eStore </h1>
          </div>
          <div className="inp-container p-0 my-4 w-50 h-25 bg-white">
            <div className="dropdown m-0 p-0">
              <select className="select-btn w-100 p-0 m-0">
                <option> Men </option>
                <option> Women </option>
                <option> Kids </option>
              </select>
            </div>
            <input className="form-control " placeholder="Search..." />
            <button>
              {" "}
              <i className="fa fa-search" />{" "}
            </button>
          </div>
          <div className="login-container p-0">
            <i className="fa fa-user-circle user-icon" />
            <h5>
              
                <GoogleLogin 
                  clientId='378666499656-j9kpdn9sp8trcoga1qmkgpd2uil48a1u.apps.googleusercontent.com'
                  buttonText='login'
                  cookiePolicy="single_host_origin"
                  onSuccess={successHandler}
                /> 
            </h5>
          </div>
          <div className="cart-wishlist">
            <ul className="p-0">
              <li className="list-icon">
                {" "}
                <i className="fa fa-heart" />
              </li>
              <Link to="/cart">
                <li className="list-icon">
                  {" "}
                  <i className="fa fa-shopping-cart">
                    {cartItemCount!==0 && <div className="cart-item-count"><p>{cartItemCount}</p></div>}
                  </i>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
