import React from 'react';
import Card from "../components/Card/index.js";
import {Link} from "react-router-dom";
import {AppContext} from "../App"

const Favorites = ({onClose}) => {
    const {favorites, onAddToFavorite} = React.useContext(AppContext)
    return (
        <div className="content p-40 ">
                <h1 className="mb-40">Favorites</h1>

                {
                    favorites.length > 0 ? (
                        <div className="d-flex flex-wrap">
                            {
                                favorites.map((item, index) => (
                                    <Card
                                        key={index}
                                        favorited={true}
                                        onFavorite={onAddToFavorite}
                                        {...item}
                                    />
                                ))
                            }
                        </div>
                    ) : (
                        <div className="EmptyPage">
                            <div className=" d-flex align-center justify-center flex-column flex">
                                <img className="mb-20" width="70px" src="img/Favorites.png" alt="Orders"/>
                                <h2 className="mt-25 mb-15">Закладок нет :(</h2>
                                <p className=" mb-30 opacity-6">Вы ничего не добавляли в закладки</p>
                                <Link to="/">
                                    <button onClick={onClose} className="greenButtonGoBack">
                                        <img src="img/arrow.svg" alt="Arrow"/>
                                        Вернуться назад
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )

                }
        </div>

    );
};

export default Favorites;

