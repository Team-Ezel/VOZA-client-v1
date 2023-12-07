import { contentsPropsType } from '@/types/components/Write/ContentsType'
import * as S from './style'
import TextareaAutosize from 'react-textarea-autosize'
export default function ContentInput({
  contents,
  setContents,
}: contentsPropsType) {
  return (
    <S.ContentInput>
      <TextareaAutosize
        minRows={1}
        value={contents}
        onChange={(e) => {
          setContents(e.target.value)
        }}
        className='contentTextArea'
        placeholder='내용을 입력해주세요'
      />
    </S.ContentInput>
  )
}
