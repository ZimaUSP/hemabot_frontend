import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Wrapper = styled(View)`
  position: relative;
  width: 100%;
  height: 56px;
  border-color: #100F6B;
  border-bottom-width:2px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const InputTitle = styled.Text`
    color: #100F6B;
    font-size: 16px;
    font-family: 'Poppins_600SemiBold';
`

export const InputArea = styled(TextInput)`
margin-left: 16px;
  width: 100%;
  font-size: 16px;
  color: black;
  overflow: hidden;
`;


export const IconWrapper = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(View)`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction:row;
  align-items: center ;
`;
