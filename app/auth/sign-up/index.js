import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../constants/Colors';

import { auth } from './../../../configs/FirebaseConfig';
export default function Signup() {
  const Navigation=useNavigation();
  const router=useRouter();

  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [fullName,setFullName]=useState();


  useEffect(()=>{
    Navigation.setOptions({
      headerShown:false
    })
  },[])

  const OnCreateAccount=()=>{
    if (!email || !password || !fullName) {
  ToastAndroid.show('Please enter all details', ToastAndroid.LONG);
  return;
}


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("Signed in",user.email)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode)
    ToastAndroid.show(error.message, ToastAndroid.LONG)
    // ..
  });

  }

  return (
    <View style={{
      padding:25,
      paddingTop:50,
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
      }}>Create New Account</Text>
      {/* user Full Name */}
       <View style={{
              marginTop:20
            }}>
              <Text style={{fontFamily:'outfit'}}>Full Name</Text>
              <TextInput
              style={styles.input}
              placeholder='Enter Full Name'
              value={fullName}
              onChangeText={setFullName}
              />
            </View>
      {/* Email */}
            <View style={{
              marginTop:20
            }}>
              <Text style={{fontFamily:'outfit'}}>Email</Text>
              <TextInput
              style={styles.input}
              onChangeText={setEmail}
              placeholder='Enter Email'/>
              value={email}
            </View>
            {/* password */}
            <View style={{
              marginTop:20
            }}>
              <Text style={{fontFamily:'outfit'}}>Password</Text>
              <TextInput
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder='Enter Passwrod'/>
            </View>
            {/* Buttom */}
            <TouchableOpacity onPress={OnCreateAccount} style={{
                    padding:20,
                    backgroundColor:Colors.PRIMARY,
                    borderRadius:15,
                    marginTop:50
                  }}>
                    <Text style={{
                        color:Colors.WHITE,
                        textAlign:'center'
                    }}>Create Account</Text>
                  </TouchableOpacity>
                  {/* Create Account Button */}
                  <TouchableOpacity
                    onPress={()=>router.replace('auth/sign-in')}
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
                    }}>Sign in</Text>
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
