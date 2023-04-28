import React from 'react';
import { View, Text, Button } from 'react-native';

const SanskritHomeScreen = ({ navigation }) => {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Home Screen</Text>
    //     <Button
    //       title="Go to Sanskrit"
    //       onPress={() => navigation.navigate('Sanskrit')}
    //     />
    // </View>


    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Rinel's App </Text><Text> </Text>
     <Button onPress={() => navigation.navigate('allLetters')} title="All letters" /><Text> </Text>
     <Button  onPress={() => navigation.navigate('testLetters')}  title="Letter Testing"/> 
  </View>
  );
};

export default SanskritHomeScreen;