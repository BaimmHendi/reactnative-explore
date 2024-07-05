import { View, Text } from "react-native";
import React from "react";
import { Button, Box, ButtonText } from "@gluestack-ui/themed";


const Settings = () => {
  return (
    <View>
      <Box>
        <Button style={{backgroundColor:"#1B9DED", flex:1, justifyContent:'center', alignContent:'center', }}>Sign-Out</Button>
      </Box>
    </View>
  );
};
export default Settings;
