import React from 'react';

const Drawer = () => {
    return (
        <>
            <div style={{display: 'none'}} className="overlay">
                <div className="drawer">

                    <h2 className="mb-30 d-flex justify-between ">
                        Cart
                        <img className="removeBtn" src="/img/Remove_Active.svg" alt=""/>
                    </h2>

                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            <img className="mr-20" width={70} height={70} src="/img/sneakers1.jpg" alt="Sneakers"/>
                            <div className="mr-20">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>2 999 som</b>
                            </div>
                            <img className="removeBtn" src="/img/Remove_Active.svg" alt=""/>
                        </div>
                        <div className="cartItem d-flex align-center mb-20">
                            <img className="mr-20" width={70} height={70} src="/img/sneakers3.jpg" alt="Sneakers"/>
                            <div className="mr-20">
                                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                                <b>2 999 som</b>
                            </div>
                            <img className="removeBtn" src="/img/Remove_Active.svg" alt=""/>
                        </div>
                        {/*<div className="cartItem d-flex align-center mb-20">*/}
                        {/*    <img className="mr-20" width={70} height={70} src="/img/sneakers1.jpg" alt="Sneakers"/>*/}
                        {/*    <div className="mr-20">*/}
                        {/*        <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>*/}
                        {/*        <b>2 999 som</b>*/}
                        {/*    </div>*/}
                        {/*    <img className="removeBtn" src="/img/Remove_Active.svg" alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="cartItem d-flex align-center mb-20">*/}
                        {/*    <img className="mr-20" width={70} height={70} src="/img/sneakers3.jpg" alt="Sneakers"/>*/}
                        {/*    <div className="mr-20">*/}
                        {/*        <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>*/}
                        {/*        <b>2 999 som</b>*/}
                        {/*    </div>*/}
                        {/*    <img className="removeBtn" src="/img/Remove_Active.svg" alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="cartItem d-flex align-center mb-20">*/}
                        {/*    <img className="mr-20" width={70} height={70} src="/img/sneakers1.jpg" alt="Sneakers"/>*/}
                        {/*    <div className="mr-20">*/}
                        {/*        <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>*/}
                        {/*        <b>2 999 som</b>*/}
                        {/*    </div>*/}
                        {/*    <img className="removeBtn" src="/img/Remove_Active.svg" alt=""/>*/}
                        {/*</div>*/}
                        {/*<div className="cartItem d-flex align-center mb-20">*/}
                        {/*    <img className="mr-20" width={70} height={70} src="/img/sneakers3.jpg" alt="Sneakers"/>*/}
                        {/*    <div className="mr-20">*/}
                        {/*        <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>*/}
                        {/*        <b>2 999 som</b>*/}
                        {/*    </div>*/}
                        {/*    <img className="removeBtn" src="/img/Remove_Active.svg" alt=""/>*/}
                        {/*</div>*/}


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