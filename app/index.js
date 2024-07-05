import { StatusBar } from "expo-status-bar";
import {
  Text, 
  View } from "react-native";
import { Link } from "expo-router";
import tailwindConfig from "../tailwind.config";

export default function Home () {

  return (
    <View style={{flex:"1", justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}} >
      <Text style={{fontSize:50, fontStyle:'normal', fontFamily:'PlusJakartaSans-Bold'}}>Xion1</Text>
      <StatusBar style="auto" />
      <Link href='profile' style={{color:'blue'}}>Go to Home</Link>
    </View>
  );
};  