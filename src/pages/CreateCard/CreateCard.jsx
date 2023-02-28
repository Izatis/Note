import React, { useState } from 'react';
import s from './CreateCard.module.scss'
import MyInput from '../../MUI/MyInput/MyInput';
import search from '../../assets/search.png'
import MyButton from '../../MUI/MyButton/MyButton';
import add from '../../assets/add.png'
import pen from '../../assets/Rectangle 3.png'
import emoji from '../../data/emoji.json'
import { useNavigate } from 'react-router-dom';

const CreateCard = ({createCard}) => {
    const navigate = useNavigate();

    const [card, setCard] = useState({
        title: '',
        description: '',
        mood:'',
        date: '',
        img: pen,
    })
    const addNewPost = () => {
        navigate('/')
        const newCard = {
            ...card,
         id: Date.now(),

        }
        createCard(newCard)
       setCard({
         title: '',
         description: '',
        mood:'',
        date: '',
         img: pen
     })
     }
    return (
    
        <div className={s.main}>
            <div className={s.inputs}>
                {/* Управляемый компонент */}
                <form>
                    <MyInput
                        value={card.title}
                        onChange={e => setCard({...card, title: e.target.value})}
                        label={'Название'}
                    /> <br />
                
                    <input 
                    value={card.date}
                        onChange={e => setCard({...card, date: e.target.value})}
                        type="date" />
                    <textarea
                        value={card.description}
                        onChange={e => setCard({...card, description: e.target.value})}
                        placeholder="Massage"
                        minlength="2"></textarea>
                    <MyButton img={add} text={'Создать'} background={'linear-gradient(135deg, #61B15A 0%, #ADCE74 100%)'} onClick={addNewPost} />
                </form>
            </div>
            <div className={s.images}>
                <MyInput
                    label={'Поиск'}
                    width={670} />
                <button>
                    <img src={search} alt="search" />
                </button>



            </div>
        </div>
      
    );
};

export default CreateCard;