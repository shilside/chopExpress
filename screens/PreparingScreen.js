import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingScreen = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState("Processing Order");

  useEffect(() => {
    const statusTimeout = setTimeout(() => {
      setStatus("Confirming Order");
    }, 3000);

    const navigateTimeout = setTimeout(() => {
      navigation.navigate("Delivery");
    }, 6000);
  }, []);

  return (
    <SafeAreaView className=" bg-[#bcff52] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../img/fooddelivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-72 h-60"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-2xl mt-6 mb-3 text-[#5f811bc7] font-bold text-center"
      >
        {status}
      </Animatable.Text>

      <Animatable.View animation="slideInUp" iterationCount={1}>
        <Progress.Bar
          height={3}
          indeterminate={true}
          color="#5f811bc7"
          progress={0.3}
          width={200}
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default PreparingScreen;
