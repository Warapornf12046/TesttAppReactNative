import { View, Text ,ScrollView,Image, Button} from 'react-native'
import React from 'react'


const Home = () => {
  
  return (
    <ScrollView style={{padding:10}}>
      <View>
        <Text style={{fontSize:35}}>
          WP
        </Text>
      </View>

      <View>
        <Text style={{fontSize:30}}>สอนแต่งหน้า</Text>
        <Image 
          source={require('../img/makeup/test.png')} 
          style={{width: "100%", width:"100%"}}>

        </Image>
         
        
        <Image 
          source={{uri:'https://s3-ap-southeast-1.amazonaws.com/content-platform-production-ap-southeast-1/sephora-content-platform-_50a05232-793a-4f0b-97b9-dc9aaafaecaa'}} 
          style={{width: "100%", height:200}}>

        </Image>
         
      </View>
    </ScrollView>
  )
}

export default Home