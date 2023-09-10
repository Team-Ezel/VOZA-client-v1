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
`

const GlobalStyle = () => {
  return <Global styles={style} />
}

export default GlobalStyle
