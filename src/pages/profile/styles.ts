import styled from "styled-components/native";

export const HeaderContainer = styled.View`
    background-color: #100F6B;
    padding: 32px;
    height: 300px;
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