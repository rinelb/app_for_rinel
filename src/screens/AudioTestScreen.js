import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const AudioTestScreen = () => {
  const [songName, setSongName] = useState('');
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

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter song name"
          value={songName}
          onChangeText={(text) => setSongName(text)}
        />
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
    backgroundColor: '#000',
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

export default AudioTestScreen;
