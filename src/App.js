import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CreateCard from './pages/CreateCard/CreateCard';
import List from './pages/List/List';
import pen from './assets/Rectangle 3.png'
import emoji from './data/emoji.json'

function App() {
  const [cardData, setCardData] = useState([
    {
    id: Date.now(),
    title: 'Побывал в горах',
    description: 'Сегодня я почувствовал детское волнение...',
    mood: emoji[1].symbol,
    date: 'Вт 14 янв',
    img: pen
  },
  {
    id: Date.now(),
    title: 'Побывал в горах',
    description: 'Сегодня я почувствовал детское волнение...',
    mood: emoji[3].symbol,
    date: 'Вт 14 янв',
    img: pen
  },
  {
    id: Date.now(),
    title: 'Побывал в горах',
    description: 'Сегодня я почувствовал детское волнение...',
    mood: emoji[10].symbol,
    date: 'Вт 14 янв',
    img: pen
  }

])

  const createCard = (newPost) => {
    setCardData([...cardData, newPost])

  }

  const removeCard = (card) => {
    setCardData(cardData.filter(p => p.id !== card.id))
  }

  return (
    <BrowserRouter>
      <Header cardData={cardData} setCardData={setCardData}/>
      <Routes>
        <Route path='/createCard' element={<CreateCard createCard={createCard} />}/>
        
        <Route path='/' element={<List removeCard={removeCard} cardData={cardData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
