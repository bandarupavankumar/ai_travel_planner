import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Login() {
  return (
    <View>
      <Image source={require('./../assets/images/login.jpeg')} 
        style={{
          width:'100%',
          height:500
        }}
      />
      <View>
        <Text style={{fontSize:28,fontFamily:'outfit-bold'}}>AI Travel Plannner</Text>
      </View>
    </View>
  );
}
