import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";

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

                    <Card/>



                </sneakers>


            </div>
        </div>
    );
}

export default App;
