import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";


export const Button = styled.TouchableOpacity`
    background-color:#FF545E;
    border: 1px transparent;
    align-items: center;
    justify-content: center;
    height: 56px;
    border-radius: 8px;
`

export const Buttontext = styled.Text`
    color: white;
    align-self: auto;
    font-size: 20px;
    font-family: 'Poppins_600SemiBold';
    letter-spacing: 2px;
`