


import React, {  useRef,useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ScrollView  ,TouchableOpacity  } from 'react-native';
import Checkbox from 'expo-checkbox';
import Sanscript from '@indic-transliteration/sanscript';
import SankritVol from '../data/sanskrit/SanskritVowles.json'
import SanskritConst from '../data/sanskrit/AllLetters.json'
import SanskritSplV from '../data/sanskrit/SanskritSplVowles.json'
import SanskritRest from '../data/sanskrit/SanskritRest.json'
import SanskritNum from '../data/sanskrit/SanskritNum.json' 
import DrawSceen from './DrawSceen'

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const SankritLetterTestingAudio= () => {
  // for audio

  const [songName, setSongName] = useState('');
  const [lyric, setLyric] = useState('');
  const [lyricIndex, setLyricIndex] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [repeat, setRepeat] = useState(false);

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
    setLyric(SanskritConst[0].phonic) 
    loadSound(SanskritConst[0].audio);
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


  const setTheSound = (value) => {
    
   console.log(value);
    loadSound(value);
    return () => {
        if (sound !== null) {
            sound.release();
        }
     
    };
   
  };
    

  //end audio



  const [isRandomVowle, setRandomVowle] = useState(false);
    const [isReverse, setReverse] = useState(false);
    const [isRandom, setIsRandom] = useState(true);
    let [displayText, setDisplayText] = useState("");
    let [answerText, setAnswerText] = useState("");
    let [randomNumberSankrit, setRandomNumberSankrit] = useState(-1);
    let [randomNumberSankritVowle, setRandomNumberSankritVowle] = useState(0);
    let [LastRandomNumberSankrit, setLastRandomNumberSankrit] = useState(0);
    let [LastRandomNumberSankritVowles, setLastRandomNumberSankritVowles] = useState(0);


    useEffect(() => {
      setDisplayText( Sanscript.t("a", 'hk', 'devanagari'))
  
      return () => {
      };
    }, []);


    function NextLetter  (){
        //setting previous
        setLastRandomNumberSankrit(randomNumberSankrit)
        setLastRandomNumberSankritVowles(randomNumberSankritVowle)
        let randomNumberSankritTemp = 0
        if (isRandom){
           randomNumberSankritTemp = Math.floor(Math.random() * SanskritConst.length)
        }else{
           randomNumberSankritTemp = randomNumberSankrit +1
           if (randomNumberSankritTemp > SanskritConst.length){randomNumberSankritTemp = 0}
        }
        setRandomNumberSankrit(randomNumberSankritTemp)
        //console.log("current index = " ,randomNumberSankritTemp)

        let randomNumberSankritVowleTemp = Math.floor(Math.random() * SankritVol.length)
        setRandomNumberSankritVowle(randomNumberSankritVowleTemp)

        let tempString =""
        if (isReverse) {
            
            let tempConstVowle = SanskritConst[randomNumberSankritTemp].letter+SankritVol[randomNumberSankritVowleTemp].letter
            tempString = isRandomVowle ? tempConstVowle: SanskritConst[randomNumberSankritTemp].letter+'a'
            
        
          } else {
            let tempConstVowle = SanskritConst[randomNumberSankritTemp].letter+SankritVol[randomNumberSankritVowleTemp].letter
            tempString = isRandomVowle ? Sanscript.t(tempConstVowle, 'hk', 'devanagari'): Sanscript.t(SanskritConst[randomNumberSankritTemp].letter+'a', 'hk', 'devanagari') 
        
          }
        //console.log("tempString in next = " ,tempString)
        if (!isRandomVowle){
            setTheSound(SanskritConst[randomNumberSankritTemp].audio);
        }
        setDisplayText(tempString)
        setAnswerText("")
    }

    function LastLetter  (){
        //console.log("---------------")
        // let tempConstVowle = SanskritConst[LastRandomNumberSankrit].letter+SankritVol[LastRandomNumberSankritVowles].letter
        // let tempString = isRandomVowle ? Sanscript.t(tempConstVowle, 'hk', 'devanagari'): Sanscript.t(SanskritConst[LastRandomNumberSankrit].letter+'a', 'hk', 'devanagari') 
        //console.log("LastRandomNumberSankrit = " ,LastRandomNumberSankrit)
        let tempString =""
        let randomNumberSankritTemp = 0
        if (isRandom===false){
             
              randomNumberSankritTemp = randomNumberSankrit -1
              if (randomNumberSankritTemp === -1){randomNumberSankritTemp = 0}
              setRandomNumberSankrit(randomNumberSankritTemp)
          }else{
            randomNumberSankritTemp = LastRandomNumberSankrit
          }
        if (isReverse) {
            
            let tempConstVowle = SanskritConst[randomNumberSankritTemp].letter+SankritVol[LastRandomNumberSankritVowles].letter
            //console.log("tempConstVowle in ifthen = " ,SanskritConst[LastRandomNumberSankrit])
            tempString = isRandomVowle ? tempConstVowle: SanskritConst[randomNumberSankritTemp].letter+'a'
        
          } else {
            let tempConstVowle = SanskritConst[randomNumberSankritTemp].letter+SankritVol[LastRandomNumberSankritVowles].letter
            tempString = isRandomVowle ? Sanscript.t(tempConstVowle, 'hk', 'devanagari'): Sanscript.t(SanskritConst[randomNumberSankritTemp].letter+'a', 'hk', 'devanagari') 
        
          }
        //console.log("tempString in last = " ,tempString)
        setDisplayText(tempString)
        setAnswerText("")
        if (!isRandomVowle){
            loadSound(SanskritConst[randomNumberSankritTemp].audio);
        }

        if (isRandom){setRandomNumberSankrit(LastRandomNumberSankrit)}
         
        setRandomNumberSankritVowle(LastRandomNumberSankritVowles)

    }

    function ShowResult  (){
        
        let tempString =""
        if (isReverse) {
            
            let tempConstVowle = SanskritConst[randomNumberSankrit].letter+SankritVol[randomNumberSankritVowle].letter
            tempString = isRandomVowle ? Sanscript.t(tempConstVowle, 'hk', 'devanagari'): Sanscript.t(SanskritConst[randomNumberSankrit].letter+'a', 'hk', 'devanagari') 
        
          } else {
            let tempConstVowle = SanskritConst[randomNumberSankrit].letter+SankritVol[randomNumberSankritVowle].letter
            tempString = isRandomVowle ? tempConstVowle: SanskritConst[randomNumberSankrit].letter+'a'
        
          }

        setAnswerText(tempString)

    }




   return (
    <>
    <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' ,marginTop: 10}}>
            <Text>Random Vowles<Checkbox style={styles.checkbox} value={isRandomVowle} onValueChange={setRandomVowle} />
            &nbsp;&nbsp;&nbsp; Reverse <Checkbox style={styles.checkbox}
            value={isReverse} onValueChange={setReverse} />
            &nbsp;&nbsp;&nbsp; Random <Checkbox style={styles.checkbox}
            value={isRandom} onValueChange={setIsRandom} /></Text>
            <Text onPress={ShowResult}  style={styles.displayText}>{displayText}</Text>
            <Text style={styles.answerText}>{answerText}</Text>
            <Text>
            <Button title="Last" onPress={LastLetter}/>&nbsp;&nbsp;&nbsp;&nbsp;
            
            {isRandomVowle ? (
                            <></>
                        ) : (
                            <Button  style={{backgroundColor:'green'}} onPress={playPause} title="play" />
            )}
            &nbsp;&nbsp;&nbsp;&nbsp;<Button title="Next" onPress={NextLetter}/>
      </Text> 
      
      </View>  
        <DrawSceen></DrawSceen>
        
         </>
      

   );
 }



 const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
  label: {
    fontSize: 16,
  },
  displayText:{
      fontSize: 56,
      borderColor:'green',
      borderWidth: 1,
      padding: 60,
  },
  answerText:{
      fontSize: 36,
      borderColor:'green',
       
  },
  playBtnText: {
    color: 'green',
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
    flexDirection: 'row', marginTop: 16,
    paddingTop:10,
  },
});

 export default SankritLetterTestingAudio;