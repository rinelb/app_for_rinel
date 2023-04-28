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
     <Button onPress={() => navigation.navigate('Sanskrit1')} title="Go to Sanskrit1" /><Text> </Text>
    <Button
      onPress={() => navigation.navigate('Sanskrit')}
      title="Go to Sanskrit"
    /> 
  </View>
  );
};

export default HomeScreen;