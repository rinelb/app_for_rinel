import * as React from 'react';
import { View, Text } from "react-native";
import Sanscript from '@indic-transliteration/sanscript';

const SanskritScreenTest= () => {
   return (
    <View>
      <Text>
        {Sanscript.t("a", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("a", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("a", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("a", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("a", 'hk', 'devanagari')}
      </Text>
      <Text>
        {Sanscript.t("a", 'hk', 'devanagari')}
      </Text>
    </View>

   );
 }

 export default SanskritScreenTest;