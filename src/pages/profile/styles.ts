import styled from "styled-components/native";
import { TextInput, View } from 'react-native';

export const Container = styled.ScrollView`
    width: 100%;
    flex: 1;
`

export const ImageContainer = styled.View`
    background-color: #1455d1;
    height: 180px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 32px;
`

export const HeaderContainer = styled.View`
    display: flex ;
    align-items:center ;
    justify-content: center ;
`
// export const ImgHeader = styled.Image`
//     height: 450px;
//     width: 450px;
//     border-bottom-left-radius: 32px;
//     border-bottom-right-radius: 32px;
// `
export const TextContainer = styled.View`
    background-color: #F5F5EF;
    padding: 32px;
    display:flex ;
    flex-direction: column;
    align-items: center;
    z-index:0;

`
export const Title = styled.Text`
    color: black;
    font-size: 32px;
    font-family: 'Poppins_600SemiBold';
`
// export const Subtitle = styled.Text`
//     font-size: 24px;
//     font-family: 'BebasNeue_400Regular';
//     color: black;
// `

 export const ButtonView =styled(View)`
    width: 100% ;
     display: flex;
    flex-direction: column;
     justify-content: space-around;
     overflow: hidden;
`