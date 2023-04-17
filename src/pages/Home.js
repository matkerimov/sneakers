import React from 'react';
import Card from "../components/Card/index.js";

const Home = ({
                  sneakers,
                  search,
                  setSearch,
                  onChangeSearchInput,
                  onAddToCart,
                  onAddToFavorite,
                  isLoading
              }) => {


    const renderItems  = () => {
        const filteredItems = sneakers.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase()),
        );
        return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                // added={isItemAdded(item && item.id)}
                // some говорит если хотябы одно услови совпало то он вернет tr
                loading={isLoading}
                {...item}
            />
        ));
    };

    return (
        <div className="content p-40 ">

            <div className="d-flex align-center justify-between mb-40">
                <h1>{search ? `Search by:  ${search}` : "All sneakers"}</h1>
                <div className="search-block d-flex">
                    <img src="img/Search.svg" alt="Search"/>
                    <input onChange={onChangeSearchInput} value={search} placeholder="Search..."/>
                    {
                        search && (
                            <img onClick={() => setSearch('')}
                                 className="clear cu-p"
                                 src="img/Remove_Active.svg"
                                 alt="Close"/>

                        )
                    }
                </div>
            </div>

            <div className="d-flex flex-wrap">{renderItems()}</div>
        </div>
    );
};

export default Home;

