import React, { useState } from "react";
import { Container, Title, Wrapper,} from "./styles";
import {TouchableOpacity, Text, Alert} from 'react-native'
import MainButton from "../../components/Main Button";
import Input from "../../components/Input";
import { useNavigation } from '@react-navigation/native';


const WaitingPage= () => {
    const {navigate} = useNavigation();
    
    const handleLoadingPage=() =>{
        //@ts-ignore
        navigate('LoadingPage');
    }

    return(
        <Wrapper>
        <Container>
            <Title>Hemabot está a caminho!</Title>
        </Container>
        <MainButton filled={true} name={'CHEGOU!'} onPress={handleLoadingPage}></MainButton>
        </Wrapper>
    )
}
export default WaitingPage;