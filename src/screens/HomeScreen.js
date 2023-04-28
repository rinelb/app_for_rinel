import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
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
     <Button onPress={() => navigation.navigate('Sanskrit')} title="Sanksrit" /><Text> </Text>
     <Button onPress={() => navigation.navigate('Books')}  title="Books"/> 
  </View>
  );
};

export default HomeScreen;