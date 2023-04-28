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
    <Text>Sanskrit Options</Text>
    <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Button onPress={() => navigation.navigate('allLetters')} title="All letters" /> 
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button onPress={() => navigation.navigate('testLetters')} title="Letter Testing" /> 
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button onPress={() => navigation.navigate('AudioTestScreen')} title="Audio Testing" /> 
        </View>
        
      </View>
    </View>
  );
};

export default SanskritHomeScreen;