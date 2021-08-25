import React  from 'react';

import { StatusBar } from 'expo-status-bar';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    LandingImage,
    LandingContainer,
    Colors,
    LandingButtonSignup,
    LandingButtonTextSignup,
    LandingButtonTextLogin,
    LandingButtonLogin,
    Parent,
    LandingLogoText,
    StyledContainer,
    InnerContainer,
    LocationContainer,
    LocationTitleText,
    LocationBodyText,
    LocationContainerAdd,
    LeftIcon
    

} from './../components/styles';


const {landing, primary,brand, darkLight} = Colors;

const Locations = () => {

    return(
        
        
  <StyledContainer>
       <StatusBar style= "dark"/>
            <InnerContainer>
              
            <LocationContainerAdd>
            <LeftIcon>
            <Octicons name="plus" size={20} color={darkLight}/>
        </LeftIcon>
<LocationBodyText>
  Add New Location
</LocationBodyText>
</LocationContainerAdd>
<LocationContainer>
 
  <LocationTitleText>
    Home
   
  </LocationTitleText>
  <LocationBodyText>
      London N4 3NH, UK
    </LocationBodyText>
</LocationContainer>
<LocationContainer>
  <LocationTitleText>
    Work
   
  </LocationTitleText>
  <LocationBodyText>
      London N4 3NH, UK
    </LocationBodyText>
</LocationContainer>

            </InnerContainer>

  </StyledContainer>        
           
    
    )
}

export default Locations;

