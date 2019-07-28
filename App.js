import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PresentationalComponent from "./components/PresentationalComponents";
import Touchable from "./components/Touchable";
import Inputs from "./components/Inputs";
import ScrollViewExample from "./components/ScrollViewExample";
import HttpExample from "./components/HttpExample";

class App extends React.Component {
  state = {
    myState:
      "I will become an excellent, top  and world class programmer. It all takes determination, practice, hunger and practice and practtice and yet still practice"
  };

  updateState = () => {
    return this.setState({
      myState: "I have achieved this, more gains!!!"
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <PresentationalComponent myState={this.state.myState} updateState={this.updateState}/> */}
        {/* <Touchable/> */}
        {/* <Inputs/> */}
        {/* <ScrollViewExample/> */}
        {/* <Image
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"
          }}
          style={{ width: 200, height: 200 }}
        /> */}
        <HttpExample/>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
