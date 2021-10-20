import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useAnimationState } from 'moti';
import {FontAwesome} from '@expo/vector-icons'
import * as S from './styles';
import styled from 'styled-components/native';

type InputProps = TextInputProps & InputExclusiveProps;

interface InputExclusiveProps {
  label: string;
  password?: boolean;
}

const Input: React.FC<InputProps> = ({ label, password }) => {
  const [text, setText] = useState<string>('');
  const [visibility, setVisibility] = useState<boolean>(password? false: true);
  const [focused, setFocused] = useState<boolean>(false)
  return (
    <S.Wrapper style={focused ? {borderColor: '#FF545E'}: {borderColor: '#100F6B'}}>
      <S.Container>
        <S.InputArea
          placeholder={label}
          onFocus={()=> setFocused(true)}
          onBlur={()=>setFocused(false) }
          onChangeText={setText}
          value={text}
          secureTextEntry={visibility ? false : true}
        />
      </S.Container>
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