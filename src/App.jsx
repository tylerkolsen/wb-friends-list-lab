import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
  const [friends, setFriends] = useState([])
  const [picture, setPicture] = useState('')
  const [name, setName] = useState('')

  const addFriend = (e) => {
    e.preventDefault()
    setFriends(
      [...friends, {
        picture: picture,
        name: name
      }]
    )
    setPicture('')
    setName('')
  }

  const friendInfo = friends.map((friendsObj) => {
   return (
    <div key={friendsObj.name}>
      <img src={friendsObj.picture} alt={`Picture of ${friendsObj.name}`} width={200} height={200}/>
      <span>{friendsObj.name}</span>
    </div>
    )
  })

  return (
  <>
    <div>
        <label htmlFor="picture">Picture: </label>
        <input type="text" id="picture" value={picture} onChange={(e) => setPicture(e.target.value)}/>

        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>

        <button type="submit" onClick={addFriend}>Add Friend</button>
    </div>
    {friendInfo}
  </>
  )
}
