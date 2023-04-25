import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

export const AppContext = createContext({});

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
            // Как работает Promise.all?
            // Promise.all - это массив Промисов
            // Promise.all будет выполнять каждый из промисов и рещъзультат выплнения вернет ввиде массива
            try {
                const [cartResponse, favoriteResponse, itemsResponse] = await Promise.all([
                    await axios.get("https://613cea45270b96001798b2e8.mockapi.io/cart"), // <= это промис
                    await axios.get("https://613cea45270b96001798b2e8.mockapi.io/favorite"),
                    await axios.get("https://run.mocky.io/v3/73582dc0-cd28-46b8-a966-092d3510fabd"),
                ])

                setIsLoading(false)
                setCartSneakers(cartResponse.data)
                setFavorites(favoriteResponse.data)
                setSneakers(itemsResponse.data)
            } catch (error) {
                alert("Ошибка при запросе данных :(")
                console.log(error)
            }


        }
        fetchData();

    }, [])


    const onAddToCart = async (obj) => {
        // Если в корзине cartSneakers хотябы один item, имеет такой же id,
        // как и у obj при нажатии на кнопку плюс, то удали этот элемент

        try {
            const findItem = cartSneakers.find((item) => Number(item.parentId) === Number(obj.id))
            if (findItem) {
                setCartSneakers(prev => prev.filter(el => Number(el.parentId) !== Number(obj.id)))
                await axios.delete(`https://613cea45270b96001798b2e8.mockapi.io/cart/${findItem.id}`)
            } else {
                setCartSneakers(prev => [...prev, obj])
                const {data} = await axios.post("https://613cea45270b96001798b2e8.mockapi.io/cart", obj)
                setCartSneakers((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    }),
                );
            }
        }catch (error) {
            alert("Ошибка при добавлении в корзину :(")
            console.log(error)
        }


    }

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://613cea45270b96001798b2e8.mockapi.io/cart/${id}`).then(res => {
                setCartSneakers(prev => prev.filter(item => Number(item.id) !== Number(id)))
            });
        } catch (error) {
            alert("Ошибка при удалении из корзины :(")
            console.log(error)
        }

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
        } catch (error) {
            alert("Не удалось добавить в фавориты")
            console.log(error)
        }
    }


    const onChangeSearchInput = (event) => {
        setSearch(event.target.value)
    }

    // В стаэйте cartSneakers хронятся все данные Корзины
    // isItemAdded будет проверять,
    // если хотябы один id который тебе передали есть в Корзине среди оъектов то выдавай мне true
    // иначе выводи false
    const isItemAdded = (id) => {
        return cartSneakers.some((obj) => Number(obj.parentId) === Number(id))
    }

    const isItemFavorited = (id) => {
        return favorites.some((obj) => Number(obj.id) === Number(id))
    }

    const totalPrice = cartSneakers.reduce((prev, obj) => obj.price + prev, 0)


    return (
        // Здесь мы говорим
        // Все наше приложение ты будешь знать что теперь через AppContext ты можешь выташить
        //                           ▼ вот эти пропсы
        <AppContext.Provider
            value={
                {sneakers, cartSneakers,
                    favorites, isItemAdded,
                    onAddToFavorite, setCartOpen,
                    setCartSneakers, isItemFavorited, totalPrice}}>
            <div className="App clear">
                {cartOpen && <Drawer sneakers={cartSneakers}
                                     onClose={() => setCartOpen(false)}
                                     onRemove={onRemoveItem} opened={cartOpen}
                />}
                <Router>

                    <Header onClickCart={() => setCartOpen(true)}/>

                    <Routes>

                        <Route path="" element={
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
                                // onAddToFavorite={onAddToFavorite}
                            />
                        }/>
                        <Route path="orders" element={<Orders/>}/>

                    </Routes>

                </Router>


            </div>
        </AppContext.Provider>

    );
}

export default App;
