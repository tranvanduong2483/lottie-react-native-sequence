import LottieView from "lottie-react-native";
import React from "react";
import { View, Dimensions } from "react-native";

const { width: WIDTH_SCREEN } = Dimensions.get("screen");

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LottieView
        source={require("./animations/json_pin_jump.json")}
        style={{
          width: WIDTH_SCREEN,
          height: WIDTH_SCREEN,
          position: "absolute",
          zIndex: 1,
        }}
        autoPlay={true}
        loop={true}
        speed={1}
        onAnimationFinish={console.log(`Animation 1 is finished.`)}
      />

      <LottieView
        source={require("./animations/json_twitter_heart.json")}
        style={{
          width: WIDTH_SCREEN,
          height: WIDTH_SCREEN,
          position: "absolute",
          zIndex: 2,
        }}
        autoPlay={true}
        loop={true}
        speed={1}
        onAnimationFinish={console.log(`Animation 2 is finished.`)}
      />

      <LottieView
        source={require("./animations/json_water_melon.json")}
        style={{
          width: WIDTH_SCREEN,
          height: WIDTH_SCREEN,
          position: "absolute",
          zIndex: 3,
        }}
        autoPlay={true}
        loop={true}
        speed={1}
        onAnimationFinish={console.log(`Animation 3 is finished.`)}
      />
    </View>
  );
}
