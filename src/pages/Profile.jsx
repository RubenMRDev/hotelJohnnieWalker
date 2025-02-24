import React from 'react'
import CardAndDeck from '../components/CardAndDeck/CardAndDeck'

function Profile() {
  return (
    <CardAndDeck room={{name: "101", description: "2 habitaciones, 1 baño", image: "https://res.cloudinary.com/dd5hetwb8/image/upload/ab64d420-aeb2-4589-b295-5bc3a3118859.png"}} price={"250"} checkIn={"06/02/2025"} checkOut={"16/02/2025"}  onCancel/>
  )
}

export default Profile; 
