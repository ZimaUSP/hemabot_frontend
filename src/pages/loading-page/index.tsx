import React, { useState } from "react";
import { Container, SimpleText, Title, Wrapper,} from "./styles";
import {TouchableOpacity, Text, Alert} from 'react-native'
import MainButton from "../../components/Main Button";
import Input from "../../components/Input";
import { useNavigation } from '@react-navigation/native';


const LoadingPage= () => {
    const {navigate} = useNavigation();
    const [sent, setSent]=useState(true)

    return(
        <Wrapper>
        {sent?(
        <>
        <Container>
            <Title>Carregue os itens dentro do Hemabot!</Title>
            <SimpleText> Clique em enviar quando fechar as portas e estiver tudo pronto!</SimpleText>
        </Container>
        <MainButton filled={true} name={'ENVIAR!'} onPress={()=> setSent(false)}></MainButton>
        </>
    ):(
        <>
        <Container>
            <Title>Seus itens foram enviados!</Title>
            <SimpleText>Aguarde confirmação do receptor</SimpleText>
        </Container>
        <MainButton filled={true} name={'VOLTAR AO MENU'} onPress={()=> navigate('MainPage')}></MainButton>
        </>
    )}
        </Wrapper>
    )
}
export default LoadingPage;