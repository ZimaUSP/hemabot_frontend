import React from "react";
import './styles';
import { Container, Title, SimpleText} from "./styles";
import MainButton from "../../@components/main-button";
import Input from "../../@components/input";
import { useNavigation } from '@react-navigation/native';


const MainPage= () => {
    const {navigate} = useNavigation();
    
    const handleLogin=() =>{
        console.log('oaoaoa')
        //@ts-ignore
        navigate('Login');
    }

    return(
        <Container>
            <Title>Olá, Ross!</Title>
            <SimpleText>Qual a sua localização atual?</SimpleText>
            <Input label='Onde você está?'/>
            <SimpleText>Qual o destino da sua entrega?</SimpleText>
            <Input label='Para onde deseja enviar?'/>
            <Input label='Nome do Receptor'/>
            <Input label='O que estamos entregando?'/>
            <MainButton name="CHAMAR O GLOBI" onPress={handleLogin}/>
        </Container>
    )
}
export default MainPage;