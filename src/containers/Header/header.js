import React, { useState } from "react";
import '../../assets/scss/header.css';
import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import basket from '../../assets/images/shopping-bag.png';
import '../../assets/css/aem-grid.css';

import { NavLink } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

const Header = (props) => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const Loading = () => {
    return (
        <>
            <div className="col-md-3">
                <Skeleton height={350} />
                <Skeleton height={350} />
                <Skeleton height={350} />
            </div>
        </>
    );
}

  const filterProduct = (element) => {
    console.log(element)
    const updatedList = data.filter((value) => value.category === element);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo" >
              <a href="/">VENIA</a>
            </div>
            <div className="header__categories">
              <ul>
                <li><a href="#" onClick={() => filterProduct("women's clothing")}>Women</a></li>
                <li><a href="#" onClick={() => filterProduct("men's clothing")}>Men</a></li>
                <li><a href="#" onClick={() => filterProduct("jewelery")}>Smart Gear</a></li>
                <li><a href="#" onClick={() => filterProduct("electronics")}>Accessories</a></li>
              </ul>
            </div>
            <div className="header__icons">
              <ul>
                <li><a href="#"> <img src={search} alt="search-image"/> Search</a></li>
                <li><a href="#"> <img src={user} alt="user"/> Sign in</a></li>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <img src={basket} alt="basket-image"/>{' '}
                  {props.countCartItems ? (
                    <button className="btn btn-primary">{props.countCartItems}</button>
                  ) : (
                    ''
                  )}
                </NavLink>{' '}
              </ul>
            </div>
          </div>

        </div>
      </header>
    );
  }

  return (

    <div>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}

        </div>
      </div>
    </div>
  )

}
export default Header;
