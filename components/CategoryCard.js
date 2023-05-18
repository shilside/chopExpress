import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className=" mr-3 items-center">
      <Image
        // we cant use className untl we install react-native-classname
        source={{
          uri: imgUrl,
        }}
        className="w-14 h-14"
      />
      <Text className="  text-black text-center text-[12px] mt-1 font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
