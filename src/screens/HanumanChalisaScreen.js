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

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const HanumanChalisaScreen = () => {
  const [songName, setSongName] = useState('');
  const [lyric, setLyric] = useState('');
  const [lyricIndex, setLyricIndex] = useState(0);
  const [sound, setSound] = useState(null);

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
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
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
    setLyricIndex(tempIndex)
    setLyric(song[tempIndex].lyric) 
    loadSound(song[tempIndex].audio_word);
    return () => {
        if (sound !== null) {
            sound.release();
        }
     
    };
   
  };

  const LastLine = () => {
    const tempIndex = lyricIndex ===0?0:lyricIndex -1
    
    setLyricIndex(tempIndex)
    setLyric(song[tempIndex].lyric) 
    loadSound(song[tempIndex].audio_word);
    return () => {
        if (sound !== null) {
            sound.release();
        }
     
    };
   
  };

  return (
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
        <TouchableOpacity style={styles.playBtn} onPress={playPause}>
            <Text style={styles.playBtnText}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stopBtn} onPress={stop}>
            <Text style={styles.stopBtnText}>Stop</Text>
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
  }
});

export default HanumanChalisaScreen;
