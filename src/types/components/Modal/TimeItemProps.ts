export type TimeItemProps = {
    time : string,
    isSelected: boolean; // isSelected 프로퍼티 추가
    onItemClick: (time: string) => void; // onItemClick 프로퍼티 추가
}