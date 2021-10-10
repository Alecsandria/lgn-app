import React, { useRef, useState } from 'react';
import { CheckBox,TouchableOpacity, Text, ScrollView, View, StyleSheet, Image, KeyboardAvoidingView, Dimensions} from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from '../firebase';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { borderColor } from 'styled-system';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice';
const Signup = () => {

    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);

    const navigation =useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)

      .then((result) => {
        console.log(result); 
        navigation.navigate('HomeScreen')   


      })
     
  


  };
//   const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView style={{flex:1 , backgroundColor: '#ffffff'}}
    showsHorizontalScrollIndicator={false}>
        <View style={styles.ImageContainer}>
          <Image 
            source={require("./../assets/img/img2.png")}
            style={styles.Image}>
            
           </Image>
           </View>
                    <Text style={styles.brandViewText}>
                        Let's Get Nail'd
                    </Text>
            
           
               {/* Bottom View  */}
               {/* <View style= {styles.bottomView}>  */}
         
         <View style= {tw`h-full flex-1 items-center	bg-white justify-center	`}> 
         <KeyboardAvoidingView
         keyboardVerticalOffset={50}
         behavior={'padding'}
         style={styles.containerAvoidView}>
           {/* Welcome View */}
           <View style={{padding: 40}}>
           <Text style={styles.SubTitle}> Name</Text>      
        <TextInput
                        label="Name"
                        
                        placeholder="Enter email address"
                        placeholderTextColor= '#9CA3AF'
                        keyboardType="default"
                        style={styles.TextBox}

                    />
            <Text style={styles.SubTitle}> Mobile Number</Text>

          <FirebaseRecaptchaVerifierModal
         ref={recaptchaVerifier}
         firebaseConfig={firebase.app().options}
      
        />
        
     
        <TextInput 
          placeholder="Phone Number"
        //   icon="phone"
          placeholder="Enter mobile number"
          placeholderTextColor= '#9CA3AF'
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          autoCompleteType="tel"
          style={styles.TextBox}
        />    


        <Text style={styles.SubTitle}> Email Address</Text>      
        <TextInput
                        label="Email Address"
                        icon="mail"
                        placeholder="Enter email address"
                        placeholderTextColor= '#9CA3AF'
                    
                        keyboardType="email-address"
                        style={styles.TextBox}

                    />
  {/* <View style={styles.containerCheck}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text>Is CheckBox selected: {isSelected ? "👍" : "👎"}</Text>
    </View> */}



          {/* SignUp Button */}
          <View style={{
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
        <TouchableOpacity
         style={styles.LoginButton}
        //   onPress={sendVerification}
        //   onPress={ ()=>  {
        //     dispatch(setOrigin({
        //       sendVerification
        //     }))
        //     dispatch(sendVerification(null));
        //     navigation.navigate('Confirmation')
           
        //   }}
          onPress={() => { sendVerification(); navigation.navigate('Confirmation'); }}
           
        >
          
          <Text style={styles.LoginButtonText}>
             Sign Up
            </Text>
     
        </TouchableOpacity>
     
        </View>
        {/* <TextInput
          placeholder="Confirmation Code"
          onChangeText={setCode}
          keyboardType="number-pad"
          style={styles.textInput}
        />
        <TouchableOpacity  style={styles.LoginButton} onPress={confirmCode}>
          <Text  style={styles.LoginButtonText}>Send Verification</Text>
        </TouchableOpacity>  */}
        </View>

        </KeyboardAvoidingView>
        </View>
            
       
      {/* </View> */}
    </ScrollView>

  );
};


export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textInput: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        fontSize: 24,
        borderBottomColor: '#7f8c8d33',
        borderBottomWidth: 2,
        marginBottom: 10,
        textAlign: 'center',
      },
      sendVerification: {
        padding: 20,
        backgroundColor: '#3498db',
        borderRadius: 10,
      },
      sendCode: {
        padding: 20,
        backgroundColor: '#9b59b6',
        borderRadius: 10,
      },
      buttonText: {
        textAlign: 'center',
        color: '#ffffff',
      },
      brandView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    brandViewText:{
        // color: '#000',
        // fontSize: 30,
        // fontWeight: 'bold',
        // textTransform: 'uppercase'
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000000',
        padding: 10
    },


    bottomView:{
        flex: 1.5,
        backgroundColor: '#fdfdfd',
        bottom: 30,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
        height: 550,
        borderColor: '#eadaea',
        borderWidth: 2,
        

    },
    // new 
    container:{
        flex: 1,
        padding:  40
    },
    containerAvoidView:{
     flex: 1,
     alignItems: 'center',
     padding: 10,
    },
    textTitle:{
        marginBottom: 50,
        marginTop: 50,
        fontSize: 15,
        color: '#000',
        textAlign: 'center',
    


    },

    containerInput:{
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomColor: 5.5 ,
     
    },
    openDialog:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    phoneInput:{
        marginLeft: 5,
        flex: 1,
        height: 50,
       
    },
    LoginButton:{
        alignSelf: 'center',
        backgroundColor: '#eadaea',
        justifyContent: 'center',
        borderRadius: 6,
        height: 50,
        width: 250,
        borderWidth: 1,
        borderColor:'white',



            
    },
    LoginButtonText:{
        fontSize: 16,
        textAlign: 'center',
     
    },
    SubTitle:{
    fontSize: 18,
  marginBottom: 10,
  paddingLeft:10,
  letterSpacing: 1,
  fontWeight: 'bold',
  color: '#1F2937',
    },

    TextBox:{
    backgroundColor:'white',
    borderWidth:1,
    borderColor: '#eadaea',
  padding: 15,
  width:300,
  borderRadius: 5,
  fontSize: 16,
  height: 60,
  marginVertical: 3,
  marginBottom: 10,
  color: '#1F2937',
    },

    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
    Image:{
        width: 225,
        height: 225,
   
   
    },
    ImageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:40
    }
    });


