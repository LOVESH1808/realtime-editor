import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidV4} from 'uuid'

const Home = () => {

  const navigate = useNavigate()

  const [roomId, setRoomId] = useState('')
  const [username, setUsername] = useState('')

  const createNewRoom = (e) => {
    e.preventDefault()
    const id = uuidV4()
    setRoomId(id)
    toast.success('Created a new room')
    // console.log(id)
  }

  const joinRoom = () => {
    if(!roomId || !username) {
      toast.error(`Room ID and username required`)
      return
    }

    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    })
  }

  const handleInputEnter = (e) => {
    // console.log(e.code)
    if(e.code === 'Enter') {
      joinRoom()
    }
  }

  return (
    <div className='homePageWrapper'>
      <div className='formWrapper'>
        <img src='/Realtime-Editor-log.png' alt='LOGO' className='homePageLogo' />
        <h4 className='mainLabel'>Paste Invitation Room ID</h4>
        <div className='inputGroup'>
          <input type='text' 
            className='inputBox' 
            placeholder='Room ID' 
            value={roomId} 
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}  
          />
          <input type='text' 
            className='inputBox' 
            placeholder='Username' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <button className='btn joinBtn' onClick={joinRoom}>Join</button>
          <span className='createInfo'>
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom}  href='' className='createNewBtn'>
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
          <h4>Built with 💛 by &nbsp;
            <a href='https://github.com/LOVESH1808'>Lovesh</a>
          </h4>
      </footer>
    </div>
  )
}

export default Home