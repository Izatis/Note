import React, { useState } from 'react';
import s from './List.module.scss'
import Card from '../../components/Card/Card';

const List = ({cardData, removeCard}) => { 
    
    return (
         <div className={s.cards}>
          
            {  cardData.length
            ?   cardData.map((item) => {
                    return <Card removeCard={removeCard} key={item.id} item={item}/>
                })
            : <h1>Ничего не найдено!</h1>}  
            
        </div>
    );
};

export default List;