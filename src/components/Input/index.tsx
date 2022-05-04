import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import * as S from './styles';

type InputProps = TextInputProps & InputExclusiveProps;

interface InputExclusiveProps {
  label: string;
  password?: boolean;
  title: boolean;
}

const Input: React.FC<InputProps> = ({ label, password, title,...rest}) => {
  const [visibility, setVisibility] = useState<boolean>(password? false: true);
  const [focused, setFocused] = useState<boolean>(false)
  return (
    <S.Wrapper style={focused ? {borderColor: '#FF7719'}: {borderColor: '#1455d1'}}>
      {title?(
      <S.Container>
      <S.InputTitle>{label}</S.InputTitle>
        <S.InputArea
          onFocus={()=> setFocused(true)}
          onBlur={()=>setFocused(false) }
          secureTextEntry={visibility ? false : true}
          {...rest}
        />
      </S.Container>
      ):(
        <S.Container>
          <S.InputArea
          placeholder={label}
          onFocus={()=> setFocused(true)}
          onBlur={()=>setFocused(false) }
          secureTextEntry={visibility ? false : true}
          {...rest}
        />
        </S.Container>
      )}
      {password && (
        <S.IconWrapper onPress={() => setVisibility((prev) => !prev)}>
          {visibility ? (
            <FontAwesome name='eye' width={24} height={24} />
          ) : (
            <FontAwesome name='eye-slash' width={24} height={24} />
          )}
        </S.IconWrapper>
      )}
    </S.Wrapper>
  );
};

export default Input;