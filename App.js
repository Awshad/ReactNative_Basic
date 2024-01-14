import {Text,Image,StyleSheet, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chat from "./components/Chat";

export default function App(){
  return(
      <SafeAreaView style={s.container}>
          <Text style={{textAlign:"center",fontSize:30,fontWeight:600}}>WhatsApp Chat Sample</Text>
          <Chat name="Awshad" message="Hello" img="https://reactnative.dev/img/tiny_logo.png"/>  
          <Chat name="John" message="Execuse Me" img="https://static.skillshare.com/uploads/users/233860335/user-image-large.jpg?1346349732"/>  
          <Chat name="Tony" message="Hi there!" img="https://www.nicepng.com/png/detail/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png"/>  
          <Chat name="James" message="Good morning!" img="https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png"/>  
      </SafeAreaView>      
    
  )
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#e9ecf5",
  },
});