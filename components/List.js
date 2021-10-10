import React, { Component } from 'react'
import { render } from 'react-dom'
import { StyleSheet, Text, View,TextInput, Button} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice';

import { useState  } from 'react'


class List extends Component {
   
state ={
    myTextInput:'',
    location: [],

}
  
    onChangeInput = (event) => {
        this.setState({
            myTextInput:event
        })
    }

    
    onAddUser= ()=>{
        this.setState(prevState =>{
            return{
                myTextInput:'',
                location: [...prevState.location, prevState.myTextInput],

            }
        })

    }

  render() {
 
    return (
        
        <View styles ={styles.inputWrapper}>
            {
                this.state.location.map(item=>(
                    <Text style ={styles.users} key={item}> {item}</Text>
                ))
            }
             
            {/* <TextInput
             value={this.state.myTextInput}
            styles={styles}
             onChangeText={this.onChangeInput}/> */}

<GooglePlacesAutocomplete
placeholder="Add Location"
styles={styles}

onPress={( details = null)=>    
    
    this.onAddUser(details.description)
     
    //    console.log(details.description)
    }

fetchDetails={true}
returnKeyType={'search'}
enablePoweredByContainer={false}
minLength={2}
query={{
  key: GOOGLE_MAPS_APIKEY,
  language: 'en',
  components: 'country:gb',

}}
nearbyPlacesAPI="GooglePlacesSearch"
debounce={400}


/>

{/* 
            <Button
          
            title="Add user"
            // onPress={( details = null) =>  {
            //     this.onAddUser(details);
            //     }}
           onPress={this.onAddUser}
           /> */}
       
        </View>
    )

        }
    }

const styles = StyleSheet.create({
    inputWrapper:{
        width: '100%',

    },
    input:{
        width: '100%',
        backgroundColor: '#f2f2f2',
        marginTop: 20,
        fontSize:20,
        padding: 10


    },
    users:{
        fontSize: 30,
        borderWidth: 1,
        borderColor:'#cecece',
        padding: 10,
        marginBottom: 20
    },
    container:{
        paddingTop: 20,
        flex:0
    },
    textInput:{
        backgroundColor:'#f6f6f6',
        borderRadius:8,
        fontSize: 18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    },

})

export default List;