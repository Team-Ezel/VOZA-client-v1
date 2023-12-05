import styled from '@emotion/styled'

export const PostOrganisms = styled.div`
  padding-top: 2em;
  padding-left: 3em;
  padding-right: 3em;
  padding-bottom: 2em;
  margin-bottom: 1em;

  display: flex;
  float: left;
  width: 1000px;
  background-color: #fff;
  border-radius: 10px;
  height: auto;
  flex-direction: column;

  hr {
    width: 105%;
    opacity: 60%;
    margin-left: -2.5%;
  }
  .MarkDownContent {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 2rem;
    }
    img {
      max-width: 100%;
    }
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border-radius: 5px;
      overflow-x: auto;
    }
    code {
      font-size: 1.2rem;
    }
  }
`

export const PostContent = styled.div`
  margin-top: 1em;
  line-height: 1.5em;
  font-size: 20px;
  margin-bottom: 1em;
`

export const ImgTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
`

export const EditTab = styled.div`
  margin-left: auto;
  margin-top: 0.5em;

  span {
    color: #999999;
    padding-left: 0.5em;
    cursor: pointer;
  }
`

export const EditArea = styled.textarea`
  margin-top: 1.1em;
  font-size: 20px;
  resize: none;
  height: auto;
  height: 10em;
`
