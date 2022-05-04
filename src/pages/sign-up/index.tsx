import React from "react";
import './styles';
import { Container, InputContainer, Title, SimpleText, HeaderImg, LinktoPage, Redirect} from "./styles";
import MainButton from "../../components/Main Button";
import Input from "../../components/Input";
import { useNavigation } from '@react-navigation/native';
import Link from "../../components/Link";
import { Formik } from 'formik';



const SignUp= () => {
    const {navigate} = useNavigation();
    
    const handleAuth=() =>{
        //@ts-ignore
        navigate('BottomTabs');
    }
    const handleLogin=() =>{
        //@ts-ignore
        navigate('Login');
    }


    return(
        <>
            <Container>
                {/* <HeaderImg source={LoginImg}/> */}
                <InputContainer>
                    <Title>CADASTRO</Title>
                    <Formik
                    initialValues={{
                        name:'',
                        email:'',
                        cpf:'',
                        password:'',
                    }}
                    onSubmit={handleAuth}>
                        {({
                            values,
                            handleChange,
                        })=>(
                    <>

                    <Input 
                        title={true} 
                        label='Nome:' 
                        value={values.name} 
                        onChangeText={handleChange('name')}
                    />

                    <Input 
                        title={true} 
                        label='Email:'
                        value={values.email}
                        onChangeText={handleChange('email')}
                    />
                    <Input 
                        title={true} 
                        label='CPF:' 
                        value={values.cpf}
                        onChangeText={handleChange('cpf')}
                    />
                    <Input 
                        title={true} 
                        label='Senha:' 
                        value={values.password}
                        onChangeText={handleChange('password')}
                        password/>
                    </>
                        )}
                    </Formik>
                    <Redirect>
                        <SimpleText>Já tem conta?</SimpleText>
                        <Link color={true} text="CLIQUE AQUI" onPress={handleLogin}/>
                    </Redirect>
                    <MainButton filled={true} name="CADASTRAR" onPress={handleAuth}/>
                </InputContainer>
            </Container>
        </>
    )
}
export default SignUp;