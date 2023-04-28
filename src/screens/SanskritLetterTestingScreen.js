import * as React from 'react';
import { View, Text } from "react-native";
import Sanscript from '@indic-transliteration/sanscript';

const SanskritLetterTestingScreen= () => {
   return (
    <View>
      <Text>
        {Sanscript.t("b", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("b", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("b", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("b", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("b", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("b", 'hk', 'devanagari')}
      </Text>
    </View>

   );
 }

 export default SanskritLetterTestingScreen;