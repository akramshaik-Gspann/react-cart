import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productsActions";

import BreadCrumb from "../BreadCrumb/breadCrumb";
import '../../assets/scss/productDetail.css';
import Swatch1 from '../../assets/images/Swatch 01.png';
import Swatch2 from '../../assets/images/Swatch 02.png';
import Swatch3 from '../../assets/images/Swatch 03.png';
import Swatch4 from '../../assets/images/Swatch 04.png';
import heart from '../../assets/images/heart.png';

import { NavLink } from 'react-router-dom';


const ProductDetails = (props) => {
  const { onAdd } = props;
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price,  description, rating } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);


  return (
    <div className="">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="productdetails">
          <div className="container">
            <div class="aem-Grid aem-Grid--12">
              <div class="aem-GridColumn aem-GridColumn--default--6">
                <div className="productdetails__left">
                  <img src={image} alt="image"/>
                  <div className="productdetails__left-desc">
                    <h2>{title}</h2>
                    <h5>Description</h5>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6">
                <div className="productdetails__right">
                  <BreadCrumb />
                  <h1 className="productdetails__right-title">{title}</h1>
                  <h4 className="productdetails__right-price">
                    ${price}
                  </h4>
                  <h5 className="productdetails__right-rating">{rating && rating.rate} <i className='fa fa-star'></i> <span>({rating.count})</span>
                  </h5>
                  <p className="productdetails__right-description">{description}</p>
                  <hr />
                  <h5>Color</h5>
                  <div className="productdetails__right-colors">
                    <span><img src={Swatch1} alt="Swatch1"/></span>
                    <span><img src={Swatch2} alt="Swatch2"/></span>
                    <span><img src={Swatch3} alt="Swatch3"/></span>
                    <span><img src={Swatch4} alt="Swatch4"/></span>
                  </div>
                  <h5>Size</h5>
                  <div className="productdetails__right-size">
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                  </div>
                  <h5>Quantity</h5>
                  <div className="productdetails__right-quantity">
                    <button>-</button><input type="number" /><button>+</button>
                  </div>


                  <button className="button-primary" onClick={() => onAdd(product)}>Add to Cart</button>

                  <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
                  <div className="productdetails__right-share">
                    <ul>
                      <li><a href="#"><img src={heart} alt="heart-image"/> Save</a></li>
                      <li><a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i> Share</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
