import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const LogoCard = ({
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
          imgUrl,
          address,
          logoImgUrl,
          shortDesc,
          dishes,
          long,
          lat,
        });
      }}
      className=" mb-1 mr-4 shadow-sm shadow-gray-300"
    >
      <Image
        source={{ uri: urlFor(logoImgUrl).url() }}
        className="w-16 h-16   rounded-full"
      />
      {/* <Text className="text-[10px] font-bold text-center mt-1  text-gray-400">
        {title}
      </Text> */}
    </TouchableOpacity>
  );
};

export default LogoCard;
