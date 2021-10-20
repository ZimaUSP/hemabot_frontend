import React from "react";
import './styles';
import { Container, Title, TextBlock, DecorContainer} from "./styles";
import {TouchableOpacity, Text, Alert} from 'react-native'
import MainButton from "../../@components/main-button";
import Input from "../../@components/input";
import { useNavigation } from '@react-navigation/native';


const Info= () => {
    const {navigate} = useNavigation();
    
    const handleLogin=() =>{
        //@ts-ignore
        navigate('Login');
    }

    return(
        <>
        <Container>
            <Title>Sobre Nós</Title>
            <TextBlock>Com o intuito de evitar a contaminação de exames e medicamentos pelo toque humano, 
                principalmente em reconhecimento do cenário pandêmico atual, a GLOBI tem o intuito de fazer entregas autônomas dentro do ambiente hospitalar.</TextBlock>
            <TextBlock>Com um simples apertar de botão, no aplicativo do GLOBI no seu celular, 
                nosso robô usa sensores de distância e movimento para mapear o espaço onde se encontra, adaptando sua rota para desviar de obstáculos
                 e realizando o trajeto de forma autônoma, podendo carregar até 50kg de carga, sejam documentos, exames, medicamentos, e até equipamentos de pequeno porte.</TextBlock>
        </Container>
        <DecorContainer/>
        </>
    )
}
export default Info;