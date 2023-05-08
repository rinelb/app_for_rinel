import { center } from '@shopify/react-native-skia';
import React from 'react';
import { View, Text, Button ,StyleSheet,TouchableOpacity} from 'react-native';

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
    <Text style={styles.mainText}>Sanskrit Options</Text>
    <View style={{ marginTop: 20 }}>
        
        <TouchableOpacity style={styles.stopBtn} onPress={() => navigation.navigate('allLetters')} >
            <Text style={styles.stopBtnText}>All letters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopBtn} onPress={() => navigation.navigate('testLetters')} >
            <Text style={styles.stopBtnText}>Letter Testing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopBtn} onPress={() => navigation.navigate('HanumanChalisaScreen')} >
            <Text style={styles.stopBtnText}>Hanuman Chalisa</Text>
        </TouchableOpacity>
        
   
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
mainText:{
  fontSize: 36,
  fontWeight: 'bold',
},
stopBtn: {
  padding: 20,
  backgroundColor: '#39ff14',
  borderRadius: 10,
  marginBottom: 10 ,
},
stopBtnText: {
  color: 'grey',
  fontSize: 16,
  textAlign:"center"
},
})

export default SanskritHomeScreen;