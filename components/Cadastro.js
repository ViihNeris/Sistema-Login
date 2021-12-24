import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import Firebase from './Firebase';

export default function Cadastro({navigation}){

const image = {uri: 'https://i0.wp.com/techwek.com/wp-content/uploads/2021/01/wallpaper-hd.jpg?resize=564%2C1002&ssl=1'};

const [email, setEmail] = useState(null);
const [senha, setSenha] = useState(null);

function cadastrar(){
  Firebase.auth().createUserWithEmailAndPassword(email, senha).then(()=>{Alert.alert("Atenção", "Dados cadastrados com sucesso. Faça Login.");  navigation.navigate('Login',{email})
  }).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
      if(errorCode == 'auth/email-already-in-use'){
        Alert.alert('Atenção', 'Este e-mail já está em uso.');
      }else
      if(errorCode == 'auth/weak-password'){
        Alert.alert('Senha', 'Deve conter no mínimo 6 caracteres.');
      }else
      if(errorCode == 'auth/invalid-email'){
        Alert.alert('E-mail', 'Este email é invalido.');
      }
        Alert.alert(errorCode)
  });
}

return(
  <View style = {estilo.container}>
<ImageBackground  resizeMode='cover' source={image}  style = {estilo.wallpaper}>
    <Text style = {estilo.leg}> Cadastre seus dados </Text>
    <TextInput style = {estilo.campo} onChangeText = {(email) => setEmail(email)} value = {email} placeholder = 'Digite o seu Email' required />
    <TextInput style = {estilo.campo} secureTextEntry={true} onChangeText={(senha)=> setSenha(senha)} value={senha} placeholder='Digite a sua senha' required />

    <TouchableOpacity style={estilo.btn} onPress={()=>{cadastrar()}}>
      <Text style={estilo.btntxt}> Cadastrar </Text>
    </TouchableOpacity>
    </ImageBackground>
  </View>

  );
}

const estilo = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wallpaper:{
     flex: 1,
    width: '100%', 
    height: '100%',
    flexDirection: 'column',
    backgroundColor:'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  leg: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: '60%',
    textAlign: "center",
    color: 'white'
  },

  btn: {
    marginTop: 20,
    backgroundColor: '#AD07A2',
    width: 125,
    borderRadius: 10,
  },
  btntxt:{
    color: 'white',
    textAlign: 'center',
    padding: 8,
    marginLeft: 5,
    fontSize: 18
  },

    campo: {
    backgroundColor: '#F7A0EF',
    marginTop: 10,
    borderRadius: 5,
    padding: 8,
    color: 'black',
    width: 250,
    fontWeight: 'bold',
    fontSize: 18
  },

})



