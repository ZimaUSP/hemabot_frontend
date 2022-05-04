import React from "react";
import './styles';
import { Container, InputContainer, Title, SimpleText, Redirect} from "./styles";
import MainButton from "../../components/Main Button";
import Input from "../../components/Input";
import { useNavigation } from '@react-navigation/native';
import Link from "../../components/Link";


const Login= () => {
    const {navigate} = useNavigation();
    
    const handleAuth=() =>{
        //@ts-ignore
        navigate('BottomTabs');
    }
    const handleSignUp=() =>{
        //@ts-ignore
        navigate('SignUp');
    }

    return(
        <>
            <Container>
                {/* <HeaderImg source={LoginImg}/> */}
                <InputContainer>
                    <Title>LOGIN</Title>
                    <Input title={true} label='Email:'/>
                    <Input title={true} label='Senha:' password/>
                    <Redirect>
                        <SimpleText>Não tem conta?</SimpleText>
                        <Link color={true} text="CLIQUE AQUI" onPress={handleSignUp}/>
                    </Redirect>
                    <MainButton filled={true} name="ENTRAR" onPress={handleAuth}/>
                </InputContainer>
            </Container>
        </>
    )
}
export default Login;