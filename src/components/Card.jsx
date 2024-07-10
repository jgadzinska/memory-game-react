import React from "react";

const Card = ({ card, onClick, isFillped }) => {
    return (
    <div 
        className={'card ${isFillped ? "flipped": ""} w-24 h-32 lg:w-36 lg:h-44 m-2'} 
        onClick={() => onClick(card)}>

        <div className={'inner-card w-full h-full flex items-center justify-center bg-white border border-gray-300 rounded-x1 ${card.matched ? "matched" : ""}'}>
            {isFillped || card.matched ? (
                <img src={card.image} alt="card" className="w-full h-full object-cover rounded-x1"/>
            ) : (
                <div className="bg-blue-900 rounded-x1 w-full h-full flex items-center justify-center text-2x1 text-white shadow-lg w-full p-3"> 
                Memory Game </div>
            )}
        </div>

    </div>
    );
};

export default Card;