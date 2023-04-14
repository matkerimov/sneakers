import React, {useContext, useState} from 'react';
import ContentLoader from 'react-content-loader'
import styles from "./Card.module.scss"
import {AppContext} from "../../App";


const Card = ({id, image, title, price, onPlus, onFavorite,  loading = false }) => {

    const {isItemAdded, isItemFavorited} = useContext(AppContext)
    // const [isFavorite, setIsFavorite] = useState(favorited)

    // console.log(title, isItemAdded(id))

    const onClickPlus = () => {
        onPlus({id, title, image, price})
    }
    const onClickHeart = () => {
        onFavorite({id, title, image, price})
        // setIsFavorite(!isFavorite)
    }


    return (
        <>
            <div className={styles.card}>
                {
                    loading ? (
                        <ContentLoader
                            speed={2}
                            width={155}
                            height={250}
                            viewBox="0 0 155 265"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb">
                            <rect x="1" y="0" rx="10" ry="10" width="155" height="155"/>
                            <rect x="0" y="167" rx="5" ry="5" width="155" height="15"/>
                            <rect x="0" y="187" rx="5" ry="5" width="100" height="15"/>
                            <rect x="1" y="234" rx="5" ry="5" width="80" height="25"/>
                            <rect x="124" y="230" rx="10" ry="10" width="32" height="32"/>
                        </ContentLoader>
                    ) : (
                        <>
                            <div className="favorite">
                                <img onClick={onClickHeart}
                                     src={isItemFavorited(id) ? "/img/Heart_Active.svg" : "/img/Heart_Inactive.svg"}
                                     alt="Inactive"/>
                            </div>
                            <img width={133} height={112} src={image} alt=""/>
                            <h5>{title}</h5>
                            <div className="price_add  d-flex justify-between align-center ">
                                <div className="d-flex flex-column">
                                    <span>Price:</span>
                                    <b>{price} som</b>
                                </div>
                                <img onClick={onClickPlus}
                                     src={isItemAdded(id) ? "img/Checked.svg" : "img/BorderPlus.svg"}
                                     alt=""/>
                            </div>
                        </>

                    )
                }

            </div>
        </>
    );
};

export default Card;