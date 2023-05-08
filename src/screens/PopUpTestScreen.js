import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image , TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Checkbox from 'expo-checkbox';
// import SettingIcon from '../image/icon/'



const PopUpTestScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [devangari, setDevangari] = useState(false);
  const [showMeaning ,setShowMeaning] = useState(true);
  const [isViewClicked, setIsViewClicked] = useState(false);
  

  const handleClickOutside = () => {
    // Run your function here when the view is clicked outside
    setIsViewClicked(false);
  };
  
  return ( 
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

        <View style={styles.centeredView}>
           
                
                    <View style={styles.modalView} >
                        <View style={{alignItems:'center', marginTop:10, marginBottom:10}}>
                        <Image  source={require('../image/icon/setting.png')}/>
                        </View>
                        <View style={{alignItems:'flex-end'}}>
                            
                            <Text style={{fontSize:20}}>Devanagari&nbsp;&nbsp;&nbsp;&nbsp;<Checkbox style={styles.checkbox}  value={devangari} onValueChange={setDevangari} /></Text>
                            <Text style={{fontSize:20}}>Meaning&nbsp;&nbsp;&nbsp;&nbsp;<Checkbox style={styles.checkbox}  value={showMeaning} onValueChange={setShowMeaning} /></Text>
                        </View>
                        <View style={{alignItems:'center', marginTop:10}}></View>
                            <Pressable
                            style={[styles.buttonPressable, styles.buttonClosePressable] }
                            onPressOut={() => setModalVisible(!modalVisible)}
                            >
                            
                            
                            <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        
                    </View>
             
          
       
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonPressable, styles.buttonOpenPressable]}
        onPress={() => setModalVisible(true)}>
        <Image  source={require('../image/icon/setting.png')}/>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonPressable: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpenPressable: {
    backgroundColor: '#D3D3D3',
  },
  buttonClosePressable: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default PopUpTestScreen;