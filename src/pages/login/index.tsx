import React from "react";
import './styles';
import { Container, InputContainer, Title, SimpleText, HeaderImg} from "./styles";
import { Link } from "@react-navigation/native";
import MainButton from "../../@components/main-button";
import Input from "../../@components/input";
import { useNavigation } from '@react-navigation/native';
import LoginImg from '../../assets/LoginImg.png';


const Login= () => {
    const {navigate} = useNavigation();
    
    const handleLogin=() =>{
        //@ts-ignore
        navigate('BottomTabs');
    }

    return(
        <>
            <Container>
                <HeaderImg source={LoginImg}/>
                <InputContainer>
                    <Title>LOGIN</Title>
                    <Input label='Email'/>
                    <Input label='Senha' password/>
                    <SimpleText>Ainda não tem conta? CLIQUE AQUI</SimpleText>
                    <MainButton filled={true} name="ENTRAR" onPress={handleLogin}/>
                </InputContainer>
            </Container>
        </>
    )
}
export default Login;