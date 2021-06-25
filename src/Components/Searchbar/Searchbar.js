import React from 'react';
import './Searchbar.scss';
import { useSelector }  from 'react-redux';

import { ImCart } from 'react-icons/im';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Searchbar() {
    const {selectedItems} = useSelector(state => state.productReducer);


    return (
        <>
            <div className="searchbar">
                <div className="col-lg-8 searchbar_wrapper">
                    <div className="searchbar_left">
                        <div className="company_logo">
                           <Link to="/"><h4>RB-Cart</h4></Link> 
                        </div>
                    </div>
                    <div className="searchbar_middle">
                        <div className="search_input">
                            <form className="d-flex">
                                <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>

                    </div>
                    <div className="searchbar_right">
                        <div className="icons">
                            <Link to="/shopping-cart" >
                                <div className="cart_icon">
                                    <ImCart />
                                    <p>{selectedItems.length}</p>
                                </div>
                            </Link>
                            <div className="profile_icon">
                                <BsPersonFill />
                            </div>
                        </div>
                    
                        <div className="welcome_section">
                            <p>Welcome!</p>
                            <div className="d-flex login_section">
                                <p>Sign-in</p>
                                |
                                <p>Register</p>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>
        </>
        
    )
}
