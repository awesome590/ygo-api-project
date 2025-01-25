import {useParams} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Card() {
  const[card, setCard] = useState({})

  async function fetchCard(){
    const {data} = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon')
    setCard(data)
  }

  useEffect(() => {
    fetchCard()
  })

  return (
    <div>
      <img src={card.image_url}></img>
    </div>
  );
}

export default Card;
