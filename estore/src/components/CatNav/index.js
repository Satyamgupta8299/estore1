import "./_cat-nav.scss";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import categorySlice from "../../Redux/Category/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../Redux/Category/actions";
import {Link} from "react-router-dom";

function CatNav() {
  const categories = useSelector(state=>state.categoryReducer.categories);
  const dispatch=useDispatch();

  useEffect(()=>{
     dispatch(getCategories());
  },[])

  console.log(categories);

  return (
    <div className="cat-nav-container container">
      <ul>
        <li className="list-item">
          <Link to="/">Home</Link> 
        </li>
        {categories.map((category) => {
          if(category.parent_category_id=== null){
            return (
              <li className="list-item">
                <a href="#">{category.category}</a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
export default CatNav;