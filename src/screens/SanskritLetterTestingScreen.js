import React, {  useRef,useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ScrollView  ,  } from 'react-native';
import Checkbox from 'expo-checkbox';
import Sanscript from '@indic-transliteration/sanscript';
import SankritVol from '../data/sanskrit/SanskritVowles.json'
import SanskritConst from '../data/sanskrit/SanskritConstanats.json'
import SanskritSplV from '../data/sanskrit/SanskritSplVowles.json'
import SanskritRest from '../data/sanskrit/SanskritRest.json'
import SanskritNum from '../data/sanskrit/SanskritNum.json' 
import DrawSceen from './DrawSceen'


const SanskritLetterTestingScreen= () => {
  // for canvas

  //end canvas



  const [isRandomVowle, setRandomVowle] = useState(false);
    const [isReverse, setReverse] = useState(false);
    let [displayText, setDisplayText] = useState("");
    let [answerText, setAnswerText] = useState("");
    let [randomNumberSankrit, setRandomNumberSankrit] = useState(0);
    let [randomNumberSankritVowle, setRandomNumberSankritVowle] = useState(0);
    let [LastRandomNumberSankrit, setLastRandomNumberSankrit] = useState(0);
    let [LastRandomNumberSankritVowles, setLastRandomNumberSankritVowles] = useState(0);


    function NextLetter  (){
        //setting previous
        setLastRandomNumberSankrit(randomNumberSankrit)
        setLastRandomNumberSankritVowles(randomNumberSankritVowle)

        let randomNumberSankritTemp = Math.floor(Math.random() * SanskritConst.length)
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
        setDisplayText(tempString)
        setAnswerText("")
    }

    function LastLetter  (){
        //console.log("---------------")
        // let tempConstVowle = SanskritConst[LastRandomNumberSankrit].letter+SankritVol[LastRandomNumberSankritVowles].letter
        // let tempString = isRandomVowle ? Sanscript.t(tempConstVowle, 'hk', 'devanagari'): Sanscript.t(SanskritConst[LastRandomNumberSankrit].letter+'a', 'hk', 'devanagari') 
        //console.log("LastRandomNumberSankrit = " ,LastRandomNumberSankrit)
        let tempString =""
        if (isReverse) {
            
            let tempConstVowle = SanskritConst[LastRandomNumberSankrit].letter+SankritVol[LastRandomNumberSankritVowles].letter
            //console.log("tempConstVowle in ifthen = " ,SanskritConst[LastRandomNumberSankrit])
            tempString = isRandomVowle ? tempConstVowle: SanskritConst[LastRandomNumberSankrit].letter+'a'
        
          } else {
            let tempConstVowle = SanskritConst[LastRandomNumberSankrit].letter+SankritVol[LastRandomNumberSankritVowles].letter
            tempString = isRandomVowle ? Sanscript.t(tempConstVowle, 'hk', 'devanagari'): Sanscript.t(SanskritConst[LastRandomNumberSankrit].letter+'a', 'hk', 'devanagari') 
        
          }
        //console.log("tempString in last = " ,tempString)
        setDisplayText(tempString)
        setAnswerText("")
        setRandomNumberSankrit(LastRandomNumberSankrit)
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
            value={isReverse} onValueChange={setReverse} /></Text>
            <Text onPress={ShowResult}  style={styles.displayText}>{displayText}</Text>
            <Text style={styles.answerText}>{answerText}</Text>
            <Text><Button title="Next" onPress={NextLetter}/>&nbsp;&nbsp;&nbsp;&nbsp;<Button title="Last" onPress={LastLetter}/></Text>
          

           
 

            



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
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: 10,
    marginTop: 10,
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
});

 export default SanskritLetterTestingScreen;