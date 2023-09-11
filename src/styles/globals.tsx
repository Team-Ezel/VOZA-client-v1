import React from 'react'
import { Global, css } from '@emotion/react'

const Theme = `

`

const style = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Pretendard;
  }
  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
