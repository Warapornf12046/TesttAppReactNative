import { View, Text , Image, Pressable} from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
    //สร้างฟังก์ชั่น
    const onPressFunction = () =>{
        navigation.navigate('Home') //Homeตรงกับname="Home"ในapp.js
    }
    return (
        <Pressable onPress={onPressFunction}> 
            <View style={{ 
                flexDirection: 'colum', 
                height: "100%", 
                padding: 0, }}>
                <View style={{ backgroundColor: '#FFFDB5', 
                    flex: 0.95, 
                    alignItems: 'center', 
                    justifyContent: 'center' }}>
                        <Image source={require('../img/POKsplash.png')} 
                        style={{width: "100%", height: "100%"}}></Image>
                </View>

                <View style={{ backgroundColor: '#EE4E4E', flex: 0.05, alignItems: 'center' }}><Text>thesis</Text></View>

            </View>
        </Pressable>


    )
}

export default Splash