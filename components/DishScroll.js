import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
} from "../slices/basketSlice";

const DishScroll = ({ id, imgUrl, name, desc, price }) => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(addToBasket({ id, name, desc, price, imgUrl }));
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  // so a div card wiith image first on top, then name, then desc, then price
  return (
    <View className="mr-4 rounded-lg">
      <View className="border max-h-[200px] w-[280px] border-gray-200 rounded-lg shadow-sm shadow-gray-400">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className=" w-[100%] h-[60%] rounded-t-md object-contain p-2"
        />
        <View className="px-3 pb-3 flex-row items-center justify-between bg-white border-t-[0.5px] pt-2 border-gray-200 max-h-[40%] ">
          <View className="">
            <Text className="font-bold text-[17px] text-black-600  pt-2">
              {name}
            </Text>

            <Text className="text-[12px] font-bold py-2   text-gray-400">
              ${price} (CAD)
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setIsSelected(!isSelected);
              if (!isSelected) {
                handleAddToBasket();
              } else if (items.length) {
                handleRemoveFromBasket();
              }
            }}
          >
            {isSelected ? (
              items.length ? (
                <AntDesign name="pluscircle" size={24} color="black" />
              ) : (
                <AntDesign name="pluscircleo" size={24} color="black" />
              )
            ) : (
              <AntDesign name="pluscircleo" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DishScroll;
