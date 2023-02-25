import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Index from "./components/Card";
import Drawer from "./components/Drawer";
import {dbase} from "./helpers/dbase";


function App() {
    const [sneakers, setSneakers] = useState([])
    const [cartSneakers, setCartSneakers] = useState([])
    const [cartOpen, setCartOpen] = useState(false)


    useEffect(() => {
        //Здесь мы сказали fetch отправь запрос на BackEnd
        fetch("https://613cea45270b96001798b2e8.mockapi.io/api/sneakers")
            // Преврати ответ мне в json, верни мне его
            .then((res) => {
                return res.json()
                // Вытащи данные из json и передай мне его в useState - sneakers
            }).then((json) => {
            setSneakers(json)
        })
    }, [])


    const onAddToCart = (obj) => {
        setCartSneakers(prev =>[...prev, obj])
    }


    return (
        <div className="App clear">
            {cartOpen && <Drawer sneakers={cartSneakers} onClose={() => setCartOpen(false)}/>}

            <Header onClickCart={() => setCartOpen(true)}/>

            <div className="content p-40 ">

                <div className="d-flex align-center justify-between mb-40">
                    <h1>All sneakers</h1>
                    <div className="search-block d-flex">
                        <img src="/img/Search.svg" alt="Search"/>
                        <input placeholder="Search..."/>
                    </div>
                </div>

                <sneakers className="d-flex flex-wrap">

                    {
                        //Этот sneakers возми и отрендари мне в этой части
                        // пробегаемся по массиву и рендарим список карточек
                        sneakers.map((item) => (
                            <Index
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                onFavorite={() => console.log('added to favorite')}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))


                    }


                </sneakers>


            </div>
        </div>
    );
}

export default App;
