import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import Firebase from './Firebase';


const image = {uri: 'https://c4.wallpaperflare.com/wallpaper/161/667/676/artwork-digital-art-evelynn-league-of-legends-league-of-legends-video-games-hd-wallpaper-preview.jpg'};

export default function Login({navigation}){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes

  function dados(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function logar(){
    Firebase.auth()
    .signInWithEmailAndPassword(email, senha)
    .then(()=> {
        if (user){
          alert('User does not exist anymore.');
          return;
        }
        // const user * user.uid
        navigation.navigate('Home', {email});
      })
      .catch((error)=> {
        alert(error);
        navigation.navigate('login');
      })
       .catch((error)=> {
        alert(error);
        navigation.navigate('login');
      });
  }

useEffect(()=> {
  Firebase.auth().onAuthStateChanged(function (user){
    const uid = user.uid;
    const email = user.email;
    // alert (email);
  });
}, []);

if(user){
  // alert ("Logado"+user.uid)
  // console.log("Logado"+user.uid)
  return navigation.navigate('Home');
}else{
  // alert("'não logado!'")
  // console.log('não logado!')
}

return(
<View style = {estilo.container}>
<ImageBackground  resizeMode='cover' source={image}  style = {estilo.wallpaper}>

<Text style = {estilo.tit}>
Dance Us!
</Text>

<Text style = {estilo.leg}>
Inscreva-se em nossa academia de dança!
</Text>

<Image source = {{uri: 'https://64.media.tumblr.com/1500326b6e36c162706c768d722802df/tumblr_pcrlopclxd1wrne09o1_1280.gif'}} style = {estilo.img}/>

<Text style = {estilo.tit2}>
Login
</Text>
<TextInput style = {estilo.input} onChangeText={(email)=> setEmail(email)} value = {email} placeholder = 'Digite seu email' />

<TextInput style = {estilo.input} secureTextEntry= {true}
onChangeText = {(senha) => setSenha(senha)} value = {senha} placeholder = 'Digite sua senha' />

<TouchableOpacity style = {estilo.bot} onPress={() => {
  logar();
}}>
<Text style = {estilo.bot2}>
Login
</Text>
</TouchableOpacity>

<Text style = {estilo.leg}>
Não sou cadastrado
</Text>

<TouchableOpacity style = {estilo.bot3}>
<Text style = {estilo.bot2} onPress={() => navigation.navigate('Cadastro')}>
Cadastrar
</Text>
</TouchableOpacity>
</ImageBackground> 
</View>
);

}

const estilo =  StyleSheet.create({
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

  img: {
    width: 350,
    height: 305,
    marginTop: 20
  },

    tit2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFEEFF',
    marginTop: 10,
    backgroundColor: '#5D1261',
    width: 100,
    textAlign: 'center',
    borderRadius: 5
  },

    tit: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFEEFF',
    marginTop: 10,
  },

    leg: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 4,
    color: 'white'
  },

  input: {
    backgroundColor: '#F7A0EF',
    marginTop: 10,
    borderRadius: 5,
    padding: 8,
    color: 'black',
    width: 250,
    fontWeight: 'bold',
    fontSize: 18
  },

  bot:{ 
    marginTop: 20,
    backgroundColor: '#AD07A2',
    width: 80,
    borderRadius: 10,
    flexDirection: 'row',
    color: 'white'
    
  },

  bot2:{ 
    color: 'white',
    textAlign: 'center',
    padding: 8,
    marginLeft: 10,
    fontSize: 18
    
  },

  bot3:{ 
    marginTop: 10,
    backgroundColor: '#AD07A2',
    width: 110,
    borderRadius: 10,
    flexDirection: 'row',
    color: 'white'
  }
});