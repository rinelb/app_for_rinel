import * as React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'

import { SafeAreaView } from 'react-native-safe-area-context';

//Screen
import SanskritScreenTest from './src/screens/SanskritScreenTest'
import SanskritHomeScreen from './src/screens/SanskritHomeScreen';
import SanskritLetterTestingScreen from './src/screens/SanskritLetterTestingScreen';
import SanskritViewLetterScreen from './src/screens/SanskritViewLettersScreen';
import Draw from './src/screens/DrawSceen';
import AudioTestScreen from './src/screens/AudioTestScreen';
import HanumanChalisaScreen from './src/screens/HanumanChalisaScreen';
import DropdowntestScreen from './src/screens/DropdowntestScreen';
import BasicBookScreen from './src/screens/BasicBooksScreen';
import SankritLetterTestingAudio from './src/screens/SankritLetterTestingAudio';
import PopUpTestScreen from './src/screens/PopUpTestScreen';




//nav

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
     <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Homeother" component={HomeScreen} options={{ title: 'Rinel\'s Homw ' }}/>
          <Stack.Screen name="Sanskrit" component={SanskritHomeScreen} />
          <Stack.Screen name="HanumanChalisaScreen" component={HanumanChalisaScreen} /> 
          <Stack.Screen name="allLetters" component={SanskritViewLetterScreen} />
        <Stack.Screen name="testLetters" component={SankritLetterTestingAudio} /> 
        <Stack.Screen name="Books" component={BasicBookScreen} />
        <Stack.Screen name="Popup" component={PopUpTestScreen} />
   
          {/* <Stack.Screen name="sanskritLetters" component={SanskritLetterScreen}  />
          <Stack.Screen name="SankritWriteScreen" component={SankritWriteScreen}  /> */}
        </Stack.Group>
      </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sanskrit1" component={SanskritHomeScreen} />
      <Stack.Screen name="allLetters" component={SanskritViewLetterScreen} />
      <Stack.Screen name="testLetters" component={SankritLetterTestingAudio} /> 
      <Stack.Screen name="AudioTestScreen" component={AudioTestScreen} /> 
      <Stack.Screen name="HanumanChalisaScreen" component={HanumanChalisaScreen} /> 
      <Stack.Screen name="DropdowntestScreen" component={DropdowntestScreen} /> 
      <Stack.Screen name="Books" component={BasicBookScreen} />
      <Stack.Screen name="draw" component={Draw} /> 
      <Stack.Screen name="Popup" component={PopUpTestScreen} />
    </Stack.Navigator>
  );
}


function App() {
  return (
    // <NavigationContainer>
     
    //   <Stack.Navigator>
       
    //   <Stack.Group screenOptions={{ presentation: 'modal' }}>
    //      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Rinel\'s Homw ' }}/>
    //         <Stack.Screen name="Sanskrit" component={SanskritScreen} />
    //         <Stack.Screen name="Books" component={BookScreen}  />
    //     </Stack.Group>
   
    //   </Stack.Navigator>
    // </NavigationContainer>



            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Profile" component={ProfileStack} options={{ title: 'Sanskrit ' }}/>
              </Tab.Navigator>
            </NavigationContainer>

  
  );
}

export default App;





// -------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import * as Sanscript from '@indic-transliteration/sanscript';

// const App = () => {
//   const [inputText, setInputText] = useState('');
//   const [convertedText, setConvertedText] = useState('');

//   const convertText = () => {
//     setConvertedText(Sanscript.t(inputText, 'itrans', 'devanagari'));
//   };

//   return (
//     <View>
//       <TextInput
//         value={inputText}
//         onChangeText={setInputText}
//         placeholder="Enter text"
//       />
//       <Button title="Convert to Devanagari" onPress={convertText} />
//       <Text>{convertedText}</Text>
//     </View>
//   );
// };

// export default App;