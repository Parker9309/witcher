import {StyleSheet} from 'react-native'

const COLORS = {
  TITLE: "#FFC700",
  BACKGROUND: "#363636"
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    color: COLORS.TITLE,
    fontSize: 80,
    fontFamily: "The-Witcher-Font",
    jutifyContent: "flex-start",
    marginTop: 70,
    marginBottom: 310,
    paddingBottom: 100,
    textAlign: "center"
  },
  content: {
    alignSelf: "center",
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 8,
    color: COLORS.TITLE,
    fontFamily: "The-Witcher-Font",
    fontSize: 30,
    justifyContent: "center",
    margin: 10,
    padding: 10,
    paddingBottom: 7
  },
  backgroundImage: {
    flex: 1
  },
  inputView: {
    backgroundColor: "#FFFAFA",
    borderRadius: 8,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  }
});