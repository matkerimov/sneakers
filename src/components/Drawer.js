import React from 'react';

const Drawer = ({onClose, sneakers = []}) => {
    return (
        <>
            <div  className="overlay">
                <div className="drawer">

                    <h2 className="mb-30 d-flex justify-between ">
                        Cart
                        <img onClick={onClose}  className="removeBtn" src="/img/Remove_Active.svg" alt="Close"/>
                    </h2>

                    <div className="items">
                        {
                            sneakers.map((item) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <img className="mr-20" width={70} height={70} src={item.image} alt="Sneakers"/>
                                    <div className="mr-20">
                                        <p className="mb-5">{item.title}</p>
                                        <b>{item.price} som</b>
                                    </div>
                                    <img className="removeBtn" src="/img/Remove_Active.svg" alt=""/>
                                </div>
                            ))
                        }


                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li className="d-flex">
                                <span>Итого: </span>
                                <div></div>
                                <b>21 498 руб. </b>
                            </li>
                            <li className="d-flex">
                                <span>Налог 5%: </span>
                                <div></div>
                                <b>1074 руб. </b>
                            </li>
                        </ul>

                        <button className="greenButton">Order <img src="/img/Arrow.svg" alt="Arrow.svg"/></button>

                    </div>

                </div>
            </div>

        </>
    );
};

export default Drawer;