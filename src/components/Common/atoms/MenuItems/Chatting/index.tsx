import { Chat, Chat_filled } from '@/assets/svgs'
import React, { useState } from 'react'

interface ChattingProps {
  clicked: boolean
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const Chatting: React.FC<ChattingProps> = ({ clicked, setClicked }) => {
  return (
    <div onClick={() => setClicked(!clicked)} style={{ marginRight: '1vw' }}>
      {clicked ? <Chat_filled /> : <Chat />}
    </div>
  )
}

export default Chatting
