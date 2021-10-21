import React from "react";
import './styles';
import { TextContainer, ProfileImage, Subtitle, Title, HeaderContainer, ImgHeader, InfoBox, InfoText, InfoTitle, ButtonView} from "./styles";
import MainButton from "../../@components/main-button";
import { useNavigation } from '@react-navigation/native';
import ProfileImg from '../../assets/ross.jpeg'
import HeaderImg from '../../assets/LoginImg.png'


const Profile= () => {
    const {navigate} = useNavigation();
    
    const handleLogin=() =>{
        //@ts-ignore
        navigate('Login');
    }

    return(
        <>
            <HeaderContainer>
                <ImgHeader source={HeaderImg}/>
            </HeaderContainer>
            <ProfileImage source={ProfileImg}/>
            <TextContainer>
                <Title>ROSS SUMIE</Title>
                <Subtitle>Técnico de enfermagem</Subtitle>
                    <InfoBox>
                        <InfoTitle>EMAIL:</InfoTitle>
                        <InfoText>rossanasumie@usp.br</InfoText>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>CELULAR:</InfoTitle>
                        <InfoText>(11)4002-8922</InfoText>
                    </InfoBox>
                    <InfoBox>
                        <InfoTitle>CPF:</InfoTitle>
                        <InfoText>456.351.438-37</InfoText>
                    </InfoBox>
                    {/* <ButtonView>
                        <MainButton name='EDITAR' filled={false}/>
                        <MainButton name='LOG OUT' filled={true}/>
                    </ButtonView> */}
            </TextContainer>
        </>
    )
}
export default Profile;