import React from 'react'
import Card from '../components/CardAndDeck/Card'

function Profile() {
  return (
    <Card room={{name: "101", description: "2 habitaciones, 1 baño", image: "../src/assets/image/room1.png"}} price={"250"} checkIn={"06/02/2025"} checkOut={"16/02/2025"}  onCancel/>
  )
}

export default Profile
