import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

const arr = [
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        img: "/img/sneakers1.jpg",
        price: 10927
    },
    {
        title: "Мужские Кроссовки Nike Air Max 270",
        img: "/img/sneakers2.jpg",
        price: 13987
    },
    {
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        img: "/img/sneakers3.jpg",
        price: 10927
    },
    {
        title: "Кроссовки Puma X Aka Boku Future Rider",
        img: "/img/sneakers4.jpg",
        price: 7867
    }
]

function App() {
    return (
        <div className="App clear">

            <Drawer/>
            <Header/>

            <div className="content p-40 ">

                <div className="d-flex align-center justify-between mb-40">
                    <h1>All sneakers</h1>
                    <div className="search-block d-flex">
                        <img src="/img/Search.svg" alt="Search"/>
                        <input placeholder="Search..."/>
                    </div>
                </div>

                <sneakers className="d-flex">

                    {
                        arr.map((item) => (
                            <Card title={item.title} price={item.price} img={item.img}/>
                        ))


                    }




                </sneakers>


            </div>
        </div>
    );
}

export default App;
