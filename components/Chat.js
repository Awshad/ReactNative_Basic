import {Text,Image,StyleSheet, View} from "react-native";

export default function Chat(props){
  return(
    <View style={s.mainStyle}>
    <Image
      style={s.profilePic}
      source={{
        uri: props.img,
      }}
    />
    <View style={s.chatRow}>
      <Text style={s.chatName}>{props.name}</Text>
      <Text style={s.chatMessage}>{props.message}</Text>
    </View>
  </View>  
  )
}

const s = StyleSheet.create({
    mainStyle : {
      display:"flex",flexDirection:"row",gap:10, margin:5,backgroundColor:"#d0d1d6",borderRadius:20
    },
    profilePic : {
      width:50,height:50,borderRadius:50
    },
    chatRow : {
      display:"flex",flexDirection:"column"
    },
    chatName : {
      color:"black", fontSize:20,fontWeight:"bold"
    },
    chatMessage : {
      color:"grey", fontSize:15
    }

});