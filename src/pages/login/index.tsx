import React from "react";
import './styles';
import { Container, InputContainer, Title, SimpleText} from "./styles";
import { Link } from "@react-navigation/native";
import MainButton from "../../@components/main-button";
import Input from "../../@components/input";
import { useNavigation } from '@react-navigation/native';


const Login= () => {
    const {navigate} = useNavigation();
    
    const handleLogin=() =>{
        //@ts-ignore
        navigate('BottomTabs');
    }

    return(
            <Container>
                <InputContainer>
                    <Title>LOGIN</Title>
                    <Input label='Email'/>
                    <Input label='Senha' password/>
                    <SimpleText>Ainda não tem conta? CLIQUE AQUI</SimpleText>
                    <MainButton name="ENTRAR" onPress={handleLogin}/>
                </InputContainer>
            </Container>
    )
}
export default Login;