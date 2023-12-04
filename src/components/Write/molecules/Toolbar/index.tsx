import { ToolbarPropsType } from '@/types/components/Write/ContentsType'
import { ToolbarListData } from '@/assets/data/ToolbarListData'
import * as S from './style'
import * as I from '@/assets/svgs'
import useFetchFormdata from '@/hooks/useFetchFormdata'
import { useRef, useState, ChangeEvent, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function Toolbar({ contents, setContents }: ToolbarPropsType) {
  const imgRef = useRef<HTMLInputElement | null>(null)
  const { fetch, isLoading, data } = useFetchFormdata({
    url: '/file',
    method: 'POST',
    onSuccess: () => {
      toast.success('이미지 업로드 성공')
      setContents(contents + `![image](${data.awsUrl})`)
    },
    onFailure: () => {
      toast.error('이미지 업로드 실패')
    },
  })

  const ImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.currentTarget.files?.item(0)
    const formData = new FormData()
    if (selectedFile) {
      const imageFile = new File([selectedFile], 'noticeImage.png', {
        type: 'image/png',
      })
      formData.append('file', imageFile)
    } else {
      return
    }
    fetch(formData)
  }

  return (
    <S.ToolbarWrapper>
      <S.ToolbarSectionWrapper>
        {ToolbarListData.filter((i) => i.section === 1).map((i) => (
          <S.ToolbarItemWrapper
            key={i.content}
            onClick={() => {
              setContents(contents + i.content)
            }}
          >
            {<i.img />}
          </S.ToolbarItemWrapper>
        ))}
      </S.ToolbarSectionWrapper>
      <S.ToolbarLine />
      <S.ToolbarSectionWrapper>
        {ToolbarListData.filter((i) => i.section === 2).map((i) => (
          <S.ToolbarItemWrapper
            key={i.content}
            onClick={() => {
              setContents(contents + i.content)
            }}
          >
            {<i.img />}
          </S.ToolbarItemWrapper>
        ))}
      </S.ToolbarSectionWrapper>
      <S.ToolbarLine />
      <S.ToolbarSectionWrapper>
        {ToolbarListData.filter((i) => i.name === 'Link').map((i) => (
          <S.ToolbarItemWrapper
            key={i.content}
            onClick={() => {
              setContents(contents + i.content)
            }}
          >
            {<i.img />}
          </S.ToolbarItemWrapper>
        ))}
        <S.ToolbarItemWrapper>
          <I.Toolbar_Image />
          <S.ImageInput type='file' onChange={ImageUpload} ref={imgRef} />
        </S.ToolbarItemWrapper>
        {ToolbarListData.filter((i) => i.name === 'Code').map((i) => (
          <S.ToolbarItemWrapper
            key={i.content}
            onClick={() => {
              setContents(contents + i.content)
            }}
          >
            {<i.img />}
          </S.ToolbarItemWrapper>
        ))}
      </S.ToolbarSectionWrapper>
    </S.ToolbarWrapper>
  )
}
