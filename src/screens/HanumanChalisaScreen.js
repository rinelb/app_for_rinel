import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Button,
  SafeAreaView,
  Alert,
  Modal,
  Pressable,
  Image
} from 'react-native';
import song from '../data/sanskrit/hanuman/song.json'
import { Dropdown } from 'react-native-element-dropdown';
import Checkbox from 'expo-checkbox';
 

var Sound = require('react-native-sound');
Sound.setCategory('Playback');




const HanumanChalisaScreen = () => {

    const [devangari, setDevangari] = useState(false);
    const [showMeaning ,setShowMeaning] = useState(true);
    const [songName, setSongName] = useState('');
    const [lyric, setLyric] = useState('');
    const [meaning, setMeaning] = useState('');
    const [lyricIndex, setLyricIndex] = useState(0);
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [isViewClicked, setIsViewClicked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    //dropdownbox
    const [value, setValue] = useState(0);
    const data = song.map((item) => ({
        value: item.id,
        label: item.lyric
    }));

    const dataDevanagari = song.map((item) => ({
      value: item.id,
      label: item.devinagari
  }));

  const loadSound = (fileName) => {
    const newSound = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }else{
        // newSound.setNumberOfLoops(5);
      }
      // if loaded successfully
      console.log(
        'duration in seconds: ' +
          newSound.getDuration() +
          'number of channels: ' +
          newSound.getNumberOfChannels(),
      );
    });
    setSound(newSound);
  };

  useEffect(() => {
    if (songName !== '') {
      loadSound(songName);
    }

    return () => {
      if (sound !== null) {
        sound.release();
      }
    };
  }, [songName]);

  useEffect(() => {
    if (devangari){
      setLyric(song[0].devinagari)
    }else {
      setLyric(song[0].lyric)
    }
    setMeaning(song[0].meaning)
    loadSound(song[0].audio_word);
    return () => {
        if (sound !== null) {
            sound.release();
        }
     
    };
  }, []);

  const playPause = () => {
    if (sound !== null) {
      setIsPlaying(true)  
      setIsCompleted(false)
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
          if (repeat) {
            // Replay the song if repeat is enabled
                console.log('repeating ');
            sound.setCurrentTime(0);
            // sound.play((success) => {
            //     console.log('repeating inner');
            // })
          }else{
          setIsPlaying(false)
          setIsCompleted(true)}
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };

  const stop = () => {
    if (sound !== null) {
      sound.stop();
      setIsPlaying(false)
          setIsCompleted(true)
    }
  };

  const NextLine = () => {
    if (isPlaying){
        stop()
    }  
    const tempIndex = lyricIndex +1
    const tempvalue = value + 1 
    setValue(value+1)
    setLyricIndex(tempvalue)
    
    if (devangari){
      setLyric(song[tempvalue].devinagari)
    }else {
      setLyric(song[tempvalue].lyric)
    } 
    setMeaning(song[tempvalue].meaning)
    // setLyric(song[tempvalue].lyric) 
    loadSound(song[tempvalue].audio_word);
    return () => {
        if (sound !== null) {
            sound.release();
        }
     
    };
   
  };

  const LastLine = () => {
    if (isPlaying){
        stop()
    }  
    const tempIndex = lyricIndex ===0?0:lyricIndex -1
    const tempvalue = value ===0?0:value -1
    setValue(tempvalue)
    setLyricIndex(tempvalue)
    if (devangari){
      setLyric(song[tempvalue].devinagari)
    }else {
      setLyric(song[tempvalue].lyric)
    } 
    setMeaning(song[tempvalue].meaning)
    // setLyric(song[tempvalue].lyric) 
    loadSound(song[tempvalue].audio_word);
    return () => {
        if (sound !== null) {
            sound.release();
        }
     
    };
   
  };

  const setTheSound = (value) => {
    
    setValue(value)
    setLyricIndex(value)
    if (devangari){
      setLyric(song[value].devinagari)
    }else {
      setLyric(song[value].lyric)
    } 
    setMeaning(song[value].meaning)
    // setLyric(song[value].lyric) 
    loadSound(song[value].audio_word);
    return () => {
        if (sound !== null) {
            sound.release();
        }
     
    };
   
  };

  const toggleDevanari = () => {
    setDevangari(!devangari);
    if (devangari){
      setLyric(song[value].lyric)
    }else {
      
      setLyric(song[value].devinagari)
    } 
    setMeaning(song[value].meaning)

  };

  return (

    <View style={{flex:1}}>
      
      
    {/* <View style={{ alignItems: 'center'}}>
    <Text>
      <Text>&nbsp;</Text>
    </Text>
      <Text style={{fontSize:20}}>Devanagari <Checkbox style={styles.checkbox}  value={devangari} onValueChange={toggleDevanari} /> &nbsp;&nbsp;&nbsp; Meaning <Checkbox style={styles.checkbox}  value={showMeaning} onValueChange={setShowMeaning} /></Text>
    </View> */}
    <View style={{flexDirection:'row' ,}}>
    

    <View style={{ flexDirection: 'row',   flex: 1}}>
          <View style={{  marginRight: 10,flex: 1 }}>
                        <Dropdown
                                                      style={[styles.dropdown ,{alignItems:'flex-start'}]}
                                                      placeholderStyle={styles.placeholderStyle}
                                                      selectedTextStyle={styles.selectedTextStyle}
                                                      inputSearchStyle={styles.inputSearchStyle}
                                                      
                                                      data={devangari ?   dataDevanagari:data}
                                                      search
                                                      itemTextStyle={{fontSize: 11}}
                                                      selectedTextStyle={{ fontSize: 11,fontWeight:'bold' }}
                                                      
                                                      labelField="label"
                                                      valueField="value"
                                                      placeholder="Select item"
                                                      searchPlaceholder="Search..."
                                                      value={value}
                                                      onChange={item => {
                                                      if (isPlaying){
                                                          stop()
                                                      }    
                                                      setLyric(item.label);    
                                                      setValue(item.value);
                                                      setTheSound(item.value)
                                                      }}
                                                      // renderLeftIcon={() => (
                                                      //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                                                      // )}
                          />
                          
                  </View>
                
                  <Pressable
                    style={[styles.buttonPressable, styles.buttonOpenPressable , {alignItems:'center'}]}
                    onPress={() => setModalVisible(true)}>
                    <Image style={{width: 25, height: 25 }} source={require('../image/icon/setting.png')}/>
                  </Pressable>
                       
                  
                            
                          
                                
                              
                 
                   
          </View>

                  
             
             
      </View>
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
                                            <View style={{alignItems:'center', marginTop:0, marginBottom:0}}>
                                            <Image style={styles.settingIcon} source={require('../image/icon/settings.svg')}/>
                                            </View>
                                            
                                            <View style={{alignItems:'flex-end'}}>
                                                
                                                <Text style={{fontSize:20}}>Devanagari  <Checkbox style={styles.checkbox}  value={devangari} onValueChange={toggleDevanari} /></Text>
                                                <Text style={{fontSize:20,marginTop:15,}}>Meaning  <Checkbox style={styles.checkbox}  value={showMeaning} onValueChange={setShowMeaning} /></Text>
                                                
                                            </View>
                                            <View style={{alignItems:'center', marginTop:10}}></View>

                                                <Pressable
                                                style={[styles.buttonPressableClose, styles.buttonClosePressable, {marginTop:15}] }
                                                onPressOut={() => setModalVisible(!modalVisible)}
                                                >
                                                
                                                
                                                <Text style={styles.textStyle}>Close</Text>
                                                </Pressable>
                                            
                                        </View>
                                
                              
                          
                            </View>
                          </Modal>
    
    <View style={styles.container}>
        
      
      <View style={styles.inputContainer}>
        <View style={{  alignItems: 'center'}}>
            
           
      
            <Text  style={styles.lyric}>{lyric}</Text>
            <Text>&nbsp;</Text>
            {showMeaning && <Text style={{marginLeft:30,marginRight:30,textAlign:'center'}}>{meaning}</Text>}
        </View>
        {/* <TextInput
          style={styles.input}
          placeholder="Enter song name"
          value={songName}
          onChangeText={(text) => setSongName(text)}
        /> */}
      </View>
    
      
    </View>

    <View style={[styles.buttonContainer, {marginBottom:60}]}>

      <TouchableOpacity  style={[styles.lastBtn, ]} onPress={LastLine}>
            <Text style={styles.playBtnText}>Prev</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.stopBtn} onPress={stop}>
            <Text style={styles.stopBtnText}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={[
                styles.playBtn,
                isPlaying && { backgroundColor: 'green' },
                isCompleted && { backgroundColor: 'white' },
            ]} onPress={playPause}>
            <Text style={styles.playBtnText}>Play</Text>
        </TouchableOpacity>


        
        
        <TouchableOpacity style={styles.nextBtn} onPress={NextLine}>
            <Text style={styles.stopBtnText}>Next</Text>
        </TouchableOpacity>
        
        
      
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
     justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    color: '#fff',
    fontSize: 16,
    width: '80%',
  },
 

  lyric: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize:19,
    textAlign:'center',
    marginTop: 15,
    marginBottom: 10,
  },
  playBtnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stopBtn: {
    padding: 0,
    backgroundColor: 'red',
    
    marginRight: 10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    width:76,
    height:50,
    
  },
  nextBtn: {
    padding: 0,
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    width:76,
    height:50,
  },
  playBtn: {
    padding: 0,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    width:76,
    height:50,
    marginRight: 10,
    
  },
  lastBtn: {
    padding: 0,
    backgroundColor: 'yellow',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    width:76,
    height:50,
    marginRight: 10,
    marginLeft: 10,
   
  },
  stopBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row', marginTop: 16,
    paddingTop:10,
  }, 
  dropdown: {
    margin: 0,
    width:250,
    height: 80,

    borderBottomColor: 'green',
    borderBottomWidth: 0.5,
  },
  
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
 
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  repeatBtn: {
    padding: 20,
    backgroundColor: '#00FF00',
    borderRadius: 10,
  },
  repeatBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: 10,
    marginTop: 1,
  },
  next_last_button:
  { width: 300, height: 100 },


  centeredView: {
    
    justifyContent: 'center',
    alignItems: 'center',
     marginTop: '70%',
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

  buttonPressableClose: {
    borderRadius: 20,
   
    height:60,
    width:160,
    elevation: 2,
    justifyContent:'center',
    
  },
  buttonPressable: {
    borderRadius: 20,
    margin:10,
    padding: 0,
    height:30,
    width:30,
    elevation: 2,
    justifyContent:'center',
    
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
  settingIcon:{
    height: 10, 
    width: 10

  }
});

export default HanumanChalisaScreen;
