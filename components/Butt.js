import React from "react";
import { Button } from "react-native";

const Butt = () => {
  const handlePress = () => false;
  return <Button onPress={handlePress} title="Red button!" color="red" />;
};

export default Butt;
