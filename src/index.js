import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { OnlineRoom } from './screens/OnlineRoom'
import { Lobby } from './screens/Lobby'
import { Client } from 'colyseus.js'
import './index.css'

window.colyseus = new Client(
  process.env.NODE_ENV === 'production'
    ? 'wss://daniel-trivia.herokuapp.com'
    : 'ws://localhost:3553',
)

function App() {
  const [room, setRoom] = useState()
  const state = { room, setRoom }
  return room ? <OnlineRoom {...state} /> : <Lobby {...state} />
}

ReactDOM.render(<App />, document.getElementById('root'))
