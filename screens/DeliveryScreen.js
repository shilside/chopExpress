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
import { selectrestaurant } from "../slices/restaurantSlice";
import MapView, { Marker } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectrestaurant);

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
            borderColor="gray"
            color="#bcff52"
            indeterminate={true}
          />
          <Text className="mt-3 font-medium text-gray-400">
            Your order is being prepared by {restaurant.title}.
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="Standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          identifier="origin"
          pinColor="brown"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row space-x-5 items-center h-28">
        <Image
          source={require("../img/theOne.jpg")}
          className="w-12 h-12 bg-gray-300 p-4 rounded-full mt-2 ml-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-black text-lg">Joshua Njoku</Text>
          <Text className=" ml-0.5 font-extrabold text-[#7ba72567]">
            Dasher
          </Text>
        </View>
        <TouchableOpacity className=" bg-white  p-2 rounded-full shadow-sm shadow-gray-400 text-lg mr-5 font-bold">
          <AntDesign name="phone" size={22} color="black" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
