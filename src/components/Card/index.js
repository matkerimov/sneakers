import React, {useState} from 'react';
import styles from "./Card.module.scss"
console.log(styles)

const Index = ({image, title, price, onPlus, onFavorite}) => {

    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const onClickPlus = () => {
        onPlus({title, image, price})
        setIsAdded(!isAdded)
    }
    const onClickHeart = () => {
        setIsFavorite(!isFavorite)
    }


    return (
        <>
            <div className={styles.card}>
                <div className="favorite">
                    <img onClick={onClickHeart} src={isFavorite ? "/img/Heart_Active.svg" : "/img/Heart_Inactive.svg"} alt="Inactive"/>
                </div>
                <img width={133} height={112} src={image} alt=""/>
                <h5>{title}</h5>
                <div className="price_add  d-flex justify-between align-center ">
                    <div className="d-flex flex-column">
                        <span>Price:</span>
                        <b>{price} som</b>
                    </div>
                        <img onClick={onClickPlus}  src={isAdded ? "img/Checked.svg" : "img/BorderPlus.svg"} alt=""/>
                </div>
            </div>
        </>
    );
};

export default Index;