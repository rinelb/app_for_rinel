import * as React from 'react';
import { View, Text } from "react-native";
import Sanscript from '@indic-transliteration/sanscript';

const SanskritViewLetterScreen= () => {
   return (
    <View>
      <Text>
        {Sanscript.t("a", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("e", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("i", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("o", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("u", 'hk', 'devanagari')}
      </Text>
    </View>

   );
 }

 export default SanskritViewLetterScreen;