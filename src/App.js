import React, {useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
    const [sneakers, setSneakers] = useState([])
    const [cartSneakers, setCartSneakers] = useState([])
    const [favorites, setFavorites] = useState([])
    const [search, setSearch] = useState('')
    const [cartOpen, setCartOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    useEffect( () => {
        //Здесь мы сказали fetch отправь запрос на BackEnd
        // fetch("https://613cea45270b96001798b2e8.mockapi.io/api/sneakers")
        // Преврати ответ мне в json, верни мне его
        // .then((res) => {
        //     return res.json()
        // Вытащи данные из json и передай мне его в useState - sneakers
        //     }).then((json) => {
        //     setSneakers(json)
        // })

        async function fetchData() {

            const cartResponse = await axios.get("https://613cea45270b96001798b2e8.mockapi.io/cart")
            const favoriteResponse = await axios.get("https://613cea45270b96001798b2e8.mockapi.io/favorite")
            const itemsResponse = await axios.get("https://run.mocky.io/v3/cb675bfc-fecb-4c33-91bf-bfe4734ea112")


            setIsLoading(false)
            setCartSneakers(cartResponse.data)
            setFavorites(favoriteResponse.data)
            setSneakers(itemsResponse.data)


        }
        fetchData();

    }, [])


    const onAddToCart = (obj) => {
        // Если в корзине cartSneakers хотябы один item, имеет такой же id,
        // как и у obj при нажатии на кнопку плюс, то удали этот элемент
        console.log(obj)
        if (cartSneakers.find((item) => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://613cea45270b96001798b2e8.mockapi.io/cart/${obj.id}`)
            setCartSneakers(prev => prev.filter(el => Number(el.id) === Number(obj.id)))
        } else {
            axios.post("https://613cea45270b96001798b2e8.mockapi.io/cart", obj)
            setCartSneakers(prev => [...prev, obj])

        }

    }

    const onRemoveItem = (id) => {
        console.log(id)
        axios.delete(`https://613cea45270b96001798b2e8.mockapi.io/cart/${id}`).then(res => {
            setCartSneakers(prev => prev.filter(item => item.id !== id))
        });
    }

    // // При выполнении этого метода
    // const onAddToFavorite = (obj) => {
    //     console.log(obj.id)
    //     // Отправляй запрос сюда ▼                         И отдавай этот обьект ▼ в BackEnd
    //     axios.post("https://613cea45270b96001798b2e8.mockapi.io/favorite", obj).then(res => {
    //         setFavorites(prev => [...prev, obj])
    //     });
    // }

    const onAddToFavorite = async (obj) => {
        //    try & catch - грамотный способ отлавливания ошибок
        //    try выполняет код внутри {}
        try {
            // Без обертки в try & catch мы несможем отловить ошибку ...
            if (favorites.find((favoriteObject) => Number(favoriteObject.id) === Number(obj.id))) {
                axios.delete(`https://613cea45270b96001798b2e8.mockapi.io/favorite/${obj.id}`)
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
            } else {
                // ... которая возникает при await ▼ здесь, когда отправляет запрос
                const {data} = await axios.post("https://613cea45270b96001798b2e8.mockapi.io/favorite", obj)
                setFavorites(prev => [...prev, data])
            }
            //    Если код ▲ не выполнится
            //    catch ловит ошибку и говорит то что внутри {}
        } catch (e) {
            alert("Не удалось добавить в фавориты")
        }
    }


    const onChangeSearchInput = (event) => {
        setSearch(event.target.value)
    }


    return (
        <div className="App clear">
            {cartOpen && <Drawer sneakers={cartSneakers}
                                 setsetCartOpen={setCartOpen}
                                 onClose={() => setCartOpen(false)}
                                 onRemove={onRemoveItem}
            />}
            <Router>

                <Header onClickCart={() => setCartOpen(true)}/>

                <Routes>

                    <Route path="/" element={
                        <Home

                            sneakers={sneakers}
                            cartSneakers={cartSneakers}
                            search={search}
                            setSearch={setSearch}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddToCart={onAddToCart}
                            isLoading={isLoading}
                        />
                    }/>

                    <Route path="favorites" element={
                        <Favorites
                            sneakers={sneakers}
                            favorites={favorites}
                            onRemoveFavorite={onAddToFavorite}
                        />
                    }/>
                    <Route path="orders" element={<Orders/>}/>

                </Routes>

            </Router>


        </div>
    );
}

export default App;
