import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icons
import {Octicons, Ionicons} from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
} from '../../styles';

import {View} from 'react-native';

//colours
const {brand, darkLight } = Colors;

const Login = () => {

    const [hidePassword, setHidePassword] = useState(true)
    return(
        <StyledContainer>
            <StatusBar style= "dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/img1.png')}/>
                <PageTitle> Lets Get Naild</PageTitle>
                <SubTitle> Account Login</SubTitle>
                <Formik 
                    initialValues={{email:'', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}

                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>
                    <MyTextInput
                        label="Email Address"
                        icon="mail"
                        placeholder="yata_woldeab@hotmail.com"
                        placeholderTextColor= {darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"

                    />

                        <MyTextInput
                        label="Password"
                        icon="lock"
                        placeholder="* * * * * *"
                        placeholderTextColor= {darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry= {hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}

                    />
                </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}


const MyTextInput = ({label, icon, isPassword, hidePassword,setHidePassword ,...props}) => {
    return (
    <View>
        <LeftIcon>
            <Octicons name={icon} size={20} color={brand}/>
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props}/>
        {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword) }>
                <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye' } size={30} color={darkLight}/>
            </RightIcon>
        )}
    </View>);
};
export default Login;
