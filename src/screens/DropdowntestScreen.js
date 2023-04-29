import React, { useState } from 'react';
  import { StyleSheet, View,Text, Button } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import song from '../data/sanskrit/hanuman/song.json'
 
 



  const DropdowntestScreen = () => {
    const [value, setValue] = useState(null);
    const [dataArray, setDataArray] = useState([]);

    const NextLine = () => {
        setValue(value+1)
       
      };
    
      const LastLine = () => {
        setValue(value-1)
       
      };
    

    const data = song.map((item) => ({
        value: item.id,
        label: item.lyric
      }));
    
      const getCurrentLabel = () => {
        if (value !== null && data[value]) {
          return data[value].label;
        }
        return '';
      };

    return (
        <View>
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
          setValue(item.value);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
      />
      <View style={{  alignItems: 'center'}}>
            <Text><Button title="Last" onPress={LastLine}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button title="Next" onPress={NextLine}/></Text>
            <Text  >{data[value].label}</Text>
            <Text  >{value}</Text>

        </View>
        </View>
    );
  };






  const styles = StyleSheet.create({
    dropdown: {
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

  export default DropdowntestScreen;

 