import "./_side-nav.scss";
import React, { useEffect,useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
//import accordionSlice from "../../Redux/Accordion/accordionSlice";
import { getCategories } from "../../Redux/Category/actions";
import { filterProducts } from "../../Redux/Product/productSlice";
import { filterByPrice } from "../../Redux/Product/productSlice";
function SideNav() {
  const accordionData = useSelector(state=>state.categoryReducer.categories);
  const fetchedProductData = useSelector(state=>state.pr);
  const [products,setProducts]=useState();
  const [minPriceLimit,setMinPriceLimit]=useState(10);
  const [maxPriceLimit,setMaxPriceLimit]=useState(130);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCategories());
  },[]);

  useEffect(()=>{
    setProducts(fetchedProductData.products);
  },[fetchedProductData.status]);

  function filterData(selectedCategory){
    const payload={selectedCategory,products};
     dispatch(filterProducts(payload));
  }

  function applyPriceFilter(){
    const payload={products,minPriceLimit,maxPriceLimit}; 
    dispatch(filterByPrice(payload));
  }

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>
      <div className="accordion my-3">
        {accordionData.map((accordionCategory, index) => {
          if(accordionCategory.parent_category_id===null){
            return (
              <div className="accordion-item individual-category">
                <div className="accordion-header">
                  <button
                    key={index}
                    className="accordion-button"
                    data-bs-target={"#collapse" + index}
                    data-bs-toggle="collapse"
                  >
                    <div className="category-title">
                      <a href="#">{accordionCategory.category}</a>
                    </div>
                  </button>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  id={"collapse" + index}
                >
                  <div className="accordion-body">
                    <ul>
                      {accordionData.map((subCategory)=>{
                        if(accordionCategory.id===subCategory.parent_category_id){
                          return (
                            <li className="sub-items">
                              <a href="#"onClick={()=>filterData(subCategory)}>{subCategory.category}</a>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="price-filter-container">
        <div className="section-title">
           <h5>Filter By Price</h5>
        </div>
        <div>
          <label>Min : {minPriceLimit} </label>
          <input className="form-range" type="range" min={10} max={130} step={10} onChange={(e)=>setMinPriceLimit(e.target.value)} />
        </div>
        <div>
          <label>Max : {maxPriceLimit} </label>
          <input className="form-range" type="range" min={10} max={130} step={10} onChange={(e)=>setMaxPriceLimit(e.target.value)} />
        </div>
        <button className="btn btn-outline-dark my-3" onClick={()=>applyPriceFilter()}> Apply Filter </button>
      </div>
    </div>
  );
}
export default SideNav;