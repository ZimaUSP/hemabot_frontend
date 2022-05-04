import React, { useState } from "react";
import './styles';
import { TextContainer, Title, HeaderContainer, ButtonView, ImageContainer, Container} from "./styles";
import MainButton from "../../components/Main Button";
import { useNavigation } from '@react-navigation/native';
import Input from "../../components/Input";
import { Formik } from 'formik';



const Profile= () => {
    const {navigate} = useNavigation();
    
    const handleLogin=() =>{
        //@ts-ignore
        navigate('Login');
    }
    const [isEditable, setIsEditable] = useState(false);

    return(
        <Container>
            <ImageContainer>
                {/* <ImgHeader source={HeaderImg}/> */}
            </ImageContainer>
            <TextContainer>
                <HeaderContainer>
                    <Title>Ross Sumie</Title>
                    {/* <Subtitle>Técnico de enfermagem</Subtitle> */}
                </HeaderContainer>
                <Formik
                    initialValues={{
                        name:'Ross Sumie',
                        email:'rossanasumie@usp.br',
                        cpf:'111.111.111-11',
                        password:'zimazima'
                    }}
                    onSubmit={handleLogin}>
                        {({
                            values,
                            handleChange,
                        })=>(
                    <>
                    <Input 
                        title={true}
                        label={'Nome:'}
                        value={values.name}
                        onChangeText={handleChange('name')}
                        editable={isEditable}
                        />
                    <Input 
                        title={true} 
                        label={'Email:'}
                        value={values.email}
                        onChangeText={handleChange('email')}
                        editable={isEditable}

                        />

                    <Input 
                        title={true} 
                        label={'CPF:'}
                        value={values.cpf}
                        onChangeText={handleChange('cpf')}
                        editable={isEditable}

                        />
                    <Input 
                        title={true} 
                        label={'Senha:'}
                        value={values.password}
                        onChangeText={handleChange('password')}
                        editable={isEditable}
                        password
                        />
                    </>
                        )}
                    </Formik>
                    <ButtonView>
                        <MainButton name={isEditable? 'SALVAR': 'EDITAR'} filled={false} onPress={()=> setIsEditable(!isEditable)}/>
                        <MainButton name='LOG OUT' filled={true} onPress={()=> 
                            //@ts-ignore
                            navigate('Login')}/>
                    </ButtonView>
            </TextContainer>
        </Container>
    )
}
export default Profile;