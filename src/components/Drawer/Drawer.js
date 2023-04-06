import React from 'react';
// import './index.scss'

const Drawer = ({onClose, sneakers = [], onRemove, setCartOpen}) => {
    return (
        <>
            <div className="overlay">
                <div className="drawer">



                    {
                        sneakers.length > 0 ? (
                            <>
                                <h2 className="mb-30 d-flex justify-between ">
                                    Cart
                                    <img onClick={onClose} className="removeBtn" src="/img/Remove_Active.svg" alt="Close"/>
                                </h2>
                                <div className="d-flex flex-column flex">
                                    <div className="items">
                                        {
                                            sneakers.map((item, index) => (
                                                <div key={index}
                                                    className="cartItem d-flex align-center mb-20">
                                                    <img className="mr-20" width={70} height={70} src={item.image}
                                                         alt="Sneakers"/>
                                                    <div className="mr-20">
                                                        <p className="mb-5">{item.title}</p>
                                                        <b>{item.price} som</b>
                                                    </div>
                                                    <img className="removeBtn"
                                                         src="/img/Remove_Active.svg"
                                                         alt="RemoveItem"
                                                         onClick={() => onRemove(item.id)}
                                                    />
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

                                        <button className="greenButton">Order <img src="/img/Arrow.svg"
                                                                                   alt="Arrow.svg"/></button>

                                    </div>
                                </div>
                            </>


                        ) : (

                            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                                <img className="mb-20" width="120px" src="/img/Empty.png" alt="Empty"/>
                                <h2>Корзина пустая</h2>
                                <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                                <button onClick={onClose} className="greenButtonGoBack">
                                    <img src="img/arrow.svg" alt="Arrow"/>
                                    Вернуться назад
                                </button>
                            </div>
                        )
                    }



                </div>
            </div>

        </>
    );
};

export default Drawer;