import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import gif from './giphy.gif'


const HomeScreen = ({ navigation }) => {
  return (
    <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.mainText}>Rinel's App </Text>
      <Image  style={styles.gif} source={gif} />
    
      
      
      <View style={styles.row}> 
      <TouchableOpacity style={styles.stopBtn} onPress={() => navigation.navigate('Sanskrit')}>
        <Text style={styles.stopBtnText}>Sanskrit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.stopBtn} onPress={() => navigation.navigate('Books')}>
        <Text style={styles.stopBtnText}>Books</Text>
      </TouchableOpacity>
      </View>
      
    </View></>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom:10,
  },
  stopBtn: {
    padding: 20,
    backgroundColor: '#39ff14',
    borderRadius: 10,
    marginRight:30,
    marginLeft:30,
    
  },
  stopBtnText: {
    color: 'grey',
    fontSize: 16,
    textAlign: 'center',
  },
  gif: {
  
    marginBottom:10,
  },
  row:{  
 
    flexDirection: 'row',// set elements horizontally, try column.  
},  
});

export default HomeScreen;
