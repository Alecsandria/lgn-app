import React , {useState} from 'react';


import {
    LandingImage,
    LandingContainer,
    Colors,
    LandingButtonSignup,
    LandingButtonTextSignup,
    LandingButtonTextLogin,
    LandingButtonLogin,
    Parent,
    LandingLogoText
    

} from './../components/styles';


const {landing, primary,brand} = Colors;

const Landing = ({navigation}) => {

    return(
        
        
   <LandingContainer >
    <LandingImage
    source={require('./../assets/img/Rectangle.png')} resizeMode="cover" >
    </LandingImage>

    <Parent>
    <LandingButtonLogin onPress={() => navigation.navigate('Login')}>
        <LandingButtonTextLogin>
            Login
        </LandingButtonTextLogin>
    </LandingButtonLogin>
    <LandingButtonSignup onPress={() => navigation.navigate('Signup')}>
<LandingButtonTextSignup>
    SignUp
</LandingButtonTextSignup>
    </LandingButtonSignup>
    </Parent>
  </LandingContainer>          
           
    
    )
}

export default Landing;

