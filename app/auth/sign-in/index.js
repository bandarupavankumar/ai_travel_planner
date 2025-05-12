import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from './../../../constants/Colors';

export default function SignIn() {
    const Navigation =useNavigation();
    const router=useRouter();
    useEffect(()=>{
        Navigation.setOptions({
            headerShown:false
        })
    },[])


  return (
    <View style={{
        padding:25,
        marginTop:40,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:30
      }}>Let&apos;s Sign You In</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GARY,
        marginTop:20
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GARY,
        marginTop:10
      }}>You&apos; been missed</Text>
{/* Email */}
      <View style={{
        marginTop:50
      }}>
        <Text style={{fontFamily:'outfit'}}>Email</Text>
        <TextInput
        style={styles.input}
        placeholder='Enter Email'/>
      </View>
      {/* password */}
      <View style={{
        marginTop:20
      }}>
        <Text style={{fontFamily:'outfit'}}>Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder='Enter Passwrod'/>
      </View>


      {/* Sgin-in button */}
      <View style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
            color:Colors.WHITE,
            textAlign:'center'
        }}>Sign in</Text>
      </View>
      {/* Create Account Button */}
      <TouchableOpacity
        onPress={()=>router.replace('auth/sign-up')}
      style={{
        padding:20,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:20,
        borderWidth:1
      }}>
        <Text style={{
            color:Colors.PRIMARY,
            textAlign:'center'
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.GARY,
        fontFamily:'outfit'
    }
})