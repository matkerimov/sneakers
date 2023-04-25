import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../App";

const Header = (props) => {

    const {totalPrice} = useContext(AppContext)

    return (
        <>
            <header className="d-flex justify-between align-center p-40">
                <Link to="sneakers">
                    <div className="d-flex align-center">
                        <img width={40} height={40} src="img/logo.svg" alt=""/>
                        <div className="headerInfo">
                            <h3 className="text-uppercase">React Sneakers</h3>
                            <p className="opacity-6">Store of the best sneakers</p>
                        </div>
                    </div>

                </Link>
                <ul className="d-flex">
                    <li onClick={props.onClickCart}    className="mr-30 cu-p">
                        <img src="img/Cart.svg" alt=""/>
                        <span>{totalPrice} som</span>
                    </li>
                    <li className="mr-30">
                        <Link to="favorites">
                            <img src="img/Heart.svg" alt=""/>
                        </Link>
                    </li>
                    <li>
                        <Link to="orders">
                            <img src="img/Person.svg" alt=""/>

                        </Link>

                    </li>
                </ul>
            </header>
        </>
    );
};

export default Header;