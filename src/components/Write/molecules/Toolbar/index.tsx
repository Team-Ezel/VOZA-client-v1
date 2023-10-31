import { ToolbarPropsType } from "@/types/components/Write/ContentsType"
import { ToolbarListData } from "@/assets/data/ToolbarListData"
import * as S from "./style"
import * as I from "@/assets/svgs"
import useFetchFormdata from "@/hooks/useFetchImageFormdata"
import { useRef, useState, ChangeEvent, useEffect } from "react";

export default function Toolbar({ contents, setContents }: ToolbarPropsType) {
    const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>("");
    const imgRef = useRef<HTMLInputElement | null>(null);
    const { fetch, isLoading, data } = useFetchFormdata({
        url: "/file",
        method: "POST",
        onSuccess: () => {
            console.log("성공")
            setContents(contents + `![image](${data.awsUrl})`);
        },
        onFailure: () => {
            console.log("실패")
        }
    });
    const imgObj = isLoading
        ? `![Uploading img.png...]()`
        : `![image](${1})`;

    const ImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.item(0);
        fetch(file)
    }

    return (
        <S.ToolbarWrapper>
            <S.ToolbarSectionWrapper>
                {ToolbarListData.filter((i) => i.section === 1).map((i) => (
                    <S.ToolbarItemWrapper key={i.content} onClick={() => { setContents(contents + i.content) }} >{<i.img />}</S.ToolbarItemWrapper>
                ))}
            </S.ToolbarSectionWrapper>
            <S.ToolbarLine />
            <S.ToolbarSectionWrapper>
                {ToolbarListData.filter((i) => i.section === 2).map((i) => (
                    <S.ToolbarItemWrapper key={i.content} onClick={() => { setContents(contents + i.content) }} >{<i.img />}</S.ToolbarItemWrapper>
                ))}
            </S.ToolbarSectionWrapper>
            <S.ToolbarLine />
            <S.ToolbarSectionWrapper>
                {ToolbarListData.filter((i) => i.name === "Link").map((i) => (
                    <S.ToolbarItemWrapper key={i.content} onClick={() => { setContents(contents + i.content) }} >{<i.img />}</S.ToolbarItemWrapper>
                ))}
                <S.ToolbarItemWrapper >
                    <I.Toolbar_Image />
                    <S.ImageInput
                        type="file"
                        onChange={ImageUpload}
                        ref={imgRef}
                    />
                </S.ToolbarItemWrapper>
                {ToolbarListData.filter((i) => i.name === "Code").map((i) => (
                    <S.ToolbarItemWrapper key={i.content} onClick={() => { setContents(contents + i.content) }} >{<i.img />}</S.ToolbarItemWrapper>
                ))}
            </S.ToolbarSectionWrapper>
        </S.ToolbarWrapper>
    )
}