import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";


export const Button = styled.TouchableOpacity`
    margin-top: 16px;
    border: 2px #FF545E;
    align-items: center;
    justify-content: center;
    height: 56px;
    border-radius: 8px;
    width: 100%;
`

export const Buttontext = styled.Text`
    color: white;
    align-self: auto;
    font-size: 20px;
    font-family: 'Poppins_600SemiBold';
    letter-spacing: 2px;
`