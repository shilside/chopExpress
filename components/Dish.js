import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Dish = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="items-center p-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className=" w-10 h-10"
      />
      <Text className="text-black text-center text-[11px] mt-1 font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Dish;
