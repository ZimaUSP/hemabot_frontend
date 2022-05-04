import React from "react";
import './styles';
import { Container, Title, SimpleText, Wrapper} from "./styles";
import MainButton from "../../components/Main Button";
import Input from "../../components/Input";
import { useNavigation } from '@react-navigation/native';
import DropDown from "../../components/DropDown";
import { useState } from 'react';


const MainPage= () => {
    const {navigate} = useNavigation();

    const [startlocation, setStartlocation] = useState('');
    const [finishlocation, setFinishlocation] = useState('');
    const [receptorName, setReceptorName] = useState('');
    const [sentItem, setSentItem] = useState('');
    
    const handleLogin=() =>{
        console.log('oaoaoa')
        //@ts-ignore
        navigate('WaitingPage');
    }

    return(
        <Wrapper>
            <Container>
            <Title>Olá, Ross!</Title>
            <SimpleText>Qual a sua localização atual?</SimpleText>
            <DropDown label='Localização atual'
            value={startlocation}
            options={['Ala A', 'Ala B', 'Ala C', 'Ala D', 'Ala E', 'Ala F']}
            onChange={setStartlocation}/>

            <SimpleText>Qual o destino da sua entrega?</SimpleText>
            <DropDown label='Localização de destino'
            value={finishlocation}
            options={['Ala A', 'Ala B', 'Ala C', 'Ala D', 'Ala E', 'Ala F']}
            onChange={setFinishlocation}/>

            <SimpleText>Para quem estamos entregando?</SimpleText>
            <DropDown label='Nome do receptor'
            value={receptorName}
            options={['Thomaz', 'Lucas', 'Julia', 'Leopoldo', 'Oscar']}
            onChange={setReceptorName}/>

            <SimpleText>O que estamos entregando?</SimpleText>
            <DropDown label='Tipo de item'
            value={sentItem}
            options={['Exame de Sangue', 'Exame de Urina', 'Doação', 'Documentos', 'Leopoldo']}
            onChange={setSentItem}/>

            <MainButton filled={true} name="CHAMAR O ROBÔ" onPress={handleLogin}/>
            </Container>
        </Wrapper>
    )
}
export default MainPage;
