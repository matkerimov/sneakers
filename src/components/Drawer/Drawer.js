import React, {useContext, useState} from 'react';
import Info from "../Info";
import {AppContext} from "../../App";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const Drawer = ({onClose, onRemove, sneakers = []}) => {

    const {cartSneakers, setCartSneakers, totalPrice} = useContext(AppContext)
    const {orderId, setOrderId} = useState(null)
    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://6438a18f4660f26eb1a05712.mockapi.io/api/orders', {
                items: cartSneakers,
            });
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartSneakers([]);

            for (let i = 0; i < cartSneakers.length; i++) {
                const item = cartSneakers[i];
                await axios.delete('https://613cea45270b96001798b2e8.mockapi.io/cart/' + item.id);
                await delay(1000);
            }
        } catch (error) {
            alert('Ошибка при создании заказа :(');
        }
        setIsLoading(false);
    };



    return (
        <>
            <div className="overlay">
                <div className="drawer">
                    <h2 className="mb-30 d-flex justify-between ">
                        Cart
                        <img onClick={onClose} className="removeBtn" src="/img/Remove_Active.svg"
                             alt="Close"/>
                    </h2>
                    {
                        sneakers.length > 0 ? (
                            <>
                                <div className="d-flex flex-column flex">
                                    <div className="items flex">
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
                                                <b>{totalPrice} som </b>
                                            </li>
                                            <li className="d-flex">
                                                <span>Налог 5%: </span>
                                                <div></div>
                                                <b>{totalPrice * 5 / 100} som </b>
                                            </li>
                                        </ul>

                                        <button
                                            disabled={isLoading} onClick={onClickOrder} className="greenButton">
                                            Order <img src="/img/Arrow.svg" alt="Arrow.svg"/></button>

                                    </div>
                                </div>
                            </>


                        ) : (
                            <Info
                                title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                                description={
                                    isOrderComplete
                                        ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                                        : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                                }
                                image={isOrderComplete ? "/img/Order.jpg" : "/img/Empty.png"}
                            />

                        )
                    }


                </div>
            </div>

        </>
    );
};

export default Drawer;