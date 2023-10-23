import styled from '@emotion/styled'

export const SearchTab = styled.div`
  width: 68.5em;
  float: right;
`

export const SearchTabWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 22em;
  border-radius: 0.7em;
  margin-left: auto;

  div {
    margin-left: 4em;
  }

  input,
  input:focus {
    border-radius: 0.7em;
    font-size: 18px;
    height: 3em;
    border: none;
    padding-left: 1em;
    outline: none;
  }
`
