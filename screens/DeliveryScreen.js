import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector((state) => state.restaurant);

  return (
    <View className="bg-[#bcff52] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Feather name="x" size={24} color="#5f811bc7" />
          </TouchableOpacity>
          <Text className="font-light text-[#5f811bc7] text-lg">
            Order Help
          </Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400 font-bold mb-2">
                Estimated Arrival
              </Text>
              <Text className="text-gray-600 font-semibold text-4xl">
                45-55 min
              </Text>
            </View>
            <Image
              source={require("../img/food_delivery.gif")}
              className="w-24 h-20"
            />
          </View>
          <Progress.Bar
            size={50}
            borderColor="#5f811bc7"
            color="#bcff52"
            indeterminate={true}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
