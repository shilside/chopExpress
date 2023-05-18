import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  title,
  rating,
  reviews,
  category,
  address,
  imgUrl,
  logoImgUrl,
  shortDesc,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          title,
          rating,
          reviews,
          category,
          address,
          imgUrl,
          logoImgUrl,
          shortDesc,
          dishes,
          long,
          lat,
        });
      }}
      className="bg-white rounded-b-xl shadow-2xl mb-3 mr-2"
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className=" w-64 h-32 rounded-t-md"
      />
      <View className="px-3 pb-4 mt-2">
        <Text className="font-bold text-[20px] text-gray-600 pt-2 ">
          {title}
        </Text>
        <View className="flex-row items-center space-x-1">
          <Text className="text-[13px] font-medium text-center  text-black">
            <Text className="text-green-500 font-bold text-[12px]">
              {rating}
            </Text>
            {/* Lets add some gold/yellow gradient to the star icon from AntDesign using maskedview and lineargradient */}
            {""} <AntDesign name="star" size={15} color="#e8bf17" />
            <Text className="text-[15px]"> &#8226; </Text>
            <Text>{category}</Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 py-1">
          <Text className="text-[12px] font-light text-gray-400">
            ({reviews}+)
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
