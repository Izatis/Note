import React, { useState } from 'react';
import s from './Header.module.scss'
import icon from '../../assets/icon.png'
import MyInput from '../../MUI/MyInput/MyInput';
import MySelect from '../../MUI/MySelect/MySelect';
import square from '../../assets/square.png'
import pen from '../../assets/pen.png'
import { useNavigate } from 'react-router-dom';
import MyButton from '../../MUI/MyButton/MyButton';
import emoji from '../../data/emoji.json'

const Header = ({cardData, setCardData}) => {
    const navigate = useNavigate();

    const button = [
        {
            img: square,
            id: 1,
            text: 'Список',
            background: '#FFCE89',
            color: 'black',
            func: () => {
                navigate('/');
            }
        },
        {
            img: pen,
            id: 2,
            text: 'Запись',
            background: 'linear-gradient(135deg, #61B15A 0%, #ADCE74 100%)',
            func: () => {
                navigate('/createCard');
            }

        }
    ]
    
   const [selectedSort, setSelectedSort] = useState('')

   const sortCards = (sort) => {
    setSelectedSort(sort)
    console.log(sort);
    setCardData([...cardData].sort((a, b) => a[sort].localeCompare(b[sort])))
   }

    return (
        <div className={s.main_content}>
            <div className={s.content}>
                <div className={s.icon_text} onClick={() => navigate('/')}>
                    <img src={icon} alt="icon" />
                    <h1>Дневник</h1>
                </div>
                <MyInput label={'Поиск'} />
                <MySelect
                value={selectedSort}
                onChange={sortCards}
                options={emoji}
                />
            
                {button.map(item => {
                    return <MyButton key={item.id} img={item.img} text={item.text} background={item.background} color={item.color} func={item.func}/>

                })}


            </div> </div>

    );
};

export default Header;