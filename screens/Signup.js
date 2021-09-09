import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


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
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
} from './../components/styles';

import {View} from 'react-native';

//colours
const {brand, darkLight, primary } = Colors;

const Signup = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true)
    return(
        <StyledContainer>
            <StatusBar style= "dark"/>
            <InnerContainer>
                <PageTitle> Lets Get Naild</PageTitle>
                <SubTitle> Account Signup</SubTitle>
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
                        placeholder="user@gmail.com"
                        placeholderTextColor= {darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"

                    />
                       <MyTextInput
                        label="Email Address"
                        icon="mail"
                        placeholder="user@gmail.com"
                        placeholderTextColor= {darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"

                    />
                       
                        <MyTextInput
                        label="Password"
                        icon="lock"
                        placeholder="* * * * *"
                        placeholderTextColor= {darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry= {hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}

                    />
                     <MyTextInput
                        label="Confirm Password"
                        icon="lock"
                        placeholder="* * * * *"
                        placeholderTextColor= {darkLight}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry= {hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}

                    />
                   
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Login
                        </ButtonText>
                    </StyledButton>
                    <Line/>
                  
                    <ExtraView>
                        <ExtraText>Already have an account </ExtraText>
                    </ExtraView>
                    <TextLink onPress={() => navigation.navigate('Login')}>
                        <TextLinkContent>Login</TextLinkContent>
                    </TextLink>
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
export default Signup;
