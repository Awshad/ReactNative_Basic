import {Text,Image,StyleSheet, View} from "react-native";
import { style } from "./Chat.style";

export default function Chat(props){
  return(
    <View style={style.chatBubble}>
      <View style={style.imageWrap}>
        <Image
          style={style.image}
          source={{
            uri: props.img,
          }}
        />
      </View>
    
    <View style={style.messageWrap}>
      <Text style={style.chatName}>{props.name}</Text>
      <Text style={style.chatMessage}>{props.message}</Text>
    </View>
  </View>  
  )
}
