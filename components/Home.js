import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import Firebase from './Firebase';

export default function Home(){
  Firebase.auth().signOut().then(()=>{
// Sign-out successful
  }).catch((error) => {
    // An error happened
  });

  return(
    <View style = {estilo.container}>
    <Text> Ok </Text>
    </View>
  );
}

const estilo = StyleSheet.create({

});