import React from 'react';
import {Link} from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

const Orders = ({onClose}) => {

    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);


    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://6438a18f4660f26eb1a05712.mockapi.io/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказов');
                console.error(error);
            }
        })();
    }, []);


    return (
        <div className="content p-40 ">
                <h1 className="mb-40">Orders</h1>

            {/*<div className="d-flex flex-wrap">*/}
            {/*    {(isLoading ? [...Array(8)] : orders).map((item, index) => (*/}
            {/*        <Card key={index} loading={isLoading} {...item} />*/}
            {/*    ))}*/}
            {/*</div>*/}

            {
                orders.length < 0 ? (
                    <div className="EmptyPage">
                        <div className=" d-flex align-center justify-center flex-column flex">
                            <img className="mb-20" width="70px" src="img/Orders.png" alt="Orders"/>
                            <h2 className="mt-25 mb-15">У вас нет заказов</h2>
                            <p className=" mb-30 opacity-6"> Оформите хотя бы один заказ.</p>
                            <Link to="sneakers">
                                <button onClick={onClose} className="greenButtonGoBack">
                                    <img src="img/arrow.svg" alt="Arrow"/>
                                    Вернуться назад
                                </button>
                            </Link>

                        </div>
                    </div>
                ) : (


                <div className="d-flex flex-wrap">
                {
                   (isLoading ? [...Array(8)] : orders).map((item, index) => (
                        <Card
                            key={index}
                            loading={isLoading}
                            {...item}
                        />
                    ))
                }

                </div>
                )

            }



        </div>
    );
};

export default Orders;