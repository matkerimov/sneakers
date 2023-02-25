import React from 'react';

const Header = (props) => {
    return (
        <>
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.svg" alt=""/>
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-6">Store of the best sneakers</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li onClick={props.onClickCart}    className="mr-30 cu-p">
                        <img src="/img/Cart.svg" alt=""/>
                        <span>13987 som</span>
                    </li>
                    <li className="mr-30">
                        <img src="/img/Heart.svg" alt=""/>
                    </li>
                    <li>
                        <img src="/img/Person.svg" alt=""/>

                    </li>
                </ul>
            </header>
        </>
    );
};

export default Header;