import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  chatBubble: {
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  imageWrap: {
    flex: 1,
  },
  messageWrap: {
    flex: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  chatName: {
    fontWeight: "700",
    fontSize: 20,
  },
  chatMessage : {
    color:"grey", fontSize:15
  }
});