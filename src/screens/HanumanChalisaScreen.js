import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  Button
} from 'react-native';
import song from '../data/sanskrit/hanuman/song.json'
import { Dropdown } from 'react-native-element-dropdown';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const HanumanChalisaScreen = () => {


    const [songName, setSongName] = useState('');
    const [lyric, setLyric] = useState('');
    const [lyricIndex, setLyricIndex] = useState(0);
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    //dropdownbox
    const [value, setValue] = useState(0);
    const data = song.map((item) => ({
        value: item.id,
        label: item.lyric
    }));

  const loadSound = (fileName) => {
    const newSound = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
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
    setLyric(song[0].lyric) 
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
          setIsPlaying(false)
          setIsCompleted(true)
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };

  const stop = () => {
    if (sound !== null) {
      sound.stop();
    }
  };

  const NextLine = () => {
    const tempIndex = lyricIndex +1
    const tempvalue = value + 1 
    setValue(value+1)
    setLyricIndex(tempvalue)
    setLyric(song[tempvalue].lyric) 
    loadSound(song[tempvalue].audio_word);
    return () => {
        if (sound !== null) {
            sound.release();
        }
     
    };
   
  };

  const LastLine = () => {
    const tempIndex = lyricIndex ===0?0:lyricIndex -1
    const tempvalue = value ===0?0:value -1
    setValue(tempvalue)
    setLyricIndex(tempvalue)
    setLyric(song[tempvalue].lyric) 
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
    setLyric(song[value].lyric) 
    loadSound(song[value].audio_word);
    return () => {
        if (sound !== null) {
            sound.release();
        }
     
    };
   
  };



  return (
    <View style={{flex:1}}>
    <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                
                data={data}
                search
                maxHeight={300}
                
                labelField="label"
                valueField="value"
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setLyric(item.label);    
                setValue(item.value);
                setTheSound(item.value)
                }}
                // renderLeftIcon={() => (
                //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                // )}
            />
    <View style={styles.container}>
        

      <View style={styles.inputContainer}>
        <View style={{  alignItems: 'center'}}>
                
            <Text><Button title="Last" onPress={LastLine}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button title="Next" onPress={NextLine}/></Text>
            <Text  style={styles.lyric}>{lyric}</Text>
        </View>
        {/* <TextInput
          style={styles.input}
          placeholder="Enter song name"
          value={songName}
          onChangeText={(text) => setSongName(text)}
        /> */}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity  style={[
                styles.playBtn,
                isPlaying && { backgroundColor: 'green' },
                isCompleted && { backgroundColor: 'white' },
            ]} onPress={playPause}>
            <Text style={styles.playBtnText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopBtn} onPress={stop}>
            <Text style={styles.stopBtnText}>Stop</Text>
        </TouchableOpacity>
      </View>
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
  playBtn: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
  },
  lyric: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize:18,
    marginTop: 15,
    marginBottom: 10,
  },
  playBtnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stopBtn: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  stopBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  }, dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
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
});

export default HanumanChalisaScreen;
