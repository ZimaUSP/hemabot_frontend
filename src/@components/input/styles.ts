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
  padding-right: 48px;
  margin-bottom: 16px;
`;

export const InputArea = styled(TextInput)`
  position: absolute;
  width: 100%;
  font-size: 16px;
  color: black;
  margin-top: 16px;
  overflow: hidden;
`;


export const IconWrapper = styled(TouchableOpacity)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
`;

export const Container = styled(View)`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
