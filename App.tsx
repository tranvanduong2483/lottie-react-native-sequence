import LottieView from "lottie-react-native";
import React, { useRef, useState } from "react";
import { Dimensions, View } from "react-native";

const { width: WIDTH_SCREEN } = Dimensions.get("screen");
const jsonArray = [
  require("./animations/json_pin_jump.json"),
  require("./animations/json_twitter_heart.json"),
  require("./animations/json_water_melon.json"),
];

export default function App() {
  const [index, setIndex] = useState(0);
  const lottieViewRef = useRef<LottieView>(null);

  const _onAnimationFinish = () => {
    setIndex(index + 1);
    lottieViewRef.current?.reset();
  };

  if (index >= jsonArray.length) {
    return null;
  }

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
        key={`LottieView${index}`}
        ref={lottieViewRef}
        source={jsonArray[index]}
        style={{
          width: WIDTH_SCREEN,
          height: WIDTH_SCREEN,
          position: "absolute",
          zIndex: 1,
        }}
        autoPlay={true}
        speed={1}
        loop={false}
        onAnimationFinish={_onAnimationFinish}
      />
    </View>
  );
}
