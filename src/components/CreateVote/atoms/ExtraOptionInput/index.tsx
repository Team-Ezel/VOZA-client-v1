import React from 'react';
import * as S from './style';
import { Cross } from '@/assets/svgs';

type ExtraOptionInputProps = {
  PlaceholderText: string;
  onRemove: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange를 선택적으로 받을 수 있도록 수정
};

const ExtraOptionInput: React.FC<ExtraOptionInputProps> = ({
  PlaceholderText,
  onRemove,
  onChange,
}) => {
  return (
    <S.ExtraOptionInputContainer>
      <S.ExtraOptionInput placeholder={PlaceholderText} onChange={onChange} />
      <S.CrossWrapper onClick={onRemove}>
        <Cross />
      </S.CrossWrapper>
    </S.ExtraOptionInputContainer>
  );
};

export default ExtraOptionInput;
