import styled from "styled-components/native";
import { TextInput, View } from 'react-native';

export const HeaderContainer = styled.View`
    background-color: #100F6B;
    height: 300px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
`
export const ImgHeader = styled.Image`
    flex:1;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
`
export const TextContainer = styled.View`
    background-color: #F5F5EF;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    z-index:0;
    flex: 1;

`
export const ProfileImage = styled.Image`
    position: absolute;
    top:200px;
    align-self: center;
    border-radius: 100px;
    width: 150px;
    height: 150px;
    border-color: #F5F5EF;
    z-index: 2;
`
export const Title = styled.Text`
    margin-top: 32px;
    color: black;
    font-size: 32px;
    font-family: 'Poppins_600SemiBold';
`
export const Subtitle = styled.Text`
    font-size: 24px;
    font-family: 'BebasNeue_400Regular';
    color: black;
`

export const InfoBox = styled(View)`
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

export const InfoText = styled.Text`
    margin-top: 16px;
    color: black;
    font-size: 16px;
    font-family: 'Poppins_400Regular';
`

export const InfoTitle = styled.Text`
    margin-top: 16px;
    margin-right: 16px;
    color: #100F6B;
    font-size: 16px;
    font-family: 'Poppins_600SemiBold';
`

// export const ButtonView =styled(View)`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     width: 100%;
//     overflow: hidden;
// `