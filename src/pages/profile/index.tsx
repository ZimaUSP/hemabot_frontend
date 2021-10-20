import React from "react";
import './styles';
import { TextContainer, ProfileImage, Subtitle, Title, HeaderContainer} from "./styles";
import {TouchableOpacity, Text, Alert} from 'react-native'
import MainButton from "../../@components/main-button";
import Input from "../../@components/input";
import { useNavigation } from '@react-navigation/native';
import image from '../../assets/ross.jpeg'


const Profile= () => {
    const {navigate} = useNavigation();
    
    const handleLogin=() =>{
        //@ts-ignore
        navigate('Login');
    }

    return(
        <>
            <HeaderContainer/>
            <ProfileImage source={image}/>
            <TextContainer>
                <Title>ROSS SUMIE</Title>
                <Subtitle>Técnico de enfermagem</Subtitle>
                <Input label='Email'/>
                <Input label='Telefone'/>
                <Input label='CPF'/>
            </TextContainer>
        </>
    )
}
export default Profile;