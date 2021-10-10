import { DrawerContentScrollView, } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Title} from 'react-native-paper';
// import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { DrawerItem ,DrawerView, Drawer, DrawerItemList} from 'react-native-paper';
import { style } from 'styled-system';
import HomeScreen from '../screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../navigation/AuthProvider';

// import auth from '@react-native-firebase/auth';


const Sidebar = ({...props}) => {
    const navigation =useNavigation();
    // const auth = getAuth();
    // const { user, logout } = useContext(AuthContext);
    return (
     
       <View style={{flex:1}}>
           <DrawerContentScrollView {...props}>
               <View style={styles.drawerContent}>
                   <View style={styles.userInfo}>
                       <View>
                  <Title style={styles.title} > Welcome </Title>
                  <Title style={styles.title2} > Yata Woldeab </Title>

                   </View>
                   </View>
                <Drawer.Section style={styles.DrawerSection}>
                <Drawer.Item style={styles.DrawerItem}
                 icon={({color,size}) =>(
                    <Icon name="home-outline"
                        color={color}
                        size={size} />
                        )}
                    label="Home"
                    onPress={() => navigation.navigate('HomeScreen')}

             
                 />
               <Drawer.Item style={styles.DrawerItem}
                 icon={({color,size}) =>(
                    <Icon name="location-exit"
                        color={color}
                        size={size} />
                        )}
                    label="Locations"
                    onPress={() => navigation.navigate('Locations')}

             
                 />
        <Drawer.Item style={styles.DrawerItem}
                 icon={({color,size}) =>(
                    <Icon name="book-search-outline"
                        color={color}
                        size={size} />
                        )}
                    label="Bookings"
                    onPress={() => navigation.navigate('Bookings')}

             
                 />
                  <Drawer.Item style={styles.DrawerItem}
                 icon={({color,size}) =>(
                    <Icon name="contactless-payment-circle-outline"
                        color={color}
                        size={size} />
                        )}
                    label="Payments"
                    onPress={() => navigation.navigate('Payments')}

             
                 />
                </Drawer.Section>
               </View>
           </DrawerContentScrollView>
        
        <Drawer.Section style={styles.bottomDrawer}>
        <Drawer.Item 
        icon={({color,size}) =>(
            <Icon name="exit-to-app"
                color={color}
                size={size}
                />
        )

        }
        onPress={() => navigation.navigate('Landing')}
        // onPress={() => auth().signOut()} 
        
        label="Sign Out"
        />
        


        </Drawer.Section>
       
       </View>
   
    
    )
}

export default Sidebar;

const styles = StyleSheet.create({

    drawerContent:{
        flex: 1
    },
    userInfo:{
        paddingLeft:20
    },
    title:{
        fontSize: 20,
        marginTop: 3,
        fontWeight: 'bold'
    },
    title2:{
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'normal'
    },
    caption:{
        fontSize: 14,
        lineHeight:14
    },
    row:{
    marginTop: 20,
    flexDirection:'row',
    alignItems: 'center'

    },

    section:{
        flexDirection:'row',
        alignItems: 'center',
        marginRight:15
    },
    para:{
        fontWeight: 'bold',
        marginRight: 3
    },
    DrawerSection:{
        marginTop:15
    },

    bottomDrawer:{
        marginBottom: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },

    DrawerItem:{
        paddingTop: 15
    }
})
