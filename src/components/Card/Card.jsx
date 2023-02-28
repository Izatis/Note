import React from 'react';
import s from './Card.module.scss'

const Card = ({item, removeCard}) => {
    return (
        <div className={s.card_main}>
            <img src={item.img} alt="img" />
            <button onClick={() => removeCard(item)} className={s.circle}>
               <div>{item.mood}</div>
            </button>
            <div className={s.text_block}>
            <div className={s.title}>
                <h3>{item.title}</h3>
                <p>{item.date}</p>
                
            </div>
           <p className={s.description}>{item.description}</p>
            </div>

        </div>
    );
};

export default Card;