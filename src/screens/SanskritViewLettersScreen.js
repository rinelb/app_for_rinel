import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ScrollView  } from 'react-native';
import Sanscript from '@indic-transliteration/sanscript';
import SankritVol from '../data/sanskrit/SanskritVowles.json'
import SanskritConst from '../data/sanskrit/SanskritConstanats.json'
import SanskritSplV from '../data/sanskrit/SanskritSplVowles.json'
import SanskritRest from '../data/sanskrit/SanskritRest.json'
import SanskritNum from '../data/sanskrit/SanskritNum.json'

const SanskritViewLetterScreen= () => {

    const [inputText, setInputText] = useState('');
    const [convertedText, setConvertedText] = useState('');
  
    const convertText = () => {
      setConvertedText(Sanscript.t(inputText, 'itrans', 'devanagari'));
    };



   return (
   <ScrollView>
      <View style={styles.container}>  
        <View style={styles.row}>  

                <View style={styles.powderblue} >
                {SankritVol.map((letter, index) => (
                  <React.Fragment key={letter.id}>
                    {letter.letter.length === 1 ? (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                        
                      </Text>
                    ) : (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                       
                      </Text>
                    )}
                  </React.Fragment>
                ))}
                </View>  

                <View style={styles.powderblue} >
                {SanskritConst.map((letter, index) => (
                  <React.Fragment key={letter.id}>
                    {letter.letter.length === 1 ? (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                        
                      </Text>
                    ) : (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                       
                      </Text>
                    )}
                  </React.Fragment>
                ))}
                </View> 


                <View style={styles.powderblue} >
                {SanskritSplV.map((letter, index) => (
                  <React.Fragment key={letter.id}>
                    {letter.letter.length === 1 ? (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                        
                      </Text>
                    ) : (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                       
                      </Text>
                    )}
                  </React.Fragment>
                ))}
                </View> 



                <View style={styles.powderblue} >
                {SanskritRest.map((letter, index) => (
                  <React.Fragment key={letter.id}>
                    {letter.letter.length === 1 ? (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                        
                      </Text>
                    ) : (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                       
                      </Text>
                    )}
                  </React.Fragment>
                ))}
                </View> 



                <View style={styles.powderblue} >
                {SanskritNum.map((letter, index) => (
                  <React.Fragment key={letter.id}>
                    {letter.letter.length === 1 ? (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                        
                      </Text>
                    ) : (
                      <Text style={styles.fontsize}>
                        {index % 5 === 0 && <Text>{'\n'}</Text>}
                        {'\t'}{letter.letter} : {Sanscript.t(letter.letter, 'hk', 'devanagari')}
                       
                      </Text>
                    )}
                  </React.Fragment>
                ))}
                </View> 
                
         </View>  
         {/* <View style={styles.row}>  
                 
                 
                 <View style={styles.steelblue} />  
                 <View style={styles.skyblue} /> 
                 <View style={styles.powderblue} /> 
         </View>   */}
      </View> 
      </ScrollView>

   );
 }


 const styles = StyleSheet.create({  
    container:{  
        flex: 5,  
        flexDirection: 'column',// set elements horizontally, try column.  
         height: '120%',
    },  
    row:{  
      height: '100%',
      flexDirection: 'row',// set elements horizontally, try column.  
  },  
    powderblue:{  
      flex:0.20, 
        height: '100%',  
        
        backgroundColor: 'powderblue',  
    },  
    skyblue:{  
      flex:0.25,   
        height: '80%',  
        backgroundColor: 'skyblue',  
    },  
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    steelblue:{  
      flex:0.7,  
        height: 30,
        backgroundColor: 'steelblue',  
    } ,
    fontsize:{
      fontSize:15.5,
    } 
})  

 export default SanskritViewLetterScreen;