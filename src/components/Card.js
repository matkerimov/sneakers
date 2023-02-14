import React from 'react';

const Card = () => {
    return (
        <>
            <div className="card">
                <div className="favorite">
                    <img src="/img/Heart_Inactive.svg" alt="Inactive"/>
                </div>
                <img width={133} height={112} src="/img/sneakers1.jpg" alt=""/>
                <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                <div className="price_add  d-flex justify-between align-center ">
                    <div className="d-flex flex-column">
                        <span>Price:</span>
                        <b>2 999 som</b>
                    </div>
                    <button className="button">
                        <img src="img/Plus.svg" alt=""/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;