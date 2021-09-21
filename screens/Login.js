import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from 'formik';

//icons
import {Octicons, Ionicons, Fontisto, EvilIcons} from '@expo/vector-icons';


// import {
   
// } from './../components/styles';

import {ImageBackground, ScrollView, View, Dimensions, Text, StyleSheet, KeyboardAvoidingView,
     TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

//colours
// const {brand, darkLight, primary } = Colors;

const Login = ({navigation}) => {
    const [phoneNumber, setPhoneNumber] = useState();
const onChangePhone = (number) =>{
    setPhoneNumber(number)
}
    
    return(
        <ScrollView style={{flex:1 , backgroundColor: '#ffffff'}}
        showsHorizontalScrollIndicator={false}>
            <ImageBackground 
            source={require("./../assets/img/img2.png")}
            style={{
                height: Dimensions.get('window').height / 2.5,
            }}>
                <View style={styles.brandView}>
                    <Text style={styles.brandViewText}>
                        Let's Get Nail'd
                    </Text>
                </View>
            </ImageBackground>
            {/* Bottom View  */}
            <View style= {styles.bottomView}> 
         
            <View style= {styles.container}> 
            <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behavior={'padding'}
            style={styles.containerAvoidView}>
            {/* Welcome View */}
            <View style={{padding: 40}}>
                <Text style={{color: '#4632A1', fontSize: 34,  textAlign: 'center',}}> Welcome</Text>
                
              <Text style={styles.textTitle}>
                Enter Mobile Number
              </Text>
              <View style = {styles.containerInput}>
                <View style={styles.openDialog}> 
                <Text>{"+44 | "}</Text>
                </View>
                <TextInput
                styles={styles.phoneInput}
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={onChangePhone}
                secureTextEntry={false}/>
              </View>
              {/* Login Button */}
              <View style={{
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
                  <TouchableOpacity  style={styles.LoginButton}
                  onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.LoginButtonText}>
                        Login
                    </Text>
                  </TouchableOpacity>
                  
                  </View>
              </View>
                 </KeyboardAvoidingView>
            </View>
            
            </View>
            
        </ScrollView>
    )
}

export default Login;

const styles= StyleSheet.create({
    brandView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    brandViewText:{
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
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
        borderRadius: 15,
        height: 40,
        width: 220,
        borderWidth: 1
            
    },
    LoginButtonText:{
        fontSize: 16,
        textAlign: 'center',
     
    }


});