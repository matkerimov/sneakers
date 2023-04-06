import React from 'react';
import {Link} from "react-router-dom";

const Orders = ({onClose}) => {
    return (
        <div className="content p-40 ">
                <h1 className="mb-40">Orders</h1>
        <div className="EmptyPage">
            <div className=" d-flex align-center justify-center flex-column flex">
                <img className="mb-20" width="70px" src="./img/Orders.png" alt="Orders"/>
                <h2 className="mt-25 mb-15">У вас нет заказов</h2>
                <p className=" mb-30 opacity-6"> Оформите хотя бы один заказ.</p>
                <Link to="/">
                    <button onClick={onClose} className="greenButtonGoBack">
                        <img src="img/arrow.svg" alt="Arrow"/>
                        Вернуться назад
                    </button>
                </Link>

            </div>
        </div>
        </div>
    );
};

export default Orders;



// import React from 'react';
// import axios from 'axios';
//
// import Card from '../components/Card';
// import AppContext from '../context';
//
// function Orders() {
//     const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
//     const [orders, setOrders] = React.useState([]);
//     const [isLoading, setIsLoading] = React.useState(true);
//
//     React.useEffect(() => {
//         (async () => {
//             try {
//                 const { data } = await axios.get('https://60d62397943aa60017768e77.mockapi.io/orders');
//                 setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
//                 setIsLoading(false);
//             } catch (error) {
//                 alert('Ошибка при запросе заказов');
//                 console.error(error);
//             }
//         })();
//     }, []);
//
//     return (
//         <div className="content p-40">
//             <div className="d-flex align-center justify-between mb-40">
//                 <h1>Мои заказы</h1>
//             </div>
//
//             <div className="d-flex flex-wrap">
//                 {(isLoading ? [...Array(8)] : orders).map((item, index) => (
//                     <Card key={index} loading={isLoading} {...item} />
//                 ))}
//             </div>
//         </div>
//     );
// }
//
// export default Orders;


