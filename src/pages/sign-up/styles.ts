import styled from "styled-components/native";


export const HeaderImg = styled.Image` 
    width: 430px;
    height:430px;
`
export const Container = styled.View`
    background-color: #1455d1;
    flex: 1;

`
export const Title = styled.Text`
    color: black;
    letter-spacing: 3px;
    font-size: 56px;
    font-family: 'Poppins_600SemiBold';
    margin-top: 24px;
`

export const Redirect = styled.View`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    align-self: center ;
`

export const SimpleText = styled.Text `
    color: black;
    font-family: 'Poppins_400Regular';
`
export const LinktoPage = styled.TouchableOpacity `
    margin-left: 8px ;
    color: #FF7719;
    font-family: 'Poppins_400Regular';
`
export const InputContainer = styled.View`
    background-color: #F5F5EF;
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    width: 100%;
    padding: 32px;
    position: absolute;
    bottom: 0;
`