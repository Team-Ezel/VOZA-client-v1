import React, { useState, useEffect } from 'react'
import * as S from './style'
import Link from 'next/link'
import { Logo } from '@/assets/svgs'
import Chatting from '../../atoms/MenuItems/Chatting'
import Profile from '../../atoms/MenuItems/Profile'
import SearchBar from '../../atoms/MenuItems/SearchBar'
import MenuModal from '../../molecules/MenuModal'
import ChatModal from '../../molecules/ChatModal'

const Header = () => {
  const [chatClicked, setChatClicked] = useState<boolean>(false)
  const [menuClicked, setMenuClicked] = useState<boolean>(false)

  useEffect(() => {
    if (chatClicked) {
      setMenuClicked(false);
    }
  }, [chatClicked]);

  useEffect(() => {
    if (menuClicked) {
      setChatClicked(false);
    }
  }, [menuClicked]);

  return (
    <>
      <S.HeaderWrapper>
        <div className='block'>
          <Link href={'/'}>
            <S.VozaLogo>
              <Logo />
            </S.VozaLogo>
          </Link>
          <SearchBar />
        </div>

        <div className='block'>
          <S.Menu>
            <Chatting clicked={chatClicked} setClicked={setChatClicked} />
            {chatClicked ? <ChatModal /> : null}
          </S.Menu>
          <S.Menu>
            <Profile clicked={menuClicked} setClicked={setMenuClicked} />
            {menuClicked ? <MenuModal /> : null}
          </S.Menu>
        </div>
      </S.HeaderWrapper>
    </>
  )
}

export default Header
