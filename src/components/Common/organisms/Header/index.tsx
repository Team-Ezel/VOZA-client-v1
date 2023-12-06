import React, { useState, useEffect } from 'react'
import * as S from './style'
import Link from 'next/link'
import { Logo } from '@/assets/svgs'
import Chatting from '../../atoms/MenuItems/Chatting'
import Profile from '../../atoms/MenuItems/Profile'
import SearchBar from '../../atoms/MenuItems/SearchBar'
import MenuModal from '../../molecules/MenuModal'
import ChatModal from '../../molecules/ChatModal'
import JoinCodeModal from '../../molecules/JoinCodeModal'
import useFetch from '@/hooks/useFetch'

const Header = () => {
  const [chatClicked, setChatClicked] = useState<boolean>(false)
  const [menuClicked, setMenuClicked] = useState<boolean>(false)
  const [CodeClicked, setCodeClicked] = useState<boolean>(false)

  const { isLoading, fetch, data } = useFetch<{
    profileUrl: string
    email: string
  }>({
    url: `/user/profile`,
    method: 'GET',
  })

  useEffect(() => {
    fetch()
  }, [])

  useEffect(() => {
    if (chatClicked) {
      setMenuClicked(false)
    }
  }, [chatClicked])

  useEffect(() => {
    if (menuClicked) {
      setChatClicked(false)
    }
  }, [menuClicked])

  return (
    <>
      <S.HeaderWrapper>
        <div className='block'>
          <Link href={'/main'}>
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
            <Profile
              data={data}
              isLoading={isLoading}
              clicked={menuClicked}
              setClicked={setMenuClicked}
            />
            {menuClicked ? (
              <MenuModal
                joinCode={CodeClicked}
                setJoinCode={setCodeClicked}
                setMenuClicked={setMenuClicked}
              />
            ) : null}
          </S.Menu>
          <S.Menu>
            {CodeClicked ? (
              <JoinCodeModal
                isLoading={isLoading}
                data={data}
                setCodeClicked={setCodeClicked}
              />
            ) : null}
          </S.Menu>
        </div>
      </S.HeaderWrapper>
    </>
  )
}

export default Header
