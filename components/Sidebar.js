import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Container, Content, Icon, Footer, Right, Button} from 'native-base'
// import Animated from 'react-native-reanimated'

const Sidebar = ({...props}) => {
    // const translateX = Animated.interpolate(progress, {
    //     inputRange: [0,1],
    //     outputRange: [-100, 0],
    // });
    return (
     
       <Container>
           <Header style ={{backgroundColor: '#ffffff', borderBottomWidth: 0}}>
               <Right>
                   <Button transparent> 
                        <Icon name='menu'/>
                   </Button>
               </Right>
            </Header>
           <Content>
           <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
           </Content>
           <Footer/>
       </Container>
   
    
    )
}



export default Sidebar

const styles = StyleSheet.create({})
